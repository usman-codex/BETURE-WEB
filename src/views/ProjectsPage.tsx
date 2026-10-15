import React from 'react';
import { motion } from 'motion/react';
import { 
  ExternalLink, 
  ArrowRight,
  Code2,
  TrendingUp,
  Cpu,
  Smartphone,
  Layout,
  Phone,
  Mail,
  MapPin,
  Headphones
} from 'lucide-react';
import { projects } from '../data/projects';
import { BetureLogo } from '../components/BetureLogo';

interface ProjectsPageProps {
  onNavigateToContact: () => void;
  onSelectService?: (serviceSlug: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onNavigateToContact,
}) => {
  const handleOpenLiveSite = (e: React.MouseEvent, url?: string) => {
    e.stopPropagation();
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="w-full bg-[#F8FAFB] min-h-screen">
      
      {/* 1. Hero Section - Clean & Professional */}
      <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-[#011337] via-[#162E66] to-[#2E54AD] text-white overflow-hidden border-b border-[#2E54AD]/30">
        
        {/* Ambient Subtle Glows */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#16A5CE]/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 left-10 w-80 h-80 bg-[#2E54AD]/25 rounded-full blur-2xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            
            {/* Left Content */}
            <div className="max-w-2xl space-y-5 text-center lg:text-left">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] font-heading">
                Our Portfolio &{' '}
                <span className="bg-gradient-to-r from-[#16A5CE] via-[#D8E6F8] to-[#16A5CE] bg-clip-text text-transparent">
                  Top Projects
                </span>
              </h1>

              <p className="text-[#D8E6F8] text-sm sm:text-lg leading-relaxed font-sans max-w-xl">
                Explore our delivered enterprise solutions spanning bespoke software engineering, global Business Process Outsourcing (BPO) hubs, local search visibility engines, and high-performance financial architectures.
              </p>

              <div className="flex items-center justify-center lg:justify-start gap-3 pt-2 font-heading">
                <span className="text-base sm:text-lg font-extrabold text-white">Delivered Solutions</span>
                <span className="h-[2px] w-16 bg-gradient-to-r from-[#16A5CE] to-transparent rounded-full" />
              </div>
            </div>

            {/* Right Side: Exact Navbar Logo */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="shrink-0 flex items-center justify-center py-4 lg:py-0"
            >
              <BetureLogo size="3xl" showText={true} isDark={true} />
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. Projects Grid Showcase - Clean Cards without clutter */}
      <section className="w-full py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                onClick={(e) => handleOpenLiveSite(e, project.liveUrl)}
                className="group flex flex-col bg-white rounded-3xl border border-[#D8E6F8] shadow-sm hover:shadow-xl hover:border-[#16A5CE]/70 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                
                {/* Project Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#EBF3FC]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-108"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  
                  {/* Subtle hover overlay with Explore button */}
                  <div className="absolute inset-0 bg-[#011337]/50 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-4 z-20">
                    <span
                      className="transform translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#16A5CE] hover:bg-[#2E54AD] text-[#011337] hover:text-white font-extrabold text-xs sm:text-sm shadow-xl transition-colors font-heading"
                    >
                      <span>Explore Project</span>
                      <ExternalLink className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Card Body - Only Title and Description */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-start space-y-3">
                  <h3 className="text-xl font-extrabold text-[#011337] group-hover:text-[#2E54AD] transition-colors tracking-tight font-heading">
                    {project.title}
                  </h3>

                  <p className="text-[#4A5D6E] text-xs sm:text-sm leading-relaxed font-sans">
                    {project.description}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Enterprise Capabilities Breakdown */}
      <section className="relative w-full py-16 sm:py-20 bg-white border-t border-[#D8E6F8] overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#2E54AD]/10 text-[#2E54AD] text-xs font-bold font-heading">
              <span>Enterprise Delivery Standards</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#011337] tracking-tight font-heading">
              What We Build Across Our Specialized Domains
            </h2>
            <p className="text-[#4A5D6E] text-sm sm:text-base leading-relaxed font-sans">
              Our multidisciplinary engineers, BPO operation managers, and digital growth specialists build tailored technology solutions engineered for scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            
            {/* 1. BPO Operations */}
            <div className="p-6 rounded-2xl bg-[#F5F8FC] border border-[#D8E6F8] hover:border-[#16A5CE] transition-all space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#EAF4FC] text-[#2E54AD] flex items-center justify-center">
                <Headphones className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-base text-[#011337] font-heading">
                BPO & Operations Outsourcing
              </h4>
              <p className="text-xs sm:text-sm text-[#4A5D6E] leading-relaxed font-sans">
                Dedicated customer service teams, technical helpdesks, back-office data processing, and 24/7 SLA-governed support funnels.
              </p>
            </div>

            {/* 2. Full-Stack Web Development */}
            <div className="p-6 rounded-2xl bg-[#F5F8FC] border border-[#D8E6F8] hover:border-[#16A5CE] transition-all space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#EAF4FC] text-[#2E54AD] flex items-center justify-center">
                <Code2 className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-base text-[#011337] font-heading">
                Full-Stack Web Engineering
              </h4>
              <p className="text-xs sm:text-sm text-[#4A5D6E] leading-relaxed font-sans">
                Modern microservices, React, Next.js, TypeScript, and Node.js architectures engineered for sub-second load speeds and security.
              </p>
            </div>

            {/* 3. GMB & Local SEO */}
            <div className="p-6 rounded-2xl bg-[#F5F8FC] border border-[#D8E6F8] hover:border-[#16A5CE] transition-all space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#EAF4FC] text-[#2E54AD] flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-base text-[#011337] font-heading">
                GMB & Local SEO 3-Pack Growth
              </h4>
              <p className="text-xs sm:text-sm text-[#4A5D6E] leading-relaxed font-sans">
                Local citation synchronization, automated 5-star review funnels, geo-grid heatmap tracking, and inbound phone call generation.
              </p>
            </div>

            {/* 4. Mobile Apps */}
            <div className="p-6 rounded-2xl bg-[#F5F8FC] border border-[#D8E6F8] hover:border-[#16A5CE] transition-all space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#EAF4FC] text-[#2E54AD] flex items-center justify-center">
                <Smartphone className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-base text-[#011337] font-heading">
                iOS & Android Mobile Applications
              </h4>
              <p className="text-xs sm:text-sm text-[#4A5D6E] leading-relaxed font-sans">
                Cross-platform Flutter & React Native mobile experiences with offline caching, push messaging, and biometric authentication.
              </p>
            </div>

            {/* 5. Cloud & DevOps */}
            <div className="p-6 rounded-2xl bg-[#F5F8FC] border border-[#D8E6F8] hover:border-[#16A5CE] transition-all space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#EAF4FC] text-[#2E54AD] flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-base text-[#011337] font-heading">
                Cloud Architecture & DevOps
              </h4>
              <p className="text-xs sm:text-sm text-[#4A5D6E] leading-relaxed font-sans">
                Containerized Docker/Kubernetes clusters on AWS/GCP, automated CI/CD pipelines, and high-availability server monitoring.
              </p>
            </div>

            {/* 6. UI/UX Product Design */}
            <div className="p-6 rounded-2xl bg-[#F5F8FC] border border-[#D8E6F8] hover:border-[#16A5CE] transition-all space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#EAF4FC] text-[#2E54AD] flex items-center justify-center">
                <Layout className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-base text-[#011337] font-heading">
                UI/UX Product Design Systems
              </h4>
              <p className="text-xs sm:text-sm text-[#4A5D6E] leading-relaxed font-sans">
                Figma component libraries, user journey mapping, interactive prototypes, and design systems built for friction-free adoption.
              </p>
            </div>

          </div>

          {/* 4. Direct Project Consultation CTA Banner */}
          <div className="bg-gradient-to-r from-[#011337] via-[#162E66] to-[#2E54AD] rounded-3xl p-8 sm:p-12 text-white border border-[#16A5CE]/40 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            
            <div className="space-y-4 max-w-xl text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                Have a Project in Mind? Let's Build It Together.
              </h3>
              <p className="text-xs sm:text-sm text-[#D8E6F8] font-sans leading-relaxed">
                Reach out directly to discuss your requirements, request an architectural estimate, or assemble a dedicated engineering & BPO team.
              </p>

              {/* Direct Company Contact Details */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-xs sm:text-sm font-semibold">
                <a 
                  href="tel:+923290781709" 
                  className="flex items-center gap-2 hover:text-[#16A5CE] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#16A5CE]" />
                  <span>+92 329 078 1709</span>
                </a>
                <a 
                  href="mailto:betureweb@gmail.com" 
                  className="flex items-center gap-2 hover:text-[#16A5CE] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#16A5CE]" />
                  <span>betureweb@gmail.com</span>
                </a>
                <span className="flex items-center gap-1.5 text-[#D8E6F8]/80">
                  <MapPin className="w-4 h-4 text-[#16A5CE]" />
                  <span>Lahore</span>
                </span>
              </div>
            </div>

            <div className="shrink-0 flex items-center justify-center">
              <button
                onClick={onNavigateToContact}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-[#16A5CE] hover:bg-white text-[#011337] font-extrabold text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all cursor-pointer font-heading"
              >
                <span>Start a Project Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
