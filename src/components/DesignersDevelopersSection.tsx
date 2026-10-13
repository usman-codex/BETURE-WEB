import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import teamImage from '../assets/images/team_collaboration.jpg';

interface DesignersDevelopersSectionProps {
  onNavigateToAbout: () => void;
  onNavigateToServices?: () => void;
}

export const DesignersDevelopersSection: React.FC<DesignersDevelopersSectionProps> = ({
  onNavigateToAbout,
  onNavigateToServices,
}) => {
  const handleExplore = () => {
    if (onNavigateToServices) {
      onNavigateToServices();
    } else {
      onNavigateToAbout();
    }
  };

  return (
    <section 
      id="designers-developers-section" 
      className="relative w-full py-16 sm:py-24 bg-white overflow-hidden border-b border-[#D8E6F8]/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7">
            
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#011337] tracking-tight leading-[1.18] font-heading">
                Work With Top Notch Designers And Developers To Get Amazing Products.
              </h2>
            </div>

            {/* Paragraph tailored specifically to Beture Web's services */}
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-[#4A5D6E] text-base sm:text-lg leading-relaxed font-sans"
            >
              <strong className="font-bold text-[#2E54AD] bg-[#2E54AD]/10 px-1.5 py-0.5 rounded-md">Beture Web</strong> is a full-service software development house delivering high-performance digital solutions for businesses worldwide. From custom <strong className="font-semibold text-[#011337]">Web & E-Commerce Development</strong> to high-intent <strong className="font-semibold text-[#011337]">SEO</strong>, performance <strong className="font-semibold text-[#011337]">Digital Marketing</strong>, and <strong className="font-semibold text-[#011337]">Facebook Monetization</strong>, we engineer products that accelerate revenue. Our specialized labs also build enterprise <strong className="font-semibold text-[#011337]">IoT Architectures</strong>, autonomous <strong className="font-semibold text-[#011337]">GLM & AI Labs</strong>, and brand-defining <strong className="font-semibold text-[#011337]">Graphic Design</strong>.
            </motion.p>

            {/* Quick Service Highlights Badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-sm font-bold text-[#011337]"
            >
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#16A5CE] shrink-0 shadow-[0_0_8px_#16A5CE]" />
                <span>Custom Web & E-Commerce</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2E54AD] shrink-0 shadow-[0_0_8px_#2E54AD]" />
                <span>Technical SEO & Digital Ads</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#16A5CE] shrink-0 shadow-[0_0_8px_#16A5CE]" />
                <span>GLM & Generative AI Labs</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2E54AD] shrink-0 shadow-[0_0_8px_#2E54AD]" />
                <span>IoT & Creative Graphic Design</span>
              </div>
            </motion.div>

            {/* Explore Button */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="pt-2"
            >
              <button
                id="explore-more-about-btn"
                onClick={handleExplore}
                className="group relative inline-flex items-center gap-2.5 text-base sm:text-lg font-bold text-[#2E54AD] hover:text-[#16A5CE] transition-colors duration-300 pb-1.5 cursor-pointer font-heading"
              >
                <span className="tracking-wide">Explore Our Services</span>

                <span className="inline-flex items-center justify-center transition-transform duration-300 ease-out transform group-hover:translate-x-2">
                  <ArrowRight className="w-5 h-5 text-[#2E54AD] group-hover:text-[#16A5CE] transition-colors duration-300" />
                </span>

                <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#2E54AD] group-hover:bg-[#16A5CE] origin-left scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-out rounded-full" />
              </button>
            </motion.div>

          </div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-[#D8E6F8]/80 group">
              <img
                src={teamImage}
                alt="Top Notch Designers And Developers Collaborating"
                className="w-full h-auto max-h-[460px] object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
