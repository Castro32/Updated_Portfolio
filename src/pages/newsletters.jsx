import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Newsletters from '@/components/ui/newsletters';
import Footer from '@/components/ui/footer';

export default function NewslettersPage({ portfolioData }) {
  const newsletters = portfolioData?.newsletters || [];

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
            Email skills
          </p>
          <h1 className="font-display text-4xl sm:text-5xl tracking-tight text-foreground mb-4">
            Newsletters
          </h1>
          <p className="text-muted-foreground text-base max-w-2xl leading-relaxed">
            How I run ecommerce email — campaign design, audience segmentation, and lifecycle automations across Mailchimp, Klaviyo, OpenCart, and Shopify mail messaging.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {['Mailchimp', 'Klaviyo', 'OpenCart', 'Shopify Mail'].map((platform) => (
              <span
                key={platform}
                className="text-[11px] font-mono px-2.5 py-1 rounded-md border border-primary-light/70 text-[#2c2a2b] bg-secondary/50"
              >
                {platform}
              </span>
            ))}
          </div>
        </motion.div>

        {newsletters.length > 0 ? (
          <Newsletters items={newsletters} showHeader={false} />
        ) : (
          <p className="text-muted-foreground text-center py-20">
            No newsletter designs yet. Add entries in the portfolio data and drop designs into{' '}
            <span className="font-mono text-sm text-foreground">src/assets/newsletters</span>.
          </p>
        )}
      </div>

      <Footer portfolioData={portfolioData} />
    </div>
  );
}
