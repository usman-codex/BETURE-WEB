import React from 'react';
import { motion } from 'motion/react';
import { HEXAGON_GALLERY } from '../data/achievements';

interface AchievementsSectionProps {
  onNavigateToAbout?: () => void;
  onNavigateToContact?: () => void;
}

export const AchievementsSection: React.FC<AchievementsSectionProps> = () => {
  // Classic regular pointy-top hexagon polygon clip path
  const hexClip = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';

  // We want EXACTLY 2 clean rows of hexagons that fit seamlessly!
  // Row 1: 7 hexagons
  // Row 2: 6 or 7 hexagons nested cleanly in the interstice with a slight horizontal offset
  // We use the real user company images from achievements
  const row1 = [
    HEXAGON_GALLERY[3],  // building / lab
    HEXAGON_GALLERY[1],  // img2
    HEXAGON_GALLERY[2],  // img3
    HEXAGON_GALLERY[4],  // img5
    HEXAGON_GALLERY[5],  // img6
    HEXAGON_GALLERY[6],  // img7
    HEXAGON_GALLERY[7],  // img8
  ];

  const row2 = [
    HEXAGON_GALLERY[0],  // img1
    HEXAGON_GALLERY[8],  // img9
    HEXAGON_GALLERY[9],  // img10
    HEXAGON_GALLERY[10], // img11
    HEXAGON_GALLERY[11], // img12
    HEXAGON_GALLERY[12], // Web3
    HEXAGON_GALLERY[13], // Cybersecurity
  ];

  return (
    <section 
      id="fintech-achievements-section" 
      className="relative w-full pt-10 pb-16 sm:pt-14 sm:pb-20 bg-white overflow-hidden"
    >
      {/* Subtle modern geometric background accents */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-10 -left-10 sm:-left-4 md:left-2 w-48 h-48 sm:w-64 sm:h-64 z-0 opacity-40"
      >
        <div className="relative w-full h-full">
          <div className="absolute top-0 left-4 w-32 h-32 sm:w-44 sm:h-44 rotate-45 rounded-3xl border-2 border-[#16A5CE]/30 bg-gradient-to-br from-[#D8E6F8]/40 to-[#16A5CE]/10" />
          <div className="absolute top-4 left-8 w-24 h-24 sm:w-34 sm:h-34 rotate-45 rounded-2xl border border-[#2E54AD]/30 bg-gradient-to-br from-[#2E54AD]/15 to-[#162E66]/10" />
          <div className="absolute top-2 left-24 w-2.5 h-2.5 rounded-full bg-[#16A5CE]" />
        </div>
      </div>

      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -bottom-10 -right-10 sm:-right-4 md:right-2 w-48 h-48 sm:w-64 sm:h-64 z-0 opacity-40"
      >
        <div className="relative w-full h-full">
          <div className="absolute bottom-0 right-4 w-32 h-32 sm:w-44 sm:h-44 rotate-45 rounded-3xl border-2 border-[#16A5CE]/30 bg-gradient-to-br from-[#D8E6F8]/40 to-[#16A5CE]/10" />
          <div className="absolute bottom-4 right-8 w-24 h-24 sm:w-34 sm:h-34 rotate-45 rounded-2xl border border-[#2E54AD]/30 bg-gradient-to-br from-[#2E54AD]/15 to-[#162E66]/10" />
          <div className="absolute bottom-2 right-24 w-2.5 h-2.5 rounded-full bg-[#16A5CE]" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto space-y-2 mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight font-heading leading-tight">
            <span className="bg-gradient-to-r from-[#2E54AD] via-[#16A5CE] to-[#162E66] bg-clip-text text-transparent">
              Beture Web
            </span>{' '}
            <span className="text-[#011337]">Achievements</span>
          </h2>
          
          <p className="text-[#334A60] text-sm sm:text-lg lg:text-xl font-sans italic font-normal max-w-3xl mx-auto leading-relaxed px-2">
            strive to have a positive impact on people and communities.
          </p>
        </div>

        {/* 2 ROWS HEXAGON GALLERY */}
        <div className="w-full flex flex-col items-center justify-center overflow-x-auto py-4 select-none">
          
          {/* ROW 1 */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 min-w-max pb-0 z-10">
            {row1.map((item, idx) => (
              <motion.div
                key={`r1-${item.id || idx}`}
                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="w-24 h-28 sm:w-32 sm:h-36 md:w-40 md:h-46 lg:w-48 lg:h-54 shrink-0 group cursor-pointer transition-transform duration-300 hover:scale-105 hover:z-30"
              >
                <div 
                  style={{ clipPath: hexClip, WebkitClipPath: hexClip }} 
                  className="w-full h-full bg-white p-[2px] sm:p-[3px] shadow-md group-hover:shadow-xl transition-all duration-300"
                >
                  <div 
                    style={{ clipPath: hexClip, WebkitClipPath: hexClip }} 
                    className="w-full h-full bg-[#011337] relative overflow-hidden"
                  >
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[#011337]/0 group-hover:bg-[#011337]/10 transition-colors duration-300 pointer-events-none" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ROW 2 (Tightly nested interlock with top negative margin for natural honeycomb fit) */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 min-w-max -mt-4 sm:-mt-6 md:-mt-8 lg:-mt-10 z-20">
            {row2.map((item, idx) => (
              <motion.div
                key={`r2-${item.id || idx}`}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 + (idx * 0.05) }}
                className="w-24 h-28 sm:w-32 sm:h-36 md:w-40 md:h-46 lg:w-48 lg:h-54 shrink-0 group cursor-pointer transition-transform duration-300 hover:scale-105 hover:z-30"
              >
                <div 
                  style={{ clipPath: hexClip, WebkitClipPath: hexClip }} 
                  className="w-full h-full bg-white p-[2px] sm:p-[3px] shadow-md group-hover:shadow-xl transition-all duration-300"
                >
                  <div 
                    style={{ clipPath: hexClip, WebkitClipPath: hexClip }} 
                    className="w-full h-full bg-[#011337] relative overflow-hidden"
                  >
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[#011337]/0 group-hover:bg-[#011337]/10 transition-colors duration-300 pointer-events-none" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
