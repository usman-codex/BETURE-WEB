import React, { useState } from 'react';
import { X, Mail, Lock, User, GraduationCap, ArrowRight, CheckCircle2 } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  initialMode: 'login' | 'signup';
  onClose: () => void;
  onSuccess: (user: { name: string; email: string }) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  initialMode,
  onClose,
  onSuccess,
}) => {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      onSuccess({
        name: name || email.split('@')[0],
        email,
      });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#011337]/70 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white border border-[#D8E6F8] text-[#011337] rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative">
        
        {}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#D8E6F8]/30 text-[#5074A8] hover:text-[#011337] border border-[#D8E6F8] cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-[#2E54AD] text-white flex items-center justify-center font-bold shadow-md shadow-[#2E54AD]/20">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#011337]">Beture Web Student Portal</h2>
            <p className="text-xs text-[#162E66]">Access your courses, certificates & mentorship</p>
          </div>
        </div>

        {}
        <div className="flex rounded-xl bg-[#D8E6F8]/20 p-1 mb-6 border border-[#D8E6F8]">
          <button
            onClick={() => setMode('login')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
              mode === 'login' ? 'bg-[#2E54AD] text-white shadow' : 'text-[#162E66] hover:text-[#011337]'
            }`}
          >
            Log In
          </button>
          <button
            onClick={() => setMode('signup')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
              mode === 'signup' ? 'bg-[#2E54AD] text-white shadow' : 'text-[#162E66] hover:text-[#011337]'
            }`}
          >
            Create Account
          </button>
        </div>

        {}
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'signup' && (
            <div className="space-y-1">
              <label className="text-xs font-semibold text-[#011337]">Full Name</label>
              <div className="relative">
                <User className="w-4 h-4 text-[#5074A8] absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Ali Raza"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#D8E6F8]/15 border border-[#D8E6F8] rounded-xl pl-9 pr-3.5 py-2.5 text-xs text-[#011337] placeholder-[#5074A8] focus:outline-none focus:border-[#2E54AD]"
                />
              </div>
            </div>
          )}

          <div className="space-y-1">
            <label className="text-xs font-semibold text-[#011337]">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-[#5074A8] absolute left-3 top-3" />
              <input
                type="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#D8E6F8]/15 border border-[#D8E6F8] rounded-xl pl-9 pr-3.5 py-2.5 text-xs text-[#011337] placeholder-[#5074A8] focus:outline-none focus:border-[#2E54AD]"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-[#011337]">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-[#5074A8] absolute left-3 top-3" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#D8E6F8]/15 border border-[#D8E6F8] rounded-xl pl-9 pr-3.5 py-2.5 text-xs text-[#011337] placeholder-[#5074A8] focus:outline-none focus:border-[#2E54AD]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-[#2E54AD] hover:bg-[#162E66] text-white font-extrabold text-xs transition-all shadow-md shadow-[#2E54AD]/20 flex items-center justify-center gap-2 cursor-pointer mt-2"
          >
            <span>{mode === 'login' ? 'Sign In to Portal' : 'Register Account'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-4 pt-4 border-t border-[#D8E6F8] text-center text-[11px] text-[#5074A8]">
          By signing in you agree to Beture Web's Terms of Service & Privacy Policy.
        </div>

      </div>
    </div>
  );
};
