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
            <div className="lg:col-span-7 space-y-5">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-poppins drop-shadow-sm">
                Our Vision
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
                With a relentless focus on practical mastery, financial technology innovation, and decentralized architecture, <strong className="font-extrabold text-white underline decoration-[#16A5CE] underline-offset-4">Beture Web</strong> empowers the next generation of fintech engineers, Web3 developers, and digital finance leaders. We bridge cutting-edge blockchain protocols, quantitative trading algorithms, and modern software engineering to prepare ambitious professionals for global fintech careers and high-impact digital ventures.
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

      {}
      {}
      {}
      <section 
        ref={missionRef}
        className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden border-b border-[#F1F5F9]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {}
            <motion.div
              initial={{ x: '-60vw', opacity: 0 }}
              animate={isMissionInView ? { x: 0, opacity: 1 } : { x: '-60vw', opacity: 0 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 relative flex justify-center lg:justify-start"
            >
              <div className="relative w-full max-w-lg">
                
                {}
                <div className="absolute -top-12 -right-8 w-44 h-44 pointer-events-none z-0">
                  {}
                  <div className="absolute top-0 right-0 w-36 h-36 rotate-45 rounded-2xl border-2 border-[#16A5CE]/30 bg-gradient-to-br from-[#D8E6F8]/50 to-[#16A5CE]/20 backdrop-blur-xs" />
                  {}
                  <div className="absolute top-4 right-4 w-28 h-28 rotate-45 rounded-xl border border-[#2E54AD]/40 bg-gradient-to-br from-[#2E54AD]/25 to-[#162E66]/20" />
                  {}
                  <div className="absolute top-8 right-8 w-20 h-20 rotate-45 rounded-lg bg-gradient-to-br from-[#011337] to-[#2E54AD] opacity-90 shadow-md shadow-[#2E54AD]/20" />
                  {}
                  <div className="absolute top-2 right-28 w-2.5 h-2.5 rounded-full bg-[#16A5CE]" />
                </div>

                {}
                <div className="absolute -bottom-10 -left-10 w-44 h-44 pointer-events-none z-0">
                  {}
                  <div className="absolute bottom-0 left-0 w-36 h-36 rotate-45 rounded-2xl border-2 border-[#16A5CE]/30 bg-gradient-to-br from-[#D8E6F8]/50 to-[#16A5CE]/20 backdrop-blur-xs" />
                  {}
                  <div className="absolute bottom-4 left-4 w-28 h-28 rotate-45 rounded-xl border border-[#2E54AD]/40 bg-gradient-to-br from-[#2E54AD]/25 to-[#162E66]/20" />
                  {}
                  <div className="absolute bottom-8 left-8 w-20 h-20 rotate-45 rounded-lg bg-gradient-to-br from-[#011337] to-[#2E54AD] opacity-90 shadow-md shadow-[#2E54AD]/20" />
                  {}
                  <div className="absolute bottom-2 left-28 w-2.5 h-2.5 rounded-full bg-[#2E54AD]" />
                </div>

                {}
                <div className="relative z-10 overflow-hidden rounded-tr-[56px] rounded-bl-[56px] rounded-tl-2xl rounded-br-2xl shadow-xl border-4 border-white bg-[#F8FAFC]">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&auto=format&fit=crop&q=80"
                    alt="Beture Web Mentorship & Labs"
                    className="w-full h-[380px] sm:h-[460px] object-cover object-center hover:scale-103 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>

                {}
                <div className="absolute -bottom-4 -right-4 bg-white px-5 py-3 rounded-2xl shadow-lg border border-[#D8E6F8] z-20 flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#2E54AD] animate-ping" />
                  <span className="text-xs sm:text-sm font-bold text-[#011337] font-poppins">
                    FinTech & Web3 Institute
                  </span>
                </div>

              </div>
            </motion.div>

            {}
            <motion.div
              initial={{ x: '60vw', opacity: 0 }}
              animate={isMissionInView ? { x: 0, opacity: 1 } : { x: '60vw', opacity: 0 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="lg:col-span-6 space-y-6"
            >
              {}
              <div className="space-y-1">
                <span className="text-base sm:text-lg font-bold text-[#2E54AD] font-poppins">
                  Who We Are
                </span>
                
                {}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#011337] tracking-tight font-poppins">
                  Our Mission
                </h2>
              </div>

              {}
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-poppins font-normal">
                <strong className="font-bold text-[#2E54AD] bg-[#2E54AD]/10 px-1.5 py-0.5 rounded-md">Beture Web</strong> stands as a premier specialized education institute and technology hub dedicated to decentralized finance (DeFi), algorithmic trading, blockchain engineering, and modern full-stack financial software. Our commitment to rigorous practical training, live testnet simulations, and verified industry mentorship defines our core essence.
              </p>

              {}
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-poppins font-normal">
                At <strong className="font-bold text-[#2E54AD] bg-[#2E54AD]/10 px-1.5 py-0.5 rounded-md">Beture Web</strong>, we go beyond conventional theory. We immerse our students in real-world smart contract development, quantitative market modeling, automated bot algorithms, and institutional financial security protocols. Our dedicated faculty and industry practitioners take immense pride in engineering career-ready skills that empower learners to secure top global remote roles and build groundbreaking fintech solutions.
              </p>

              {}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#F1F5F9]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#2E54AD]/10 text-[#2E54AD] flex items-center justify-center font-bold">
                    <CheckCircle className="w-4.5 h-4.5" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#011337]">
                    Hands-on FinTech & DeFi Labs
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#16A5CE]/15 text-[#2E54AD] flex items-center justify-center font-bold">
                    <Zap className="w-4.5 h-4.5 text-[#16A5CE]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#011337]">
                    1-on-1 Industry Mentorship
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
              We have managed to build a team of developers with exceptional interpersonal skills. Here are some qualities of our fintech engineers and developers that you would love to learn about:
            </motion.p>
          </div>

          {}
          <div className="space-y-10 pt-4">

            {}
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
                At <strong className="font-bold text-[#2E54AD] bg-[#2E54AD]/10 px-1.5 py-0.5 rounded-md">Beture Web</strong>, we have curated a team of blockchain and software engineers who consistently deliver their best work. They invest their time and effort into your project to meet your specific needs. By hiring professional developers with practical knowledge, you gain an advantage over your competitors, enabling you to grow and reach potential customers in more innovative ways.
              </p>
            </motion.div>

            {}
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
                  Budget Friendly
                </h3>
              </div>
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-poppins font-normal">
                Our services and institutional programs are designed to be cost-effective without compromising on quality. We understand the importance of budget constraints, and our team works diligently to provide solutions that align with your financial resources. We strive to deliver excellent value for your investment, ensuring that you receive high-quality development and education services within your budget.
              </p>
            </motion.div>

            {}
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
                  24/7 Support Team
                </h3>
              </div>
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-poppins font-normal">
                We have a dedicated support team available round-the-clock to address any concerns or queries you may have. Whether its technical assistance or general inquiries, our support team is committed to providing prompt and reliable assistance. We understand the importance of uninterrupted support, and our team is always ready to assist you, ensuring a smooth and hassle-free experience throughout your fintech development journey.
              </p>
            </motion.div>

          </div>

        </div>
      </section>

      {}
      {}
      {}
      <AchievementsSection />

      {}
      {}
      {}
      <OurFoundersSection />

      {}
      {}
      {}
      <section className="relative py-16 sm:py-24 bg-[#FAFAFA] border-t border-[#E2E8F0] overflow-hidden">
        
        {}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute -top-10 right-0 sm:right-6 md:right-12 w-64 h-64 sm:w-80 sm:h-80 z-0 opacity-70"
        >
          <div className="relative w-full h-full">
            {}
            <div className="absolute top-0 right-4 w-44 h-44 sm:w-56 sm:h-56 rotate-45 rounded-3xl border-2 border-[#16A5CE]/30 bg-gradient-to-br from-[#D8E6F8]/40 to-[#16A5CE]/10 backdrop-blur-[1px]" />
            {}
            <div className="absolute top-5 right-9 w-36 h-36 sm:w-44 sm:h-44 rotate-45 rounded-2xl border-2 border-[#2E54AD]/40 bg-gradient-to-br from-[#2E54AD]/20 to-[#162E66]/20" />
            {}
            <div className="absolute top-10 right-14 w-24 h-24 sm:w-30 sm:h-30 rotate-45 rounded-xl bg-gradient-to-br from-[#011337] to-[#2E54AD] opacity-90 shadow-xl shadow-[#2E54AD]/20" />
            {}
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
              Every training module and research track is powered by systematic execution, modern engineering standards, and unmatched dedication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Cpu className="w-6 h-6 text-[#2E54AD]" />,
                iconBg: 'bg-[#EAF4FC] border-[#16A5CE]/40 shadow-xs text-[#2E54AD]',
                title: 'Applied FinTech Mastery',
                desc: 'Immersive hands-on bootcamps with real-world smart contracts, algorithmic trading bots, and API integrations.',
              },
              {
                icon: <ShieldCheck className="w-6 h-6 text-[#162E66]" />,
                iconBg: 'bg-[#EBF3F7] border-[#2E54AD]/30 shadow-xs text-[#162E66]',
                title: 'Institutional Standards & Security',
                desc: 'Industry-grade security frameworks, smart contract auditing methodologies, and quantitative risk management.',
              },
              {
                icon: <Rocket className="w-6 h-6 text-[#16A5CE]" />,
                iconBg: 'bg-[#F0FAFC] border-[#16A5CE]/40 shadow-xs text-[#16A5CE]',
                title: 'Career & Venture Incubation',
                desc: 'Direct global job placement assistance, portfolio reviews, and decentralized venture capital networking.',
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
