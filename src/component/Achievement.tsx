import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Users } from 'lucide-react';

interface AchievementItem {
  year: string; title: string; organization: string; category: string;
  position: string; level: string; description: string; badge: string;
  location: string; participants: string; image?: string;
}

const Achievement = () => {
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


  const achievements: AchievementItem[] = [
    { year: '2024', title: 'Essay Competition - 2nd Place', organization: 'Universitas Diponegoro', category: 'Academic Competition', position: 'Silver Medalist', level: 'University Level', description: 'Achieved 2nd place in the Essay Competition at Diponegoro University, demonstrating strong analytical and writing skills on contemporary topics', badge: '🥈', location: 'Semarang, Indonesia', participants: '50+ Participants', image: '/essai.jpeg' },
    { year: '2024', title: 'KRTI (Kontes Robot Terbang Indonesia)', organization: 'Kementerian Pendidikan Indonesia', category: 'Robotics Competition', position: 'Participant', level: 'National Level', description: 'Participated in the prestigious Indonesian Flying Robot Contest (KRTI), showcasing technical skills in autonomous flying systems and robotics engineering', badge: '🤖', location: 'Indonesia', participants: '100+ Teams', image: '/krti.jpeg' }
  ];

  return (
    <section ref={sectionRef} id="achievement" className="py-20 lg:py-28 bg-sand relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-[10px] text-forest/40 tracking-[0.15em]"></span>
              <div className="w-8 h-[3px] bg-orange" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-forest tracking-tighter">
              My <span className="font-serif italic text-orange">Achievements</span>
            </h2>
            <p className="text-base text-forest/50 max-w-3xl mt-4">
              Academic and technical competitions demonstrating excellence in robotics and analytical thinking
            </p>
          </div>

          {/* Bento-style achievement cards */}
          <div className={`grid md:grid-cols-2 gap-4 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {achievements.map((a, index) => (
              <div key={index} className="card-press bg-paper overflow-hidden">
                <div className="relative h-52 img-zoom-container border-b-2 border-forest">
                  {a.image ? (
                    <img src={a.image} alt={a.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center"><div className="text-8xl">{a.badge}</div></div>
                  )}
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1.5 bg-forest text-sand font-mono text-[10px] font-bold tracking-wider">{a.level.toUpperCase()}</span>
                  </div>
                  <div className="absolute bottom-3 left-3 text-4xl drop-shadow-lg">{a.badge}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-[9px] text-forest/30">[ACH_{String(index + 1).padStart(2, '0')}]</span>
                    <span className="font-mono text-[10px] text-orange font-bold">{a.year}</span>
                  </div>
                  <h3 className="text-lg font-bold text-forest mb-2">{a.title}</h3>
                  <p className="text-forest/50 text-sm font-medium mb-3">{a.organization}</p>
                  <p className="text-forest/50 text-sm leading-relaxed mb-5">{a.description}</p>
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t-2 border-forest/10">
                    {[
                      { icon: MapPin, label: 'Location', val: a.location },
                      { icon: Users, label: 'Scale', val: a.participants },
                    ].map((info, i) => (
                      <div key={i}>
                        <div className="flex items-center gap-1.5 text-forest/30 font-mono text-[9px] mb-1"><info.icon size={10} />{info.label.toUpperCase()}</div>
                        <p className="text-forest font-medium text-sm">{info.val}</p>
                      </div>
                    ))}
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