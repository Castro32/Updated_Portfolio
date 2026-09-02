import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, MapPin } from 'lucide-react';

const Footer = ({ portfolioData }) => {
  const socialLinks = [
    { key: 'github', icon: Github, url: portfolioData?.contact?.github, label: 'GitHub' },
    { key: 'linkedin', icon: Linkedin, url: portfolioData?.contact?.linkedin, label: 'LinkedIn' },
    { key: 'twitter', icon: Twitter, url: portfolioData?.contact?.twitter, label: 'Twitter' },
    { key: 'email', icon: Mail, url: portfolioData?.contact?.email ? `mailto:${portfolioData.contact.email}` : null, label: 'Email' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-primary bg-[#030303] text-[#f5f4f2] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(130,29,48,0.35),_transparent_55%)] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-14 sm:py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-primary-light mb-3">
              Let&apos;s build
            </p>
            <h3 className="font-display text-3xl sm:text-4xl tracking-tight text-[#f5f4f2]">
              {portfolioData?.name}
            </h3>
            <p className="mt-3 text-sm text-[#dcd7d4] max-w-md leading-relaxed">
              Full stack developer — building complete web products from interface to API.
            </p>
            {portfolioData?.contact?.location && (
              <p className="mt-4 flex items-center gap-1.5 text-xs text-primary-light">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                {portfolioData.contact.location}
              </p>
            )}
          </motion.div>

          <motion.div
            className="flex flex-col items-start md:items-end gap-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex flex-wrap gap-4 text-sm">
              <Link to="/projects" className="text-[#dcd7d4] hover:text-primary transition-colors">
                Projects
              </Link>
              <Link to="/newsletters" className="text-[#dcd7d4] hover:text-primary transition-colors">
                Newsletters
              </Link>
              <Link to="/blogs" className="text-[#dcd7d4] hover:text-primary transition-colors">
                Blogs
              </Link>
              <Link to="/interests" className="text-[#dcd7d4] hover:text-primary transition-colors">
                Interests
              </Link>
              {portfolioData?.contact?.email && (
                <a
                  href={`mailto:${portfolioData.contact.email}`}
                  className="text-[#dcd7d4] hover:text-primary transition-colors"
                >
                  Contact
                </a>
              )}
            </div>

            <div className="flex gap-2">
              {socialLinks.map(({ key, icon: Icon, url, label }) =>
                url && (
                  <a
                    key={key}
                    href={url}
                    target={key === 'email' ? '_self' : '_blank'}
                    rel={key !== 'email' ? 'noopener noreferrer' : undefined}
                    aria-label={label}
                    className="w-9 h-9 rounded-full border border-[#2c2a2b] flex items-center justify-center text-primary-light hover:text-[#f5f4f2] hover:border-primary hover:bg-primary/25 transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              )}
            </div>
          </motion.div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#2c2a2b] flex flex-col sm:flex-row justify-between gap-2 text-xs text-primary-light/70 font-mono">
          <span>© {currentYear} {portfolioData?.name}</span>
          <span>React · Tailwind · Framer Motion</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
