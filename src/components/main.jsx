import { useState, useEffect, useRef } from 'react';
import useInView from '../hooks/useInView';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Palette, Smartphone, ArrowRight, Sparkles, Zap, Award, Server, Database, Gamepad } from 'lucide-react';
import fotoProfile from "../assets/foto_ganteng.jpeg";
import ecommerceImg from "../assets/e-commerce.png";
import koreImg from "../assets/kore.png";
import arizeImg from "../assets/arize.png";
import levelblueImg from "../assets/levelblue.png";
import landing1 from "../assets/landing1.png";
import landing2 from "../assets/landing2.png";
import landing3 from "../assets/landing3.png";
import landing4 from "../assets/landing4.png";
import landing5 from "../assets/landing5.png";
import landing6 from "../assets/landing6.png";


const Portfolio = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [typedText, setTypedText] = useState('');
    const [cursorVisible, setCursorVisible] = useState(true);
    const [isTouch, setIsTouch] = useState(false);

    const fullText = "Full Stack Developer";

    useEffect(() => {
        // detect touch devices and avoid mouse-heavy effects on them
        const touch = typeof window !== 'undefined' && (('ontouchstart' in window) || (navigator.maxTouchPoints && navigator.maxTouchPoints > 0));
        setIsTouch(!!touch);

        const sections = ['home', 'about', 'projects', 'skills', 'contact'];
        let ticking = false;

        const onScroll = () => {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(() => {
                    const y = window.scrollY || window.pageYOffset;
                    setScrolled(y > 50);

                    const current = sections.find(section => {
                        const element = document.getElementById(section);
                        if (element) {
                            const rect = element.getBoundingClientRect();
                            return rect.top <= 100 && rect.bottom >= 100;
                        }
                        return false;
                    });
                    if (current) setActiveSection(current);

                    ticking = false;
                });
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    useEffect(() => {
        if (isTouch) {
            setTypedText(fullText);
            setCursorVisible(false);
            return;
        }

        let index = 0;
        const typingInterval = setInterval(() => {
            if (index <= fullText.length) {
                setTypedText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(typingInterval);
            }
        }, 80);

        const cursorInterval = setInterval(() => {
            setCursorVisible(prev => !prev);
        }, 500);

        return () => {
            clearInterval(typingInterval);
            clearInterval(cursorInterval);
        };
    }, [isTouch]);

    // Marquee control using Web Animations API for smooth hover slowdown
    const marqueeRef = useRef(null);
    const animRef = useRef(null);
    const rafRef = useRef(null);
    const targetRateRef = useRef(1);

    useEffect(() => {
        const track = marqueeRef.current;
        if (!track || typeof track.animate !== 'function') return;

        const animation = track.animate([
            { transform: 'translateX(0)' },
            { transform: 'translateX(-50%)' }
        ], {
            duration: 18000,
            iterations: Infinity,
            easing: 'linear'
        });

        animRef.current = animation;
        animation.playbackRate = 1;

        let rafRunning = false;

        const step = () => {
            const anim = animRef.current;
            if (!anim) return;
            const current = anim.playbackRate;
            const target = targetRateRef.current;
            const diff = target - current;
            if (Math.abs(diff) < 0.001) {
                anim.playbackRate = target;
                rafRunning = false;
                return;
            }
            anim.playbackRate = current + diff * 0.12;
            rafRef.current = requestAnimationFrame(step);
        };

        const onEnter = () => {
            targetRateRef.current = 0.5; // slow to 50%
            if (!rafRunning) { rafRunning = true; rafRef.current = requestAnimationFrame(step); }
        };
        const onLeave = () => {
            targetRateRef.current = 1; // back to normal
            if (!rafRunning) { rafRunning = true; rafRef.current = requestAnimationFrame(step); }
        };

        track.addEventListener('mouseenter', onEnter);
        track.addEventListener('mouseleave', onLeave);
        track.addEventListener('touchstart', onEnter);
        track.addEventListener('touchend', onLeave);

        return () => {
            animation.cancel();
            track.removeEventListener('mouseenter', onEnter);
            track.removeEventListener('mouseleave', onLeave);
            track.removeEventListener('touchstart', onEnter);
            track.removeEventListener('touchend', onLeave);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    const projects = [
        {
            title: "Documentation Website Arize",
            description: "website dokumentasi interaktif dengan navigasi dinamis dan pencarian real-time",
            tech: ["Mintlify"],
            image: arizeImg,
            color: "from-orange-500 to-red-500",
            link: "https://arize.com/docs/ax"
        },
        {
            title: "Documentation Website Levelblue",
            description: "Website dokumentasi interaktif dengan navigasi dinamis dan pencarian real-time",
            tech: ["Mintlify"],
            image: levelblueImg,
            color: "from-green-500 to-emerald-500",
            link: "https://docs.levelblue.com/documentation"
        },
        {
            title: "E-Commerce Platform",
            description: "Platform e-commerce modern dengan fitur cart, payment gateway, dan dashboard admin",
            tech: ["React", "Node.js", "PostgreSQL", "Tailwind", "Express"],
            image: ecommerceImg,
            color: "from-blue-500 to-cyan-500",
        },
        {
            title: "Documentation Website KoreAI",
            description: "Website dokumentasi interaktif dengan navigasi dinamis dan pencarian real-time",
            tech: ["Mintlify"],
            image: koreImg,
            color: "from-purple-500 to-pink-500",
        },
        {
            title: "Landing Page Website Example",
            description: "landing page statis yang responsif dan menarik untuk promosi produk atau layanan",
            tech: ["React", "Tailwind CSS", "JavaScript"],
            image: landing1,
            color: "from-purple-500 to-pink-500",
            link: "/landing"
        },
        {
            title: "Landing Page Website Example",
            description: "landing page statis yang responsif dan menarik untuk promosi produk atau layanan",
            tech: ["React", "Tailwind CSS", "JavaScript"],
            image: landing2,
            color: "from-purple-500 to-pink-500",
            link: "/landing2"
        },
        {
            title: "Landing Page Website Example",
            description: "landing page statis yang responsif dan menarik untuk promosi produk atau layanan",
            tech: ["React", "Tailwind CSS", "JavaScript"],
            image: landing3,
            color: "from-purple-500 to-pink-500",
            link: "/landing3"
        },
        {
            title: "Landing Page Website Example",
            description: "landing page statis yang responsif dan menarik untuk promosi produk atau layanan",
            tech: ["React", "Tailwind CSS", "JavaScript"],
            image: landing4,
            color: "from-purple-500 to-pink-500",
            link: "/landing4"
        },
        {
            title: "Landing Page Website Example",
            description: "landing page statis yang responsif dan menarik untuk promosi produk atau layanan",
            tech: ["React", "Tailwind CSS", "JavaScript"],
            image: landing5,
            color: "from-purple-500 to-pink-500",
            link: "/landing5"
        },
                {
            title: "Landing Page Website Example",
            description: "landing page statis yang responsif dan menarik untuk promosi produk atau layanan",
            tech: ["React", "Tailwind CSS", "JavaScript"],
            image: landing6,
            color: "from-purple-500 to-pink-500",
            link: "/landing6"
        }
    ];

    const skills = [
        { name: "Frontend Development", icon: Code, items: ["React", "Tailwind CSS", "JavaScript", "PHP"], color: "from-blue-500 to-cyan-500" },
        { name: "Backend Development", icon: Server, items: ["Node.js", "Express", "PostgreSQL", "MySql"], color: "from-purple-500 to-pink-500" },
        { name: "Game Development", icon: Gamepad, items: ["Godot", "Java", "C++", "Pawn"], color: "from-orange-500 to-red-500" }
    ];

    const techIcons = {
        "React": Code,
        "Tailwind CSS": Zap,
        "JavaScript": Zap,
        "PHP": Code,
        "Node.js": Server,
        "Express": Server,
        "PostgreSQL": Database,
        "MySql": Database,
        "Godot": Gamepad,
        "Java": Code,
        "C++": Code,
        "Pawn": Code
    };

    // Scroll-in animation refs
    const [homeRef, homeInView] = useInView({ threshold: 0.2 });
    const [billboardRef, billboardInView] = useInView({ threshold: 0.2 });
    const [aboutRef, aboutInView] = useInView({ threshold: 0.15 });
    const [projectsRef, projectsInView] = useInView({ threshold: 0.15 });
    const [skillsRef, skillsInView] = useInView({ threshold: 0.15 });
    const [contactRef, contactInView] = useInView({ threshold: 0.15 });
    const [footerRef, footerInView] = useInView({ threshold: 0.1 });

    const stats = [
        { number: "5+", label: "Projects Built", icon: Award },
        { number: "5+", label: "Technologies", icon: Sparkles },
        { number: "3+", label: "Years Learning", icon: Zap }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white overflow-hidden">
            {/* Animated Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="hidden md:block absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl md:animate-pulse"></div>
                <div className="hidden md:block absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl md:animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="hidden md:block absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl md:animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Custom Cursor Effect */}


            {/* Navigation */}
            <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 md:backdrop-blur-xl md:shadow-lg shadow-purple-500/10' : 'bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent md:animate-pulse">
                            <Sparkles className="inline w-6 h-6 text-purple-400 mr-2" />
                            MyPortfolio
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-8">
                            {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item}`}
                                    className={`relative py-2 transition-all duration-300 capitalize ${activeSection === item ? 'text-purple-400' : 'hover:text-purple-400'}`}
                                >
                                    {item}
                                    {activeSection === item && (
                                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 md:animate-pulse"></span>
                                    )}
                                </a>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="md:hidden p-2 hover:bg-purple-500/20 rounded-lg transition-all duration-300"
                        >
                            {menuOpen ? <X size={24} className="animate-spin" /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden overflow-hidden transition-all duration-500 ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="bg-slate-900/95 backdrop-blur-xl border-t border-purple-500/20">
                        <div className="px-4 py-4 space-y-2">
                            {['home', 'about', 'projects', 'skills', 'contact'].map((item, index) => (
                                <a
                                    key={item}
                                    href={`#${item}`}
                                    onClick={() => setMenuOpen(false)}
                                    className="block px-4 py-3 hover:bg-purple-500/20 rounded-lg transition-all duration-300 capitalize transform hover:translate-x-2"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" ref={homeRef} className={`relative pt-32 pb-20 px-4 min-h-screen flex items-center transition-all duration-700 ease-out ${homeInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="max-w-7xl mx-auto text-center w-full">
                    <div className="mb-8 animate-float">
                        <div className="w-40 h-40 mx-auto rounded-full mb-8 shadow-2xl shadow-purple-500/50 relative overflow-hidden group border-4 border-purple-500">
                            <img
                                src={fotoProfile}
                                alt="Profile Photo"
                                className="w-full h-full object-cover object-bottom scale-200 group-hover:scale-225 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-500"></div>
                            <div className="absolute inset-0 animate-spin-slow opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                                <div className="h-full w-full bg-gradient-conic from-transparent via-white to-transparent"></div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6 mb-12">
                        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in-up">
                            Hi, I'm <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient bg-300%">Hilman Nugraha</span>
                        </h1>
                        <p className="text-2xl md:text-3xl text-gray-300 h-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            {typedText}
                            <span className={`inline-block w-0.5 h-8 bg-purple-400 ml-1 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}></span>
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto mb-12">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="transform hover:scale-110 transition-all duration-300 animate-fade-in-up min-w-0 text-center"
                                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                            >
                                <div className="bg-slate-800/50 md:backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20">
                                    <stat.icon className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                        {stat.number}
                                    </div>
                                    <div className="text-sm text-gray-400 whitespace-normal">{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                        <a
                            href="#contact"
                            className="group relative bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                Get In Touch
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </a>
                        <a
                            href="#projects"
                            className="group border-2 border-purple-500 px-8 py-4 rounded-full font-semibold hover:bg-purple-500/20 transition-all duration-300 backdrop-blur-sm hover:scale-105 flex items-center justify-center gap-2"
                        >
                            View Projects
                            <ExternalLink className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                        </a>
                    </div>


                    <div className="flex justify-center gap-6 animate-fade-in-up" style={{ animationDelay: '1s' }}>
                        <a
                            href="https://github.com/hilman3007"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full border border-purple-500/30 hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300 hover:scale-110 hover:-rotate-6"
                        >
                            <Github size={24} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/hilman-nugraha-932502370"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full border border-purple-500/30 hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300 hover:scale-110 hover:-rotate-6"
                        >
                            <Linkedin size={24} />
                        </a>
                        <a
                            href="mailto:hilman300707@gmail.com"
                            className="p-3 rounded-full border border-purple-500/30 hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300 hover:scale-110 hover:-rotate-6"
                        >
                            <Mail size={24} />
                        </a>
                    </div>
                </div>
            </section>

            {/* Billboard Section */}
            <section id="billboard" ref={billboardRef} className={`relative py-12 px-4 transition-all duration-700 ease-out ${billboardInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                <div className="max-w-7xl mx-auto">
                    <div className="overflow-hidden">
                        <div ref={marqueeRef} className="marquee-track flex flex-nowrap items-center gap-6 will-change-transform">
                            {[...projects, ...projects].map((project, i) => (
                                <div key={`${project.title}-${i}`} className="min-w-[320px] md:min-w-[420px] bg-slate-800/60 border border-purple-500/20 rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-500 group card-tilt">
                                    <div className="relative h-48 md:h-56 overflow-hidden image-glint">
                                        <img loading="lazy" src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

                                        {/* Subtle overlay that appears on hover for readability */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                                        {/* Title badge on image when hovered */}
                                        <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className="bg-black/40 md:backdrop-blur-sm px-3 py-2 rounded-md text-sm text-white font-semibold">{project.title}</div>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h4 className="font-bold text-lg text-white">{project.title}</h4>
                                        <p className="text-sm text-gray-300 truncate">{project.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" ref={aboutRef} className={`relative py-32 px-4 bg-slate-800/30 backdrop-blur-sm transition-all duration-700 ease-out ${aboutInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        About Me
                    </h2>
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-slate-800/50 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:scale-105">
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                Saya adalah siswa <span className="text-purple-400 font-semibold">SMK jurusan Rekayasa Perangkat Lunak (RPL)</span> yang memiliki minat besar di bidang pengembangan web sebagai <span className="text-pink-400 font-semibold">Full Stack Developer</span>. Saya senang mempelajari teknologi baru dan terbiasa mengembangkan aplikasi berbasis web, baik dari sisi frontend maupun backend.
                            </p>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                Dengan semangat untuk terus meningkatkan skill melalui praktik langsung dan project pribadi, saya terbiasa bekerja dengan <span className="text-purple-400 font-semibold">API, database</span>, serta memahami alur pengembangan aplikasi dari perencanaan hingga implementasi. Saya berkomitmen untuk terus berkembang dan siap berkontribusi dalam tim maupun project pengembangan software.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" ref={projectsRef} className={`relative py-32 px-4 transition-all duration-700 ease-out ${projectsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Featured Projects
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <a
                                key={index}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative bg-slate-800/50 md:backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 cursor-pointer block"
                            >
                                <div className="relative overflow-hidden h-64">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>

                                    {/* Floating particles effect */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        {[...Array(6)].map((_, i) => (
                                            <div
                                                key={i}
                                                className="absolute w-2 h-2 bg-white rounded-full animate-float-particle"
                                                style={{
                                                    left: `${Math.random() * 100}%`,
                                                    top: `${Math.random() * 100}%`,
                                                    animationDelay: `${i * 0.2}s`
                                                }}
                                            ></div>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-8">
                                    <h3 className="text-3xl font-bold mb-4 group-hover:text-purple-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="bg-purple-500/20 px-4 py-2 rounded-full text-sm border border-purple-500/30 hover:border-purple-500 hover:bg-purple-500/30 transition-all duration-300 hover:scale-110"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    {project.link && (
                                        <button className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2 group/btn">
                                            View Project
                                            <ExternalLink size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                        </button>
                                    )}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" ref={skillsRef} className={`relative py-20 px-4 bg-slate-800/30 backdrop-blur-sm transition-all duration-700 ease-out ${skillsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Skills & Expertise
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="group relative bg-slate-800/50 md:backdrop-blur-sm p-10 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 overflow-hidden"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                                <div className="relative z-10">
                                    <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                                        <skill.icon className={`w-16 h-16 bg-gradient-to-br ${skill.color} bg-clip-text text-transparent`} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-6 group-hover:text-purple-400 transition-colors">
                                        {skill.name}
                                    </h3>
                                    <ul className="space-y-3">
                                        {skill.items.map((item, i) => {
                                            const IconComponent = techIcons[item] || Code;
                                            return (
                                                <li
                                                    key={i}
                                                    className="text-gray-400 flex items-center gap-3 group-hover:text-gray-300 transition-all duration-300 hover:translate-x-2"
                                                >
                                                    <IconComponent className="w-4 h-4 text-purple-400" />
                                                    <span>{item}</span>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" ref={contactRef} className={`relative py-32 px-4 transition-all duration-700 ease-out ${contactInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Let's Work Together
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
                        Punya proyek menarik? Mari berdiskusi dan wujudkan ide Anda!
                    </p>
                    <a
                        href="mailto:hello@example.com"
                        className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 px-10 py-5 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-110 relative overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            <Mail size={24} className="group-hover:rotate-12 transition-transform" />
                            Send Me an Email
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer ref={footerRef} className={`relative py-8 px-4 border-t border-purple-500/20 bg-slate-900/50 md:backdrop-blur-sm transition-all duration-700 ease-out ${footerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                <div className="max-w-7xl mx-auto text-center text-gray-400">
                    <p className="flex items-center justify-center gap-2">
                        <span>&copy; 2026 Hilman Nugraha. All rights reserved.</span>
                        <Sparkles className="w-4 h-4 text-purple-400 md:animate-pulse" />
                    </p>
                </div>
            </footer>

            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-particle {
          0% { 
            transform: translateY(0) translateX(0) scale(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% { 
            transform: translateY(-100px) translateX(20px) scale(1);
            opacity: 0;
          }
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-particle {
          animation: float-particle 3s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }

        .bg-300\\% {
          background-size: 300% 300%;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .marquee-track {
          display: flex;
          width: max-content;
          will-change: transform;
          cursor: grab;
        }

        /* Card tilt for subtle 3D effect */
        .card-tilt {
          transform-origin: center;
          transition: transform 400ms cubic-bezier(.2,.9,.2,1), box-shadow 300ms ease;
        }
        .card-tilt:hover {
          transform: perspective(800px) rotateX(3deg) rotateY(-5deg) scale(1.03);
          box-shadow: 0 20px 40px rgba(0,0,0,0.45);
        }

        /* Image shimmer / glint */
        .image-glint {
          position: relative;
        }
        .image-glint::after {
          content: '';
          position: absolute;
          top: -60%;
          left: -40%;
          width: 30%;
          height: 220%;
          background: linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0) 100%);
          transform: rotate(20deg);
          opacity: 0.7;
          animation: glint 3s linear infinite;
          pointer-events: none;
        }
        @keyframes glint {
          0% { transform: translateX(-100%) rotate(20deg); opacity: 0; }
          50% { opacity: 0.9; }
          100% { transform: translateX(300%) rotate(20deg); opacity: 0; }
        }
      `}</style>
        </div>
    );
};

export default Portfolio;