import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, X, Building2, Calendar, ExternalLink } from 'lucide-react';

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
  const [activeIndex, setActiveIndex] = useState(0);
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

            {/* Featured Project Showcase */}
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

              {/* Main Featured Area */}
              <div className="grid lg:grid-cols-[1fr,1.1fr] gap-0 bg-paper border-2 border-sand/30 shadow-[8px_8px_0px_#FF5C00] mb-6">
                {/* Project Image */}
                <div className="relative h-72 lg:h-auto lg:min-h-[420px] img-zoom-container overflow-hidden border-b-2 lg:border-b-0 lg:border-r-2 border-forest/10">
                  {projects[activeIndex].imageUrl ? (
                    <img
                      src={projects[activeIndex].imageUrl}
                      alt={projects[activeIndex].title}
                      className="w-full h-full object-cover transition-all duration-700"
                      key={activeIndex}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-sand">
                      <div className="text-8xl">{projects[activeIndex].image}</div>
                    </div>
                  )}
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-forest text-sand font-mono text-[10px] font-bold tracking-wider border border-sand/20">
                      {projects[activeIndex].category.toUpperCase()}
                    </span>
                  </div>
                  {/* Project Number */}
                  <div className="absolute bottom-4 left-4 font-mono text-[11px] text-sand/80 bg-forest/70 backdrop-blur-sm px-3 py-1.5 border border-sand/20">
                    PRJ_{String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 mb-5">
                      <div className="flex items-center gap-2 text-forest/40 font-mono text-[10px]">
                        <Building2 size={12} className="text-orange" />
                        <span>{projects[activeIndex].company}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-forest tracking-tight mb-4 leading-tight">
                      {projects[activeIndex].title}
                    </h3>

                    {/* Description */}
                    <p className="text-forest/55 text-sm md:text-base leading-relaxed mb-6 line-clamp-4">
                      {projects[activeIndex].shortDesc}
                    </p>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <div className="font-mono text-[9px] text-forest/30 tracking-[0.15em] mb-3">TECH STACK</div>
                      <div className="flex flex-wrap gap-2">
                        {projects[activeIndex].tech.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-sand border border-forest/15 text-forest/60 font-mono text-[10px] font-bold tracking-wider">
                            {tech.toUpperCase()}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Period */}
                    <div className="flex items-center gap-2 text-forest/35 font-mono text-[10px] mb-8">
                      <Calendar size={12} />
                      <span>{projects[activeIndex].period}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => setSelectedProject(projects[activeIndex])}
                    className="arrow-hover w-full py-4 bg-orange text-sand font-bold text-sm border-2 border-forest flex items-center justify-center gap-2 shadow-hard-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#2D3A27] transition-all duration-150"
                  >
                    <span>VIEW FULL DETAILS</span>
                    <ArrowRight size={16} className="arrow-icon" />
                  </button>
                </div>
              </div>

              {/* Project Selector Tabs */}
              <div className="grid grid-cols-3 gap-0">
                {projects.map((project, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`group relative text-left p-5 md:p-6 border-2 transition-all duration-200 ${
                      activeIndex === index
                        ? 'bg-paper border-sand/40 shadow-[4px_4px_0px_#FF5C00]'
                        : 'bg-forest/60 border-sand/10 hover:bg-forest/40 hover:border-sand/25'
                    } ${index < projects.length - 1 ? 'border-r-0' : ''}`}
                  >
                    {/* Active indicator line */}
                    <div className={`absolute top-0 left-0 right-0 h-[3px] transition-all duration-300 ${
                      activeIndex === index ? 'bg-orange' : 'bg-transparent'
                    }`} />

                    {/* Tab number */}
                    <div className={`font-mono text-[10px] font-bold mb-2 transition-colors ${
                      activeIndex === index ? 'text-orange' : 'text-sand/30'
                    }`}>
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    {/* Tab title */}
                    <h4 className={`font-bold text-sm md:text-base mb-1 transition-colors leading-tight ${
                      activeIndex === index ? 'text-forest' : 'text-sand/70 group-hover:text-sand'
                    }`}>
                      {project.title}
                    </h4>

                    {/* Tab category */}
                    <span className={`font-mono text-[9px] tracking-wider transition-colors ${
                      activeIndex === index ? 'text-forest/40' : 'text-sand/25'
                    }`}>
                      {project.category.toUpperCase()}
                    </span>
                  </button>
                ))}
              </div>
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
            <div className="relative h-56 md:h-72 img-zoom-container bg-forest/5 overflow-hidden border-b-2 border-forest">
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