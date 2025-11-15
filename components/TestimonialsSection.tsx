"use client";

import { Card, CardBody } from "@heroui/card";
import { FiStar } from "react-icons/fi";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      rating: 5,
      quote:
        "Jeevijay Technologies transformed our patient management system with intuitive design and robust functionality. The telemedicine platform they built has significantly improved our healthcare delivery.",
      name: "Dr. Rajesh Kumar",
      title: "Medical Director, Apollo HealthCare",
      avatar: "/avatars/james.jpg",
    },
    {
      rating: 5,
      quote:
        "The e-commerce platform they developed increased our conversion rate by 89%. Their SEO expertise brought us to the first page of Google within three months. Outstanding technical excellence.",
      name: "Priya Sharma",
      title: "Founder, StyleCraft Fashion",
      avatar: "/avatars/sophia.jpg",
    },
    {
      rating: 5,
      quote:
        "Our logistics operations improved dramatically with the fleet management system. Real-time tracking and route optimisation reduced delivery times by 40% and operational costs significantly.",
      name: "Amit Patel",
      title: "Operations Head, SwiftMove Logistics",
      avatar: "/avatars/david.jpg",
    },
    {
      rating: 5,
      quote:
        "The learning management system they built handles 50,000+ students seamlessly. Their attention to detail, technical expertise, and ongoing support has been exemplary throughout our partnership.",
      name: "Meera Reddy",
      title: "Director, EduTech Academy",
      avatar: "/avatars/emily.jpg",
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-purple-600 text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-white mb-6">
            Trusted by Industry Leaders
            <br />
            Across Eight Sectors
          </h2>
          <p className="text-md md:text-[20px] text-gray-400 mb-10 max-w-3xl mx-auto">
            Real businesses achieving measurable results through our technology
            solutions and digital transformation expertise.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-all duration-300"
            >
              <CardBody className="p-8">
                {/* Star Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} className="w-5 h-5 fill-white text-white" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-300 text-base leading-relaxed mb-8">
                  "{testimonial.quote}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  {/* Avatar Placeholder */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>

                  {/* Name and Title */}
                  <div>
                    <p className="text-white font-semibold text-base">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-400 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
