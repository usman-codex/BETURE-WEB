import React from 'react';
import { BlogPost } from '../types';
import { X, Clock, User, Calendar, ArrowLeft } from 'lucide-react';
import Markdown from 'react-markdown';

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#011337]/70 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white border border-[#D8E6F8] text-[#011337] rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
        
        {}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-[#D8E6F8] flex items-center justify-between">
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 text-xs text-[#162E66] hover:text-[#011337] font-semibold cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#2E54AD]" />
            <span>Back to Insights</span>
          </button>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-[#D8E6F8]/30 text-[#5074A8] hover:text-[#011337] border border-[#D8E6F8] cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {}
        <div className="p-6 sm:p-8 space-y-6">
          
          {}
          <div className="space-y-3">
            <span className="bg-[#D8E6F8]/60 text-[#2E54AD] border border-[#2E54AD]/30 text-xs font-bold px-3 py-1 rounded-full inline-block">
              {post.category}
            </span>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#011337] leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-[#5074A8] pt-1 border-b border-[#D8E6F8] pb-4">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#2E54AD]" />
                <span className="font-semibold text-[#011337]">{post.author}</span> ({post.authorRole})
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#5074A8]" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#5074A8]" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          {}
          <div className="rounded-2xl overflow-hidden border border-[#D8E6F8] shadow-md">
            <img 
              src={post.image} 
              alt={post.title} 
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.currentTarget;
                target.onerror = null;
                target.src = 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80';
              }}
              className="w-full h-64 object-cover" 
            />
          </div>

          {}
          <div className="text-xs sm:text-sm text-[#011337] leading-relaxed space-y-4">
            <p className="font-medium text-[#011337] text-base leading-relaxed bg-[#D8E6F8]/20 p-4 rounded-xl border-l-4 border-[#2E54AD]">
              {post.excerpt}
            </p>
            <div className="prose prose-slate max-w-none text-[#011337] leading-relaxed">
              <Markdown
                components={{
                  h3: ({ children }) => (
                    <h3 className="text-base sm:text-lg font-bold text-[#011337] pt-4 pb-1 border-b border-[#D8E6F8]/60 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#2E54AD] shrink-0" />
                      <span>{children}</span>
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-xs sm:text-sm leading-relaxed text-[#011337]/90 my-2.5">
                      {children}
                    </p>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-bold text-[#2E54AD] bg-[#D8E6F8]/40 px-1 py-0.5 rounded">
                      {children}
                    </strong>
                  ),
                  ul: ({ children }) => (
                    <ul className="space-y-2 my-3 list-none pl-0">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="space-y-2 my-3 list-decimal pl-4 marker:text-[#2E54AD] marker:font-bold">
                      {children}
                    </ol>
                  ),
                  li: ({ children }) => (
                    <li className="flex items-start gap-2 p-2.5 rounded-lg bg-[#D8E6F8]/10 border border-[#D8E6F8]/60 text-xs sm:text-sm text-[#011337]">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#2E54AD] shrink-0" />
                      <div className="flex-1">{children}</div>
                    </li>
                  )
                }}
              >
                {post.content}
              </Markdown>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
