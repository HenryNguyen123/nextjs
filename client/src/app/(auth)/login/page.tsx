import LoginFrom from "@/app/(auth)/login/LoginForm";
import Link from "next/link";

export default function login() {
    return (
        <>
            <div><Link href={'/'}>Home</Link></div>
            <h1 className="text-xl text-center font-semibold">Đăng Nhập</h1>
            <div className="max-w-[600px]" style={{margin: '0px auto'}}>
                <LoginFrom />
            </div>
            <div><Link href={'/register'}>Nhấn để đăng ký</Link></div>
        
        
        </>

    ) 
}