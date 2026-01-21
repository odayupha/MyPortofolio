import React, { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Portfolio from './Portofolio';
import Achievement from './Achievement';
import Skills from './newskill';
import Certifications from './Certifications';
import Footer from './Footer';
import Intro from './Intro';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="font-sans antialiased">
      {showIntro && <Intro onEnter={() => setShowIntro(false)} />}
      {!showIntro && (
        <div className="animate-fade-in">
          <Header />
          <Hero />
          <About />
          <Experience />
          <Portfolio />
          <Achievement />
          <Skills />
          <Certifications />
          <Footer />
        </div>
      )}
      
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}