import React from 'react';
import { BlogPost } from '../types';
import { BookOpen, ArrowRight } from 'lucide-react';

interface BlogSectionProps {
  blogs: BlogPost[];
  onSelectBlog: (blog: BlogPost) => void;
  onViewAllBlogs: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({
  blogs,
  onSelectBlog,
  onViewAllBlogs,
}) => {
  return (
    <section className="py-20 bg-[#D8E6F8]/20 text-[#011337] relative border-b border-[#D8E6F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#011337]">
              Web3 & FinTech Insights
            </h2>
            <p className="text-[#162E66] text-sm max-w-xl">
              Stay ahead with deep dives on airdrop strategies, growth marketing, and AI financial models written by Beture Web mentors.
            </p>
          </div>

          <button
            onClick={onViewAllBlogs}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-[#D8E6F8]/40 text-[#2E54AD] font-bold text-xs border border-[#D8E6F8] shadow-sm transition-all cursor-pointer w-fit"
          >
            <span>Explore All Insights</span>
            <ArrowRight className="w-4 h-4 text-[#2E54AD]" />
          </button>
        </div>

        {}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((post) => (
            <div
              key={post.id}
              onClick={() => onSelectBlog(post)}
              className="group bg-white rounded-2xl border border-[#D8E6F8] hover:border-[#16A5CE] overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer text-[#011337]"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.onerror = null;
                      target.src = 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80';
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-5 space-y-3">
                  <h3 className="text-base font-bold text-[#011337] group-hover:text-[#2E54AD] transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-[#011337]/75 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
