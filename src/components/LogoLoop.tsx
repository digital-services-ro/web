import React, { useEffect, useRef, useState } from 'react';

interface LogoLoopProps {
  logos: string[];
  speed?: number;
  direction?: 'left' | 'right';
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  scaleOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string;
  ariaLabel?: string;
}

const LogoLoop: React.FC<LogoLoopProps> = ({
  logos,
  speed = 120,
  direction = 'left',
  logoHeight = 48,
  gap = 40,
  pauseOnHover = false,
  scaleOnHover = false,
  fadeOut = false,
  fadeOutColor = '#ffffff',
  ariaLabel = 'Logo carousel',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState(speed);

  useEffect(() => {
    if (pauseOnHover && isHovered) {
      setAnimationSpeed(0);
    } else {
      setAnimationSpeed(speed);
    }
  }, [isHovered, pauseOnHover, speed]);

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={ariaLabel}
    >
      {/* Fade out overlays */}
      {fadeOut && (
        <>
          <div
            className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{
              background: `linear-gradient(to right, ${fadeOutColor}, transparent)`,
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{
              background: `linear-gradient(to left, ${fadeOutColor}, transparent)`,
            }}
          />
        </>
      )}

      {/* Logo container */}
      <div
        className="flex items-center w-full"
        style={{
          animation: `logoScroll ${logos.length * 2}s linear infinite`,
          animationDirection: direction === 'left' ? 'normal' : 'reverse',
          animationPlayState: isHovered && pauseOnHover ? 'paused' : 'running',
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center justify-center"
            style={{
              height: logoHeight,
              marginRight: index < duplicatedLogos.length - 1 ? gap : 0,
              transform: scaleOnHover && isHovered ? 'scale(1.1)' : 'scale(1)',
              transition: 'transform 0.3s ease',
            }}
          >
            <img
              src={logo}
              alt={`Partner logo ${index + 1}`}
              className="max-h-full max-w-full object-contain"
              style={{ height: logoHeight }}
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes logoScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default LogoLoop;
