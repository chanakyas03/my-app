import type { Metadata } from "next";
import "./globals.css";
import MainLayout from "./components/templates/Mainlayout";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


export const metadata: Metadata = {
  title: "Chanakya Sharma",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="en">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
    
  );
}
