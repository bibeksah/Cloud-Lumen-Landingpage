import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold tracking-tight text-[#133644] dark:text-[#9AD3F1] sm:text-5xl">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-[#133644] dark:text-[#9AD3F1]">Page Not Found</h2>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Sorry, we couldn't find the page you're looking for.
      </p>
      <div className="mt-8">
        <Link href="/">
          <Button className="bg-[#133644] hover:bg-[#133644]/90 dark:bg-[#9AD3F1] dark:text-[#133644]">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  )
}
