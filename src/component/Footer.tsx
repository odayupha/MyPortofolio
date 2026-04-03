import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollToSection = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const navItems = [
    { id: 'home', label: 'Home' }, { id: 'about', label: 'About' }, { id: 'experience', label: 'Experience' },
    { id: 'portfolio', label: 'Portfolio' }, { id: 'achievement', label: 'Achievement' },
    { id: 'skills', label: 'Skills' }, { id: 'certifications', label: 'Certifications' }
  ];

  return (
    <footer className="bg-forest text-sand relative overflow-hidden border-t-2 border-sand/20">
      <div className="container mx-auto px-6 py-16 max-w-6xl relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="cursor-pointer mb-6 flex items-center gap-3" onClick={scrollToTop}>
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
                <div className="font-bold text-xl text-sand tracking-tight leading-none">Odayakana<span className="font-serif italic ml-1 text-sand/60">U.</span></div>
                <div className="font-mono text-[9px] text-sand/30 tracking-[0.1em]">AUTOMATION ENGINEER</div>
              </div>
            </div>
            <p className="text-sand/40 text-sm leading-relaxed mb-6">Passionate automation engineering student specializing in robotics and software development.</p>
            <div className="flex gap-3">
              {[
                { href: 'mailto:odayupha@gmail.com', icon: Mail },
                { href: 'https://www.linkedin.com/in/odayakana-konnikhof-230369b6', svg: true, label: 'LinkedIn' },
                { href: 'https://www.instagram.com/odayupha', svg: true, label: 'Instagram' }
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 border-2 border-sand/20 text-sand/50 flex items-center justify-center hover:bg-sand hover:text-forest hover:border-sand transition-all">
                  {s.svg ? (
                    s.label === 'LinkedIn' ? (
                      <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    ) : (
                      <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    )
                  ) : <s.icon size={14} />}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-[10px] tracking-[0.15em] text-sand/30 mb-6">QUICK LINKS</h3>
            <ul className="space-y-2">
              {navItems.map((link, i) => (
                <li key={i}><button onClick={() => scrollToSection(link.id)} className="text-sand/40 hover:text-orange transition-colors text-sm font-mono text-[11px]"><span className="text-sand/20 mr-2">[{String(i + 1).padStart(2, '0')}]</span>{link.label}</button></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[10px] tracking-[0.15em] text-sand/30 mb-6">GET IN TOUCH</h3>
            <button onClick={() => scrollToSection('contact')} className="w-full py-3 px-6 bg-orange hover:bg-orange/80 text-sand font-bold text-sm border-2 border-sand/20 transition-colors">Contact Me →</button>
            <div className="mt-6 font-mono text-[9px] text-sand/20 space-y-1">
              <div>BUILD: v2.0.0</div>
              <div>LAST_UPDATE: 2025</div>
              <div>STATUS: ACTIVE</div>
            </div>
          </div>
        </div>

        <div className="h-[2px] bg-sand/10 mb-6" />
        <div className="flex items-center justify-between">
          <p className="text-sand/25 text-sm font-mono text-[11px]">© {new Date().getFullYear()} Odayakana Upupha Konnikhof</p>
          <span className="font-mono text-[9px] text-sand/15">ALL_RIGHTS_RESERVED</span>
        </div>
      </div>

      <button onClick={scrollToTop} className="fixed bottom-8 right-8 w-11 h-11 bg-orange border-2 border-forest flex items-center justify-center shadow-hard-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#2D3A27] transition-all z-50" aria-label="Scroll to top">
        <ArrowUp size={18} className="text-sand" />
      </button>
    </footer>
  );
};

export default Footer;