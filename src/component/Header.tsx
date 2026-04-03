import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = ['home', 'about', 'experience', 'portfolio', 'achievement', 'skills', 'certifications', 'contact'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certs' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-sand/95 backdrop-blur-sm border-b-2 border-forest' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="cursor-pointer flex items-center gap-3" onClick={() => scrollToSection('home')}>
            <div className="w-10 h-10 bg-gradient-to-br from-orange to-orange/60 flex items-center justify-center rounded-lg hover:scale-110 transition-transform duration-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-bounce">
                {/* Robot Head */}
                <rect x="8" y="2" width="8" height="8" fill="currentColor" className="text-sand"/>
                {/* Robot Eyes */}
                <circle cx="10" cy="4" r="1" fill="#2D3A27"/>
                <circle cx="14" cy="4" r="1" fill="#2D3A27"/>
                {/* Robot Body */}
                <rect x="6" y="10" width="12" height="10" fill="currentColor" className="text-sand"/>
                {/* Robot Arms */}
                <rect x="2" y="12" width="4" height="3" fill="currentColor" className="text-sand" transform="rotate(-15 4 13.5)"/>
                <rect x="18" y="12" width="4" height="3" fill="currentColor" className="text-sand" transform="rotate(15 20 13.5)"/>
                {/* Robot Legs */}
                <rect x="9" y="20" width="2" height="3" fill="currentColor" className="text-sand"/>
                <rect x="13" y="20" width="2" height="3" fill="currentColor" className="text-sand"/>
              </svg>
            </div>
            <div>
              <div className="font-bold text-lg text-forest tracking-tight leading-none">Oday<span className="font-serif italic ml-1"></span></div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? 'text-orange font-bold'
                    : 'text-forest/50 hover:text-forest'
                }`}
              >

                {item.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-orange text-sand px-6 py-2.5 text-sm font-bold border-2 border-forest shadow-hard-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#2D3A27] transition-all duration-150"
            >
              Contact Me →
            </button>
          </div>

          {/* Mobile */}
          <button
            className="lg:hidden text-forest p-2 border-2 border-forest hover:bg-forest hover:text-sand transition-all"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-[500px] opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
          <div className="py-4 space-y-1 bg-paper border-2 border-forest p-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 font-medium text-sm transition-all border-b border-forest/10 last:border-0 ${
                  activeSection === item.id ? 'text-orange font-bold bg-sand' : 'text-forest/60 hover:text-forest hover:bg-sand/50'
                }`}
              >
                <span className="font-mono text-[9px] text-forest/30 mr-2">[{String(navItems.indexOf(item) + 1).padStart(2, '0')}]</span>
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-center px-4 py-3 bg-orange text-sand font-bold text-sm border-2 border-forest shadow-hard-sm mt-2"
            >
              Contact Me →
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;