import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaMapMarkerAlt, FaEnvelope, FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const stats = [
    { value: '3+', label: 'Years Experience' },
    { value: '30+', label: 'Projects Built' },
    { value: '7+', label: 'Certifications' },
    { value: '10+', label: 'Technologies' },
  ];

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">About Me</span>
          <h2 className="section-title">
            Passionate about building{' '}
            <span className="gradient-text">digital solutions</span>
          </h2>
        </motion.div>

        <div className="about__grid">
          <motion.div
            className="about__info"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="about__bio">
              I&apos;m a dedicated Software Developer based in Jammu, India, currently working at
              <strong> Aark Global Inc</strong>. With a solid Computer Science degree and a robust
              academic background, I thrive on unraveling intricate technical challenges.
            </p>
            <p className="about__bio">
              My passion for problem-solving is matched only by my proficiency in programming
              languages like <strong>C#, React.js, Node.js, and JavaScript</strong>. My hands-on
              experience spans software development, designing applications, and building
              semi-automated data processing systems.
            </p>
            <p className="about__bio">
              I pride myself on my exceptional problem-solving prowess and my remarkable
              adaptability to emerging technologies. As a strong communicator, I excel in
              collaborative environments and am always ready to contribute my expertise to
              dynamic teams.
            </p>

            <div className="about__details">
              <div className="about__detail">
                <FaMapMarkerAlt className="about__detail-icon" />
                <span>Jammu & Kashmir, India</span>
              </div>
              <div className="about__detail">
                <FaEnvelope className="about__detail-icon" />
                <span>laraabrar@gmail.com</span>
              </div>
              <div className="about__detail">
                <FaBriefcase className="about__detail-icon" />
                <span>Software Developer @ Aark Global</span>
              </div>
              <div className="about__detail">
                <FaGraduationCap className="about__detail-icon" />
                <span>B.Tech CSE - IUST (CGPA: 7.51)</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about__stats"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="about__stat-card"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <span className="about__stat-value">{stat.value}</span>
                <span className="about__stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
