"use client";

export const ServicesSection = () => {
  const services = [
    {
      category: "Workflow Automation",
      title: "Automate repetitive tasks",
      description:
        "We help you streamline internal operations by automating manual workflows like data entry, reporting, and approval chains saving time and cutting down errors.",
      features: ["Internal Task Bots", "100+ Automations"],
      image: "/images/workflow-automation.png", // Add your image here
    },
    {
      category: "AI Assistant",
      title: "Delegate Daily Tasks",
      description:
        "From scheduling meetings to managing emails and summarizing reports, our AI assistants work where the task to help your business running smarter and faster.",
      features: ["Summaries", "Scheduling", "Many more"],
      image: "/images/ai-assistant.png", // Add your image here
    },
    {
      category: "Sales & Marketing",
      title: "Accelerate Sales Growth",
      description:
        "AI tools for lead generation, personalized outreach, and automated content creation that scales your sales efforts and builds stronger brand presence.",
      features: ["Leads", "Content", "Social post"],
      image: "/images/sales-marketing.png", // Add your image here
    },
    {
      category: "Custom Projects",
      title: "Build Smarter Systems",
      description:
        "Whether you're starting from scratch or enhancing an existing system, we offer strategic consulting and develop custom AI projects aligned with your unique goals.",
      features: ["Strategy", "Custom AI", "Consulting"],
      image: "/images/custom-projects.png", // Add your image here
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">
            Our Services
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            AI Solutions That Take Your
            <br />
            Business to the Next Level
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            We design, develop, and implement automation tools that help you
            work smarter, not harder
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
                <p className="text-purple-400 text-sm font-medium mb-3">
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

              {/* Image Placeholder */}
              <div
                className={`${
                  index % 2 === 1 ? "md:order-1" : ""
                } relative h-96 bg-zinc-950 rounded-xl border border-zinc-800 overflow-hidden`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Replace this div with actual image */}
                  <div className="text-gray-600 text-sm">
                    Image placeholder for {service.category}
                  </div>
                  {/* Example:
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
