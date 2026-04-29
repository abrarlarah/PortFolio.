import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile (no cursor)
    if (window.innerWidth <= 768 || 'ontouchstart' in window) {
      setIsMobile(true);
      return;
    }

    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseOver = (e) => {
      if (
        e.target.closest('a') || 
        e.target.closest('button') || 
        e.target.closest('.projects__card') ||
        e.target.closest('.skills__category') ||
        e.target.closest('input') ||
        e.target.closest('textarea')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    // Hide default cursor
    document.body.style.cursor = 'none';
    
    // Add a class to interactive elements to hide their cursor too
    const addCursorNone = () => {
      document.querySelectorAll('a, button, input, textarea').forEach(el => {
        el.style.cursor = 'none';
      });
    };
    
    addCursorNone();
    const observer = new MutationObserver(addCursorNone);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.style.cursor = 'auto';
      observer.disconnect();
    };
  }, []);

  if (isMobile) return null;

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
    },
    hover: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1.8,
      backgroundColor: 'rgba(108, 99, 255, 0.1)',
      borderColor: 'rgba(0, 212, 170, 0.8)',
    }
  };

  return (
    <>
      <motion.div
        className="cursor-dot"
        animate={{ x: mousePosition.x - 4, y: mousePosition.y - 4 }}
        transition={{ type: "tween", ease: "linear", duration: 0 }}
      />
      <motion.div
        className="cursor-outline"
        variants={variants}
        animate={isHovering ? "hover" : "default"}
        transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.5 }}
      />
    </>
  );
};

export default CustomCursor;
