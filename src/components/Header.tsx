import React, { useState, useEffect } from 'react';
import { BetureLogo } from './BetureLogo';
import { motion } from 'motion/react';
import { 
  PhoneCall, 
  BookOpen, 
  Info, 
  Layers, 
  Briefcase, 
  Sparkles, 
  Menu, 
  X,
  LayoutGrid
} from 'lucide-react';

export const LOGO_IMAGE_URL = '/beture-logo.svg';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenPromptModal?: () => void;
  onOpenAuthModal?: (mode: 'login' | 'signup') => void;
  user?: { name: string; email: string } | null;
  onLogout?: () => void;
  searchQuery?: string;
  setSearchQuery?: (q: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: BookOpen },
    { id: 'about', label: 'About Us', icon: Info },
    { id: 'services', label: 'Services', icon: Sparkles },
    { id: 'projects', label: 'Projects', icon: LayoutGrid },
    { id: 'courses', label: 'Course', icon: Layers },
    { id: 'career', label: 'Career', icon: Briefcase },
    { id: 'blog', label: 'Blog', icon: BookOpen },
  ];

  const currentPillTarget = hoveredTab || activeTab;

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'bg-[#011337]/95 backdrop-blur-xl border-b border-[#2E54AD]/40 text-white shadow-2xl py-2.5'
          : 'bg-white border-b border-[#D8E6F8] text-[#011337] shadow-xs py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Brand Logo & Name */}
        <div 
          onClick={() => setActiveTab('home')} 
          className="flex items-center cursor-pointer group shrink-0 select-none"
        >
          <BetureLogo isDark={isScrolled} size="md" />
        </div>

        {/* Desktop Navigation */}
        <nav 
          onMouseLeave={() => setHoveredTab(null)}
          className={`hidden lg:flex items-center p-1 rounded-full border transition-all duration-300 relative ${
            isScrolled
              ? 'bg-[#011337]/80 border-[#2E54AD]/40 backdrop-blur-md shadow-inner'
              : 'bg-[#D8E6F8]/40 border-[#D8E6F8] shadow-xs'
          }`}
        >
          {navItems.map((item) => {
            const isHighlighted = currentPillTarget === item.id;

            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setHoveredTab(null);
                }}
                onMouseEnter={() => setHoveredTab(item.id)}
                className={`relative px-4 py-2 rounded-full text-xs font-bold transition-colors duration-200 cursor-pointer z-10 whitespace-nowrap ${
                  isScrolled
                    ? isHighlighted
                      ? 'text-white'
                      : 'text-[#D8E6F8] hover:text-white'
                    : isHighlighted
                    ? 'text-white'
                    : 'text-[#011337] hover:text-[#2E54AD]'
                }`}
              >
                {isHighlighted && (
                  <motion.div
                    layoutId="navAnimatedPill"
                    transition={{
                      type: 'spring',
                      stiffness: 420,
                      damping: 32,
                    }}
                    className={`absolute inset-0 rounded-full -z-10 shadow-md ${
                      isScrolled
                        ? 'bg-gradient-to-r from-[#2E54AD] to-[#1BBCE0] shadow-[#2E54AD]/40'
                        : 'bg-[#2E54AD] shadow-[#2E54AD]/30'
                    }`}
                  />
                )}
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Contact Us CTA Button */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <button
            onClick={() => setActiveTab('contact')}
            className={`px-5 py-2.5 rounded-full text-xs font-extrabold flex items-center gap-2 transition-all duration-300 shadow-md cursor-pointer ${
              activeTab === 'contact'
                ? 'bg-[#1BBCE0] text-[#011337] ring-2 ring-white shadow-lg'
                : isScrolled
                ? 'bg-[#2E54AD] hover:bg-[#1BBCE0] text-white hover:text-[#011337] shadow-[#2E54AD]/30 hover:scale-105'
                : 'bg-[#2E54AD] hover:bg-[#1BBCE0] text-white hover:text-[#011337] shadow-[#2E54AD]/25 hover:scale-105'
            }`}
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Contact Us</span>
          </button>
        </div>

        {/* Mobile Menu Hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-xl border transition-colors ${
              isScrolled
                ? 'bg-[#162E66]/60 border-[#2E54AD]/40 text-white'
                : 'bg-white border-[#D8E6F8] text-[#011337]'
            }`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div 
          className={`lg:hidden border-b px-4 pt-3 pb-6 space-y-3 mt-2 transition-all ${
            isScrolled
              ? 'bg-[#011337] border-[#2E54AD]/40 text-white'
              : 'bg-white border-[#D8E6F8] text-[#011337]'
          }`}
        >
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold flex items-center gap-3 transition-all ${
                  activeTab === item.id
                    ? 'bg-[#2E54AD] text-white shadow-md'
                    : isScrolled
                    ? 'text-[#D8E6F8] hover:bg-[#162E66]/50'
                    : 'text-[#011337] hover:bg-[#D8E6F8]/40'
                }`}
              >
                <item.icon className="w-4 h-4 text-[#1BBCE0]" />
                {item.label}
              </button>
            ))}

            <button
              onClick={() => {
                setActiveTab('contact');
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold flex items-center gap-3 transition-all ${
                activeTab === 'contact'
                  ? 'bg-[#1BBCE0] text-[#011337] font-black'
                  : 'bg-[#2E54AD] text-white'
              }`}
            >
              <PhoneCall className="w-4 h-4" />
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
