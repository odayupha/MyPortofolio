export const dynamic = "force-dynamic";
import React, { useEffect, useState } from 'react';
import { Mail, Linkedin } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 relative overflow-hidden flex items-center">
      {/* Subtle animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 py-20">
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="grid lg:grid-cols-[1.2fr,1fr] gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-gray-200 text-sm font-medium">Open to Opportunities</span>
              </div>

              {/* Name & Title */}
              <div>
                <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                  Odayakana<br/>
                  <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400 text-transparent bg-clip-text">
                    Upupha Konnikhof
                  </span>
                </h1>
                <div className="h-1 w-32 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mb-6"></div>
                <h2 className="text-2xl lg:text-3xl text-gray-300 font-light mb-6">
                  Automation Engineering Student
                </h2>
              </div>

              {/* Short Bio */}
           <p className="text-lg text-gray-300 leading-relaxed max-w-2xl text-justify [hyphens:auto]">
  Automation Engineering student at Diponegoro University with a focus on integrating 
  advanced robotics and software solutions. Proficient in UI/UX design and software engineering, 
  with a dedicated interest in optimizing 
  <span className="text-emerald-400 font-semibold transition-colors duration-300 hover:text-emerald-300"> Renewable Energy systems</span>, 
  <span className="text-cyan-400 font-semibold transition-colors duration-300 hover:text-cyan-300"> Oil & Gas operations</span>, and 
  <span className="text-indigo-400 font-semibold transition-colors duration-300 hover:text-indigo-300"> Robotics Technology</span>. 
  Driven by a passion for industrial innovation through smart automation and sustainable technical solutions.
</p>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <a href="mailto:odayupha@gmail.com"
                  className="group w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-indigo-600 hover:to-cyan-600 hover:border-transparent transition-all hover:scale-110 shadow-lg hover:shadow-indigo-500/50"
                  aria-label="Email">
                  <Mail size={20} className="text-white" />
                </a>
                <a href="https://www.linkedin.com/in/odayakana-konnikhof-230369b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"
                  className="group w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 transition-all hover:scale-110 shadow-lg hover:shadow-blue-500/50"
                  aria-label="LinkedIn">
                  <Linkedin size={20} className="text-white" />
                </a>
                <a href="https://www.instagram.com/odayupha?igsh=emd5ZnNnbms1am5l" target="_blank" rel="noopener noreferrer"
                  className="group w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:border-transparent transition-all hover:scale-110 shadow-lg hover:shadow-pink-500/50"
                  aria-label="Instagram">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Content - Photo */}
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto lg:max-w-none">
                {/* Main Photo Container */}
                <div className="relative aspect-square rounded-3xl overflow-hidden">
                  {/* Animated gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-cyan-500 to-indigo-500 rounded-3xl animate-spin-slow p-1">
                    <div className="w-full h-full rounded-3xl bg-slate-900"></div>
                  </div>
                  
                  {/* Photo */}
                  <div className="absolute inset-3 rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                    <img 
                      src="/kabid.jpeg" 
                      alt="Odayakana Upupha Konnikhof"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-indigo-500/30 to-cyan-500/30 rounded-2xl backdrop-blur-sm animate-float"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-cyan-500/30 to-indigo-500/30 rounded-2xl backdrop-blur-sm animate-float" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default Hero;