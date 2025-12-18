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
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
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
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'achievement', label: 'Achievement' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certifications' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-xl shadow-lg border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="group cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <div className="font-bold text-2xl text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 transition-all">
              Odayakana Upupha
            </div>
            <div className="text-xs text-gray-400 tracking-wider uppercase">Automation Engineer</div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-5 py-2.5 text-sm font-medium transition-all duration-300 rounded-xl ${
                  activeSection === item.id 
                    ? 'text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                {activeSection === item.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-xl shadow-lg shadow-indigo-500/30"></div>
                )}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')} 
              className="ml-4 relative group overflow-hidden bg-gradient-to-r from-indigo-600 to-cyan-600 text-white px-7 py-2.5 rounded-xl font-semibold hover:shadow-xl hover:shadow-indigo-500/50 transition-all"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative z-10">Contact Me</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-all"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100 mb-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 bg-slate-800/90 backdrop-blur-xl rounded-xl border border-white/10 p-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-xl font-semibold transition-all ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg'
                    : 'text-gray-300 hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-3 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              Contact Me
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;