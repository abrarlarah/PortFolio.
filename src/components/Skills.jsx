import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import {
  SiReact, SiNodedotjs, SiJavascript, SiDotnet,
  SiHtml5, SiCss, SiGit, SiGithub,
  SiPython, SiBootstrap
} from 'react-icons/si';
import { FaWindows, FaCode, FaDatabase } from 'react-icons/fa';
import './Skills.css';

const skillCategories = [
  {
    title: 'Frontend',
    color: '#6c63ff',
    skills: [
      { name: 'React.js', icon: SiReact, level: 90 },
      { name: 'JavaScript', icon: SiJavascript, level: 92 },
      { name: 'HTML5', icon: SiHtml5, level: 95 },
      { name: 'CSS3', icon: SiCss, level: 93 },
      { name: 'Bootstrap', icon: SiBootstrap, level: 85 },
    ],
  },
  {
    title: 'Backend',
    color: '#00d4aa',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, level: 85 },
      { name: 'C#', icon: FaCode, level: 90 },
      { name: '.NET / WPF', icon: SiDotnet, level: 88 },
      { name: 'SQL Server', icon: FaDatabase, level: 85 },
      { name: 'Python', icon: SiPython, level: 75 },
    ],
  },
  {
    title: 'Tools & Others',
    color: '#ff6b9d',
    skills: [
      { name: 'Git', icon: SiGit, level: 88 },
      { name: 'GitHub', icon: SiGithub, level: 90 },
      { name: 'WPF / WCF', icon: FaWindows, level: 85 },
      { name: 'SECS/GEM', icon: FaCode, level: 80 },
      { name: 'WinForms', icon: FaWindows, level: 82 },
    ],
  },
];

const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Skills</span>
          <h2 className="section-title">
            My <span className="gradient-text">technical arsenal</span>
          </h2>
        </motion.div>

        <div className="skills__grid">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.2 }}
            >
              <Tilt
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                perspective={800}
                transitionSpeed={800}
                scale={1.05}
                glareEnable={true}
                glareMaxOpacity={0.3}
                glareColor={category.color}
                glarePosition="all"
                glareBorderRadius="20px"
                className="skills__category"
              >
                <div className="skills__category-header">
                  <div
                    className="skills__category-indicator"
                    style={{ background: category.color }}
                  />
                  <h3 className="skills__category-title">{category.title}</h3>
                </div>

                <div className="skills__list">
                  {category.skills.map((skill, i) => (
                    <div
                      key={skill.name}
                      className="skills__item"
                    >
                      <div className="skills__item-left">
                        <skill.icon className="skills__item-icon" style={{ color: category.color }} />
                        <span className="skills__item-name">{skill.name}</span>
                      </div>
                      <div className="skills__item-right">
                        <div className="skills__bar">
                          <motion.div
                            className="skills__bar-fill"
                            style={{ background: category.color }}
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : {}}
                            transition={{ duration: 1, delay: catIndex * 0.2 + i * 0.08 + 0.3, ease: 'easeOut' }}
                          />
                        </div>
                        <span className="skills__item-level">{skill.level}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
