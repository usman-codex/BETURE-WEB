import React, { useState } from 'react';
import { Course } from '../types';
import { 
  X, 
  Star, 
  Clock, 
  BookOpen, 
  CheckCircle, 
  Play, 
  Lock, 
  ShieldCheck, 
  Gift, 
  Award,
  ChevronDown,
  User,
  Zap,
  Globe
} from 'lucide-react';

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
  onEnroll: (course: Course) => void;
}

export const CourseModal: React.FC<CourseModalProps> = ({ course, onClose, onEnroll }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'syllabus' | 'instructor'>('overview');
  const [expandedModule, setExpandedModule] = useState<string | null>('m1');

  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#011337]/70 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white border border-[#D8E6F8] text-[#011337] rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
        
        {}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-[#D8E6F8] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-white bg-[#2E54AD] px-2.5 py-0.5 rounded-full">
              {course.category}
            </span>
            <span className="text-xs text-[#162E66] font-medium">{course.level} Level</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#D8E6F8]/30 text-[#011337] hover:bg-[#D8E6F8] border border-[#D8E6F8] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {}
        <div className="p-6 sm:p-8 space-y-8">
          
          {}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            <div className="md:col-span-7 space-y-3">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#011337] leading-tight">
                {course.title}
              </h1>

              <p className="text-xs sm:text-sm text-[#011337]/80 leading-relaxed">
                {course.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-[#162E66] pt-2">
                <div className="flex items-center gap-1 bg-[#1BBCE0]/15 text-[#162E66] px-2.5 py-1 rounded-md border border-[#1BBCE0]/30 font-bold">
                  <Star className="w-3.5 h-3.5 fill-[#1BBCE0] text-[#1BBCE0]" />
                  <span>{course.rating} ({course.reviewCount} reviews)</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#2E54AD]" />
                  <span>{course.durationHours} Total Hours</span>
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-[#2E54AD]" />
                  <span>{course.lessonsCount} HD Lessons</span>
                </div>
              </div>
            </div>

            {}
            <div className="md:col-span-5 relative rounded-2xl overflow-hidden border border-[#D8E6F8] shadow-md">
              <img
                src={course.image}
                alt={course.title}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.onerror = null;
                  target.src = 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80';
                }}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-[#011337]/30 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[#2E54AD] text-white flex items-center justify-center shadow-lg">
                  <Play className="w-5 h-5 fill-white ml-0.5" />
                </div>
              </div>
            </div>

          </div>

          {}
          <div className="flex items-center gap-2 border-b border-[#D8E6F8] pb-2">
            {[
              { id: 'overview', label: 'Overview & Benefits' },
              { id: 'syllabus', label: `Curriculum (${course.modules.length} Modules)` },
              { id: 'instructor', label: 'Instructor & Mentor' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#2E54AD] text-white shadow'
                    : 'text-[#162E66] hover:text-[#011337] hover:bg-[#D8E6F8]/30'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {course.tools && course.tools.length > 0 && (
                <div>
                  <h3 className="text-base font-bold text-[#011337] mb-2 flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#2E54AD]" />
                    Tools & Technologies Covered
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {course.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-semibold bg-[#2E54AD]/10 text-[#2E54AD] border border-[#2E54AD]/30 px-3 py-1 rounded-lg"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h3 className="text-base font-bold text-[#011337] mb-3 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#2E54AD]" />
                  What You Will Learn
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {course.whatYouWillLearn.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 bg-[#D8E6F8]/15 p-3 rounded-xl border border-[#D8E6F8] text-xs text-[#011337]">
                      <CheckCircle className="w-4 h-4 text-[#2E54AD] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#011337] mb-2">Prerequisites</h3>
                <ul className="list-disc list-inside text-xs text-[#162E66] space-y-1">
                  {course.requirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {}
          {activeTab === 'syllabus' && (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-[#011337] mb-1">Detailed Course Curriculum</h3>
              <p className="text-xs text-[#162E66] mb-4">
                Structured step-by-step video modules designed for drip-learning and self-paced progress.
              </p>

              <div className="space-y-3">
                {course.modules.map((mod) => {
                  const isExpanded = expandedModule === mod.id;
                  return (
                    <div key={mod.id} className="bg-[#D8E6F8]/10 rounded-xl border border-[#D8E6F8] overflow-hidden">
                      <button
                        onClick={() => setExpandedModule(isExpanded ? null : mod.id)}
                        className="w-full p-4 flex items-center justify-between text-xs sm:text-sm font-bold text-[#011337] hover:text-[#2E54AD] cursor-pointer text-left"
                      >
                        <span>{mod.title}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-[10px] text-[#5074A8] font-normal">{mod.lessonsCount} lessons • {mod.duration}</span>
                          <ChevronDown className={`w-4 h-4 text-[#2E54AD] transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                        </div>
                      </button>

                      {isExpanded && (
                        <div className="p-4 pt-0 border-t border-[#D8E6F8] space-y-2">
                          {mod.lessons.map((lesson) => (
                            <div key={lesson.id} className="flex items-center justify-between p-2.5 bg-white rounded-lg border border-[#D8E6F8] text-xs text-[#011337]">
                              <div className="flex items-center gap-2.5">
                                {lesson.isPreview ? (
                                  <Play className="w-3.5 h-3.5 text-[#2E54AD] shrink-0" />
                                ) : (
                                  <Lock className="w-3.5 h-3.5 text-[#5074A8] shrink-0" />
                                )}
                                <span>{lesson.title}</span>
                              </div>
                              <div className="flex items-center gap-2 text-[10px] text-[#5074A8]">
                                {lesson.isPreview && (
                                  <span className="bg-[#1BBCE0]/20 text-[#162E66] px-1.5 py-0.5 rounded font-bold">
                                    Free Preview
                                  </span>
                                )}
                                <span>{lesson.duration}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {}
          {activeTab === 'instructor' && (
            <div className="flex items-start gap-4 bg-[#D8E6F8]/15 p-5 rounded-2xl border border-[#D8E6F8]">
              <img
                src={course.instructor.avatar}
                alt={course.instructor.name}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.onerror = null;
                  target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80';
                }}
                className="w-16 h-16 rounded-2xl object-cover border-2 border-[#2E54AD] shrink-0"
              />
              <div className="space-y-1">
                <h4 className="text-base font-bold text-[#011337]">{course.instructor.name}</h4>
                <p className="text-xs text-[#2E54AD] font-bold">{course.instructor.role}</p>
                <p className="text-xs text-[#011337]/80 pt-2 leading-relaxed">
                  Leading expert mentor at Beture Web with extensive field experience in decentralized finance, blockchain architecture, and quantitative algorithms.
                </p>
              </div>
            </div>
          )}

        </div>

        {}
        <div className="sticky bottom-0 bg-white border-t border-[#D8E6F8] p-6 rounded-b-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#162E66] flex items-center gap-1.5 font-medium">
            <ShieldCheck className="w-4 h-4 text-[#2E54AD]" />
            <span>Full Lifetime Access + Official Verified Certificate</span>
          </div>

          <button
            onClick={() => onEnroll(course)}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#2E54AD] hover:bg-[#162E66] text-white font-extrabold text-sm transition-all shadow-lg shadow-[#2E54AD]/20 cursor-pointer"
          >
            Enroll in Course Now
          </button>
        </div>

      </div>
    </div>
  );
};
