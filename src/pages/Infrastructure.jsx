import React from 'react';
import { motion } from 'framer-motion';

const Infrastructure = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      style={{ paddingTop: '90px', minHeight: '100vh' }}
    >
      <div className="container">
        {/* This page will use the same tech grid system as other pages */}
        <div style={{ 
          background: 'rgba(30, 41, 59, 0.8)', 
          borderRadius: '20px', 
          padding: '3rem', 
          textAlign: 'center',
          border: '1px solid rgba(0, 255, 255, 0.2)'
        }}>
          <i className="fas fa-cloud" style={{ fontSize: '4rem', color: '#64ffda', marginBottom: '2rem' }}></i>
        </div>
      </div>
    </motion.div>
  );
};

export default Infrastructure;