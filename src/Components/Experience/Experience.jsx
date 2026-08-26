import { motion } from "motion/react";
import { TechIcon } from "../../lib/icons";
import { experience } from "../../data/experience";
import { fadeUp } from "../../lib/animations";

const Experience = () => (
  <section id="Experience" className="relative px-6 md:px-12 lg:px-16 py-20 md:py-32 bg-base-900/40">
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center gap-3 mb-12">
        <span className="text-xs font-mono text-accent-light">02 / EXPERIENCE</span>
        <span className="flex-1 h-[1px] bg-white/8" />
      </div>
      <motion.h2 {...fadeUp} className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tightest mb-12">
        Where I&apos;ve worked.
      </motion.h2>
      <div className="space-y-8">
        {experience.map((exp) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="grid md:grid-cols-[60px_1fr] gap-4 md:gap-8"
          >
            <div className="flex md:flex-col items-center md:items-start gap-4">
              <span className="text-3xl md:text-5xl font-bold text-base-500 tracking-tightest">{exp.id}</span>
              <div className="hidden md:block w-[1px] flex-1 bg-gradient-to-b from-base-500 to-transparent min-h-[200px]" />
            </div>
            <div className="pb-8">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                <h3 className="text-xl md:text-2xl font-bold text-white">{exp.role}</h3>
                <span className="text-white/30">—</span>
                <span className="text-lg md:text-xl text-accent-light font-medium">{exp.company}</span>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4 text-sm font-mono text-white/40">
                <span>{exp.location}</span><span>·</span><span>{exp.duration}</span>
              </div>
              <p className="text-base text-white/55 leading-relaxed mb-5 max-w-2xl">{exp.summary}</p>
              <ul className="space-y-2 mb-6 max-w-2xl">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-3 text-sm text-white/55 leading-relaxed">
                    <span className="text-accent-light mt-1.5 flex-shrink-0">▹</span><span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span key={t} data-cursor="" className="group flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-base-800/40 text-xs font-mono text-white/50 hover:border-accent/30 hover:text-white transition-all">
                    <TechIcon name={t} size={14} className="text-white/40 group-hover:text-accent-light transition-colors" />
                    {t === "nodedotjs" ? "Node.js" : t === "tailwindcss" ? "Tailwind CSS" : t.charAt(0).toUpperCase() + t.slice(1)}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
