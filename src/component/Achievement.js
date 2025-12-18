import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import { Award, Trophy, Star, Calendar, MapPin, Users } from 'lucide-react';
const Achievement = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [counters, setCounters] = useState({ awards: 0, competitions: 0 });
    const sectionRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    animateCounters();
                }
            });
        }, { threshold: 0.1 });
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
    const achievements = [
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
    return (_jsxs("section", { ref: sectionRef, id: "achievement", className: "py-24 bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 relative overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0", children: [_jsx("div", { className: "absolute top-20 left-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" }), _jsx("div", { className: "absolute bottom-20 right-20 w-96 h-96 bg-fuchsia-400/10 rounded-full blur-3xl" })] }), _jsx("div", { className: "absolute inset-0 opacity-[0.02]", children: _jsx("div", { className: "absolute inset-0", style: {
                        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                        backgroundSize: '80px 80px'
                    } }) }), _jsx("div", { className: "container mx-auto px-6 relative z-10", children: _jsxs("div", { className: "max-w-6xl mx-auto", children: [_jsxs("div", { className: `mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`, children: [_jsxs("div", { className: "inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full mb-6", children: [_jsx("div", { className: "w-2 h-2 bg-purple-400 rounded-full animate-pulse" }), _jsx("span", { className: "text-gray-300 text-sm font-medium", children: "Recognition" })] }), _jsxs("h2", { className: "text-5xl md:text-6xl font-bold text-white mb-4", children: ["My ", _jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-300", children: "Achievements" })] }), _jsx("div", { className: "w-24 h-1 bg-gradient-to-r from-purple-400 to-fuchsia-400 rounded-full mb-6" }), _jsx("p", { className: "text-xl text-gray-300 max-w-3xl", children: "Academic and technical competitions demonstrating excellence in robotics and analytical thinking" })] }), _jsx("div", { className: "grid md:grid-cols-2 gap-8 mb-16", children: achievements.map((achievement, index) => (_jsxs("div", { className: `group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-purple-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`, style: { transitionDelay: `${index * 200}ms` }, children: [_jsxs("div", { className: "relative h-64 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden", children: [achievement.image ? (_jsx("img", { src: achievement.image, alt: achievement.title, className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" })) : (_jsx("div", { className: "w-full h-full flex items-center justify-center", children: _jsx("div", { className: "text-8xl", children: achievement.badge }) })), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" }), _jsx("div", { className: "absolute top-4 right-4", children: _jsx("div", { className: "bg-gradient-to-r from-purple-500 to-fuchsia-500 px-4 py-2 rounded-full text-white text-sm font-bold shadow-lg shadow-purple-500/50", children: achievement.level }) }), _jsx("div", { className: "absolute bottom-4 left-4 text-5xl", children: achievement.badge })] }), _jsxs("div", { className: "p-8", children: [_jsx("h3", { className: "text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-300 mb-3", children: achievement.title }), _jsxs("div", { className: "flex items-center gap-2 text-white/90 font-semibold mb-4", children: [_jsx(achievement.icon, { size: 18, className: "text-purple-400" }), _jsx("span", { children: achievement.organization })] }), _jsx("p", { className: "text-gray-300 leading-relaxed mb-6", children: achievement.description }), _jsxs("div", { className: "grid grid-cols-2 gap-4 pt-4 border-t border-white/10", children: [_jsxs("div", { children: [_jsxs("div", { className: "flex items-center gap-2 text-gray-400 text-sm mb-1", children: [_jsx(MapPin, { size: 14 }), _jsx("span", { children: "Location" })] }), _jsx("p", { className: "text-white font-semibold text-sm", children: achievement.location })] }), _jsxs("div", { children: [_jsxs("div", { className: "flex items-center gap-2 text-gray-400 text-sm mb-1", children: [_jsx(Calendar, { size: 14 }), _jsx("span", { children: "Year" })] }), _jsx("p", { className: "text-white font-semibold text-sm", children: achievement.year })] }), _jsxs("div", { children: [_jsxs("div", { className: "flex items-center gap-2 text-gray-400 text-sm mb-1", children: [_jsx(Users, { size: 14 }), _jsx("span", { children: "Scale" })] }), _jsx("p", { className: "text-white font-semibold text-sm", children: achievement.participants })] }), _jsxs("div", { children: [_jsxs("div", { className: "flex items-center gap-2 text-gray-400 text-sm mb-1", children: [_jsx(Trophy, { size: 14 }), _jsx("span", { children: "Position" })] }), _jsx("p", { className: "text-white font-semibold text-sm", children: achievement.position })] })] })] })] }, index))) }), _jsx("div", { className: `grid sm:grid-cols-2 gap-6 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`, children: [
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
                            ].map((stat, index) => (_jsx("div", { className: "bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-indigo-500/50 transition-all p-8", children: _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "w-14 h-14 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/50", children: _jsx(stat.icon, { className: "text-white", size: 28, strokeWidth: 2.5 }) }), _jsx("div", { className: "text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-300", children: stat.value }), _jsx("div", { className: "text-gray-300 font-bold text-sm uppercase tracking-wider", children: stat.label })] }) }, index))) })] }) })] }));
};
export default Achievement;
