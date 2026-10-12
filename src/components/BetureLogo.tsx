import React from 'react';

interface BetureLogoProps {
  className?: string;
  showText?: boolean;
  isDark?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const BetureLogo: React.FC<BetureLogoProps> = ({
  className = '',
  showText = true,
  isDark = false,
  size = 'md',
}) => {
  const sizeMap = {
    sm: { icon: 'w-7 h-7', textTitle: 'text-sm', textSub: 'text-xs' },
    md: { icon: 'w-9 h-9 sm:w-10 sm:h-10', textTitle: 'text-base sm:text-lg', textSub: 'text-xs sm:text-sm' },
    lg: { icon: 'w-12 h-12 sm:w-14 sm:h-14', textTitle: 'text-xl sm:text-2xl', textSub: 'text-sm sm:text-base' },
    xl: { icon: 'w-16 h-16 sm:w-20 sm:h-20', textTitle: 'text-2xl sm:text-3xl', textSub: 'text-base sm:text-lg' },
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <div className={`relative shrink-0 flex items-center justify-center ${currentSize.icon}`}>
        <svg
          viewBox="0 0 100 115"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_2px_10px_rgba(27,188,224,0.3)] transition-transform duration-300 group-hover:scale-105"
        >
          <defs>
            <linearGradient id="cyanGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1BBCE0" />
              <stop offset="100%" stopColor="#2E54AD" />
            </linearGradient>
            <linearGradient id="blueDepth" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2E54AD" />
              <stop offset="100%" stopColor="#011337" />
            </linearGradient>
            <linearGradient id="brightCyan" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#55D8F7" />
              <stop offset="100%" stopColor="#1BBCE0" />
            </linearGradient>
            <linearGradient id="navyShadow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0B2356" />
              <stop offset="100%" stopColor="#011337" />
            </linearGradient>
          </defs>

          {/* Left Vertical Spine / Facet */}
          <polygon
            points="12,32 48,11 48,60 12,81"
            fill="url(#blueDepth)"
          />
          {/* Left Spine Top Bevel */}
          <polygon
            points="48,11 50,4 20,21 12,32"
            fill="url(#brightCyan)"
          />
          {/* Left Inner Fold */}
          <polygon
            points="24,38 42,28 42,56 24,67"
            fill="#011337"
          />

          {/* Upper Right 3D Fold Ribbon */}
          <polygon
            points="52,4 90,26 90,52 64,67 52,60 52,11"
            fill="url(#cyanGlow)"
          />
          {/* Upper Top Edge Light */}
          <polygon
            points="52,4 66,12 88,25 90,26 78,20 52,11"
            fill="url(#brightCyan)"
          />
          {/* Upper Inner Pocket */}
          <polygon
            points="56,22 76,33 76,46 56,58"
            fill="url(#navyShadow)"
          />

          {/* Middle Connecting Fold */}
          <polygon
            points="48,60 64,67 52,74 38,66"
            fill="#2E54AD"
          />

          {/* Lower Loop / Ribbon */}
          <polygon
            points="52,60 88,48 90,74 52,96 12,81 38,66"
            fill="url(#cyanGlow)"
          />
          {/* Lower Bottom Outer Bevel */}
          <polygon
            points="12,81 52,104 90,82 90,74 52,96"
            fill="url(#brightCyan)"
          />
          {/* Bottom Vertex Bevel */}
          <polygon
            points="52,96 52,108 38,100 12,81"
            fill="#2E54AD"
          />
        </svg>
      </div>

      {showText && (
        <div className="flex items-center gap-1.5 leading-none tracking-wider">
          <span
            className={`font-black uppercase tracking-[0.08em] ${currentSize.textTitle} ${
              isDark ? 'text-white' : 'text-[#011337]'
            }`}
          >
            BETURE
          </span>
          <span
            className={`font-black uppercase tracking-[0.08em] text-[#1BBCE0] ${currentSize.textTitle}`}
          >
            WEB
          </span>
        </div>
      )}
    </div>
  );
};
