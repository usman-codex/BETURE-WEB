import React from 'react';
import { 
  PhoneCall, 
  Code2, 
  Cpu, 
  Headphones 
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

export const HeroSection: React.FC<HeroSectionProps> = () => {
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
          className="max-w-4xl mx-auto text-center space-y-6 bg-black/40 backdrop-blur-md p-8 sm:p-12 md:p-14 rounded-3xl border border-white/20 shadow-2xl relative overflow-hidden"
        >
          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] text-white"
          >
            Architecting Next-Gen <span className="bg-gradient-to-r from-[#D8E6F8] via-[#16A5CE] to-[#2E54AD] bg-clip-text text-transparent">Digital Solutions</span> & High-Impact <span className="text-[#16A5CE]">Web Software</span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#D8E6F8]/95 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-normal tracking-wide"
          >
            At Beture Web, our primary objective is delivering end-to-end <span className="text-[#16A5CE] font-bold">BPO (Business Process Outsourcing)</span>, cutting-edge software development, and digital marketing engines to scale modern businesses worldwide.
          </motion.p>
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
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-base font-extrabold text-white group-hover:text-[#16A5CE] transition-colors">
              AI & Automation Labs
            </h3>
            <p className="text-xs text-[#D8E6F8]/80 leading-relaxed">
              Integrate custom AI agents, automated backend pipelines, and intelligent workflows to accelerate business performance.
            </p>
          </div>

          {/* Box 4: BPO Operations */}
          <div className="p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/15 shadow-md hover:border-[#16A5CE] hover:bg-black/55 transition-all duration-300 group flex flex-col justify-start space-y-3.5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#16A5CE]/20 to-[#2E54AD]/30 border border-[#16A5CE]/40 flex items-center justify-center text-[#16A5CE] shadow-lg shadow-[#16A5CE]/15 group-hover:scale-110 group-hover:bg-[#16A5CE] group-hover:text-[#011337] transition-all duration-300">
              <Headphones className="w-6 h-6" />
            </div>
            <h3 className="text-base font-extrabold text-white group-hover:text-[#16A5CE] transition-colors">
              BPO Outsourcing Ops
            </h3>
            <p className="text-xs text-[#D8E6F8]/80 leading-relaxed">
              Business Process Outsourcing for customer support, tech operations, lead generation, and workflow management.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
