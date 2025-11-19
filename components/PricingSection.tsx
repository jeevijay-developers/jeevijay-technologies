"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Button } from "@heroui/button";
import { Switch } from "@heroui/switch";
import { FiCheck, FiZap, FiUsers, FiTrendingUp } from "react-icons/fi";
import { gsap, createScrollTrigger, DURATIONS } from "@/config/gsap";

export const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
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
      setCurrentSlide((prev) => (prev + 1) % pricingPlans.length);
    }

    if (touchStart - touchEnd < -75) {
      // Swiped right
      setCurrentSlide(
        (prev) => (prev - 1 + pricingPlans.length) % pricingPlans.length
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

    // Toggle switch animation
    if (toggleRef.current) {
      gsap.fromTo(
        toggleRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: DURATIONS.slow,
          ease: "power2.out",
          ...createScrollTrigger(toggleRef.current, { start: "top 85%" }),
          delay: 0.6,
        }
      );
    }

    // Pricing cards staggered animation
    cardRefs.current.forEach((card, index) => {
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

    // Auto-scroll carousel for mobile
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % pricingPlans.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const pricingPlans = [
    {
      icon: <FiZap className="w-5 h-5" />,
      name: "Starter",
      description:
        "Perfect for startups and small businesses launching their digital presence.",
      monthlyPrice: 37,
      annualPrice: 30,
      features: [
        "Basic workflow automation",
        "AI-powered personal assistant",
        "Standard analytics & reporting",
        "Email & chat support",
        "Up to 3 AI integrations",
      ],
      buttonText: "Choose this plan",
      buttonVariant: "bordered" as const,
      popular: false,
    },
    {
      icon: <FiTrendingUp className="w-5 h-5" />,
      name: "Professional",
      description:
        "Ideal for growing businesses seeking comprehensive digital solutions.",
      monthlyPrice: 75,
      annualPrice: 60,
      features: [
        "Advanced workflow automation",
        "AI-driven sales & marketing tools",
        "Enhanced data analytics & insights",
        "Priority customer support",
        "Up to 10 AI integrations",
      ],
      buttonText: "Choose this plan",
      buttonVariant: "solid" as const,
      popular: true,
    },
    {
      icon: <FiUsers className="w-5 h-5" />,
      name: "Enterprise",
      price: "Custom",
      description:
        "Tailored solutions for large enterprises with complex requirements.",
      features: [
        "Fully customizable AI automation",
        "Dedicated AI business consultant",
        "Enterprise-grade compliance",
        "24/7 VIP support",
        "Unlimited AI integrations",
      ],
      buttonText: "Schedule a call",
      buttonVariant: "bordered" as const,
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-12">
          <span className="badge inline-block bg-[#ffde59] text-black text-sm font-medium px-4 py-2 rounded-full mb-6">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-white mb-6">
            Flexible Plans for Every
            <br />
            Business Stage
          </h2>
          <p className="text-md md:text-[20px] text-gray-400 mb-8 max-w-3xl mx-auto">
            Choose a plan that aligns with your growth objectives and scale
            seamlessly as your business expands.
          </p>

          {/* Toggle Switch */}
          <div
            ref={toggleRef}
            className="flex items-center justify-center gap-4"
          >
            <span
              className={`text-base font-medium transition-colors ${
                !isAnnual ? "text-white" : "text-gray-500"
              }`}
            >
              Monthly
            </span>
            <Switch
              isSelected={isAnnual}
              onValueChange={setIsAnnual}
              size="lg"
              classNames={{
                wrapper: "bg-zinc-700 group-data-[selected=true]:bg-[#ffde59]",
              }}
            />
            <span
              className={`text-base font-medium transition-colors ${
                isAnnual ? "text-white" : "text-gray-500"
              }`}
            >
              Annually
            </span>
          </div>
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
            {pricingPlans.map((plan, index) => (
              <div key={index} className="min-w-full px-2">
                <Card
                  className={`bg-gradient-to-br ${
                    plan.popular
                      ? "from-[#ffde59]/20 to-zinc-950 border-2 border-[#ffde59]"
                      : "from-zinc-900 to-zinc-950 border border-zinc-800"
                  } relative`}
                >
                  {plan.popular && (
                    <div className="absolute left-1/2 -translate-x-1/2">
                      <span className="bg-[#ffde59] text-black text-xs font-medium px-3 py-1 rounded-full">
                        Popular
                      </span>
                    </div>
                  )}

                  <CardHeader className="flex-col items-start gap-2 pb-4 pt-6">
                    {/* Icon */}
                    <div className="w-10 h-10 rounded-lg bg-[#ffde59]/20 flex items-center justify-center text-[#ffde59]">
                      {plan.icon}
                    </div>

                    {/* Plan Name */}
                    <h3 className="text-xl font-bold text-white">
                      {plan.name}
                    </h3>

                    {/* Price */}
                    <div className="flex items-baseline gap-1">
                      {plan.price ? (
                        <span className="text-3xl font-bold text-white">
                          {plan.price}
                        </span>
                      ) : (
                        <>
                          <span className="text-3xl font-bold text-white">
                            ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                          </span>
                          <span className="text-gray-400 text-sm">/month</span>
                        </>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-xs">{plan.description}</p>
                  </CardHeader>

                  <CardBody className="pt-0">
                    {/* CTA Button */}
                    <Button
                      className={`w-full mb-4 font-medium text-sm ${
                        plan.buttonVariant === "solid"
                          ? "bg-[#ffde59] hover:bg-[#e6c750] text-black"
                          : "border-2 border-zinc-700 hover:border-zinc-600 text-white bg-transparent"
                      }`}
                      size="md"
                    >
                      {plan.buttonText}
                    </Button>

                    {/* Features List */}
                    <div className="space-y-2">
                      <p className="text-white font-semibold text-xs mb-2">
                        What's included:
                      </p>
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <FiCheck className="w-4 h-4 text-[#ffde59] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-xs">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {pricingPlans.map((_, index) => (
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

        {/* Desktop Pricing Cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
            >
              <Card
                className={`bg-gradient-to-br ${
                  plan.popular
                    ? "from-[#ffde59]/20 to-zinc-950 border-2 border-[#ffde59]"
                    : "from-zinc-900 to-zinc-950 border border-zinc-800"
                } relative`}
              >
                {plan.popular && (
                  <div className="absolute left-1/2 -translate-x-1/2">
                    <span className="bg-[#ffde59] text-black text-sm font-medium px-4 py-1 rounded-full">
                      Popular
                    </span>
                  </div>
                )}

                <CardHeader className="flex-col items-start gap-3 pb-6 pt-8">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-[#ffde59]/20 flex items-center justify-center text-[#ffde59]">
                    {plan.icon}
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-white">{plan.name}</h3>

                  {/* Price */}
                  <div className="flex items-baseline gap-1">
                    {plan.price ? (
                      <span className="text-4xl font-bold text-white">
                        {plan.price}
                      </span>
                    ) : (
                      <>
                        <span className="text-4xl font-bold text-white">
                          ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                        </span>
                        <span className="text-gray-400 text-base">/month</span>
                      </>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm">{plan.description}</p>
                </CardHeader>

                <CardBody className="pt-0">
                  {/* CTA Button */}
                  <Button
                    className={`w-full mb-6 font-medium ${
                      plan.buttonVariant === "solid"
                        ? "bg-[#ffde59] hover:bg-[#e6c750] text-black"
                        : "border-2 border-zinc-700 hover:border-zinc-600 text-white bg-transparent"
                    }`}
                    size="lg"
                  >
                    {plan.buttonText}
                  </Button>

                  {/* Features List */}
                  <div className="space-y-3">
                    <p className="text-white font-semibold text-sm mb-3">
                      What's included:
                    </p>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <FiCheck className="w-5 h-5 text-[#ffde59] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
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
