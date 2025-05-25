import { Stethoscope, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react"

export function Footer() {
  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#doctors", label: "Doctors" },
    { href: "#book", label: "Book Appointment" },
    { href: "#features", label: "Features" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ]

  const services = [
    "Voice AI Booking",
    "Doctor Consultations",
    "Health Records",
    "Telemedicine",
    "Prescription Management",
    "Health Monitoring",
  ]

  const resources = [
    "Help Center",
    "API Documentation",
    "Privacy Policy",
    "Terms of Service",
    "HIPAA Compliance",
    "System Status",
  ]

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Youtube className="w-5 h-5" />, href: "#", label: "YouTube" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <Stethoscope className="w-8 h-8 text-blue-400 mr-2" />
              <span className="text-xl font-bold">CuraCare</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              AI-powered healthcare booking platform making medical appointments accessible, efficient, and stress-free
              for everyone. Experience the future of healthcare today.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-3 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-3 text-blue-400" />
                <span>support@curacare.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-3 text-blue-400" />
                <span>123 Healthcare Ave, NY 10001</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <a key={link.href} href={link.href} className="block text-gray-400 hover:text-white transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <div className="space-y-3">
              {services.map((service) => (
                <a key={service} href="#" className="block text-gray-400 hover:text-white transition-colors">
                  {service}
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <div className="space-y-3 mb-6">
              {resources.map((resource) => (
                <a key={resource} href="#" className="block text-gray-400 hover:text-white transition-colors">
                  {resource}
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-medium mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 py-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-400">
                Get the latest updates on new features, health tips, and platform improvements.
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
              <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 CuraCare. All rights reserved. | Built with ❤️ for better healthcare.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
