import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Projects from '@/components/ui/projects';
import Footer from '@/components/ui/footer';

export default function ProjectsPage({ portfolioData }) {
  const projects = portfolioData?.projects || [];

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>

          <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-primary mb-4">
            Portfolio
          </p>
          <h1 className="font-display text-4xl sm:text-5xl tracking-tight text-foreground mb-4">
            Projects
          </h1>
          <p className="text-muted-foreground text-base max-w-2xl leading-relaxed">
            A selection of full stack builds — product apps, commerce platforms, and brand websites shipped for real clients.
          </p>
        </motion.div>

        {projects.length > 0 ? (
          <Projects items={projects} showHeader={false} />
        ) : (
          <p className="text-muted-foreground text-center py-20">No projects available yet.</p>
        )}
      </div>

      <Footer portfolioData={portfolioData} />
    </div>
  );
}
