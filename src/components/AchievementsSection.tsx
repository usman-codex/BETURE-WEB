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

  // Row 1 items (7 hexagons)
  const row1 = [
    { ...HEXAGON_GALLERY[3], yOffset: 'translate-y-2 sm:translate-y-3', zIndex: 'z-10' },
    { ...HEXAGON_GALLERY[1], yOffset: '-translate-y-3 sm:-translate-y-5', zIndex: 'z-20' },
    { ...HEXAGON_GALLERY[2], yOffset: 'translate-y-1 sm:translate-y-2', zIndex: 'z-10' },
    { ...HEXAGON_GALLERY[4], yOffset: '-translate-y-4 sm:-translate-y-6', zIndex: 'z-20' },
    { ...HEXAGON_GALLERY[5], yOffset: 'translate-y-2 sm:translate-y-3', zIndex: 'z-10' },
    { ...HEXAGON_GALLERY[6], yOffset: '-translate-y-3 sm:-translate-y-5', zIndex: 'z-20' },
    { ...HEXAGON_GALLERY[7], yOffset: 'translate-y-1 sm:translate-y-2', zIndex: 'z-10' },
  ];

  // Row 2 items (7 hexagons, nested interlocking honeycomb with random up-down offset)
  const row2 = [
    { ...HEXAGON_GALLERY[0], yOffset: '-translate-y-2 sm:-translate-y-3', zIndex: 'z-20' },
    { ...HEXAGON_GALLERY[8], yOffset: 'translate-y-3 sm:translate-y-5', zIndex: 'z-10' },
    { ...HEXAGON_GALLERY[9], yOffset: '-translate-y-3 sm:-translate-y-4', zIndex: 'z-20' },
    { ...HEXAGON_GALLERY[10], yOffset: 'translate-y-4 sm:translate-y-6', zIndex: 'z-10' },
    { ...HEXAGON_GALLERY[11], yOffset: '-translate-y-2 sm:-translate-y-3', zIndex: 'z-20' },
    { ...HEXAGON_GALLERY[12], yOffset: 'translate-y-3 sm:translate-y-5', zIndex: 'z-10' },
    { ...HEXAGON_GALLERY[13], yOffset: '-translate-y-1 sm:-translate-y-2', zIndex: 'z-20' },
  ];

  return (
    <section 
      id="fintech-achievements-section" 
      className="relative w-full pt-8 pb-12 sm:pt-12 sm:pb-16 bg-white overflow-hidden"
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

      <div className="relative z-10 w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto space-y-2 mb-6 sm:mb-10">
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

        {/* 2 ROWS HONEYCOMB GALLERY - STRICTLY FITS WITHIN SECTION WIDTH (NO HORIZONTAL SCROLLBAR) */}
        <div className="w-full flex flex-col items-center justify-center overflow-hidden py-6 sm:py-10 md:py-12 select-none">
          
          {/* ROW 1: Sized proportionally to viewport so it fits 100% on screen with slight overlap & vertical offsets */}
          <div className="flex items-center justify-center -space-x-2 sm:-space-x-3.5 md:-space-x-5 lg:-space-x-7 xl:-space-x-8 w-full max-w-full">
            {row1.map((item, idx) => (
              <motion.div
                key={`r1-${item.id || idx}`}
                initial={{ opacity: 0, scale: 0.88 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className={`w-[13.5%] max-w-[170px] min-w-[44px] aspect-[1/1.15] shrink-0 group cursor-pointer transition-transform duration-300 hover:scale-110 hover:z-40 drop-shadow-[0_4px_8px_rgba(1,19,55,0.18)] ${item.yOffset} ${item.zIndex}`}
              >
                <div 
                  style={{ clipPath: hexClip, WebkitClipPath: hexClip }} 
                  className="w-full h-full bg-white p-[1.5px] sm:p-[2px] md:p-[2.5px] lg:p-[3px] transition-all duration-300"
                >
                  <div 
                    style={{ clipPath: hexClip, WebkitClipPath: hexClip }} 
                    className="w-full h-full bg-[#011337] relative overflow-hidden"
                  >
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover object-center group-hover:scale-115 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[#011337]/0 group-hover:bg-[#011337]/10 transition-colors duration-300 pointer-events-none" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ROW 2: Interlocks with Row 1 through negative margin, slightly overlapping with random alternating up/down shifts */}
          <div className="flex items-center justify-center -space-x-2 sm:-space-x-3.5 md:-space-x-5 lg:-space-x-7 xl:-space-x-8 w-full max-w-full -mt-2 sm:-mt-4 md:-mt-6 lg:-mt-8 xl:-mt-10">
            {row2.map((item, idx) => (
              <motion.div
                key={`r2-${item.id || idx}`}
                initial={{ opacity: 0, scale: 0.88 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.12 + (idx * 0.04) }}
                className={`w-[13.5%] max-w-[170px] min-w-[44px] aspect-[1/1.15] shrink-0 group cursor-pointer transition-transform duration-300 hover:scale-110 hover:z-40 drop-shadow-[0_4px_8px_rgba(1,19,55,0.18)] ${item.yOffset} ${item.zIndex}`}
              >
                <div 
                  style={{ clipPath: hexClip, WebkitClipPath: hexClip }} 
                  className="w-full h-full bg-white p-[1.5px] sm:p-[2px] md:p-[2.5px] lg:p-[3px] transition-all duration-300"
                >
                  <div 
                    style={{ clipPath: hexClip, WebkitClipPath: hexClip }} 
                    className="w-full h-full bg-[#011337] relative overflow-hidden"
                  >
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover object-center group-hover:scale-115 transition-transform duration-500"
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
