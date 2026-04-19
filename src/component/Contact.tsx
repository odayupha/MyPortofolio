import React, { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, Linkedin, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) setIsVisible(true); }); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-20 lg:py-28 bg-paper relative overflow-hidden border-t-2 border-forest">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[3px] bg-orange" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-forest tracking-tighter">
              Let's <span className="font-serif italic text-orange">Connect</span>
            </h2>
            <p className="text-base text-forest/50 max-w-2xl mt-4">I'm always interested in hearing about new opportunities, collaborations, or just having a conversation about technology and innovation.</p>
          </div>

          <div className={`grid lg:grid-cols-3 gap-5 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Email Card */}
            <a href="mailto:odayupha@gmail.com" className="arrow-hover group block bg-sand border-2 border-forest shadow-hard p-7 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#2D3A27] transition-all duration-150">
              <div className="w-12 h-12 bg-forest flex items-center justify-center mb-5 group-hover:bg-orange transition-colors">
                <Mail size={22} className="text-sand" />
              </div>
              <div className="font-mono text-[9px] text-forest/30 tracking-[0.15em] mb-2">EMAIL</div>
              <div className="text-forest font-bold text-lg mb-1">odayupha@gmail.com</div>
              <p className="text-forest/40 text-sm mb-4">Best way to reach me for opportunities and collaborations</p>
              <div className="flex items-center gap-2 text-orange font-bold text-sm">
                Send Email <ArrowRight size={14} className="arrow-icon" />
              </div>
            </a>

            {/* LinkedIn Card */}
            <a href="https://www.linkedin.com/in/odayakana-konnikhof-230369b6" target="_blank" rel="noopener noreferrer" className="arrow-hover group block bg-sand border-2 border-forest shadow-hard p-7 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#2D3A27] transition-all duration-150">
              <div className="w-12 h-12 bg-forest flex items-center justify-center mb-5 group-hover:bg-[#0077B5] transition-colors">
                <Linkedin size={22} className="text-sand" />
              </div>
              <div className="font-mono text-[9px] text-forest/30 tracking-[0.15em] mb-2">LINKEDIN</div>
              <div className="text-forest font-bold text-lg mb-1">Odayakana Konnikhof</div>
              <p className="text-forest/40 text-sm mb-4">Connect with me on LinkedIn for professional networking</p>
              <div className="flex items-center gap-2 text-orange font-bold text-sm">
                View Profile <ArrowRight size={14} className="arrow-icon" />
              </div>
            </a>

            {/* Location Card */}
            <div className="bg-sand border-2 border-forest shadow-hard p-7">
              <div className="w-12 h-12 bg-forest flex items-center justify-center mb-5">
                <MapPin size={22} className="text-sand" />
              </div>
              <div className="font-mono text-[9px] text-forest/30 tracking-[0.15em] mb-2">LOCATION</div>
              <div className="text-forest font-bold text-lg mb-1">Semarang</div>
              <p className="text-forest/40 text-sm mb-4">Central Java, Indonesia</p>
              <div className="pt-4 border-t-2 border-forest/10 flex items-center gap-3">
                <div className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange opacity-75"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 bg-orange"></span>
                </div>
                <span className="text-forest font-semibold text-sm">Available for Opportunities</span>
              </div>
            </div>
          </div>

          {/* Bottom CTA & Social */}
          <div className={`mt-8 grid lg:grid-cols-[1fr,auto] gap-5 items-stretch transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Availability */}
            <div className="bg-sand border-2 border-forest shadow-hard-sm p-7 flex flex-col justify-center">
              <p className="text-forest/50 text-sm leading-relaxed mb-4">
                Open to <span className="text-forest font-bold">internships</span>, <span className="text-forest font-bold">research collaborations</span>, and <span className="text-forest font-bold">project opportunities</span> in automation engineering and robotics.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[9px] text-forest/30">RESPONSE_TIME</span>
                  <span className="font-mono text-[10px] text-forest font-bold">{'<'} 24H</span>
                </div>
                <div className="h-4 w-[2px] bg-forest/10" />
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[9px] text-forest/30">STATUS</span>
                  <span className="font-mono text-[10px] text-orange font-bold">ACTIVE</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-sand border-2 border-forest shadow-hard-sm p-7 flex flex-col justify-center">
              <h3 className="text-sm font-bold text-forest mb-4">Connect on Social</h3>
              <div className="flex gap-3">
                <a href="mailto:odayupha@gmail.com" className="w-11 h-11 border-2 border-forest text-forest flex items-center justify-center hover:bg-forest hover:text-sand transition-all" aria-label="Email">
                  <Mail size={18} />
                </a>
                <a href="https://www.linkedin.com/in/odayakana-konnikhof-230369b6" target="_blank" rel="noopener noreferrer" className="w-11 h-11 border-2 border-forest text-forest flex items-center justify-center hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5] transition-all" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
                <a href="https://www.instagram.com/odayupha" target="_blank" rel="noopener noreferrer" className="w-11 h-11 border-2 border-forest text-forest flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 hover:text-white hover:border-transparent transition-all" aria-label="Instagram">
                  <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;