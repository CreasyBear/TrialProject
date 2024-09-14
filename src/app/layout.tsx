"use client"

import { ThemeProvider } from 'next-themes'
import localFont from "next/font/local";
import "./globals.css";
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ErrorBoundary from '@/components/error-boundary'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
        <noscript>
          <div className="p-4 bg-yellow-100 text-yellow-800">
            This website requires JavaScript to function properly. Please enable JavaScript to continue.
          </div>
        </noscript>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ErrorBoundary fallback={<div>Something went wrong. Please try again later.</div>}>
            <Navbar />
            <main id="main-content">{children}</main>
            <Footer />
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  )
}
