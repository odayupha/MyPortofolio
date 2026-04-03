export const dynamic = "force-dynamic";
import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Portfolio from './Portofolio';
import Achievement from './Achievement';
import Skills from './newskill';
import Certifications from './Certifications';
import Contact from './Contact';
import Footer from './Footer';
import Intro from './Intro';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    if (showIntro) return;

    document.documentElement.style.scrollBehavior = 'smooth';

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            end: 'top 40%',
            once: true,
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [showIntro]);

  return (
    <div className="font-sans antialiased bg-sand text-forest relative">
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
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
}