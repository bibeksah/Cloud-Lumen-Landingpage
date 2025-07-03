"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Mail, Phone, MapPin, Clock, Send, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { servicesData } from "@/lib/services-data"

const offices = [
  {
    city: "Pune, Maharashtra",
    address: "Survey No 45, VTP Blue waters, mahalunge, Pimpri Chinchwad - 411045",
    phone: "+91 736-702-1509",
    email: "contact@cloudlumen.in",
    hours: "Monday-Friday: 9AM-6PM ",
    image: "/images/offices/san-francisco.png",
  },
]

// Validation functions
const validateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

const validatePhone = (phone: string) => {
  // Allow empty phone (it's optional) or validate if provided
  if (!phone) return true
  // Simple validation for demonstration - accepts various formats
  const re = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/
  return re.test(phone.replace(/\s/g, ""))
}

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    subService: "",
    message: "",
  })

  const [availableSubServices, setAvailableSubServices] = useState<Array<{ id: string; title: string }>>([])
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  // Update available sub-services when service changes
  useEffect(() => {
    if (formData.service) {
      const selectedService = servicesData.find((service) => service.id === formData.service)
      if (selectedService) {
        setAvailableSubServices(selectedService.subServices)
      } else {
        setAvailableSubServices([])
      }
      // Reset sub-service when service changes
      setFormData((prev) => ({ ...prev, subService: "" }))
    } else {
      setAvailableSubServices([])
    }
  }, [formData.service])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    // Required fields
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!validateEmail(formData.email)) newErrors.email = "Please enter a valid email address"
    if (!formData.company.trim()) newErrors.company = "Company name is required"
    if (formData.phone && !validatePhone(formData.phone)) newErrors.phone = "Please enter a valid phone number"
    if (!formData.message.trim()) newErrors.message = "Message is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError(null) // Reset previous errors
    setSubmitSuccess(false) // Reset previous success

    if (validateForm()) {
      setIsSubmitting(true)

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })

        const result = await response.json()

        if (response.ok) {
          setSubmitSuccess(true)
          setFormData({
            name: "",
            email: "",
            company: "",
            phone: "",
            service: "",
            subService: "",
            message: "",
          })
          // Reset success message after 5 seconds
          setTimeout(() => {
            setSubmitSuccess(false)
          }, 5000)
        } else {
          setSubmitError(result.error || "An unexpected error occurred. Please try again.")
        }
      } catch (error) {
        console.error("Submission error:", error)
        setSubmitError("Failed to send message. Please check your internet connection and try again.")
      } finally {
        setIsSubmitting(false)
      }
    }
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

              {submitSuccess && (
                <div className="mt-6 rounded-md bg-green-50 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-green-800">
                        Thank you for your message! We'll be in touch soon.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {submitError && (
                <div className="mt-6 rounded-md bg-red-50 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <AlertCircle className="h-5 w-5 text-red-400" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-red-800">{submitError}</p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center">
                      Full Name <span className="ml-1 text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? "border-red-500" : ""}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center">
                      Email <span className="ml-1 text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="flex items-center">
                      Company <span className="ml-1 text-red-500">*</span>
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your company"
                      value={formData.company}
                      onChange={handleChange}
                      className={errors.company ? "border-red-500" : ""}
                    />
                    {errors.company && (
                      <p className="text-sm text-red-500 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.company}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="(123) 456-7890"
                      value={formData.phone}
                      onChange={handleChange}
                      className={errors.phone ? "border-red-500" : ""}
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-500 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Service Selection */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="service">Service (Optional)</Label>
                    <Select value={formData.service} onValueChange={(value) => handleSelectChange("service", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">None</SelectItem>
                        {servicesData.map((service) => (
                          <SelectItem key={service.id} value={service.id}>
                            {service.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Sub-Service Selection - Only enabled if a service is selected */}
                  <div className="space-y-2">
                    <Label htmlFor="subService">Sub-Service (Optional)</Label>
                    <Select
                      value={formData.subService}
                      onValueChange={(value) => handleSelectChange("subService", value)}
                      disabled={!formData.service || availableSubServices.length === 0}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a sub-service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">None</SelectItem>
                        {availableSubServices.map((subService) => (
                          <SelectItem key={subService.id} value={subService.id}>
                            {subService.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="flex items-center">
                    Message <span className="ml-1 text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? "border-red-500" : ""}
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.message}
                    </p>
                  )}
                </div>
                <Button type="submit" className="w-full bg-[#133644] hover:bg-[#133644]/90" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </>
                  )}
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
                      <span className="text-sm text-white dark:text-white">
                      info@cloudlumen.in 
                      <br />
                      sales@cloudlumen.in
                      <br />
                      cloudlumen9@gmail.com
                      </span>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="mr-3 h-6 w-6 flex-shrink-0 text-[#9AD3F1]" />
                  <div>
                    <h3 className="font-semibold text-[#133644]">Phone</h3>
                      <span className="text-sm text-white dark:text-white">
                      +91 736-702-1509
                      <br />
                      +91 726-094-7820
                      </span>
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
                  <a href="https://www.facebook.com/share/1CGjSzZice/?mibextid=wwXIfr" className="text-gray-600 hover:text-[#9AD3F1]">
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
            <p className="mt-4 text-lg text-gray-600">Visit us at one of our locations</p>
          </div>
          <div className="flex item-center justify-center gap-x-16 mt-12">
            {offices.map((office) => (
              <Card key={office.city} className="overflow-hidden border-none shadow-lg">
                <div className="relative h-48 w-full">
                  <Image
                    src={office.image || "/placeholder.svg?height=192&width=384&query=office"}
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

    </main>
  )
}
