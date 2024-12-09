export default function RegisterLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div>
            <h1 style={{color: 'red'}}>register tieu de</h1>
            {children}
        </div>
    );
  }