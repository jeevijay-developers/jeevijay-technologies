"use client";

import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";
import CallButton from "./CallButton";
import { FaLinkedin, FaInstagram, FaFacebookF } from "react-icons/fa6";

export const ContactSection = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Decorative line */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 flex items-center gap-4 opacity-50">
        <div className="h-px w-32 bg-gradient-to-r from-transparent to-gray-600"></div>
        <span className="text-gray-500 text-sm italic">Reach out anytime</span>
        <div className="h-px w-32 bg-gradient-to-l from-transparent to-gray-600"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12 mt-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Ready to Automate Smarter?
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's <span className="italic font-serif">Build Together</span>
          </h3>
          <p className="text-gray-400 text-lg">
            Schedule a Call and Begin Automating
          </p>
        </div>

        {/* Contact Form */}
        <form className="space-y-6 mb-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Name Input */}
            <Input
              type="text"
              label="Name"
              placeholder="Enter your name"
              variant="bordered"
              size="lg"
              classNames={{
                input: "text-white",
                label: "text-gray-400",
                inputWrapper:
                  "bg-transparent border-zinc-800 hover:border-zinc-700 focus-within:!border-purple-600",
              }}
            />

            {/* Subject Input */}
            <Input
              type="text"
              label="Subject"
              placeholder="Enter subject"
              variant="bordered"
              size="lg"
              classNames={{
                input: "text-white",
                label: "text-gray-400",
                inputWrapper:
                  "bg-transparent border-zinc-800 hover:border-zinc-700 focus-within:!border-purple-600",
              }}
            />
          </div>

          {/* Message Textarea */}
          <Textarea
            label="Message"
            placeholder="Enter your message"
            variant="bordered"
            size="lg"
            minRows={6}
            classNames={{
              input: "text-white",
              label: "text-gray-400",
              inputWrapper:
                "bg-transparent border-zinc-800 hover:border-zinc-700 focus-within:!border-purple-600",
            }}
          />

          {/* Submit Button */}
          <div className="flex justify-center">
            <Button
              type="submit"
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-6 text-base rounded-lg transition-all"
            >
              Send Message
            </Button>
          </div>
        </form>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-zinc-800 hover:border-zinc-600 flex items-center justify-center text-gray-400 hover:text-white transition-all"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-zinc-800 hover:border-zinc-600 flex items-center justify-center text-gray-400 hover:text-white transition-all"
          >
            <FaInstagram className="w-5 h-5" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-zinc-800 hover:border-zinc-600 flex items-center justify-center text-gray-400 hover:text-white transition-all"
          >
            <FaFacebookF className="w-5 h-5" />
          </a>
        </div>

        {/* CTA Card */}
        <div className="bg-gradient-to-br from-purple-900/30 via-zinc-900 to-zinc-950 rounded-2xl border border-gray-900/50 p-12 text-center my-[8rem]">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Let AI do the Work so
            <br />
            you can Scale Faster
          </h3>
          <p className="text-gray-400 text-lg mb-8">
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
