import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Instagram, Facebook, Linkedin, Mail, Phone, ShieldCheck, Sparkles } from 'lucide-react';

interface Founder {
  id: string;
  name: string;
  role: string;
  title: string;
  bio: string;
  image: string;
  initials: string;
  phone: string;
  email: string;
  socials: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
  };
}

export const OurFoundersSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const founder: Founder = {
    id: 'abdullah-ahmed-khan',
    name: 'Abdullah Ahmed Khan',
    role: 'CEO & Co-Founder',
    title: 'Chief Executive Officer & Co-Founder',
    bio: 'Steering Beture Web with strategic focus on Business Process Outsourcing (BPO), scalable full-stack development, Google My Business (GMB) domination, and global enterprise growth.',
    image: '/abdullah-profile.jpeg',
    initials: 'AAK',
    phone: '+92 329 078 1709',
    email: 'betureweb@gmail.com',
    socials: {
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com',
      linkedin: 'https://linkedin.com',
    },
  };

  return (
    <section 
      id="our-founders-section"
      ref={sectionRef}
      className="relative w-full py-16 sm:py-24 bg-[#FAFAFA] overflow-hidden border-b border-[#E5E7EB]"
    >
      {/* Decorative ambient background glows */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-r from-[#2E54AD]/5 via-[#16A5CE]/10 to-[#2E54AD]/5 rounded-full blur-3xl opacity-70 -z-0" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2E54AD]/10 text-[#2E54AD] text-xs sm:text-sm font-bold tracking-wide uppercase font-poppins mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#16A5CE]" />
            <span>Executive Leadership</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#011337] tracking-tight font-poppins mb-4"
          >
            Leadership Behind Beture Web
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-base text-[#475569] leading-relaxed font-poppins max-w-2xl mx-auto"
          >
            At Beture Web, our technical solutions and global BPO services are guided by focused executive leadership committed to quality, rapid delivery, and measurable business growth.
          </motion.p>
        </div>

        {/* Single Executive Founder Card */}
        <div className="max-w-xl mx-auto">
          <motion.div
            key={founder.id}
            initial={{ scale: 0.9, opacity: 0, y: 25 }}
            animate={isInView ? { scale: 1, opacity: 1, y: 0 } : { scale: 0.9, opacity: 0, y: 25 }}
            transition={{
              duration: 0.65,
              delay: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ y: -6 }}
            className="group relative bg-white hover:bg-[#F8FAFC] rounded-3xl p-8 sm:p-11 border border-[#D8E6F8] hover:border-[#16A5CE] shadow-lg hover:shadow-[0_24px_45px_-12px_rgba(16,124,142,0.2)] transition-all duration-300 flex flex-col items-center text-center"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#2E54AD] to-[#16A5CE] text-white text-xs font-bold uppercase tracking-wider shadow-sm mb-6">
              <ShieldCheck className="w-3.5 h-3.5 text-white" />
              <span>{founder.role}</span>
            </div>

            {/* Profile Photo */}
            <div className="relative mb-6">
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-white shadow-xl ring-4 ring-[#2E54AD]/20 group-hover:ring-[#16A5CE]/40 bg-gradient-to-br from-[#2E54AD]/10 to-[#16A5CE]/20 flex items-center justify-center transition-all duration-300">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.innerHTML = `<span class="text-3xl font-extrabold text-[#011337] font-poppins">${founder.initials}</span>`;
                    }
                  }}
                />
              </div>
            </div>

            {/* Name */}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#011337] group-hover:text-[#2E54AD] transition-colors duration-300 font-poppins mb-1">
              {founder.name}
            </h3>

            {/* Role Title */}
            <p className="text-sm sm:text-base font-bold text-[#2E54AD] font-poppins mb-4">
              {founder.title}
            </p>

            {/* Bio */}
            <p className="text-sm text-[#475569] font-poppins leading-relaxed mb-6 max-w-md">
              {founder.bio}
            </p>

            {/* Contact Pills */}
            <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 pb-6 border-y border-[#E2E8F0]">
              <a
                href={`tel:${founder.phone.replace(/[^+\d]/g, '')}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#F0F6FD] hover:bg-[#2E54AD] text-[#011337] hover:text-white font-bold text-xs sm:text-sm border border-[#D8E6F8] hover:border-[#2E54AD] transition-all duration-200"
                aria-label={`Call ${founder.phone}`}
              >
                <Phone className="w-4 h-4 text-[#16A5CE] group-hover:text-white" />
                <span>{founder.phone}</span>
              </a>

              <a
                href={`mailto:${founder.email}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#F0F6FD] hover:bg-[#16A5CE] text-[#011337] hover:text-white font-bold text-xs sm:text-sm border border-[#D8E6F8] hover:border-[#16A5CE] transition-all duration-200"
                aria-label={`Email ${founder.email}`}
              >
                <Mail className="w-4 h-4 text-[#2E54AD] group-hover:text-white" />
                <span>{founder.email}</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-3.5 mt-6">
              {founder.socials.instagram && (
                <a
                  href={founder.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${founder.name} Instagram`}
                  className="w-10 h-10 rounded-full bg-[#E2E8F0] text-[#64748B] hover:bg-[#E4405F] hover:text-white flex items-center justify-center shadow-sm hover:shadow-lg hover:shadow-pink-500/25 hover:scale-110 transition-all duration-300"
                >
                  <Instagram className="w-4.5 h-4.5" />
                </a>
              )}

              {founder.socials.facebook && (
                <a
                  href={founder.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${founder.name} Facebook`}
                  className="w-10 h-10 rounded-full bg-[#E2E8F0] text-[#64748B] hover:bg-[#1877F2] hover:text-white flex items-center justify-center shadow-sm hover:shadow-lg hover:shadow-blue-500/25 hover:scale-110 transition-all duration-300"
                >
                  <Facebook className="w-4.5 h-4.5 fill-current" />
                </a>
              )}

              {founder.socials.linkedin && (
                <a
                  href={founder.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${founder.name} LinkedIn`}
                  className="w-10 h-10 rounded-full bg-[#E2E8F0] text-[#64748B] hover:bg-[#0A66C2] hover:text-white flex items-center justify-center shadow-sm hover:shadow-lg hover:shadow-sky-600/25 hover:scale-110 transition-all duration-300"
                >
                  <Linkedin className="w-4.5 h-4.5 fill-current" />
                </a>
              )}
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};
