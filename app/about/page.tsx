"use client";

import Testimonials from "@/components/Testimonials";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa6";

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const teamMembers = [
    {
      name: "Lakshay Saxena",
      role: "Senior Developer",
      image: "/team/lakshya.jpg",
      socials: [
        { platform: "linkedin", url: "https://linkedin.com", icon: FaLinkedin },
        {
          platform: "instagram",
          url: "https://instagram.com",
          icon: FaInstagram,
        },
      ],
    },
    {
      name: "Zaid Khan",
      role: "Full Stack Developer",
      image: "/team/zaid.JPG",
      socials: [
        { platform: "linkedin", url: "https://linkedin.com", icon: FaLinkedin },
        {
          platform: "instagram",
          url: "https://instagram.com",
          icon: FaInstagram,
        },
      ],
    },
    {
      name: "Tushar Dua",
      role: "Project Manager",
      image: "/team/tushar.jpeg",
      socials: [
        { platform: "linkedin", url: "https://linkedin.com", icon: FaLinkedin },
        {
          platform: "instagram",
          url: "https://instagram.com",
          icon: FaInstagram,
        },
      ],
    },
    {
      name: "Vinita",
      role: "Digital Marketing Head",
      image: "/team/vinita.jpeg",
      socials: [
        { platform: "linkedin", url: "https://linkedin.com", icon: FaLinkedin },
        {
          platform: "instagram",
          url: "https://instagram.com",
          icon: FaInstagram,
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h1 className="text-[40px] md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 px-2">
              About{" "}
              <span className="text-[#ffde59]">Jeevijay Technologies</span>
            </h1>
          </motion.div>

          {/* Founder Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br backdrop-blur-lg rounded-2xl p-4 sm:p-6 md:p-12 shadow-2xl mb-12 sm:mb-16"
          >
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                  Our Journey
                </h2>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                  Founded in <span className="font-semibold">2021</span> by{" "}
                  <span className="font-semibold">Vikas Patel</span> from Maihar
                  (Satna, Madhya Pradesh), Jeevijay Technologies began with a
                  vision to democratise enterprise-grade technology for Indian
                  businesses.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  What started in a humble hostel room in Bangalore has evolved
                  into a multi-city operation serving some of India's most
                  respected brands. Our rapid growth reflects our unwavering
                  commitment to technical excellence, customer success, and
                  continuous innovation.
                </p>
              </div>
              <div className="relative h-80 rounded-xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0  z-10"></div>
                <img
                  src="https://t4.ftcdn.net/jpg/04/67/97/95/360_F_467979573_PBejz9RgVw0Pw63g2KV89HeaGYhJPNjt.jpg"
                  alt="Jeevijay Technologies Journey"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <div className="py-[80px] hidden md:block"></div>
          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12 sm:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8 sm:mb-12 md:mb-16 px-4">
              Our Growth <span className="text-[#ffde59]">Timeline</span>
            </h2>

            {/* Timeline Container */}
            <div className="relative">
              {/* Timeline Line - Horizontal for desktop, Vertical for mobile */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-700 hidden"></div>
              <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-700 hidden md:block"></div>

              {/* Timeline Items */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-8 relative">
                {/* 2021: Foundation */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={
                    mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                  }
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="relative"
                >
                  <div className="flex md:flex-col items-center md:items-center gap-4 md:gap-0">
                    {/* Timeline Node */}
                    <div className="relative z-10 flex items-center justify-center flex-shrink-0 md:order-2">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#ffde59] to-[#fad852] rounded-lg flex items-center justify-center shadow-lg border-2 sm:border-4 border-gray-900">
                        <span className="text-black text-xl sm:text-2xl font-bold">
                          1
                        </span>
                      </div>
                      <div className="absolute w-px h-16 bg-gray-600 -top-16 hidden md:block"></div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 md:mb-8 text-left md:text-center md:h-48 md:flex md:flex-col md:justify-end md:pb-4 md:order-1">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 md:mb-4">
                        2021: Foundation
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed md:px-2">
                        Company founded in Bangalore by Vikas Patel with a
                        mission to transform Indian businesses through
                        technology innovation
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* 2022: Expansion */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={
                    mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                  }
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="relative"
                >
                  <div className="flex md:flex-col items-center md:items-center gap-4 md:gap-0">
                    {/* Timeline Node */}
                    <div className="relative z-10 flex items-center justify-center flex-shrink-0 md:order-1 md:mb-8">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#ffde59] to-[#fad852] rounded-lg flex items-center justify-center shadow-lg border-2 sm:border-4 border-gray-900">
                        <span className="text-black text-xl sm:text-2xl font-bold">
                          2
                        </span>
                      </div>
                      <div className="absolute w-px h-16 bg-gray-600 -bottom-16 hidden md:block"></div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-left md:text-center md:h-48 md:flex md:flex-col md:justify-start md:pt-4 md:order-2">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 md:mb-4">
                        2022: Expansion
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed md:px-2">
                        Opened offices in Kota and Bhopal, secured first
                        enterprise clients from Aditya Birla Group and IKEA
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* 2023: Growth */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={
                    mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                  }
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="relative"
                >
                  <div className="flex md:flex-col items-center md:items-center gap-4 md:gap-0">
                    {/* Timeline Node */}
                    <div className="relative z-10 flex items-center justify-center flex-shrink-0 md:order-2">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#ffde59] to-[#fad852] rounded-lg flex items-center justify-center shadow-lg border-2 sm:border-4 border-gray-900">
                        <span className="text-black text-xl sm:text-2xl font-bold">
                          3
                        </span>
                      </div>
                      <div className="absolute w-px h-16 bg-gray-600 -top-16 hidden md:block"></div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 md:mb-8 text-left md:text-center md:h-48 md:flex md:flex-col md:justify-end md:pb-4 md:order-1">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 md:mb-4">
                        2023: Growth
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed md:px-2">
                        Expanded to Jabalpur, crossed 100 projects milestone,
                        launched AI and automation practice serving Fortune 500
                        companies
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* 2024: Scale */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={
                    mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                  }
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="relative"
                >
                  <div className="flex md:flex-col items-center md:items-center gap-4 md:gap-0">
                    {/* Timeline Node */}
                    <div className="relative z-10 flex items-center justify-center flex-shrink-0 md:order-1 md:mb-8">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#ffde59] to-[#fad852] rounded-lg flex items-center justify-center shadow-lg border-2 sm:border-4 border-gray-900">
                        <span className="text-black text-xl sm:text-2xl font-bold">
                          4
                        </span>
                      </div>
                      <div className="absolute w-px h-16 bg-gray-600 -bottom-16 hidden md:block"></div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-left md:text-center md:h-48 md:flex md:flex-col md:justify-start md:pt-4 md:order-2">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 md:mb-4">
                        2024: Scale
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed md:px-2">
                        Serving 50+ enterprise clients, team of 40+ specialists,
                        recognized as premium technology partner across eight
                        industries
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <div className="py-[115px] hidden md:block"></div>

          {/* Founder Profile Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mb-12 sm:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-3 sm:mb-4 px-4">
              Meet Vikas Patel: Founder & Technology Visionary
            </h2>
            <p className="text-[16px] sm:text-xl text-[#ffde59] text-center mb-8 sm:mb-12 font-semibold px-4">
              Technology Growth Consultant & Business Strategist
            </p>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl p-4 sm:p-6 md:p-12 border border-gray-700/50 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
                {/* Image Section */}
                <div className="order-2 md:order-1">
                  <div className="relative h-64 sm:h-80 md:h-96 lg:h-150 rounded-xl overflow-hidden shadow-2xl">
                    <div className="absolute inset-0  z-10"></div>
                    <Image
                      src="/sir.png"
                      alt="Vikas Patel - Founder"
                      className="w-full h-full object-cover"
                      width={600}
                      height={800}
                    />
                  </div>

                  {/* Professional Networks */}
                  <div className="mt-6 flex flex-nowrap gap-2 sm:gap-4 justify-center">
                    <div className="bg-[#ffde59] rounded-full px-2 py-1 sm:px-4 sm:py-2">
                      <span className="text-black font-semibold text-xs sm:text-sm">
                        BNI Member
                      </span>
                    </div>
                    <div className="bg-[#ffde59] rounded-full px-2 py-1 sm:px-4 sm:py-2">
                      <span className="text-black font-semibold text-xs sm:text-sm">
                        JCI Network
                      </span>
                    </div>
                    <div className="bg-[#ffde59] rounded-full px-2 py-1 sm:px-4 sm:py-2">
                      <span className="text-black font-semibold text-xs sm:text-sm">
                        Corporate Trainer
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="order-1 md:order-2">
                  <div className="space-y-4 sm:space-y-6">
                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                      Vikas Patel brings multidisciplinary expertise spanning{" "}
                      <span className=" font-semibold">
                        technology architecture, business strategy, branding,
                        and automation
                      </span>
                      . His unique ability to bridge technical complexity with
                      business objectives has been instrumental in Jeevijay's
                      rapid growth and exceptional client outcomes.
                    </p>

                    <p className="text-gray-300 text-lg leading-relaxed">
                      Vikas personally oversees strategic client engagements,
                      ensuring every project delivers transformative business
                      value.
                    </p>

                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        Collaborative Ecosystem
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        He maintains strong connections with premier business
                        networks including{" "}
                        <span className=" font-semibold">BNI and JCI</span>,
                        fostering a collaborative ecosystem that benefits all
                        stakeholders.
                      </p>
                    </div>

                    {/* Key Expertise Tags */}
                    <div className="flex flex-wrap gap-2 sm:gap-3 pt-4">
                      <span className="bg-gray-700/50 text-gray-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm">
                        Technology Architecture
                      </span>
                      <span className="bg-gray-700/50 text-gray-300 px-4 py-2 rounded-full text-sm">
                        Business Strategy
                      </span>
                      <span className="bg-gray-700/50 text-gray-300 px-4 py-2 rounded-full text-sm">
                        Branding
                      </span>
                      <span className="bg-gray-700/50 text-gray-300 px-4 py-2 rounded-full text-sm">
                        Automation
                      </span>
                      <span className="bg-gray-700/50 text-gray-300 px-4 py-2 rounded-full text-sm">
                        Digital Transformation
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Our Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="mb-16 py-12 md:py-32 lg:py-40"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 sm:mb-12 px-4">
              Our <span className="text-[#ffde59]">Team</span>
            </h2>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={
                    mounted
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.9 }
                  }
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-[#ffde59]/50 transition-all duration-300 hover:scale-105 group"
                >
                  <div
                    className="relative w-full aspect-square mb-4 rounded-xl overflow-hidden cursor-pointer"
                    onClick={() => setSelectedMember(index)}
                  >
                    <div className="absolute inset-0 z-10 group-hover:opacity-0 transition-opacity duration-300"></div>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 text-center">
                    {member.name}
                  </h3>
                  <p className="text-[#ffde59] text-sm text-center font-medium mb-3">
                    {member.role}
                  </p>
                  {member.socials && member.socials.length > 0 && (
                    <div className="flex justify-center gap-3">
                      {member.socials.map((social, idx) => (
                        <a
                          key={idx}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full border border-zinc-700 hover:border-[#ffde59] flex items-center justify-center text-gray-400 hover:text-white transition-all"
                        >
                          <social.icon className="w-4 h-4" />
                        </a>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Modal */}
          {selectedMember !== null && (
            <div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedMember(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="relative max-w-md md:max-w-xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute -top-12 right-0 text-white hover:text-[#ffde59] transition-colors"
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border-2 border-[#ffde59]">
                  <img
                    src={teamMembers[selectedMember].image}
                    alt={teamMembers[selectedMember].name}
                    className="w-full h-auto"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {teamMembers[selectedMember].name}
                    </h3>
                    <p className="text-[#ffde59] text-lg">
                      {teamMembers[selectedMember].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {/* Multi-City Presence */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mb-16"
          >
            <Testimonials />

            <p className="text-gray-300 text-base md:text-lg text-center mt-8 leading-relaxed max-w-4xl mx-auto">
              Today, we operate from strategic locations across India—Bangalore,
              Kota, Bhopal, and Jabalpur—enabling us to serve clients nationally
              whilst maintaining the personalised attention and agility of a
              boutique consultancy.
            </p>
          </motion.div>

          {/* Expertise & Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-br from-transparent to-[#ffde59]/10 border border-zinc-800 hover:border-zinc-700 transition-all duration-300  rounded-2xl p-4 sm:p-6 md:p-12 shadow-2xl mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-6 sm:mb-8 px-4">
              What Sets Us Apart
            </h2>
            <p className="text-gray-300  text-[14px] sm:text-lg leading-relaxed mb-6 sm:mb-8 text-center max-w-4xl mx-auto px-4">
              Our team combines deep technical expertise with business acumen,
              ensuring every solution we deliver generates measurable return on
              investment.
            </p>
            <div className="grid grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="text-3xl sm:text-5xl font-bold text-white mb-2">
                  200+
                </div>
                <div className="text-gray-400 text-xs sm:text-sm">
                  Projects Completed
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-5xl font-bold text-white mb-2">
                  8
                </div>
                <div className="text-gray-400 text-sm">Industry Verticals</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-5xl font-bold text-white mb-2">
                  98%
                </div>
                <div className="text-gray-400 text-sm">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-transparent to-[#ffde59]/10 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 rounded-2xl p-4 sm:p-6 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 px-4">
                Our Commitment
              </h2>
              <p className="text-gray-300 text-[14px] sm:text-lg md:text-xl leading-relaxed max-w-4xl mx-auto px-4">
                We've successfully completed over 200 projects across eight
                industry verticals, maintaining industry-leading retention
                rates. Our success is built on technical excellence, customer
                success, and continuous innovation—delivering solutions that
                drive real business value.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
