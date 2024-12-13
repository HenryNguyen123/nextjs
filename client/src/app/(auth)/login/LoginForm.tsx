"use client"
 
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import envConfig from "@/config"
import { Result } from "postcss"
import { useToast } from "@/hooks/use-toast"



export default function LoginFrom() {

    const { toast } = useToast()

    const formSchema = z.object({
        email: z.string().min(2).max(50),
        password: z.string().min(6).max(100)
      }).strict()
    
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
       defaultValues: {
          email: "",
          password: ''
      },
     })
    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      try {
        const result = await fetch(`${envConfig.NEXT_PUBLIC_API_ENDPOINT}/auth/login`, {
            body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            }).then(async (res) => {
                const payload = await res.json()
                const  data = {
                    status: res.status,
                    payload
                }
                if (!res.ok) {
                    throw data
                }
                return data
            })
            toast({
                description: result.payload.message,
            })
            console.log(result)
      } catch (error: any) {
        const errors = error.payload.errors as {
            field: string
            message: string
        } []
        const status = error.status as number
        if (status === 422) {
            errors.forEach((error) => {
                form.setError(error.field as ('email' | 'password') , {
                    type: 'server',
                    message: error.message
                })
            });
        } else {
            toast({
                title: "Lỗi",
                description: error.payload.message,
                variant:  "destructive"
              })
        }
      }

     
    }


    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 max-w-[600px] ">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>email</FormLabel>
                            <FormControl>
                                <Input placeholder="email" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>password</FormLabel>
                            <FormControl>
                                <Input placeholder="password" type="password"{...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full">Submit</Button>
                </form>
            </Form>
        
        
        
        </>
    )

}