import React, { Suspense, lazy } from 'react';
import { Loader } from '@react-three/drei';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './sections/Hero';
import ScrollProgress from './components/ui/ScrollProgress';
import GlobalSpace from './components/layout/GlobalSpace';

// Lazy load sections below the fold
const About = lazy(() => import('./sections/About'));
const Skills = lazy(() => import('./sections/Skills'));
const Projects = lazy(() => import('./sections/Projects'));
const Education = lazy(() => import('./sections/Education'));
const Training = lazy(() => import('./sections/Training'));
const Certifications = lazy(() => import('./sections/Certifications'));
const Contact = lazy(() => import('./sections/Contact'));
const AIChatbot = lazy(() => import('./components/ui/AIChatbot'));

function App() {
  return (
    <>
      <div className="bg-transparent min-h-screen text-slate-100 font-sans selection:bg-teal-400/30 selection:text-orange-200">
        {/* Fixed global 3D space theme behind everything */}
        <GlobalSpace />
        <ScrollProgress />
        <Navbar />
        
        {/* Hero is not lazy loaded so it appears instantly */}
        <Hero />
        
        {/* Suspense boundary for lazy loaded sections */}
        <Suspense fallback={<div className="h-32 flex items-center justify-center text-teal-400/50">Loading sections...</div>}>
          <About />
          <Skills />
          <Projects />
          <Education />
          <Training />
          <Certifications />
          <Contact />
        </Suspense>
        
        <Footer />
      </div>
      
      {/* 3D Preloader overlay */}
      <Loader 
        containerStyles={{ background: '#03080c' }} 
        innerStyles={{ width: '300px' }}
        barStyles={{ background: '#14b8a6' }} 
        dataInterpolation={(p) => `Loading Space ${p.toFixed(0)}%`} 
      />

      <Suspense fallback={null}>
        <AIChatbot />
      </Suspense>
    </>
  );
}

export default App;

