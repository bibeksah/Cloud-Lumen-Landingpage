"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import { ArrowRight, Upload, Check, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const benefits = [
  {
    title: "Competitive Compensation",
    description: "We offer competitive salaries and equity packages to attract and retain top talent.",
  },
  {
    title: "Comprehensive Healthcare",
    description: "Full medical, dental, and vision coverage for employees and their dependents.",
  },
  {
    title: "Flexible Work Arrangements",
    description: "Remote and hybrid work options to support work-life balance.",
  },
  {
    title: "Professional Development",
    description: "Budget for conferences, courses, and certifications to support your growth.",
  },
  {
    title: "Generous PTO",
    description: "Flexible paid time off policy, plus paid holidays and volunteer days.",
  },
  {
    title: "Retirement Benefits",
    description: "401(k) plan with company matching to help you save for the future.",
  },
]

export default function CareersClientPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  })
  const [file, setFile] = useState<File | null>(null)
  const [fileError, setFileError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitApiError, setSubmitApiError] = useState<string | null>(null)

  const formSectionRef = useRef<HTMLDivElement>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    setFileError(null)

    if (!selectedFile) {
      setFile(null)
      return
    }

    // Check file type
    if (selectedFile.type !== "application/pdf") {
      setFileError("Please upload a PDF file")
      setFile(null)
      return
    }

    // Check file size (5MB = 5 * 1024 * 1024 bytes)
    if (selectedFile.size > 5 * 1024 * 1024) {
      setFileError("File size must be less than 5MB")
      setFile(null)
      return
    }

    setFile(selectedFile)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})
    setSubmitApiError(null) // Reset previous API errors
    setIsSubmitted(false) // Reset previous submission status

    // ... (keep existing validation logic for newErrors)
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required"
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    }
    if (!formData.position.trim()) {
      newErrors.position = "Position of interest is required"
    }
    if (!formData.message.trim()) {
      newErrors.message = "Cover letter/additional information is required"
    }
    if (!file) {
      newErrors.cv = "Please upload your CV"
    } else if (file.type !== "application/pdf") {
      newErrors.cv = "Please upload a PDF file" // Redundant if fileError is handled, but good for direct submit
      setFileError("Please upload a PDF file")
    } else if (file.size > 5 * 1024 * 1024) {
      newErrors.cv = "File size must be less than 5MB" // Redundant
      setFileError("File size must be less than 5MB")
    }

    if (Object.keys(newErrors).length > 0 || fileError) {
      setErrors(newErrors)
      // If fileError exists but not in newErrors.cv, add it for display consistency
      if (fileError && !newErrors.cv) {
        setErrors((prev) => ({ ...prev, cv: fileError }))
      }
      return
    }

    setIsSubmitting(true)

    const submissionFormData = new FormData()
    submissionFormData.append("name", formData.name)
    submissionFormData.append("email", formData.email)
    submissionFormData.append("phone", formData.phone)
    submissionFormData.append("position", formData.position)
    submissionFormData.append("message", formData.message)
    if (file) {
      submissionFormData.append("resume", file)
    }

    try {
      const response = await fetch("/api/careers", {
        method: "POST",
        body: submissionFormData, // FormData handles Content-Type
      })

      const result = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          position: "",
          message: "",
        })
        setFile(null)
        setFileError(null)
      } else {
        setSubmitApiError(result.error || "An unexpected error occurred. Please try again.")
      }
    } catch (error) {
      console.error("Submission error:", error)
      setSubmitApiError("Failed to submit application. Please check your internet connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollToForm = () => {
    formSectionRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#133644] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">Join Our Team</h1>
              <p className="mt-6 text-lg text-gray-300">
                At Cloud Lumen, we're building the future of cloud technology. Join us in our mission to empower
                businesses with innovative cloud solutions.
              </p>
              <div className="mt-8">
                <Button className="bg-[#9AD3F1] text-[#133644] hover:bg-[#9AD3F1]/90" onClick={scrollToForm}>
                  Submit Your CV <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[300px] w-full max-w-lg overflow-hidden rounded-xl sm:h-[400px]">
                <Image src="/images/careers-team.png" alt="Cloud Lumen Team" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-[#133644] dark:text-[#9AD3F1] sm:text-3xl">Our Culture</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              We foster a collaborative, innovative, and inclusive environment where everyone can thrive
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/images/culture-collaboration.png"
                alt="Team Collaboration"
                width={400}
                height={300}
                className="h-auto w-full"
              />
              <div className="mt-4">
                <h3 className="text-xl font-bold text-[#133644] dark:text-[#9AD3F1]">Collaboration</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  We believe in the power of teamwork and cross-functional collaboration to solve complex problems.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/images/culture-innovation.png"
                alt="Innovation"
                width={400}
                height={300}
                className="h-auto w-full"
              />
              <div className="mt-4">
                <h3 className="text-xl font-bold text-[#133644] dark:text-[#9AD3F1]">Innovation</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  We encourage creative thinking and embrace new technologies to stay at the forefront of the industry.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/images/culture-diversity.png"
                alt="Diversity and Inclusion"
                width={400}
                height={300}
                className="h-auto w-full"
              />
              <div className="mt-4">
                <h3 className="text-xl font-bold text-[#133644] dark:text-[#9AD3F1]">Diversity & Inclusion</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  We value diverse perspectives and create an inclusive environment where everyone feels welcome.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#133644]/5 py-16 sm:py-24 dark:bg-gray-800/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-[#133644] dark:text-[#9AD3F1] sm:text-3xl">Benefits & Perks</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              We offer competitive benefits to support our team members' well-being and growth
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <Card
                key={benefit.title}
                className="border-2 border-gray-100 transition-all hover:border-[#9AD3F1]/50 hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#133644] dark:text-[#9AD3F1]">{benefit.title}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities Section */}
      <section id="opportunities" className="py-16 sm:py-24" ref={formSectionRef}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-[#133644] dark:text-[#9AD3F1] sm:text-3xl">Career Opportunities</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Join our team and help shape the future of cloud technology
            </p>
          </div>

          <div className="mt-12">
            <Card className="border-2 border-gray-100 dark:border-gray-700 dark:bg-gray-800">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#9AD3F1]/20 mb-4">
                    <AlertCircle className="h-8 w-8 text-[#9AD3F1]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#133644] dark:text-[#9AD3F1] mb-4">No Current Openings</h3>
                  <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                    While we do not have any open positions at the moment, we are always eager to connect with emerging
                    talent. If you're interested in future opportunities, feel free to send us your CV for
                    consideration.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CV Upload Form */}
          <div className="mt-12">
            <Card className="border-2 border-gray-100 dark:border-gray-700 dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-center text-[#133644] dark:text-[#9AD3F1]">Submit Your CV</CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="flex flex-col items-center text-center p-8">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
                      <Check className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-[#133644] dark:text-[#9AD3F1] mb-4">Thank You!</h3>
                    <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                      We've received your CV and will keep it on file for future opportunities. We'll reach out if
                      there's a position that matches your skills and experience.
                    </p>
                    <Button
                      className="mt-6 bg-[#133644] hover:bg-[#133644]/90 dark:bg-[#9AD3F1] dark:text-[#133644]"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Submit Another Application
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      <span className="text-red-500">*</span> All fields are required
                    </p>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">
                          Full Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          className={`dark:border-gray-600 dark:bg-gray-700 dark:text-white ${errors.name ? "border-red-500" : ""}`}
                        />
                        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
                          Email <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          className={`dark:border-gray-600 dark:bg-gray-700 dark:text-white ${errors.email ? "border-red-500" : ""}`}
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                      </div>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-gray-700 dark:text-gray-300">
                          Phone Number <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Your phone number"
                          className={`dark:border-gray-600 dark:bg-gray-700 dark:text-white ${errors.phone ? "border-red-500" : ""}`}
                        />
                        {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="position" className="text-gray-700 dark:text-gray-300">
                          Position of Interest <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="position"
                          name="position"
                          value={formData.position}
                          onChange={handleInputChange}
                          placeholder="What role are you interested in?"
                          className={`dark:border-gray-600 dark:bg-gray-700 dark:text-white ${errors.position ? "border-red-500" : ""}`}
                        />
                        {errors.position && <p className="mt-1 text-sm text-red-500">{errors.position}</p>}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">
                        Cover Letter / Additional Information <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us a bit about yourself and why you're interested in working with us"
                        rows={5}
                        className={`dark:border-gray-600 dark:bg-gray-700 dark:text-white ${errors.message ? "border-red-500" : ""}`}
                      />
                      {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cv" className="text-gray-700 dark:text-gray-300">
                        Upload CV (PDF, max 5MB) <span className="text-red-500">*</span>
                      </Label>
                      <div className="mt-1 flex items-center">
                        <label
                          htmlFor="cv"
                          className={`group flex w-full cursor-pointer flex-col items-center rounded-md border-2 border-dashed ${
                            errors.cv
                              ? "border-red-500"
                              : "border-gray-300 hover:border-[#9AD3F1] dark:border-gray-600 dark:hover:border-[#9AD3F1]"
                          } px-6 py-8 text-center`}
                        >
                          <Upload
                            className={`h-10 w-10 ${errors.cv ? "text-red-500" : "text-gray-400 group-hover:text-[#9AD3F1]"}`}
                          />
                          <span className="mt-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                            {file ? file.name : "Click to upload your CV"}
                          </span>
                          <span className="mt-1 block text-xs text-gray-500 dark:text-gray-400">PDF up to 5MB</span>
                          <input
                            id="cv"
                            name="cv"
                            type="file"
                            accept=".pdf"
                            onChange={handleFileChange}
                            className="sr-only"
                          />
                        </label>
                      </div>
                      {errors.cv && <p className="mt-1 text-sm text-red-500">{errors.cv}</p>}
                      {fileError && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{fileError}</p>}
                      {file && (
                        <p className="mt-1 flex items-center text-sm text-green-600 dark:text-green-400">
                          <Check className="mr-1 h-4 w-4" /> File uploaded successfully
                        </p>
                      )}
                    </div>
                    {submitApiError && (
                      <div className="my-4 rounded-md bg-red-50 p-3">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <AlertCircle className="h-5 w-5 text-red-400" />
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-red-800">{submitApiError}</p>
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="flex justify-end">
                      <Button
                        type="submit"
                        className="bg-[#133644] hover:bg-[#133644]/90 dark:bg-[#9AD3F1] dark:text-[#133644]"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Submit Application"}
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="bg-[#133644]/5 py-16 sm:py-24 dark:bg-gray-800/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-[#133644] dark:text-[#9AD3F1] sm:text-3xl">Why Join Cloud Lumen?</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              We're building something special, and we want you to be part of it
            </p>
          </div>
          <div className="mt-12">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#133644] dark:text-[#9AD3F1]">Growth Opportunities</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    We invest in our team members' professional development and provide clear paths for career
                    advancement.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#133644] dark:text-[#9AD3F1]">Cutting-Edge Technology</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Work with the latest cloud technologies and help solve complex challenges for enterprise clients.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#133644] dark:text-[#9AD3F1]">Work-Life Balance</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    We value results over hours worked and offer flexible arrangements to support your well-being.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#133644] dark:text-[#9AD3F1]">Collaborative Environment</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Join a team that values open communication, knowledge sharing, and mutual support.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#133644] dark:text-[#9AD3F1]">Meaningful Impact</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    See the direct impact of your work as you help businesses transform their operations with cloud
                    technology.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#133644] dark:text-[#9AD3F1]">Inclusive Culture</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    We celebrate diversity and create an environment where everyone can bring their authentic selves to
                    work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
