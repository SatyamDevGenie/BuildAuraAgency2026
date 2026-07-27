'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Code,
    Rocket,
    Zap,
    Globe,
    CheckCircle2,
    ArrowRight,
    Layers,
    Cpu,
    Mail,
    Menu,
    X,
    Users,
    Timer,
    Database,
    Cloud,
    Sparkles,
    MapPin,
    Phone,
    Shield,
    Star,
    ChevronUp,
    ChevronDown,
    DollarSign,
    IndianRupee,
    Headphones,
    Award,
    ExternalLink,
    ShoppingCart,
    BarChart3,
    Settings,
    LayoutGrid
} from 'lucide-react';

const AGENCY_EMAIL = 'aurabuildagency@gmail.com';
const SATYAM_PHONE = '+91 9326903988';
const PARAG_PHONE = '+91 8828422722';

// --- INLINE SVG BRAND ICONS ---
const InstagramIcon = ({ size = 18, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
);

const LinkedinIcon = ({ size = 18, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
);

const GmailIcon = ({ size = 18, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
);

// --- FONTS ---
const FontLoader = () => (
    <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500;600&display=swap');
        .font-display { font-family: 'Sora', sans-serif; }
        .font-body { font-family: 'Inter', sans-serif; }
        .font-tech { font-family: 'IBM Plex Mono', monospace; }
        .blueprint-grid {
            background-image:
                linear-gradient(rgba(201, 150, 46, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(201, 150, 46, 0.05) 1px, transparent 1px);
            background-size: 48px 48px;
        }
        .gold-glow {
            box-shadow: 0 0 80px rgba(201, 150, 46, 0.08);
        }
        .card-lift {
            transition: transform 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease;
        }
        .card-lift:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.45);
        }
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .marquee-track {
            animation: marquee 28s linear infinite;
        }
        .marquee-track:hover {
            animation-play-state: paused;
        }
    `}</style>
);

// --- ANIMATION VARIANTS ---
const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12
        }
    }
};

// --- LIVE DUAL-TIMEZONE CLOCK (MUMBAI & NYC) ---
function useLiveTime(timeZone) {
    const [time, setTime] = useState(() =>
        new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', hour12: true, timeZone }).format(new Date())
    );
    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', hour12: true, timeZone }).format(new Date()));
        }, 1000 * 15);
        return () => clearInterval(id);
    }, [timeZone]);
    return time;
}

const DualClock = ({ compact = false }) => {
    const mum = useLiveTime('Asia/Kolkata');
    const nyc = useLiveTime('America/New_York');
    return (
        <div className={`flex items-center ${compact ? 'gap-3 text-[11px]' : 'gap-5 text-xs'} font-tech text-[#A0A0A0]`}>
            <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5FBFAE] animate-pulse"></span>
                <span className="text-[#F5F5F4]">{mum}</span>
                <span>MUM</span>
            </div>
            <div className="w-px h-3 bg-[#242424]"></div>
            <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5FBFAE] animate-pulse"></span>
                <span className="text-[#F5F5F4]">{nyc}</span>
                <span>NYC</span>
            </div>
        </div>
    );
};

// --- TOP ANNOUNCEMENT BANNER ---
const TopBanner = () => (
    <div className="relative z-40 bg-[#C9962E] text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-1.5 sm:gap-4 text-center sm:text-left">
            <p className="font-tech text-[10px] sm:text-[11px] uppercase tracking-[0.15em] font-medium">
                Serving global clients from India — 24/7 IST · EST · PST coverage
            </p>
            <a
                href={`mailto:${AGENCY_EMAIL}`}
                className="inline-flex items-center gap-1.5 font-tech text-[10px] sm:text-[11px] uppercase tracking-wider hover:opacity-80 transition-opacity"
            >
                <Mail className="w-3 h-3 shrink-0" />
                {AGENCY_EMAIL}
            </a>
        </div>
    </div>
);

