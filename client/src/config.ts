import { z } from "zod";


const configSchema = z.object({
    NEXT_PUBLIC_API_ENDPOINT: z.string()
})

const configPoject = configSchema.safeParse({
    NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT  
})

if (!configPoject.success) {
    console.error(configPoject.error.issues)
    throw new Error('Các giá trị khai báo trong file .env không hợp lệ')
    console.log('Các giá trị khai báo trong file .env không hợp lệ')
  }

const envConfig = configPoject.data
export default envConfig