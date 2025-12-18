import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Building2, Calendar, X } from 'lucide-react';
const Portfolio = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
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
    // Close modal on escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape')
                setSelectedProject(null);
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, []);
    const projects = [
        {
            title: 'Company Profile Website',
            category: 'Web Development',
            period: 'Jul 2025 - Jul 2025',
            company: 'PT. PERMALAT BERDIKARI JAYA',
            shortDesc: 'Developed a company profile website to strategically build brand image with modern UI/UX design',
            description: 'As a UI/UX Designer and Web Developer, I developed a company profile website designed to strategically build brand image and innovation. I was responsible for the entire project cycle, from planning the user interface with modern and intuitive design to implementing a dynamic and responsive front-end using React.js and TypeScript. This project successfully created a strong digital asset that not only showcases the company portfolio but also provides a smooth and memorable user experience.',
            image: '🌐',
            imageUrl: '/rei.png',
            tech: ['CSS', 'HTML', 'React.js', 'TypeScript'],
            gradient: 'from-blue-500 to-cyan-500'
        },
        {
            title: 'SCADA Developer',
            category: 'Software Development',
            period: 'Jun 2025 - Jun 2025',
            company: 'PT. PERMALAT BERDIKARI JAYA',
            shortDesc: 'Developed SCADA application from scratch for monitoring systems using VB.NET and database integration',
            description: 'During my internship, I was responsible for developing a SCADA application from scratch as a final project. I built this application using Visual Studio with VB.NET programming language, aimed at monitoring systems. In the process, I successfully integrated the application with InfluxDB database for time-series data and PostgreSQL for relational data, and designed an intuitive interface. This project not only tested my technical capabilities but also provided direct experience in translating business needs into functional and stable software solutions.',
            image: '📊',
            imageUrl: '/scada.jpeg',
            tech: ['Visual Basic .NET', 'InfluxDB', 'PostgreSQL', 'SCADA'],
            gradient: 'from-indigo-500 to-purple-500'
        },
        {
            title: 'Miniplant Water Heater IoT',
            category: 'IoT & Embedded Systems',
            period: 'Academic Project',
            company: 'Diponegoro University',
            shortDesc: 'Built an IoT-based water heater miniplant system controlled and monitored remotely using ESP32 and Blynk',
            description: 'Designed and developed a miniplant water heater system with IoT capabilities using ESP32 microcontroller. This project features remote control and real-time monitoring through the Blynk mobile application, allowing users to adjust temperature settings, monitor heating status, and receive alerts. The system demonstrates practical application of embedded systems, IoT protocols, and mobile integration for smart home automation. This project showcases my ability to integrate hardware, firmware programming, and cloud-based IoT platforms to create functional smart devices.',
            image: '♨️',
            imageUrl: '/mini.jpeg',
            tech: ['ESP32', 'Blynk', 'IoT', 'C++', 'Arduino IDE'],
            gradient: 'from-orange-500 to-red-500'
        }
    ];
    return (_jsxs(_Fragment, { children: [_jsxs("section", { ref: sectionRef, id: "portfolio", className: "py-24 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0", children: [_jsx("div", { className: "absolute top-20 left-20 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" }), _jsx("div", { className: "absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" })] }), _jsx("div", { className: "absolute inset-0 opacity-[0.02]", children: _jsx("div", { className: "absolute inset-0", style: {
                                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                                backgroundSize: '80px 80px'
                            } }) }), _jsx("div", { className: "container mx-auto px-6 relative z-10", children: _jsxs("div", { className: "max-w-6xl mx-auto", children: [_jsxs("div", { className: `mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`, children: [_jsxs("div", { className: "inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full mb-6", children: [_jsx("div", { className: "w-2 h-2 bg-indigo-400 rounded-full" }), _jsx("span", { className: "text-gray-300 text-sm font-medium", children: "Portfolio" })] }), _jsxs("h2", { className: "text-5xl md:text-6xl font-bold text-white mb-4", children: ["Featured ", _jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400", children: "Projects" })] }), _jsx("div", { className: "w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full" })] }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: projects.map((project, index) => (_jsx("div", { className: `transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`, style: { transitionDelay: `${index * 200}ms` }, children: _jsxs("div", { className: "group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all h-full flex flex-col", children: [_jsxs("div", { className: `relative h-56 ${!project.imageUrl ? `bg-gradient-to-br ${project.gradient}` : 'bg-slate-900'} flex items-center justify-center overflow-hidden`, children: [project.imageUrl ? (_jsx("img", { src: project.imageUrl, alt: project.title, className: "absolute inset-0 w-full h-full object-cover" })) : (_jsxs(_Fragment, { children: [_jsx("div", { className: "absolute inset-0 opacity-10", children: _jsx("div", { className: "absolute inset-0", style: {
                                                                            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                                                                            backgroundSize: '20px 20px'
                                                                        } }) }), _jsx("div", { className: "text-8xl transform group-hover:scale-110 transition-transform duration-500 relative z-10", children: project.image })] })), _jsx("div", { className: "absolute top-4 right-4 px-4 py-1.5 bg-black/40 backdrop-blur-sm text-white text-sm font-bold rounded-full z-10", children: project.category })] }), _jsxs("div", { className: "p-6 flex-1 flex flex-col bg-slate-900/80", children: [_jsx("h3", { className: `text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${project.gradient} mb-3`, children: project.title }), _jsx("p", { className: "text-gray-300 text-sm leading-relaxed mb-4 flex-1", children: project.shortDesc }), _jsx("div", { className: "flex flex-wrap gap-2 mb-4", children: project.tech.map((tech, i) => (_jsx("span", { className: "px-3 py-1 bg-slate-800 text-blue-300 text-xs font-medium rounded-lg border border-slate-700", children: tech }, i))) }), _jsxs("button", { onClick: () => setSelectedProject(project), className: `w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r ${project.gradient} hover:shadow-lg hover:shadow-indigo-500/50 transition-all flex items-center justify-center gap-2 group/btn`, children: [_jsx("span", { children: "View Project" }), _jsx(ExternalLink, { size: 16, className: "group-hover/btn:translate-x-1 transition-transform" })] })] })] }) }, index))) })] }) })] }), selectedProject && (_jsx("div", { className: "fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in", onClick: () => setSelectedProject(null), children: _jsxs("div", { className: "bg-slate-900 border border-slate-700 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-scale-in", onClick: (e) => e.stopPropagation(), children: [_jsxs("div", { className: `relative h-48 ${!selectedProject.imageUrl ? `bg-gradient-to-br ${selectedProject.gradient}` : 'bg-slate-900'} flex items-center justify-center overflow-hidden`, children: [selectedProject.imageUrl ? (_jsx("img", { src: selectedProject.imageUrl, alt: selectedProject.title, className: "absolute inset-0 w-full h-full object-cover" })) : (_jsx("div", { className: "text-7xl relative z-10", children: selectedProject.image })), _jsx("button", { onClick: () => setSelectedProject(null), className: "absolute top-4 right-4 w-10 h-10 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center transition-all z-20", children: _jsx(X, { size: 20, className: "text-white" }) }), _jsx("div", { className: "absolute bottom-4 left-6 z-10", children: _jsx("span", { className: "px-4 py-1.5 bg-black/40 backdrop-blur-sm text-white text-sm font-bold rounded-full", children: selectedProject.category }) })] }), _jsxs("div", { className: "p-8", children: [_jsx("h2", { className: `text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${selectedProject.gradient} mb-4`, children: selectedProject.title }), _jsxs("div", { className: "space-y-3 mb-6 pb-6 border-b border-slate-700", children: [_jsxs("div", { className: "flex items-center gap-3 text-gray-300", children: [_jsx(Building2, { size: 18, className: "text-indigo-400" }), _jsx("span", { children: selectedProject.company })] }), _jsxs("div", { className: "flex items-center gap-3 text-gray-400", children: [_jsx(Calendar, { size: 18, className: "text-cyan-400" }), _jsx("span", { children: selectedProject.period })] })] }), _jsx("p", { className: "text-gray-300 leading-relaxed mb-6", children: selectedProject.description }), _jsxs("div", { children: [_jsx("h3", { className: "text-sm font-bold text-gray-400 uppercase tracking-wider mb-3", children: "Technologies Used" }), _jsx("div", { className: "flex flex-wrap gap-2", children: selectedProject.tech.map((tech, i) => (_jsx("span", { className: "px-4 py-2 bg-slate-800 text-indigo-300 text-sm font-medium rounded-lg border border-slate-700", children: tech }, i))) })] })] })] }) })), _jsx("style", { children: `
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      ` })] }));
};
export default Portfolio;
