import React, { useEffect, useRef, useState } from 'react';
import { Code, Cpu, Zap, Wrench, Users, MessageSquare, Clock, Target } from 'lucide-react';

type SkillLevel = 'Expert' | 'Advanced' | 'Intermediate' | 'Beginner';

const levelConfig: Record<SkillLevel, { color: string; bg: string; border: string; dots: number }> = {
  Expert: { color: 'text-forest', bg: 'bg-forest', border: 'border-forest', dots: 4 },
  Advanced: { color: 'text-orange', bg: 'bg-orange', border: 'border-orange', dots: 3 },
  Intermediate: { color: 'text-forest/70', bg: 'bg-forest/40', border: 'border-forest/40', dots: 2 },
  Beginner: { color: 'text-forest/40', bg: 'bg-forest/20', border: 'border-forest/20', dots: 1 },
};

const LevelIndicator = ({ level }: { level: SkillLevel }) => {
  const cfg = levelConfig[level];
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1">
        {[1, 2, 3, 4].map((dot) => (
          <div
            key={dot}
            className={`w-2 h-2 rounded-full transition-all ${dot <= cfg.dots ? cfg.bg : 'bg-forest/10'
              }`}
          />
        ))}
      </div>
      <span className={`font-mono text-[10px] font-bold tracking-wider ${cfg.color}`}>
        {level.toUpperCase()}
      </span>
    </div>
  );
};

