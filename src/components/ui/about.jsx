import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import CardMe from '@/components/ui/cardme';

const highlights = [
  { label: 'Frontend', value: 'Interfaces that feel fast and clear' },
  { label: 'Backend', value: 'APIs, data, and solid integrations' },
  { label: 'Delivery', value: 'From build to launch and beyond' },
];

const About = ({ content, skills }) => {
  const paragraphs = String(content || '')
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  const focusAreas = (() => {
    const emailSkills =
      skills?.find((s) => s.category === 'Email & Messaging')?.values?.slice(0, 4) || [];
    const stackSkills =
      skills?.slice(0, 2)?.flatMap((s) => s.values?.slice(0, 2) || []) ||
      ['React', 'Node.js', 'TypeScript', 'Next.js'];
    return [...stackSkills, ...emailSkills].slice(0, 10);
  })();

  return (
    <CardMe title="About">
      <div className="space-y-6">
        {paragraphs.map((paragraph, i) => (
          <p
            key={i}
            className={`leading-relaxed max-w-prose ${
              i === 0
                ? 'text-foreground text-base sm:text-lg font-medium'
                : 'text-muted-foreground text-[15px] sm:text-base'
            }`}
          >
            {paragraph}
          </p>
        ))}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-primary-light/60 bg-secondary/40 px-3.5 py-3"
            >
              <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-primary mb-1">
                {item.label}
              </p>
              <p className="text-sm text-foreground leading-snug">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          {focusAreas.slice(0, 8).map((skill) => (
            <span
              key={skill}
              className="text-[11px] font-mono px-2.5 py-1 rounded-md border border-primary-light/70 text-[#2c2a2b] bg-background/60"
            >
              {skill}
            </span>
          ))}
          <Link
            to="/projects"
            className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline ml-1"
          >
            See the work
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </CardMe>
  );
};

export default About;
