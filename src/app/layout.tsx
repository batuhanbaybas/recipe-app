"use client";

import "./globals.css";
import StoreProvider from "@/components/provider/Provider";
import React from "react";
import AppBar from "@/components/app-bar/Appbar";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <AppBar />
          <main className="container mx-auto min-h-screen w-10/12 py-5">
            {children}
          </main>
        </StoreProvider>
      </body>
    </html>
  );
}
