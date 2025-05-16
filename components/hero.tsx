import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#133644] py-16 sm:py-24">
      <div className="absolute inset-0 opacity-10">
        <Image src="/abstract-digital-network.png" alt="Background Pattern" fill className="object-cover" priority />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Modern Software. <br />
              Smarter Work. <br />
              <span className="text-[#9AD3F1]">Scalable Infrastructure.</span>
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-gray-100">
              From office productivity to enterprise-grade cloud and security – we help businesses scale with the best
              global SaaS, IaaS, and DR solutions.
            </p>
            <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button size="lg" className="bg-[#9AD3F1] text-[#0A2029] hover:bg-[#9AD3F1]/90">
                Get a Custom Quote
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Talk to a Solution Expert
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[300px] w-full max-w-lg sm:h-[400px] lg:h-[450px]">
              <Image src="/placeholder-nok2p.png" alt="Cloud Infrastructure" fill className="object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
