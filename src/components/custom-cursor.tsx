import React from 'react';
import { useTheme } from '@heroui/use-theme';

export const CustomCursor = () => {
  const [position, setPosition] = React.useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = React.useState(false);
  const { theme } = useTheme();
  const cursorRef = React.useRef<HTMLDivElement>(null);
  
  React.useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };
    
    const handleMouseLeave = () => {
      setIsVisible(false);
    };
    
    const handleMouseEnter = () => {
      setIsVisible(true);
    };
    
    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  return (
    <div
      ref={cursorRef}
      className={`fixed w-8 h-8 rounded-full pointer-events-none z-50 transition-transform duration-100 mix-blend-difference ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
        backgroundColor: theme === 'dark' ? '#FFFFFF' : '#000000',
      }}
    />
  );
};