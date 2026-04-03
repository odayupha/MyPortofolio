import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Check, Linkedin, Github, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) setIsVisible(true); }); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSending(true);
      setTimeout(() => {
        setIsSending(false); setIsSubmitted(true);
        setTimeout(() => { setFormData({ name: '', email: '', subject: '', message: '' }); setIsSubmitted(false); }, 3000);
      }, 1500);
    }
  };

  return (
    <section ref={sectionRef} id="contact" className="py-20 lg:py-28 bg-paper relative overflow-hidden border-t-2 border-forest">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[3px] bg-orange" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-forest tracking-tighter">
              Let's <span className="font-serif italic text-orange">Connect</span>
            </h2>
            <p className="text-base text-forest/50 max-w-2xl mt-4">I'm always interested in hearing about new opportunities, collaborations, or just having a conversation about technology and innovation.</p>
          </div>

          <div className={`grid lg:grid-cols-2 gap-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-4">
              {[
                { icon: Mail, label: 'Email', value: 'odayupha@gmail.com', link: 'mailto:odayupha@gmail.com' },
                { icon: Phone, label: 'Phone', value: '+62 821 3421 7625', link: 'tel:+6282134217625' },
                { icon: MapPin, label: 'Location', value: 'Semarang, Central Java, Indonesia', link: '#' }
              ].map((c, i) => (
                <a key={i} href={c.link} className="arrow-hover group block bg-sand border-2 border-forest shadow-hard-sm p-5 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#2D3A27] transition-all duration-150">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-forest flex items-center justify-center flex-shrink-0 group-hover:bg-orange transition-colors"><c.icon size={18} className="text-sand" /></div>
                    <div className="flex-1">
                      <div className="font-mono text-[9px] text-forest/30 tracking-[0.15em] mb-1">{c.label.toUpperCase()}</div>
                      <div className="text-forest font-semibold text-sm">{c.value}</div>
                    </div>
                    <ArrowRight size={16} className="arrow-icon text-forest/20 group-hover:text-orange" />
                  </div>
                </a>
              ))}
              <div className="bg-sand border-2 border-forest shadow-hard-sm p-5">
                <h3 className="text-sm font-bold text-forest mb-4">Connect on Social</h3>
                <div className="flex gap-3">
                  {[{ href: 'https://linkedin.com', icon: Linkedin }, { href: 'https://github.com', icon: Github }, { href: 'mailto:odayupha@gmail.com', icon: Mail }].map((s, i) => (
                    <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 border-2 border-forest text-forest flex items-center justify-center hover:bg-forest hover:text-sand transition-all"><s.icon size={16} /></a>
                  ))}
                </div>
              </div>
              <div className="bg-sand border-2 border-forest shadow-hard-sm p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative flex h-2.5 w-2.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange opacity-75"></span><span className="relative inline-flex h-2.5 w-2.5 bg-orange"></span></div>
                  <h3 className="text-sm font-bold text-forest">Currently Available</h3>
                </div>
                <p className="text-forest/50 text-sm leading-relaxed mb-3">Open to internships, research collaborations, and project opportunities in automation engineering and robotics.</p>
                <div className="pt-3 border-t-2 border-forest/10 flex justify-between font-mono text-[10px]"><span className="text-forest/30">RESPONSE_TIME</span><span className="text-forest font-bold">{'<'} 24H</span></div>
              </div>
            </div>

            <div className="bg-sand border-2 border-forest shadow-hard p-7">
              <div className="flex items-center gap-3 mb-6"><h3 className="text-lg font-bold text-forest">Send a Message</h3><div className="flex-1 h-[2px] bg-forest/10" /><span className="font-mono text-[9px] text-forest/30">[FORM]</span></div>
              <form onSubmit={handleSubmit} className="space-y-4">
                {[{ l: 'NAME', k: 'name', t: 'text', p: 'John Doe', r: true }, { l: 'EMAIL', k: 'email', t: 'email', p: 'john@example.com', r: true }, { l: 'SUBJECT', k: 'subject', t: 'text', p: 'Project Collaboration', r: false }].map((f) => (
                  <div key={f.k}><label className="block text-forest font-mono text-[10px] font-bold tracking-[0.15em] mb-2">{f.l} {f.r && '*'}</label><input type={f.t} placeholder={f.p} value={(formData as any)[f.k]} onChange={(e) => setFormData({ ...formData, [f.k]: e.target.value })} className="w-full px-4 py-3 bg-paper border-2 border-forest/30 text-forest placeholder-forest/25 focus:border-orange focus:outline-none text-sm" required={f.r} /></div>
                ))}
                <div><label className="block text-forest font-mono text-[10px] font-bold tracking-[0.15em] mb-2">MESSAGE *</label><textarea placeholder="Tell me about your project..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={5} className="w-full px-4 py-3 bg-paper border-2 border-forest/30 text-forest placeholder-forest/25 focus:border-orange focus:outline-none resize-none text-sm" required /></div>
                <button type="submit" disabled={isSubmitted || isSending} className={`w-full py-4 font-bold text-sm border-2 border-forest flex items-center justify-center gap-2 transition-all ${isSubmitted ? 'bg-forest text-sand' : isSending ? 'bg-forest/20 text-forest/40' : 'bg-orange text-sand shadow-hard-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#2D3A27]'}`}>
                  {isSubmitted ? (<><Check size={18} />SENT!</>) : isSending ? 'SENDING...' : (<><Send size={18} />SEND MESSAGE</>)}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;