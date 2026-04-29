import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaExternalLinkAlt, FaGithub, FaFolder } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import './Projects.css';

const featuredProjects = [
  {
    title: 'Goal Kashmir',
    subtitle: 'Sports & News Platform',
    description: 'A sports and news platform built for Goal Kashmir, featuring live updates, dynamic UI, and responsive design.',
    image: './images/goalkashmir.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://abrarlarah.github.io/goal.kashmir/',
    githubUrl: 'https://github.com/abrarlarah/goal.kashmir',
  },
  {
    title: 'Earthly Website',
    subtitle: 'Environmental Awareness',
    description: 'A modern environmental awareness website built with Bootstrap and jQuery, featuring responsive design, dynamic animations, and sustainability-focused content.',
    image: './images/earthly.png',
    tags: ['HTML', 'CSS', 'Bootstrap', 'jQuery'],
    liveUrl: 'https://abrarlarah.github.io/earthly/',
    githubUrl: 'https://github.com/abrarlarah/earthly',
  },
  {
    title: 'NexaCraft',
    subtitle: 'Modern Web Experience',
    description: 'A premium, modern website showcasing high-end design, smooth animations, and responsive layouts.',
    image: './images/nexacraft.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://abrarlarah.github.io/NexaCraft/',
    githubUrl: 'https://github.com/abrarlarah/NexaCraft',
  },
  {
    title: 'COVID Detection Model',
    subtitle: 'AI/ML Healthcare Project',
    description: 'Python-based deep learning model using transfer learning with ResNet-50 architecture to identify COVID-19 cases from medical imaging (X-rays / CT scans).',
    image: './images/covid.png',
    tags: ['Python', 'TensorFlow', 'ResNet-50', 'Deep Learning'],
    githubUrl: 'https://github.com/abrarlarah/COVID_DETECTION_MODEL',
  },
  {
    title: 'Kashmir Venture',
    subtitle: 'Tour & Travel Website',
    description: 'A stunning tourism website showcasing the beauty of Kashmir with modern UI, responsive design, booking features, and interactive galleries. Built with React.js and modern CSS.',
    image: './images/tourism.png',
    tags: ['React.js', 'JavaScript', 'CSS', 'Responsive'],
    liveUrl: 'https://abrarlarah.github.io/Tourism/',
    githubUrl: 'https://github.com/abrarlarah/Tourism',
  },
  {
    title: 'JK Law',
    subtitle: 'Legal Services Platform',
    description: 'A professional website for legal services featuring a clean design, service showcase, and contact integration.',
    image: './images/jklaw.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://abrarlarah.github.io/jk.law/',
    githubUrl: 'https://github.com/abrarlarah/jk.law',
  },
];

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });
  
  const [allProjects, setAllProjects] = useState(featuredProjects);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  useEffect(() => {
    fetch('https://api.github.com/users/abrarlarah/repos?sort=updated&per_page=100')
      .then(res => res.json())
      .then(data => {
        const featuredNames = featuredProjects.map(p => p.githubUrl?.split('/').pop());
        const filtered = data.filter(repo => !featuredNames.includes(repo.name) && !repo.fork);
        
        const mappedRepos = filtered.map(repo => ({
          title: repo.name.replace(/-/g, ' '),
          subtitle: repo.language ? `${repo.language} Project` : 'GitHub Repository',
          description: repo.description || 'No description available for this repository.',
          image: null,
          tags: [repo.language].filter(Boolean),
          liveUrl: repo.homepage || null,
          githubUrl: repo.html_url,
        }));

        setAllProjects([...featuredProjects, ...mappedRepos]);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // Pagination logic
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = allProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(allProjects.length / projectsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    const element = document.getElementById('projects');
    if (element) {
      const yOffset = -80; // Adjust for sticky navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Projects</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">work</span>
          </h2>
          <p className="section-subtitle">
            A collection of top projects that showcase my skills and passion for building
          </p>
        </motion.div>

        {loading ? (
          <div className="projects__loading">
            <div className="projects__loading-spinner"></div>
            <span>Loading projects from GitHub...</span>
          </div>
        ) : (
          <div className="projects__grid-container">
            <div className="projects__grid">
              <AnimatePresence mode="popLayout">
                {currentProjects.map((project, i) => (
                  <motion.div
                    key={`${project.title}-${i}`}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -20 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    style={{ height: '100%' }}
                  >
                    <Tilt 
                      tiltMaxAngleX={18} 
                      tiltMaxAngleY={18} 
                      perspective={800} 
                      transitionSpeed={800} 
                      scale={1.05}
                      glareEnable={true} 
                      glareMaxOpacity={0.35} 
                      glareColor="#6c63ff" 
                      glarePosition="all" 
                      glareBorderRadius="20px"
                      className="projects__card"
                    >
                      <div className="projects__card-image">
                        {project.image ? (
                          <img src={project.image} alt={project.title} />
                        ) : (
                          <div className="projects__card-fallback">
                            <FaFolder />
                          </div>
                        )}
                        <div className="projects__card-overlay">
                          <div className="projects__card-links">
                            {project.liveUrl && (
                              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="projects__card-link" aria-label="Live demo">
                                <FaExternalLinkAlt />
                              </a>
                            )}
                            {project.githubUrl && (
                              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="projects__card-link" aria-label="GitHub">
                                <FaGithub />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="projects__card-body">
                        <span className="projects__card-subtitle">{project.subtitle}</span>
                        <h3 className="projects__card-title" style={{ textTransform: 'capitalize' }}>{project.title}</h3>
                        <p className="projects__card-desc">{project.description}</p>
                        <div className="projects__card-tags">
                          {project.tags.map((tag, j) => (
                            <span key={j} className="projects__tag">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </Tilt>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {totalPages > 1 && (
              <div className="projects__pagination">
                <button 
                  onClick={() => paginate(currentPage - 1)} 
                  disabled={currentPage === 1}
                  className="projects__page-btn"
                >
                  Prev
                </button>
                <div className="projects__page-numbers">
                  {Array.from({ length: totalPages }).map((_, index) => {
                    // Show a limited number of pages to avoid overcrowding
                    if (
                      index === 0 || 
                      index === totalPages - 1 || 
                      (index >= currentPage - 2 && index <= currentPage)
                    ) {
                      return (
                        <button
                          key={index}
                          onClick={() => paginate(index + 1)}
                          className={`projects__page-num ${currentPage === index + 1 ? 'projects__page-num--active' : ''}`}
                        >
                          {index + 1}
                        </button>
                      );
                    } else if (
                      index === currentPage - 3 || 
                      index === currentPage + 1
                    ) {
                      return <span key={index} className="projects__page-dots">...</span>;
                    }
                    return null;
                  })}
                </div>
                <button 
                  onClick={() => paginate(currentPage + 1)} 
                  disabled={currentPage === totalPages}
                  className="projects__page-btn"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        )}

        <motion.div
          className="projects__more"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <a href="https://github.com/abrarlarah" target="_blank" rel="noopener noreferrer" className="projects__more-btn">
            <FaGithub />
            View GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
