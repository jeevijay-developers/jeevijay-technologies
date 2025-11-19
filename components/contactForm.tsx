"use client";

import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";
import { useState } from "react";
import { WEB3FORMS_CONFIG } from "@/config/web3forms";

interface ContactFormProps {
  showHeader?: boolean;
  headerTitle?: string;
  headerDescription?: string;
}

export default function ContactForm({ 
  showHeader = true,
  headerTitle = "Ready to Automate Smarter?",
  headerDescription = "Schedule a Call and Begin Automating"
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage("");

    try {
      const response = await fetch(WEB3FORMS_CONFIG.endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          subject: WEB3FORMS_CONFIG.emailConfig.subject,
          replyto: formData.email,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus("error");
        setErrorMessage(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {showHeader && (
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-white mb-4">
            {headerTitle}
          </h2>
          <p className="text-md md:text-[20px] text-gray-400 mb-10 max-w-3xl mx-auto">
            {headerDescription}
          </p>
        </div>
      )}

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-6 mb-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Name Input */}
          <Input
            type="text"
            name="name"
            label="Name"
            placeholder="Enter your name"
            variant="bordered"
            size="lg"
            value={formData.name}
            onChange={handleChange}
            required
            classNames={{
              input: "text-white",
              label: "text-gray-400",
              inputWrapper:
                "bg-transparent border-zinc-800 hover:border-zinc-700 focus-within:!border-[#ffde59]",
            }}
          />

          {/* Email Input */}
          <Input
            type="email"
            name="email"
            label="Email Address"
            placeholder="Enter your email"
            variant="bordered"
            size="lg"
            value={formData.email}
            onChange={handleChange}
            required
            classNames={{
              input: "text-white",
              label: "text-gray-400",
              inputWrapper:
                "bg-transparent border-zinc-800 hover:border-zinc-700 focus-within:!border-[#ffde59]",
            }}
          />
        </div>

        {/* Phone Number Input - Full Width */}
        <Input
          type="tel"
          name="phone"
          label="Phone Number"
          placeholder="Enter your phone number"
          variant="bordered"
          size="lg"
          value={formData.phone}
          onChange={handleChange}
          required
          classNames={{
            input: "text-white",
            label: "text-gray-400",
            inputWrapper:
              "bg-transparent border-zinc-800 hover:border-zinc-700 focus-within:!border-[#ffde59]",
          }}
        />

        {/* Message Textarea */}
        <Textarea
          name="message"
          label="Message"
          placeholder="Enter your message"
          variant="bordered"
          size="lg"
          minRows={6}
          value={formData.message}
          onChange={handleChange}
          required
          classNames={{
            input: "text-white",
            label: "text-gray-400",
            inputWrapper:
              "bg-transparent border-zinc-800 hover:border-zinc-700 focus-within:!border-[#ffde59]",
          }}
        />

        {/* Submit Button */}
        <div className="flex justify-center">
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="bg-[#ffde59] hover:bg-[#e6c750] text-black font-medium px-8 py-6 text-base rounded-lg transition-all disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </div>

        {/* Success Message */}
        {submitStatus === "success" && (
          <div className="bg-green-500/10 border border-green-500/50 rounded-lg p-4 text-green-400 text-center animate-fadeIn">
            ✓ Thank you! We'll get back to you soon.
          </div>
        )}

        {/* Error Message */}
        {submitStatus === "error" && (
          <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-4 text-red-400 text-center animate-fadeIn">
            ✗ {errorMessage}
          </div>
        )}
      </form>
    </>
  );
}
