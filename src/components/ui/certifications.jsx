import React from 'react';
import CardMe from '@/components/ui/cardme';
import { Badge } from '@/components/ui/badge';
import { Award } from 'lucide-react';

const Certifications = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <CardMe title="Certifications">
      <div className="space-y-5">
        {items.map((cert, index) => (
          <div
            key={cert.id || cert.name || index}
            className="flex items-start gap-3 pb-5 border-b border-primary-light/50 last:border-0 last:pb-0"
          >
                <div className="mt-0.5 w-8 h-8 rounded-lg bg-primary/10 border border-primary-light/40 flex items-center justify-center shrink-0">
              <Award className="w-3.5 h-3.5 text-primary" />
            </div>
            <div className="min-w-0">
              <h4 className="font-semibold text-foreground text-sm leading-snug">{cert.name}</h4>
              <p className="text-xs text-muted-foreground mt-1 font-mono">
                {cert.issuer} · {cert.date}
              </p>
              {cert.credential_id && (
                <p className="text-xs text-muted-foreground/80 mt-0.5">ID: {cert.credential_id}</p>
              )}
              {(cert.tags || cert.skills)?.length > 0 && (
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {(cert.tags || cert.skills).slice(0, 4).map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-primary-light/30 text-[#2c2a2b] border border-primary-light/50 text-[10px] font-normal"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </CardMe>
  );
};

export default Certifications;
