import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Layout({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
