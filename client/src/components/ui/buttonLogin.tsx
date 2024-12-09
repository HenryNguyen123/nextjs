
'use client'

import { useRouter } from "next/navigation"


export default function ButtonLogin() {

    const router = useRouter()
    const handleRouter = () => {
        router.push('/login')
    }
    return (
        <>
            <button onClick={handleRouter}>chuyen trang login</button>
        </>
    )
}