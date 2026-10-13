import React from 'react';

interface ServiceIconProps {
  name: 'blockchain' | 'devops' | 'web' | 'ecommerce' | 'mobile' | 'ai' | 'uiux' | 'digital-marketing' | 'facebook-monetization' | 'graphic-design' | 'wordpress' | 'seo' | 'iot' | 'glm' | 'gmb' | 'citation' | string;
  className?: string;
  size?: number;
  color?: string;
  accentColor?: string;
}

export const ServiceIcon: React.FC<ServiceIconProps> = ({
  name,
  className = '',
  size = 64,
  color = '#011337',
  accentColor = '#16A5CE'
}) => {
  switch (name) {
    case 'gmb':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* Map Pin Outline */}
          <path
            d="M24 4C15.7157 4 9 10.7157 9 19C9 29.5 24 44 24 44C24 44 39 29.5 39 19C39 10.7157 32.2843 4 24 4Z"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Inside Store Awning / Building */}
          <path
            d="M17 17H31M17 17L18.5 21H29.5L31 17M17 17L19 12H29L31 17"
            stroke={accentColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 21V27H29V21"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Store Door */}
          <path
            d="M22 27V23H26V27"
            stroke={accentColor}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Star review indicator above */}
          <circle cx="24" cy="8.5" r="2" fill={accentColor} />
        </svg>
      );

    case 'citation':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* Landing Page Browser Window */}
          <rect
            x="7"
            y="7"
            width="34"
            height="26"
            rx="3"
            stroke={color}
            strokeWidth="2.5"
          />
          {/* Browser header */}
          <path d="M7 14H41" stroke={color} strokeWidth="2" />
          <circle cx="12" cy="10.5" r="1.5" fill={accentColor} />
          <circle cx="16" cy="10.5" r="1.5" fill={color} />
          {/* Citation Rows / Content */}
          <path d="M12 20H24" stroke={color} strokeWidth="2" strokeLinecap="round" />
          <path d="M12 25H20" stroke={color} strokeWidth="2" strokeLinecap="round" />
          {/* Citation Quotation / Verified Badge */}
          <rect x="27" y="18" width="10" height="11" rx="2" fill={accentColor} fillOpacity="0.2" stroke={accentColor} strokeWidth="1.8" />
          <path d="M30 23L32 25L35 21" stroke={accentColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          {/* Connected Citation / Directory Node Link underneath */}
          <path
            d="M16 33V39C16 40.1 16.9 41 18 41H30C31.1 41 32 40.1 32 39V33"
            stroke={color}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M24 33V37" stroke={accentColor} strokeWidth="2" strokeLinecap="round" />
          <circle cx="24" cy="41" r="2" fill={accentColor} />
        </svg>
      );

    case 'graphic-design':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {}
          <path
            d="M24 6L32 14L18 28L10 30L12 22L24 6Z"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 10L28 18"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
          />
          {}
          <circle cx="10" cy="30" r="2.5" fill={accentColor} />
          {}
          <path
            d="M16 38C20 42 34 42 38 34C41 28 39 20 35 17"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="2 3"
          />
          <circle cx="36" cy="36" r="2" fill={accentColor} />
          <circle cx="28" cy="40" r="2" fill={accentColor} />
        </svg>
      );

    case 'wordpress':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {}
          <circle
            cx="24"
            cy="24"
            r="17"
            stroke={color}
            strokeWidth="2.5"
          />
          {}
          <path
            d="M15 18L21 34L25 24L28 32L33 18"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {}
          <path
            d="M13 18H17M31 18H35"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
          />
          {}
          <circle cx="24" cy="24" r="1.5" fill={accentColor} />
        </svg>
      );
    case 'digital-marketing':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {}
          <path
            d="M8 20V28H14L26 36V12L14 20H8Z"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {}
          <path
            d="M12 28V36C12 37.1046 12.8954 38 14 38H16C17.1046 38 18 37.1046 18 36V28"
            stroke={color}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {}
          <path
            d="M32 18C34 20 35 22 35 24C35 26 34 28 32 30"
            stroke={accentColor}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M37 13C40.5 16.5 42 20 42 24C42 28 40.5 31.5 37 35"
            stroke={accentColor}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {}
          <circle cx="18" cy="24" r="2" fill={accentColor} />
        </svg>
      );

    case 'facebook-monetization':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {}
          <rect
            x="8"
            y="8"
            width="32"
            height="32"
            rx="8"
            stroke={color}
            strokeWidth="2.5"
          />
          {}
          <path
            d="M26 15C23.7909 15 22 16.7909 22 19V23H18V27H22V36H26V27H30L31 23H26V19.5C26 19.2239 26.2239 19 26.5 19H30V15H26Z"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'blockchain':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {}
          <path
            d="M24 6L40 15V33L24 42L8 33V15L24 6Z"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 6V42"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M8 15L24 24L40 15"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {}
          <circle cx="24" cy="24" r="3.5" fill={accentColor} stroke={color} strokeWidth="1.5" />
          <circle cx="8" cy="15" r="2.5" fill={color} />
          <circle cx="40" cy="15" r="2.5" fill={color} />
          <circle cx="8" cy="33" r="2.5" fill={color} />
          <circle cx="40" cy="33" r="2.5" fill={color} />
          <circle cx="24" cy="6" r="2.5" fill={color} />
          <circle cx="24" cy="42" r="2.5" fill={color} />
        </svg>
      );

    case 'devops':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {}
          <path
            d="M16 16C11.5817 16 8 19.5817 8 24C8 28.4183 11.5817 32 16 32C21 32 27 16 32 16C36.4183 16 40 19.5817 40 24C40 28.4183 36.4183 32 32 32C27 32 21 16 16 16Z"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {}
          <path
            d="M14 21L11 24L14 27"
            stroke={accentColor}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 21L21 24L18 27"
            stroke={accentColor}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {}
          <circle cx="32" cy="24" r="3" stroke={accentColor} strokeWidth="2.2" />
        </svg>
      );

    case 'web':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {}
          <rect
            x="6"
            y="8"
            width="36"
            height="24"
            rx="3"
            stroke={color}
            strokeWidth="2.5"
          />
          <path
            d="M6 14H42"
            stroke={color}
            strokeWidth="2"
          />
          <circle cx="11" cy="11" r="1.5" fill={accentColor} />
          <circle cx="16" cy="11" r="1.5" fill={color} />
          <circle cx="21" cy="11" r="1.5" fill={color} />
          {}
          <path
            d="M20 32L17 40H31L28 32"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {}
          <path
            d="M17 20L13 23L17 26"
            stroke={accentColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M31 20L35 23L31 26"
            stroke={accentColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M26 19L22 27"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );

    case 'ecommerce':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {}
          <path
            d="M10 16H38L35 40H13L10 16Z"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 16V12C18 8.68629 20.6863 6 24 6C27.3137 6 30 8.68629 30 12V16"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {}
          <rect
            x="20"
            y="24"
            width="8"
            height="8"
            rx="1.5"
            stroke={accentColor}
            strokeWidth="2"
          />
          <path
            d="M22 24V21C22 19.8954 22.8954 19 24 19C25.1046 19 26 19.8954 26 21V24"
            stroke={accentColor}
            strokeWidth="1.75"
          />
        </svg>
      );

    case 'mobile':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {}
          <rect
            x="12"
            y="6"
            width="24"
            height="36"
            rx="4"
            stroke={color}
            strokeWidth="2.5"
          />
          {}
          <path
            d="M21 11H27"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
          />
          {}
          <circle cx="24" cy="37" r="1.5" fill={accentColor} />
          {}
          <path
            d="M19 21L16 24L19 27"
            stroke={accentColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M29 21L32 24L29 27"
            stroke={accentColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M25 20L23 28"
            stroke={color}
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      );

    case 'ai':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {}
          <rect
            x="12"
            y="12"
            width="24"
            height="24"
            rx="4"
            stroke={color}
            strokeWidth="2.5"
          />
          {}
          <path d="M18 6V12M24 6V12M30 6V12" stroke={color} strokeWidth="2" strokeLinecap="round" />
          <path d="M18 36V42M24 36V42M30 36V42" stroke={color} strokeWidth="2" strokeLinecap="round" />
          <path d="M6 18H12M6 24H12M6 30H12" stroke={color} strokeWidth="2" strokeLinecap="round" />
          <path d="M36 18H42M36 24H42M36 30H42" stroke={color} strokeWidth="2" strokeLinecap="round" />
          {}
          <circle cx="24" cy="24" r="4" fill={accentColor} />
          <circle cx="18" cy="18" r="1.5" fill={color} />
          <circle cx="30" cy="18" r="1.5" fill={color} />
          <circle cx="18" cy="30" r="1.5" fill={color} />
          <circle cx="30" cy="30" r="1.5" fill={color} />
        </svg>
      );

    case 'uiux':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {}
          <path
            d="M24 8L40 16L24 24L8 16L24 8Z"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 24L24 32L40 24"
            stroke={accentColor}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 32L24 40L40 32"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="24" cy="16" r="2" fill={accentColor} />
        </svg>
      );

    case 'seo':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* Magnifying Glass */}
          <circle cx="21" cy="21" r="12" stroke={color} strokeWidth="2.5" />
          <path d="M30 30L40 40" stroke={color} strokeWidth="2.8" strokeLinecap="round" />
          {/* Trend Growth Arrow inside */}
          <path d="M14 24L18 20L22 23L27 16" stroke={accentColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M23 16H27V20" stroke={accentColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'iot':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* Central Hub */}
          <circle cx="24" cy="24" r="5" stroke={accentColor} strokeWidth="2.5" fill={accentColor} fillOpacity="0.2" />
          {/* Radiating Waves / Nodes */}
          <circle cx="24" cy="8" r="3" stroke={color} strokeWidth="2" />
          <path d="M24 11V19" stroke={color} strokeWidth="2" strokeDasharray="2 2" />
          <circle cx="38" cy="32" r="3" stroke={color} strokeWidth="2" />
          <path d="M35 30L28 26" stroke={color} strokeWidth="2" strokeDasharray="2 2" />
          <circle cx="10" cy="32" r="3" stroke={color} strokeWidth="2" />
          <path d="M13 30L20 26" stroke={color} strokeWidth="2" strokeDasharray="2 2" />
          {/* WiFi waves above */}
          <path d="M16 16C18.5 13.5 29.5 13.5 32 16" stroke={accentColor} strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'glm':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* Central AI Processor */}
          <rect x="14" y="14" width="20" height="20" rx="4" stroke={color} strokeWidth="2.5" />
          <rect x="20" y="20" width="8" height="8" rx="2" fill={accentColor} />
          {/* Neural Connections & Pins */}
          <path d="M20 14V8M28 14V8" stroke={color} strokeWidth="2" strokeLinecap="round" />
          <path d="M20 34V40M28 34V40" stroke={color} strokeWidth="2" strokeLinecap="round" />
          <path d="M14 20H8M14 28H8" stroke={color} strokeWidth="2" strokeLinecap="round" />
          <path d="M34 20H40M34 28H40" stroke={color} strokeWidth="2" strokeLinecap="round" />
          {/* Sparkle node */}
          <circle cx="36" cy="12" r="2.5" fill={accentColor} />
        </svg>
      );

    default:
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <rect x="10" y="10" width="28" height="28" rx="4" stroke={color} strokeWidth="2.5" />
          <path d="M18 24L22 28L30 20" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
};
