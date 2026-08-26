import { motion } from "motion/react";
import { Award, ArrowUpRight } from "lucide-react";
import { education, certifications } from "../../data/education";
import { fadeUp, stagger, staggerItem } from "../../lib/animations";

const Education = () => (
  <section className="relative px-6 md:px-12 lg:px-16 py-20 md:py-32">
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center gap-3 mb-12">
        <span className="text-xs font-mono text-accent-light">05 / BACKGROUND</span>
        <span className="flex-1 h-[1px] bg-white/8" />
      </div>
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <motion.h2 {...fadeUp} className="text-2xl md:text-3xl font-bold text-white tracking-tightest mb-8">Education.</motion.h2>
          <div className="space-y-6">
            {education.map((edu, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="relative pl-6 border-l border-white/10">
                <div className="absolute left-0 top-1.5 w-2 h-2 -translate-x-1/2 rounded-full bg-accent" />
                <h3 className="text-base md:text-lg font-bold text-white">{edu.degree}</h3>
                <p className="text-sm text-white/50 mt-1">{edu.institution}</p>
                <div className="flex items-center gap-3 mt-2 text-xs font-mono text-white/40">
                  <span>{edu.duration}</span><span>·</span><span className="text-accent-light">{edu.score}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <motion.h2 {...fadeUp} className="text-2xl md:text-3xl font-bold text-white tracking-tightest mb-8">Certifications.</motion.h2>
          <motion.div {...stagger} className="space-y-4">
            {certifications.map((cert, i) => (
              <motion.div key={i} {...staggerItem} className="group flex items-center justify-between p-5 rounded-xl border border-white/8 bg-base-900/40 hover:border-accent/20 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg border border-white/10 bg-base-800/40 flex items-center justify-center">
                    <Award size={18} className="text-accent-light" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">{cert.name}</h3>
                    <p className="text-xs text-white/40 mt-0.5">{cert.issuer}</p>
                  </div>
                </div>
                {cert.url ? (
                  <a href={cert.url} target="_blank" rel="noopener noreferrer" data-cursor="" className="flex items-center gap-1 text-xs font-mono text-white/40 hover:text-accent-light transition-colors">
                    View <ArrowUpRight size={14} />
                  </a>
                ) : (
                  <span className="text-xs font-mono text-white/20">Verified</span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
