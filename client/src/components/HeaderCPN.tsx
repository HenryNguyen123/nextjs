import { ModeToggle } from "@/components/ModeToggle";
import Link from "next/link";


export default function HeaderCPN() {

    return (
        <>
            <ModeToggle/>
            <ul>
                <li><Link href={'/login'}>Đăng Nhập</Link></li>
                <li><Link href={'/register'}>Đăng Ký</Link></li>
            </ul>

        </>
    )
}