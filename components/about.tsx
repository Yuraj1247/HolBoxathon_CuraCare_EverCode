import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Zap, Heart, Globe, CheckCircle, Users, Award, Clock } from "lucide-react"

export function About() {
  const coreValues = [
    {
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      title: "Trust & Security",
      description: "HIPAA-compliant platform with enterprise-grade security protecting your health data.",
    },
    {
      icon: <Zap className="w-6 h-6 text-green-500" />,
      title: "AI Innovation",
      description: "Cutting-edge artificial intelligence that understands natural language and context.",
    },
    {
      icon: <Heart className="w-6 h-6 text-red-500" />,
      title: "Patient-Centric Care",
      description: "Every feature designed with patient comfort and accessibility in mind.",
    },
    {
      icon: <Globe className="w-6 h-6 text-purple-500" />,
      title: "Healthcare for All",
      description: "Breaking down barriers to make quality healthcare accessible to everyone.",
    },
  ]

  const achievements = [
    { icon: <Users className="w-8 h-8 text-blue-500" />, value: "50,000+", label: "Active Users" },
    { icon: <Award className="w-8 h-8 text-green-500" />, value: "98%", label: "Satisfaction Rate" },
    { icon: <Clock className="w-8 h-8 text-purple-500" />, value: "24/7", label: "AI Availability" },
    { icon: <CheckCircle className="w-8 h-8 text-orange-500" />, value: "99.9%", label: "Uptime" },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="/doctorimages.png"
                alt="Healthcare Team"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500">4.9/5</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Patient Rating</div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-6">
              About CuraCare
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Revolutionizing Healthcare with <span className="text-blue-500">Agentic AI</span>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              CuraCare is pioneering the future of healthcare accessibility through advanced Agentic AI technology. Our
              intelligent system doesn't just understand what you say—it comprehends context, emotions, and medical
              nuances to provide personalized healthcare solutions.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Built by healthcare professionals and AI experts, our platform seamlessly bridges the gap between patients
              and providers, making quality healthcare accessible to everyone, regardless of technical expertise or
              physical limitations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
                Learn More About Our AI
              </Button>
              <Button size="lg" variant="outline">
                View Success Stories
              </Button>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Core Values</h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do at CuraCare
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 border-0 bg-white dark:bg-gray-800"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">{value.icon}</div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{value.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Our Impact in Numbers</h3>
            <p className="text-blue-100 text-lg">Real results from real healthcare transformations</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center text-white">{achievement.icon}</div>
                <div className="text-3xl font-bold text-white mb-2">{achievement.value}</div>
                <div className="text-blue-100 font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
