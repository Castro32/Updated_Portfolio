import React from 'react';
import { motion } from 'framer-motion';

const CardMe = ({ title, children, className = '' }) => (
    <motion.section
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className={`relative ${className}`}
    >
        <div className="flex items-baseline gap-3 mb-6">
            <h3 className="font-display text-2xl sm:text-[1.65rem] tracking-tight text-foreground">
                {title}
            </h3>
            <span className="flex-1 h-px bg-gradient-to-r from-primary-light to-transparent" />
        </div>
        {children}
    </motion.section>
);

export default CardMe;
