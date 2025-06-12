import type { Metadata } from "next"
import { z } from "zod"
import ContactHero from "@/components/sections/contact-hero"
import ContactForm from "@/components/sections/contact-form"

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export const metadata: Metadata = {
  title: "Contact Us - Quality Marketing - Marketing Consultation",
  description: "Ready to grow your business? Contact Quality Marketing in Pune for a free consultation and custom digital marketing strategy tailored to your brand.",
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
    </>
  )
}
