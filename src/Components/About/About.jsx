import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { MapPin, Layers, Cloud, CircleCheck as CheckCircle2 } from "lucide-react";
import { TechIcon } from "../../lib/icons";
import { prefersReducedMotion } from "../../lib/utils";

const facts = [
  { icon: Layers, label: "Frontend / Backend / Cloud" },
  { icon: Cloud, label: "AWS workflows" },
  { icon: MapPin, label: "Mumbai, India" },
  { icon: CheckCircle2, label: "Available for opportunities" },
];

const About = () => {
  const reduced = prefersReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 24 });
  const backgroundY = useTransform(progress, [0, 1], reduced ? [0, 0] : [0, -14]);

  return (
    <section id="About" className="fluid-chapter relative px-6 md:px-12 lg:px-16 py-24 md:py-40">
      <motion.div aria-hidden="true" className="absolute inset-0 -z-[1] opacity-30" style={{ y: backgroundY }} />
      <div className="fluid-word left-[-4vw] top-16">ENGINEER</div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-16">
          <span className="text-xs font-mono text-accent-light">01 / THE ENGINEER</span>
          <span className="flex-1 h-px bg-white/20" />
        </div>
        <div className="grid lg:grid-cols-[1fr_320px] gap-14 lg:gap-28 items-end">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-mono uppercase tracking-[.3em] text-white/60 mb-6">A personal engineering statement</p>
            <h2 className="max-w-4xl text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] font-bold leading-[.88] tracking-tightest text-white">
              I build<br />beyond the<br /><span className="text-accent-light">interface.</span>
            </h2>
            <p className="max-w-2xl mt-10 text-base md:text-lg leading-relaxed text-white/75">
              I&apos;m Anuj Harad, a Software Engineering graduate and Full Stack Developer based in Mumbai. My work sits between frontend experiences, backend systems and cloud infrastructure. I enjoy turning ideas into responsive products, designing APIs, connecting applications to databases and working with AWS to build reliable workflows.
            </p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 mt-8 text-sm font-mono text-white/80">
              <span className="text-accent-light">React</span><span>·</span><span>Node.js</span><span>·</span><span>AWS</span><span>·</span><span>MongoDB</span><span>·</span><span>Docker</span>
            </div>
          </motion.div>
          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="editorial-panel p-6 md:p-7"
          >
            <div className="flex items-center justify-between pb-5 border-b border-white/15">
              <div>
                <p className="text-sm font-bold tracking-tight text-white">ANUJ HARAD</p>
                <p className="mt-1 text-[10px] font-mono uppercase tracking-[.22em] text-white/50">Software Engineer</p>
              </div>
              <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_14px_rgba(255,48,69,.8)]" />
            </div>
            <div className="py-6 space-y-3">
              {["FRONTEND", "BACKEND", "CLOUD", "DEVOPS"].map((item, index) => (
                <div key={item} className="flex items-center gap-3 text-xs font-mono text-white/70">
                  <span className="text-accent-light">0{index + 1}</span><span>{item}</span>
                </div>
              ))}
            </div>
            <div className="pt-5 border-t border-white/15 flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-white/45">
              <span>Mumbai, India</span>
              <TechIcon name="aws" size={16} className="text-white/50" />
            </div>
          </motion.aside>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-16 max-w-3xl">
          {facts.map((fact, index) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="border-t border-white/20 pt-3 text-xs text-white/65"
            >
              <fact.icon size={16} className="mb-3 text-accent-light" />
              {fact.label}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
