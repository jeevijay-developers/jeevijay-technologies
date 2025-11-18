"use client";

import { Button } from "@heroui/button";
import NextLink from "next/link";
import { ParticleBackground } from "./ParticleBackground";
import { useEffect, useRef } from "react";
import { gsap, DURATIONS, EASINGS } from "@/config/gsap";

export const HeroSection = () => {
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Glow effect animation
    if (glowRef.current) {
      gsap.to(glowRef.current, {
        scale: 1.2,
        opacity: 0.4,
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }

    // Badge animation
    if (badgeRef.current) {
      gsap.to(badgeRef.current, {
        opacity: 1,
        y: 0,
        duration: DURATIONS.verySlow,
        ease: "power2.out",
        delay: 0.3,
      });
    }

    // Heading animation with split effect
    if (headingRef.current) {
      gsap.to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.8,
        ease: "power2.out",
        delay: 0.6,
      });
    }

    // Subheading animation
    if (subheadingRef.current) {
      gsap.to(subheadingRef.current, {
        opacity: 1,
        y: 0,
        duration: DURATIONS.verySlow,
        ease: "power2.out",
        delay: 1.0,
      });
    }

    // Buttons animation
    if (buttonsRef.current) {
      const buttons = buttonsRef.current.querySelectorAll("a");
      gsap.to(buttons, {
        opacity: 1,
        y: 0,
        duration: DURATIONS.slow,
        ease: "power2.out",
        stagger: 0.2,
        delay: 1.4,
      });
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Particle Background */}
      <ParticleBackground />

      {/* Gradient Glow Effect */}
      <div
        ref={glowRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ffde59]/30 rounded-full blur-[150px] z-[1]"
      />

      {/* Content */}
      <div className="relative z-[2] max-w-7xl mx-auto px-6 text-center">
        {/* SEO Badge */}
        <div ref={badgeRef} className="inline-flex items-center justify-center mb-8 opacity-0">
          <span className="bg-[#ffde59] text-black text-sm font-medium px-4 py-2 rounded-full">
            India's Premium Tech Company
          </span>
        </div>

        {/* Main Heading */}
        <h1
          ref={headingRef}
          className="text-3xl md:text-4xl lg:text-6xl font-semibold text-white mb-6 leading-tight opacity-0"
        >
          Building digital experiences <br /> that drive real business growth
        </h1>

        {/* Subheading */}
        <p
          ref={subheadingRef}
          className="text-md md:text-[20px] text-gray-400 mb-10 max-w-3xl mx-auto opacity-0"
        >
          Jeevijay Technologies is India's premium technology transformation
          company delivering powerful digital solutions across app development,
          website development, AI automation, branding, and result-oriented
          digital marketing.
        </p>

        {/* CTA Buttons */}
        <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            as={NextLink}
            href="/contact"
            size="lg"
            className="bg-[#ffde59] hover:bg-[#e6c750] text-black font-medium px-8 py-6 text-base rounded-lg transition-all opacity-0"
          >
            Get in touch →
          </Button>
          <Button
            as={NextLink}
            href="/#services"
            size="lg"
            variant="bordered"
            className="border-2 border-white/20 text-white hover:bg-white/10 font-medium px-8 py-6 text-base rounded-lg transition-all opacity-0"
          >
            View services
          </Button>
        </div>
      </div>
    </section>
  );
};
