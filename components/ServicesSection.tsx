"use client";

import Image from "next/image";

export const ServicesSection = () => {
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
        <div className="text-center mb-16">
          <span className="inline-block bg-[#ffde59] text-black text-sm font-medium px-4 py-2 rounded-full mb-6">
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

        {/* Services Grid */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div
                className={`${
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
                className={`${
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
