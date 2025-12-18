import React, { useEffect, useRef, useState } from 'react';
import { Code, Cpu, Zap, Wrench, Users, MessageSquare, Clock, Target } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [skillProgress, setSkillProgress] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setTimeout(() => setSkillProgress(true), 300);
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

  const technicalSkills = [
    { name: 'Arduino', level: 85, category: 'Microcontroller' },
    { name: 'EAGLE', level: 50, category: 'PCB Design' },
    { name: 'STM32', level: 35, category: 'Embedded Systems' },
    { name: 'PID Control', level: 70, category: 'Control Systems' },
    { name: 'IoT & SCADA', level: 65, category: 'Industrial Systems' },
    { name: 'Visual Basic', level: 60, category: 'Programming' }
  ];

  const softSkills = [
    { name: 'Microsoft Office', level: 90, icon: Code },
    { name: 'Teamwork', level: 90, icon: Users },
    { name: 'Communication', level: 90, icon: MessageSquare },
    { name: 'Time Management', level: 85, icon: Clock }
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
    <section ref={sectionRef} id="skills" className="py-24 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
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
          {/* Section Header */}
          <div className={`mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
              <span className="text-gray-300 text-sm font-medium">Capabilities</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Expertise</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-[1fr,1.2fr] gap-12">
            {/* Technical Skills */}
            <div className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
                <h3 className="text-2xl font-bold text-white mb-8">Technical Skills</h3>
                
                <div className="space-y-6">
                  {technicalSkills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-baseline mb-3">
                        <div>
                          <span className="font-medium text-white">{skill.name}</span>
                          <span className="text-sm text-gray-400 ml-2">• {skill.category}</span>
                        </div>
                        <span className="text-sm font-bold text-indigo-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full relative overflow-hidden">
                        <div 
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full transition-all duration-1500 ease-out"
                          style={{ 
                            width: skillProgress ? `${skill.level}%` : '0%',
                            transitionDelay: `${index * 100}ms`
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="mt-8 bg-gradient-to-br from-indigo-600/20 to-cyan-600/20 backdrop-blur-md border border-indigo-500/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Languages</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="font-medium text-white">Indonesian</span>
                    <span className="text-gray-300">Native</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-white">English</span>
                    <span className="text-gray-300">Intermediate</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Soft Skills & Interests */}
            <div className={`space-y-8 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              {/* Soft Skills */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
                <h3 className="text-2xl font-bold text-white mb-8">Soft Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  {softSkills.map((skill, index) => (
                    <div 
                      key={index}
                      className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl hover:bg-white/10 hover:border-indigo-500/50 transition-all group"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <skill.icon size={20} className="text-white" />
                      </div>
                      <div className="font-medium text-white mb-2">{skill.name}</div>
                      <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">{skill.level}%</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Areas of Interest */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
                <h3 className="text-2xl font-bold text-white mb-6">Areas of Interest</h3>
                
                <div className="space-y-3">
                  {interests.map((interest, index) => (
                    <div 
                      key={index}
                      className="group bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 hover:border-indigo-500/50 transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-indigo-500 group-hover:to-cyan-500 transition-all">
                          <interest.icon size={20} className="text-indigo-400 group-hover:text-white transition-colors" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-white text-sm mb-0.5">
                            {interest.title}
                          </h4>
                          <p className="text-xs text-gray-400 leading-relaxed">
                            {interest.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Specializations */}
          <div className={`mt-16 pt-16 border-t border-white/10 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-2xl font-bold text-white mb-8">Core Specializations</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'ESC Development',
                  description: 'Specialist in Electronic Speed Control for UAV optimization',
                  icon: Zap
                },
                {
                  title: 'UAV Systems',
                  description: 'Fixed-wing and rotary UAV design and manufacturing',
                  icon: Target
                },
                {
                  title: 'IoT & Automation',
                  description: 'Industrial automation and IoT system integration',
                  icon: Cpu
                }
              ].map((spec, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-xl hover:bg-white/10 hover:border-indigo-500/50 transition-all"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                    <spec.icon size={28} className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{spec.title}</h4>
                  <p className="text-gray-400 leading-relaxed">{spec.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;