import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import { FaAward, FaExternalLinkAlt, FaMicrosoft } from 'react-icons/fa';
import { SiUdemy } from 'react-icons/si';
import './Certifications.css';

const certifications = [
  {
    title: 'Azure Fundamentals',
    issuer: 'Microsoft',
    icon: FaMicrosoft,
    color: '#00a4ef',
    credentialUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/AbrarLarah-8169/4209A8C887B71646?sharingId',
  },
  {
    title: 'Career Essentials in Software Development',
    issuer: 'Microsoft',
    icon: FaMicrosoft,
    color: '#00a4ef',
    credentialUrl: 'https://www.linkedin.com/learning/certificates/a0be58dfd60edbbcdc89f6efeda0de612c1e269d2c44bce367c8a5a2d9b681e9',
  },
  {
    title: 'Career Essentials in Generative AI',
    issuer: 'Microsoft',
    icon: FaMicrosoft,
    color: '#00a4ef',
    credentialUrl: 'https://www.linkedin.com/learning/certificates/7140b938a9ec7ac0ba70564db0999387472a0e9840bcbc5d07dfdf3edd1b0ae3',
  },
  {
    title: 'Career Essentials in Data Analysis',
    issuer: 'Microsoft',
    icon: FaMicrosoft,
    color: '#00a4ef',
    credentialUrl: 'https://www.linkedin.com/learning/certificates/3998da1b5fa2759a642c9ae411e113f5b3259f4f715e434cc81cccf88fdaf7b9',
  },
  {
    title: 'Career Essentials in Project Management',
    issuer: 'Microsoft',
    icon: FaMicrosoft,
    color: '#00a4ef',
    credentialUrl: 'https://www.linkedin.com/learning/certificates/34b9cd1783de43f1efc5b2ab4d6865a7c85be2605c5728ec27815f132c8006a8',
  },
  {
    title: 'The Complete Web Development Bootcamp',
    issuer: 'Udemy',
    icon: SiUdemy,
    color: '#a435f0',
    credentialUrl: null,
  },
  {
    title: 'Machine Learning',
    issuer: 'Internshala',
    icon: FaAward,
    color: '#00d4aa',
    credentialUrl: 'https://trainings.internshala.com/view_certificate/A36A92F9-C03C-0A53-CE4A-E465D4AF572D/C3F62337-1BCF-F19E-5177-9729976D5520/',
  },
];

const Certifications = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="certifications" className="certifications" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Certifications</span>
          <h2 className="section-title">
            Professional <span className="gradient-text">credentials</span>
          </h2>
        </motion.div>

        <div className="certifications__grid">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Tilt
                tiltMaxAngleX={18}
                tiltMaxAngleY={18}
                perspective={800}
                transitionSpeed={800}
                scale={1.08}
                glareEnable={true}
                glareMaxOpacity={0.3}
                glareColor={cert.color}
                glarePosition="all"
                glareBorderRadius="12px"
                className="certifications__card"
              >
                <div className="certifications__card-icon" style={{ color: cert.color }}>
                  <cert.icon />
                </div>
                <div className="certifications__card-content">
                  <h3 className="certifications__card-title">{cert.title}</h3>
                  <span className="certifications__card-issuer">{cert.issuer}</span>
                </div>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certifications__card-link"
                    aria-label="View credential"
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
