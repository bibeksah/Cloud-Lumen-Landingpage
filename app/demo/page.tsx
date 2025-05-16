import { Button } from "@/components/ui/button"

export default function DemoPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl space-y-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-[#133644] sm:text-5xl">Header Demo Page</h1>
        <p className="text-xl text-gray-600">
          Scroll down to see the header transition from its initial state to the compact scrolled state. Then scroll
          back up to see the updated header behavior.
        </p>
        <Button className="bg-[#9AD3F1] text-[#133644] hover:bg-[#9AD3F1]/90">Scroll Down</Button>

        {/* Spacer content to enable scrolling */}
        <div className="mt-32 space-y-32">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="rounded-lg bg-gray-100 p-12">
              <h2 className="text-2xl font-bold text-[#133644]">Section {i + 1}</h2>
              <p className="mt-4 text-gray-600">
                This is a placeholder section to demonstrate the header's scroll behavior. As you scroll down, the
                header will transition to its compact state. When you scroll back to the top, the navigation will be
                positioned on the left with the logo in the center.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
