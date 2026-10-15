import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Course } from '../types';
import { 
  ArrowRight, 
  CheckCircle2
} from 'lucide-react';
import logoImg from '../assets/beture-logo.png';

interface CoursesPageProps {
  courses: Course[];
  onSelectCourse: (course: Course) => void;
  searchQuery?: string;
  setSearchQuery?: (q: string) => void;
}

export const CoursesPage: React.FC<CoursesPageProps> = ({
  courses,
  onSelectCourse,
}) => {
  return (
    <div className="w-full bg-[#F8FAFB] min-h-screen text-[#011337] flex flex-col font-sans">
      
      {/* 1. Hero Section - Executive & Modern */}
      <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-[#011337] via-[#162E66] to-[#2E54AD] text-white overflow-hidden border-b border-[#2E54AD]/30 shadow-lg">
        
        {/* Ambient Subtle Glows */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#16A5CE]/20 rounded-full blur-3xl opacity-70" />
          <div className="absolute -bottom-10 left-10 w-80 h-80 bg-[#2E54AD]/30 rounded-full blur-2xl opacity-60" />
          <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(#D8E6F8_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
            
            {/* Left Content Column */}
            <div className="max-w-2xl space-y-5 text-center lg:text-left">

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.14] font-heading">
                Master In-Demand{' '}
                <span className="bg-gradient-to-r from-[#16A5CE] via-[#D8E6F8] to-[#16A5CE] bg-clip-text text-transparent">
                  Digital Skills
                </span>
                {' '}& Monetization
              </h1>

              {/* Subtitle / Paragraph */}
              <p className="text-[#D8E6F8] text-sm sm:text-base lg:text-lg leading-relaxed font-sans max-w-xl mx-auto lg:mx-0">
                Fast-track your professional journey with hands-on, project-based curriculums taught by industry practitioners. From Meta In-Stream Ads monetization and AI workflow engineering to full-stack cloud software architecture.
              </p>

              {/* Feature Points Row */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-2 text-xs sm:text-sm text-[#D8E6F8]/95 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16A5CE] shrink-0" />
                  <span>100% Practical Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16A5CE] shrink-0" />
                  <span>Direct Mentor Guidance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16A5CE] shrink-0" />
                  <span>Industry Verified Certification</span>
                </div>
              </div>

            </div>

            {/* Right Side: Only Company Logo Image (no box, no background container) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="shrink-0 flex items-center justify-center py-4 lg:py-0"
            >
              <img
                src={logoImg}
                alt="Beture Logo"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== '/beture-logo.png') {
                    target.src = '/beture-logo.png';
                  }
                }}
                className="h-32 sm:h-44 md:h-52 lg:h-60 w-auto object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:scale-105 select-none"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. Courses Listing Section */}
      <section className="relative w-full py-16 sm:py-20 flex-1 overflow-hidden">
        
        {/* Subtle background ambiance */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#16A5CE]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#2E54AD]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-4 px-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black font-heading tracking-tight leading-[1.25] text-[#011337]">
              Professional Training Programs
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg text-[#011337]/75 leading-relaxed font-sans max-w-2xl mx-auto font-normal">
              Step-by-step masterclasses designed to equip you with production-grade engineering, digital business monetization, and scalable creative skills.
            </p>
          </div>

          {/* Courses Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
          >
            <AnimatePresence mode="popLayout">
              {courses.map((course, idx) => (
                <motion.div
                  key={course.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  onClick={() => onSelectCourse(course)}
                  className="group relative bg-white rounded-3xl border border-[#D8E6F8] hover:border-[#16A5CE] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    {/* Course Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#EBF3FC]">
                      <img
                        src={course.image}
                        alt={course.title}
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.onerror = null;
                          target.src = 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80';
                        }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#011337]/60 via-transparent to-transparent opacity-60" />
                      
                      {course.category && (
                        <div className="absolute top-3.5 left-3.5 bg-[#011337]/80 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                          {course.category}
                        </div>
                      )}
                    </div>

                    {/* Course Content */}
                    <div className="p-6 space-y-3">
                      <h3 className="text-lg sm:text-xl font-black font-heading text-[#011337] group-hover:text-[#2E54AD] transition-colors leading-snug line-clamp-2">
                        {course.title}
                      </h3>

                      <p className="text-sm text-[#011337]/75 line-clamp-3 leading-relaxed">
                        {course.tagline || course.description}
                      </p>
                    </div>
                  </div>

                  {/* Course Footer Action */}
                  <div className="px-6 pb-6 pt-0">
                    <div className="pt-3 border-t border-[#D8E6F8]/60 flex items-center justify-between">
                      <span className="relative inline-flex items-center gap-2 text-sm font-bold text-[#2E54AD] group-hover:text-[#16A5CE] transition-colors py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#16A5CE] group-hover:after:w-full after:transition-all after:duration-300">
                        <span>Explore Program Details</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 text-[#2E54AD] group-hover:text-[#16A5CE]" />
                      </span>
                    </div>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

    </div>
  );
};
