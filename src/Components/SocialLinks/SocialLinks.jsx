import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { socials } from "../../data/personal";
import { fadeUp, stagger, staggerItem } from "../../lib/animations";

const iconMap = { github: FaGithub, linkedin: FaLinkedinIn, email: FaEnvelope };

const SocialLinks = () => (
  <section className="relative px-6 md:px-12 lg:px-16 py-20 md:py-32 bg-base-800/30">
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center gap-3 mb-12">
        <span className="text-xs font-mono text-accent">06 / SOCIALS</span>
        <span className="flex-1 h-[1px] bg-white/5" />
      </div>
      <motion.h2 {...fadeUp} className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tightest mb-12">
        Find me around the internet.
      </motion.h2>
      <motion.div {...stagger} className="grid sm:grid-cols-3 gap-4">
        {socials.map((social) => {
          const Icon = iconMap[social.icon];
          return (
            <motion.a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" data-cursor={social.icon === "github" ? "GITHUB" : ""} {...staggerItem} className="group relative overflow-hidden rounded-2xl border border-white/5 bg-base-800/40 p-6 hover:border-accent/20 transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-transparent transition-all duration-500" />
              <div className="relative flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg border border-white/10 bg-base-700/40 flex items-center justify-center text-gray-400 group-hover:text-accent-light transition-colors">
                  <Icon size={20} />
                </div>
                <ArrowUpRight size={18} className="text-gray-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <h3 className="relative text-base font-bold text-white mb-1">{social.name}</h3>
              <p className="relative text-sm text-gray-500 font-mono">{social.handle}</p>
            </motion.a>
          );
        })}
      </motion.div>
    </div>
  </section>
);

export default SocialLinks;
