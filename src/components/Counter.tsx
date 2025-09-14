import { motion, useSpring } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import './Counter.css';

interface CounterProps {
  value: number;
  fontSize?: number;
  padding?: number;
  places?: number[];
  gap?: number;
  borderRadius?: number;
  horizontalPadding?: number;
  textColor?: string;
  fontWeight?: React.CSSProperties['fontWeight'];
  containerStyle?: React.CSSProperties;
  counterStyle?: React.CSSProperties;
  digitStyle?: React.CSSProperties;
  gradientHeight?: number;
  gradientFrom?: string;
  gradientTo?: string;
  topGradientStyle?: React.CSSProperties;
  bottomGradientStyle?: React.CSSProperties;
}

export default function Counter({
  value,
  fontSize = 100,
  padding = 0,
  gap = 8,
  borderRadius = 4,
  horizontalPadding = 8,
  textColor = 'white',
  fontWeight = 'bold',
  containerStyle,
  counterStyle,
  gradientHeight = 16,
  gradientFrom = 'black',
  gradientTo = 'transparent',
  topGradientStyle,
  bottomGradientStyle
}: CounterProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const animatedValue = useSpring(0, { stiffness: 100, damping: 30 });
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      animatedValue.set(value);
    }
  }, [isVisible, value, animatedValue]);

  const height = fontSize + padding;
  const defaultCounterStyle: React.CSSProperties = {
    fontSize,
    gap: gap,
    borderRadius: borderRadius,
    paddingLeft: horizontalPadding,
    paddingRight: horizontalPadding,
    color: textColor,
    fontWeight: fontWeight
  };
  const defaultTopGradientStyle: React.CSSProperties = {
    height: gradientHeight,
    background: `linear-gradient(to bottom, ${gradientFrom}, ${gradientTo})`
  };
  const defaultBottomGradientStyle: React.CSSProperties = {
    height: gradientHeight,
    background: `linear-gradient(to top, ${gradientFrom}, ${gradientTo})`
  };
  
  return (
    <div ref={ref} className="counter-container" style={containerStyle}>
      <div className="gradient-container">
        <div
          className="top-gradient"
          style={topGradientStyle ? topGradientStyle : defaultTopGradientStyle}
        />
        <div
          className="bottom-gradient"
          style={bottomGradientStyle ? bottomGradientStyle : defaultBottomGradientStyle}
        />
      </div>
      <div className="counter-counter" style={counterStyle ? counterStyle : defaultCounterStyle}>
        <motion.div
          style={{
            fontSize,
            color: textColor,
            fontWeight: fontWeight
          }}
        >
          {Math.round(animatedValue.get())}
        </motion.div>
      </div>
    </div>
  );
}
