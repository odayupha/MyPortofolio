export const dynamic = "force-dynamic";
import React, { useEffect, useRef } from 'react';
import { Mail, Linkedin, ArrowRight } from 'lucide-react';
import gsap from 'gsap';

const Hero = () => {
  const headingLine1 = useRef<HTMLDivElement>(null);
  const headingLine2 = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    tl.fromTo(headingLine1.current,
      { clipPath: 'inset(100% 0 0 0)', y: 30 },
      { clipPath: 'inset(0% 0 0 0)', y: 0, duration: 1.4, delay: 0.3 }
    )
      .fromTo(headingLine2.current,
        { clipPath: 'inset(100% 0 0 0)', y: 30 },
        { clipPath: 'inset(0% 0 0 0)', y: 0, duration: 1.4 },
        '-=1.0'
      )
      .fromTo(subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        '-=0.8'
      )
      .fromTo(bioRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        '-=0.6'
      )
      .fromTo(ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.5'
      )
      .fromTo(imageRef.current,
        { opacity: 0, scale: 0.97 },
        { opacity: 1, scale: 1, duration: 1.2 },
        '-=1.2'
      );
  }, []);

  return (
    <section id="home" className="min-h-screen bg-sand relative overflow-hidden flex items-center pt-20">

      <div className="container mx-auto px-6 relative z-10 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1.3fr,1fr] gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-7">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 border-2 border-forest px-4 py-2 bg-paper shadow-hard-sm">
                <div className="w-2 h-2 bg-orange rounded-full animate-pulse" />
                <span className="text-forest/70 text-sm font-semibold">Open to Opportunities</span>
              </div>

              {/* Massive Heading */}
              <div>
                <div className="overflow-hidden">
                  <div ref={headingLine1}>
                    <h1 className="text-[3.2rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[7rem] font-extrabold text-forest leading-[0.95] tracking-tighter">
                      Odayakana
                    </h1>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div ref={headingLine2}>
                    <h1 className="text-[3.2rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[7rem] font-extrabold text-forest leading-[0.95] tracking-tighter">
                      <span className="font-serif italic text-orange">Upupha</span> K.
                    </h1>
                  </div>
                </div>
              </div>

              {/* Subtitle */}
              <div ref={subtitleRef}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-[3px] bg-orange" />
                </div>
                <h2 className="text-lg md:text-xl text-forest/70 font-semibold">
                  Automation Engineering Student
                </h2>
              </div>

              {/* Bio */}
              <div ref={bioRef}>
                <p className="text-base md:text-lg text-forest/65 leading-relaxed max-w-xl">
                  Automation Engineering student at Diponegoro University with a focus on integrating
                  advanced robotics and software solutions. Proficient in UI/UX design and software engineering,
                  with a dedicated interest in optimizing
                  <span className="text-forest font-bold"> Renewable Energy systems</span>,
                  <span className="text-forest font-bold"> Oil & Gas operations</span>, and
                  <span className="text-forest font-bold"> Robotics Technology</span>.
                  Driven by a passion for industrial innovation through smart automation and sustainable technical solutions.
                </p>
              </div>

              {/* CTA & Social */}
              <div ref={ctaRef} className="flex items-center gap-5 pt-2">
                <a href="mailto:odayupha@gmail.com"
                  className="arrow-hover inline-flex items-center gap-2 bg-orange text-sand px-7 py-3.5 font-bold text-sm border-2 border-forest shadow-hard-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#2D3A27] transition-all duration-150"
                >
                  Get in Touch
                  <ArrowRight size={16} className="arrow-icon" />
                </a>
                <div className="flex gap-3">
                  <a href="mailto:odayupha@gmail.com"
                    className="w-11 h-11 border-2 border-forest text-forest flex items-center justify-center hover:bg-forest hover:text-sand transition-all duration-200"
                    aria-label="Email">
                    <Mail size={18} />
                  </a>
                  <a href="https://www.linkedin.com/in/odayakana-konnikhof-230369b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"
                    className="w-11 h-11 border-2 border-forest text-forest flex items-center justify-center hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5] transition-all duration-200"
                    aria-label="LinkedIn">
                    <Linkedin size={18} />
                  </a>
                  <a href="https://www.instagram.com/odayupha?igsh=emd5ZnNnbms1am5l" target="_blank" rel="noopener noreferrer"
                    className="w-11 h-11 border-2 border-forest text-forest flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 hover:text-white hover:border-transparent transition-all duration-200"
                    aria-label="Instagram">
                    <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right - Photo */}
            <div ref={imageRef} className="relative">
              <div className="relative w-full max-w-md mx-auto lg:max-w-none">
                <div className="relative aspect-[4/5] img-zoom-container border-2 border-forest shadow-hard bg-paper overflow-hidden">
                  <img src="/kabid.jpeg" alt="Odayakana Upupha Konnikhof" className="w-full h-full object-cover" />

                </div>
                <div className="absolute -bottom-6 -right-6 text-[8rem] lg:text-[10rem] font-extrabold text-forest/[0.06] leading-none tracking-tighter select-none pointer-events-none font-mono">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;