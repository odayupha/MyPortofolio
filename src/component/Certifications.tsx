import React, { useEffect, useRef, useState } from 'react';
import { Award, Calendar, MapPin, BookOpen, CheckCircle } from 'lucide-react';

interface Certification {
  title: string; issuer: string; date: string; location: string;
  description: string[]; image: string; skills: string[];
}

const Certifications = () => {
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

  const certifications: Certification[] = [
    {
      title: 'PIPESIM and Symmetry Training',
      issuer: 'SLB NexT',
      date: 'October 2025',
      location: 'Semarang, Indonesia',
      description: [
        'Completed fundamental training on PIPESIM and Symmetry for oil and gas production system analysis',
        'Learned multiphase flow simulation and pipeline design optimization in the oil & gas industry',
        'Participated in training conducted by SLB (Schlumberger) as a leading company in the energy sector'
      ],
      image: '/slb.jpeg',
      skills: ['PIPESIM', 'Symmetry', 'Oil & Gas', 'Pipeline Design', 'Multiphase Flow']
    }
  ];

  return (
    <section ref={sectionRef} id="certifications" className="py-20 lg:py-28 bg-sand relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-[10px] text-forest/40 tracking-[0.15em]"></span>
              <div className="w-8 h-[3px] bg-orange" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-forest tracking-tighter">
              <span className="font-serif italic text-orange">Certifications</span>
            </h2>
          </div>

          {certifications.map((cert, index) => (
            <div key={index} className={`card-press bg-paper overflow-hidden transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              <div className="relative h-64 img-zoom-container border-b-2 border-forest bg-sand">
                {cert.image ? (
                  <img src={cert.image} alt={cert.title} className="w-full h-full object-contain p-6" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center"><Award size={64} className="text-forest/20" /></div>
                )}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-forest text-sand font-mono text-[10px] font-bold tracking-wider">PROFESSIONAL CERT</span>
                </div>
                <div className="absolute bottom-3 right-3 font-mono text-[9px] text-forest/40">CERT_01</div>
              </div>

              <div className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-forest mb-4">{cert.title}</h3>
                    <div className="flex items-center gap-3 mb-6 pb-6 border-b-2 border-forest/10">
                      <div className="w-10 h-10 bg-orange/10 border-2 border-orange/30 flex items-center justify-center">
                        <Award size={20} className="text-orange" />
                      </div>
                      <div>
                        <div className="font-mono text-[9px] text-forest/40">ISSUED BY</div>
                        <div className="text-forest font-bold">{cert.issuer}</div>
                      </div>
                    </div>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-3 text-forest/50 font-mono text-[11px]">
                        <Calendar size={14} className="text-orange" /><span>{cert.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-forest/50 font-mono text-[11px]">
                        <MapPin size={14} className="text-forest/30" /><span>{cert.location}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-mono text-[9px] text-forest/30 tracking-[0.15em] mb-3">SKILLS ACQUIRED</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, idx) => (
                          <span key={idx} className="px-3 py-1 border-2 border-forest/20 font-mono text-[10px] text-forest/60 font-bold tracking-wider">{skill.toUpperCase()}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="flex items-center gap-2 text-base font-bold text-forest mb-4">
                      <BookOpen size={18} className="text-orange" />Training Overview
                    </h4>
                    <div className="space-y-4">
                      {cert.description.map((desc, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle size={14} className="text-orange flex-shrink-0 mt-0.5" />
                          <p className="text-forest/60 text-sm leading-relaxed">{desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;