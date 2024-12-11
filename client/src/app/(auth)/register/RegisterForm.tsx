"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { z } from "zod"
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
import { error } from "console"
import envConfig from "@/config"
import { useEffect } from "react"
// import envConfig from "@/config"

// const formSchema = z.object({
//   name: z.string().min(2).max(50),
// })

// //////
const registerBody = z.object({
        name: z.string().trim().min(2).max(256),
        email: z.string().email(),
        password: z.string().min(6).max(100),
        confirmPassword: z.string().min(6).max(100)
    })
    .strict()
    .superRefine(({confirmPassword, password}, ctx) =>{
        if(confirmPassword !== password) {
            ctx.addIssue({
                code: 'custom',
                message: 'Mật khẩu không khơp',
                path: ['confirmPassword']
            })
        }
    })


export default function RegisterForm() {

    type formValues = z.infer<typeof registerBody>


    // 1. Define your form.
    const form = useForm<formValues>({
        resolver: zodResolver(registerBody),
        defaultValues: {
        name: "",
        email: '',
        password: '',
        confirmPassword: '',
        },
    })
    // console.log(envConfig.NEXT_PUBLIC_API_ENDPOINT + ' ket qua')

    // 2. Define a submit handler.
    async function onSubmit(values: formValues) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        // console.log(values)
        // console.log(process.env.NEXT_PUBLIC_API_ENDPOINT + '  envConfig.NEXT_PUBLIC_API_ENDPOINT')
        const result = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/register`,{
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then((res) => res.json())
        console.log(result)
    }
    
    return (
        <>
            <div>
                <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit, (error)=> {console.log(error)})} className="space-y-2 max-w-[600px] flex-shrink-0 w-full">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Tên</FormLabel>
                            <FormControl>
                                <Input placeholder="Nhập tên đăng nhập" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>email</FormLabel>
                            <FormControl>
                                <Input placeholder="Nhập email" type="email"{...field} />
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
                                <Input placeholder="Nhập password" type="password"{...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>confirmPassword</FormLabel>
                            <FormControl>
                                <Input placeholder="Nhập lại password" type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="!mt-8 w-full">Submit</Button>
                </form>
                </Form>
            </div>
        </>
    )
}