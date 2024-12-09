
import ButtonLogin from "@/components/ui/buttonLogin";
import Link from "next/link";
import { redirect } from 'next/navigation'

export default function Home() {
  const isAut = false
  if(!isAut) {
    redirect('/login')
  }
  
  return (
    <>
      <main>
        <ul>
          <li>
            <Link href={'/login'}>login</Link>
          </li>
          <li>
            <Link href={'/register'}>Register</Link>
          </li>
          <ButtonLogin></ButtonLogin>
        </ul>
      </main>
    
    </>
)
}
