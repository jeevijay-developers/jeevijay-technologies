"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap, createScrollTrigger, DURATIONS } from "@/config/gsap";

export const ProcessSection = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
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
      setCurrentSlide((prev) => (prev + 1) % steps.length);
    }

    if (touchStart - touchEnd < -75) {
      // Swiped right
      setCurrentSlide((prev) => (prev - 1 + steps.length) % steps.length);
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

    // Step cards staggered animation
    stepRefs.current.forEach((step, index) => {
      if (step) {
        gsap.fromTo(
          step,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: DURATIONS.verySlow,
            ease: "power2.out",
            ...createScrollTrigger(step, { start: "top 80%" }),
            delay: index * 0.1,
          }
        );
      }
    });

    // Auto-scroll carousel for mobile
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % steps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      stepNumber: "Step 1",
      title: "Discovery & Strategy",
      description:
        "Comprehensive business analysis, competitive research, technology roadmap development, and measurable success metrics definition aligned with your business objectives.",
      features: [
        "Business Analysis",
        "Competitive Research",
        "Technology Roadmap",
        "Success Metrics",
        "Strategic Planning",
      ],
      image: "/process/img1.png",
    },
    {
      stepNumber: "Step 2",
      title: "Design & Prototyping",
      description:
        "User research, wireframing, high-fidelity mockups, interactive prototypes, and usability testing with real user feedback for optimal user experiences.",
      codeSnippet: `class AutomationTrigger:
    def __init__(self, schedule):
        self.schedule = schedule
        self.execute()
        
def check_trigger(self, webhook):`,
      image: "/process/img2.png",
    },
    {
      stepNumber: "Step 3",
      title: "Development & Integration",
      description:
        "Agile development methodology, API integrations, third-party service connections, and comprehensive quality assurance testing ensuring flawless functionality.",
      integrations: [
        { name: "Our solution", icon: "🔮" },
        { name: "Your stack", icon: "⚙️" },
      ],
      image: "/process/img3.png",
    },
    {
      stepNumber: "Step 4",
      title: "Launch & Optimisation",
      description:
        "Deployment planning, performance monitoring, continuous improvement, and data-driven enhancement strategies ensuring sustained business growth.",
      metrics: [
        {
          name: "Performance Monitoring",
          detail: "Real-time analytics tracking",
          status: "up",
        },
        {
          name: "System Updates",
          detail: "Continuous improvements",
          status: "update",
        },
        {
          name: "Quality Assurance",
          detail: "Optimal performance",
          status: "check",
        },
      ],
      image: "/process/img4.png",
    },
  ];

  return (
    <section id="process" className="w-full py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className="badge inline-block bg-[#ffde59] text-black text-sm font-medium px-4 py-2 rounded-full mb-6">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-white mb-6">
            Our Proven Development
            <br />
            Process for Success
          </h2>
          <p className="text-md md:text-[20px] text-gray-400 mb-10 max-w-3xl mx-auto">
            From discovery to deployment, our integrated approach addresses
            every dimension of digital transformation, delivering solutions that
            generate measurable business results.
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
            {steps.map((step, index) => (
              <div key={index} className="min-w-full px-2">
                <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl p-6 border border-zinc-800">
                  <p className="text-gray-500 text-xs font-medium mb-2">
                    {step.stepNumber}
                  </p>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {steps.map((_, index) => (
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
        <div className="hidden md:grid md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => {
                stepRefs.current[index] = el;
              }}
              className="bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl p-8 border border-zinc-800 hover:border-zinc-700 transition-all duration-300"
            >
              {/* Step Header */}
              <div className="mb-6">
                <p className="text-gray-500 text-sm font-medium mb-2">
                  {step.stepNumber}
                </p>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Visual Content */}
              <div className="relative h-64 rounded-xl overflow-hidden flex items-end">
                {/* Step 1 - Checklist */}
                {index === 0 && step.features && (
                  <Image
                    src={"/process/img1.png"}
                    alt="step-1"
                    width={500}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                )}

                {/* Step 2 - Code Snippet */}
                {index === 1 && step.codeSnippet && (
                  <Image
                    src={"/process/img2.png"}
                    alt="step-2"
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                )}

                {/* Step 3 - Integration Icons */}
                {index === 2 && step.integrations && (
                  <Image
                    src={"/process/img3.png"}
                    alt="step-3"
                    width={500}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                )}

                {/* Step 4 - Metrics List */}
                {index === 3 && step.metrics && (
                  <Image
                    src={"/process/img4.png"}
                    alt="step-4"
                    width={500}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
