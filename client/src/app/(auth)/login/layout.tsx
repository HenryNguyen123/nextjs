import { ModeToggle } from "@/components/ModeToggle";

export default function LoginLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div>
            <ModeToggle></ModeToggle>
            <h1 style={{color: 'red'}}>login</h1>
            {children}
        </div>
    );
  }