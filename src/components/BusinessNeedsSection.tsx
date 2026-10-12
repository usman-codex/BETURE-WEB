import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { ServiceIcon } from './ServiceIcon';
import { SERVICES_DATA } from '../data/services';
import { ServiceItem } from '../types';

interface BusinessNeedsSectionProps {
  onNavigateToServices: () => void;
  onSelectService: (service: ServiceItem) => void;
}

export const BusinessNeedsSection: React.FC<BusinessNeedsSectionProps> = ({
  onNavigateToServices,
  onSelectService,
}) => {
  // Ordered exact 7 services requested by user:
  // Digital Marketing, SEO, Web Development, IoT, GLM, Facebook Monetization, E-Commerce
  const requestedServiceIds = [
    'digital-marketing',
    'seo-services',
    'web-development',
    'iot-development',
    'glm-ai-development',
    'facebook-monetization',
    'ecommerce-development',
    'graphic-design',
  ];

  const featuredServices = requestedServiceIds
    .map((id) => SERVICES_DATA.find((s) => s.id === id))
    .filter((s): s is ServiceItem => Boolean(s));

  return (
    <section 
      id="business-needs-section" 
      className="relative w-full py-16 sm:py-20 bg-[#F5F8FC] overflow-hidden border-b border-[#D8E6F8]/50"
    >
      {/* Decorative Brand Shapes */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-12 right-0 sm:right-6 md:right-12 w-64 h-64 sm:w-88 sm:h-88 z-0 opacity-70"
      >
        <div className="relative w-full h-full">
          <div className="absolute top-0 right-4 w-48 h-48 sm:w-60 sm:h-60 rotate-45 rounded-3xl border-2 border-[#16A5CE]/30 bg-gradient-to-br from-[#D8E6F8]/40 to-[#16A5CE]/10 backdrop-blur-[1px]" />
          <div className="absolute top-6 right-10 w-38 h-38 sm:w-48 sm:h-48 rotate-45 rounded-2xl border-2 border-[#2E54AD]/40 bg-gradient-to-br from-[#2E54AD]/20 to-[#162E66]/20" />
          <div className="absolute top-12 right-16 w-26 h-26 sm:w-32 sm:h-32 rotate-45 rounded-xl bg-gradient-to-br from-[#011337] to-[#2E54AD] opacity-90 shadow-xl shadow-[#2E54AD]/20" />
          <div className="absolute top-2 right-36 w-3 h-3 rounded-full bg-[#16A5CE]" />
          <div className="absolute top-40 right-6 w-2.5 h-2.5 rounded-full bg-[#2E54AD]" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <motion.div
            initial={{ x: -120, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="max-w-2xl origin-left"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#011337] tracking-tight leading-tight font-heading">
              We Offer Everything That Your Business Needs
            </h2>
          </motion.div>

          <div className="flex items-center">
            <button
              id="see-all-services-btn"
              onClick={onNavigateToServices}
              className="group relative inline-flex items-center gap-2.5 text-sm sm:text-base font-bold text-[#011337] hover:text-[#2E54AD] transition-colors duration-300 pb-1.5 cursor-pointer font-heading"
            >
              <span>See All</span>
              <span className="w-7 h-7 rounded-full bg-[#D8E6F8]/50 group-hover:bg-[#2E54AD] text-[#011337] group-hover:text-white flex items-center justify-center transition-all duration-300 transform group-hover:translate-x-1.5 shadow-xs">
                <ChevronRight className="w-4 h-4 transition-transform duration-300" />
              </span>
              <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-gradient-to-r from-[#2E54AD] to-[#16A5CE] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out rounded-full" />
            </button>
          </div>
        </div>

        {/* Compact Services Cards Grid with Transparent Blurred Overlay */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {featuredServices.map((service, index) => {
            return (
              <motion.div
                key={service.id}
                id={`business-card-${service.id}`}
                initial={{ y: 35, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onClick={() => onSelectService(service)}
                className="relative h-72 sm:h-76 w-full rounded-2xl bg-white border border-[#D8E6F8] hover:border-[#16A5CE] shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer select-none"
              >
                {/* 1. Base Front View (Clean & Compact, No "Hover for details" text) */}
                <div className="absolute inset-0 w-full h-full p-6 flex flex-col items-center justify-center text-center">
                  
                  {/* Clean Icon Container */}
                  <div className="w-20 h-20 rounded-2xl bg-[#F5F8FC] border border-[#D8E6F8]/70 flex items-center justify-center text-[#011337] transition-all duration-300 group-hover:scale-105 group-hover:shadow-md">
                    <ServiceIcon 
                      name={service.iconName} 
                      size={54} 
                      className="w-14 h-14"
                      color="#011337" 
                      accentColor="#16A5CE"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-extrabold text-[#011337] mt-4 leading-snug tracking-tight font-heading group-hover:text-[#2E54AD] transition-colors px-2">
                    {service.shortTitle}
                  </h3>
                </div>

                {/* 2. Slide-Up Overlay Layer with Frosted Glass Blur (Transparent blur background) */}
                <div 
                  className="absolute inset-0 w-full h-full rounded-2xl bg-[#011337]/50 backdrop-blur-2xl backdrop-saturate-150 p-5 text-white flex flex-col justify-between translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out border border-[#16A5CE]/50 shadow-2xl z-20"
                >
                  {/* Clean Top Title */}
                  <div className="border-b border-white/15 pb-2.5">
                    <h4 className="text-base sm:text-lg font-black text-white tracking-tight leading-tight font-heading">
                      {service.shortTitle}
                    </h4>
                  </div>

                  {/* Middle Description Only */}
                  <div className="my-auto py-1">
                    <p className="text-xs sm:text-sm text-[#D8E6F8] leading-relaxed font-normal line-clamp-4">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Bottom Action Bar: Hover specifically on "View Details" to trigger left-to-right underline & color change */}
                  <div className="pt-3 border-t border-white/15 flex items-center justify-between">
                    <div className="group/details relative inline-flex flex-col py-1 cursor-pointer">
                      <span className="text-xs sm:text-sm font-extrabold tracking-wide text-[#16A5CE] group-hover/details:text-white transition-colors duration-300 font-heading">
                        View Details
                      </span>
                      {/* Left-to-right underline animation ONLY when hovering View Details */}
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#16A5CE] to-white origin-left scale-x-0 group-hover/details:scale-x-100 transition-transform duration-300 ease-out rounded-full shadow-[0_0_8px_#16A5CE]" />
                    </div>

                    <span className="w-7 h-7 rounded-full bg-[#16A5CE] text-[#011337] flex items-center justify-center transform group-hover:translate-x-1 transition-transform shadow-md">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
