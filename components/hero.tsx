"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mic, MicIcon, Play, Users, Calendar, Award } from "lucide-react"

export function Hero() {
  const [isVoiceActive, setIsVoiceActive] = useState(false)

  const handleVoiceBooking = () => {
    setIsVoiceActive(!isVoiceActive)
    setTimeout(() => setIsVoiceActive(false), 3000)
  }

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: "50K+", label: "Happy Patients" },
    { icon: <Calendar className="w-6 h-6" />, value: "100K+", label: "Appointments Booked" },
    { icon: <Award className="w-6 h-6" />, value: "500+", label: "Expert Doctors" },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 to-white/80 dark:from-gray-900/95 dark:to-gray-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 pt-16">
        <div className="mb-8">
          <span className="inline-block mt-16 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-6">
            🚀 AI-Powered Healthcare Revolution
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Talk. Book. <span className="text-blue-500">Heal.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience the future of healthcare with our AI-powered voice assistant. Book doctor appointments
            effortlessly, manage your health records, and get personalized care recommendations - all through natural
            conversation.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button  onClick={() => window.location.href = '#book'} 
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Mic  className="w-6 h-6 mr-3" />
            Book an Appointment
          </Button>
          <Button  onClick={() => window.location.href = '#about'}
            size="lg"
            variant="outline"
            className="px-8 py-4 rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-lg font-semibold"
          >
            <Play className="w-5 h-5 mr-2" />
            About Us
          </Button>
        </div>

        {/* Voice Animation */}
        <div className="flex justify-center mb-12">
          <div className={`relative ${isVoiceActive ? "animate-pulse" : ""}`}>
            <div
              className={`w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center shadow-lg ${
                isVoiceActive ? "ring-4 ring-blue-300 dark:ring-blue-600 ring-opacity-50" : ""
              }`}
            >
              <MicIcon className="w-10 h-10 text-white" />
            </div>
            {isVoiceActive && (
              <>
                <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-75" />
                <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-50 animation-delay-150" />
              </>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-3 text-blue-500">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-400 mb-6">Trusted by leading healthcare institutions</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-24 h-12 bg-gray-300 dark:bg-gray-600 rounded" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
