import React from 'react';

export const useParallax = () => {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const scrollTop = window.scrollY;
      const elementTop = ref.current.offsetTop;
      const elementHeight = ref.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      
      // Check if element is in viewport
      if (
        scrollTop + viewportHeight > elementTop &&
        scrollTop < elementTop + elementHeight
      ) {
        const distance = scrollTop + viewportHeight - elementTop;
        const percentage = Math.min(distance / (viewportHeight + elementHeight), 1);
        
        // Apply parallax effect to children with parallax-bg class
        const parallaxElements = ref.current.querySelectorAll('.parallax-bg');
        parallaxElements.forEach((element: HTMLElement) => {
          const speed = element.dataset.speed || 0.15;
          const yPos = -(percentage * Number(speed) * 100);
          element.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });
        
        // Apply opacity and scale effects to timeline items
        const timelineItems = ref.current.querySelectorAll('.space-y-8 > div');
        timelineItems.forEach((item: HTMLElement, index) => {
          const delay = index * 0.1;
          const itemPercentage = Math.max(0, Math.min(1, (percentage - delay) * 2));
          
          if (itemPercentage > 0) {
            item.style.opacity = `${itemPercentage}`;
            item.style.transform = `translateY(${(1 - itemPercentage) * 20}px)`;
          } else {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { ref };
};