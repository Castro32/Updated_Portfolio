import React, { useState } from 'react';
import CardMe from '@/components/ui/cardme';
import { Badge } from '@/components/ui/badge';
import { ChevronDown } from 'lucide-react';

const Experience = ({ items }) => {
  const [openId, setOpenId] = useState(items?.[0]?.id ?? null);

  return (
    <CardMe title="Experience">
      <div className="relative">
        <div className="absolute left-[7px] top-3 bottom-3 w-px bg-primary-light" />
        <div className="space-y-8">
          {items?.map((item, index) => {
            const isOpen = openId === item.id;
            const previewPoints = item.description_points?.slice(0, 3) || [];
            const restPoints = item.description_points?.slice(3) || [];
            const visiblePoints = isOpen
              ? item.description_points || []
              : previewPoints;
            const tags = item.tags?.slice(0, isOpen ? item.tags.length : 5) || [];

            return (
              <article key={item.id} className="relative pl-8">
                <div
                  className={`absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 bg-background ${
                    index === 0 ? 'border-primary bg-primary/15' : 'border-primary'
                  }`}
                />

                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <h4 className="font-semibold text-foreground text-[15px] sm:text-base leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-muted-foreground font-mono shrink-0">
                    {item.dates}
                  </p>
                </div>

                <p className="mt-1 text-sm text-primary font-medium">
                  {item.company}
                  {item.location ? (
                    <span className="text-muted-foreground font-normal">
                      {' '}· {item.location}
                    </span>
                  ) : null}
                </p>

                {item.summary && (
                  <p className="mt-2 text-sm text-foreground/85 leading-relaxed italic border-l-2 border-primary/40 pl-3">
                    {item.summary}
                  </p>
                )}

                <ul className="mt-3 space-y-2.5 text-sm text-muted-foreground leading-relaxed">
                  {visiblePoints.map((point, i) => (
                    <li key={i} className="flex gap-2.5">
                      <span className="mt-[7px] shrink-0 w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {restPoints.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    {isOpen ? 'Show less' : `+${restPoints.length} more highlights`}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                )}

                {tags.length > 0 && (
                  <div className="mt-3.5 flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-primary-light/35 text-[#2c2a2b] border border-primary-light/60 text-[11px] font-normal"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {!isOpen && item.tags?.length > 5 && (
                      <span className="text-[11px] text-muted-foreground self-center">
                        +{item.tags.length - 5}
                      </span>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </CardMe>
  );
};

export default Experience;
