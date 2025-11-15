"use client";

import { useState } from "react";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Button } from "@heroui/button";
import { Switch } from "@heroui/switch";
import { FiCheck, FiZap, FiUsers, FiTrendingUp } from "react-icons/fi";

export const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

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
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[#ffde59] text-black text-sm font-medium px-4 py-2 rounded-full mb-6">
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
          <div className="flex items-center justify-center gap-4">
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

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
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
          ))}
        </div>
      </div>
    </section>
  );
};
