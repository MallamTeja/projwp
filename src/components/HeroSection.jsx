import React from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';

const HeroSection = ({ setCurrentPage }) => {
  const handleCTA = () => {
    // Navigate directly to frontend page
    if (setCurrentPage) {
      setCurrentPage('frontend');
    }
  };

  return (
    <section className="hero-section-landing">
      <div className="hero-inner app-container">
        <motion.div
          className="hero-content-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="hero-text-center">
            <h1 className="hero-title">Build Projects Like a Pro</h1>
            <p className="microcopy">Where confused devs get unconfused. (Yes, really.)</p>
          </div>
          
          {/* Professional Tech Stack Cards Section */}
          <motion.div 
            className="tech-stacks-professional"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="professional-stacks-grid">
              <motion.div 
                className="professional-stack-card"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="stack-icon mern">
                  <i className="fab fa-node-js"></i>
                </div>
                <h4>MERN</h4>
                <p>MongoDB, Express, React, Node.js</p>
                <div className="stack-badge">Most Popular</div>
              </motion.div>

              <motion.div 
                className="professional-stack-card"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="stack-icon mean">
                  <i className="fab fa-angular"></i>
                </div>
                <h4>MEAN</h4>
                <p>MongoDB, Express, Angular, Node.js</p>
                <div className="stack-badge">Enterprise</div>
              </motion.div>

              <motion.div 
                className="professional-stack-card"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="stack-icon java">
                  <i className="fab fa-java"></i>
                </div>
                <h4>Java Stack</h4>
                <p>Spring Boot, MySQL, Thymeleaf</p>
                <div className="stack-badge">Robust</div>
              </motion.div>

              <motion.div 
                className="professional-stack-card"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="stack-icon lamp">
                  <i className="fab fa-php"></i>
                </div>
                <h4>LAMP/LEMP</h4>
                <p>Linux, Apache/Nginx, MySQL, PHP</p>
                <div className="stack-badge">Traditional</div>
              </motion.div>
            </div>

            {/* CTA Button moved under tech stacks */}
            <div className="hero-ctas-bottom">
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCTA}
                aria-label="Explore Frontend"
              >
                Take a Look
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
