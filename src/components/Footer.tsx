import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BetureLogo } from './BetureLogo';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Shield, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Youtube, 
  MessageCircle,
  Briefcase,
  X,
  CheckCircle2,
  HelpCircle,
  FileText,
  Lock
} from 'lucide-react';

interface FooterProps {
  setActiveTab?: (tab: string) => void;
  onOpenPromptModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | 'help' | null>(null);

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/company/fintech-edge-institute', 
      color: 'hover:bg-[#0077B5] hover:border-[#0077B5]' 
    },
    { 
      name: 'Facebook', 
      icon: Facebook, 
      href: 'https://www.facebook.com/FinTechEdge/', 
      color: 'hover:bg-[#1877F2] hover:border-[#1877F2]' 
    },
    { 
      name: 'Instagram', 
      icon: Instagram, 
      href: 'https://www.instagram.com/fintechedgeinstitute/', 
      color: 'hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:border-transparent' 
    },
    { 
      name: 'YouTube', 
      icon: Youtube, 
      href: 'https://www.youtube.com/@fintechedgeinstitute', 
      color: 'hover:bg-[#FF0000] hover:border-[#FF0000]' 
    },
    { 
      name: 'beBee', 
      icon: Briefcase, 
      href: 'https://bebee.com/pk/companies/fintech-edge-institute', 
      color: 'hover:bg-[#FF9900] hover:border-[#FF9900]' 
    },
    { 
      name: 'WhatsApp', 
      icon: MessageCircle, 
      href: 'https://wa.me/923111222595', 
      color: 'hover:bg-[#25D366] hover:border-[#25D366]' 
    },
  ];

  return (
    <footer className="relative w-full bg-gradient-to-r from-[#011337] via-[#081B45] to-[#12285E] text-[#D8E6F8] border-t border-[#2E54AD]/40 py-8 sm:py-10 overflow-hidden shadow-2xl">
      <div className="absolute top-0 right-10 w-72 h-72 bg-[#16A5CE]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-[#2E54AD]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 items-center pb-8 border-b border-[#2E54AD]/30">
          
          <div className="space-y-3 text-center md:text-left">
            <div 
              onClick={() => setActiveTab && setActiveTab('home')} 
              className="inline-flex items-center cursor-pointer group select-none"
            >
              <BetureLogo isDark={true} size="md" />
            </div>

            <p className="text-xs sm:text-sm text-[#D8E6F8]/80 leading-relaxed max-w-sm mx-auto md:mx-0">
              Empowering next-gen web developers, AI innovators, and tech pioneers with cutting-edge digital products, verified programs, and practical mentorship.
            </p>

            <div className="flex items-center justify-center md:justify-start gap-2.5 pt-1">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#011337]/70 text-[#D8E6F8] border border-[#2E54AD]/50 shadow-xs">
                <Globe className="w-3 h-3 text-[#16A5CE]" />
                Global Platform
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#011337]/70 text-[#D8E6F8] border border-[#2E54AD]/50 shadow-xs">
                <Shield className="w-3 h-3 text-[#16A5CE]" />
                Verified Solutions
              </span>
            </div>
          </div>

          <div className="space-y-3 text-center md:text-left">
            <h4 className="text-xs font-black uppercase tracking-wider text-white flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-[#16A5CE]" />
              <span>Campus & Head Office</span>
            </h4>
            
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex items-start justify-center md:justify-start gap-2.5 text-[#D8E6F8]">
                <MapPin className="w-4 h-4 text-[#16A5CE] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  Plot #40, Sector B1, Block 1, Abubakar Rd, Township, Lahore.
                </span>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-2.5 text-[#D8E6F8]">
                <Mail className="w-4 h-4 text-[#16A5CE] shrink-0" />
                <a 
                  href="mailto:betureweb@gmail.com" 
                  className="hover:text-[#16A5CE] text-white/90 hover:underline transition-colors"
                >
                  betureweb@gmail.com
                </a>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-2.5 text-[#D8E6F8] pt-0.5">
                <Phone className="w-4 h-4 text-[#16A5CE] shrink-0" />
                <a 
                  href="tel:+923290781709" 
                  className="hover:text-[#16A5CE] font-bold text-white transition-colors tracking-wide"
                >
                  +92 329 078 1709
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-3 text-center md:text-right flex flex-col items-center md:items-end justify-center">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Connect With Us
            </h4>
            <p className="text-xs text-[#D8E6F8]/70 max-w-xs">
              Follow Beture Web channels for software releases, career openings & updates.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-end gap-2.5 pt-1">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`w-9 h-9 rounded-xl bg-[#011337]/60 border border-[#2E54AD]/40 flex items-center justify-center text-[#D8E6F8] hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#16A5CE]/20 cursor-pointer ${social.color}`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D8E6F8]/70">
          <p>© 2026 Beture Web. All rights reserved.</p>

          <div className="flex items-center gap-5 sm:gap-6 font-semibold">
            <button 
              onClick={() => setActiveModal('privacy')} 
              className="text-[#D8E6F8] hover:text-[#16A5CE] transition-colors cursor-pointer hover:underline"
            >
              Privacy Policy
            </button>
            <span className="text-[#2E54AD]/60">•</span>
            <button 
              onClick={() => setActiveModal('terms')} 
              className="text-[#D8E6F8] hover:text-[#16A5CE] transition-colors cursor-pointer hover:underline"
            >
              Terms of Service
            </button>
            <span className="text-[#2E54AD]/60">•</span>
            <button 
              onClick={() => setActiveModal('help')} 
              className="text-[#D8E6F8] hover:text-[#16A5CE] transition-colors cursor-pointer hover:underline"
            >
              Help & Support
            </button>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-[#D8E6F8]/70">
            <span>Powered by</span>
            <span className="font-extrabold text-[#16A5CE]">Beture Web</span>
          </div>
        </div>

      </div>

      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-xl bg-[#011337] text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#2E54AD]/50 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#2E54AD] text-[#16A5CE] flex items-center justify-center shadow-md">
                  {activeModal === 'privacy' && <Lock className="w-5 h-5 text-white" />}
                  {activeModal === 'terms' && <FileText className="w-5 h-5 text-white" />}
                  {activeModal === 'help' && <HelpCircle className="w-5 h-5 text-white" />}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-black font-heading text-white">
                    {activeModal === 'privacy' && 'Privacy Policy'}
                    {activeModal === 'terms' && 'Terms of Service'}
                    {activeModal === 'help' && 'Help & Client Support'}
                  </h3>
                  <span className="text-xs text-[#16A5CE] font-bold">
                    Beture Web Official Documentation
                  </span>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-[#D8E6F8]/90 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
                {activeModal === 'privacy' && (
                  <>
                    <p>
                      At <strong>Beture Web</strong>, we are committed to protecting your personal data, client intellectual property, and digital privacy in compliance with international data standards.
                    </p>
                    <div className="p-3 rounded-xl bg-black/30 space-y-1.5 border border-white/5">
                      <h5 className="font-bold text-white flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#16A5CE]" />
                        Data Encryption & Security
                      </h5>
                      <p className="text-xs text-[#D8E6F8]/80">
                        All project repositories, client data, and systems are guarded using industry-standard encryption and security protocols.
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-black/30 space-y-1.5 border border-white/5">
                      <h5 className="font-bold text-white flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#16A5CE]" />
                        No Third-Party Data Selling
                      </h5>
                      <p className="text-xs text-[#D8E6F8]/80">
                        We never sell user or client information to third-party brokers or advertisers.
                      </p>
                    </div>
                  </>
                )}

                {activeModal === 'terms' && (
                  <>
                    <p>
                      By collaborating with <strong>Beture Web</strong> or enrolling in programs, you agree to adhere to our standard operational and service terms.
                    </p>
                    <div className="p-3 rounded-xl bg-black/30 space-y-1.5 border border-white/5">
                      <h5 className="font-bold text-white flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#16A5CE]" />
                        Professional Deliverables & Assurance
                      </h5>
                      <p className="text-xs text-[#D8E6F8]/80">
                        Software products and training deliverables follow verified quality assurance benchmarks and modern architecture standards.
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-black/30 space-y-1.5 border border-white/5">
                      <h5 className="font-bold text-white flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#16A5CE]" />
                        Intellectual Property & Code Rights
                      </h5>
                      <p className="text-xs text-[#D8E6F8]/80">
                        Clients retain full ownership of custom applications, smart contracts, and web assets created for their enterprise.
                      </p>
                    </div>
                  </>
                )}

                {activeModal === 'help' && (
                  <>
                    <p>
                      Need help with technical development, web solutions, or project mentorship? Our support team is ready to assist.
                    </p>
                    <div className="p-3.5 rounded-xl bg-gradient-to-r from-[#2E54AD]/40 to-[#011337] border border-[#2E54AD]/50 space-y-2">
                      <div className="flex items-center gap-2 text-white font-bold">
                        <Phone className="w-4 h-4 text-[#16A5CE]" />
                        <span>Direct Help Hotline:</span>
                        <a href="tel:+923290781709" className="text-[#16A5CE] underline">+92 329 078 1709</a>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-[#D8E6F8]">
                        <MapPin className="w-4 h-4 text-[#16A5CE] shrink-0 mt-0.5" />
                        <span>Head Office: Plot #40, Sector B1, Block 1, Abubakar Rd, Township, Lahore.</span>
                      </div>
                    </div>
                    <p className="text-xs text-[#D8E6F8]/70">
                      Operating hours: Monday – Saturday (9:00 AM – 7:00 PM PKT).
                    </p>
                  </>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setActiveModal(null)}
                  className="px-5 py-2 rounded-xl bg-[#2E54AD] hover:bg-[#16A5CE] text-white hover:text-[#011337] text-xs font-bold font-heading transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </footer>
  );
};