// --- FIXED NAVBAR ---
const FixedNavbar = ({ isMenuOpen, setIsMenuOpen }) => (
    <>
        <nav className="fixed top-[40px] left-0 right-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#242424]">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <a href="#home" className="font-display font-extrabold text-2xl text-[#F5F5F4] hover:text-[#C9962E] transition-colors">
                    BuildAura
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-5 text-sm font-medium text-[#A0A0A0]">
                    <a href="#services" className="hover:text-[#F5F5F4] transition-colors">Capabilities</a>
                    <a href="#stack" className="hover:text-[#F5F5F4] transition-colors">Stack</a>
                    <a href="#pricing" className="hover:text-[#F5F5F4] transition-colors">Pricing</a>
                    <a href="#founders" className="hover:text-[#F5F5F4] transition-colors">Team</a>
                    <a href="#projects" className="hover:text-[#F5F5F4] transition-colors">Work</a>
                    <a href="#partnership" className="hover:text-[#F5F5F4] transition-colors">Partnership</a>
                    <a href="#faq" className="hover:text-[#F5F5F4] transition-colors">FAQ</a>
                </div>

                {/* CTA + Mobile Menu */}
                <div className="flex items-center gap-3">
                    <a
                        href={`mailto:${AGENCY_EMAIL}`}
                        className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-xs font-tech bg-[#C9962E] text-black hover:bg-[#E3B84A] transition-colors"
                    >
                        <Mail className="w-3.5 h-3.5" />
                        Contact
                    </a>
                    <button
                        type="button"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden w-6 h-6 flex items-center justify-center text-[#A0A0A0] hover:text-[#F5F5F4]"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-[#0A0A0A] border-b border-[#242424] px-6 py-6 flex flex-col space-y-4 text-[#A0A0A0] font-medium"
                >
                    <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-[#F5F5F4]">About</a>
                    <a href="#services" onClick={() => setIsMenuOpen(false)} className="hover:text-[#F5F5F4]">Capabilities</a>
                    <a href="#stack" onClick={() => setIsMenuOpen(false)} className="hover:text-[#F5F5F4]">Stack</a>
                    <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="hover:text-[#F5F5F4]">Pricing</a>
                    <a href="#founders" onClick={() => setIsMenuOpen(false)} className="hover:text-[#F5F5F4]">Team</a>
                    <a href="#projects" onClick={() => setIsMenuOpen(false)} className="hover:text-[#F5F5F4]">Work</a>
                    <a href="#partnership" onClick={() => setIsMenuOpen(false)} className="hover:text-[#F5F5F4]">Partnership</a>
                    <a href="#faq" onClick={() => setIsMenuOpen(false)} className="hover:text-[#F5F5F4]">FAQ</a>
                    <a
                        href={`mailto:${AGENCY_EMAIL}`}
                        onClick={() => setIsMenuOpen(false)}
                        className="inline-flex items-center gap-2 text-[#C9962E] font-tech text-xs"
                    >
                        <Mail className="w-4 h-4" />
                        {AGENCY_EMAIL}
                    </a>
                    <div className="pt-2"><DualClock compact /></div>
                    <a
                        href="#contact"
                        onClick={() => setIsMenuOpen(false)}
                        className="inline-block text-center py-3 bg-[#C9962E] text-black font-tech text-xs uppercase tracking-wider"
                    >
                        Start a Project
                    </a>
                </motion.div>
            )}
        </nav>
        {/* Spacer for fixed navbar */}
        <div className="h-[80px]"></div>
    </>
);

// --- TRUST MARQUEE ---
const TrustMarquee = () => {
    const items = [
        "5+ Production Apps Shipped",
        "Global Client Coverage",
        "React · Next.js · Node.js",
        "AI Integration Ready",
        "Transparent Fixed Pricing",
        "Direct Engineer Access",
        "Stripe & Razorpay Ready",
        "24/7 Support Available",
    ];
    const doubled = [...items, ...items];
    return (
        <div className="relative z-10 border-y border-[#242424] bg-[#0A0A0A]/80 overflow-hidden py-3.5">
            <div className="flex marquee-track whitespace-nowrap w-max">
                {doubled.map((item, i) => (
                    <span key={i} className="inline-flex items-center gap-2 px-8 font-tech text-[11px] uppercase tracking-wider text-[#A0A0A0]">
                        <Star className="w-3 h-3 text-[#C9962E]" />
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
};

// --- SCROLL TO TOP ---
const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 600);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    if (!visible) return null;
    return (
        <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-50 w-11 h-11 border border-[#C9962E]/50 bg-black/90 backdrop-blur-sm flex items-center justify-center text-[#C9962E] hover:bg-[#C9962E] hover:text-black transition-colors duration-200"
            aria-label="Scroll to top"
        >
            <ChevronUp className="w-5 h-5" />
        </button>
    );
};

// --- FAQ ACCORDION ---
const FAQSection = () => {
    const [openIdx, setOpenIdx] = useState(0);
    const faqs = [
        {
            q: "Do you work with international clients?",
            a: "Yes. We serve US startups, UK SMBs, Australian tech companies, and businesses globally. Our IST timezone (Mumbai) overlaps with most global business hours, ensuring same-day responses and regular sync calls in your timezone."
        },
        {
            q: "Can clients pay in different currencies?",
            a: "Absolutely. Our rate card is available in INR, USD, EUR, and GBP. We accept UPI, bank transfers, and Razorpay for India, Stripe for US/international, and crypto payments for tech-forward clients."
        },
        {
            q: "Why a two-person studio instead of a big agency?",
            a: "No account managers, no hand-offs, no junior devs rotated onto your project. Satyam and Parag are the core developers writing every line of code — which is why we ship in weeks, not months."
        },
        {
            q: "What's included in the starting price tiers?",
            a: "Each tier covers design, development, deployment guidance, and a defined scope (pages, features, or app modules). We confirm exact deliverables with you before any work begins — no surprise add-ons."
        },
        {
            q: "Do you handle AI and LLM integrations?",
            a: "Yes. We've shipped AI shopping assistants, review summarization, NLP booking, and writing tools in production. LLM orchestration and agentic workflows are available for engagements."
        },
        {
            q: "How do I get started?",
            a: `Email us directly at ${AGENCY_EMAIL}. We respond within one business day with a scope outline and fixed quote.`
        }
    ];

    return (
        <section id="faq" className="relative z-10 py-24 px-6 max-w-7xl mx-auto border-t border-[#242424]">
            <div className="max-w-2xl mb-12">
                <h2 className="font-tech text-[11px] uppercase tracking-[0.2em] text-[#C9962E] mb-3">08 — FAQ</h2>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-[#F5F5F4]">Questions from clients worldwide</h3>
            </div>
            <div className="max-w-3xl border border-[#242424] divide-y divide-[#242424]">
                {faqs.map((faq, idx) => (
                    <div key={idx} className="bg-black">
                        <button
                            type="button"
                            onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-[#0A0A0A]/60 transition-colors"
                        >
                            <span className="font-display font-semibold text-[#F5F5F4] text-sm sm:text-base">{faq.q}</span>
                            {openIdx === idx ? (
                                <ChevronUp className="w-4 h-4 text-[#C9962E] shrink-0" />
                            ) : (
                                <ChevronDown className="w-4 h-4 text-[#A0A0A0] shrink-0" />
                            )}
                        </button>
                        {openIdx === idx && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="px-6 pb-5 text-[#A0A0A0] text-sm leading-relaxed"
                            >
                                {faq.a}
                            </motion.div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

// --- FOOTER ---
const Footer = () => (
    <footer className="relative z-10 border-t border-[#242424] bg-black py-16">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12 mb-16">
                {/* Left: BuildAura Logo & Tagline */}
                <div className="space-y-4">
                    <h3 className="font-display font-bold text-2xl text-[#F5F5F4]">BuildAura</h3>
                    <p className="text-sm text-[#A0A0A0] leading-relaxed">
                        Full-stack software development studio serving startups and enterprises globally. Built by developers, for developers.
                    </p>
                    <div className="flex items-center gap-4 pt-4">
                        <a href="https://www.linkedin.com/in/satyam-sawant-a257802a7/" target="_blank" rel="noopener noreferrer" className="text-[#A0A0A0] hover:text-[#C9962E] transition-colors" title="LinkedIn">
                            <LinkedinIcon size={33} />
                        </a>
                        <a href={`mailto:${AGENCY_EMAIL}`} className="text-[#A0A0A0] hover:text-[#C9962E] transition-colors" title="Email">
                            <GmailIcon size={33} />
                        </a>
                    </div>
                </div>

                {/* Middle: Quick Links */}
                <div className="space-y-6">
                    <h4 className="font-display font-bold text-[#F5F5F4]">Quick Links</h4>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2.5">
                            <a href="#about" className="text-sm text-[#A0A0A0] hover:text-[#C9962E] transition-colors block">About Us</a>
                            <a href="#services" className="text-sm text-[#A0A0A0] hover:text-[#C9962E] transition-colors block">Services</a>
                            <a href="#stack" className="text-sm text-[#A0A0A0] hover:text-[#C9962E] transition-colors block">Tech Stack</a>
                            <a href="#pricing" className="text-sm text-[#A0A0A0] hover:text-[#C9962E] transition-colors block">Pricing</a>
                        </div>
                        <div className="space-y-2.5">
                            <a href="#founders" className="text-sm text-[#A0A0A0] hover:text-[#C9962E] transition-colors block">Team</a>
                            <a href="#projects" className="text-sm text-[#A0A0A0] hover:text-[#C9962E] transition-colors block">Work</a>
                            <a href="#partnership" className="text-sm text-[#A0A0A0] hover:text-[#C9962E] transition-colors block">Partnership</a>
                            <a href="#faq" className="text-sm text-[#A0A0A0] hover:text-[#C9962E] transition-colors block">FAQ</a>
                        </div>
                    </div>
                </div>

                {/* Right: Creators Contact */}
                <div className="space-y-6">
                    <h4 className="font-display font-bold text-[#F5F5F4]">Founders</h4>

                    <div className="space-y-4">
                        {/* Satyam */}
                        <div className="p-4 border border-[#242424] bg-[#0A0A0A]/60">
                            <p className="font-display font-semibold text-[#F5F5F4] text-sm">Satyam</p>
                            <p className="text-xs text-[#A0A0A0] mt-1">Co-Founder & Tech Lead</p>
                            <div className="flex items-center gap-2 mt-2.5">
                                <Phone className="w-3.5 h-3.5 text-[#C9962E]" />
                                <a href="tel:+919326903988" className="text-xs text-[#C9962E] hover:text-[#E3B84A] transition-colors font-tech">
                                    +91 9326903988
                                </a>
                            </div>
                        </div>

                        {/* Parag */}
                        <div className="p-4 border border-[#242424] bg-[#0A0A0A]/60">
                            <p className="font-display font-semibold text-[#F5F5F4] text-sm">Parag</p>
                            <p className="text-xs text-[#A0A0A0] mt-1">Co-Founder & Full-Stack Dev</p>
                            <div className="flex items-center gap-2 mt-2.5">
                                <Phone className="w-3.5 h-3.5 text-[#C9962E]" />
                                <a href="tel:+918828422722" className="text-xs text-[#C9962E] hover:text-[#E3B84A] transition-colors font-tech">
                                    +91 8828422722
                                </a>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="p-4 border border-[#242424] bg-[#0A0A0A]/60">
                            <p className="font-display font-semibold text-[#F5F5F4] text-sm">Email</p>
                            <a href={`mailto:${AGENCY_EMAIL}`} className="text-xs text-[#C9962E] hover:text-[#E3B84A] transition-colors font-tech mt-2 block break-all">
                                {AGENCY_EMAIL}
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom: Copyright & Location */}
            <div className="border-t border-[#242424] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-[#A0A0A0] font-tech">
                    @ 2026 BuildAura Startup. Based in <span className="text-[#C9962E]">Maharashtra, India</span>
                </p>
                <div className="text-xs text-[#A0A0A0] font-tech">
                    <DualClock compact />
                </div>
            </div>
        </div>
    </footer>
);

export default function BuildAuraApp() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const services = [
        {
            code: "CAP-01",
            icon: <Globe className="w-5 h-5" />,
            title: "Application Development",
            desc: "Full-stack web and mobile applications built with modern technologies. Custom solutions tailored to your business needs.",
            tags: ["React", "Next.js", "Node.js", "PostgreSQL"]
        },
        {
            code: "CAP-02",
            icon: <ShoppingCart className="w-5 h-5" />,
            title: "E-Commerce Applications",
            desc: "Complete e-commerce solutions with product catalogs, shopping carts, secure payments, and inventory management systems.",
            tags: ["Stripe", "Razorpay", "Payment Rails"]
        },
        {
            code: "CAP-03",
            icon: <BarChart3 className="w-5 h-5" />,
            title: "SaaS Applications",
            desc: "Scalable SaaS platforms with multi-tenant architecture, advanced analytics, and enterprise-grade features.",
            tags: ["Cloud", "Scalable", "Analytics"]
        },
        {
            code: "CAP-04",
            icon: <Settings className="w-5 h-5" />,
            title: "CRM Based Applications",
            desc: "Custom CRM solutions to manage customer relationships, sales pipelines, and business operations efficiently.",
            tags: ["Customer Management", "Automation"]
        },
        {
            code: "CAP-05",
            icon: <Layers className="w-5 h-5" />,
            title: "HRMS Based Applications",
            desc: "Complete Human Resource Management Systems for employee management, payroll, attendance, and performance tracking.",
            tags: ["HR Management", "Payroll", "Attendance"]
        },
        {
            code: "CAP-06",
            icon: <Cpu className="w-5 h-5" />,
            title: "AI Integration & Workflows",
            desc: "Smart platforms powered by production AI APIs — LLM integrations, automation, and agentic workflows that supercharge operations.",
            tags: ["LLM APIs", "LangChain", "Automation"]
        }
    ];

    const stack = [
        {
            category: "Frontend",
            items: ["React 19", "Next.js 16", "TypeScript", "Framer Motion", "Tailwind CSS", "shadcn/ui"]
        },
        {
            category: "Backend",
            items: ["Node.js", "Express.js", "Python", "FastAPI", "PostgreSQL", "MongoDB"]
        },
        {
            category: "Deployment & DevOps",
            items: ["Vercel", "AWS", "Docker", "GitHub Actions", "Kubernetes"]
        },
        {
            category: "AI & APIs",
            items: ["OpenAI", "Claude", "LangChain", "Stripe", "Razorpay"]
        }
    ];

    const pricing = [
        {
            name: "Landing Pages / Maintenance",
            priceINR: "₹8000-15000",
            deliveryWeeks: "1-2",
            desc: "Perfect for launching your idea",
            features: ["Mobile Responsive", "Contact Form", "Analytics Setup", "Domain & Hosting Help", "SEO Optimized"]
        },
        {
            name: "Web Applications ",
            priceINR: "25000-40000",
            deliveryWeeks: "4-6",
            desc: "Full-featured app with backend",
            features: ["Authentication System", "Database Design", "Admin Dashboard", "Payment Integration", "API Documentation"],
            highlighted: true
        },
        {
            name: "SaaS / Ecommerce / LMS / CRM",
            priceINR: "40000-75000",
            deliveryWeeks: "8-12",
            desc: "Enterprise-grade solution",
            features: ["Multi-tenant Architecture", "Advanced Analytics", "AI Integration", "24/7 Support", "Custom Features"]
        }
    ];

    const projects = [
        {
            icon: <ShoppingCart className="w-6 h-6 text-[#C9962E]" />,
            title: "Snazzy Cart",
            category: "AI-Driven E-Commerce",
            desc: "A full storefront with a real-time AI shopping assistant and automated review summarization, running on Groq LPU for sub-second inference at checkout.",
            tags: ["React", "Groq LPU", "AI Shopping Assistant"],
            highlight: "Sub-second AI inference, live at checkout",
        },
        {
            icon: <Users className="w-6 h-6 text-[#C9962E]" />,
            title: "Soch Vichar",
            category: "Social Platform",
            desc: "A social platform with built-in AI writing assistance and a high-security double-token (access + refresh) auth system for persistent sessions.",
            tags: ["Node.js", "JWT Refresh Tokens", "AI Writing Assistant"],
            highlight: "Double-token auth, persistent secure sessions",
        },
        {
            icon: <LayoutGrid className="w-6 h-6 text-[#C9962E]" />,
            title: "Pro Space",
            category: "Hybrid Office SaaS",
            desc: "A hybrid-office platform with a natural-language booking assistant for desks and rooms, plus AI sentiment analysis on workspace feedback.",
            tags: ["React", "TypeScript", "NLP Booking"],
            highlight: "Book a desk by typing a sentence, not filling a form",
        },
        {
            icon: <Zap className="w-6 h-6 text-[#C9962E]" />,
            title: "Disaster Relief Coordination Platform",
            category: "Production Backend",
            desc: "A production-grade coordination backend for NGOs, shelters, volunteers, and donors — geospatial matching, live disaster requests, and real-time updates during active emergencies.",
            tags: ["Node.js", "MongoDB 2dsphere", "Redis + BullMQ", "Socket.io"],
            highlight: "Real-time coordination across NGOs, shelters & volunteers",
        },
        {
            icon: <BarChart3 className="w-6 h-6 text-[#C9962E]" />,
            title: "Onetimex Thane",
            category: "Fintech / Trading Platform",
            desc: "Sole backend developer on a stock trading and investment platform — REST APIs for onboarding, portfolios and transactions, plus third-party payment integrations and secure session handling.",
            tags: ["Node.js", "AWS", "REST APIs", "Payment Integrations"],
            highlight: "Sole backend owner, live financial platform",
        }
    ];

    return (
        <div className="bg-black text-[#F5F5F4] overflow-x-hidden">
            <FontLoader />
            <TopBanner />
            <FixedNavbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <TrustMarquee />

            {/* HERO SECTION */}
            <section id="home" className="relative z-10 min-h-screen flex items-center justify-center px-6 py-24 md:py-32 blueprint-grid">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="max-w-5xl mx-auto text-center space-y-8"
                >
                    <div className="space-y-3">
                        <h1 className="font-display text-3xl md:text-2xl lg:text-7xl font-bold text-[#F5F5F4] leading-tight">
                            Your ideas to <span className="text-[#C9962E]">production</span> in weeks, not months
                        </h1>
                    </div>

                    <p className="font-body text-lg md:text-xl text-[#A0A0A0] max-w-2xl mx-auto">
                        BuildAura transforms your concept into a ship-ready product. Direct access to founders. No middlemen. No bloat. From US startups to Indian enterprises, we deliver.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <a
                            href={`mailto:${AGENCY_EMAIL}`}
                            className="px-8 py-3 bg-[#C9962E] text-black font-tech text-sm uppercase tracking-wider hover:bg-[#E3B84A] transition-colors"
                        >
                            Start Your Project
                        </a>
                        <a
                            href="#projects"
                            className="px-8 py-3 border border-[#C9962E] text-[#C9962E] font-tech text-sm uppercase tracking-wider hover:bg-[#C9962E] hover:text-black transition-colors"
                        >
                            See Our Work
                        </a>
                    </div>
                </motion.div>
            </section>

            {/* SERVICES SECTION */}
            <section id="services" className="relative z-10 py-24 px-6 max-w-7xl mx-auto border-t border-[#242424]">
                <div className="max-w-2xl mb-16">
                    <h2 className="font-tech text-[11px] uppercase tracking-[0.2em] text-[#C9962E] mb-3">01 — Services</h2>
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-[#F5F5F4]">Services we provide</h3>
                    <p className="mt-4 text-[#A0A0A0]">
                        Application development, E-commerce applications, SaaS applications, CRM based applications, HRMS based applications, and much more for any business globally.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#242424]">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.08 }}
                            className="p-8 bg-black flex flex-col justify-between card-lift"
                        >
                            <div>
                                <div className="mb-4 p-3 w-fit bg-[#0A0A0A] border border-[#C9962E]/20 rounded">
                                    <div className="text-[#C9962E]">{service.icon}</div>
                                </div>
                                <h4 className="font-display font-bold text-[#F5F5F4] text-lg mb-2">{service.title}</h4>
                                <p className="text-sm text-[#A0A0A0] mb-6">{service.desc}</p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {service.tags.map((tag, i) => (
                                    <span key={i} className="px-3 py-1 bg-[#0A0A0A] border border-[#242424] text-[#A0A0A0] text-xs font-tech rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* PRICING SECTION */}
            <section id="pricing" className="relative z-10 py-24 px-6 max-w-7xl mx-auto border-t border-[#242424]">
                <div className="max-w-2xl mb-12">
                    <h2 className="font-tech text-[11px] uppercase tracking-[0.2em] text-[#C9962E] mb-3">02 — Pricing</h2>
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-[#F5F5F4]">Our pricing based on client requirements. No fixed rate.</h3>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {pricing.map((plan, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={`p-8 border ${plan.highlighted ? 'border-[#C9962E] bg-[#0A0A0A]/60 ring-1 ring-[#C9962E]/30' : 'border-[#242424] bg-black'} card-lift`}
                        >
                            <h4 className="font-display font-bold text-[#F5F5F4] text-lg mb-2">{plan.name}</h4>
                            <p className="text-sm text-[#A0A0A0] mb-4">{plan.desc}</p>

                            <div className="space-y-2 mb-6 pb-6 border-b border-[#242424]">
                                <div className="flex items-baseline gap-2">
                                    <span className="font-display font-bold text-3xl text-[#C9962E]">{plan.priceUSD}</span>
                                    <span className="text-xs text-[#A0A0A0]">or</span>
                                </div>
                                <div className="flex items-baseline gap-2">
                                    <span className="font-display font-bold text-2xl text-[#5FBFAE]">{plan.priceINR}</span>
                                    <span className="text-xs text-[#A0A0A0]">INR</span>
                                </div>
                                <p className="text-xs text-[#A0A0A0] pt-2">Delivery: {plan.deliveryWeeks}</p>
                            </div>

                            <div className="space-y-3">
                                {plan.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm text-[#A0A0A0]">
                                        <CheckCircle2 className="w-4 h-4 text-[#5FBFAE]" />
                                        {feature}
                                    </div>
                                ))}
                            </div>

                            <a
                                href={`mailto:${AGENCY_EMAIL}`}
                                className="mt-8 block text-center py-3 bg-[#C9962E] text-black font-tech text-xs uppercase tracking-wider hover:bg-[#E3B84A] transition-colors"
                            >
                                Get Started
                            </a>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* TECH STACK SECTION */}
            <section id="stack" className="relative z-10 py-24 px-6 max-w-7xl mx-auto border-t border-[#242424]">
                <div className="max-w-2xl mb-12">
                    <h2 className="font-tech text-[11px] uppercase tracking-[0.2em] text-[#C9962E] mb-3">03 — Stack</h2>
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-[#F5F5F4]">Modern tech, battle-tested</h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stack.map((section, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-6 border border-[#242424] bg-black card-lift"
                        >
                            <h4 className="font-display font-bold text-[#C9962E] mb-4">{section.category}</h4>
                            <div className="space-y-2">
                                {section.items.map((item, i) => (
                                    <p key={i} className="text-sm text-[#A0A0A0]">{item}</p>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* TEAM SECTION */}
            <section id="founders" className="relative z-10 py-24 px-6 max-w-7xl mx-auto border-t border-[#242424]">
                <div className="max-w-2xl mb-16">
                    <h2 className="font-tech text-[11px] uppercase tracking-[0.2em] text-[#C9962E] mb-3">04 — Personnel</h2>
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-[#F5F5F4]">Meet the BuildAura Team</h3>
                    <p className="mt-3 text-[#A0A0A0] text-sm">
                        Satyam and Parag are the founders and core architects of BuildAura. They lead every project personally, ensuring production-grade quality. Our growing team brings specialized expertise in development, design, and digital marketing.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#242424]">
                    {/* Satyam */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="p-8 bg-black flex flex-col justify-between"
                    >
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-32 h-40 bg-gradient-to-br from-[#C9962E] to-[#5FBFAE] flex items-center justify-center border border-[#242424] shrink-0">
                                    {/* <span className="font-tech text-2xl text-white font-bold">SK</span> */}
                                    <img src="../images/Satyam.jpeg" alt="satyam" className='object-contain' />
                                </div>
                                <div>
                                    <h4 className="text-lg font-display font-bold text-[#F5F5F4]">Satyam</h4>
                                    <p className="text-xs font-tech text-[#C9962E] mt-1">Co-Founder & Tech Lead</p>
                                </div>
                            </div>

                            <p className="text-[#A0A0A0] text-sm leading-relaxed">
                                Full-stack architect with expertise in scalable systems, performance optimization, and production deployment. Leads technical strategy and ensures code quality across all projects.
                            </p>

                            <div className="space-y-2 text-xs font-tech text-[#A0A0A0]">
                                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#5FBFAE]" /> Architecture Design</div>
                                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#5FBFAE]" /> Performance Optimization</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Parag */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.06 }}
                        className="p-8 bg-black flex flex-col justify-between"
                    >
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-32 h-40 bg-gradient-to-br from-[#5FBFAE] to-[#C9962E] flex items-center justify-center border border-[#242424] shrink-0">
                                    <img src="../images/Parag.jpeg" alt="parag" className='object-contain' />
                                </div>
                                <div>
                                    <h4 className="text-lg font-display font-bold text-[#F5F5F4]">Parag</h4>
                                    <p className="text-xs font-tech text-[#C9962E] mt-1">Co-Founder & Full-Stack Dev</p>
                                </div>
                            </div>

                            <p className="text-[#A0A0A0] text-sm leading-relaxed">
                                End-to-end product developer with expertise in React, Node.js, and database design. Manages project delivery and client communication for seamless execution.
                            </p>

                            <div className="space-y-2 text-xs font-tech text-[#A0A0A0]">
                                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#5FBFAE]" /> Full-Stack Development</div>
                                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#5FBFAE]" /> Project Management</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Anurag Singh */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.12 }}
                        className="p-8 bg-black flex flex-col justify-between"
                    >
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-32 h-40 bg-gradient-to-br from-[#C9962E] to-[#5FBFAE] flex items-center justify-center border border-[#242424] shrink-0">
                                    <img src="../images/Anurag.jpeg" alt="anurag" className='object-contain' />
                                </div>
                                <div>
                                    <h4 className="text-lg font-display font-bold text-[#F5F5F4]">Anurag Singh</h4>
                                    <p className="text-xs font-tech text-[#C9962E] mt-1">Java Developer</p>
                                </div>
                            </div>

                            <p className="text-[#A0A0A0] text-sm leading-relaxed">
                                Specializes in robust backend systems and enterprise Java applications. Brings expertise in microservices architecture and high-performance API development.
                            </p>

                            <div className="space-y-2 text-xs font-tech text-[#A0A0A0]">
                                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#5FBFAE]" /> Enterprise Java Systems</div>
                                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#5FBFAE]" /> Microservices Architecture</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Vedang Kanade */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.18 }}
                        className="p-8 bg-black flex flex-col justify-between"
                    >
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-32 h-40 bg-gradient-to-br from-[#5FBFAE] to-[#C9962E] flex items-center justify-center border border-[#242424] shrink-0">
                                    <img src="../images/Vedang.png" alt="vedang" className='object-contain' />
                                </div>
                                <div>
                                    <h4 className="text-lg font-display font-bold text-[#F5F5F4]">Vedang Kanade</h4>
                                    <p className="text-xs font-tech text-[#C9962E] mt-1">MERN Stack Developer</p>
                                </div>
                            </div>

                            <p className="text-[#A0A0A0] text-sm leading-relaxed">
                                Full-stack developer with deep expertise in MongoDB, Express, React, and Node.js. Crafts seamless user experiences with modern JavaScript technologies.
                            </p>

                            <div className="space-y-2 text-xs font-tech text-[#A0A0A0]">
                                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#5FBFAE]" /> Full-Stack Development</div>
                                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#5FBFAE]" /> Web Application Architecture</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Felix Rodrigues */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.24 }}
                        className="p-8 bg-black flex flex-col justify-between"
                    >
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-32 h-40 flex items-center justify-center border border-[#242424] shrink-0">
                                    <img src="../images/Felix.png" alt="felix" className='object-contain' />
                                </div>
                                <div>
                                    <h4 className="text-lg font-display font-bold text-[#F5F5F4]">Felix Rodrigues</h4>
                                    <p className="text-xs font-tech text-[#C9962E] mt-1">Digital Marketing</p>
                                </div>
                            </div>

                            <p className="text-[#A0A0A0] text-sm leading-relaxed">
                                Strategic digital marketing expert focused on brand growth and market positioning. Drives client success through data-driven marketing campaigns and digital strategy.
                            </p>

                            <div className="space-y-2 text-xs font-tech text-[#A0A0A0]">
                                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#5FBFAE]" /> Digital Marketing Strategy</div>
                                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#5FBFAE]" /> Brand & Growth Marketing</div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="mt-12 p-8 bg-[#0A0A0A]/60 border border-[#242424]">
                    <p className="text-[#A0A0A0] text-sm leading-relaxed">
                        <span className="text-[#C9962E] font-tech font-semibold">📈 Growing Team:</span> As our projects scale and client demands expand, we are actively expanding our team with specialized talent. More developers, designers, and specialists will join us to deliver even greater value and faster turnaround times.
                    </p>
                </div>
            </section>

            {/* PARTNERSHIP SECTION */}
            <section id="partnership" className="relative z-10 py-24 px-6 max-w-7xl mx-auto border-t border-[#242424]">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="max-w-4xl mb-12"
                >
                    <h2 className="font-tech text-[11px] uppercase tracking-[0.2em] text-[#C9962E] mb-3">PARTNERSHIP</h2>
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-[#F5F5F4] mb-6">Our Latest Partnership Agency</h3>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="border border-[#242424] bg-[#0A0A0A]/60 backdrop-blur-sm p-8 md:p-12 card-lift"
                >
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="flex flex-col gap-4">
                                <div className="w-24 h-24 bg-gradient-to-br from-[#C9962E] to-[#5FBFAE] rounded-lg flex items-center justify-center">
                                    <span className="font-tech text-3xl text-white font-bold">JM</span>
                                </div>
                                <div>
                                    <h4 className="text-2xl font-display font-bold text-[#F5F5F4]">Jugaad Marketing</h4>
                                    <p className="text-sm font-tech text-[#C9962E] mt-1">Digital Marketing Agencies</p>
                                </div>
                            </div>

                            <p className="text-[#A0A0A0] leading-relaxed">
                                Jugaad Marketing is a strategic partner specializing in digital marketing solutions for businesses of all sizes. They bring creative campaigns, data-driven strategies, and proven results to help brands grow and scale in the digital landscape.
                            </p>

                            <div className="space-y-3 pt-4 border-t border-[#242424]">
                                <h5 className="text-sm font-display font-bold text-[#F5F5F4]">Services:</h5>
                                <div className="space-y-2 text-sm text-[#A0A0A0]">
                                    <div className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#5FBFAE] shrink-0 mt-0.5" /> Digital Marketing Strategy</div>
                                    <div className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#5FBFAE] shrink-0 mt-0.5" /> Social Media Management</div>
                                    <div className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#5FBFAE] shrink-0 mt-0.5" /> SEO & Content Marketing</div>
                                    <div className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#5FBFAE] shrink-0 mt-0.5" /> Brand Development</div>
                                </div>
                            </div>

                            <a
                                href="https://jugaadmktg.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 font-tech text-xs uppercase tracking-wider text-black bg-[#C9962E] hover:bg-[#E3B84A] transition-colors duration-200 group"
                            >
                                Visit Website
                                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 16 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="p-8 bg-[#5FBFAE]/5 border border-[#5FBFAE]/30 rounded-lg"
                        >
                            <div className="space-y-4">
                                <div>
                                    <p className="text-[#A0A0A0] text-xs font-tech uppercase tracking-wider mb-2">Partnership Focus</p>
                                    <p className="text-[#F5F5F4] font-display font-bold">Integrated Tech + Marketing Solutions</p>
                                </div>
                                <div className="pt-4 border-t border-[#5FBFAE]/20">
                                    <p className="text-[#A0A0A0] text-xs font-tech uppercase tracking-wider mb-2">Collaboration</p>
                                    <p className="text-[#F5F5F4] text-sm">We work seamlessly with Jugaad Marketing to provide end-to-end solutions — combining technical excellence with cutting-edge digital marketing strategies.</p>
                                </div>
                                <div className="pt-4 border-t border-[#5FBFAE]/20">
                                    <p className="text-[#A0A0A0] text-xs font-tech uppercase tracking-wider mb-2">Website</p>
                                    <a
                                        href="https://jugaadmktg.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#C9962E] hover:text-[#E3B84A] transition-colors text-sm font-tech"
                                    >
                                        jugaadmktg.com →
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* PROJECTS SECTION */}
            <section id="projects" className="relative z-10 py-24 px-6 max-w-7xl mx-auto border-t border-[#242424]">
                <div className="max-w-2xl mb-12">
                    <h2 className="font-tech text-[11px] uppercase tracking-[0.2em] text-[#C9962E] mb-3">05 — Work</h2>
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-[#F5F5F4]">Featured projects we shipped</h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 border-l border-t border-[#242424]">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.06 }}
                            className="p-8 border-r border-b border-[#242424] hover:bg-[#0A0A0A]/60 transition-colors duration-200 flex flex-col justify-between card-lift"
                        >
                            <div>
                                <div className="flex justify-between items-start mb-4 gap-4">
                                    <span className="font-tech text-[10px] uppercase tracking-wider px-3 py-1 border border-[#C9962E]/40 text-[#C9962E]">
                                        {project.category}
                                    </span>
                                    {project.icon}
                                </div>
                                <h4 className="font-display font-bold text-[#F5F5F4] text-lg mb-3">{project.title}</h4>
                                <p className="text-[#A0A0A0] text-sm leading-relaxed mb-6">{project.desc}</p>
                                <div className="p-3 bg-[#0A0A0A] border border-[#C9962E]/20 rounded mb-6">
                                    <p className="text-xs font-tech text-[#C9962E]">{project.highlight}</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="px-2 py-1 bg-[#0A0A0A] border border-[#242424] text-[#A0A0A0] text-xs font-tech">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* FAQ SECTION */}
            <FAQSection />

            {/* CONTACT SECTION */}
            <section id="contact" className="relative z-10 py-24 px-6 max-w-7xl mx-auto border-t border-[#242424]">
                <div className="max-w-2xl mb-12">
                    <h2 className="font-tech text-[11px] uppercase tracking-[0.2em] text-[#C9962E] mb-3">09 — Work Order</h2>
                    <DualClock />
                </div>

                <div className="max-w-2xl space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h3 className="text-3xl md:text-4xl font-display font-bold text-[#F5F5F4]">Let's build your next product.</h3>
                        <p className="text-[#A0A0A0]">Ready to turn your idea into reality? Get in touch with our team for a free consultation and project quote.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="grid sm:grid-cols-2 gap-6"
                    >
                        <a
                            href={`mailto:${AGENCY_EMAIL}`}
                            className="p-6 border border-[#242424] bg-black hover:bg-[#0A0A0A] transition-colors card-lift"
                        >
                            <Mail className="w-8 h-8 text-[#C9962E] mb-4" />
                            <p className="font-tech text-xs uppercase tracking-wider text-[#A0A0A0] mb-2">Email</p>
                            <p className="font-display font-bold text-[#F5F5F4] break-all">{AGENCY_EMAIL}</p>
                        </a>

                        <div className="p-6 border border-[#242424] bg-black">
                            <MapPin className="w-8 h-8 text-[#C9962E] mb-4" />
                            <p className="font-tech text-xs uppercase tracking-wider text-[#A0A0A0] mb-2">Based In</p>
                            <p className="font-display font-bold text-[#F5F5F4]">Maharashtra, India</p>
                            <p className="text-sm text-[#A0A0A0] mt-2">Serving global clients 24/7</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FOOTER */}
            <Footer />

            {/* SCROLL TO TOP BUTTON */}
            <ScrollToTop />
        </div>
    );
}


