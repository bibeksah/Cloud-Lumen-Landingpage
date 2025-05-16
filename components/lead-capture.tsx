"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function LeadCapture() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    solution: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, solution: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would send the data to a server
    console.log("Form submitted:", formData)
    alert("Thank you for your interest! We'll be in touch soon.")
    setFormData({ name: "", company: "", email: "", solution: "" })
  }

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#133644] dark:text-white sm:text-4xl">
            Ready to transform your tech stack?
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Get in touch with our experts to discuss your specific needs
          </p>
        </div>
        <div className="mt-12 rounded-xl bg-[#133644]/5 p-8 dark:bg-gray-800 md:p-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-[#133644] dark:text-white">Let's get started</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Fill out the form and one of our cloud solution experts will get back to you within 24 hours.
              </p>
              <div className="mt-8 flex space-x-4">
                <Button className="bg-[#9AD3F1] text-[#0A2029] hover:bg-[#9AD3F1]/90 dark:bg-[#7BBFE6]">
                  Get Started Now
                </Button>
                <Button
                  variant="outline"
                  className="border-[#133644] text-[#133644] dark:border-[#7BBFE6] dark:text-[#7BBFE6]"
                >
                  Book a Free Consultation
                </Button>
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-800 dark:text-gray-200">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-gray-800 dark:text-gray-200">
                    Company
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Your company"
                    value={formData.company}
                    onChange={handleChange}
                    className="placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-800 dark:text-gray-200">
                    Business Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="solution" className="text-gray-800 dark:text-gray-200">
                    Solution of Interest
                  </Label>
                  <Select onValueChange={handleSelectChange} value={formData.solution}>
                    <SelectTrigger className="dark:border-gray-700 dark:bg-gray-800 dark:text-white">
                      <SelectValue placeholder="Select a solution" />
                    </SelectTrigger>
                    <SelectContent className="dark:border-gray-700 dark:bg-gray-800">
                      <SelectItem value="cloud-computing">Cloud Computing</SelectItem>
                      <SelectItem value="data-center">Data Center as a Service</SelectItem>
                      <SelectItem value="disaster-recovery">Disaster Recovery and Backup</SelectItem>
                      <SelectItem value="security">Security as a Service</SelectItem>
                      <SelectItem value="managed-services">Managed Services</SelectItem>
                      <SelectItem value="software-solutions">Software Solutions</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#133644] hover:bg-[#133644]/90 dark:bg-[#7BBFE6] dark:text-[#0A2029]"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
