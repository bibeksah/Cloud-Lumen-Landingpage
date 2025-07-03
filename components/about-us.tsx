import Image from "next/image"

export default function AboutUs() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="flex items-center justify-center">
            <div className="relative h-[300px] w-full max-w-md overflow-hidden rounded-xl sm:h-[400px]">
              <Image src="/placeholder-4u35r.png" alt="Cloud Lumen Team" fill className="object-cover" />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#133644] sm:text-4xl">About Us</h2>
            <p className="mt-6 text-lg text-gray-600">
              Cloud Lumen is a cloud solutions and software distribution firm enabling smarter IT purchasing for
              enterprises. We combine top-tier vendor relationships with local support.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              Our mission is to simplify the complex world of cloud technology, making it accessible and beneficial for
              businesses of all sizes. With our expertise and partnerships with leading technology providers, we deliver
              tailored solutions that drive growth and innovation.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-[#133644]">Our Approach</h3>
              <p className="mt-2 text-gray-600">
                We take a consultative approach, working closely with our clients to understand their unique challenges
                and objectives. This enables us to design and implement solutions that not only meet their current needs
                but also support their future growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
