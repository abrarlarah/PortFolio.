import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'var(--gradient-hero)',
        transformOrigin: '0%',
        scaleX,
        zIndex: 999999,
        boxShadow: '0 0 10px var(--accent-secondary)'
      }}
    />
  );
};

export default ScrollProgress;
