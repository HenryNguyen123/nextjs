export default function AuthLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div>
            <h1 style={{color: 'red'}}>auth tieu de</h1>
            {children}
        </div>
    );
  }