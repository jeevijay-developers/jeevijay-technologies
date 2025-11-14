"use client";

export const LogoSection = () => {
  // Sample logo data - replace with your actual company logos
  const logos = [
    { name: "Company 1", src: "/logos/company1.svg" },
    { name: "Company 2", src: "/logos/company2.svg" },
    { name: "Company 3", src: "/logos/company3.svg" },
    { name: "Company 4", src: "/logos/company4.svg" },
    { name: "Company 5", src: "/logos/company5.svg" },
    { name: "Company 6", src: "/logos/company6.svg" },
    { name: "Company 7", src: "/logos/company7.svg" },
    { name: "Company 8", src: "/logos/company8.svg" },
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-16 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">
            Trusted by industry leaders
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Companies we work with
          </h2>
        </div>

        {/* Infinite Logo Slider */}
        <div className="relative overflow-hidden">
          {/* Left shadow overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>

          {/* Right shadow overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

          <div className="flex gap-12 animate-infinite-scroll">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center min-w-[200px] h-24 px-8"
              >
                {/* Placeholder for logo - replace with actual logo images */}
                <div className="w-full h-full flex items-center justify-center bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <span className="text-white/60 font-semibold text-lg">
                    {logo.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
