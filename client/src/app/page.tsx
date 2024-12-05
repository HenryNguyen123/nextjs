import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
     
      <Button style={{marginLeft: '100px'}}>click me</Button>
      <div className="w-[800px] h-[800px] bg-red-300">
        <Image 
          src='https://i.pinimg.com/736x/11/fd/76/11fd76012f2883ccf3fd56089961fb68.jpg'
          alt='hinh anh'
          width={400}
          height={400}
          quality={75}
        />
      </div>
    
    </>    
  );
}
