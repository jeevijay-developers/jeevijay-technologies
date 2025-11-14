"use client";

import { Card, CardBody } from "@heroui/card";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: "⚡",
      title: "Increased Productivity",
      description:
        "Gain actionable insights with AI-driven analytics to improve decision-making and strategy.",
    },
    {
      icon: "😊",
      title: "Better Customer Experience",
      description:
        "Personalized AI interactions improve response times, customer engagement, and overall satisfaction.",
    },
    {
      icon: "🕐",
      title: "24/7 Availability",
      description:
        "AI-powered systems operate around the clock, ensuring seamless support and execution without downtime.",
    },
    {
      icon: "💰",
      title: "Cost Reduction",
      description:
        "AI automation minimizes manual work, cuts operational costs, and optimizes resource allocation for better profitability.",
    },
    {
      icon: "🧠",
      title: "Data-Driven Insights",
      description:
        "Leverage AI to analyze vast data sets, identify trends, and make smarter, faster, and more accurate business decisions.",
    },
    {
      icon: "📈",
      title: "Scalability & Growth",
      description:
        "AI adapts to your business needs, allowing you to scale efficiently without increasing workload or costs.",
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">
            Benefits
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            The Key Benefits of AI
            <br />
            for Your Business Growth
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Discover how AI automation enhances efficiency, reduces costs, and
            drives business growth with smarter, faster processes.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-transparent to-purple-950/20 border border-zinc-800 hover:border-zinc-700 transition-all duration-300"
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
