import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      // Check if hovering over a clickable element
      if (
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.closest('iframe') ||
        e.target.closest('.flip-card')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <style>{`
        /* Hide default cursor on creative pages */
        .creative-page, .creative-page * {
          cursor: none !important;
        }
        /* Except for iframes where we might need to click video controls */
        .creative-page iframe {
          cursor: auto !important;
        }
      `}</style>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#d4a853] pointer-events-none z-[9999] flex items-center justify-center mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'rgba(212, 168, 83, 0.2)' : 'transparent',
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.15 }}
      >
        <motion.div 
          className="w-1.5 h-1.5 bg-[#d4a853] rounded-full"
          animate={{
            scale: isHovering ? 0 : 1
          }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
