import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Portfolio from './Portofolio';
import Achievement from './Achievement';
import Skills from './newskill';
import Certifications from './Certifications';
import Contact from './Contact';
import Footer from './Footer';
import Intro from './Intro';
export default function App() {
    const [showIntro, setShowIntro] = useState(true);
    return (_jsxs("div", { className: "font-sans antialiased", children: [showIntro && _jsx(Intro, { onEnter: () => setShowIntro(false) }), !showIntro && (_jsxs("div", { className: "animate-fade-in", children: [_jsx(Header, {}), _jsx(Hero, {}), _jsx(About, {}), _jsx(Experience, {}), _jsx(Portfolio, {}), _jsx(Achievement, {}), _jsx(Skills, {}), _jsx(Certifications, {}), _jsx(Contact, {}), _jsx(Footer, {})] })), _jsx("style", { children: `
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      ` })] }));
}
