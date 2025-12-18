import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import { Code, Cpu, Zap, Wrench, Users, MessageSquare, Clock, Target } from 'lucide-react';
const Skills = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [skillProgress, setSkillProgress] = useState(false);
    const sectionRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    setTimeout(() => setSkillProgress(true), 300);
                }
            });
        }, { threshold: 0.1 });
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
    return (_jsxs("section", { ref: sectionRef, id: "skills", className: "py-24 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 relative overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0", children: [_jsx("div", { className: "absolute top-20 left-20 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" }), _jsx("div", { className: "absolute bottom-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" })] }), _jsx("div", { className: "absolute inset-0 opacity-[0.02]", children: _jsx("div", { className: "absolute inset-0", style: {
                        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                        backgroundSize: '80px 80px'
                    } }) }), _jsx("div", { className: "container mx-auto px-6 relative z-10", children: _jsxs("div", { className: "max-w-6xl mx-auto", children: [_jsxs("div", { className: `mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`, children: [_jsxs("div", { className: "inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full mb-6", children: [_jsx("div", { className: "w-2 h-2 bg-indigo-400 rounded-full" }), _jsx("span", { className: "text-gray-300 text-sm font-medium", children: "Capabilities" })] }), _jsxs("h2", { className: "text-5xl md:text-6xl font-bold text-white mb-4", children: ["Skills & ", _jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400", children: "Expertise" })] }), _jsx("div", { className: "w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full" })] }), _jsxs("div", { className: "grid lg:grid-cols-[1fr,1.2fr] gap-12", children: [_jsxs("div", { className: `transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`, children: [_jsxs("div", { className: "bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all", children: [_jsx("h3", { className: "text-2xl font-bold text-white mb-8", children: "Technical Skills" }), _jsx("div", { className: "space-y-6", children: technicalSkills.map((skill, index) => (_jsxs("div", { children: [_jsxs("div", { className: "flex justify-between items-baseline mb-3", children: [_jsxs("div", { children: [_jsx("span", { className: "font-medium text-white", children: skill.name }), _jsxs("span", { className: "text-sm text-gray-400 ml-2", children: ["\u2022 ", skill.category] })] }), _jsxs("span", { className: "text-sm font-bold text-indigo-400", children: [skill.level, "%"] })] }), _jsx("div", { className: "h-2 bg-white/10 rounded-full relative overflow-hidden", children: _jsx("div", { className: "absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full transition-all duration-1500 ease-out", style: {
                                                                        width: skillProgress ? `${skill.level}%` : '0%',
                                                                        transitionDelay: `${index * 100}ms`
                                                                    }, children: _jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" }) }) })] }, index))) })] }), _jsxs("div", { className: "mt-8 bg-gradient-to-br from-indigo-600/20 to-cyan-600/20 backdrop-blur-md border border-indigo-500/30 rounded-2xl p-8", children: [_jsx("h3", { className: "text-2xl font-bold text-white mb-6", children: "Languages" }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex justify-between items-center pb-4 border-b border-white/10", children: [_jsx("span", { className: "font-medium text-white", children: "Indonesian" }), _jsx("span", { className: "text-gray-300", children: "Native" })] }), _jsxs("div", { className: "flex justify-between items-center", children: [_jsx("span", { className: "font-medium text-white", children: "English" }), _jsx("span", { className: "text-gray-300", children: "Intermediate" })] })] })] })] }), _jsxs("div", { className: `space-y-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`, children: [_jsxs("div", { className: "bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all", children: [_jsx("h3", { className: "text-2xl font-bold text-white mb-8", children: "Soft Skills" }), _jsx("div", { className: "grid grid-cols-2 gap-4", children: softSkills.map((skill, index) => (_jsxs("div", { className: "bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl hover:bg-white/10 hover:border-indigo-500/50 transition-all group", children: [_jsx("div", { className: "w-10 h-10 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform", children: _jsx(skill.icon, { size: 20, className: "text-white" }) }), _jsx("div", { className: "font-medium text-white mb-2", children: skill.name }), _jsxs("div", { className: "text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400", children: [skill.level, "%"] })] }, index))) })] }), _jsxs("div", { className: "bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all", children: [_jsx("h3", { className: "text-2xl font-bold text-white mb-6", children: "Areas of Interest" }), _jsx("div", { className: "space-y-3", children: interests.map((interest, index) => (_jsx("div", { className: "group bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 hover:border-indigo-500/50 transition-all", children: _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-10 h-10 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-indigo-500 group-hover:to-cyan-500 transition-all", children: _jsx(interest.icon, { size: 20, className: "text-indigo-400 group-hover:text-white transition-colors" }) }), _jsxs("div", { className: "flex-1", children: [_jsx("h4", { className: "font-bold text-white text-sm mb-0.5", children: interest.title }), _jsx("p", { className: "text-xs text-gray-400 leading-relaxed", children: interest.description })] })] }) }, index))) })] })] })] }), _jsxs("div", { className: `mt-16 pt-16 border-t border-white/10 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`, children: [_jsx("h3", { className: "text-2xl font-bold text-white mb-8", children: "Core Specializations" }), _jsx("div", { className: "grid md:grid-cols-3 gap-6", children: [
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
                                    ].map((spec, index) => (_jsxs("div", { className: "bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-xl hover:bg-white/10 hover:border-indigo-500/50 transition-all", children: [_jsx("div", { className: "w-14 h-14 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6", children: _jsx(spec.icon, { size: 28, className: "text-white" }) }), _jsx("h4", { className: "text-xl font-bold text-white mb-3", children: spec.title }), _jsx("p", { className: "text-gray-400 leading-relaxed", children: spec.description })] }, index))) })] })] }) }), _jsx("style", { children: `
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      ` })] }));
};
export default Skills;
