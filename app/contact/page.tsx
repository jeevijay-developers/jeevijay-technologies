"use client";

import { useEffect, useRef } from "react";
import ContactForm from "@/components/contactForm";
import { gsap, DURATIONS, EASINGS } from "@/config/gsap";

export default function ContactPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const contactItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const socialLinksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Header animation - slow fade in
    if (headerRef.current) {
      gsap.to(headerRef.current, {
        opacity: 1,
        y: 0,
        duration: DURATIONS.verySlow,
        ease: EASINGS.power3,
      });
    }

    // Contact info section - fade in from left
    if (contactInfoRef.current) {
      gsap.to(contactInfoRef.current, {
        opacity: 1,
        x: 0,
        duration: DURATIONS.verySlow,
        ease: EASINGS.power3,
        delay: 0.3,
      });
    }

    // Contact items stagger animation
    if (contactItemsRef.current.length > 0) {
      gsap.to(contactItemsRef.current, {
        opacity: 1,
        x: 0,
        duration: DURATIONS.slow,
        ease: EASINGS.power2,
        stagger: 0.2,
        delay: 0.6,
      });
    }

    // Social links animation
    if (socialLinksRef.current) {
      const socialIcons = socialLinksRef.current.querySelectorAll("a");
      gsap.to(socialIcons, {
        opacity: 1,
        scale: 1,
        duration: DURATIONS.normal,
        ease: EASINGS.back,
        stagger: 0.15,
        delay: 1.2,
      });
    }

    // Form animation - fade in from right
    if (formRef.current) {
      gsap.to(formRef.current, {
        opacity: 1,
        x: 0,
        duration: DURATIONS.verySlow,
        ease: EASINGS.power3,
        delay: 0.4,
      });
    }
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-transparent to-[#ffde59]/10 ">
      <section className="relative pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div ref={headerRef} className="text-center mb-16 opacity-0">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Get in <span className="text-[#ffde59]">Touch</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can help transform your business with cutting-edge technology solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div ref={contactInfoRef} className="opacity-0">
              <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Fill out the form and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div
                  ref={(el) => {
                    contactItemsRef.current[0] = el;
                  }}
                  className="flex items-start gap-4 opacity-0"
                >
                  <div className="w-12 h-12 bg-[#ffde59] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <p className="text-gray-400">hello@jeevijay.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div
                  ref={(el) => {
                    contactItemsRef.current[1] = el;
                  }}
                  className="flex items-start gap-4 opacity-0"
                >
                  <div className="w-12 h-12 bg-[#ffde59] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Phone</h3>
                    <p className="text-gray-400">+91 96194 83010</p>
                  </div>
                </div>

                {/* Location */}
                <div
                  ref={(el) => {
                    contactItemsRef.current[2] = el;
                  }}
                  className="flex items-start gap-4 opacity-0"
                >
                  <div className="w-12 h-12 bg-[#ffde59] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Offices</h3>
                    <p className="text-gray-400">Bangalore, Kota, Bhopal, Jabalpur</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div ref={socialLinksRef} className="mt-10">
                <h3 className="text-white font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/company/jeevijay-technologies/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors opacity-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>

                  <a href="https://www.instagram.com/jeevijay.technologies/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors opacity-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div ref={formRef} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 opacity-0">
              <ContactForm 
                showHeader={false}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
