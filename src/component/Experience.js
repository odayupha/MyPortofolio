import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';
const Experience = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            });
        }, { threshold: 0.1 });
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return () => observer.disconnect();
    }, []);
    const experiences = [
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
            image: '/scada.jpeg'
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
    return (_jsxs("section", { ref: sectionRef, id: "experience", className: "py-24 bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-900 relative overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0", children: [_jsx("div", { className: "absolute top-20 left-20 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" }), _jsx("div", { className: "absolute bottom-20 right-20 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl" })] }), _jsx("div", { className: "absolute inset-0 opacity-[0.02]", children: _jsx("div", { className: "absolute inset-0", style: {
                        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                        backgroundSize: '80px 80px'
                    } }) }), _jsx("div", { className: "container mx-auto px-6 relative z-10", children: _jsxs("div", { className: "max-w-6xl mx-auto", children: [_jsxs("div", { className: `mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`, children: [_jsxs("div", { className: "inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full mb-6", children: [_jsx("div", { className: "w-2 h-2 bg-cyan-400 rounded-full animate-pulse" }), _jsx("span", { className: "text-gray-300 text-sm font-medium", children: "Career Journey" })] }), _jsxs("h2", { className: "text-5xl md:text-6xl font-bold text-white mb-4", children: ["Professional ", _jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300", children: "Experience" })] }), _jsx("div", { className: "w-24 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full" })] }), _jsx("div", { className: "space-y-8", children: experiences.map((exp, index) => (_jsx("div", { className: `group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`, style: { transitionDelay: `${index * 100}ms` }, children: _jsx("div", { className: "bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-cyan-400/50 transition-all hover:shadow-2xl hover:shadow-cyan-500/20", children: _jsxs("div", { className: "grid lg:grid-cols-[300px,1fr] gap-6", children: [_jsxs("div", { className: "relative h-64 lg:h-auto bg-gradient-to-br from-slate-800 to-slate-900", children: [exp.image ? (_jsx("img", { src: exp.image, alt: exp.organization, className: "w-full h-full object-cover" })) : (_jsx("div", { className: "w-full h-full flex items-center justify-center", children: _jsx(Briefcase, { size: 64, className: "text-gray-600" }) })), _jsx("div", { className: "absolute top-4 left-4", children: _jsx("div", { className: "bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 rounded-full text-white text-sm font-semibold shadow-lg shadow-cyan-500/50", children: exp.type }) })] }), _jsxs("div", { className: "p-8", children: [_jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-400 mb-3", children: [_jsx(Calendar, { size: 16, className: "text-cyan-400" }), _jsx("span", { children: exp.period })] }), _jsx("h3", { className: "text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300 mb-3", children: exp.role }), _jsxs("div", { className: "flex items-start gap-2 text-white/90 font-semibold mb-2 text-lg", children: [_jsx(Award, { size: 20, className: "mt-1 flex-shrink-0 text-cyan-400" }), _jsx("span", { children: exp.organization })] }), _jsxs("div", { className: "flex items-center gap-2 text-gray-300 mb-4", children: [_jsx(MapPin, { size: 16, className: "text-teal-400" }), _jsx("span", { children: exp.location })] }), _jsx("p", { className: "text-gray-300 leading-relaxed mb-6", children: exp.description }), exp.skills && exp.skills.length > 0 && (_jsx("div", { className: "flex flex-wrap gap-2", children: exp.skills.map((skill, idx) => (_jsx("span", { className: "px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-gray-300 border border-white/20", children: skill }, idx))) }))] })] }) }) }, index))) })] }) })] }));
};
export default Experience;
