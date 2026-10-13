import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { BusinessNeedsSection } from '../components/BusinessNeedsSection';
import { DesignersDevelopersSection } from '../components/DesignersDevelopersSection';
import { TopProjectsSection } from '../components/TopProjectsSection';
import { GrowBusinessSection } from '../components/GrowBusinessSection';
import { OurFoundersSection } from '../components/OurFoundersSection';
import { BundleSection } from '../components/BundleSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FaqSection } from '../components/FaqSection';

import { Course, BlogPost, Testimonial, FaqItem, ServiceItem } from '../types';

interface HomePageProps {
  courses: Course[];
  blogs: BlogPost[];
  testimonials: Testimonial[];
  faqs: FaqItem[];
  onSelectCourse: (course: Course) => void;
  onSelectBlog: (blog: BlogPost) => void;
  onExploreCourses: () => void;
  onViewAllBlogs: () => void;
  onOpenPromptModal: () => void;
  onNavigateToServices: () => void;
  onSelectService: (service: ServiceItem) => void;
  onNavigateToAbout: () => void;
  onNavigateToProjects: () => void;
  onNavigateToContact?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  courses,
  blogs: _blogs,
  testimonials,
  faqs,
  onSelectCourse,
  onSelectBlog: _onSelectBlog,
  onExploreCourses,
  onViewAllBlogs: _onViewAllBlogs,
  onOpenPromptModal: _onOpenPromptModal,
  onNavigateToServices,
  onSelectService,
  onNavigateToAbout,
  onNavigateToProjects,
  onNavigateToContact,
}) => {
  const bundleCourse = courses.find((c) => c.id === 'all-access-bundle-coaching') || courses[courses.length - 1];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <HeroSection
        onExploreCourses={onExploreCourses}
        onSelectCourse={onSelectCourse}
        onNavigateToContact={onNavigateToContact}
      />

      {/* Business Needs / Services Grid */}
      <BusinessNeedsSection
        onNavigateToServices={onNavigateToServices}
        onSelectService={onSelectService}
      />

      {/* Designers & Developers Section */}
      <DesignersDevelopersSection
        onNavigateToAbout={onNavigateToAbout}
        onNavigateToServices={onNavigateToServices}
      />

      {/* Top Projects Section */}
      <TopProjectsSection
        onNavigateToProjects={onNavigateToProjects}
      />

      {/* Grow Business Section */}
      <GrowBusinessSection />

      {/* Our Founders Section */}
      <OurFoundersSection />

      {/* Bundle Coaching Section */}
      <BundleSection
        bundleCourse={bundleCourse}
        onSelectCourse={onSelectCourse}
      />

      {/* Testimonials */}
      <TestimonialsSection testimonials={testimonials} />

      {/* FAQs */}
      <FaqSection faqs={faqs} />
    </div>
  );
};