const Skills = () => {
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

  const technicalSkills: { name: string; level: SkillLevel; category: string }[] = [
    { name: 'SCADA Systems & HMI Design', level: 'Expert', category: '' },
    { name: 'Industrial IoT (IIoT) & Energy Digitalization', level: 'Intermediate', category: '' },
    { name: 'Full-Stack Software Development', level: 'Expert', category: '' },
    { name: 'PID Control', level: 'Advanced', category: '' },
    { name: 'Database & API Management:', level: 'Advanced', category: '' },
    { name: 'Workflow Automation & AI Integration', level: 'Intermediate', category: '' }
  ];

  const softSkills: { name: string; level: SkillLevel; icon: any }[] = [
    { name: 'Leadership', level: 'Expert', icon: Code },
    { name: 'Teamwork', level: 'Expert', icon: Users },
    { name: 'Communication', level: 'Expert', icon: MessageSquare },
    { name: 'Time Management', level: 'Expert', icon: Clock }
  ];

  const interests = [
    { title: 'Technology Development', icon: Cpu, description: 'Innovation in automation and robotics' },
    { title: 'Robotics', icon: Target, description: 'Autonomous systems and UAV technology' },
    { title: 'Aircraft Electrical Systems', icon: Zap, description: 'ESC development and optimization' },
    { title: 'Renewable Energy', icon: Wrench, description: 'Sustainable energy solutions' },
    { title: 'Manufacturing & Production', icon: Code, description: 'Process optimization and quality control' },
    { title: 'Oil & Gas', icon: Cpu, description: 'Production systems and pipeline analysis' }
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-20 lg:py-28 bg-sand relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-[10px] text-forest/40 tracking-[0.15em]"></span>
              <div className="w-8 h-[3px] bg-orange" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-forest tracking-tighter">
              Skills & <span className="font-serif italic text-orange">Expertise</span>
            </h2>
          </div>

          <div className={`grid lg:grid-cols-[1fr,1.2fr] gap-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Technical Skills */}
            <div>
              <div className="bg-paper border-2 border-forest shadow-hard p-7">
                <div className="flex items-center gap-3 mb-7">
                  <h3 className="text-lg font-bold text-forest">Technical Skills</h3>
                  <div className="flex-1 h-[2px] bg-forest/10" />
                  <span className="font-mono text-[9px] text-forest/30">[TECH]</span>
                </div>
                <div className="space-y-4">
                  {technicalSkills.map((skill, i) => (
                    <div key={i} className="group flex items-center justify-between py-3 px-4 bg-sand/50 border border-forest/10 hover:border-forest/30 transition-all duration-200 hover:bg-sand">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-2">
                          <span className="font-semibold text-forest text-sm">{skill.name}</span>
                          <span className="font-mono text-[9px] text-forest/30">// {skill.category}</span>
                        </div>
                      </div>
                      <LevelIndicator level={skill.level} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="mt-4 bg-paper border-2 border-forest shadow-hard-sm p-7">
                <div className="flex items-center gap-3 mb-5">
                  <h3 className="text-lg font-bold text-forest">Languages</h3>
                  <span className="font-mono text-[9px] text-forest/30 ml-auto">[LANG]</span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b-2 border-forest/10">
                    <span className="font-semibold text-forest text-sm">Indonesian</span>
                    <span className="font-mono text-[10px] text-orange font-bold">NATIVE</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-forest text-sm">English</span>
                    <span className="font-mono text-[10px] text-forest/50 font-bold">INTERMEDIATE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {/* Soft Skills */}
              <div className="bg-paper border-2 border-forest shadow-hard-sm p-7">
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-lg font-bold text-forest">Soft Skills</h3>
                  <span className="font-mono text-[9px] text-forest/30 ml-auto">[SOFT]</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {softSkills.map((skill, i) => (
                    <div key={i} className="card-press-sm bg-sand p-4 group">
                      <div className="w-8 h-8 bg-forest flex items-center justify-center mb-3 group-hover:bg-orange transition-colors">
                        <skill.icon size={16} className="text-sand" />
                      </div>
                      <div className="font-semibold text-forest text-sm mb-2">{skill.name}</div>
                      <LevelIndicator level={skill.level} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Interests */}
              <div className="bg-paper border-2 border-forest shadow-hard-sm p-7">
                <div className="flex items-center gap-3 mb-5">
                  <h3 className="text-lg font-bold text-forest">Areas of Interest</h3>
                  <span className="font-mono text-[9px] text-forest/30 ml-auto">[INT]</span>
                </div>
                <div className="space-y-0">
                  {interests.map((item, i) => (
                    <div key={i} className="group flex items-center gap-3 py-3 border-b-2 border-forest/10 last:border-b-0 hover:bg-sand/50 transition-colors px-2 -mx-2">
                      <span className="font-mono text-[9px] font-bold text-forest/20 w-5 flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                      <div className="w-7 h-7 bg-forest/5 border border-forest/20 flex items-center justify-center flex-shrink-0 group-hover:bg-orange group-hover:border-orange group-hover:text-sand transition-all">
                        <item.icon size={14} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-forest text-sm">{item.title}</h4>
                        <p className="font-mono text-[9px] text-forest/40">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Specializations */}
          <div className={`mt-12 pt-12 border-t-2 border-forest/15 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-3 mb-8">
              <h3 className="text-lg font-bold text-forest">Core Specializations</h3>
              <div className="flex-1 h-[2px] bg-forest/10" />
              <span className="font-mono text-[9px] text-forest/30">[SPEC]</span>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: 'ESC Development', description: 'Specialist in Electronic Speed Control for UAV optimization', icon: Zap },
                { title: 'UAV Systems', description: 'Fixed-wing and rotary UAV design and manufacturing', icon: Target },
                { title: 'IoT & Automation', description: 'Industrial automation and IoT system integration', icon: Cpu }
              ].map((spec, i) => (
                <div key={i} className="card-press bg-paper p-7 group">
                  <div className="w-11 h-11 bg-orange/10 border-2 border-orange/30 flex items-center justify-center mb-5 group-hover:bg-orange group-hover:border-orange transition-all">
                    <spec.icon size={22} className="text-orange group-hover:text-sand transition-colors" />
                  </div>
                  <h4 className="text-base font-bold text-forest mb-2">{spec.title}</h4>
                  <p className="text-forest/50 text-sm leading-relaxed">{spec.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;