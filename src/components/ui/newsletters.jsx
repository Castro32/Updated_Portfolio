import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Mail, ImageIcon } from 'lucide-react';

const NewsletterImage = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-primary-light/30 to-primary/20 flex flex-col items-center justify-center gap-3 px-6 text-center">
        <div className="w-12 h-12 rounded-xl border border-dashed border-primary/40 flex items-center justify-center bg-background/50">
          <ImageIcon className="w-5 h-5 text-primary" />
        </div>
        <div>
          <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-primary mb-1">
            Design slot
          </p>
          <p className="text-xs text-muted-foreground max-w-[14rem] leading-relaxed">
            Drop the newsletter design into <span className="font-mono text-foreground">src/assets/newsletters</span> and link it here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-primary-light/40 to-primary/15 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
        className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-[1.02] ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </>
  );
};

const Newsletters = ({ items, showHeader = true }) => {
  if (!items?.length) return null;

  return (
    <section id="newsletters" className="w-full">
      {showHeader && (
        <div className="flex items-baseline gap-3 mb-8 sm:mb-10">
          <h3 className="font-display text-2xl sm:text-3xl tracking-tight text-foreground">
            Newsletters
          </h3>
          <span className="flex-1 h-px bg-gradient-to-r from-primary-light to-transparent" />
          <span className="font-mono text-[11px] text-muted-foreground tracking-wide">
            {items.length} designs
          </span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {items.map((item, index) => {
          const CardBody = (
            <>
              <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
                <NewsletterImage src={item.image} alt={`${item.name} newsletter design`} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030303]/80 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

                <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2 z-10">
                  <div className="flex flex-wrap gap-1.5">
                    <Badge className="bg-[#f5f4f2]/90 text-[#030303] border-0 text-[10px] font-normal backdrop-blur-sm">
                      {item.client || 'Newsletter'}
                    </Badge>
                    {item.type && (
                      <Badge className="bg-primary/90 text-primary-foreground border-0 text-[10px] font-normal backdrop-blur-sm">
                        {item.type}
                      </Badge>
                    )}
                  </div>
                  {item.link && (
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-[#030303]/45 text-[#f5f4f2] text-[10px] font-mono backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      Open <ExternalLink className="w-3 h-3" />
                    </span>
                  )}
                </div>

                <div className="absolute inset-x-0 bottom-0 z-10 p-4">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.16em] text-primary-light mb-1.5">
                    <Mail className="w-3 h-3" />
                    {item.date || 'Campaign'}
                  </div>
                  <h4 className="font-display text-lg tracking-tight text-[#f5f4f2] leading-snug">
                    {item.name}
                  </h4>
                  {item.description && (
                    <p className="mt-1.5 text-xs text-[#dcd7d4] leading-relaxed line-clamp-2 group-hover:line-clamp-4 transition-all">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </>
          );

          return (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.06, 0.3) }}
              className="group relative rounded-2xl overflow-hidden border border-primary-light/50 bg-card shadow-[0_12px_40px_-18px_rgba(130,29,48,0.3)] hover:border-primary/40 hover:shadow-[0_18px_50px_-16px_rgba(130,29,48,0.4)] transition-all duration-300"
            >
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  {CardBody}
                </a>
              ) : (
                <div>{CardBody}</div>
              )}
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default Newsletters;
