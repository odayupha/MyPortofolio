import React, { useEffect, useRef, useState } from 'react';
import { Award, Calendar, MapPin, BookOpen, CheckCircle } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  location: string;
  description: string[];
  image: string;
  skills: string[];
}

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

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
    <section ref={sectionRef} id="certifications" className="py-24 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className={`mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
              <span className="text-gray-300 text-sm font-medium">Professional Development</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Certifications</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"></div>
          </div>

          {/* Certification Card */}
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
            >
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-indigo-500/50 transition-all">
                {/* Certificate Image */}
                <div className="relative h-80 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
                  {cert.image ? (
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-full object-contain p-8"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <Award size={64} className="text-gray-600 mx-auto mb-4" />
                        <p className="text-gray-500">Certificate Image</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Badge */}
                  <div className="absolute top-6 left-6">
                    <div className="bg-gradient-to-r from-indigo-600 to-cyan-600 px-4 py-2 rounded-full text-white text-sm font-semibold shadow-lg shadow-indigo-500/50">
                      Professional Certificate
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Left Column - Info */}
                    <div>
                      {/* Title */}
                      <h3 className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 mb-4">
                        {cert.title}
                      </h3>

                      {/* Issuer */}
                      <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/10">
                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                          <Award size={24} className="text-white" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-400">Issued by</div>
                          <div className="text-white font-bold text-lg">{cert.issuer}</div>
                        </div>
                      </div>

                      {/* Info Grid */}
                      <div className="space-y-4 mb-6">
                        <div className="flex items-center gap-3 text-gray-300">
                          <Calendar size={18} className="text-indigo-400" />
                          <span>{cert.date}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300">
                          <MapPin size={18} className="text-cyan-400" />
                          <span>{cert.location}</span>
                        </div>
                      </div>

                      {/* Skills */}
                      <div>
                        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Skills Acquired</h4>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill, idx) => (
                            <span key={idx} className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-lg text-sm text-white border border-white/20">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Description */}
                    <div>
                      <h4 className="flex items-center gap-2 text-lg font-bold text-white mb-4">
                        <BookOpen size={20} className="text-indigo-400" />
                        Training Overview
                      </h4>
                      <div className="space-y-4">
                        {cert.description.map((desc, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle size={18} className="text-indigo-400 flex-shrink-0 mt-1" />
                            <p className="text-gray-300 leading-relaxed">{desc}</p>
                          </div>
                        ))}
                      </div>
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