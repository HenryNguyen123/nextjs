import Link from "next/link";

export default function login() {
    return (
        <>
            <div><Link href={'/'}>Home</Link></div>
            <div>login</div>
            <div><Link href={'/register'}>Nhấn để đăng ký</Link></div>
        
        
        </>

    ) 
}