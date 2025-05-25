"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Stethoscope, Star, MapPin, Clock, Search, Filter, Heart, Brain, Eye, Bone, Baby, Pill } from "lucide-react"

export function Doctors() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSpecialty, setSelectedSpecialty] = useState("All")

  const specialties = [
    "All",
    "Pediatrician",
    "Cardiologist",
    "Dermatologist",
    "Neurologist",
    "Orthopedic",
    "Dentist",
    "Ophthalmologist",
  ]

  const doctors = [
    {
      id: 1,
      name: "Dr. Aarti Mehta",
      specialization: "Pediatrician",
      experience: "12 years",
      rating: 4.9,
      reviews: 234,
      location: "Children's Medical Center",
      availability: "Available Today",
      image: "/doctorimages2.png",
      languages: ["English", "Hindi", "Gujarati"],
      education: "MBBS, MD Pediatrics - AIIMS Delhi",
      about: "Specialized in child development and preventive care with extensive experience in neonatal medicine.",
      consultationFee: "$80",
      icon: <Baby className="w-5 h-5" />,
    },
    {
      id: 2,
      name: "Dr. Rajesh Kumar",
      specialization: "Cardiologist",
      experience: "18 years",
      rating: 4.8,
      reviews: 456,
      location: "Heart Care Institute",
      availability: "Next Available: Tomorrow",
      image: "/doctorimages3.png",
      languages: ["English", "Hindi"],
      education: "MBBS, DM Cardiology - PGI Chandigarh",
      about: "Expert in interventional cardiology and heart disease prevention with 500+ successful procedures.",
      consultationFee: "$120",
      icon: <Heart className="w-5 h-5" />,
    },
    {
      id: 3,
      name: "Dr. Priya Sharma",
      specialization: "Dermatologist",
      experience: "15 years",
      rating: 4.9,
      reviews: 189,
      location: "Skin & Wellness Clinic",
      availability: "Available Today",
      image: "/doctorimages2.png",
      languages: ["English", "Hindi", "Punjabi"],
      education: "MBBS, MD Dermatology - MAMC Delhi",
      about: "Specializes in cosmetic dermatology and advanced skin treatments including laser therapy.",
      consultationFee: "$90",
      icon: <Pill className="w-5 h-5" />,
    },
    {
      id: 4,
      name: "Dr. Amit Patel",
      specialization: "Neurologist",
      experience: "20 years",
      rating: 4.7,
      reviews: 312,
      location: "Neuro Care Center",
      availability: "Available Tomorrow",
      image: "/doctorimages3.png",
      languages: ["English", "Hindi", "Gujarati"],
      education: "MBBS, DM Neurology - NIMHANS Bangalore",
      about: "Leading expert in stroke management and neurodegenerative diseases with research publications.",
      consultationFee: "$150",
      icon: <Brain className="w-5 h-5" />,
    },
    {
      id: 5,
      name: "Dr. Sarah Johnson",
      specialization: "Orthopedic",
      experience: "14 years",
      rating: 4.8,
      reviews: 278,
      location: "Bone & Joint Hospital",
      availability: "Available Today",
      image: "/doctorimages2.png",
      languages: ["English"],
      education: "MBBS, MS Orthopedics - Johns Hopkins",
      about: "Sports medicine specialist with expertise in joint replacement and arthroscopic surgery.",
      consultationFee: "$110",
      icon: <Bone className="w-5 h-5" />,
    },
    {
      id: 6,
      name: "Dr. Michael Chen",
      specialization: "Ophthalmologist",
      experience: "16 years",
      rating: 4.9,
      reviews: 167,
      location: "Vision Care Institute",
      availability: "Next Available: Tomorrow",
      image: "/doctorimages3.png",
      languages: ["English", "Mandarin"],
      education: "MBBS, MS Ophthalmology - Harvard Medical",
      about: "Retinal specialist with advanced training in LASIK and cataract surgery techniques.",
      consultationFee: "$100",
      icon: <Eye className="w-5 h-5" />,
    },
  ]

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSpecialty = selectedSpecialty === "All" || doctor.specialization === selectedSpecialty
    return matchesSearch && matchesSpecialty
  })

  return (
    <section id="doctors" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-6">
            Our Medical Team
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">Meet Our Expert Doctors</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Connect with board-certified physicians who are passionate about providing exceptional healthcare through
            our AI-powered platform.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search doctors by name or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12"
              />
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="w-5 h-5 text-gray-500" />
              {specialties.map((specialty) => (
                <Button
                  key={specialty}
                  variant={selectedSpecialty === specialty ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedSpecialty(specialty)}
                  className="rounded-full"
                >
                  {specialty}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDoctors.map((doctor) => (
            <Card
              key={doctor.id}
              className="hover:shadow-xl transition-all duration-300 border-0 bg-white dark:bg-gray-800 overflow-hidden group"
            >
              <CardContent className="p-0">
                {/* Doctor Image and Status */}
                <div className="relative">
                  <img 
                    src={doctor.image || "/placeholder.svg"}
                    alt={doctor.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant={doctor.availability.includes("Today") ? "default" : "secondary"}
                      className="bg-green-500 text-white"
                    >
                      {doctor.availability.includes("Today") ? "Available" : "Busy"}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 rounded-full p-2">
                    {doctor.icon}
                  </div>
                </div>

                <div className="p-6">
                  {/* Doctor Info */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{doctor.name}</h3>
                      <Badge variant="outline" className="mb-2">
                        {doctor.specialization}
                      </Badge>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-yellow-500 mb-1">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="ml-1 text-sm font-medium text-gray-900 dark:text-white">{doctor.rating}</span>
                      </div>
                      <p className="text-xs text-gray-500">({doctor.reviews} reviews)</p>
                    </div>
                  </div>

                  {/* Experience and Location */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Stethoscope className="w-4 h-4 mr-2" />
                      <span className="text-sm">{doctor.experience} experience</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{doctor.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">{doctor.availability}</span>
                    </div>
                  </div>

                  {/* Education */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{doctor.education}</p>

                  {/* Languages */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {doctor.languages.map((lang, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {lang}
                      </Badge>
                    ))}
                  </div>

                  {/* Consultation Fee and Book Button */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Consultation</p>
                      <p className="text-lg font-semibold text-blue-500">{doctor.consultationFee}</p>
                    </div>
                    <Button className="bg-blue-500 hover:bg-blue-600">Book Now</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No doctors found matching your criteria. Try adjusting your search or filters.
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-white mb-4">Can't Find the Right Doctor?</h3>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              Our AI assistant can help you find the perfect healthcare provider based on your specific needs, location,
              and preferences.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-blue-500 hover:bg-gray-100">
              <Stethoscope className="w-5 h-5 mr-2" />
              Get AI Recommendations
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
