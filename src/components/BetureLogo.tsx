import React from 'react';
import logoImg from '../assets/beture-logo.png';

interface BetureLogoProps {
  className?: string;
  showText?: boolean;
  isDark?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export const BetureLogo: React.FC<BetureLogoProps> = ({
  className = '',
  showText = true,
  isDark = true,
  size = 'md',
}) => {
  const sizeMap = {
    sm: { img: 'h-7 w-auto', textTitle: 'text-sm' },
    md: { img: 'h-9 sm:h-10 w-auto', textTitle: 'text-base sm:text-lg' },
    lg: { img: 'h-12 sm:h-14 w-auto', textTitle: 'text-xl sm:text-2xl' },
    xl: { img: 'h-16 sm:h-20 w-auto', textTitle: 'text-2xl sm:text-3xl' },
    '2xl': { img: 'h-20 sm:h-24 w-auto', textTitle: 'text-3xl sm:text-4xl' },
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Real User-Uploaded Logo Image */}
      <div className="relative shrink-0 flex items-center justify-center">
        <img
          src={logoImg}
          onError={(e) => {
            const target = e.currentTarget;
            if (target.src !== '/beture-logo.png') {
              target.src = '/beture-logo.png';
            }
          }}
          alt="Beture Web Logo"
          className={`${currentSize.img} object-contain drop-shadow-[0_2px_12px_rgba(22,165,206,0.35)] transition-transform duration-300 group-hover:scale-105`}
        />
      </div>

      {/* Brand Typography: BETURE (White or Dark) + WEB (#16A5CE) */}
      {showText && (
        <div className="flex items-center gap-2 leading-none">
          <span
            className={`font-black uppercase tracking-[0.14em] ${isDark ? 'text-white' : 'text-[#011337]'} ${currentSize.textTitle}`}
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
