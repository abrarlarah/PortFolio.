import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import './Experience.css';

const experiences = [
  {
    type: 'work',
    title: 'Software Developer',
    company: 'Aark Global Inc',
    location: 'Jammu, India',
    period: '2022 - Present',
    description: [
      'Collaborated on the development of a semi-automated data processing system using C#, WPF, Node.js, React.js, CSS, and SQL Server',
      'Implemented responsive interfaces for efficient Secs/Gem management in semiconductor manufacturing',
      'Effectively addressed complex bugs and contributed to module updates',
      'Worked with WCF (Windows Communication Foundation) and WinForms for enterprise applications',
      'Leveraged Git & GitHub for version control and collaborative development',
    ],
    tags: ['C#', 'WPF', 'React.js', 'Node.js', 'SQL Server', 'SECS/GEM'],
    link: 'https://aarkglobalinc.com/',
  },
];

const education = [
  {
    type: 'education',
    title: 'Bachelor of Technology',
    company: 'Islamic University of Science & Technology (IUST)',
    location: 'Jammu & Kashmir, India',
    period: '2018 - 2022',
    description: ['Computer Science and Engineering', 'CGPA: 7.51'],
    tags: ['Computer Science', 'Engineering'],
  },
  {
    type: 'education',
    title: 'PCM + IP (Higher Secondary)',
    company: 'St. Joseph\'s Higher Secondary School',
    location: 'Jammu & Kashmir, India',
    period: '2017',
    description: ['GPA: 3.8 / 4.0'],
    tags: ['Physics', 'Chemistry', 'Mathematics'],
  },
];

const Experience = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const renderTimeline = (items, icon) => (
    <div className="experience__timeline">
      {items.map((item, i) => (
        <motion.div
          key={i}
          className="experience__card"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          whileHover={{ y: -5 }}
        >
          <div className="experience__card-dot">
            {icon}
          </div>
          <div className="experience__card-content">
            <div className="experience__card-header">
              <div>
                <h3 className="experience__card-title">{item.title}</h3>
                <p className="experience__card-company">
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer">{item.company}</a>
                  ) : item.company}
                  <span className="experience__card-location"> · {item.location}</span>
                </p>
              </div>
              <span className="experience__card-period">{item.period}</span>
            </div>

            <ul className="experience__card-desc">
              {item.description.map((d, j) => (
                <li key={j}>{d}</li>
              ))}
            </ul>

            <div className="experience__card-tags">
              {item.tags.map((tag, j) => (
                <span key={j} className="experience__tag">{tag}</span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  return (
    <section id="experience" className="experience" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Experience & Education</span>
          <h2 className="section-title">
            My professional <span className="gradient-text">journey</span>
          </h2>
        </motion.div>

        <div className="experience__columns">
          <div className="experience__column">
            <motion.h3
              className="experience__column-title"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FaBriefcase className="experience__column-icon" />
              Work Experience
            </motion.h3>
            {renderTimeline(experiences, <FaBriefcase />)}
          </div>

          <div className="experience__column">
            <motion.h3
              className="experience__column-title"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <FaGraduationCap className="experience__column-icon" />
              Education
            </motion.h3>
            {renderTimeline(education, <FaGraduationCap />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
