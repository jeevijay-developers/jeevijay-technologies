"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap, createScrollTrigger, DURATIONS } from "@/config/gsap";

export const ServicesSection = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);
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
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }

    if (touchStart - touchEnd < -75) {
      // Swiped right
      setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
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

    // Service cards animation
    serviceRefs.current.forEach((service, index) => {
      if (service) {
        const content = service.querySelector(".service-content");
        const image = service.querySelector(".service-image");

        if (content) {
          gsap.fromTo(
            content,
            { opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 30 },
            {
              opacity: 1,
              x: 0,
              y: 0,
              duration: DURATIONS.verySlow,
              ease: "power2.out",
              ...createScrollTrigger(service, { start: "top 80%" }),
            }
          );
        }

        if (image) {
          gsap.fromTo(
            image,
            { opacity: 0, x: index % 2 === 0 ? 50 : -50, scale: 0.95 },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: DURATIONS.verySlow,
              ease: "power2.out",
              ...createScrollTrigger(service, { start: "top 80%" }),
              delay: 0.2,
            }
          );
        }
      }
    });

    // Auto-scroll carousel for mobile
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      category: "App Development",
      title: "Native & Cross-Platform Mobile Solutions",
      description:
        "Enterprise-grade Android, iOS, and cross-platform applications engineered for speed, security, and seamless scalability. Native and React Native/Flutter solutions delivering exceptional performance across all devices.",
      features: [
        "Native iOS & Android",
        "Cross-Platform Apps",
        "API Integration",
      ],
      image: "/services/app_dev.png",
    },
    {
      category: "Website Development",
      title: "SEO-Optimised Digital Platforms",
      description:
        "Fast, responsive, and search-engine-optimised websites that convert visitors into customers. Corporate websites, e-commerce platforms, LMS, CRM portals, and custom workflow applications.",
      features: ["Corporate Sites", "E-commerce", "Custom Portals"],
      image: "/services/web_dev.png",
    },

    {
      category: "UI/UX Design",
      title: "Conversion-Led User Experiences",
      description:
        "Modern, minimal interfaces with clean interaction flows that guide users naturally towards desired actions. User research, prototyping, visual design, and usability testing for maximum conversion rates.",
      features: ["User Research", "Prototyping", "Visual Design"],
      image: "/services/UX_UI.png",
    },
    {
      category: "Digital Marketing",
      title: "Data-Driven Growth Strategies",
      description:
        "Performance marketing combining strategic planning, creative excellence, and data analysis. Meta Ads, Google Ads, SEO, and marketing automation delivering 3-5x ROAS with transparent reporting.",
      features: ["Meta & Google Ads", "SEO Services", "Marketing Automation"],
      image: "/services/digital.png",
    },
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className="badge inline-block bg-[#ffde59] text-black text-sm font-medium px-4 py-2 rounded-full mb-6">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-white mb-6">
            Comprehensive Technology Services
            <br />
            for Business Growth
          </h2>
          <p className="text-md md:text-[20px] text-gray-400 mb-10 max-w-3xl mx-auto">
            From strategic planning and design through development, deployment,
            and continuous optimisation. We combine technical excellence with
            business acumen to deliver measurable returns on investment.
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
            {services.map((service, index) => (
              <div key={index} className="min-w-full px-2">
                <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl p-6 border border-zinc-800">
                  <p className="text-[#ffde59] text-xs font-medium mb-2">
                    {service.category}
                  </p>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-black/40 border border-zinc-800 text-xs text-gray-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {services.map((_, index) => (
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

        {/* Desktop Grid */}
        <div className="hidden md:block space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => {
                serviceRefs.current[index] = el;
              }}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div
                className={`service-content ${
                  index % 2 === 1 ? "md:order-2" : ""
                } bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl p-8 border border-zinc-800 hover:border-zinc-700 transition-all duration-300`}
              >
                <p className="text-[#ffde59] text-sm font-medium mb-3">
                  {service.category}
                </p>
                <h3 className="text-3xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 rounded-lg bg-black/40 border border-zinc-800 text-sm text-gray-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image Display */}
              <div
                className={`service-image ${
                  index % 2 === 1 ? "md:order-1" : ""
                } relative h-80 rounded-xl overflow-hidden flex items-center justify-center max-w-md mx-auto`}
              >
                <Image
                  src={service.image}
                  alt={service.category}
                  width={600}
                  height={384}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
