import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2, 
  Sparkles, 
  ArrowLeft,
  Calendar,
  Layers,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { ServiceIcon } from '../components/ServiceIcon';
import { SERVICES_DATA } from '../data/services';
import { ServiceItem } from '../types';
import betureLogoImg from '../assets/beture-logo.png';
import betureLogoTransparent from '../assets/beture-logo-transparent.png';

interface ServicesPageProps {
  selectedServiceSlug?: string | null;
  onSelectService: (service: ServiceItem | null) => void;
  onExploreCourses: () => void;
  onContactUs: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  selectedServiceSlug,
  onSelectService,
  onExploreCourses,
  onContactUs,
}) => {
  
  const currentService = selectedServiceSlug
    ? SERVICES_DATA.find((s) => s.slug === selectedServiceSlug || s.id === selectedServiceSlug) || null
    : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedServiceSlug]);

  
  if (currentService) {
    return (
      <div className="min-h-screen bg-[#F5F8FC] text-[#011337] pb-24">
        
        {}
        <div className="relative bg-gradient-to-r from-[#011337] via-[#162E66] to-[#2E54AD] text-white overflow-hidden py-16 sm:py-22 border-b border-[#2E54AD]/30">
          
          {/* Ambient Company Logo Watermark */}
          <div aria-hidden="true" className="pointer-events-none absolute -top-4 right-0 sm:right-8 w-60 h-60 sm:w-72 sm:h-72 opacity-20 flex items-center justify-center">
            <img 
              src={betureLogoTransparent} 
              onError={(e) => {
                const target = e.currentTarget;
                if (target.src !== betureLogoImg) {
                  target.src = betureLogoImg;
                }
              }}
              alt="" 
              className="w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(22,165,206,0.5)]" 
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            
            {}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#D8E6F8] font-heading">
              <button
                onClick={() => onSelectService(null)}
                className="hover:text-white underline underline-offset-4 flex items-center gap-1.5 cursor-pointer transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Services</span>
              </button>
              <ChevronRight className="w-3.5 h-3.5 opacity-60" />
              <span className="text-white font-bold">{currentService.shortTitle}</span>
            </div>

            {}
            <div className="max-w-3xl space-y-4">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-heading">
                {currentService.bannerHeadline}
              </h1>
              <p className="text-[#D8E6F8] text-sm sm:text-base leading-relaxed font-sans max-w-2xl">
                {currentService.bannerDescription}
              </p>
            </div>

            {}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={onContactUs}
                className="px-6 py-3 rounded-2xl bg-[#16A5CE] hover:bg-[#2E54AD] text-[#011337] hover:text-white font-extrabold text-xs sm:text-sm shadow-xl hover:shadow-2xl transition-all cursor-pointer flex items-center gap-2 font-heading"
              >
                <span>Request a Quote / Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onSelectService(null)}
                className="px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/30 transition-all cursor-pointer font-heading"
              >
                Browse All Services
              </button>
            </div>

          </div>
        </div>

        {}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-14">
          
          {}
          <div className="bg-white rounded-3xl border border-[#D8E6F8] p-8 sm:p-12 shadow-sm space-y-8">
            <div className="flex items-start gap-6">
              {}
              <div className="shrink-0 flex items-center justify-center">
                <ServiceIcon 
                  name={currentService.iconName} 
                  size={52} 
                  color="#011337" 
                  accentColor="#16A5CE"
                />
              </div>
              <div className="space-y-2">
                <h2 className="text-xl sm:text-3xl font-extrabold text-[#011337] leading-snug font-heading">
                  {currentService.deliverablesHeading}
                </h2>
                <p className="text-sm sm:text-base text-[#162E66] leading-relaxed font-sans">
                  {currentService.deliverablesDescription}
                </p>
              </div>
            </div>

            {}
            <div className="pt-6 border-t border-[#D8E6F8]/60">
              <h3 className="text-base font-bold text-[#011337] mb-4 font-heading">Core Capabilities & Architecture</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentService.keyFeatures.map((feat, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-start gap-3 p-4 rounded-2xl bg-[#D8E6F8]/15 border border-[#D8E6F8]/60 hover:border-[#16A5CE] transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#2E54AD] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-[#011337] leading-relaxed font-sans">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {}
            <div className="pt-6 border-t border-[#D8E6F8]/60 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-extrabold text-[#2E54AD] uppercase tracking-wider font-heading">
                  Tools & Technologies:
                </span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {currentService.tools.map((t, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#D8E6F8]/25 hover:bg-[#D8E6F8]/50 text-[#011337] text-xs font-bold border border-[#D8E6F8] transition-all font-heading"
                  >
                    <span 
                      className="w-2.5 h-2.5 rounded-full" 
                      style={{ backgroundColor: t.color || '#16A5CE' }} 
                    />
                    {t.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {}
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#011337] font-heading">
                Our Development Lifecycle
              </h3>
              <p className="text-xs sm:text-sm text-[#2E54AD] font-medium font-sans">
                Transparent, sprint-based delivery with continuous verification and dedicated team support.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentService.processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 border border-[#D8E6F8] shadow-xs hover:shadow-md transition-shadow relative overflow-hidden"
                >
                  <div className="text-4xl font-extrabold text-[#2E54AD]/10 absolute top-4 right-4 font-heading">
                    {step.number}
                  </div>
                  <div className="space-y-3 relative z-10">
                    <div className="w-9 h-9 rounded-xl bg-[#2E54AD]/10 text-[#2E54AD] font-bold text-xs flex items-center justify-center font-heading">
                      {step.number}
                    </div>
                    <h4 className="text-base font-bold text-[#011337] font-heading">{step.title}</h4>
                    <p className="text-xs text-[#162E66] leading-relaxed font-sans">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {}
          <div className="bg-gradient-to-r from-[#011337] via-[#162E66] to-[#2E54AD] rounded-3xl p-8 sm:p-12 text-white border border-[#16A5CE]/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="space-y-3 max-w-xl text-center md:text-left relative z-10">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-heading">
                Ready to build with our {currentService.shortTitle} team?
              </h3>
              <p className="text-sm sm:text-base text-[#D8E6F8] leading-relaxed font-sans font-medium">
                Schedule a technical architecture consultation call or submit your project requirements for an estimate.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-end gap-3.5 relative z-10">
              <button
                onClick={onContactUs}
                className="px-6 py-3.5 rounded-xl bg-[#16A5CE] hover:bg-[#2E54AD] text-[#011337] hover:text-white font-extrabold text-sm transition-all shadow-lg cursor-pointer flex items-center gap-2 font-heading"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule a Meeting</span>
              </button>
              <button
                onClick={() => onSelectService(null)}
                className="px-6 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-sm border border-[#D8E6F8]/40 transition-all cursor-pointer font-heading"
              >
                Back to All Services
              </button>
            </div>
          </div>

          {}
          <div className="bg-white rounded-3xl border border-[#D8E6F8] p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h4 className="text-lg sm:text-xl font-extrabold text-[#011337] font-heading">
                  Explore Other Specialized Services
                </h4>
                <p className="text-xs sm:text-sm text-[#162E66] font-medium font-sans">
                  Switch to any of our specialized service tracks.
                </p>
              </div>
              <button
                onClick={() => onSelectService(null)}
                className="text-xs sm:text-sm font-bold text-[#2E54AD] hover:underline cursor-pointer font-heading shrink-0"
              >
                View Full Catalog →
              </button>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3.5 sm:gap-4">
              {SERVICES_DATA.filter((s) => s.id !== currentService.id).map((other) => (
                <button
                  key={other.id}
                  onClick={() => {
                    onSelectService(other);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-[#F5F8FC] hover:bg-[#F0F6FD] p-4 sm:p-5 rounded-2xl border border-[#D8E6F8] hover:border-[#2E54AD] text-center flex flex-col items-center justify-center gap-3 group transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-md hover:-translate-y-1 min-h-[135px]"
                >
                  <div className="flex items-center justify-center p-1 group-hover:scale-110 transition-transform duration-200 text-[#011337]">
                    <ServiceIcon 
                      name={other.iconName} 
                      size={40} 
                      color="#011337" 
                      accentColor="#16A5CE"
                    />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#011337] group-hover:text-[#2E54AD] transition-colors leading-snug font-heading text-center line-clamp-2">
                    {other.shortTitle}
                  </span>
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    );
  }

  
  return (
    <div className="min-h-screen bg-[#F5F8FC] text-[#011337] pb-24">
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#011337] via-[#162E66] to-[#2E54AD] text-white overflow-hidden py-16 sm:py-20 lg:py-24 border-b border-[#2E54AD]/30">
        
        {/* Ambient background glows */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#16A5CE]/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 right-10 w-80 h-80 bg-[#2E54AD]/25 rounded-full blur-2xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
            
            {/* Left Content Column */}
            <div className="max-w-2xl space-y-5 text-center lg:text-left">
              
              {/* Category / Scope Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16A5CE]/15 border border-[#16A5CE]/30 text-[#16A5CE] text-xs font-bold uppercase tracking-wider font-heading">
                <Sparkles className="w-3.5 h-3.5" />
                <span>BPO & Enterprise Technology Solutions</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] font-heading">
                Empowering Business Growth With Premier{' '}
                <span className="bg-gradient-to-r from-[#16A5CE] via-[#D8E6F8] to-[#16A5CE] bg-clip-text text-transparent">
                  BPO & Tech Services
                </span>
              </h1>

              {/* Description */}
              <p className="text-[#D8E6F8] text-sm sm:text-base leading-relaxed font-sans max-w-xl">
                <strong className="font-bold text-white">Beture Web</strong> delivers cutting-edge <strong className="text-white font-semibold">Business Process Outsourcing (BPO)</strong>, bespoke software engineering, enterprise cloud architectures, and high-impact local search visibility (GMB & Citations). We enable companies worldwide to streamline operations, cut overhead costs, and scale with velocity.
              </p>

              {/* Feature Highlights Pills */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1">
                {['Business Process Outsourcing (BPO)', 'Full-Stack Software Dev', 'GMB & Local SEO Growth', 'Dedicated Global Teams'].map((tag, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/10 border border-white/15 text-xs text-white font-medium"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#16A5CE]" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Section Anchor */}
              <div className="flex items-center justify-center lg:justify-start gap-3 pt-3 font-heading">
                <span className="text-base sm:text-lg font-extrabold text-white">Explore Our Services</span>
                <span className="h-[2px] w-16 bg-gradient-to-r from-[#16A5CE] to-transparent rounded-full" />
              </div>
            </div>

            {/* Right Column: Prominent Company Logo Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-sm sm:max-w-md lg:max-w-sm shrink-0"
            >
              <div className="relative rounded-3xl p-8 sm:p-10 bg-white/[0.08] backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden group hover:border-[#16A5CE]/60 transition-all duration-300 flex flex-col items-center text-center">
                
                {/* Ambient Radial glow */}
                <div className="absolute inset-0 bg-radial from-[#16A5CE]/20 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating logo card */}
                <div className="relative mb-4 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#16A5CE]/30 to-[#2E54AD]/30 blur-lg group-hover:blur-xl transition-all" />
                  <div className="relative p-3.5 rounded-2xl bg-[#011337]/70 border border-white/20 shadow-inner">
                    <img
                      src={betureLogoTransparent}
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (target.src !== betureLogoImg) {
                          target.src = betureLogoImg;
                        }
                      }}
                      alt="Beture Web Official Logo"
                      className="w-28 h-28 sm:w-32 sm:h-32 object-contain drop-shadow-[0_8px_24px_rgba(22,165,206,0.5)] group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div className="space-y-1 relative z-10">
                  <div className="text-2xl sm:text-3xl font-black tracking-[0.16em] uppercase leading-tight font-heading">
                    <span className="text-white">BETURE </span>
                    <span className="text-[#16A5CE]">WEB</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#D8E6F8]/85 font-medium tracking-wide font-sans">
                    Business Process Outsourcing & Tech Solutions
                  </p>
                </div>

                {/* Trust indicator */}
                <div className="mt-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16A5CE]/20 border border-[#16A5CE]/40 text-[#D8E6F8] text-[11px] font-bold tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-[#16A5CE] animate-pulse" />
                  <span>Verified Technology Partner</span>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12">
        <div className="bg-white rounded-3xl border border-[#D8E6F8] p-6 sm:p-8 shadow-xs">
          <div className="mb-6">
            <h2 className="text-lg sm:text-xl font-extrabold text-[#011337] font-heading">
              Explore Our Core Capabilities
            </h2>
            <p className="text-xs sm:text-sm text-[#162E66] font-medium font-sans">
              Select any service to view comprehensive technical specifications, tools, and workflows.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3.5 sm:gap-4">
            {SERVICES_DATA.map((srv) => (
              <button
                key={srv.id}
                onClick={() => onSelectService(srv)}
                className="bg-[#F5F8FC] hover:bg-[#F0F6FD] p-4 sm:p-5 rounded-2xl border border-[#D8E6F8] hover:border-[#2E54AD] text-center flex flex-col items-center justify-center gap-3 group transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-md hover:-translate-y-1 min-h-[135px]"
              >
                <div className="flex items-center justify-center p-1 group-hover:scale-110 transition-transform duration-200 text-[#011337]">
                  <ServiceIcon
                    name={srv.iconName}
                    size={40}
                    color="#011337"
                    accentColor="#16A5CE"
                  />
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#011337] group-hover:text-[#2E54AD] transition-colors leading-snug font-heading text-center line-clamp-2">
                  {srv.shortTitle}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 space-y-8">
        {SERVICES_DATA.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={service.id}
              id={`service-row-${service.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`bg-white rounded-3xl border border-[#D8E6F8] hover:border-[#16A5CE] p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col ${
                isEven ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-start md:items-center gap-6 sm:gap-8 group`}
            >
              
              {}
              <div className="w-full md:w-56 shrink-0 flex flex-col items-center justify-center text-center p-6 bg-[#F5F8FC] rounded-2xl border border-[#D8E6F8] group-hover:border-[#16A5CE]/60 transition-colors">
                <div className="flex items-center justify-center mb-3 text-[#011337] group-hover:scale-110 transition-transform">
                  <ServiceIcon 
                    name={service.iconName} 
                    size={48} 
                    color="#011337" 
                    accentColor="#16A5CE"
                  />
                </div>
                <span className="text-sm font-extrabold text-[#011337] leading-snug font-heading">
                  {service.shortTitle}
                </span>
              </div>

              {}
              <div className="flex-1 w-full space-y-4">
                
                {}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#011337] group-hover:text-[#2E54AD] transition-colors font-heading">
                    {service.title}
                  </h3>

                  {}
                  <button
                    onClick={() => onSelectService(service)}
                    className="relative group/btn inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#011337] hover:text-[#2E54AD] transition-colors cursor-pointer self-start sm:self-auto font-heading"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 text-[#2E54AD] transform group-hover/btn:translate-x-1.5 transition-transform" />
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#2E54AD] to-[#16A5CE] origin-left scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 rounded-full" />
                  </button>
                </div>

                {}
                <p className="text-xs sm:text-sm text-[#162E66] leading-relaxed font-sans">
                  {service.fullDescription}
                </p>

                {}
                <div className="pt-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-extrabold text-[#2E54AD] uppercase tracking-wide mr-1 font-heading">
                      Tools & Technologies:
                    </span>
                    {service.tools.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#D8E6F8]/25 text-[#011337] text-[11px] sm:text-xs font-semibold border border-[#D8E6F8] hover:bg-[#D8E6F8]/50 transition-colors font-heading"
                      >
                        <span
                          className="w-2 h-2 rounded-full shrink-0"
                          style={{ backgroundColor: tool.color || '#16A5CE' }}
                        />
                        {tool.name}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </motion.div>
          );
        })}
      </div>

      {}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-gradient-to-r from-[#011337] via-[#162E66] to-[#2E54AD] rounded-3xl p-8 sm:p-12 text-white border border-[#2E54AD]/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-heading">
              Need a custom technical roadmap?
            </h3>
            <p className="text-xs sm:text-sm text-[#D8E6F8] font-sans">
              Our lead engineers are available to review your architecture, conduct security audits, and build tailored enterprise solutions.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onContactUs}
              className="px-6 py-3.5 rounded-2xl bg-[#16A5CE] hover:bg-[#2E54AD] text-[#011337] hover:text-white font-extrabold text-xs sm:text-sm transition-all shadow-lg cursor-pointer font-heading"
            >
              Contact Our Engineers
            </button>
            <button
              onClick={onExploreCourses}
              className="px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all cursor-pointer font-heading"
            >
              Browse Training Courses
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};
