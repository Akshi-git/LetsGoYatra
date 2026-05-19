import { motion } from 'motion/react';

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  dark?: boolean;
}

const SectionHeading = ({ subtitle, title, dark = false }: SectionHeadingProps) => {
  return (
    <div className="mb-16 text-center">
      <div className="flex items-center justify-center gap-3 mb-4">
        <motion.span 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="h-px w-8 bg-sunset origin-left"
        />
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-xs font-bold tracking-[0.2em] uppercase ${dark ? 'text-sunset' : 'text-sky'}`}
        >
          {subtitle}
        </motion.span>
        <motion.span 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="h-px w-8 bg-sunset origin-right"
        />
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-4xl md:text-5xl lg:text-6xl font-display leading-[0.9] ${dark ? 'text-white' : 'text-navy'}`}
      >
        {title}
      </motion.h2>
    </div>
  );
};

export default SectionHeading;
