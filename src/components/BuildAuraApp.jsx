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
    Award
} from 'lucide-react';

const AGENCY_EMAIL = 'aurabuildagency@gmail.com';

// --- INLINE SVG BRAND ICONS ---
const GithubIcon = ({ size = 18, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
);

const LinkedinIcon = ({ size = 18, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
);

// --- FONTS ---
// Sora: display / structural type — clean, confident, reads as "professional software studio"
// rather than a trendy geometric face. Inter: body copy, the industry-standard for legibility
// in product UIs, which is exactly the register a technical US client expects.
// IBM Plex Mono: technical annotations, specs, codes. Move this @import into your global
// stylesheet / index.html <link> tags for production — kept inline here for drop-in convenience.
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

// --- LIVE DUAL-TIMEZONE CLOCK ---
// Grounded signature element: BuildAura's real claim is US + India coverage.
// Instead of just saying it, show it — live, running clocks in both zones.
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
    const est = useLiveTime('America/New_York');
    const ist = useLiveTime('Asia/Kolkata');
    return (
        <div className={`flex items-center ${compact ? 'gap-3 text-[11px]' : 'gap-5 text-xs'} font-tech text-[#A0A0A0]`}>
            <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5FBFAE] animate-pulse"></span>
                <span className="text-[#F5F5F4]">{est}</span>
                <span>NYC</span>
            </div>
            <div className="w-px h-3 bg-[#242424]"></div>
            <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5FBFAE] animate-pulse"></span>
                <span className="text-[#F5F5F4]">{ist}</span>
                <span>MUM</span>
            </div>
        </div>
    );
};

