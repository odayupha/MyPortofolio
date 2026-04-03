import React, { useEffect, useState } from 'react';

type IntroProps = { onEnter: () => void };

const Intro: React.FC<IntroProps> = ({ onEnter }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) { clearInterval(interval); return 100; }
        return prev + 2;
      });
    }, 30);

    const fadeTimer = setTimeout(() => setFadeOut(true), 1800);
    const exitTimer = setTimeout(() => onEnter(), 2500);

    return () => {
      clearInterval(interval);
      clearTimeout(fadeTimer);
      clearTimeout(exitTimer);
    };
  }, [onEnter]);

  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center bg-sand transition-all duration-700 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-forest mb-2 tracking-tighter">
          Odayakana <span className="font-serif italic">Upupha</span>
        </h1>
        <p className="text-sm text-forest/40 tracking-widest uppercase mb-12">
          Automation Engineering Student
        </p>

        {/* Progress Bar */}
        <div className="max-w-xs mx-auto">
          <div className="h-[3px] bg-forest/10 border border-forest/20">
            <div className="h-full bg-orange transition-all duration-100 ease-linear" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;