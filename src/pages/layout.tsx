import React from "react";
import Link from "next/link";
import "../globals.css";
import StoreProvider from "./components/StoreProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <StoreProvider>
        <nav className="p-4 bg-gray-800 text-white">
          <Link href="/">
            <span className="mr-4 cursor-pointer">Home</span>
          </Link>
          <Link href="/about">
            <span className="mr-4 cursor-pointer">About</span>
          </Link>
          <Link href="/contact">
            <span className="cursor-pointer">Contact</span>
          </Link>
        </nav>
        <main className="p-4">{children}</main>
      </StoreProvider>
    </div>
  );
}
