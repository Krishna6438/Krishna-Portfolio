import React from 'react';
import CreativeNavbar from './components/CreativeNavbar';
import CreativeFooter from './components/CreativeFooter';
import CreativeHero from './sections/CreativeHero';
import Services from './sections/Services';
import CreativeContact from './sections/CreativeContact';
import MediaShowcase from './sections/MediaShowcase';
import CreativeProcess from './sections/CreativeProcess';
import CustomCursor from './components/CustomCursor';
import Marquee from './components/Marquee';
import './creative.css';

const CreativeApp = () => {
  return (
    <div className="creative-page relative">
      <CustomCursor />
      <CreativeNavbar />
      <main className="relative z-10">
        <CreativeHero />
        <Marquee />
        <Services />
        <MediaShowcase />
        <CreativeProcess />
        <CreativeContact />
      </main>
      <CreativeFooter />
    </div>
  );
};

export default CreativeApp;
