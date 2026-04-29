import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedinIn, FaGithub, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:laraabrar@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Hi Abrar,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'laraabrar@gmail.com',
      href: 'mailto:laraabrar@gmail.com',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 7889400477',
      href: 'tel:+917889400477',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Jammu & Kashmir, India',
      href: null,
    },
  ];

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Contact</span>
          <h2 className="section-title">
            Let&apos;s work <span className="gradient-text">together</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind? Let&apos;s connect and bring your ideas to life.
          </p>
        </motion.div>

        <div className="contact__grid">
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="contact__info-title">Get in touch</h3>
            <p className="contact__info-desc">
              I&apos;m eager to leverage my education and skillset to drive meaningful
              advancements. Feel free to reach out for collaborations, opportunities,
              or just a friendly chat!
            </p>

            <div className="contact__info-items">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={i}
                  className="contact__info-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="contact__info-icon">
                    <item.icon />
                  </div>
                  <div>
                    <span className="contact__info-label">{item.label}</span>
                    {item.href ? (
                      <a href={item.href} className="contact__info-value">{item.value}</a>
                    ) : (
                      <span className="contact__info-value">{item.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="contact__socials">
              <a href="https://www.linkedin.com/in/abrarlarah/" target="_blank" rel="noopener noreferrer" className="contact__social" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="https://github.com/abrarlarah" target="_blank" rel="noopener noreferrer" className="contact__social" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="mailto:laraabrar@gmail.com" className="contact__social" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </motion.div>

          <motion.form
            className="contact__form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="contact__form-row">
              <div className="contact__form-group">
                <label className="contact__form-label" htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  type="text"
                  className="contact__form-input"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="contact__form-group">
                <label className="contact__form-label" htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  className="contact__form-input"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="contact__form-group">
              <label className="contact__form-label" htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                type="text"
                className="contact__form-input"
                placeholder="What's this about?"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
            </div>

            <div className="contact__form-group">
              <label className="contact__form-label" htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                className="contact__form-textarea"
                placeholder="Tell me about your project..."
                rows="5"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>

            <motion.button
              type="submit"
              className={`contact__form-btn ${submitted ? 'contact__form-btn--sent' : ''}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {submitted ? (
                <>✓ Opening email client...</>
              ) : (
                <>
                  <FaPaperPlane />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
