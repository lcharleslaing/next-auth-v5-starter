import NavBar from "@/components/NavBar";
import { Toaster } from "@/components/ui/toaster";
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | Next-Auth V5 Tutorial",
    absolute: "Next-Auth V5 tutorial",
  },
  description:
    "Learn how to use Auth.js v5 in Next.js with custom roles, caching, and more!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add other head elements here */}
      </head>
      <body className={inter.className}>
        <SessionProvider>
          <NavBar />
          {children}
          <Toaster />
        </SessionProvider>
      </body>
    </html>
  );
}
