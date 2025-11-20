"use client";

import CallButton from "./CallButton";
import ContactForm from "./contactForm";
import { FaLinkedin, FaInstagram, FaFacebookF } from "react-icons/fa6";
import { useEffect, useRef } from "react";
import { gsap, createScrollTrigger, DURATIONS } from "@/config/gsap";

export const ContactSection = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Form animation
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: DURATIONS.verySlow,
          ease: "power2.out",
          ...createScrollTrigger(formRef.current, { start: "top 80%" }),
          delay: 0.3,
        }
      );
    }

    // Social links animation
    if (socialRef.current) {
      const links = socialRef.current.querySelectorAll("a");

      links.forEach((link, index) => {
        gsap.fromTo(
          link,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: DURATIONS.slow,
            ease: "back.out(1.7)",
            ...createScrollTrigger(socialRef.current!, { start: "top 80%" }),
            delay: 0.5 + index * 0.1,
          }
        );
      });
    }

    // CTA card animation
    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: DURATIONS.verySlow,
          ease: "power2.out",
          ...createScrollTrigger(ctaRef.current, { start: "top 85%" }),
        }
      );
    }
  }, []);

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      {/* Decorative line */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 flex items-center gap-4 opacity-50">
        <div className="h-px w-32 bg-gradient-to-r from-transparent to-gray-600"></div>
        <span className="text-gray-500 text-sm italic">Reach out anytime</span>
        <div className="h-px w-32 bg-gradient-to-l from-transparent to-gray-600"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        {/* Contact Form Component */}
        <div ref={formRef}>
          <ContactForm />
        </div>

        {/* Social Links */}
        <div ref={socialRef} className="flex justify-center gap-6 mb-8">
          <a
            href="https://www.linkedin.com/company/jeevijay-technologies/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-zinc-800 hover:border-zinc-600 flex items-center justify-center text-gray-400 hover:text-white transition-all"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/jeevijay.technologies/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-zinc-800 hover:border-zinc-600 flex items-center justify-center text-gray-400 hover:text-white transition-all"
          >
            <FaInstagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.facebook.com/Jeevijaytech/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-zinc-800 hover:border-zinc-600 flex items-center justify-center text-gray-400 hover:text-white transition-all"
          >
            <FaFacebookF className="w-5 h-5" />
          </a>
        </div>

        {/* CTA Card */}
        <div
          ref={ctaRef}
          className="bg-gradient-to-br from-[#ffde59]/20 via-zinc-900 to-zinc-950 rounded-2xl border border-gray-900/50 p-8 md:p-12 text-center my-[8rem]"
        >
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Let AI do the Work so you can Scale Faster
          </h3>
          <p className="text-gray-400 text-md md:text-lg mb-8">
            Book a Call Today and Start Automating
          </p>
          <div className="flex justify-center">
            <CallButton />
          </div>
        </div>
      </div>
    </section>
  );
};
