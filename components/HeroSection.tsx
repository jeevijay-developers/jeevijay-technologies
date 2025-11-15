"use client";

import { Button } from "@heroui/button";
import NextLink from "next/link";
import { ParticleBackground } from "./ParticleBackground";

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Gradient Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[150px] z-[1]" />

      {/* Content */}
      <div className="relative z-[2] max-w-5xl mx-auto px-6 text-center">
        {/* New Badge */}
        <div className="inline-flex items-center justify-center mb-8">
          <span className="bg-purple-600 text-white text-sm font-medium px-4 py-2 rounded-full">
            New
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Intelligent Automation for
          <br />
          <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Modern Businesses.
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto">
          Xtract brings AI automation to your fingertips & streamline tasks.
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
