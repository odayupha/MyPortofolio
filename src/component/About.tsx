export const dynamic = "force-dynamic";
import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap } from 'lucide-react';

const About = () => {
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
    <section ref={sectionRef} id="about" className="py-20 lg:py-28 bg-sand relative overflow-hidden">
      {/* Technical Callout */}


      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[3px] bg-orange" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-forest tracking-tighter">
              About <span className="font-serif italic text-orange">Me</span>
            </h2>
          </div>

          {/* About + Education Side by Side */}
          <div className={`grid lg:grid-cols-[1.4fr,1fr] gap-8 mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Profile Text */}
            <div className="bg-paper border-2 border-forest shadow-hard p-8">
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-xl font-bold text-forest">Professional Profile</h3>
                <div className="flex-1 h-[2px] bg-forest/10" />
              </div>
              <div className="space-y-5">
                <p className="text-base text-forest/65 leading-relaxed">
                  Results-oriented <span className="text-forest font-bold">Automation Engineering</span> student with expertise in software development and robotics. Passionate about applying automation technology to enhance efficiency within the Oil & Gas and Renewable Energy industries. Combining technical skills in UI/UX and software engineering to develop intuitive, high-performance systems for complex industrial challenges.
                </p>
                <p className="text-base text-forest/65 leading-relaxed">
                  Beyond the technical field, I am also passionate about leadership and event organization, having actively contributed to planning and executing various academic and student activities across multiple institutions.
                </p>
              </div>
            </div>

            {/* Education - Compact beside About */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap className="text-orange" size={22} />
                <h3 className="text-xl font-bold text-forest">Education</h3>
              </div>

              <div className="bg-paper border-2 border-forest shadow-hard-sm p-6">
                <div className="font-mono text-[10px] text-orange tracking-[0.1em] mb-2">AUG 2023 — PRESENT</div>
                <h4 className="text-lg font-bold text-forest mb-1">Diponegoro University</h4>
                <p className="text-forest/60 text-sm">Bachelor of Applied Science</p>
                <p className="text-forest/40 text-sm mb-3">Automation Engineering Technology</p>
                <span className="inline-block bg-forest text-sand px-3 py-1 font-mono text-[10px] font-bold tracking-wider">SEMESTER 6</span>
              </div>

              <div className="bg-paper border-2 border-forest shadow-hard-sm p-6">
                <div className="font-mono text-[10px] text-forest/40 tracking-[0.1em] mb-2">JUN 2020 — JUL 2023</div>
                <h4 className="text-lg font-bold text-forest mb-1">SMA N 8 Semarang</h4>
                <p className="text-forest/60 text-sm">Senior High School — Science & Mathematics</p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default About;