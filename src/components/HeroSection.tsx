import React from 'react';
import { 
  PhoneCall, 
  Code2, 
  Sparkles, 
  Headphones, 
  ArrowUpRight 
} from 'lucide-react';
import { motion } from 'motion/react';
import { Course } from '../types';
import aiHeroBgImage from '../assets/images/home-hero.jpg';

export const HERO_BG_IMAGE_URL = aiHeroBgImage; 

interface HeroSectionProps {
  onExploreCourses?: () => void;
  onSelectCourse?: (course: Course) => void;
  featuredCourse?: Course;
  onNavigateToContact?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigateToContact,
}) => {
  return (
    <section className="relative bg-[#011337] text-white pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-[#2E54AD]/25 overflow-hidden">
      {/* Background Image & Ambient Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src={HERO_BG_IMAGE_URL}
          alt="Beture Web Software House Hero Background"
          referrerPolicy="no-referrer"
          onError={(e) => {
            const target = e.currentTarget;
            if (!target.src.includes('/home-hero.jpg')) {
              target.src = '/home-hero.jpg';
            } else if (!target.src.includes('unsplash')) {
              target.src = 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1600&q=80';
            }
          }}
          className="w-full h-full object-cover opacity-90 transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-[#011337]/55" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Card */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto text-center space-y-6 bg-black/40 backdrop-blur-md p-6 sm:p-10 md:p-12 rounded-3xl border border-white/20 shadow-2xl relative overflow-hidden"
        >
          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] text-white"
          >
            Empowering Modern <span className="bg-gradient-to-r from-[#D8E6F8] via-[#16A5CE] to-[#2E54AD] bg-clip-text text-transparent">Software</span>, Web & <span className="text-[#16A5CE]">AI Innovation</span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#D8E6F8]/95 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-normal tracking-wide"
          >
            Beture Web is a full-service software house engineering custom web platforms, scalable SaaS products, and intelligent AI automation for businesses across the globe.
          </motion.p>

          {/* Direct Calling & Free Consultation Call Action */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2"
          >
            <a
              href="tel:+923111222595"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-[#2E54AD] to-[#16A5CE] hover:brightness-110 text-white font-extrabold text-sm shadow-xl shadow-[#16A5CE]/25 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-white" />
              <span>Call Us for Free Consultation: +92 311 1222 595</span>
            </a>

            {onNavigateToContact && (
              <button
                onClick={onNavigateToContact}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-[#D8E6F8] hover:text-white font-bold text-sm border border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Send Project Scope</span>
                <ArrowUpRight className="w-4 h-4 text-[#16A5CE]" />
              </button>
            )}
          </motion.div>
        </motion.div>

        {/* Bottom Feature Boxes with React Lucide Icons and Clean Content */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {/* Box 1: Calling & Consultation */}
          <div className="p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/15 shadow-md hover:border-[#16A5CE] hover:bg-black/55 transition-all duration-300 group flex flex-col justify-start space-y-3.5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#16A5CE]/20 to-[#2E54AD]/30 border border-[#16A5CE]/40 flex items-center justify-center text-[#16A5CE] shadow-lg shadow-[#16A5CE]/15 group-hover:scale-110 group-hover:bg-[#16A5CE] group-hover:text-[#011337] transition-all duration-300">
              <PhoneCall className="w-6 h-6" />
            </div>
            <h3 className="text-base font-extrabold text-white group-hover:text-[#16A5CE] transition-colors">
              Direct Calling & Support
            </h3>
            <p className="text-xs text-[#D8E6F8]/80 leading-relaxed">
              Connect directly with our tech team. Instant assistance, project queries, and technical consultation.
            </p>
          </div>

          {/* Box 2: Full-Stack Software House */}
          <div className="p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/15 shadow-md hover:border-[#16A5CE] hover:bg-black/55 transition-all duration-300 group flex flex-col justify-start space-y-3.5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#16A5CE]/20 to-[#2E54AD]/30 border border-[#16A5CE]/40 flex items-center justify-center text-[#16A5CE] shadow-lg shadow-[#16A5CE]/15 group-hover:scale-110 group-hover:bg-[#16A5CE] group-hover:text-[#011337] transition-all duration-300">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-extrabold text-white group-hover:text-[#16A5CE] transition-colors">
              Full-Stack Software House
            </h3>
            <p className="text-xs text-[#D8E6F8]/80 leading-relaxed">
              Custom web applications, responsive enterprise portals, and SaaS architecture built using modern tech stacks.
            </p>
          </div>

          {/* Box 3: AI & Automation Solutions */}
          <div className="p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/15 shadow-md hover:border-[#16A5CE] hover:bg-black/55 transition-all duration-300 group flex flex-col justify-start space-y-3.5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#16A5CE]/20 to-[#2E54AD]/30 border border-[#16A5CE]/40 flex items-center justify-center text-[#16A5CE] shadow-lg shadow-[#16A5CE]/15 group-hover:scale-110 group-hover:bg-[#16A5CE] group-hover:text-[#011337] transition-all duration-300">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-base font-extrabold text-white group-hover:text-[#16A5CE] transition-colors">
              AI & Automation Labs
            </h3>
            <p className="text-xs text-[#D8E6F8]/80 leading-relaxed">
              Integrate custom AI agents, automated backend pipelines, and intelligent workflows to accelerate business performance.
            </p>
          </div>

          {/* Box 4: Dedicated Software Support */}
          <div className="p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/15 shadow-md hover:border-[#16A5CE] hover:bg-black/55 transition-all duration-300 group flex flex-col justify-start space-y-3.5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#16A5CE]/20 to-[#2E54AD]/30 border border-[#16A5CE]/40 flex items-center justify-center text-[#16A5CE] shadow-lg shadow-[#16A5CE]/15 group-hover:scale-110 group-hover:bg-[#16A5CE] group-hover:text-[#011337] transition-all duration-300">
              <Headphones className="w-6 h-6" />
            </div>
            <h3 className="text-base font-extrabold text-white group-hover:text-[#16A5CE] transition-colors">
              Agile Delivery & QA
            </h3>
            <p className="text-xs text-[#D8E6F8]/80 leading-relaxed">
              Strict quality assurance, transparent sprint progress, and dedicated post-launch maintenance for your projects.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
