import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import "./globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="max-w-6xl mx-auto px-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}