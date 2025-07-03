import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ServiceNotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold tracking-tight text-[#133644] dark:text-[#9AD3F1] sm:text-5xl">
        Service Not Found
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Sorry, we couldn't find the service you're looking for.
      </p>
      <div className="mt-8">
        <Link href="/services">
          <Button className="bg-[#133644] hover:bg-[#133644]/90 dark:bg-[#9AD3F1] dark:text-[#133644]">
            Browse All Services
          </Button>
        </Link>
      </div>
    </div>
  )
}
