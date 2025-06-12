"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean
    message?: string
  }>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong')
      }

      setSubmitStatus({
        success: true,
        message: "Thank you for your message. We'll be in touch shortly.",
      })

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      })
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-offwhite p-6 rounded-lg">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-navy/10 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="h-5 w-5 text-navy" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Visit Us</h3>
                    <p className="text-navy/70">
                      Prabhat Road, Pune
                      <br />
                      MH 411004
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-offwhite p-6 rounded-lg">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-navy/10 rounded-full flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-navy" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Email Us</h3>
                    <p className="text-navy/70">
                      <a href="mailto:qualitymarketing.qm@gmail.com" className="hover:text-navy transition-colors">
                        qualitymarketing.qm@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-offwhite p-6 rounded-lg">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-navy/10 rounded-full flex items-center justify-center mr-4">
                    <Phone className="h-5 w-5 text-navy" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Call Us</h3>
                    <p className="text-navy/70">
                      <a href="tel:+919767379983" className="hover:text-navy transition-colors">
                        +91 97673 79983
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-offwhite p-6 rounded-lg">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-navy/10 rounded-full flex items-center justify-center mr-4">
                    <Clock className="h-5 w-5 text-navy" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Business Hours</h3>
                    <p className="text-navy/70">
                      Monday - Friday
                      <br />
                      9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-offwhite rounded-2xl p-8 shadow-soft">
              {submitStatus.message && (
                <div
                  className={`p-4 mb-6 rounded-lg ${
                    submitStatus.success ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                      placeholder="+1 (234) 567-8900"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    How can we help you? <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                    placeholder="Tell us about your project and goals..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-navy text-white py-3 px-6 rounded-lg font-medium hover:bg-navy/90 transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
