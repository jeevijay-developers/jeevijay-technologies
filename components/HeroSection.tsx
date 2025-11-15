"use client";

import { Button } from "@heroui/button";
import NextLink from "next/link";
import { ParticleBackground } from "./ParticleBackground";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Particle Background */}
      <ParticleBackground />

      {/* Gradient Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[150px] z-[1]" />

      {/* Content */}
      <div className="relative z-[2] max-w-7xl mx-auto px-6 text-center">
        {/* SEO Badge */}
        <div className="inline-flex items-center justify-center mb-8">
          <span className="bg-purple-600 text-white text-sm font-medium px-4 py-2 rounded-full">
            India's Premium Tech Company
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
          Building digital experiences <br /> that drive real business growth
        </h1>

        {/* Subheading */}
        <p className="text-md md:text-[20px] text-gray-400 mb-10 max-w-3xl mx-auto">
          Jeevijay Technologies is India's premium technology transformation
          company delivering powerful digital solutions across app development,
          website development, AI automation, branding, and result-oriented
          digital marketing.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            as={NextLink}
            href="/contact"
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-6 text-base rounded-lg transition-all"
          >
            Get in touch →
          </Button>
          <Button
            as={NextLink}
            href="/services"
            size="lg"
            variant="bordered"
            className="border-2 border-white/20 text-white hover:bg-white/10 font-medium px-8 py-6 text-base rounded-lg transition-all"
          >
            View services
          </Button>
        </div>
      </div>
    </section>
  );
};
