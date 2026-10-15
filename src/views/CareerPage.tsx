import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  ArrowRight, 
  Rocket, 
  Network, 
  Coins
} from 'lucide-react';
import { motion } from 'motion/react';
import { CAREERS_DATA } from '../data/careers';
import { JobPosition } from '../types';
import { JobModal } from '../components/JobModal';

interface CareerPageProps {
  onContactUs: () => void;
  onExploreCourses: () => void;
}

export const CareerPage: React.FC<CareerPageProps> = ({
  onContactUs,
  onExploreCourses,
}) => {
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);

  return (
    <div className="relative py-16 bg-[#D8E6F8]/10 min-h-screen text-[#011337] space-y-16 overflow-hidden">
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 pt-2">
          <motion.h1 
            initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight bg-gradient-to-r from-[#162E66] via-[#2E54AD] to-[#16A5CE] bg-clip-text text-transparent pb-1"
          >
            Build Your Career With <span className="text-[#16A5CE]">Beture Web</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="text-[#162E66] text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Join our fast-growing team of engineers, digital marketers, and monetization specialists. Work on high-impact global projects, master industry-standard tools, and accelerate your career.
          </motion.p>
        </div>

        {/* Value Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-3xl p-6 border border-[#D8E6F8] shadow-sm hover:border-[#16A5CE] hover:shadow-md transition-all space-y-3 relative overflow-hidden group"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2E54AD] to-[#16A5CE] text-white flex items-center justify-center font-bold shadow-md shadow-[#2E54AD]/25 group-hover:scale-105 transition-transform">
              <Rocket className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#011337]">High-Impact Work</h3>
            <p className="text-xs text-[#011337]/75 leading-relaxed">
              Build cutting-edge digital products, scalable software architectures, and high-performance monetization engines for global clients.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-3xl p-6 border border-[#D8E6F8] shadow-sm hover:border-[#16A5CE] hover:shadow-md transition-all space-y-3 relative overflow-hidden group"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#162E66] to-[#2E54AD] text-white flex items-center justify-center font-bold shadow-md shadow-[#162E66]/25 group-hover:scale-105 transition-transform">
              <Network className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#011337]">Growth & Career Pathway</h3>
            <p className="text-xs text-[#011337]/75 leading-relaxed">
              We provide hands-on mentorship, enterprise client exposure, and structured pathways to senior and leadership engineering positions.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-3xl p-6 border border-[#D8E6F8] shadow-sm hover:border-[#16A5CE] hover:shadow-md transition-all space-y-3 relative overflow-hidden group"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#16A5CE] to-[#2E54AD] text-white flex items-center justify-center font-bold shadow-md shadow-[#16A5CE]/25 group-hover:scale-105 transition-transform">
              <Coins className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#011337]">Competitive Compensation</h3>
            <p className="text-xs text-[#011337]/75 leading-relaxed">
              Attractive remuneration packages, performance bonuses, project incentives, and sponsored certifications.
            </p>
          </motion.div>
        </div>

        {}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#011337]">Open Positions & Internships</h2>
          </div>

          <div className="space-y-4">
            {CAREERS_DATA.map((job) => (
              <div 
                key={job.id}
                onClick={() => setSelectedJob(job)}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#D8E6F8] hover:border-[#2E54AD] shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 cursor-pointer group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                  <div className="space-y-2.5 flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#2E54AD]/10 text-[#2E54AD] border border-[#2E54AD]/25 text-xs font-bold">
                        <Clock className="w-3.5 h-3.5" />
                        {job.type}
                      </span>
                      <span className="text-xs text-[#5074A8] hidden sm:inline">•</span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#162E66]">
                        <MapPin className="w-3.5 h-3.5 text-[#2E54AD]" />
                        {job.location}
                      </span>
                      <span className="text-xs text-[#5074A8] hidden sm:inline">•</span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#5074A8] bg-[#D8E6F8]/20 px-2 py-0.5 rounded-md border border-[#D8E6F8]/50">
                        {job.workplaceType}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#011337] group-hover:text-[#2E54AD] transition-colors pt-0.5">
                      {job.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#011337]/80 leading-relaxed max-w-3xl">
                      {job.description}
                    </p>
                  </div>

                  <div className="shrink-0 flex items-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedJob(job);
                      }}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#2E54AD] hover:bg-[#162E66] group-hover:bg-[#162E66] text-white text-xs sm:text-sm font-bold transition-all shadow-md shadow-[#2E54AD]/20 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>

                <div className="pt-3.5 border-t border-[#D8E6F8]/70 flex flex-wrap items-center justify-between gap-2 text-xs text-[#5074A8]">
                  <span className="text-[11px] sm:text-xs">Click position for full role details & responsibilities</span>
                  <span className="text-[11px] sm:text-xs">Send resume to <a href="mailto:careers@betureweb.com" onClick={(e) => e.stopPropagation()} className="font-bold text-[#2E54AD] hover:underline">careers@betureweb.com</a></span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {}
      {selectedJob && (
        <JobModal 
          job={selectedJob} 
          onClose={() => setSelectedJob(null)} 
        />
      )}
    </div>
  );
};

