
"client server"
import { Geist, Azeret_Mono as Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/ui/theme-provider"
import { ClerkProvider } from "@clerk/nextjs"
import Header from "@/components/Header"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata = {
  title: "SkillMate AI",
  description: "a ai helper",
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background text-foreground`}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <Header />
            <main className="min-h-screen">{children}</main>
            <footer className="bg-muted py-12">
              <div className="container mx-auto px-4 text-center">
                <p>Made with ❤️ by Razal</p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}