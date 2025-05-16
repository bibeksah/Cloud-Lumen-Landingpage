"use client"

import { useState } from "react"
import Image from "next/image"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"

const offices = [
  {
    city: "San Francisco",
    address: "123 Tech Plaza, Suite 400, San Francisco, CA 94105",
    phone: "+1 (415) 555-1234",
    email: "sf@cloudlumen.com",
    hours: "Monday-Friday: 9AM-6PM PT",
    image: "/images/offices/san-francisco.png",
  },
  {
    city: "New York",
    address: "456 Cloud Tower, 22nd Floor, New York, NY 10022",
    phone: "+1 (212) 555-5678",
    email: "nyc@cloudlumen.com",
    hours: "Monday-Friday: 9AM-6PM ET",
    image: "/images/offices/new-york.png",
  },
  {
    city: "London",
    address: "78 Tech Square, Canary Wharf, London E14 5HQ, UK",
    phone: "+44 20 5555 1234",
    email: "london@cloudlumen.com",
    hours: "Monday-Friday: 9AM-6PM GMT",
    image: "/images/offices/london.png",
  },
]

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, subject: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real implementation, this would send the data to a server
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll be in touch soon.")
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#133644] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">Contact Us</h1>
            <p className="mt-6 text-lg text-gray-300">
              Get in touch with our team to discuss how Cloud Lumen can help your business
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-[#133644] sm:text-3xl">Get in Touch</h2>
              <p className="mt-4 text-lg text-gray-600">
                Fill out the form below and one of our cloud solution experts will get back to you within 24 hours.
              </p>
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="(123) 456-7890"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select onValueChange={handleSelectChange} value={formData.subject}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general-inquiry">General Inquiry</SelectItem>
                      <SelectItem value="sales">Sales</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                      <SelectItem value="careers">Careers</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-[#133644] hover:bg-[#133644]/90">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#133644] sm:text-3xl">Contact Information</h2>
              <p className="mt-4 text-lg text-gray-600">
                You can reach us through the following channels or visit one of our offices.
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <Mail className="mr-3 h-6 w-6 flex-shrink-0 text-[#9AD3F1]" />
                  <div>
                    <h3 className="font-semibold text-[#133644]">Email</h3>
                    <p className="mt-1 text-gray-600">info@cloudlumen.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="mr-3 h-6 w-6 flex-shrink-0 text-[#9AD3F1]" />
                  <div>
                    <h3 className="font-semibold text-[#133644]">Phone</h3>
                    <p className="mt-1 text-gray-600">+1 (800) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="mr-3 h-6 w-6 flex-shrink-0 text-[#9AD3F1]" />
                  <div>
                    <h3 className="font-semibold text-[#133644]">Support Hours</h3>
                    <p className="mt-1 text-gray-600">24/7 for critical issues</p>
                    <p className="text-gray-600">Monday-Friday: 9AM-6PM (Local Time) for general inquiries</p>
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <h3 className="text-xl font-bold text-[#133644]">Follow Us</h3>
                <div className="mt-4 flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-[#9AD3F1]">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-[#9AD3F1]">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-[#9AD3F1]">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="bg-[#133644]/5 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-[#133644] sm:text-3xl">Our Offices</h2>
            <p className="mt-4 text-lg text-gray-600">Visit us at one of our global locations</p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {offices.map((office) => (
              <Card key={office.city} className="overflow-hidden border-none shadow-lg">
                <div className="relative h-48 w-full">
                  <Image
                    src={office.image || "/placeholder.svg"}
                    alt={`${office.city} Office`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#133644]">{office.city}</h3>
                  <div className="mt-4 space-y-3">
                    <div className="flex items-start">
                      <MapPin className="mr-2 h-5 w-5 flex-shrink-0 text-[#9AD3F1]" />
                      <p className="text-gray-600">{office.address}</p>
                    </div>
                    <div className="flex items-start">
                      <Phone className="mr-2 h-5 w-5 flex-shrink-0 text-[#9AD3F1]" />
                      <p className="text-gray-600">{office.phone}</p>
                    </div>
                    <div className="flex items-start">
                      <Mail className="mr-2 h-5 w-5 flex-shrink-0 text-[#9AD3F1]" />
                      <p className="text-gray-600">{office.email}</p>
                    </div>
                    <div className="flex items-start">
                      <Clock className="mr-2 h-5 w-5 flex-shrink-0 text-[#9AD3F1]" />
                      <p className="text-gray-600">{office.hours}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-[#133644] sm:text-3xl">Find Us</h2>
            <p className="mt-4 text-lg text-gray-600">Our headquarters is located in the heart of San Francisco</p>
          </div>
          <div className="mt-12 overflow-hidden rounded-xl">
            <div className="relative h-[400px] w-full">
              <Image src="/images/map.png" alt="Map location" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
