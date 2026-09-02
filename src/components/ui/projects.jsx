import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Lock } from 'lucide-react';

const previewUrl = (url) =>
  `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=1400`;

const ProjectImage = ({ src, alt, privateProject }) => {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  if (privateProject || !src || failed) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-[#2c2a2b] via-[#821d30] to-[#c3b79d] flex items-center justify-center">
        <div className="text-center px-6">
          {privateProject ? (
            <>
              <Lock className="w-6 h-6 text-[#f5f4f2]/70 mx-auto mb-2" />
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#f5f4f2]/70">
                Private client build
              </p>
            </>
          ) : (
            <p className="font-display text-2xl text-[#f5f4f2]/80 tracking-tight">{alt}</p>
          )}
        </div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }} />
      </div>
    );
  }

  return (
    <>
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-primary-light/40 to-primary/20 animate-pulse" />
      )}
      <img
        src={src}
        alt={`Landing page of ${alt}`}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
        className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-[1.03] ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </>
  );
};

const Projects = ({ items, showHeader = true }) => {
  if (!items?.length) return null;

  const firstVisualIndex = items.findIndex(
    (p) => p.website_link && p.name !== 'National Cargo Tracking System'
  );

  return (
    <section id="projects" className="w-full">
      {showHeader && (
        <div className="flex items-baseline gap-3 mb-8 sm:mb-10">
          <h3 className="font-display text-2xl sm:text-3xl tracking-tight text-foreground">
            Selected work
          </h3>
          <span className="flex-1 h-px bg-gradient-to-r from-primary-light to-transparent" />
          <span className="font-mono text-[11px] text-muted-foreground tracking-wide">
            {items.length} projects
          </span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
        {items.map((project, index) => {
          const isPrivate =
            !project.website_link ||
            project.name === 'National Cargo Tracking System';
          const href = isPrivate ? null : project.website_link;
          const imageSrc = project.image || (href ? previewUrl(href) : null);
          const featured = index === (firstVisualIndex >= 0 ? firstVisualIndex : 0);

          const CardInner = (
            <>
              <div
                className={`relative overflow-hidden bg-secondary ${
                  featured
                    ? 'aspect-[16/10] md:aspect-[21/10]'
                    : 'aspect-[16/10]'
                }`}
              >
                <ProjectImage
                  src={imageSrc}
                  alt={project.name}
                  privateProject={isPrivate}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030303]/85 via-[#030303]/25 to-transparent opacity-80 group-hover:opacity-100 group-hover:bg-[#030303]/75 transition-all duration-300" />

                <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2 z-10">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags?.slice(0, 2).map((tag) => (
                      <Badge
                        key={tag}
                        className="bg-[#f5f4f2]/90 text-[#030303] border-0 text-[10px] font-normal backdrop-blur-sm"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  {href && (
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-[#030303]/50 text-[#f5f4f2] text-[10px] font-mono backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                      Visit <ExternalLink className="w-3 h-3" />
                    </span>
                  )}
                </div>

                <div className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-5 transition-all duration-300 group-hover:bg-gradient-to-t group-hover:from-[#030303] group-hover:via-[#030303]/95 group-hover:to-transparent">
                  <h4 className="font-display text-lg sm:text-xl tracking-tight text-[#f5f4f2] leading-snug">
                    {project.name}
                  </h4>
                  <p className="mt-1.5 text-xs sm:text-sm text-[#dcd7d4] leading-relaxed line-clamp-2 group-hover:line-clamp-none group-hover:max-h-44 group-hover:overflow-y-auto scrollbar-thin pr-1">
                    {project.description}
                  </p>
                  {project.tags?.length > 2 && (
                    <div className="mt-3 max-h-0 opacity-0 overflow-hidden group-hover:max-h-24 group-hover:opacity-100 transition-all duration-300 flex flex-wrap gap-1.5">
                      {project.tags.slice(2).map((tag) => (
                        <Badge
                          key={tag}
                          className="bg-[#f5f4f2]/15 text-[#f5f4f2] border border-[#f5f4f2]/20 text-[10px] font-normal"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </>
          );

          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.3) }}
              className={`group relative rounded-2xl overflow-hidden border border-primary-light/50 bg-card shadow-[0_12px_40px_-18px_rgba(130,29,48,0.35)] hover:border-primary/40 hover:shadow-[0_18px_50px_-16px_rgba(130,29,48,0.45)] transition-all duration-300 ${
                featured ? 'md:col-span-2' : ''
              }`}
            >
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  {CardInner}
                </a>
              ) : (
                <div>{CardInner}</div>
              )}
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
