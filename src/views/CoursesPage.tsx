import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Course } from '../types';
import { 
  ArrowRight, 
  CheckCircle2,
  Star,
  Clock,
  BookOpen,
  Users,
  Sparkles,
  Search,
  GraduationCap,
  X
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
  searchQuery: externalSearchQuery,
  setSearchQuery: setExternalSearchQuery,
}) => {
  const [internalSearch, setInternalSearch] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const currentSearch = externalSearchQuery !== undefined ? externalSearchQuery : internalSearch;
  const updateSearch = (val: string) => {
    if (setExternalSearchQuery) {
      setExternalSearchQuery(val);
    }
    setInternalSearch(val);
  };

  // Extract unique categories from courses list
  const categories = useMemo(() => {
    const set = new Set<string>();
    courses.forEach(c => {
      if (c.category) set.add(c.category);
    });
    return ['All', ...Array.from(set)];
  }, [courses]);

  // Filter courses by category and search query
  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
      const q = currentSearch.trim().toLowerCase();
      const matchesSearch = !q || 
        course.title.toLowerCase().includes(q) ||
        course.description.toLowerCase().includes(q) ||
        course.category?.toLowerCase().includes(q) ||
        course.tools?.some(t => t.toLowerCase().includes(q)) ||
        course.instructor?.name.toLowerCase().includes(q);
      
      return matchesCategory && matchesSearch;
    });
  }, [courses, selectedCategory, currentSearch]);

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

            {/* Right Side: Only Company Logo Image */}
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
          
          {/* Section Header - Updated Heading & Paragraph */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-4 px-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black font-heading tracking-tight leading-[1.2] text-[#011337]">
              Explore Industry-Leading{' '}
              <span className="bg-gradient-to-r from-[#2E54AD] via-[#16A5CE] to-[#2E54AD] bg-clip-text text-transparent">
                Professional Courses
              </span>
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg text-[#011337]/75 leading-relaxed font-sans max-w-2xl mx-auto font-normal">
              Step-by-step masterclasses designed to equip you with production-grade engineering, digital monetization, modern software architecture, and AI workflow automation.
            </p>
          </div>

          {/* Search & Category Filter Controls */}
          <div className="mb-10 space-y-5">
            {/* Search Input */}
            <div className="max-w-md mx-auto relative">
              <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-[#162E66]/50 pointer-events-none" />
              <input
                type="text"
                value={currentSearch}
                onChange={(e) => updateSearch(e.target.value)}
                placeholder="Search by course title, skills, or tools..."
                className="w-full pl-11 pr-10 py-3 rounded-2xl bg-white border border-[#D8E6F8] focus:border-[#2E54AD] focus:ring-2 focus:ring-[#2E54AD]/20 outline-none text-sm text-[#011337] placeholder-[#011337]/45 shadow-sm transition-all"
              />
              {currentSearch && (
                <button
                  onClick={() => updateSearch('')}
                  aria-label="Clear search"
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-full text-[#011337]/40 hover:text-[#011337] hover:bg-[#D8E6F8]/40 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Pills Bar */}
            <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-2 px-1 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#2E54AD] text-white shadow-md shadow-[#2E54AD]/25'
                      : 'bg-white text-[#011337] hover:text-[#2E54AD] hover:bg-[#D8E6F8]/30 border border-[#D8E6F8]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Results Counter */}
            <div className="flex items-center justify-between text-xs sm:text-sm text-[#011337]/60 px-1">
              <span>Showing <strong className="text-[#011337]">{filteredCourses.length}</strong> {filteredCourses.length === 1 ? 'course' : 'courses'}</span>
              {(selectedCategory !== 'All' || currentSearch) && (
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    updateSearch('');
                  }}
                  className="text-[#2E54AD] hover:underline font-medium cursor-pointer"
                >
                  Reset filters
                </button>
              )}
            </div>
          </div>

          {/* Courses Grid with Enhanced Cards */}
          {filteredCourses.length === 0 ? (
            <div className="bg-white rounded-3xl border border-[#D8E6F8] p-12 text-center max-w-lg mx-auto space-y-4">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-[#D8E6F8]/40 flex items-center justify-center text-[#2E54AD]">
                <Search className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-[#011337]">No courses found</h3>
              <p className="text-sm text-[#011337]/70">
                No courses matched your search criteria. Try using different keywords or resetting filters.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  updateSearch('');
                }}
                className="px-5 py-2.5 rounded-xl bg-[#2E54AD] text-white text-xs font-bold hover:bg-[#162E66] transition-colors cursor-pointer"
              >
                View All Courses
              </button>
            </div>
          ) : (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
            >
              <AnimatePresence mode="popLayout">
                {filteredCourses.map((course, idx) => (
                  <motion.div
                    key={course.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, delay: idx * 0.04 }}
                    onClick={() => onSelectCourse(course)}
                    className="group relative bg-white rounded-3xl border border-[#D8E6F8] hover:border-[#2E54AD] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between cursor-pointer"
                  >
                    <div>
                      {/* Course Image Header with Badges */}
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
                          className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#011337]/75 via-[#011337]/20 to-transparent opacity-80" />
                        
                        {/* Category Badge - Top Left */}
                        {course.category && (
                          <div className="absolute top-3.5 left-3.5 bg-[#011337]/85 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                            {course.category}
                          </div>
                        )}

                        {/* Special Tag / Badge - Top Right */}
                        {course.badge && (
                          <div className="absolute top-3.5 right-3.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                            <Sparkles className="w-3 h-3" />
                            <span>{course.badge}</span>
                          </div>
                        )}

                        {/* Bottom Overlay: Rating & Students */}
                        <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-white text-xs font-semibold">
                          <div className="flex items-center gap-1.5 bg-[#011337]/70 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-white/10">
                            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                            <span>{course.rating ? course.rating.toFixed(1) : '4.9'}</span>
                            <span className="text-white/60 text-[11px]">({course.reviewCount || 120})</span>
                          </div>
                          {course.studentCount && (
                            <div className="flex items-center gap-1 bg-[#011337]/70 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-white/10 text-white/90 text-[11px]">
                              <Users className="w-3.5 h-3.5 text-[#16A5CE]" />
                              <span>{course.studentCount.toLocaleString()}+ students</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Course Content */}
                      <div className="p-6 space-y-3.5">
                        <h3 className="text-lg sm:text-xl font-black font-heading text-[#011337] group-hover:text-[#2E54AD] transition-colors leading-snug line-clamp-2">
                          {course.title}
                        </h3>

                        <p className="text-sm text-[#011337]/75 line-clamp-2 leading-relaxed">
                          {course.tagline || course.description}
                        </p>

                        {/* Meta Info Bar: Duration, Lessons & Level */}
                        <div className="flex flex-wrap items-center gap-y-2 gap-x-4 pt-1 text-xs text-[#011337]/70 border-t border-[#D8E6F8]/60">
                          {course.durationHours && (
                            <div className="flex items-center gap-1.5 font-medium">
                              <Clock className="w-3.5 h-3.5 text-[#2E54AD]" />
                              <span>{course.durationHours} Hours</span>
                            </div>
                          )}
                          {course.lessonsCount && (
                            <div className="flex items-center gap-1.5 font-medium">
                              <BookOpen className="w-3.5 h-3.5 text-[#2E54AD]" />
                              <span>{course.lessonsCount} Lessons</span>
                            </div>
                          )}
                          {course.level && (
                            <div className="flex items-center gap-1.5 font-medium text-[#162E66]">
                              <GraduationCap className="w-3.5 h-3.5 text-[#16A5CE]" />
                              <span>{course.level}</span>
                            </div>
                          )}
                        </div>

                        {/* Tools / Skills Tags Preview */}
                        {course.tools && course.tools.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {course.tools.slice(0, 3).map((tool, tIdx) => (
                              <span 
                                key={tIdx} 
                                className="bg-[#D8E6F8]/40 text-[#162E66] text-[11px] font-medium px-2 py-0.5 rounded-md"
                              >
                                {tool}
                              </span>
                            ))}
                            {course.tools.length > 3 && (
                              <span className="text-[#011337]/50 text-[11px] font-medium self-center">
                                +{course.tools.length - 3} more
                              </span>
                            )}
                          </div>
                        )}

                        {/* Instructor Info */}
                        {course.instructor && (
                          <div className="flex items-center gap-2.5 pt-2 border-t border-[#D8E6F8]/50 text-xs">
                            <img
                              src={course.instructor.avatar}
                              alt={course.instructor.name}
                              onError={(e) => {
                                const target = e.currentTarget;
                                target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80';
                              }}
                              className="w-6 h-6 rounded-full object-cover border border-[#D8E6F8]"
                            />
                            <div className="truncate">
                              <span className="font-bold text-[#011337] truncate block">{course.instructor.name}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Course Footer Action & Price */}
                    <div className="px-6 pb-6 pt-0">
                      <div className="pt-3 border-t border-[#D8E6F8] flex items-center justify-between gap-3">
                        {/* Price */}
                        <div>
                          <div className="flex items-baseline gap-1.5">
                            <span className="text-lg sm:text-xl font-black text-[#011337]">
                              ₨ {course.pricePKR ? course.pricePKR.toLocaleString() : (course.priceUSD * 280).toLocaleString()}
                            </span>
                            {course.originalPriceUSD && (
                              <span className="text-xs text-[#011337]/45 line-through">
                                ₨ {(course.originalPriceUSD * 280).toLocaleString()}
                              </span>
                            )}
                          </div>
                          <span className="text-[11px] text-[#2E54AD] font-semibold">
                            Lifetime Access
                          </span>
                        </div>

                        {/* Action Button */}
                        <div className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#2E54AD] text-white group-hover:bg-[#162E66] font-bold text-xs sm:text-sm shadow-sm transition-all duration-300">
                          <span>View Details</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>

                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}

        </div>
      </section>

    </div>
  );
};

