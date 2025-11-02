import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SearchBar from '../components/SearchBar';
import TechGrid from '../components/TechGrid';
import techData from '../data/techlist.json';

const Database = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTechnologies, setFilteredTechnologies] = useState([]);

  useEffect(() => {
    let filtered = techData.technologies.filter(tech => tech.category === 'Database');
    
    if (searchTerm) {
      filtered = filtered.filter(tech =>
        tech.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tech.desc.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredTechnologies(filtered);
  }, [searchTerm]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      style={{ paddingTop: '90px', minHeight: '100vh' }}
    >
      <div className="container">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <TechGrid technologies={filteredTechnologies} />
      </div>
    </motion.div>
  );
};

export default Database;