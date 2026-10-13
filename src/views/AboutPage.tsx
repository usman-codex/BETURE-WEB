import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import logoImg from '../assets/beture-logo.png';
import { OurFoundersSection } from '../components/OurFoundersSection';
import { AchievementsSection } from '../components/AchievementsSection';
import { 
  Sparkles, 
  ShieldCheck, 
  Compass,
  CheckCircle,
  Zap,
  TrendingUp,
  Award,
  BookOpen,
  Users,
  Target,
  DollarSign,
  Headphones,
  Cpu,
  Lock,
  Rocket,
  Layers
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  
  const missionRef = useRef<HTMLDivElement>(null);
  const isMissionInView = useInView(missionRef, { once: false, amount: 0.2 });

  
  const teamSkillsRef = useRef<HTMLDivElement>(null);
  const isTeamSkillsInView = useInView(teamSkillsRef, { once: false, amount: 0.15 });

  return (
    <div className="min-h-screen bg-white text-[#011337] font-poppins overflow-x-hidden">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION: OUR VISION & OFFICIAL COMPANY LOGO SHOWCASE               */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-gradient-to-r from-[#011337] via-[#162E66] to-[#2E54AD] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden shadow-lg">
        
        {/* Ambient subtle glow lights */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#16A5CE]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-1/4 bottom-0 w-64 h-64 bg-[#2E54AD]/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content Column */}
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-poppins drop-shadow-sm">
                Our Vision & Core Objectives
              </h1>

              <motion.p
                initial={{ x: '-40px', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.15,
                }}
                className="text-base sm:text-lg lg:text-xl text-white/95 leading-relaxed font-poppins font-normal max-w-3xl drop-shadow-xs"
              >
                At <strong className="font-extrabold text-white underline decoration-[#16A5CE] underline-offset-4">Beture Web</strong>, our primary objective is to empower global businesses through full-scale <strong className="text-[#16A5CE] font-bold">BPO (Business Process Outsourcing)</strong> and modern digital technology. We serve as a trusted outsourcing partner, delivering end-to-end IT services, high-performance web & mobile engineering, Google My Business (GMB) optimization, citation authority building, and data-driven marketing. By combining business process outsourcing efficiency with innovative software development, we streamline operations and drive exponential business growth worldwide.
              </motion.p>
            </div>

            {/* Right Column: Only Company Logo Image (Matching Navbar) */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.2,
              }}
              className="lg:col-span-5 flex items-center justify-center lg:justify-end relative"
            >
              <img
                src={logoImg}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== '/beture-logo.png') {
                    target.src = '/beture-logo.png';
                  }
                }}
                alt="Beture Logo"
                className="max-h-48 sm:max-h-60 lg:max-h-72 w-auto object-contain drop-shadow-[0_12px_45px_rgba(22,165,206,0.45)] hover:scale-105 transition-transform duration-300 select-none"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SECTION 2: WHO WE ARE & OUR MISSION (With Animated Geometry)           */}
      {/* ========================================================================= */}
      <section 
        ref={missionRef}
        className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden border-b border-[#F1F5F9]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Image with Floating Geometric Diamond Accents */}
            <motion.div
              initial={{ x: '-60vw', opacity: 0 }}
              animate={isMissionInView ? { x: 0, opacity: 1 } : { x: '-60vw', opacity: 0 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 relative flex justify-center lg:justify-start"
            >
              <div className="relative w-full max-w-lg">
                
                {/* Top-Right Geometrics */}
                <div className="absolute -top-12 -right-8 w-44 h-44 pointer-events-none z-0">
                  <div className="absolute top-0 right-0 w-36 h-36 rotate-45 rounded-2xl border-2 border-[#16A5CE]/30 bg-gradient-to-br from-[#D8E6F8]/50 to-[#16A5CE]/20 backdrop-blur-xs" />
                  <div className="absolute top-4 right-4 w-28 h-28 rotate-45 rounded-xl border border-[#2E54AD]/40 bg-gradient-to-br from-[#2E54AD]/25 to-[#162E66]/20" />
                  <div className="absolute top-8 right-8 w-20 h-20 rotate-45 rounded-lg bg-gradient-to-br from-[#011337] to-[#2E54AD] opacity-90 shadow-md shadow-[#2E54AD]/20" />
                  <div className="absolute top-2 right-28 w-2.5 h-2.5 rounded-full bg-[#16A5CE]" />
                </div>

                {/* Bottom-Left Geometrics */}
                <div className="absolute -bottom-10 -left-10 w-44 h-44 pointer-events-none z-0">
                  <div className="absolute bottom-0 left-0 w-36 h-36 rotate-45 rounded-2xl border-2 border-[#16A5CE]/30 bg-gradient-to-br from-[#D8E6F8]/50 to-[#16A5CE]/20 backdrop-blur-xs" />
                  <div className="absolute bottom-4 left-4 w-28 h-28 rotate-45 rounded-xl border border-[#2E54AD]/40 bg-gradient-to-br from-[#2E54AD]/25 to-[#162E66]/20" />
                  <div className="absolute bottom-8 left-8 w-20 h-20 rotate-45 rounded-lg bg-gradient-to-br from-[#011337] to-[#2E54AD] opacity-90 shadow-md shadow-[#2E54AD]/20" />
                  <div className="absolute bottom-2 left-28 w-2.5 h-2.5 rounded-full bg-[#2E54AD]" />
                </div>

                {/* Main Asymmetrical Rounded Image */}
                <div className="relative z-10 overflow-hidden rounded-tr-[56px] rounded-bl-[56px] rounded-tl-2xl rounded-br-2xl shadow-xl border-4 border-white bg-[#F8FAFC]">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&auto=format&fit=crop&q=80"
                    alt="Beture Web BPO & Software House"
                    className="w-full h-[380px] sm:h-[460px] object-cover object-center hover:scale-103 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Bottom Floating Badge */}
                <div className="absolute -bottom-4 -right-4 bg-white px-5 py-3 rounded-2xl shadow-lg border border-[#D8E6F8] z-20 flex items-center">
                  <span className="text-xs sm:text-sm font-bold text-[#011337] font-poppins">
                    BPO & Digital Software House
                  </span>
                </div>

              </div>
            </motion.div>

            {/* Right Column: Mission Content */}
            <motion.div
              initial={{ x: '60vw', opacity: 0 }}
              animate={isMissionInView ? { x: 0, opacity: 1 } : { x: '60vw', opacity: 0 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="lg:col-span-6 space-y-6"
            >
              {/* Top Accent Subtitle */}
              <div className="space-y-1">
                <span className="text-base sm:text-lg font-bold text-[#2E54AD] font-poppins">
                  Who We Are
                </span>
                
                {/* Main Heading */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#011337] tracking-tight font-poppins">
                  Our Mission & BPO Purpose
                </h2>
              </div>

              {/* Mission Paragraphs */}
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-poppins font-normal">
                <strong className="font-bold text-[#2E54AD] bg-[#2E54AD]/10 px-1.5 py-0.5 rounded-md">Beture Web</strong> is a premier software house and <strong className="font-bold text-[#011337]">BPO (Business Process Outsourcing)</strong> solutions partner. We specialize in delegating and optimizing critical business operations — from dedicated technical support, GMB citation and local visibility management, to custom software engineering, e-commerce automation, and digital marketing growth.
              </p>

              <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-poppins font-normal">
                Our main objective is to help global enterprises reduce operational overhead, streamline workflow bottlenecks, and scale rapidly by outsourcing repetitive and tech-heavy processes to our expert agile teams. We combine industry-proven outsourcing workflows with top-tier development standards to deliver measurable efficiency, faster turnaround times, and maximum ROI.
              </p>

              {/* Quick Feature Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#F1F5F9]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#2E54AD]/10 text-[#2E54AD] flex items-center justify-center font-bold">
                    <CheckCircle className="w-4.5 h-4.5" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#011337]">
                    BPO Outsourcing Operations
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#16A5CE]/15 text-[#2E54AD] flex items-center justify-center font-bold">
                    <Zap className="w-4.5 h-4.5 text-[#16A5CE]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#011337]">
                    End-to-End Digital Solutions
                  </span>
                </div>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {}
      {}
      {}
      <section
        ref={teamSkillsRef}
        className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden border-b border-[#F1F5F9]"
      >
        <div className="max-w-6xl mx-auto space-y-12">
          
          {}
          <div className="space-y-4">
            {}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isTeamSkillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2"
            >
              <span className="text-base sm:text-lg font-bold text-[#2E54AD] font-poppins">
                Beture Web
              </span>
              <span className="text-[#16A5CE] font-bold tracking-widest text-lg">——</span>
            </motion.div>

            {}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={isTeamSkillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#011337] tracking-tight font-poppins"
            >
              Team With Strong Interpersonal Skills
            </motion.h2>

            {}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isTeamSkillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-[#475569] leading-relaxed font-poppins"
            >
              We have built a dedicated team of software developers, BPO outsourcing specialists, and digital marketers with exceptional interpersonal skills. Here are the core pillars our clients rely on every day:
            </motion.p>
          </div>

          {/* 3 Skill Feature Cards */}
          <div className="space-y-10 pt-4">

            {/* Feature 1 */}
            <motion.div
              initial={{ x: '-60vw', opacity: 0 }}
              animate={isTeamSkillsInView ? { x: 0, opacity: 1 } : { x: '-60vw', opacity: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="p-6 sm:p-8 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#2E54AD] transition-all duration-300 shadow-xs space-y-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#2E54AD]/10 text-[#2E54AD] flex items-center justify-center font-bold">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#011337] font-poppins">
                  Dedication & Focus
                </h3>
              </div>
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-poppins font-normal">
                At <strong className="font-bold text-[#2E54AD] bg-[#2E54AD]/10 px-1.5 py-0.5 rounded-md">Beture Web</strong>, our engineering and BPO operations teams consistently deliver exceptional results. We take full ownership of your delegated tasks and technical projects, treating your business goals as our own to help you outperform competitors and scale customer reach.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ x: '60vw', opacity: 0 }}
              animate={isTeamSkillsInView ? { x: 0, opacity: 1 } : { x: '60vw', opacity: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
              className="p-6 sm:p-8 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#16A5CE] transition-all duration-300 shadow-xs space-y-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#16A5CE]/15 text-[#2E54AD] flex items-center justify-center font-bold">
                  <DollarSign className="w-5 h-5 text-[#16A5CE]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#011337] font-poppins">
                  Cost-Effective Outsourcing
                </h3>
              </div>
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-poppins font-normal">
                Our BPO models and custom software delivery pipelines are structured to reduce client operating costs by up to 60% without compromising on quality or speed. We provide transparent pricing, flexible hiring packages, and maximum return on investment for businesses of every scale.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial={{ x: '-60vw', opacity: 0 }}
              animate={isTeamSkillsInView ? { x: 0, opacity: 1 } : { x: '-60vw', opacity: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="p-6 sm:p-8 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#2E54AD] transition-all duration-300 shadow-xs space-y-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#2E54AD]/10 text-[#2E54AD] flex items-center justify-center font-bold">
                  <Headphones className="w-5 h-5 text-[#2E54AD]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#011337] font-poppins">
                  24/7 BPO & Technical Support
                </h3>
              </div>
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-poppins font-normal">
                We operate round-the-clock shift rotations to guarantee seamless 24/7 business continuity. Whether handling critical customer service desks, live troubleshooting, GMB updates, or server monitoring, our dedicated teams ensure zero downtime for your operations.
              </p>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. ACHIEVEMENTS SECTION (DYNAMIC ACCORDION TABS)                           */}
      {/* ========================================================================= */}
      <AchievementsSection />

      {/* ========================================================================= */}
      {/* 5. OUR FOUNDERS SECTION                                                   */}
      {/* ========================================================================= */}
      <OurFoundersSection />

      {/* ========================================================================= */}
      {/* 6. GUIDING PRINCIPLES SECTION                                             */}
      {/* ========================================================================= */}
      <section className="relative py-16 sm:py-24 bg-[#FAFAFA] border-t border-[#E2E8F0] overflow-hidden">
        
        {/* Subtle Decorative Geometry */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute -top-10 right-0 sm:right-6 md:right-12 w-64 h-64 sm:w-80 sm:h-80 z-0 opacity-70"
        >
          <div className="relative w-full h-full">
            <div className="absolute top-0 right-4 w-44 h-44 sm:w-56 sm:h-56 rotate-45 rounded-3xl border-2 border-[#16A5CE]/30 bg-gradient-to-br from-[#D8E6F8]/40 to-[#16A5CE]/10 backdrop-blur-[1px]" />
            <div className="absolute top-5 right-9 w-36 h-36 sm:w-44 sm:h-44 rotate-45 rounded-2xl border-2 border-[#2E54AD]/40 bg-gradient-to-br from-[#2E54AD]/20 to-[#162E66]/20" />
            <div className="absolute top-10 right-14 w-24 h-24 sm:w-30 sm:h-30 rotate-45 rounded-xl bg-gradient-to-br from-[#011337] to-[#2E54AD] opacity-90 shadow-xl shadow-[#2E54AD]/20" />
            <div className="absolute top-2 right-32 w-3 h-3 rounded-full bg-[#16A5CE]" />
            <div className="absolute top-36 right-6 w-2.5 h-2.5 rounded-full bg-[#2E54AD]" />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-sm sm:text-base font-bold text-[#2E54AD] font-poppins">
              Guiding Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#011337] tracking-tight font-poppins">
              How We Deliver Groundbreaking Impact
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] font-poppins">
              Every software delivery sprint and BPO outsourcing operation is powered by rigorous quality control, modern standards, and round-the-clock reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Cpu className="w-6 h-6 text-[#2E54AD]" />,
                iconBg: 'bg-[#EAF4FC] border-[#16A5CE]/40 shadow-xs text-[#2E54AD]',
                title: 'High-Performance Engineering',
                desc: 'Scalable cloud web applications, mobile platforms, and automated workflow pipelines engineered for enterprise resilience.',
              },
              {
                icon: <ShieldCheck className="w-6 h-6 text-[#162E66]" />,
                iconBg: 'bg-[#EBF3F7] border-[#2E54AD]/30 shadow-xs text-[#162E66]',
                title: 'Enterprise BPO Reliability',
                desc: 'Industry-grade SLA guarantees, ISO-standard data security, confidentiality protocols, and 24/7 business process coverage.',
              },
              {
                icon: <Rocket className="w-6 h-6 text-[#16A5CE]" />,
                iconBg: 'bg-[#F0FAFC] border-[#16A5CE]/40 shadow-xs text-[#16A5CE]',
                title: 'Accelerated Business Growth',
                desc: 'Rapid local search ranking via GMB & Citation networks, multi-channel customer acquisition funnels, and measurable ROI.',
              },
            ].map((v, i) => (
              <div 
                key={i}
                className="bg-white rounded-3xl p-8 border border-[#E2E8F0] hover:border-[#16A5CE] hover:shadow-lg transition-all duration-300 space-y-5 group hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center transition-transform group-hover:scale-110 ${v.iconBg}`}>
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold text-[#011337] font-poppins group-hover:text-[#2E54AD] transition-colors">{v.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed font-poppins">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
