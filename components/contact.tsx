"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Send, Phone, Mail, MapPin, Clock, MessageSquare, Headphones, Globe, Shield, CheckCircle } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const inquiryTypes = [
    "General Inquiry",
    "Technical Support",
    "Billing Question",
    "Partnership Opportunity",
    "Media Inquiry",
    "Feature Request",
    "Bug Report",
  ]

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6 text-blue-500" />,
      title: "Phone Support",
      description: "Speak with our support team",
      contact: "+1 (555) 123-4567",
      availability: "Mon-Fri, 8AM-8PM EST",
    },
    {
      icon: <Mail className="w-6 h-6 text-green-500" />,
      title: "Email Support",
      description: "Send us a detailed message",
      contact: "support@curacare.com",
      availability: "Response within 2 hours",
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-purple-500" />,
      title: "Live Chat",
      description: "Chat with our AI assistant",
      contact: "Available 24/7",
      availability: "Instant response",
    },
    {
      icon: <Headphones className="w-6 h-6 text-orange-500" />,
      title: "Emergency Line",
      description: "For urgent medical queries",
      contact: "+1 (555) 911-CARE",
      availability: "24/7 Emergency Support",
    },
  ]

  const officeLocations = [
    {
      city: "New York",
      address: "123 Healthcare Ave, Medical District, NY 10001",
      phone: "+1 (555) 123-4567",
      hours: "Mon-Fri: 8AM-6PM",
    },
    {
      city: "San Francisco",
      address: "456 Innovation Blvd, Tech Valley, CA 94105",
      phone: "+1 (555) 987-6543",
      hours: "Mon-Fri: 9AM-7PM",
    },
    {
      city: "Chicago",
      address: "789 Medical Center Dr, Healthcare Hub, IL 60601",
      phone: "+1 (555) 456-7890",
      hours: "Mon-Fri: 8AM-6PM",
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    alert("Message sent successfully! We'll get back to you within 2 hours.")

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      inquiryType: "",
    })
  }

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-6">
            Get in Touch
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Contact Our Support Team
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have questions about CuraCare? Our dedicated support team is here to help you 24/7. Choose your preferred
            way to reach us.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-white dark:bg-gray-800"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">{method.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{method.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{method.description}</p>
                <p className="font-medium text-gray-900 dark:text-white mb-1">{method.contact}</p>
                <p className="text-xs text-gray-500">{method.availability}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-xl border-0 bg-white dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">Send us a Message</CardTitle>
              <p className="text-gray-600 dark:text-gray-400">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-12"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-12"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-12"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="inquiryType">Inquiry Type *</Label>
                    <Select
                      value={formData.inquiryType}
                      onValueChange={(value) => setFormData({ ...formData, inquiryType: value })}
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        {inquiryTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="h-12"
                    placeholder="Brief description of your inquiry"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    placeholder="Please provide detailed information about your inquiry..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-blue-500 hover:bg-blue-600 text-lg font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information & Map */}
          <div className="space-y-6">
            {/* Office Locations */}
            <Card className="border-0 bg-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center text-gray-900 dark:text-white">
                  <MapPin className="w-5 h-5 mr-2 text-blue-500" />
                  Office Locations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {officeLocations.map((location, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-100 dark:border-gray-700 last:border-b-0 pb-4 last:pb-0"
                  >
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{location.city} Office</h4>
                    <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      <p className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {location.address}
                      </p>
                      <p className="flex items-center">
                        <Phone className="w-4 h-4 mr-2" />
                        {location.phone}
                      </p>
                      <p className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {location.hours}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Additional Info */}
            <Card className="border-0 bg-gradient-to-br from-blue-500 to-green-500 text-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 mr-2" />
                  <h3 className="text-lg font-semibold">Privacy & Security</h3>
                </div>
                <p className="text-blue-100 mb-4 text-sm">
                  Your privacy is our priority. All communications are encrypted and HIPAA-compliant.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span>End-to-end encryption</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span>HIPAA compliant</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span>No data sharing</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
