import React from 'react';
import { 
  PhoneCall, 
  ArrowRight,
  ShieldCheck,
  Code2,
  Cpu,
  BarChart3
} from 'lucide-react';
import { motion } from 'motion/react';
import logoImg from '../assets/beture-logo.png';

interface BundleSectionProps {
  onNavigateToServices?: () => void;
  onNavigateToContact?: () => void;
}

export const BundleSection: React.FC<BundleSectionProps> = ({
  onNavigateToServices,
  onNavigateToContact,
}) => {
  return (
    <section className="py-20 bg-[#D8E6F8]/15 text-[#011337] relative overflow-hidden border-b border-[#D8E6F8]">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#2E54AD]/15 via-[#16A5CE]/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Card Container */}
        <div className="bg-white rounded-3xl border-2 border-[#2E54AD]/30 p-8 sm:p-12 shadow-xl relative overflow-hidden text-[#011337]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#011337] leading-[1.15] font-heading">
                  Accelerate Your Business With <span className="text-[#2E54AD]">Enterprise-Grade</span> Digital Solutions
                </h2>
              </div>

              <p className="text-[#4A5D6E] text-base leading-relaxed">
                Whether launching a high-performance web platform, scaling an e-commerce store, automating workflows with custom AI agents, or dominating Google search rankings — Beture Web turns ambitious ideas into scalable market leaders.
              </p>

              {/* 4 Core Service Deliverables */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="flex items-start gap-3 bg-[#F5F8FC] p-3.5 rounded-2xl border border-[#D8E6F8] hover:border-[#16A5CE] transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-[#2E54AD]/10 text-[#2E54AD] flex items-center justify-center shrink-0 mt-0.5">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-[#011337]">Web & E-Commerce</h4>
                    <p className="text-xs text-[#4A5D6E] mt-0.5">Custom React, Next.js, and Shopify stores built for scale.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-[#F5F8FC] p-3.5 rounded-2xl border border-[#D8E6F8] hover:border-[#16A5CE] transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-[#16A5CE]/10 text-[#16A5CE] flex items-center justify-center shrink-0 mt-0.5">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-[#011337]">SEO & Performance Ads</h4>
                    <p className="text-xs text-[#4A5D6E] mt-0.5">Top-tier Google rankings and high-ROAS paid media.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-[#F5F8FC] p-3.5 rounded-2xl border border-[#D8E6F8] hover:border-[#16A5CE] transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-[#2E54AD]/10 text-[#2E54AD] flex items-center justify-center shrink-0 mt-0.5">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-[#011337]">GLM AI & IoT Labs</h4>
                    <p className="text-xs text-[#4A5D6E] mt-0.5">Autonomous agents, RAG models, and smart IoT device telemetry.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-[#F5F8FC] p-3.5 rounded-2xl border border-[#D8E6F8] hover:border-[#16A5CE] transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-[#16A5CE]/10 text-[#16A5CE] flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-[#011337]">Monetization & Design</h4>
                    <p className="text-xs text-[#4A5D6E] mt-0.5">Facebook page monetization and brand-defining graphic design.</p>
                  </div>
                </div>
              </div>

              {/* CTA Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <a
                  href="tel:+923290781709"
                  className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#2E54AD] to-[#16A5CE] hover:brightness-110 text-white font-extrabold text-sm shadow-md shadow-[#16A5CE]/25 transition-all duration-300 hover:scale-105 flex items-center gap-2 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call Us: +92 329 078 1709</span>
                </a>

                {onNavigateToServices && (
                  <button
                    onClick={onNavigateToServices}
                    className="group relative inline-flex items-center gap-2 text-sm font-bold text-[#2E54AD] hover:text-[#16A5CE] transition-colors duration-300 pb-1 cursor-pointer font-heading"
                  >
                    <span>View All Services</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#2E54AD] to-[#16A5CE] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out rounded-full" />
                  </button>
                )}
              </div>

            </div>

            {/* Right Visual Card: Company Image Logo & Brand Text */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="w-full h-full min-h-[300px] sm:min-h-[360px] rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#011337] via-[#081B45] to-[#12285E] border-2 border-[#2E54AD]/40 p-8 sm:p-12 shadow-2xl flex flex-col items-center justify-center text-center relative overflow-hidden group">
                {/* Decorative Glowing Radial Lights */}
                <div className="absolute -top-16 -right-16 w-52 h-52 bg-[#16A5CE]/25 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-16 -left-16 w-52 h-52 bg-[#2E54AD]/35 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(#16A5CE_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />

                {/* Brand Showcase: Image Logo + Text (Same as Navbar) */}
                <div className="relative z-10 flex flex-col items-center justify-center gap-5 sm:gap-6 transform transition-transform duration-500 group-hover:scale-105 select-none">
                  {/* Official Company Image Logo */}
                  <div className="relative p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 shadow-[0_4px_30px_rgba(22,165,206,0.25)] flex items-center justify-center">
                    <img
                      src={logoImg}
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (target.src !== '/beture-logo.png') {
                          target.src = '/beture-logo.png';
                        }
                      }}
                      alt="Beture Web Official Logo"
                      className="h-20 sm:h-24 md:h-28 w-auto object-contain drop-shadow-[0_4px_24px_rgba(22,165,206,0.45)]"
                    />
                  </div>

                  {/* Brand Typography: BETURE (White) + WEB (#16A5CE) */}
                  <div className="flex items-center gap-2.5 sm:gap-3 leading-none">
                    <span className="font-black text-2xl sm:text-3xl lg:text-4xl tracking-[0.14em] text-white font-poppins">
                      BETURE
                    </span>
                    <span className="font-black text-2xl sm:text-3xl lg:text-4xl tracking-[0.14em] text-[#16A5CE] font-poppins">
                      WEB
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