// --- TOP ANNOUNCEMENT BANNER ---
const TopBanner = () => (
    <div className="relative z-50 bg-[#C9962E] text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-1.5 sm:gap-4 text-center sm:text-left">
            <p className="font-tech text-[10px] sm:text-[11px] uppercase tracking-[0.15em] font-medium">
                Serving US startups &amp; Indian businesses — EST · PST · IST coverage
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

// --- TRUST MARQUEE ---
const TrustMarquee = () => {
    const items = [
        "5+ Production Apps Shipped",
        "US & India Client Coverage",
        "React · Next.js · Node.js",
        "AI Integration Ready",
        "Transparent Fixed Pricing",
        "Direct Engineer Access",
        "Stripe & PayPal Ready",
        "UPI & Razorpay Compatible",
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

// --- FAQ ACCORDION ---
const FAQSection = () => {
    const [openIdx, setOpenIdx] = useState(0);
    const faqs = [
        {
            q: "Do you work with US clients remotely?",
            a: "Yes. We work exclusively remote with US founders and SMBs. Our IST schedule overlaps US morning through evening (EST/PST), so you get same-day responses and regular sync calls in your timezone."
        },
        {
            q: "Can Indian businesses pay in INR?",
            a: "Absolutely. Our rate card is listed in INR with USD equivalents for reference. We accept UPI, bank transfer, and Razorpay for Indian clients, and Stripe or wire transfer for US clients."
        },
        {
            q: "Why a two-person studio instead of a big agency?",
            a: "No account managers, no hand-offs, no junior devs rotated onto your project. The same two engineers who scope your project are the ones writing every line of code — which is why we ship in weeks, not months."
        },
        {
            q: "What's included in the starting price tiers?",
            a: "Each tier covers design, development, deployment guidance, and a defined scope (pages, features, or app modules). We confirm exact deliverables with you before any work begins — no surprise add-ons."
        },
        {
            q: "Do you handle AI and LLM integrations?",
            a: "Yes. We've shipped AI shopping assistants, review summarization, NLP booking, and writing tools in production. LLM orchestration and agentic workflows are available for early-access engagements."
        },
        {
            q: "How do I get started?",
            a: `Email us directly at ${AGENCY_EMAIL}. We respond within one business day with a scope outline and fixed quote.`
        }
    ];

    return (
        <section id="faq" className="relative z-10 py-24 px-6 max-w-7xl mx-auto border-t border-[#242424]">
            <div className="max-w-2xl mb-12">
                <h2 className="font-tech text-[11px] uppercase tracking-[0.2em] text-[#C9962E] mb-3">07 — FAQ</h2>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-[#F5F5F4]">Questions from US &amp; India clients</h3>
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

export default function BuildAuraApp() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const services = [
        {
            code: "CAP-01",
            icon: <Globe className="w-5 h-5" />,
            title: "Full-Stack Web Applications",
            desc: "Dynamic, scalable React & Next.js applications backed by robust Node.js and modern database systems tailored for high performance.",
            tags: ["React", "Next.js", "Node.js", "PostgreSQL"]
        },
        {
            code: "CAP-02",
            icon: <Cpu className="w-5 h-5" />,
            title: "AI Integration & Workflows",
            desc: "Smart platforms powered by production AI APIs — LLM integrations, automated review summarization, and agentic workflows that supercharge operations.",
            tags: ["LLM APIs", "LangChain", "Automation"]
        },
        {
            code: "CAP-03",
            icon: <Layers className="w-5 h-5" />,
            title: "E-Commerce & SaaS Systems",
            desc: "Custom e-commerce platforms and SaaS architecture complete with payment rails (Stripe, PayPal), auth, and admin dashboards.",
            tags: ["Custom UI/UX", "Stripe", "REST / GraphQL"]
        },
        {
            code: "CAP-04",
            icon: <Rocket className="w-5 h-5" />,
            title: "MVP Development",
            desc: "Your raw startup concept, turned into a fully functioning, pitch-ready product — built to test with real users fast.",
            tags: ["Fast Iteration", "Scalable Base"]
        },
        {
            code: "CAP-05",
            icon: <Code className="w-5 h-5" />,
            title: "API Development & Integration",
            desc: "Secure, structured RESTful and GraphQL APIs connecting multi-platform systems with reliable performance and speed.",
            tags: ["Express.js", "JWT Auth", "Webhooks"]
        },
        {
            code: "CAP-06",
            icon: <Zap className="w-5 h-5" />,
            title: "Performance & UI/UX Optimization",
            desc: "Slow, cluttered legacy frontends rebuilt into smooth, responsive, mobile-first interfaces.",
            tags: ["Framer Motion", "Core Web Vitals", "SEO"]
        }
    ];

    const techStack = [
        {
            code: "STACK-01",
            icon: <Code className="w-5 h-5" />,
            group: "Frontend",
            items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
        },
        {
            code: "STACK-02",
            icon: <Cpu className="w-5 h-5" />,
            group: "Backend",
            items: ["Node.js", "Express.js", "REST & GraphQL", "JWT + Refresh Tokens", "Zod"]
        },
        {
            code: "STACK-03",
            icon: <Database className="w-5 h-5" />,
            group: "Databases",
            items: ["MongoDB", "Mongoose", "PostgreSQL", "2dsphere Geospatial Indexing"]
        },
        {
            code: "STACK-04",
            icon: <Cloud className="w-5 h-5" />,
            group: "Cloud & Infrastructure",
            items: ["Docker", "AWS", "Redis", "BullMQ", "RabbitMQ", "Socket.io"]
        }
    ];

    const roadmapStack = ["LLM Integration", "LangChain", "Agentic AI Workflows", "Groq LPU Inference"];

    const pricingTiers = [
        {
            code: "TIER-01",
            name: "Simple Website",
            price: "₹10,000",
            usd: "≈ $120",
            desc: "A focused single-purpose site — portfolio, landing page, or small business presence. Up to 5 pages, fully responsive, contact form included.",
            includes: ["1–5 pages", "Responsive design", "Basic SEO setup", "Contact form"]
        },
        {
            code: "TIER-02",
            name: "Multi-Page Website",
            price: "₹20,000",
            usd: "≈ $240",
            desc: "A complete business site built to scale — structured content, clean navigation, and a CMS-ready foundation for ongoing updates.",
            includes: ["6–15 pages", "CMS-ready structure", "On-page SEO", "Analytics setup"]
        },
        {
            code: "TIER-03",
            name: "E-Commerce Development",
            price: "₹50,000",
            usd: "≈ $600",
            desc: "A full storefront — product catalog, cart, secure checkout, and an admin dashboard to manage inventory and orders.",
            includes: ["Payment gateway", "Admin dashboard", "Product management", "Order tracking"]
        },
        {
            code: "TIER-04",
            name: "Application Development",
            price: "₹75,000",
            usd: "≈ $900",
            desc: "Custom web applications and SaaS platforms — full backend, authentication, database design, and AI integration where needed.",
            includes: ["Custom backend", "Auth & user roles", "Database design", "AI/API integration"]
        }
    ];

    return (
        <div className="min-h-screen bg-black text-[#F5F5F4] font-body antialiased selection:bg-[#C9962E] selection:text-black">
            <FontLoader />

            <TopBanner />
            <ScrollToTop />

            {/* BLUEPRINT GRID BACKDROP — pure black base, no color tint */}
            <div className="fixed inset-0 pointer-events-none blueprint-grid z-0"></div>
            <div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-b from-black via-transparent to-black"></div>

            {/* --- NAVBAR --- */}
            <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/85 border-b border-[#242424]">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <a href="#home" className="flex items-center gap-2.5">
                        <span className="w-8 h-8 border border-[#C9962E]/60 flex items-center justify-center text-[#C9962E] font-tech text-xs">BA</span>
                        <span className="text-xl font-display font-bold tracking-tight text-[#F5F5F4]">
                            BuildAura<span className="text-[#C9962E]"></span>
                        </span>
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-5 text-sm font-medium text-[#A0A0A0]">
                        <a href="#about" className="hover:text-[#F5F5F4] transition-colors">About</a>
                        <a href="#services" className="hover:text-[#F5F5F4] transition-colors">Capabilities</a>
                        <a href="#stack" className="hover:text-[#F5F5F4] transition-colors">Stack</a>
                        <a href="#pricing" className="hover:text-[#F5F5F4] transition-colors">Pricing</a>
                        <a href="#founders" className="hover:text-[#F5F5F4] transition-colors">Team</a>
                        <a href="#projects" className="hover:text-[#F5F5F4] transition-colors">Work</a>
                        <a href="#faq" className="hover:text-[#F5F5F4] transition-colors">FAQ</a>
                    </div>

                    <div className="hidden xl:flex items-center gap-4">
                        <a
                            href={`mailto:${AGENCY_EMAIL}`}
                            className="inline-flex items-center gap-1.5 font-tech text-[10px] text-[#A0A0A0] hover:text-[#C9962E] transition-colors"
                        >
                            <Mail className="w-3.5 h-3.5" />
                            {AGENCY_EMAIL}
                        </a>
                        <DualClock compact />
                    </div>

                    <div className="hidden lg:block xl:hidden">
                        <DualClock compact />
                    </div>

                    <div className="hidden md:block">
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-5 py-2.5 font-tech text-xs uppercase tracking-wider text-black bg-[#C9962E] hover:bg-[#E3B84A] transition-colors duration-200"
                        >
                            Start a Project
                            <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-[#F5F5F4]"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
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
                        <a href="#faq" onClick={() => setIsMenuOpen(false)} className="hover:text-[#F5F5F4]">FAQ</a>
                        <a
                            href={`mailto:${AGENCY_EMAIL}`}
                            onClick={() => setIsMenuOpen(false)}
                            className="inline-flex items-center gap-2 text-[#C9962E] font-tech text-xs"
                        >
                            <Mail className="w-4 h-4" />
                            {AGENCY_EMAIL}
                        </a>
                        <div className="pt-2"><DualClock /></div>
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

            {/* --- HERO SECTION --- */}
            <section id="home" className="relative z-10 pt-16 pb-12 px-6 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-12 gap-12 items-start">
                    <motion.div
                        className="md:col-span-7 space-y-7"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInUp} className="flex items-center gap-2 font-tech text-[11px] uppercase tracking-[0.2em] text-[#C9962E]">
                            <span className="w-6 h-px bg-[#C9962E]"></span>
                            Full-Stack Studio · US &amp; India
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-[1.05] text-[#F5F5F4]">
                            Production-grade softwares for <br />
                            <span className="text-[#C9962E]">International clients</span> &amp; <span className="text-[#5FBFAE]">Indian businesses</span>
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="text-lg text-[#A0A0A0] leading-relaxed max-w-2xl font-body">
                            BuildAura is a two-engineer studio that ships full-stack web apps, SaaS platforms,
                            and AI-powered products — with transparent pricing in INR &amp; USD, direct access
                            to the developers building your product, and timezone coverage from New York to Mumbai.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="pt-1 flex flex-col sm:flex-row items-start gap-4">
                            <a
                                href="#contact"
                                className="w-full sm:w-auto px-8 py-4 font-tech text-xs uppercase tracking-wider text-black bg-[#C9962E] hover:bg-[#E3B84A] transition-colors duration-200 flex items-center justify-center gap-2 group"
                            >
                                Schedule a Consultation
                                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href={`mailto:${AGENCY_EMAIL}`}
                                className="w-full sm:w-auto px-8 py-4 font-tech text-xs uppercase tracking-wider text-[#F5F5F4] border border-[#242424] hover:border-[#C9962E]/60 transition-colors duration-200 flex items-center justify-center gap-2"
                            >
                                <Mail className="w-4 h-4 text-[#C9962E]" />
                                {AGENCY_EMAIL}
                            </a>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="pt-8 border-t border-[#242424] grid grid-cols-2 sm:grid-cols-4 gap-4">
                            <div>
                                <h4 className="text-2xl font-display font-bold text-[#F5F5F4]">5+</h4>
                                <p className="text-xs text-[#A0A0A0] font-tech mt-1">Products Shipped</p>
                            </div>
                            <div>
                                <h4 className="text-2xl font-display font-bold text-[#F5F5F4]">2</h4>
                                <p className="text-xs text-[#A0A0A0] font-tech mt-1">Engineers, Every Build</p>
                            </div>
                            <div>
                                <h4 className="text-2xl font-display font-bold text-[#F5F5F4]">24h</h4>
                                <p className="text-xs text-[#A0A0A0] font-tech mt-1">Response Guarantee</p>
                            </div>
                            <div>
                                <h4 className="text-2xl font-display font-bold text-[#F5F5F4]">EST–IST</h4>
                                <p className="text-xs text-[#A0A0A0] font-tech mt-1">Dual-Timezone Coverage</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* HERO — TITLE BLOCK / SPEC STAMP */}
                    <motion.div
                        className="md:col-span-5"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div className="border border-[#242424] bg-[#0A0A0A]/80 backdrop-blur-sm gold-glow card-lift">
                            <div className="flex items-center justify-between px-5 py-3 border-b border-[#242424]">
                                <span className="font-tech text-[10px] uppercase tracking-[0.2em] text-[#A0A0A0]">Engagement Spec</span>
                                <span className="flex items-center gap-1.5 font-tech text-[10px] uppercase tracking-wider text-[#5FBFAE]">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#5FBFAE] animate-pulse"></span>
                                    Accepting Projects
                                </span>
                            </div>

                            <div className="divide-y divide-[#242424] font-tech text-xs">
                                {[
                                    ["Studio", "BuildAura"],
                                    ["Team Size", "2 — no subcontractors"],
                                    ["Markets", "United States · India"],
                                    ["Focus", "Full-Stack & AI Product Eng."],
                                    ["Core Stack", "React · Next.js · Node.js"],
                                    ["Coverage", "EST · PST · IST"],
                                    ["Contact", AGENCY_EMAIL],
                                ].map(([k, v]) => (
                                    <div key={k} className="grid grid-cols-5 px-5 py-3">
                                        <span className="col-span-2 text-[#A0A0A0] uppercase tracking-wider">{k}</span>
                                        {k === "Contact" ? (
                                            <a href={`mailto:${v}`} className="col-span-3 text-[#C9962E] hover:text-[#E3B84A] transition-colors break-all">{v}</a>
                                        ) : (
                                            <span className="col-span-3 text-[#F5F5F4]">{v}</span>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="m-5 p-3 border border-[#5FBFAE]/30 bg-[#5FBFAE]/5 flex items-center gap-2 font-tech text-xs text-[#5FBFAE]">
                                <Shield className="w-4 h-4 shrink-0" />
                                Fixed quotes · No hidden fees · Direct engineer access
                            </div>

                            <div className="px-5 pb-5">
                                <DualClock />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <TrustMarquee />

            {/* --- GOAL & ABOUT SECTION --- */}
            <section id="about" className="relative z-10 py-20 bg-[#0A0A0A]/60 border-y border-[#242424]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="max-w-3xl mb-16"
                    >
                        <h2 className="font-tech text-[11px] uppercase tracking-[0.2em] text-[#C9962E] mb-3">01 — Our Position</h2>
                        <h3 className="text-3xl md:text-4xl font-display font-bold text-[#F5F5F4] leading-tight">
                            A small team isn't a limitation here — it's the reason we're faster than agencies ten times our size.
                        </h3>
                        <p className="mt-4 text-[#A0A0A0] leading-relaxed">
                            Every engagement is led directly by the two engineers who architect, write, and
                            ship the product — end to end, frontend to backend. No account managers, no
                            rotating juniors, no scope creep, and no waiting for a message to travel up and
                            down a chain of command. That's how a two-person studio delivers full applications
                            in fewer cycles than a twenty-person agency.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-px bg-[#242424]">
                        {[
                            {
                                icon: <Timer className="w-5 h-5 text-[#C9962E]" />,
                                title: "Fewer Hands, Faster Delivery",
                                desc: "With just two engineers on every build, there's no hand-off delay, no waiting on a bigger team's schedule — decisions and code happen in the same sitting."
                            },
                            {
                                icon: <Users className="w-5 h-5 text-[#C9962E]" />,
                                title: "Direct Access, Always",
                                desc: "You talk to the person writing your code, not a project manager relaying your notes. Fewer people, clearer communication, fewer mistakes."
                            },
                            {
                                icon: <Code className="w-5 h-5 text-[#C9962E]" />,
                                title: "Full-Stack, Not Fragmented",
                                desc: "Frontend, backend, infrastructure, and AI integration — handled by the same two people who understand the whole system, not siloed specialists."
                            }
                        ].map((card, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-8 bg-black"
                            >
                                <div className="mb-6">{card.icon}</div>
                                <h4 className="text-lg font-display font-bold text-[#F5F5F4] mb-3">{card.title}</h4>
                                <p className="text-[#A0A0A0] text-sm leading-relaxed">{card.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- GLOBAL REACH — US & INDIA --- */}
            <section className="relative z-10 py-20 px-6 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-px bg-[#242424]">
                    <motion.div
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-10 bg-black card-lift"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <DollarSign className="w-6 h-6 text-[#C9962E]" />
                            <span className="font-tech text-[10px] uppercase tracking-[0.2em] text-[#C9962E]">For US Clients</span>
                        </div>
                        <h4 className="text-2xl font-display font-bold text-[#F5F5F4] mb-4">Built for American startups &amp; SMBs</h4>
                        <ul className="space-y-3 text-[#A0A0A0] text-sm leading-relaxed">
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#5FBFAE] shrink-0 mt-0.5" /> EST/PST overlap for daily standups &amp; async updates</li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#5FBFAE] shrink-0 mt-0.5" /> Stripe, PayPal &amp; US wire transfer accepted</li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#5FBFAE] shrink-0 mt-0.5" /> Production-grade code, English-first communication</li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#5FBFAE] shrink-0 mt-0.5" /> MVP-to-scale architecture — no throwaway prototypes</li>
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-10 bg-black card-lift"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <IndianRupee className="w-6 h-6 text-[#5FBFAE]" />
                            <span className="font-tech text-[10px] uppercase tracking-[0.2em] text-[#5FBFAE]">For Indian Clients</span>
                        </div>
                        <h4 className="text-2xl font-display font-bold text-[#F5F5F4] mb-4">Trusted by Indian businesses going digital</h4>
                        <ul className="space-y-3 text-[#A0A0A0] text-sm leading-relaxed">
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#5FBFAE] shrink-0 mt-0.5" /> Transparent INR pricing — no USD conversion surprises</li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#5FBFAE] shrink-0 mt-0.5" /> UPI, bank transfer &amp; Razorpay payment options</li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#5FBFAE] shrink-0 mt-0.5" /> E-commerce, SaaS &amp; custom app development</li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#5FBFAE] shrink-0 mt-0.5" /> Mumbai-based team with local business understanding</li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* --- HOW WE WORK --- */}
            <section className="relative z-10 py-24 bg-[#0A0A0A]/60 border-y border-[#242424]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-2xl mb-16">
                        <h2 className="font-tech text-[11px] uppercase tracking-[0.2em] text-[#C9962E] mb-3">Process</h2>
                        <h3 className="text-3xl md:text-4xl font-display font-bold text-[#F5F5F4]">From first email to shipped product</h3>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#242424]">
                        {[
                            { step: "01", title: "Discovery Call", desc: "Share your idea via form or email. We respond within 24 hours with scope questions and a fixed quote.", icon: <Headphones className="w-5 h-5" /> },
                            { step: "02", title: "Scope & Contract", desc: "Clear deliverables, timeline, and payment terms — in INR or USD. No vague estimates.", icon: <Shield className="w-5 h-5" /> },
                            { step: "03", title: "Build & Iterate", desc: "Direct access to both engineers. Weekly updates, live demos, and same-day feedback loops.", icon: <Code className="w-5 h-5" /> },
                            { step: "04", title: "Launch & Handoff", desc: "Deployment support, documentation, and clean code handoff. We stay available post-launch.", icon: <Award className="w-5 h-5" /> },
                        ].map((item, idx) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.08 }}
                                className="p-8 bg-black card-lift"
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <span className="text-[#C9962E]">{item.icon}</span>
                                    <span className="font-tech text-[10px] text-[#5C5C5C]">{item.step}</span>
                                </div>
                                <h4 className="text-lg font-display font-bold text-[#F5F5F4] mb-3">{item.title}</h4>
                                <p className="text-[#A0A0A0] text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- SERVICES SECTION (SPEC SHEET) --- */}
            <section id="services" className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
                <div className="max-w-2xl mb-16">
                    <h2 className="font-tech text-[11px] uppercase tracking-[0.2em] text-[#C9962E] mb-3">02 — Capability Spec</h2>
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-[#F5F5F4]">What we build, end to end</h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 border-l border-t border-[#242424]">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.06 }}
                            className="p-8 border-r border-b border-[#242424] hover:bg-[#0A0A0A]/60 transition-colors duration-200 flex flex-col justify-between card-lift"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <span className="text-[#C9962E]">{service.icon}</span>
                                    <span className="font-tech text-[10px] text-[#5C5C5C]">{service.code}</span>
                                </div>
                                <h4 className="text-lg font-display font-bold text-[#F5F5F4] mb-3">{service.title}</h4>
                                <p className="text-[#A0A0A0] text-sm leading-relaxed mb-6">{service.desc}</p>
                            </div>
                            <div className="flex flex-wrap gap-x-3 gap-y-1 pt-4 border-t border-[#242424] font-tech text-[10px] text-[#A0A0A0]">
                                {service.tags.map((t, idx) => (
                                    <span key={idx}>#{t.replace(/\s+/g, '')}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* --- TECH STACK --- */}
            <section id="stack" className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
                <div className="max-w-2xl mb-16">
                    <h2 className="font-tech text-[11px] uppercase tracking-[0.2em] text-[#C9962E] mb-3">03 — Technical Spec</h2>
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-[#F5F5F4]">The stack behind the work</h3>
                    <p className="mt-3 text-[#A0A0A0] text-sm leading-relaxed">
                        Every tool below has shipped in a production system, not a tutorial project.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 border-l border-t border-[#242424]">
                    {techStack.map((group) => (
                        <motion.div
                            key={group.code}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="p-8 border-r border-b border-[#242424] flex flex-col"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-[#C9962E]">{group.icon}</span>
                                <span className="font-tech text-[10px] text-[#5C5C5C]">{group.code}</span>
                            </div>
                            <h4 className="text-base font-display font-bold text-[#F5F5F4] mb-4">{group.group}</h4>
                            <ul className="space-y-2">
                                {group.items.map((item) => (
                                    <li key={item} className="font-tech text-xs text-[#A0A0A0]">{item}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* ROADMAP CARD — honest about what's emerging vs. shipped today */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-px border border-dashed border-[#5FBFAE]/30 bg-[#5FBFAE]/[0.03] p-8"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <Sparkles className="w-5 h-5 text-[#5FBFAE]" />
                        <span className="font-tech text-[10px] uppercase tracking-wider px-2.5 py-1 border border-[#5FBFAE]/40 text-[#5FBFAE]">
                            Roadmap — Early Access
                        </span>
                    </div>
                    <h4 className="text-base font-display font-bold text-[#F5F5F4] mb-2">LLM Orchestration & Agentic AI</h4>
                    <p className="text-[#A0A0A0] text-sm leading-relaxed max-w-2xl mb-4">
                        We already integrate AI APIs into production apps today. LangChain-based orchestration
                        and fully agentic workflows are an active build-out on our end — available now for
                        early-access engagements, with deeper capability landing as we grow the practice.
                    </p>
                    <div className="flex flex-wrap gap-x-3 gap-y-1 font-tech text-[10px] text-[#5FBFAE]">
                        {roadmapStack.map((item) => (
                            <span key={item}>#{item.replace(/\s+/g, '')}</span>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* --- PRICING / RATE CARD --- */}
            <section id="pricing" className="relative z-10 py-24 bg-[#0A0A0A]/60 border-y border-[#242424]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-2xl mb-16">
                        <h2 className="font-tech text-[11px] uppercase tracking-[0.2em] text-[#C9962E] mb-3">04 — Rate Card</h2>
                        <h3 className="text-3xl md:text-4xl font-display font-bold text-[#F5F5F4]">Transparent starting rates</h3>
                        <p className="mt-3 text-[#A0A0A0] text-sm leading-relaxed">
                            Fixed starting tiers in INR with USD equivalents — built for Indian businesses
                            and transparent for US clients. Final scope is confirmed with you before work
                            begins — no hidden add-ons.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#242424]">
                        {pricingTiers.map((tier, idx) => (
                            <motion.div
                                key={tier.code}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.08 }}
                                className="p-8 bg-black flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-6">
                                        <span className="font-tech text-[10px] text-[#5C5C5C]">{tier.code}</span>
                                    </div>
                                    <h4 className="text-base font-display font-bold text-[#F5F5F4] mb-1">{tier.name}</h4>
                                    <p className="font-tech text-[10px] text-[#A0A0A0] mb-4">Starting at</p>
                                    <div className="mb-5">
                                        <span className="text-3xl font-display font-bold text-[#C9962E]">{tier.price}</span>
                                        <span className="block font-tech text-[10px] text-[#5C5C5C] mt-1">{tier.usd}</span>
                                    </div>
                                    <p className="text-[#A0A0A0] text-sm leading-relaxed mb-6">{tier.desc}</p>
                                </div>
                                <ul className="space-y-2 pt-4 border-t border-[#242424]">
                                    {tier.includes.map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 font-tech text-[11px] text-[#A0A0A0]">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-[#5FBFAE] shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    <p className="mt-6 font-tech text-[11px] text-[#5C5C5C]">
                        Enterprise or non-standard scope? <a href="#contact" className="text-[#C9962E] hover:text-[#E3B84A]">Request a custom quote →</a>
                    </p>
                </div>
            </section>

            {/* --- FOUNDERS / PERSONNEL DOSSIER --- */}
            <section id="founders" className="relative z-10 py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-2xl mb-16">
                        <h2 className="font-tech text-[11px] uppercase tracking-[0.2em] text-[#C9962E] mb-3">05 — Personnel</h2>
                        <h3 className="text-3xl md:text-4xl font-display font-bold text-[#F5F5F4]">Who's actually writing your code</h3>
                        <p className="mt-3 text-[#A0A0A0] text-sm">
                            No rotating staff, no outsourcing. These two architect, build, and deploy every engagement personally.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-px bg-[#242424] max-w-4xl">
                        {/* FOUNDER 1: SATYAM */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="p-8 bg-black flex flex-col justify-between"
                        >
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <img
                                        src="/images/Satyam.jpeg"
                                        alt="Satyam Sawant"
                                        className="w-32 h-40 object-cover grayscale contrast-125 border border-[#242424] shrink-0"
                                    />
                                    <div>
                                        <h4 className="text-lg font-display font-bold text-[#F5F5F4]">Satyam Sawant</h4>
                                        <p className="text-xs font-tech text-[#C9962E] mt-1">Full Stack Developer</p>
                                    </div>
                                </div>

                                <p className="text-[#A0A0A0] text-sm leading-relaxed">
                                    Owns full-stack architecture, Next.js application design, and LLM service
                                    integration. Sets the modular code standards every build follows.
                                </p>

                                <div className="space-y-2 text-xs font-tech text-[#A0A0A0]">
                                    <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#5FBFAE]" /> Web Development</div>
                                    <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#5FBFAE]" /> AI Integration & API Architecture</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* FOUNDER 2: PARAG */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="p-8 bg-black flex flex-col justify-between"
                        >
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <img
                                        src="/images/Parag.jpeg"
                                        alt="Parag Yadav"
                                        className="w-32 h-40 object-cover grayscale contrast-125 border border-[#242424] shrink-0"
                                    />
                                    <div>
                                        <h4 className="text-lg font-display font-bold text-[#F5F5F4]">Parag Yadav</h4>
                                        <p className="text-xs font-tech text-[#C9962E] mt-1">Backend Developer / System Architect</p>
                                    </div>
                                </div>

                                <p className="text-[#A0A0A0] text-sm leading-relaxed">
                                    Owns product experience, UI animation pipelines, and scalable database
                                    integration — from first wireframe to shipped interface.
                                </p>

                                <div className="space-y-2 text-xs font-tech text-[#A0A0A0]">
                                    <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#5FBFAE]" /> System Architecture</div>
                                    <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#5FBFAE]" /> Backend Developer</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- FEATURED PROJECTS --- */}
            <section id="projects" className="relative z-10 py-24 px-6 max-w-7xl mx-auto border-t border-[#242424]">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
                    <div>
                        <h2 className="font-tech text-[11px] uppercase tracking-[0.2em] text-[#C9962E] mb-3">06 — Delivered Work</h2>
                        <h3 className="text-3xl md:text-4xl font-display font-bold text-[#F5F5F4]">Featured products</h3>
                    </div>
                    <p className="text-[#A0A0A0] text-sm max-w-md">
                        A glimpse into products built with accurate scope, production-grade code, and clean handoff.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 border-l border-t border-[#242424]">
                    {[
                        {
                            title: "Snazzy Cart",
                            category: "AI-Driven E-Commerce",
                            desc: "A full storefront with a real-time AI shopping assistant and automated review summarization, running on Groq LPU for sub-second inference at checkout.",
                            tags: ["React", "Groq LPU", "AI Shopping Assistant"],
                            highlight: "Sub-second AI inference, live at checkout",
                        },
                        {
                            title: "Soch Vichar",
                            category: "Social Platform",
                            desc: "A social platform with built-in AI writing assistance and a high-security double-token (access + refresh) auth system for persistent sessions.",
                            tags: ["Node.js", "JWT Refresh Tokens", "AI Writing Assistant"],
                            highlight: "Double-token auth, persistent secure sessions",
                        },
                        {
                            title: "Pro Space",
                            category: "Hybrid Office SaaS",
                            desc: "A hybrid-office platform with a natural-language booking assistant for desks and rooms, plus AI sentiment analysis on workspace feedback.",
                            tags: ["React", "TypeScript", "NLP Booking"],
                            highlight: "Book a desk by typing a sentence, not filling a form",
                        },
                        {
                            title: "Disaster Relief Coordination Platform",
                            category: "Production Backend / Systems Engineering",
                            desc: "A production-grade coordination backend for NGOs, shelters, volunteers, and donors — geospatial matching, live disaster requests, and real-time updates during active emergencies.",
                            tags: ["Node.js", "MongoDB 2dsphere", "Redis + BullMQ", "Socket.io"],
                            highlight: "Real-time coordination across NGOs, shelters & volunteers",
                        },
                        {
                            title: "Onetimex Thane",
                            category: "Fintech / Trading Platform",
                            desc: "Sole backend developer on a stock trading and investment platform — REST APIs for onboarding, portfolios and transactions, plus third-party payment integrations and secure session handling.",
                            tags: ["Node.js", "AWS", "REST APIs", "Payment Integrations"],
                            highlight: "Sole backend owner, live financial platform",
                        }
                    ].map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.06 }}
                            className="p-8 border-r border-b border-[#242424] hover:bg-[#0A0A0A]/60 transition-colors duration-200 flex flex-col justify-between card-lift"
                        >
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <span className="font-tech text-[10px] uppercase tracking-wider px-3 py-1 border border-[#C9962E]/40 text-[#C9962E]">
                                        {project.category}
                                    </span>
                                </div>
                                <h4 className="text-lg font-display font-bold text-[#F5F5F4] mb-3">{project.title}</h4>
                                <p className="text-[#A0A0A0] text-sm leading-relaxed mb-6">{project.desc}</p>

                                <div className="p-3 border border-[#5FBFAE]/25 bg-[#5FBFAE]/5 mb-6 text-xs font-tech text-[#5FBFAE]">
                                    ★ {project.highlight}
                                </div>
                            </div>

                            <div className="pt-4 border-t border-[#242424] flex flex-wrap gap-x-3 gap-y-1 font-tech text-[10px] text-[#A0A0A0]">
                                {project.tags.map((t, i) => (
                                    <span key={i}>#{t.replace(/\s+/g, '')}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <FAQSection />

            {/* --- CALL TO ACTION / CONTACT --- */}
            <section id="contact" className="relative z-10 py-24 border-t border-[#242424] bg-[#0A0A0A]/40">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="border border-[#242424] bg-[#0A0A0A]/60 gold-glow"
                    >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 sm:px-10 py-4 border-b border-[#242424]">
                            <span className="font-tech text-[10px] uppercase tracking-[0.2em] text-[#A0A0A0]">08 — Work Order</span>
                            <DualClock compact />
                        </div>

                        <div className="p-8 sm:p-12">
                            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#F5F5F4] mb-5 leading-tight">
                                Have a project in mind? <br />
                                <span className="text-[#C9962E]">Let's spec it out.</span>
                            </h2>

                            <p className="text-[#A0A0A0] text-base max-w-xl mb-8">
                                Whether you're a US founder who needs a dedicated product team, or an Indian
                                business ready to digitize — two engineers, direct communication, and a fixed
                                rate card mean you know exactly what you're getting, and when.
                            </p>

                            <a
                                href={`mailto:${AGENCY_EMAIL}?subject=BuildAura%20Project%20Inquiry`}
                                className="inline-flex items-center gap-3 px-8 py-4 font-display font-bold text-base sm:text-lg text-black bg-[#C9962E] hover:bg-[#E3B84A] transition-colors duration-200"
                            >
                                <Mail className="w-5 h-5" />
                                Email Us — {AGENCY_EMAIL}
                            </a>
                            <p className="mt-4 text-[#5C5C5C] text-xs font-tech">
                                Click to open your email app and send us a message directly.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- FOOTER (TITLE BLOCK) --- */}
            <footer className="relative z-10 border-t border-[#242424] bg-black">
                <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="md:col-span-2 space-y-4">
                        <a href="#home" className="flex items-center gap-2.5 w-fit">
                            <span className="w-8 h-8 border border-[#C9962E]/60 flex items-center justify-center text-[#C9962E] font-tech text-xs">BA</span>
                            <span className="text-xl font-display font-bold tracking-tight text-[#F5F5F4]">
                                BuildAura
                            </span>
                        </a>
                        <p className="text-[#A0A0A0] text-sm leading-relaxed max-w-sm">
                            A two-founder engineering studio shipping full-stack web, frontend, and backend
                            products for US startups and Indian businesses.
                        </p>
                        <DualClock />
                    </div>

                    {/* Navigation */}
                    <div>
                        <h5 className="font-tech text-[10px] uppercase tracking-[0.2em] text-[#5C5C5C] mb-4">Navigate</h5>
                        <ul className="space-y-2.5 text-sm text-[#A0A0A0]">
                            <li><a href="#about" className="hover:text-[#F5F5F4] transition-colors">About</a></li>
                            <li><a href="#services" className="hover:text-[#F5F5F4] transition-colors">Capabilities</a></li>
                            <li><a href="#stack" className="hover:text-[#F5F5F4] transition-colors">Stack</a></li>
                            <li><a href="#pricing" className="hover:text-[#F5F5F4] transition-colors">Pricing</a></li>
                            <li><a href="#founders" className="hover:text-[#F5F5F4] transition-colors">Team</a></li>
                            <li><a href="#projects" className="hover:text-[#F5F5F4] transition-colors">Work</a></li>
                            <li><a href="#faq" className="hover:text-[#F5F5F4] transition-colors">FAQ</a></li>
                            <li><a href="#contact" className="hover:text-[#F5F5F4] transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h5 className="font-tech text-[10px] uppercase tracking-[0.2em] text-[#5C5C5C] mb-4">Contact</h5>
                        <div className="space-y-4 text-sm">
                            <div>
                                <p className="font-tech text-[10px] uppercase tracking-[0.2em] text-[#5C5C5C] mb-2">Email Us</p>
                                <a
                                    href={`mailto:${AGENCY_EMAIL}?subject=BuildAura%20Project%20Inquiry`}
                                    className="inline-flex items-center gap-2 font-display font-bold text-base sm:text-md text-[#F5F5F4] hover:text-[#C9962E] transition-colors break-all"
                                >
                                    <Mail className="w-5 h-5 text-[#C9962E] shrink-0" />
                                    {AGENCY_EMAIL}
                                </a>
                            </div>
                            <div className="flex items-start gap-2.5 text-[#A0A0A0]">
                                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#C9962E]" />
                                <div>
                                    <p className="text-[#F5F5F4]">Mumbai, Maharashtra, India</p>
                                    <span className="inline-block mt-1 font-tech text-[9px] uppercase tracking-wider px-2 py-0.5 border border-[#242424] text-[#5C5C5C]">
                                        Remote · Temporary Base
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-start gap-2.5 text-[#A0A0A0]">
                                <Phone className="w-4 h-4 mt-0.5 shrink-0 text-[#C9962E]" />
                                <div className="space-y-1">
                                    <p>
                                        <a href="tel:+919326903988" className="hover:text-[#F5F5F4] transition-colors">+91 93269 03988</a>
                                        <span className="text-[#5C5C5C]"> — Satyam</span>
                                    </p>
                                    <p>
                                        <a href="tel:+918828422722" className="hover:text-[#F5F5F4] transition-colors">+91 88284 22722</a>
                                        <span className="text-[#5C5C5C]"> — Parag</span>
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-2.5 text-[#A0A0A0]">
                                <Timer className="w-4 h-4 mt-0.5 shrink-0 text-[#C9962E]" />
                                <div>
                                    <p className="text-[#F5F5F4]">Mon – Sat, 10:00 AM – 7:00 PM IST</p>
                                    <p className="text-[#5C5C5C] text-xs mt-1">Overlaps US morning – evening hours</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-[#242424]">
                    <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="font-tech text-[11px] text-[#5C5C5C]">@ {new Date().getFullYear()} BuildAura Studio — Doc. 2026</p>
                        <a
                            href={`mailto:${AGENCY_EMAIL}?subject=BuildAura%20Project%20Inquiry`}
                            className="font-display font-bold text-sm sm:text-base text-[#C9962E] hover:text-[#E3B84A] transition-colors"
                        >
                            {AGENCY_EMAIL}
                        </a>
                        <p className="font-tech text-[11px] text-[#5C5C5C]">Engineered by Satyam Sawant &amp; Parag Yadav</p>
                    </div>
                </div>
            </footer>

        </div>
    );
}
