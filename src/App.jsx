import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Import shell components and pages
import HubPage from './hub/HubPage';
import DevApp from './dev/DevApp';
import CreativeApp from './creative/CreativeApp';

const PageFade = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageFade><HubPage /></PageFade>} />
        <Route path="/dev" element={<PageFade><DevApp /></PageFade>} />
        <Route path="/creative" element={<PageFade><CreativeApp /></PageFade>} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
