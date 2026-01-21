import React, { useEffect, useState } from 'react';

type IntroProps = {
  onEnter: () => void;
};

const Intro: React.FC<IntroProps> = ({ onEnter }) => {
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
    }, 10); // Lebih lambat dari 30ms menjadi 50ms

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

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 transition-opacity duration-700 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Subtle background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6">
        {/* Decorative line top */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-indigo-400"></div>
          <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-400"></div>
        </div>

        {/* Welcome Text */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-white">Welcome to</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400">
            My Portfolio
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-lg md:text-xl mb-12">
          Odayakana Upupha Konnikhof
        </p>

        {/* Progress Bar */}
        <div className="max-w-md mx-auto">
          <div className="relative">
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
              <div 
                className="h-full bg-gradient-to-r from-indigo-500 via-cyan-500 to-indigo-500 transition-all duration-300 relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
              </div>
            </div>
            
            {/* Progress percentage */}
            <div className="text-center mt-6">
              <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                {progress}%
              </span>
            </div>
          </div>
        </div>

        {/* Decorative line bottom */}
        <div className="flex items-center justify-center gap-3 mt-12">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-indigo-400/50"></div>
          <div className="w-1.5 h-1.5 bg-indigo-400/50 rounded-full"></div>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-400/50"></div>
        </div>
      </div>

      <style>{`
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
      `}</style>
    </div>
  );
};

export default Intro;