"use client";

import { Card, CardBody } from "@heroui/card";
import { FiStar } from "react-icons/fi";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      rating: 5,
      quote:
        "AI automation transformed our operations by eliminating repetitive tasks and improving efficiency. Scaling our workflow has never been easier!",
      name: "James Carter",
      title: "CEO at TechFlow Solutions",
      avatar: "/avatars/james.jpg", // Replace with actual image
    },
    {
      rating: 5,
      quote:
        "With AI, we cut manual work and improved accuracy. Our team now focuses on high-impact tasks while automation handles the rest!",
      name: "Sophia Martinez",
      title: "Operations Manager at NexaCorp",
      avatar: "/avatars/sophia.jpg", // Replace with actual image
    },
    {
      rating: 5,
      quote:
        "AI-driven insights doubled our sales efficiency. We now engage leads at the right time with smarter, data-backed decisions!",
      name: "David Reynolds",
      title: "Head of Sales at GrowthPeak",
      avatar: "/avatars/david.jpg", // Replace with actual image
    },
    {
      rating: 5,
      quote:
        "Customer support is now seamless. Our response time improved drastically, and satisfaction levels are at an all-time high, thanks to xtract",
      name: "Emily Wong",
      title: "Customer Success Lead at SupportHive",
      avatar: "/avatars/emily.jpg", // Replace with actual image
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
            Why Businesses Love
            <br />
            Our AI Solutions
          </h2>
          <p className="text-md md:text-[20px] text-gray-400 mb-10 max-w-3xl mx-auto">
            Real businesses, real results with AI automation.
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
