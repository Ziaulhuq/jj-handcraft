import Footer from "@/components/footer";
import Header from "@/components/Shared/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="px-3 sm:px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
