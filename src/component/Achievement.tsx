import React, { useEffect, useRef, useState } from 'react';
import { Award, Trophy, Star, Calendar, MapPin, Users } from 'lucide-react';

interface Achievement {
  year: string;
  title: string;
  organization: string;
  category: string;
  position: string;
  level: string;
  icon: any;
  description: string;
  badge: string;
  location: string;
  participants: string;
  image?: string;
}

const Achievement = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ awards: 0, competitions: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            animateCounters();
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

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounters({
        awards: Math.floor(2 * progress),
        competitions: Math.floor(2 * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters({ awards: 2, competitions: 2 });
      }
    }, interval);
  };

  const achievements: Achievement[] = [
    {
      year: '2024',
      title: 'Essay Competition - 2nd Place',
      organization: 'Universitas Diponegoro',
      category: 'Academic Competition',
      position: 'Silver Medalist',
      level: 'University Level',
      icon: Trophy,
      description: 'Achieved 2nd place in the Essay Competition at Diponegoro University, demonstrating strong analytical and writing skills on contemporary topics',
      badge: '🥈',
      location: 'Semarang, Indonesia',
      participants: '50+ Participants',
      image: '/essai.jpeg'
    },
    {
      year: '2024',
      title: 'KRTI (Kontes Robot Terbang Indonesia)',
      organization: 'Kementerian Pendidikan Indonesia',
      category: 'Robotics Competition',
      position: 'Participant',
      level: 'National Level',
      icon: Award,
      description: 'Participated in the prestigious Indonesian Flying Robot Contest (KRTI), showcasing technical skills in autonomous flying systems and robotics engineering',
      badge: '🤖',
      location: 'Indonesia',
      participants: '100+ Teams',
      image: '/krti.jpeg'
    }
  ];

  return (
    <section ref={sectionRef} id="achievement" className="py-24 bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-fuchsia-400/10 rounded-full blur-3xl"></div>
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
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300 text-sm font-medium">Recognition</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-300">Achievements</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-fuchsia-400 rounded-full mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl">
              Academic and technical competitions demonstrating excellence in robotics and analytical thinking
            </p>
          </div>

          {/* Achievement Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-purple-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Image Section */}
                <div className="relative h-64 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
                  {achievement.image ? (
                    <img 
                      src={achievement.image} 
                      alt={achievement.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-8xl">{achievement.badge}</div>
                    </div>
                  )}
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                  
                  {/* Level Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-gradient-to-r from-purple-500 to-fuchsia-500 px-4 py-2 rounded-full text-white text-sm font-bold shadow-lg shadow-purple-500/50">
                      {achievement.level}
                    </div>
                  </div>

                  {/* Badge Icon */}
                  <div className="absolute bottom-4 left-4 text-5xl">
                    {achievement.badge}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-300 mb-3">
                    {achievement.title}
                  </h3>

                  {/* Organization */}
                  <div className="flex items-center gap-2 text-white/90 font-semibold mb-4">
                    <achievement.icon size={18} className="text-purple-400" />
                    <span>{achievement.organization}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {achievement.description}
                  </p>

                  {/* Info Grid */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                    <div>
                      <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                        <MapPin size={14} />
                        <span>Location</span>
                      </div>
                      <p className="text-white font-semibold text-sm">{achievement.location}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                        <Calendar size={14} />
                        <span>Year</span>
                      </div>
                      <p className="text-white font-semibold text-sm">{achievement.year}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                        <Users size={14} />
                        <span>Scale</span>
                      </div>
                      <p className="text-white font-semibold text-sm">{achievement.participants}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                        <Trophy size={14} />
                        <span>Position</span>
                      </div>
                      <p className="text-white font-semibold text-sm">{achievement.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className={`grid sm:grid-cols-2 gap-6 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {[
              { 
                value: counters.awards, 
                label: 'Academic Awards',
                icon: Trophy 
              },
              { 
                value: counters.competitions, 
                label: 'Competitions',
                icon: Star 
              }
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-indigo-500/50 transition-all p-8"
              >
                <div className="text-center">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/50">
                    <stat.icon className="text-white" size={28} strokeWidth={2.5} />
                  </div>

                  {/* Value */}
                  <div className="text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-300">
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div className="text-gray-300 font-bold text-sm uppercase tracking-wider">
                    {stat.label}
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

export default Achievement;