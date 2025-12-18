import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
const Intro = ({ onEnter }) => {
    const [progress, setProgress] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);
    useEffect(() => {
        // Progress animation - lebih lambat
        const progressInterval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    return 100;
                }
                return prev + 1; // Lebih lambat dari 2 menjadi 1
            });
        }, 50); // Lebih lambat dari 30ms menjadi 50ms
        // Fade out and exit - lebih lama
        const fadeTimer = setTimeout(() => {
            setFadeOut(true);
        }, 5500); // Lebih lama dari 3200ms menjadi 5500ms
        const exitTimer = setTimeout(() => {
            onEnter();
        }, 6200); // Lebih lama dari 3800ms menjadi 6200ms
        return () => {
            clearInterval(progressInterval);
            clearTimeout(fadeTimer);
            clearTimeout(exitTimer);
        };
    }, [onEnter]);
    return (_jsxs("div", { className: `fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 transition-opacity duration-700 ${fadeOut ? 'opacity-0' : 'opacity-100'}`, children: [_jsxs("div", { className: "absolute inset-0", children: [_jsx("div", { className: "absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" }), _jsx("div", { className: "absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse", style: { animationDelay: '1s' } })] }), _jsx("div", { className: "absolute inset-0 opacity-[0.02]", children: _jsx("div", { className: "absolute inset-0", style: {
                        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                        backgroundSize: '80px 80px'
                    } }) }), _jsxs("div", { className: "relative z-10 text-center px-6", children: [_jsxs("div", { className: "flex items-center justify-center gap-3 mb-8", children: [_jsx("div", { className: "h-px w-16 bg-gradient-to-r from-transparent to-indigo-400" }), _jsx("div", { className: "w-2 h-2 bg-indigo-400 rounded-full" }), _jsx("div", { className: "h-px w-16 bg-gradient-to-l from-transparent to-cyan-400" })] }), _jsxs("h1", { className: "text-5xl md:text-7xl font-bold mb-6", children: [_jsx("span", { className: "text-white", children: "Welcome to" }), _jsx("br", {}), _jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400", children: "My Portfolio" })] }), _jsx("p", { className: "text-gray-400 text-lg md:text-xl mb-12", children: "Odayakana Upupha Konnikhof" }), _jsx("div", { className: "max-w-md mx-auto", children: _jsxs("div", { className: "relative", children: [_jsx("div", { className: "h-1.5 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm", children: _jsx("div", { className: "h-full bg-gradient-to-r from-indigo-500 via-cyan-500 to-indigo-500 transition-all duration-300 relative", style: { width: `${progress}%` }, children: _jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" }) }) }), _jsx("div", { className: "text-center mt-6", children: _jsxs("span", { className: "text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400", children: [progress, "%"] }) })] }) }), _jsxs("div", { className: "flex items-center justify-center gap-3 mt-12", children: [_jsx("div", { className: "h-px w-12 bg-gradient-to-r from-transparent to-indigo-400/50" }), _jsx("div", { className: "w-1.5 h-1.5 bg-indigo-400/50 rounded-full" }), _jsx("div", { className: "h-px w-12 bg-gradient-to-l from-transparent to-cyan-400/50" })] })] }), _jsx("style", { children: `
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
      ` })] }));
};
export default Intro;
