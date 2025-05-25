import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Mic,
  Calendar,
  Users,
  Bell,
  Brain,
  Shield,
  Clock,
  MessageSquare,
  Smartphone,
  Globe,
  Zap,
  Heart,
} from "lucide-react"

export function Features() {
  const mainFeatures = [
    {
      icon: <Mic className="w-10 h-10 text-blue-500" />,
      title: "Voice-AI Booking",
      description:
        "Book appointments using natural voice commands with our advanced AI assistant that understands context and medical terminology.",
      details: [
        "Natural language processing",
        "Multi-language support",
        "Context-aware responses",
        "Medical terminology recognition",
      ],
    },
    {
      icon: <Calendar className="w-10 h-10 text-green-500" />,
      title: "Smart Time Management",
      description:
        "Intelligent scheduling that optimizes appointment times for both patients and doctors, reducing wait times and conflicts.",
      details: [
        "Real-time availability",
        "Automatic rescheduling",
        "Buffer time optimization",
        "Priority-based scheduling",
      ],
    },
    {
      icon: <Users className="w-10 h-10 text-purple-500" />,
      title: "Agent-to-Agent Conflict Resolution",
      description:
        "AI agents communicate seamlessly to resolve scheduling conflicts automatically without human intervention.",
      details: [
        "Automated conflict detection",
        "Intelligent rescheduling",
        "Multi-party coordination",
        "Real-time updates",
      ],
    },
    {
      icon: <Bell className="w-10 h-10 text-orange-500" />,
      title: "Real-Time Notifications",
      description:
        "Instant updates about appointments, reminders, and schedule changes delivered through multiple channels.",
      details: ["SMS and email alerts", "Push notifications", "Customizable reminders", "Emergency notifications"],
    },
  ]

  const additionalFeatures = [
    {
      icon: <Brain className="w-8 h-8 text-indigo-500" />,
      title: "AI Health Insights",
      description: "Get personalized health recommendations based on your medical history and symptoms.",
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: "HIPAA Compliance",
      description: "Enterprise-grade security ensuring your medical data is always protected and private.",
    },
    {
      icon: <Clock className="w-8 h-8 text-teal-500" />,
      title: "24/7 Availability",
      description: "Round-the-clock AI assistant ready to help with booking and health queries anytime.",
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-pink-500" />,
      title: "Multi-Channel Support",
      description: "Access our services through web, mobile app, phone, or smart speakers.",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-cyan-500" />,
      title: "Mobile-First Design",
      description: "Optimized mobile experience for booking appointments on the go.",
    },
    {
      icon: <Globe className="w-8 h-8 text-emerald-500" />,
      title: "Telemedicine Ready",
      description: "Seamless integration with video consultation platforms for remote care.",
    },
  ]

  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-6">
            Platform Features
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Advanced AI Technology for <span className="text-blue-500">Seamless Healthcare</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Experience the future of healthcare booking with our cutting-edge AI features designed to make medical
            appointments accessible, efficient, and stress-free for everyone.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {mainFeatures.map((feature, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 border-0 bg-white dark:bg-gray-800 overflow-hidden group"
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">More Powerful Features</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white dark:bg-gray-800 group"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Feature Showcase */}
        <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-8 lg:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-full">
                <Zap className="w-12 h-12 text-white" />
              </div>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Experience the Future of Healthcare Today
            </h3>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Join thousands of patients who have already discovered the convenience of AI-powered healthcare booking.
              Our platform reduces appointment booking time by 80% and eliminates scheduling conflicts entirely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-500 hover:bg-gray-100">
                <Heart className="w-5 h-5 mr-2" />
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <MessageSquare className="w-5 h-5 mr-2" />
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { value: "99.9%", label: "Uptime Guarantee" },
            { value: "< 30s", label: "Average Booking Time" },
            { value: "50+", label: "Languages Supported" },
            { value: "24/7", label: "AI Assistant Available" },
          ].map((stat, index) => (
            <div key={index}>
              <div className="text-3xl font-bold text-blue-500 mb-2">{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
