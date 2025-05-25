"use client"

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Doctors } from "@/components/doctors"
import { BookAppointment } from "@/components/book-appointment"
import { Features } from "@/components/features"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Doctors />
      <BookAppointment />
      <Features />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
