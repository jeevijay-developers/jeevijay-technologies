"use client";

import { Card, CardBody } from "@heroui/card";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: "⚡",
      title: "8 Industry Verticals",
      description:
        "Deep domain expertise across Healthcare, Education, FMCG, E-commerce, Logistics, Manufacturing, Finance, and Hospitality sectors.",
    },
    {
      icon: "😊",
      title: "95+ PageSpeed Score",
      description:
        "Lightning-fast performance with 2.5s average page load time, optimised for Indian internet infrastructure and mobile networks.",
    },
    {
      icon: "🕐",
      title: "100% Mobile Responsive",
      description:
        "Flawless experience across all devices, screen sizes, and mobile browsers with responsive design excellence.",
    },
    {
      icon: "💰",
      title: "350% Average ROAS",
      description:
        "Three-and-half rupees returned for every rupee invested in paid advertising campaigns with data-driven optimisation.",
    },
    {
      icon: "🧠",
      title: "67% Lead Cost Reduction",
      description:
        "Continuous optimisation reducing customer acquisition costs by two-thirds through strategic campaign management.",
    },
    {
      icon: "📈",
      title: "89% Conversion Rate",
      description:
        "High-converting landing pages turning cold traffic into qualified sales opportunities with strategic design.",
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#ffde59] text-black text-sm font-medium px-4 py-2 rounded-full mb-6">
            Benefits
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-white mb-6">
            Why Leading Businesses
            <br />
            Choose Jeevijay Technologies
          </h2>
          <p className="text-md md:text-[20px] text-gray-400 mb-10 max-w-3xl mx-auto">
            Industry-leading performance metrics, deep domain expertise, and
            proven results driving measurable business outcomes across eight
            critical sectors.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-transparent to-[#ffde59]/10 border border-zinc-800 hover:border-zinc-700 transition-all duration-300"
            >
              <CardBody className="p-8">
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-zinc-800/50 flex items-center justify-center text-2xl mb-6">
                  {benefit.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
