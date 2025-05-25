"use client"

import { useEffect } from "react"
import { CardContent } from "@/components/ui/card"
import { Card } from "@/components/ui/card"
import { Clock, FileText, Shield, CheckCircle, AlertCircle } from "lucide-react"

export function BookAppointment() {
  useEffect(() => {
    // Load the Fillout script
    const script = document.createElement("script")
    script.src = "https://server.fillout.com/embed/v1/"
    script.async = true
    document.head.appendChild(script)

    return () => {
      // Cleanup script when component unmounts
      const existingScript = document.querySelector('script[src="https://server.fillout.com/embed/v1/"]')
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [])

  return (
    <section id="book" className="py-20 bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-6">
            Book Appointment
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">Schedule Your Visit</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Book your appointment in minutes with our intelligent booking system. Choose between traditional form
            filling or our revolutionary voice booking.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Booking Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 bg-white dark:bg-gray-800 shadow-xl">
              <CardContent className="p-0">
                <div
                  className="w-full h-[600px] rounded-lg overflow-hidden"
                  data-fillout-id="96ffyCXo7Eus"
                  data-fillout-embed-type="standard"
                  data-fillout-inherit-parameters
                  data-fillout-dynamic-resize
                ></div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Security Notice */}
            <Card className="border-0 bg-white dark:bg-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Shield className="w-6 h-6 text-green-500 mr-2" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">Secure & Private</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Your personal and medical information is protected with enterprise-grade security and HIPAA
                  compliance.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span>256-bit SSL encryption</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span>HIPAA compliant</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span>No data sharing</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card className="border-0 bg-white dark:bg-gray-800">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">What to Expect</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start">
                    <Clock className="w-4 h-4 text-blue-500 mr-2 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Confirmation within 2 hours</p>
                      <p className="text-gray-600 dark:text-gray-400">You'll receive email and SMS confirmation</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FileText className="w-4 h-4 text-blue-500 mr-2 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Bring required documents</p>
                      <p className="text-gray-600 dark:text-gray-400">ID, insurance card, previous reports</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <AlertCircle className="w-4 h-4 text-blue-500 mr-2 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Arrive 15 minutes early</p>
                      <p className="text-gray-600 dark:text-gray-400">For check-in and paperwork</p>
                    </div>
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
