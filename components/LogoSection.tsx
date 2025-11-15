"use client";

import Image from "next/image";

export const LogoSection = () => {
  // Company logos
  const logos = [
    { name: "Bridgestone", src: "/1.png" },
    { name: "TCS", src: "/2.png" },
    { name: "Bada Business", src: "/3.png" },
    { name: "CoinDCX", src: "/4.png" },
    { name: "Bikaji", src: "/5.png" },
    { name: "Aditya Birla Group", src: "/6.png" },
    { name: "ixigo", src: "/7.png" },
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-16 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <span className="inline-block bg-purple-600 text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
            Brands who trusts us
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
            Trusted by 50+ Growing Businesses
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
                className="flex-shrink-0 flex items-center justify-center min-w-[300px] h-40 px-8"
              >
                <div className="w-full h-full flex items-center justify-center rounded-lg hover:bg-white/5 transition-all duration-300 p-6">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={280}
                    height={130}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
