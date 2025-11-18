"use client";

import Image from "next/image";

export const ProcessSection = () => {
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
        <div className="text-center mb-16">
          <span className="inline-block bg-[#ffde59] text-black text-sm font-medium px-4 py-2 rounded-full mb-6">
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

        {/* Process Steps Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
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
