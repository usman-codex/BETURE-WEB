import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';


const LayeredDiamondArt: React.FC<{ size?: 'sm' | 'md' | 'lg'; className?: string }> = ({ 
  size = 'md', 
  className = '' 
}) => {
  const config = {
    sm: { outer: 'w-24 h-24 sm:w-32 sm:h-32', middle: 'w-16 h-16 sm:w-22 sm:h-22', inner: 'w-10 h-10 sm:w-14 sm:h-14', outerRadius: 'rounded-2xl', midRadius: 'rounded-xl', innerRadius: 'rounded-lg' },
    md: { outer: 'w-40 h-40 sm:w-52 sm:h-52', middle: 'w-28 h-28 sm:w-36 sm:h-36', inner: 'w-16 h-16 sm:w-22 sm:h-22', outerRadius: 'rounded-3xl', midRadius: 'rounded-2xl', innerRadius: 'rounded-xl' },
    lg: { outer: 'w-56 h-56 sm:w-72 sm:h-72', middle: 'w-40 h-40 sm:w-52 sm:h-52', inner: 'w-24 h-24 sm:w-32 sm:h-32', outerRadius: 'rounded-[2.5rem]', midRadius: 'rounded-3xl', innerRadius: 'rounded-2xl' },
  }[size];

  return (
    <div className={`relative flex items-center justify-center pointer-events-none select-none ${className}`}>
      {}
      <div className="absolute inset-0 bg-[#16A5CE]/15 blur-2xl rounded-full" />

      {}
      <motion.div
        animate={{ rotate: [45, 52, 45], scale: [1, 1.02, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className={`absolute ${config.outer} rotate-45 ${config.outerRadius} border-2 border-[#16A5CE]/35 bg-gradient-to-br from-[#D8E6F8]/40 via-[#16A5CE]/10 to-transparent backdrop-blur-xs shadow-lg shadow-[#2E54AD]/10`}
      />

      {}
      <motion.div
        animate={{ rotate: [45, 38, 45], scale: [1, 0.98, 1] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
        className={`absolute ${config.middle} rotate-45 ${config.midRadius} border-2 border-[#2E54AD]/45 bg-gradient-to-br from-[#2E54AD]/25 via-[#5074A8]/20 to-[#162E66]/15 backdrop-blur-sm shadow-md shadow-[#011337]/10`}
      />

      {}
      <motion.div
        animate={{ rotate: [45, 49, 45] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className={`absolute ${config.inner} rotate-45 ${config.innerRadius} bg-gradient-to-br from-[#011337] via-[#162E66] to-[#2E54AD] border border-[#D8E6F8]/50 shadow-xl shadow-[#2E54AD]/30 flex items-center justify-center`}
      >
        <div className="w-3 h-3 sm:w-5 sm:h-5 rounded-md bg-[#16A5CE]/50 border border-[#D8E6F8]/70" />
      </motion.div>

      {}
      <div className="absolute -top-2 right-4 w-3 h-3 rounded-full bg-[#16A5CE] shadow-sm shadow-[#16A5CE] animate-pulse" />
      <div className="absolute -bottom-2 left-5 w-2.5 h-2.5 rounded-full bg-[#D8E6F8] border border-[#2E54AD]/40" />
    </div>
  );
};

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
      }, 5000);
    }
  };

  return (
    <div className="relative py-16 bg-[#D8E6F8]/10 min-h-screen text-[#011337] overflow-hidden">
      {}
      <div className="absolute -top-10 -right-10 sm:right-6 lg:right-12 pointer-events-none opacity-60 lg:opacity-80 z-0">
        <LayeredDiamondArt size="lg" />
      </div>

      {}
      <div className="absolute top-1/2 -translate-y-1/2 -left-12 sm:-left-6 lg:left-4 pointer-events-none opacity-50 lg:opacity-70 z-0">
        <LayeredDiamondArt size="md" />
      </div>

      {}
      <div className="absolute -bottom-10 -left-10 sm:left-4 lg:left-8 pointer-events-none opacity-55 lg:opacity-75 z-0">
        <LayeredDiamondArt size="md" />
      </div>

      {}
      <div className="absolute -bottom-10 -right-10 sm:right-4 lg:right-8 pointer-events-none opacity-55 lg:opacity-75 z-0">
        <LayeredDiamondArt size="md" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#011337]">
            Contact Beture Web
          </h1>
          <p className="text-[#162E66] text-sm">
            Have questions regarding course curriculum, bank transfer payments, or 1-on-1 mentorship sessions? Get in touch with our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#D8E6F8] space-y-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#011337] border-b border-[#D8E6F8] pb-4">
                Get In Touch
              </h3>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#D8E6F8]/40 text-[#2E54AD] flex items-center justify-center shrink-0 border border-[#2E54AD]/30">
                    <Mail className="w-5 h-5 text-[#2E54AD]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#5074A8] font-medium">Email Support</div>
                    <a href="mailto:betureweb@gmail.com" className="font-bold text-[#011337] hover:text-[#2E54AD] text-xs sm:text-sm break-all">
                      betureweb@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#D8E6F8]/40 text-[#2E54AD] flex items-center justify-center shrink-0 border border-[#2E54AD]/30">
                    <Phone className="w-5 h-5 text-[#2E54AD]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#5074A8] font-medium">Phone & WhatsApp</div>
                    <a href="tel:+923290781709" className="font-bold text-[#011337] hover:text-[#2E54AD] text-xs sm:text-sm">
                      +92 329 078 1709
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#D8E6F8]/40 text-[#2E54AD] flex items-center justify-center shrink-0 border border-[#2E54AD]/30">
                    <MapPin className="w-5 h-5 text-[#2E54AD]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#5074A8] font-medium">Head Office Location</div>
                    <div className="font-bold text-[#011337] text-xs sm:text-sm">
                      Township, Lahore, Punjab, Pakistan
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#D8E6F8] shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-[#011337]">Send Us A Message</h3>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-[#D8E6F8]/30 border border-[#16A5CE] text-[#011337] text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-[#2E54AD] mx-auto" />
                  <h4 className="text-base font-bold text-[#011337]">Message Sent Successfully!</h4>
                  <p className="text-xs text-[#162E66]">
                    Thank you for contacting Beture Web. A team mentor will respond to your email shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#011337]">Your Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Usman Ahmad"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#D8E6F8]/15 border border-[#D8E6F8] rounded-xl px-3.5 py-2.5 text-xs text-[#011337] placeholder-[#5074A8] focus:outline-none focus:border-[#2E54AD]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#011337]">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="mailaddress@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#D8E6F8]/15 border border-[#D8E6F8] rounded-xl px-3.5 py-2.5 text-xs text-[#011337] placeholder-[#5074A8] focus:outline-none focus:border-[#2E54AD]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#011337]">Phone / WhatsApp Number</label>
                    <input
                      type="text"
                      placeholder="+92 300 0000000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#D8E6F8]/15 border border-[#D8E6F8] rounded-xl px-3.5 py-2.5 text-xs text-[#011337] placeholder-[#5074A8] focus:outline-none focus:border-[#2E54AD]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#011337]">Message</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Write your message or query here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#D8E6F8]/15 border border-[#D8E6F8] rounded-xl p-3.5 text-xs text-[#011337] placeholder-[#5074A8] focus:outline-none focus:border-[#2E54AD]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#2E54AD] hover:bg-[#162E66] text-white font-extrabold text-xs transition-all shadow-md shadow-[#2E54AD]/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Send Inquiry Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

        {}
        <div className="bg-white rounded-3xl p-4 sm:p-6 border border-[#D8E6F8] shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-[#011337]">
            <MapPin className="w-5 h-5 text-[#2E54AD]" />
            <h3 className="text-lg sm:text-xl font-bold">Beture Web on Google Maps</h3>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[#D8E6F8] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2477.086374625946!2d74.31367667397876!3d31.463017849976318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190797f8f15237%3A0xe0a05440b31ae90a!2sFintech%20Edge%20Institute!5e1!3m2!1sen!2s!4v1787652954202!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Beture Web Location Map"
              className="w-full h-[350px] sm:h-[450px]"
            />
          </div>
        </div>

      </div>
    </div>
  );
};
