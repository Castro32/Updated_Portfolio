import React from 'react';
import CardMe from '@/components/ui/cardme';
import { Badge } from '@/components/ui/badge';
import { GraduationCap } from 'lucide-react';

const Education = ({ data }) => {
    if (!data) return null;

    return (
        <CardMe title="Education">
            <div className="flex items-start gap-3">
                <div className="mt-0.5 w-8 h-8 rounded-lg bg-primary/10 border border-primary-light/40 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-3.5 h-3.5 text-primary" />
                </div>
                <div>
                    <h4 className="font-semibold text-foreground text-sm leading-snug">{data.degree}</h4>
                    <p className="text-xs text-muted-foreground mt-1 font-mono">
                        {data.university} · {data.dates}
                    </p>
                    {data.description && (
                        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{data.description}</p>
                    )}
                    {data.tags?.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1.5">
                            {data.tags.map((tag) => (
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
        </CardMe>
    );
};

export default Education;
