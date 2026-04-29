import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi';
import Tilt from 'react-parallax-tilt';
import './Hero.css';

const Hero = () => {
  const roles = ['Software Developer', 'Full Stack Engineer', 'React.js Developer', 'C# / .NET Specialist'];

  return (
    <section id="home" className="hero">
      {/* Animated background */}
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
        <div className="hero__grid" />
      </div>

      <div className="container hero__container">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <motion.div
            className="hero__badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="hero__badge-dot" />
            Available for opportunities
          </motion.div>

          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Hi, I&apos;m{' '}
            <span className="hero__name">Abrar Larah</span>
          </motion.h1>

          <motion.div
            className="hero__roles"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {roles.map((role, i) => (
              <span key={i} className="hero__role-tag">{role}</span>
            ))}
          </motion.div>

          <motion.p
            className="hero__description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            A dedicated Software Developer based in Jammu, India, crafting robust
            applications with modern technologies. Currently building innovative
            solutions at <span className="hero__highlight">Aark Global Inc</span>.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <a href="#projects" className="hero__btn hero__btn--primary">
              View My Work
              <HiArrowDown className="hero__btn-icon" />
            </a>
            <a href="#contact" className="hero__btn hero__btn--secondary">
              <FaEnvelope />
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            className="hero__socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <a href="https://www.linkedin.com/in/abrarlarah/" target="_blank" rel="noopener noreferrer" className="hero__social" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/abrarlarah" target="_blank" rel="noopener noreferrer" className="hero__social" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="mailto:laraabrar@gmail.com" className="hero__social" aria-label="Email">
              <FaEnvelope />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={800}
            transitionSpeed={800}
            scale={1.08}
            glareEnable={true}
            glareMaxOpacity={0.35}
            glareColor="#6c63ff"
            glarePosition="all"
            className="hero__image-wrapper"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="hero__image-glow" style={{ transform: 'translateZ(-60px)' }} />
            <img src="/images/profile.png" alt="Abrar Larah" className="hero__image" style={{ transform: 'translateZ(60px)' }} />
            <div className="hero__image-ring" style={{ transform: 'translateZ(30px)' }} />
            <div className="hero__image-ring hero__image-ring--2" style={{ transform: 'translateZ(90px)' }} />
          </Tilt>

          <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} perspective={800} scale={1.15} glareEnable={true} glareMaxOpacity={0.25} glareColor="#00d4aa" glarePosition="all" className="hero__floating-card hero__floating-card--1">
            <span className="hero__floating-icon">⚡</span>
            <div>
              <strong>3+ Years</strong>
              <span>Experience</span>
            </div>
          </Tilt>

          <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} perspective={800} scale={1.15} glareEnable={true} glareMaxOpacity={0.25} glareColor="#6c63ff" glarePosition="all" className="hero__floating-card hero__floating-card--2">
            <span className="hero__floating-icon">🏢</span>
            <div>
              <strong>Aark Global</strong>
              <span>Current Company</span>
            </div>
          </Tilt>

          <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} perspective={800} scale={1.15} glareEnable={true} glareMaxOpacity={0.25} glareColor="#ff6b9d" glarePosition="all" className="hero__floating-card hero__floating-card--3">
            <span className="hero__floating-icon">🎓</span>
            <div>
              <strong>B.Tech CSE</strong>
              <span>IUST</span>
            </div>
          </Tilt>
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span>Scroll to explore</span>
        <div className="hero__scroll-line">
          <div className="hero__scroll-dot" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
