import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Hero from '@/components/ui/hero';
import About from '@/components/ui/about';
import Experience from '@/components/ui/experience';
import Education from '@/components/ui/education';
import Certifications from '../components/ui/certifications';
import Footer from '../components/ui/footer';
import profilepic from '../assets/image.png';

export default function HomePage({ portfolioData }) {
    if (!portfolioData) {
        return (
            <div className="min-h-[50vh] flex items-center justify-center text-muted-foreground font-mono text-sm tracking-wide">
                Loading portfolio…
            </div>
        );
    }

    const projectCount = portfolioData.projects?.length || 0;

    return (
        <div className="w-full">
            <Hero
                name={portfolioData.name}
                title={portfolioData.title}
                bio={portfolioData.bio}
                contact={portfolioData.contact}
                profilePictureUrl={profilepic}
            />

            <div
                id="portfolio-content"
                className="relative border-t border-primary-light/60 bg-gradient-to-b from-background via-secondary/40 to-background"
            >
                <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10 py-20 sm:py-28 space-y-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16">
                        <div className="lg:col-span-7 space-y-16">
                            <About content={portfolioData.about_me} skills={portfolioData.skills} />
                            <Experience items={portfolioData.experience} />
                        </div>
                        <div className="lg:col-span-5 space-y-16">
                            <Certifications items={portfolioData.certifications} />
                            <Education data={portfolioData.education} />
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 py-8 border-y border-primary-light/50">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 flex-1">
                            <div>
                                <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-primary mb-2">
                                    Work
                                </p>
                                <h3 className="font-display text-2xl tracking-tight text-foreground">
                                    Full stack work across {projectCount} client projects
                                </h3>
                            </div>
                            <Link
                                to="/projects"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors self-start"
                            >
                                View projects
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <div className="hidden sm:block w-px bg-primary-light/60 self-stretch" />
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 flex-1">
                            <div>
                                <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-primary mb-2">
                                    Marketing
                                </p>
                                <h3 className="font-display text-2xl tracking-tight text-foreground">
                                    Email marketing, segments & cart flows
                                </h3>
                            </div>
                            <Link
                                to="/newsletters"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-primary/35 text-primary text-sm font-medium hover:bg-primary/8 transition-colors self-start"
                            >
                                View newsletters
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <Footer portfolioData={portfolioData} />
        </div>
    );
}
