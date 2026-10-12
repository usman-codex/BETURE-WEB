import React from 'react';
import { Course } from '../types';
import { 
  CheckCircle, 
  Crown, 
  Zap, 
  Users, 
  ShieldCheck, 
  Sparkles, 
  Gift
} from 'lucide-react';

interface BundleSectionProps {
  bundleCourse: Course;
  onSelectCourse: (course: Course) => void;
}

export const BundleSection: React.FC<BundleSectionProps> = ({
  bundleCourse,
  onSelectCourse,
}) => {
  return (
    <section className="py-20 bg-[#D8E6F8]/15 text-[#011337] relative overflow-hidden border-b border-[#D8E6F8]">
      
      {}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#2E54AD]/15 via-[#1BBCE0]/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {}
        <div className="bg-white rounded-3xl border-2 border-[#2E54AD]/40 p-8 sm:p-12 shadow-xl relative overflow-hidden text-[#011337]">
          
          {}
          <div className="absolute top-0 right-0 bg-[#2E54AD] text-white font-extrabold text-xs px-6 py-1.5 rounded-bl-2xl uppercase tracking-wider flex items-center gap-1.5 shadow-md">
            <Crown className="w-4 h-4 fill-white text-white" />
            <span>VIP Unlimited Access</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#011337] leading-tight">
                Get <span className="text-[#2E54AD]">Unlimited Access</span> to Every Course + 1-on-1 Mentorship
              </h2>

              <p className="text-[#011337]/80 text-sm sm:text-base leading-relaxed">
                Why buy individual courses when you can unlock our complete educational vault? Gain lifetime access to every existing and future course, plus weekly live mentorship calls, private wallet audits, and exclusive VIP community membership.
              </p>

              {}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-medium text-[#011337] pt-2">
                <div className="flex items-center gap-2.5 bg-[#D8E6F8]/20 p-2.5 rounded-xl border border-[#D8E6F8]">
                  <CheckCircle className="w-4 h-4 text-[#2E54AD] shrink-0" />
                  <span>Unlimited Lifetime Course Vault Access</span>
                </div>
                <div className="flex items-center gap-2.5 bg-[#D8E6F8]/20 p-2.5 rounded-xl border border-[#D8E6F8]">
                  <CheckCircle className="w-4 h-4 text-[#2E54AD] shrink-0" />
                  <span>Monthly 1-on-1 Private Coaching Session</span>
                </div>
                <div className="flex items-center gap-2.5 bg-[#D8E6F8]/20 p-2.5 rounded-xl border border-[#D8E6F8]">
                  <CheckCircle className="w-4 h-4 text-[#2E54AD] shrink-0" />
                  <span>VIP Telegram Emergency Airdrop Channel</span>
                </div>
                <div className="flex items-center gap-2.5 bg-[#D8E6F8]/20 p-2.5 rounded-xl border border-[#D8E6F8]">
                  <CheckCircle className="w-4 h-4 text-[#2E54AD] shrink-0" />
                  <span>CV & Portfolio Review + Job Referral</span>
                </div>
              </div>

            </div>

            {}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#2E54AD]/30 shadow-xl">
                <img
                  src={bundleCourse.image}
                  alt="VIP Bundle"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.onerror = null;
                    target.src = 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80';
                  }}
                  className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#011337]/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-[#D8E6F8] shadow-md text-[#011337] space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-[#2E54AD]">
                    <span className="flex items-center gap-1">
                      <Gift className="w-4 h-4 text-[#2E54AD]" />
                      Bonus Included
                    </span>
                    <span className="text-[#162E66] font-extrabold">100% Satisfaction Guarantee</span>
                  </div>
                  <p className="text-[11px] text-[#011337]/80 leading-snug">
                    Includes all 5 flagship courses, future curriculum drops, 1-on-1 strategy call booking code, and verified certification.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
