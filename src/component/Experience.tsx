import React, { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  type: string;
  description: string;
  skills?: string[];
  image?: string;
}

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) setIsVisible(true); }); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const experiences: ExperienceItem[] = [
    {
      period: 'Feb 2025 - Present',
      role: 'Head of Research and Science',
      organization: 'HIMATRO SV UNDIP',
      location: 'Semarang, Central Java',
      type: 'Leadership',
      description: 'Entrusted with the position of Head of Research and Academic Affairs (Riskel) at the Student Association of Automation Engineering Technology (Himatro). Fully responsible for developing and managing academic initiatives aimed at improving students\' research and academic capabilities.',
      skills: ['Teamwork', 'Motivational Speaking', 'Team Management'],
      image: '/kabid.jpeg'
    },
    {
      period: 'Oct 2023 - Aug 2025',
      role: 'Staff Manufacturing Engineer',
      organization: 'Undip Robotic Development Center',
      location: 'Semarang, Central Java',
      type: 'Technical',
      description: 'Currently a staff member in the manufacturing division of a robotic racing plane project. Contribute to the design, assembly, and optimization of mechanical components. Alongside manufacturing responsibilities, developed strong knowledge in electrical systems.',
      skills: ['Manufacturing Process Improvement', 'Lean Manufacturing', 'Electrical Wiring', 'Microcontrollers', 'PID'],
      image: '/manuf.jpeg'
    },
    {
      period: 'Jun 2024 - Jan 2025',
      role: 'Staff Muda',
      organization: 'Student Executive Board of Vocational School Diponegoro University (BEM SV UNDIP)',
      location: 'Semarang, Central Java',
      type: 'Executive',
      description: 'As the Head of the Sekolah Mawapres Program within the Academic Division of the Student Executive Board of the Vocational School (BEM SV), responsible for leading and overseeing the entire program.',
      skills: ['Leadership', 'Team Leadership', 'Communication', 'Public Speaking'],
      image: '/bem.jpeg'
    },
    {
      period: 'Jun 2025 - Aug 2025',
      role: 'Software Developer',
      organization: 'PT. PERMALAT BERDIKARI JAYA',
      location: 'Semarang, Central Java - Internship',
      type: 'Internship',
      description: 'As a Software Engineer intern at PT. PERMALAT BERDIKARI JAYA, responsible for contributing to system and technology solution development projects. Focus was on UI/UX design, web development, and SCADA implementation.',
      skills: ['Software Development', 'Visual Basic', 'TypeScript', 'React.js', 'SCADA developer'],
      image: '/scada.png'
    },
    {
      period: 'Jul 2025 - Jul 2025',
      role: 'Event Coordinator',
      organization: 'Wahana Kemalaniaga Makmur (WAKENI)',
      location: 'Semarang, Central Java',
      type: 'Event',
      description: 'Contributed as a coordinator at AGRIMAT & Jateng Cold Chain Expo 2025 in Universitas Diponegoro, Semarang. This event brought together stakeholders from academia, industry, and government.',
      skills: ['Event Planning', 'Communication', 'Corporate Events'],
      image: '/wakeni.jpeg'
    }
  ];

  return (
    <section ref={sectionRef} id="experience" className="py-20 lg:py-28 bg-sand relative overflow-hidden">


      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[3px] bg-orange" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-forest tracking-tighter">
              Professional <span className="font-serif italic text-orange">Experience</span>
            </h2>
          </div>

          {/* Experience List - Hover to reveal */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative border-b-2 border-forest/15 last:border-b-0"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Main Row - Always Visible */}
                <div className={`py-8 flex items-start gap-5 cursor-default transition-all duration-200 px-6 -mx-6 ${
                  hoveredIndex === index ? 'bg-paper border-l-4 border-l-orange pl-8' : ''
                }`}>
                  <span className="font-mono text-base font-bold text-forest/20 mt-1 w-8 flex-shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className={`text-2xl md:text-3xl font-bold transition-colors duration-200 ${
                      hoveredIndex === index ? 'text-orange' : 'text-forest'
                    }`}>{exp.role}</h3>
                    <p className="text-forest/50 text-base font-medium">{exp.organization}</p>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="font-mono text-xs text-forest/30 hidden md:block">{exp.period}</span>
                    <span className="inline-block px-3 py-1 border-2 border-forest/20 font-mono text-xs font-bold text-forest/50 tracking-wider">{exp.type.toUpperCase()}</span>
                  </div>
                </div>

                {/* Hover Content - Slides in */}
                <div className={`overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  hoveredIndex === index ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="pb-8 pl-6 md:pl-[3.5rem]">
                    <div className="bg-paper border-2 border-forest shadow-hard-sm p-8">
                      <div className="grid lg:grid-cols-[250px,1fr] gap-8">
                        {/* Image */}
                        {exp.image && (
                          <div className="img-zoom-container border-2 border-forest overflow-hidden aspect-video lg:aspect-[4/3]">
                            <img src={exp.image} alt={exp.organization} className="w-full h-full object-cover" />
                          </div>
                        )}

                        {/* Details */}
                        <div>
                          <div className="flex items-center gap-4 text-forest/40 text-base mb-4 font-mono text-xs">
                            <span className="flex items-center gap-1.5">
                              <Calendar size={14} />
                              {exp.period}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <MapPin size={14} />
                              {exp.location}
                            </span>
                          </div>
                          <p className="text-forest/60 leading-relaxed text-base mb-5">{exp.description}</p>
                          {exp.skills && (
                            <div className="flex flex-wrap gap-2">
                              {exp.skills.map((skill, idx) => (
                                <span key={idx} className="border-2 border-forest/20 text-forest/60 px-3 py-1.5 font-mono text-xs font-bold tracking-wider">
                                  {skill.toUpperCase()}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;