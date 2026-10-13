import React, { useState } from 'react';
import { CLAUDE_PROMPT_TEXT } from '../data/claudePrompt';
import { 
  X, 
  Copy, 
  Check, 
  Download, 
  Code2, 
  Sparkles, 
  Palette, 
  Layers, 
  Wand2, 
  FileText
} from 'lucide-react';

interface ClaudePromptModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClaudePromptModal: React.FC<ClaudePromptModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'full' | 'colors' | 'pages' | 'animations'>('full');

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(CLAUDE_PROMPT_TEXT);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([CLAUDE_PROMPT_TEXT], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "fintech-edge-institute-claude-prompt.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#011337]/70 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white border border-[#D8E6F8] text-[#011337] rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl relative">
        
        {}
        <div className="bg-[#D8E6F8]/20 px-6 py-4 border-b border-[#D8E6F8] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#D8E6F8]/60 text-[#2E54AD] border border-[#2E54AD]/30 flex items-center justify-center shadow-sm">
              <Code2 className="w-5 h-5 text-[#2E54AD]" />
            </div>
            <div>
              <h2 className="text-lg font-extrabold text-[#011337] flex items-center gap-2">
                Claude AI Master Prompt
                <span className="bg-[#2E54AD] text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase">
                  Ready to Copy
                </span>
              </h2>
              <p className="text-xs text-[#162E66]">
                Give this complete prompt to Claude to generate an identical Beture Web website.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#D8E6F8]/30 text-[#5074A8] hover:text-[#011337] border border-[#D8E6F8] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {}
        <div className="bg-[#D8E6F8]/10 p-4 px-6 border-b border-[#D8E6F8] flex flex-wrap items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-2 overflow-x-auto">
            <button
              onClick={() => setActiveTab('full')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'full' ? 'bg-[#2E54AD] text-white' : 'bg-[#D8E6F8]/20 text-[#162E66] hover:bg-[#D8E6F8]/40 border border-[#D8E6F8]'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              Full Prompt Text
            </button>
            <button
              onClick={() => setActiveTab('colors')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'colors' ? 'bg-[#2E54AD] text-white' : 'bg-[#D8E6F8]/20 text-[#162E66] hover:bg-[#D8E6F8]/40 border border-[#D8E6F8]'
              }`}
            >
              <Palette className="w-3.5 h-3.5" />
              Color System
            </button>
            <button
              onClick={() => setActiveTab('pages')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'pages' ? 'bg-[#2E54AD] text-white' : 'bg-[#D8E6F8]/20 text-[#162E66] hover:bg-[#D8E6F8]/40 border border-[#D8E6F8]'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              Pages & Sections
            </button>
            <button
              onClick={() => setActiveTab('animations')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'animations' ? 'bg-[#2E54AD] text-white' : 'bg-[#D8E6F8]/20 text-[#162E66] hover:bg-[#D8E6F8]/40 border border-[#D8E6F8]'
              }`}
            >
              <Wand2 className="w-3.5 h-3.5" />
              Animations & Motion
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="px-3.5 py-2 rounded-xl bg-white hover:bg-[#D8E6F8]/20 text-[#011337] text-xs font-bold border border-[#D8E6F8] flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
              title="Download text file"
            >
              <Download className="w-3.5 h-3.5 text-[#2E54AD]" />
              Download TXT
            </button>

            <button
              onClick={handleCopy}
              className="px-5 py-2 rounded-xl bg-[#2E54AD] hover:bg-[#162E66] text-white font-extrabold text-xs flex items-center gap-1.5 shadow-md shadow-[#2E54AD]/20 transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>Prompt Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-white" />
                  <span>Copy Prompt to Clipboard</span>
                </>
              )}
            </button>
          </div>
        </div>

        {}
        <div className="p-6 overflow-y-auto flex-1 font-mono text-xs leading-relaxed bg-[#011337] text-white select-all">
          {activeTab === 'full' && (
            <pre className="whitespace-pre-wrap font-mono text-xs text-[#D8E6F8] selection:bg-[#16A5CE] selection:text-[#011337]">
              {CLAUDE_PROMPT_TEXT}
            </pre>
          )}

          {activeTab === 'colors' && (
            <div className="space-y-4 font-sans text-xs">
              <h3 className="text-sm font-bold text-white mb-2">Exact Color Scheme Specifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 bg-[#162E66]/40 rounded-xl border border-[#2E54AD]/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-md bg-[#011337] border border-[#2E54AD]" />
                    <div>
                      <div className="font-bold text-white">Dark Navy</div>
                      <div className="text-[10px] text-[#D8E6F8]">Primary text & dark backgrounds</div>
                    </div>
                  </div>
                  <code className="text-[#16A5CE] font-mono">#011337</code>
                </div>

                <div className="p-3 bg-[#162E66]/40 rounded-xl border border-[#2E54AD]/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-md bg-[#2E54AD]" />
                    <div>
                      <div className="font-bold text-white">Teal Blue</div>
                      <div className="text-[10px] text-[#D8E6F8]">Primary action buttons & accents</div>
                    </div>
                  </div>
                  <code className="text-[#16A5CE] font-mono">#2E54AD</code>
                </div>

                <div className="p-3 bg-[#162E66]/40 rounded-xl border border-[#2E54AD]/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-md bg-[#16A5CE]" />
                    <div>
                      <div className="font-bold text-white">Bright Teal/Cyan</div>
                      <div className="text-[10px] text-[#D8E6F8]">Highlights & vibrant badges</div>
                    </div>
                  </div>
                  <code className="text-[#16A5CE] font-mono">#16A5CE</code>
                </div>

                <div className="p-3 bg-[#162E66]/40 rounded-xl border border-[#2E54AD]/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-md bg-[#D8E6F8] border border-white" />
                    <div>
                      <div className="font-bold text-white">Light Cyan</div>
                      <div className="text-[10px] text-[#D8E6F8]">Borders, subtle cards & backgrounds</div>
                    </div>
                  </div>
                  <code className="text-[#16A5CE] font-mono">#D8E6F8</code>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'pages' && (
            <div className="space-y-4 font-sans text-xs">
              <h3 className="text-sm font-bold text-white mb-2">Website Architecture & Pages</h3>
              <div className="space-y-2">
                <div className="p-3 bg-[#162E66]/40 rounded-xl border border-[#2E54AD]/30">
                  <div className="font-bold text-[#16A5CE]">1. Home Page (/)</div>
                  <p className="text-[#D8E6F8] mt-1">Header Navbar, Hero Banner, Key Pillars (Why Choose Us), Top Featured Courses with Category Filters, All-Access VIP Bundle Banner, Student Testimonials, Latest Insights Blog, FAQ Accordion, Final CTA, Footer.</p>
                </div>
                <div className="p-3 bg-[#162E66]/40 rounded-xl border border-[#2E54AD]/30">
                  <div className="font-bold text-[#16A5CE]">2. All Courses Catalog (/courses)</div>
                  <p className="text-[#D8E6F8] mt-1">Search bar, category filters, skill level selector, dual USD/PKR prices, and course preview triggers.</p>
                </div>
                <div className="p-3 bg-[#162E66]/40 rounded-xl border border-[#2E54AD]/30">
                  <div className="font-bold text-[#16A5CE]">3. Course Detail View (/course/:slug)</div>
                  <p className="text-[#D8E6F8] mt-1">Hero video preview, curriculum drip modules breakdown, lesson checklists, instructor bio, ratings, and sticky checkout box.</p>
                </div>
                <div className="p-3 bg-[#162E66]/40 rounded-xl border border-[#2E54AD]/30">
                  <div className="font-bold text-[#16A5CE]">4. About Us (/about)</div>
                  <p className="text-[#D8E6F8] mt-1">Mission, vision, learning philosophy, impact metrics, and mentorship team profiles.</p>
                </div>
                <div className="p-3 bg-[#162E66]/40 rounded-xl border border-[#2E54AD]/30">
                  <div className="font-bold text-[#16A5CE]">5. Blog & Community (/blog)</div>
                  <p className="text-[#D8E6F8] mt-1">Airdrop guides, Web3 growth articles, AI models in FinTech, and full reader view.</p>
                </div>
                <div className="p-3 bg-[#162E66]/40 rounded-xl border border-[#2E54AD]/30">
                  <div className="font-bold text-[#16A5CE]">6. Contact Us (/contact)</div>
                  <p className="text-[#D8E6F8] mt-1">Validated contact form, direct email (betureweb@gmail.com), phone (+92 329 078 1709), and Lahore address.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'animations' && (
            <div className="space-y-4 font-sans text-xs">
              <h3 className="text-sm font-bold text-white mb-2">Hover Effects & Motion Guidelines</h3>
              <div className="space-y-2 text-[#D8E6F8]">
                <div className="p-3 bg-[#162E66]/40 rounded-xl border border-[#2E54AD]/30">
                  <span className="font-bold text-[#16A5CE]">Card Hover Effect:</span> Slight lift (-4px translate-y), scale(1.02), subtle teal glow shadow.
                </div>
                <div className="p-3 bg-[#162E66]/40 rounded-xl border border-[#2E54AD]/30">
                  <span className="font-bold text-[#16A5CE]">CTA Buttons:</span> Background color #2E54AD, hover: bg-[#162E66], icon shift right on hover.
                </div>
                <div className="p-3 bg-[#162E66]/40 rounded-xl border border-[#2E54AD]/30">
                  <span className="font-bold text-[#16A5CE]">Accordion Expansion:</span> Smooth height transition with 180deg icon rotation.
                </div>
              </div>
            </div>
          )}

        </div>

        {}
        <div className="bg-[#D8E6F8]/20 p-4 px-6 border-t border-[#D8E6F8] flex items-center justify-between text-xs text-[#162E66] shrink-0">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#2E54AD]" />
            <span>Copy & Paste directly into Claude 3.5 Sonnet or Opus!</span>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[#D8E6F8]/40 hover:bg-[#D8E6F8]/60 text-[#011337] font-semibold cursor-pointer border border-[#D8E6F8]"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
};
