import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Check, Linkedin, Github } from 'lucide-react';
const Contact = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const sectionRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
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
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.message) {
            setIsSending(true);
            setTimeout(() => {
                setIsSending(false);
                setIsSubmitted(true);
                setTimeout(() => {
                    setFormData({ name: '', email: '', subject: '', message: '' });
                    setIsSubmitted(false);
                }, 3000);
            }, 1500);
        }
    };
    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: 'odayupha@gmail.com',
            link: 'mailto:odayupha@gmail.com'
        },
        {
            icon: Phone,
            label: 'Phone',
            value: '+62 821 3421 7625',
            link: 'tel:+6282134217625'
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'Semarang, Central Java, Indonesia',
            link: '#'
        }
    ];
    return (_jsxs("section", { ref: sectionRef, id: "contact", className: "py-24 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 relative overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0", children: [_jsx("div", { className: "absolute top-20 left-20 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" }), _jsx("div", { className: "absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" })] }), _jsx("div", { className: "absolute inset-0 opacity-[0.02]", children: _jsx("div", { className: "absolute inset-0", style: {
                        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                        backgroundSize: '80px 80px'
                    } }) }), _jsx("div", { className: "container mx-auto px-6 relative z-10", children: _jsxs("div", { className: "max-w-6xl mx-auto", children: [_jsxs("div", { className: `mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`, children: [_jsxs("div", { className: "inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full mb-6", children: [_jsx("div", { className: "w-2 h-2 bg-cyan-400 rounded-full" }), _jsx("span", { className: "text-gray-300 text-sm font-medium", children: "Get in Touch" })] }), _jsxs("h2", { className: "text-5xl md:text-6xl font-bold text-white mb-4", children: ["Let's ", _jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400", children: "Connect" })] }), _jsx("div", { className: "w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mb-6" }), _jsx("p", { className: "text-xl text-gray-300 max-w-2xl", children: "I'm always interested in hearing about new opportunities, collaborations, or just having a conversation about technology and innovation." })] }), _jsxs("div", { className: "grid lg:grid-cols-2 gap-12", children: [_jsxs("div", { className: `space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`, children: [contactInfo.map((contact, index) => (_jsx("a", { href: contact.link, className: "group block bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-indigo-500/50 transition-all", children: _jsxs("div", { className: "flex items-start gap-6", children: [_jsx("div", { className: "w-14 h-14 bg-gradient-to-br from-indigo-600 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform", children: _jsx(contact.icon, { className: "text-white", size: 24 }) }), _jsxs("div", { className: "flex-1", children: [_jsx("div", { className: "text-sm text-gray-400 uppercase tracking-wider mb-2", children: contact.label }), _jsx("div", { className: "text-white font-medium text-lg", children: contact.value })] })] }) }, index))), _jsxs("div", { className: "bg-gradient-to-br from-indigo-600/20 to-cyan-600/20 backdrop-blur-md border border-indigo-500/30 rounded-2xl p-8", children: [_jsx("h3", { className: "text-xl font-bold text-white mb-6", children: "Connect on Social" }), _jsxs("div", { className: "flex gap-4", children: [_jsx("a", { href: "https://linkedin.com", target: "_blank", rel: "noopener noreferrer", className: "w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-indigo-600 hover:to-cyan-600 hover:border-transparent transition-all", "aria-label": "LinkedIn", children: _jsx(Linkedin, { size: 20, className: "text-white" }) }), _jsx("a", { href: "https://github.com", target: "_blank", rel: "noopener noreferrer", className: "w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-indigo-600 hover:to-cyan-600 hover:border-transparent transition-all", "aria-label": "GitHub", children: _jsx(Github, { size: 20, className: "text-white" }) }), _jsx("a", { href: "mailto:odayupha@gmail.com", className: "w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-indigo-600 hover:to-cyan-600 hover:border-transparent transition-all", "aria-label": "Email", children: _jsx(Mail, { size: 20, className: "text-white" }) })] })] }), _jsxs("div", { className: "bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl", children: [_jsxs("div", { className: "flex items-center gap-3 mb-4", children: [_jsxs("div", { className: "relative flex h-3 w-3", children: [_jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" }), _jsx("span", { className: "relative inline-flex rounded-full h-3 w-3 bg-cyan-500" })] }), _jsx("h3", { className: "text-lg font-bold text-white", children: "Currently Available" })] }), _jsx("p", { className: "text-gray-300 leading-relaxed mb-6", children: "Open to internships, research collaborations, and project opportunities in automation engineering and robotics." }), _jsx("div", { className: "pt-6 border-t border-white/10", children: _jsxs("div", { className: "flex justify-between text-sm", children: [_jsx("span", { className: "text-gray-400", children: "Response Time" }), _jsx("span", { className: "text-white font-medium", children: "Within 24 hours" })] }) })] })] }), _jsx("div", { className: `transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`, children: _jsxs("div", { className: "bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-2xl", children: [_jsx("h3", { className: "text-2xl font-bold text-white mb-2", children: "Send a Message" }), _jsx("p", { className: "text-gray-300 mb-8", children: "Fill out the form below and I'll get back to you as soon as possible." }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-white font-medium mb-3 text-sm uppercase tracking-wider", children: "Your Name *" }), _jsx("input", { type: "text", placeholder: "John Doe", value: formData.name, onChange: (e) => setFormData({ ...formData, name: e.target.value }), className: "w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none transition-all", required: true })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-white font-medium mb-3 text-sm uppercase tracking-wider", children: "Your Email *" }), _jsx("input", { type: "email", placeholder: "john@example.com", value: formData.email, onChange: (e) => setFormData({ ...formData, email: e.target.value }), className: "w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none transition-all", required: true })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-white font-medium mb-3 text-sm uppercase tracking-wider", children: "Subject" }), _jsx("input", { type: "text", placeholder: "Project Collaboration", value: formData.subject, onChange: (e) => setFormData({ ...formData, subject: e.target.value }), className: "w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none transition-all" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-white font-medium mb-3 text-sm uppercase tracking-wider", children: "Your Message *" }), _jsx("textarea", { placeholder: "Tell me about your project or inquiry...", value: formData.message, onChange: (e) => setFormData({ ...formData, message: e.target.value }), rows: 6, className: "w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none transition-all resize-none", required: true })] }), _jsx("button", { type: "submit", disabled: isSubmitted || isSending, className: `w-full py-5 font-medium text-base rounded-xl transition-all flex items-center justify-center gap-3 ${isSubmitted
                                                            ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white'
                                                            : isSending
                                                                ? 'bg-slate-700 text-white cursor-wait'
                                                                : 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white hover:shadow-xl hover:shadow-indigo-500/50'}`, children: isSubmitted ? (_jsxs(_Fragment, { children: [_jsx(Check, { size: 20 }), "Message Sent Successfully!"] })) : isSending ? (_jsxs(_Fragment, { children: [_jsx("div", { className: "w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" }), "Sending..."] })) : (_jsxs(_Fragment, { children: [_jsx(Send, { size: 20 }), "Send Message"] })) })] }), _jsx("p", { className: "text-gray-500 text-xs mt-6 leading-relaxed text-center", children: "Your information is secure and will only be used to respond to your inquiry." })] }) })] })] }) })] }));
};
export default Contact;
