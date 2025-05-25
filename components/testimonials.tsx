"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ChevronLeft, ChevronRight, Quote, Heart, ThumbsUp } from "lucide-react"

export function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Working Mother",
      location: "New York, NY",
      avatar: "/placeholder.svg?height=80&width=80",
      quote:
        "CuraCare made booking my daughter's pediatric appointment so easy. The voice AI understood exactly what I needed and found the perfect doctor within minutes. As a busy mom, this saves me so much time!",
      rating: 5,
      appointmentType: "Pediatric Consultation",
      timesSaved: "15+ hours",
      highlight: "Voice AI booking",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Senior Citizen",
      location: "San Francisco, CA",
      avatar: "/placeholder.svg?height=80&width=80",
      quote:
        "As a 72-year-old, I was worried about using new technology, but CuraCare's interface is incredibly user-friendly. The AI assistant is patient and helps me through every step. It's like having a personal healthcare concierge.",
      rating: 5,
      appointmentType: "Cardiology Follow-up",
      timesSaved: "8+ hours",
      highlight: "User-friendly design",
    },
    {
      id: 3,
      name: "Priya Reddy",
      role: "Healthcare Worker",
      location: "Chicago, IL",
      avatar: "/placeholder.svg?height=80&width=80",
      quote:
        "The AI assistant helped me reschedule my appointment when an emergency came up at the hospital. The system automatically found alternative slots and coordinated with my doctor's schedule. Absolutely fantastic service!",
      rating: 5,
      appointmentType: "Dermatology Consultation",
      timesSaved: "12+ hours",
      highlight: "Smart rescheduling",
    },
    {
      id: 4,
      name: "David Rodriguez",
      role: "Small Business Owner",
      location: "Austin, TX",
      avatar: "/placeholder.svg?height=80&width=80",
      quote:
        "Running a business means I can't always call during office hours. CuraCare's 24/7 AI booking is a game-changer. I booked my annual check-up at 11 PM while reviewing quarterly reports. Incredible convenience!",
      rating: 5,
      appointmentType: "Annual Physical",
      timesSaved: "20+ hours",
      highlight: "24/7 availability",
    },
    {
      id: 5,
      name: "Emily Watson",
      role: "College Student",
      location: "Boston, MA",
      avatar: "/placeholder.svg?height=80&width=80",
      quote:
        "As an international student, navigating the US healthcare system was overwhelming. CuraCare's AI explained everything clearly, helped me understand insurance coverage, and found doctors who speak my language. Life-saver!",
      rating: 5,
      appointmentType: "General Consultation",
      timesSaved: "10+ hours",
      highlight: "Multi-language support",
    },
    {
      id: 6,
      name: "Robert Kim",
      role: "Tech Executive",
      location: "Seattle, WA",
      avatar: "/placeholder.svg?height=80&width=80",
      quote:
        "The integration with my calendar and the smart conflict resolution impressed me. When my meeting ran over, the AI automatically adjusted my appointment time and notified everyone involved. This is the future of healthcare!",
      rating: 5,
      appointmentType: "Executive Health Screening",
      timesSaved: "25+ hours",
      highlight: "Smart integration",
    },
  ]

  const stats = [
    { value: "4.9/5", label: "Average Rating", icon: <Star className="w-5 h-5" /> },
    { value: "50K+", label: "Happy Patients", icon: <Heart className="w-5 h-5" /> },
    { value: "98%", label: "Satisfaction Rate", icon: <ThumbsUp className="w-5 h-5" /> },
  ]

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, testimonials.length])

  const nextTestimonial = () => {
    setIsAutoPlaying(false)
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setIsAutoPlaying(false)
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentTestimonial(index)
  }

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-6">
            Patient Stories
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">What Our Patients Say</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real experiences from real people who have transformed their healthcare journey with CuraCare's AI-powered
            platform.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-3 text-blue-500">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Testimonial */}
        <div className="relative max-w-5xl mx-auto mb-12">
          <Card className="shadow-2xl border-0 bg-white dark:bg-gray-800 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2">
                {/* Testimonial Content */}
                <div className="p-8 lg:p-12">
                  <div className="mb-6">
                    <Quote className="w-12 h-12 text-blue-500 mb-4" />
                    <div className="flex mb-4">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                      "{testimonials[currentTestimonial].quote}"
                    </blockquote>
                  </div>

                  <div className="flex items-center mb-6">
                    <img
                      src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                      alt={testimonials[currentTestimonial].name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-lg">
                        {testimonials[currentTestimonial].name}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">{testimonials[currentTestimonial].role}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">
                        {testimonials[currentTestimonial].location}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Appointment Type:</span>
                      <Badge variant="secondary">{testimonials[currentTestimonial].appointmentType}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Time Saved:</span>
                      <span className="text-sm font-medium text-green-600">
                        {testimonials[currentTestimonial].timesSaved}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Favorite Feature:</span>
                      <span className="text-sm font-medium text-blue-600">
                        {testimonials[currentTestimonial].highlight}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Visual Element */}
                <div className="bg-gradient-to-br from-blue-500 to-green-500 p-8 lg:p-12 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Heart className="w-12 h-12" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Trusted by Thousands</h3>
                    <p className="text-blue-100 mb-6">
                      Join our community of satisfied patients who have experienced the future of healthcare booking.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold">50K+</div>
                        <div className="text-sm text-blue-100">Appointments</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">500+</div>
                        <div className="text-sm text-blue-100">Doctors</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="sm"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full bg-white dark:bg-gray-800 shadow-lg"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full bg-white dark:bg-gray-800 shadow-lg"
            onClick={nextTestimonial}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Testimonial Dots */}
        <div className="flex justify-center space-x-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial ? "bg-blue-500 w-8" : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Additional Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="hover:shadow-lg transition-shadow duration-300 border-0 bg-white dark:bg-gray-800"
            >
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  "{testimonial.quote.substring(0, 120)}..."
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover mr-3"
                  />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white text-sm">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ready to Join Our Happy Patients?</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Experience the same level of care and convenience that thousands of patients trust every day.
          </p>
          <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
            Start Your Journey Today
          </Button>
        </div>
      </div>
    </section>
  )
}
