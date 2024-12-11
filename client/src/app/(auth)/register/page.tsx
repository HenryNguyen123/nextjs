
import RegisterForm from "@/app/(auth)/register/registerForm";
import Link from "next/link";

export default function redister() {


    
    return (
        <>  <h1 className="text-xl font-semibold text-center">Đăng ký</h1>
            <div className="max-w-[600px]" style={{margin: '0px auto'}}>
                <RegisterForm />
            </div>
            <div><Link href={'/'}>Trang chủ</Link></div>
        </>
    )
}