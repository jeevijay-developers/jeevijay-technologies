"use client";

import { Card, CardBody } from "@heroui/card";
import { FiStar } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import { gsap, createScrollTrigger, DURATIONS } from "@/config/gsap";
import Image from "next/image";

export const TestimonialsSection = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swiped left
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }

    if (touchStart - touchEnd < -75) {
      // Swiped right
      setCurrentSlide(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length
      );
    }
  };

  useEffect(() => {
    // Header animation
    if (headerRef.current) {
      const badge = headerRef.current.querySelector(".badge");
      const heading = headerRef.current.querySelector("h2");
      const description = headerRef.current.querySelector("p");

      if (badge) {
        gsap.fromTo(
          badge,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: DURATIONS.slow,
            ease: "power2.out",
            ...createScrollTrigger(badge as Element, { start: "top 85%" }),
          }
        );
      }

      if (heading) {
        gsap.fromTo(
          heading,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: DURATIONS.verySlow,
            ease: "power2.out",
            ...createScrollTrigger(heading, { start: "top 85%" }),
            delay: 0.2,
          }
        );
      }

      if (description) {
        gsap.fromTo(
          description,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: DURATIONS.slow,
            ease: "power2.out",
            ...createScrollTrigger(description, { start: "top 85%" }),
            delay: 0.4,
          }
        );
      }
    }

    // Testimonial cards staggered animation
    testimonialRefs.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: DURATIONS.verySlow,
            ease: "power2.out",
            ...createScrollTrigger(card, { start: "top 85%" }),
            delay: index * 0.15,
          }
        );
      }
    });
  }, []);

  const testimonials = [
    {
      rating: 5,
      quote:
        "Jeevijay Technologies transformed our patient management system with intuitive design and robust functionality. The telemedicine platform they built has significantly improved our healthcare delivery.",
      name: "Dr. Rajesh Kumar",
      title: "Medical Director, Apollo HealthCare",
      avatar: "/testimonial/test1.png",
    },
    {
      rating: 5,
      quote:
        "The e-commerce platform they developed increased our conversion rate by 89%. Their SEO expertise brought us to the first page of Google within three months. Outstanding technical excellence.",
      name: "Priya Sharma",
      title: "Founder, StyleCraft Fashion",
      avatar: "/testimonial/test2.png",
    },
    {
      rating: 5,
      quote:
        "Our logistics operations improved dramatically with the fleet management system. Real-time tracking and route optimisation reduced delivery times by 40% and operational costs significantly.",
      name: "Amit Patel",
      title: "Operations Head, SwiftMove Logistics",
      avatar: "/testimonial/test3.png",
    },
    {
      rating: 5,
      quote:
        "The learning management system they built handles 50,000+ students seamlessly. Their attention to detail, technical expertise, and ongoing support has been exemplary throughout our partnership.",
      name: "Meera Reddy",
      title: "Director, EduTech Academy",
      avatar: "/testimonial/test4.png",
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className="badge inline-block bg-[#ffde59] text-black text-sm font-medium px-4 py-2 rounded-full mb-6">
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

        {/* Mobile Carousel */}
        <div
          className="md:hidden relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="min-w-full px-2">
                <Card className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800">
                  <CardBody className="p-6">
                    {/* Star Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FiStar
                          key={i}
                          className="w-4 h-4 fill-white text-white"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      "{testimonial.quote}"
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-3">
                      {/* Avatar */}
                      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={40}
                          height={40}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Name and Title */}
                      <div>
                        <p className="text-white font-semibold text-sm">
                          {testimonial.name}
                        </p>
                        <p className="text-gray-400 text-xs">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-[#ffde59] w-6" : "bg-zinc-700"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Testimonials Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => {
                testimonialRefs.current[index] = el;
              }}
            >
              <Card className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-all duration-300">
                <CardBody className="p-8">
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FiStar
                        key={i}
                        className="w-5 h-5 fill-white text-white"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-300 text-base leading-relaxed mb-8">
                    "{testimonial.quote}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Name and Title */}
                    <div>
                      <p className="text-white font-semibold text-base">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
