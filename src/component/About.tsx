import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, Briefcase, Target, Award } from 'lucide-react';

const About = () => {
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

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 relative overflow-hidden">
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
              <span className="text-gray-300 text-sm font-medium">Get to Know Me</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-[1.2fr,1fr] gap-12">
            {/* Left Column - Profile & Education */}
            <div className={`space-y-8 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              {/* Profile Card */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Target size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Profile</h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                Results-oriented Automation Engineering student with expertise in software development and robotics. Passionate about applying automation technology to enhance efficiency within the Oil & Gas and Renewable Energy industries. Combining technical skills in UI/UX and software engineering to develop intuitive, high-performance systems for complex industrial challenges.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Beyond the technical field, I am also passionate about leadership and event organization, having 
                  actively contributed to planning and executing various academic and student activities.
                </p>
              </div>

              {/* Expertise Card */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <Briefcase size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Expertise</h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: '🤖', title: 'Robotics' },
                    { icon: '✈️', title: 'UAV Tech' },
                    { icon: '⚡', title: 'Electrical' },
                    { icon: '🏭', title: 'Manufacturing' },
                    { icon: '💻', title: 'UI/UX Design' },
                    { icon: '🔧', title: 'SCADA' }
                  ].map((item, index) => (
                    <div key={index} className="bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 hover:border-indigo-500/50 transition-all">
                      <div className="text-3xl mb-2">{item.icon}</div>
                      <div className="font-semibold text-white">{item.title}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Education & Projects */}
            <div className={`space-y-8 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              {/* Education Card */}
              <div className="bg-gradient-to-br from-indigo-600/20 to-cyan-600/20 backdrop-blur-md border border-indigo-500/30 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <GraduationCap size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Education</h3>
                </div>
                <div className="space-y-6">
                  <div className="relative pl-6 border-l-2 border-white/20">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-white rounded-full"></div>
                    <div className="text-sm text-indigo-200 mb-2">Aug 2023 - Present</div>
                    <h4 className="text-xl font-bold text-white mb-2">Diponegoro University</h4>
                    <p className="text-gray-200 mb-1">Bachelor of Applied Science</p>
                    <p className="text-gray-300">Automation Engineering Technology</p>
                    <div className="mt-3 inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-white">
                      Semester 5
                    </div>
                  </div>

                  <div className="relative pl-6 border-l-2 border-white/10">
                    <div className="absolute -left-1.5 top-0 w-3 h-3 bg-white/50 rounded-full"></div>
                    <div className="text-sm text-indigo-200 mb-2">Jun 2020 - Jul 2023</div>
                    <h4 className="text-lg font-bold text-white mb-1">SMA N 8 Semarang</h4>
                    <p className="text-gray-300">Senior High School - Science and Mathematics</p>
                  </div>
                </div>
              </div>

              {/* Key Projects */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                    <Award size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Key Projects</h3>
                </div>

                <div className="space-y-3">
                  {[
                    'Line Following Robot',
                    'Automatic Trash Bin with Arduino',
                    'Automatic Soil Watering System',
                    'ADC (Analog to Digital Converter)',
                    'Full Wave Rectifier Circuit',
                    'SCADA System Development',
                    'Company Profile Website'
                  ].map((project, index) => (
                    <div key={index} className="flex items-start gap-3 group hover:bg-white/5 p-3 rounded-xl transition-all">
                      <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">{index + 1}</span>
                      </div>
                      <p className="text-gray-300 font-medium group-hover:text-white transition-colors">{project}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;