'use client';
import React from 'react';
import { MapPin } from 'lucide-react';
import { testimonials } from '@/data/Testimonials.data';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper modules
import { Autoplay, EffectCoverflow } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-100 mb-4">
            Our Presence <span className="text-[#ffde59]">Across India</span>  
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Serving clients across India from our strategic office locations
          </p>
        </div>

        {/* Locations Swiper */}
        <div className="locations-swiper" data-aos="fade-up" data-aos-delay="200">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            spaceBetween={30}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
          
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, EffectCoverflow]}
            className="mySwiper !pb-16"
          >
            {testimonials.map((location) => (
              <SwiperSlide key={location.id} className="!w-[90%] md:!w-[600px]">
                <LocationCard location={location} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

const LocationCard = ({ location }: any) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
      {/* City Image */}
      <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
        <img
          src={location.image}
          alt={location.city}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
      </div>

      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
        {/* City Name */}
        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-[#ffde59]">
          {location.city}
        </h3>

        {/* Address */}
        <div className="flex items-start gap-3 bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-white/10">
          <MapPin className="w-5 h-5 text-[#ffde59] flex-shrink-0 mt-1" />
          <p className="text-sm md:text-base leading-relaxed text-gray-100">
            {location.address}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
