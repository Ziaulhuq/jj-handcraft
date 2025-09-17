export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="p-2 flex justify-center items-center h-screen">
      {children}
    </div>
  );
}
