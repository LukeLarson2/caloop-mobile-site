import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "./_components/NavBar";

const inter = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Caloop Mobile LLC",
  description: "Leveraging AI for modern web and mobile app solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <NavBar />
        </header>
        {children}
      </body>
    </html>
  );
}
