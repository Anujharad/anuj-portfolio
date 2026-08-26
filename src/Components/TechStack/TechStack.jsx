import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { techStack, skillsOrbit } from "../../data/skills";
import { TechIcon } from "../../lib/icons";
import { fadeUp, stagger, staggerItem } from "../../lib/animations";
import { prefersReducedMotion } from "../../lib/utils";

const OrbitNode = ({ skill, index, sx, sy, radius, angleStep }) => {
  const angle = index * angleStep - Math.PI / 2;
  const baseX = Math.cos(angle) * radius;
  const baseY = Math.sin(angle) * radius;
  const x = useTransform(sx, (v) => baseX + v);
  const y = useTransform(sy, (v) => baseY + v);
  return (
    <motion.div className="absolute z-20" style={{ x, y }} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.08, duration: 0.4 }}>
      <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl border border-white/10 bg-base-800/60 backdrop-blur-sm flex items-center justify-center text-white/50 hover:text-accent-light hover:border-accent/30 transition-all -translate-x-1/2 -translate-y-1/2">
        <TechIcon name={skill.icon} size={24} />
      </div>
    </motion.div>
  );
};

const SkillsOrbit = () => {
  const ref = useRef(null);
  const reduced = prefersReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 25 });
  const sy = useSpring(my, { stiffness: 120, damping: 25 });
  const handleMove = (e) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left - rect.width / 2) / 20);
    my.set((e.clientY - rect.top - rect.height / 2) / 20);
  };
  const radius = 130;
  const angleStep = (2 * Math.PI) / skillsOrbit.length;
  return (
    <div ref={ref} onMouseMove={handleMove} className="relative flex items-center justify-center h-[320px] md:h-[360px]">
      <div className="absolute w-[260px] h-[260px] md:w-[300px] md:h-[300px] rounded-full border border-white/8" />
      <div className="absolute w-[180px] h-[180px] md:w-[200px] md:h-[200px] rounded-full border border-white/8" />
      <div className="absolute z-10 w-20 h-20 rounded-full border border-accent/30 bg-base-900/60 backdrop-blur-sm flex items-center justify-center">
        <span className="text-xs font-mono uppercase tracking-widest text-accent-light font-bold text-center leading-tight">Full<br />Stack</span>
      </div>
      {skillsOrbit.map((skill, i) => (
        <OrbitNode key={skill.name} skill={skill} index={i} sx={sx} sy={sy} radius={radius} angleStep={angleStep} />
      ))}
    </div>
  );
};

const TechStack = () => (
  <section id="Skills" className="relative px-6 md:px-12 lg:px-16 py-20 md:py-32 bg-base-900/40">
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center gap-3 mb-12">
        <span className="text-xs font-mono text-accent-light">04 / TOOLKIT</span>
        <span className="flex-1 h-[1px] bg-white/8" />
      </div>
      <motion.h2 {...fadeUp} className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tightest mb-12">Tools I build with.</motion.h2>
      <div className="mb-20"><SkillsOrbit /></div>
      <motion.div {...stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {techStack.map((category) => (
          <motion.div key={category.category} {...staggerItem} className="group rounded-2xl border border-white/8 bg-base-900/40 p-6 hover:border-accent/15 transition-all">
            <h3 className="text-xs font-mono uppercase tracking-widest text-accent-light mb-4">{category.category}</h3>
            <div className="space-y-3">
              {category.items.map((item) => (
                <div key={item.name} data-cursor="" className="group/item">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm font-medium text-white/80 group-hover/item:text-white transition-colors">
                      <TechIcon name={item.icon} size={16} className="text-white/40" />
                      {item.name}
                    </span>
                    <span className="text-white/20 group-hover/item:text-accent transition-colors text-lg leading-none">+</span>
                  </div>
                  <p className="text-xs text-white/40 max-h-0 overflow-hidden group-hover/item:max-h-20 transition-all duration-300 pt-0 group-hover/item:pt-1.5">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default TechStack;
