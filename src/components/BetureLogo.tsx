import React from 'react';
import logoImg from '../assets/beture-logo.png';

interface BetureLogoProps {
  className?: string;
  showText?: boolean;
  isDark?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const BetureLogo: React.FC<BetureLogoProps> = ({
  className = '',
  showText = true,
  size = 'md',
}) => {
  const sizeMap = {
    sm: { icon: 'w-7 h-7', textTitle: 'text-sm' },
    md: { icon: 'w-9 h-9 sm:w-10 sm:h-10', textTitle: 'text-base sm:text-lg' },
    lg: { icon: 'w-12 h-12 sm:w-14 sm:h-14', textTitle: 'text-xl sm:text-2xl' },
    xl: { icon: 'w-16 h-16 sm:w-20 sm:h-20', textTitle: 'text-2xl sm:text-3xl' },
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Real Logo Image */}
      <div className={`relative shrink-0 flex items-center justify-center ${currentSize.icon}`}>
        <img
          src={logoImg}
          onError={(e) => {
            const target = e.currentTarget;
            if (target.src !== '/beture-logo.png') {
              target.src = '/beture-logo.png';
            }
          }}
          alt="Beture Web Logo"
          className="w-full h-full object-contain rounded-md drop-shadow-[0_2px_10px_rgba(22,165,206,0.35)] transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Brand Typography: BETURE (White) + WEB (#16A5CE) */}
      {showText && (
        <div className="flex items-center gap-2 leading-none">
          <span
            className={`font-black uppercase tracking-[0.14em] text-white ${currentSize.textTitle}`}
          >
            BETURE
          </span>
          <span
            className={`font-black uppercase tracking-[0.14em] text-[#16A5CE] ${currentSize.textTitle}`}
          >
            WEB
          </span>
        </div>
      )}
    </div>
  );
};
