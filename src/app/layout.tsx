import Navbar from "@/components/ui/navbar/Navbar";
import "./globals.css";
import StoreProvider from "@/components/provider/Provider";
import CategoryDrawer from "@/components/category/category-drawer/CategoryDrawer";
import Input from "@/components/ui/input/Input";
import Link from "next/link";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <Navbar className="justify-between">
            <div className="flex items-center gap-x-2">
              <CategoryDrawer />
              <Link href="/">Recipe App</Link>
            </div>
            <Input placeholder="Search" />
            <div />
          </Navbar>
          <main className="container mx-auto min-h-screen w-10/12 py-5">
            {children}
          </main>
        </StoreProvider>
      </body>
    </html>
  );
}
