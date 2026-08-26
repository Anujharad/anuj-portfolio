import { motion } from "motion/react";
import { stats } from "../../data/personal";

const Stats = () => (
  <section className="relative border-y border-white/8 bg-base-900/50">
    <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/8">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="flex flex-col items-center justify-center text-center px-4 py-8 md:py-12"
        >
          <span className="text-3xl md:text-5xl font-bold tracking-tightest text-white">{stat.value}</span>
          <span className="mt-2 text-xs md:text-sm font-mono uppercase tracking-wider text-white/40">{stat.label}</span>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Stats;
