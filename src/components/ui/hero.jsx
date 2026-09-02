import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Twitter, Github, Linkedin, MapPin, ArrowRight, Terminal } from 'lucide-react';
import TechIcons from './techicons';
import { SponsorButton, SponsorModal, SponsorSuccess } from './sponsor';

const generateContactUrl = (key, value) => {
    switch (key) {
        case 'email':    return `mailto:${value}`;
        case 'twitter':  return value.startsWith('http') ? value : `https://twitter.com/${value.replace('@', '')}`;
        case 'github':   return value.startsWith('http') ? value : `https://github.com/${value.replace(/^@?/, '')}`;
        case 'linkedin': return value.startsWith('http') ? value : `https://linkedin.com/in/${value}`;
        case 'location': return `https://maps.google.com/maps?q=${encodeURIComponent(value)}`;
        default:         return value.startsWith('http') ? value : `https://${value}`;
    }
};

const socialLinks = [
    { key: 'email',    icon: Mail },
    { key: 'twitter',  icon: Twitter },
    { key: 'github',   icon: Github },
    { key: 'linkedin', icon: Linkedin },
    { key: 'location', icon: MapPin },
];

const Hero = ({ name, title, bio, contact, profilePictureUrl }) => {
    const [showSponsorModal, setShowSponsorModal] = useState(false);
    const [showSponsorSuccess, setShowSponsorSuccess] = useState(false);
    const [sponsorAmount, setSponsorAmount] = useState(0);

    const shortTitle = title?.split('|')[0]?.trim() || title;
    const initials = name
        ? name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase()
        : '??';

    const scrollToContent = () => {
        document.getElementById('portfolio-content')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-[calc(100vh-64px)] flex items-center overflow-hidden">
            {/* Atmosphere — Cartier Red + Creme White washes */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(130,29,48,0.16),_transparent_55%),radial-gradient(ellipse_at_bottom_left,_rgba(195,183,157,0.45),_transparent_50%)]" />
                <div className="absolute inset-0 opacity-[0.04]" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                }} />
                <div className="absolute -top-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-primary/15 blur-3xl animate-pulse-slow" />
                <div className="absolute -bottom-32 -left-16 w-[22rem] h-[22rem] rounded-full bg-primary-light/50 blur-3xl" />
            </div>

            <TechIcons />

            <div className="relative z-20 w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-16 sm:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

                    {/* Portrait — dominant visual */}
                    <motion.div
                        className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="relative">
                            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary/30 via-transparent to-primary-light/50 blur-xl" />
                            <div className="relative w-56 h-72 sm:w-64 sm:h-80 lg:w-72 lg:h-[22rem] overflow-hidden rounded-[1.75rem] border border-primary-light/70 shadow-[0_24px_60px_-20px_rgba(130,29,48,0.4)]">
                                {profilePictureUrl ? (
                                    <img
                                        src={profilePictureUrl}
                                        alt={name}
                                        className="w-full h-full object-cover scale-105"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-accent flex items-center justify-center">
                                        <span className="font-display text-5xl text-accent-foreground tracking-tight">{initials}</span>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
                            </div>
                            <motion.div
                                className="absolute -bottom-3 -left-3 sm:-left-5 flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/90 border border-border backdrop-blur-md text-xs text-muted-foreground shadow-sm"
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.55, duration: 0.45 }}
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                Open to work
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Copy */}
                    <div className="lg:col-span-7 order-2 lg:order-1 text-center lg:text-left">
                        <motion.p
                            className="font-mono text-[11px] sm:text-xs tracking-[0.22em] uppercase text-primary mb-4"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Portfolio
                        </motion.p>

                        <motion.h1
                            className="font-display text-[clamp(2.75rem,8vw,5rem)] leading-[0.95] tracking-tight text-foreground mb-4"
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.08 }}
                        >
                            {name}
                        </motion.h1>

                        <motion.p
                            className="text-lg sm:text-xl text-primary font-medium mb-5"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.55, delay: 0.16 }}
                        >
                            {shortTitle}
                        </motion.p>

                        <motion.p
                            className="text-muted-foreground text-[15px] sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.55, delay: 0.24 }}
                        >
                            {bio?.length > 220 ? `${bio.slice(0, 220).trim()}…` : bio}
                        </motion.p>

                        <motion.div
                            className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.32 }}
                        >
                            <Link
                                to="/projects"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                            >
                                View projects
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <SponsorButton
                                onSponsor={() => setShowSponsorModal(true)}
                                className="text-sm font-medium"
                            />
                            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-muted-foreground font-mono ml-1">
                                <Terminal className="w-3.5 h-3.5 text-primary" />
                                Terminal in header
                            </span>
                        </motion.div>

                        <motion.div
                            className="flex items-center justify-center lg:justify-start gap-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.42 }}
                        >
                            {socialLinks.map(({ key, icon: Icon }) =>
                                contact?.[key] && (
                                    <a
                                        key={key}
                                        href={generateContactUrl(key, contact[key])}
                                        target={key === 'email' ? '_self' : '_blank'}
                                        rel={key !== 'email' ? 'noopener noreferrer' : undefined}
                                        aria-label={key}
                                        className="w-10 h-10 rounded-full border border-border/80 bg-background/50 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-200"
                                    >
                                        <Icon className="w-4 h-4" />
                                    </a>
                                )
                            )}
                        </motion.div>
                    </div>
                </div>

                {/* Scroll cue */}
                <motion.button
                    type="button"
                    onClick={scrollToContent}
                    className="mt-14 sm:mt-16 mx-auto flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    aria-label="Scroll to content"
                >
                    <span className="text-[10px] font-mono tracking-[0.28em] uppercase">Scroll</span>
                    <span className="w-px h-10 bg-gradient-to-b from-primary/70 to-transparent relative">
                        <span className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary animate-bounce" />
                    </span>
                </motion.button>
            </div>

            <SponsorModal
                isOpen={showSponsorModal}
                onClose={() => setShowSponsorModal(false)}
                onSponsor={(amount) => {
                    setSponsorAmount(amount);
                    setShowSponsorModal(false);
                    setShowSponsorSuccess(true);
                }}
            />
            {showSponsorSuccess && (
                <SponsorSuccess
                    amount={sponsorAmount}
                    onClose={() => setShowSponsorSuccess(false)}
                />
            )}
        </section>
    );
};

export default Hero;
