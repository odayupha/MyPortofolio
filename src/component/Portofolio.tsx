import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, X, Building2, Calendar } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  period: string;
  company: string;
  description: string;
  shortDesc: string;
  image: string;
  imageUrl?: string;
  tech: string[];
}

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) setIsVisible(true); }); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelectedProject(null); };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const projects: Project[] = [
    {
      title: 'Company Profile Website',
      category: 'Web Development',
      period: 'Jul 2025 - Jul 2025',
      company: 'PT. PERMALAT BERDIKARI JAYA',
      shortDesc: 'Developed a company profile website to strategically build brand image with modern UI/UX design',
      description: 'As a UI/UX Designer and Web Developer, I developed a company profile website designed to strategically build brand image and innovation. I was responsible for the entire project cycle, from planning the user interface with modern and intuitive design to implementing a dynamic and responsive front-end using React.js and TypeScript. This project successfully created a strong digital asset that not only showcases the company portfolio but also provides a smooth and memorable user experience.',
      image: '🌐',
      imageUrl: '/rei.png',
      tech: ['CSS', 'HTML', 'React.js', 'TypeScript'],
    },
    {
      title: 'SCADA Developer',
      category: 'Software Development',
      period: 'Jun 2025 - Jun 2025',
      company: 'PT. PERMALAT BERDIKARI JAYA',
      shortDesc: 'Developed SCADA application from scratch for monitoring systems using VB.NET and database integration',
      description: 'During my internship, I was responsible for developing a SCADA application from scratch as a final project. I built this application using Visual Studio with VB.NET programming language, aimed at monitoring systems. In the process, I successfully integrated the application with InfluxDB database for time-series data and PostgreSQL for relational data, and designed an intuitive interface. This project not only tested my technical capabilities but also provided direct experience in translating business needs into functional and stable software solutions.',
      image: '📊',
      imageUrl: '/scada.png',
      tech: ['Visual Basic .NET', 'InfluxDB', 'PostgreSQL', 'SCADA'],
    },
    {
      title: 'Miniplant Water Heater IoT',
      category: 'IoT & Embedded Systems',
      period: 'Academic Project',
      company: 'Diponegoro University',
      shortDesc: 'Built an IoT-based water heater miniplant system controlled and monitored remotely using ESP32 and Blynk',
      description: 'Designed and developed a miniplant water heater system with IoT capabilities using ESP32 microcontroller. This project features remote control and real-time monitoring through the Blynk mobile application, allowing users to adjust temperature settings, monitor heating status, and receive alerts. The system demonstrates practical application of embedded systems, IoT protocols, and mobile integration for smart home automation. This project showcases my ability to integrate hardware, firmware programming, and cloud-based IoT platforms to create functional smart devices.',
      image: '♨️',
      imageUrl: '/mini.jpeg',
      tech: ['ESP32', 'Blynk', 'IoT', 'C++', 'Arduino IDE'],
    }
  ];

  return (
    <>
      {/* DARK INDUSTRIAL SECTION */}
      <section ref={sectionRef} id="portfolio" className="py-20 lg:py-28 bg-forest relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-[10px] text-sand/30 tracking-[0.15em]"></span>
                <div className="w-8 h-[3px] bg-orange" />
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-sand tracking-tighter">
                Featured <span className="font-serif italic text-orange">Projects</span>
              </h2>
            </div>

            {/* Bento Grid */}
            <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-4 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`group bg-paper border-2 border-sand/30 cursor-pointer transition-all duration-150 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none ${
                    index === 0 ? 'md:col-span-2 lg:col-span-2 shadow-[6px_6px_0px_#FF5C00]' : 'shadow-[6px_6px_0px_#E6E2D3]'
                  }`}
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Image */}
                  <div className={`relative img-zoom-container bg-forest/5 overflow-hidden ${index === 0 ? 'h-64' : 'h-48'}`}>
                    {project.imageUrl ? (
                      <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center"><div className="text-6xl">{project.image}</div></div>
                    )}
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1.5 bg-forest text-sand font-mono text-[10px] font-bold tracking-wider border border-sand/20">
                        {project.category.toUpperCase()}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3 font-mono text-[9px] text-forest/60 bg-paper/90 px-2 py-1">
                      PRJ_{String(index + 1).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5 border-t-2 border-forest/10">
                    <h3 className="text-lg font-bold text-forest mb-2 group-hover:text-orange transition-colors">{project.title}</h3>
                    <p className="text-forest/50 text-sm leading-relaxed mb-4 line-clamp-2">{project.shortDesc}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((tech, i) => (
                        <span key={i} className="px-2 py-0.5 border border-forest/20 text-forest/50 font-mono text-[10px] font-bold">{tech.toUpperCase()}</span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-0.5 border border-forest/20 text-forest/50 font-mono text-[10px] font-bold">+{project.tech.length - 3}</span>
                      )}
                    </div>
                    <div className="arrow-hover flex items-center gap-2 text-forest/40 group-hover:text-orange text-sm font-bold transition-colors">
                      <span>VIEW PROJECT</span>
                      <ArrowRight size={14} className="arrow-icon" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-forest/80 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
          <div
            className="bg-paper border-2 border-forest shadow-hard max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: 'slide-up 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            <div className="relative h-56 img-zoom-container bg-forest/5 overflow-hidden border-b-2 border-forest">
              {selectedProject.imageUrl ? (
                <img src={selectedProject.imageUrl} alt={selectedProject.title} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-sand"><div className="text-7xl">{selectedProject.image}</div></div>
              )}
              <button onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-paper border-2 border-forest flex items-center justify-center hover:bg-orange hover:text-sand hover:border-orange transition-all z-20">
                <X size={18} />
              </button>
            </div>
            <div className="p-8">
              <span className="font-mono text-[10px] text-forest/30 tracking-[0.15em]">{selectedProject.category.toUpperCase()}</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-forest mt-2 mb-4 tracking-tight">{selectedProject.title}</h2>
              <div className="space-y-2 mb-6 pb-6 border-b-2 border-forest/10">
                <div className="flex items-center gap-3 text-forest/60 font-mono text-[11px]">
                  <Building2 size={14} className="text-orange" /><span>{selectedProject.company}</span>
                </div>
                <div className="flex items-center gap-3 text-forest/40 font-mono text-[11px]">
                  <Calendar size={14} /><span>{selectedProject.period}</span>
                </div>
              </div>
              <p className="text-forest/60 leading-relaxed mb-6">{selectedProject.description}</p>
              <div>
                <h3 className="font-mono text-[10px] text-forest/30 tracking-[0.15em] mb-3">TECHNOLOGIES</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1.5 border-2 border-forest/20 text-forest/60 font-mono text-[10px] font-bold tracking-wider">{tech.toUpperCase()}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;