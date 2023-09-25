import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-screen-md mx-auto">
          <h1 className="hover:text-gray-500 px-2 py-4 font-yd-sea text-2xl shadow-lg">
            <Link href="/">h662's Blog</Link>
          </h1>
          {children}
        </div>
      </body>
    </html>
  );
}
