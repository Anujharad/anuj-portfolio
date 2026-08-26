import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, ExternalLink, Play, Database, Cloud, Lock, Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects, filters } from "../../data/projects";
import { fadeUp } from "../../lib/animations";

const ProjectVisual = ({ project, isActive }) => {
  if (project.image) {
    const liveLink = project.links.find((l) => l.type === "live")?.url || project.links[0]?.url;
    return (
      <a
        href={liveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-xl border border-white/15 bg-base-900/90 overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.015] group/browser"
      >
        {/* Browser Top Navigation Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-base-950/80 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
          </div>

          <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-white/50 text-[11px] font-mono max-w-xs w-full justify-center">
            <Lock size={10} className="text-emerald-400" />
            <span className="truncate">{liveLink ? liveLink.replace(/^https?:\/\//, "") : "project.local"}</span>
          </div>

          <div className="flex items-center gap-1 text-accent-light text-[10px] font-mono uppercase tracking-widest">
            <Globe size={11} />
            <span className="hidden sm:inline">LIVE DEMO</span>
          </div>
        </div>

        {/* Website Image Container */}
        <div className="relative aspect-[16/9] overflow-hidden bg-base-950">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/browser:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-base-950/60 via-transparent to-transparent opacity-0 group-hover/browser:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent text-white text-xs font-mono font-medium shadow-lg">
              Visit {project.title} <ArrowUpRight size={14} />
            </span>
          </div>
        </div>
      </a>
    );
  }

  if (project.visual === "architecture" && project.pipeline?.length > 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-8">
        <div className="flex flex-col items-center gap-3">
          {project.pipeline.map((stage, i) => (
            <div key={stage} className="flex flex-col items-center gap-3">
              <motion.div
                initial={{ opacity: 0.3 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="px-6 py-4 rounded-xl border border-accent/20 bg-base-800/60 backdrop-blur-sm flex items-center gap-3 min-w-[200px]"
              >
                <Cloud size={20} className="text-accent-light" />
                <span className="text-sm font-mono font-medium text-white">{stage}</span>
              </motion.div>
              {i < project.pipeline.length - 1 && <div className="w-[2px] h-6 bg-accent/30" />}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (project.visual === "pipeline" && project.pipeline?.length > 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-8">
        {project.pipeline.map((stage, i) => (
          <div key={stage} className="flex flex-col items-center gap-3">
            <motion.div
              initial={{ opacity: 0.3, scale: 0.95 }}
              animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0.3, scale: 0.95 }}
              transition={{ delay: i * 0.15, duration: 0.4 }}
              className="px-6 py-4 rounded-xl border border-accent/20 bg-base-800/60 backdrop-blur-sm flex items-center gap-3 min-w-[180px]"
            >
              <Database size={20} className="text-accent-light" />
              <span className="text-sm font-mono font-medium text-white">{stage}</span>
            </motion.div>
            {i < project.pipeline.length - 1 && (
              <motion.div
                animate={isActive ? { opacity: [0.3, 1, 0.3] } : { opacity: 0.3 }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.15 }}
                className="w-[2px] h-6 bg-accent/40"
              />
            )}
          </div>
        ))}
        <div className="mt-4 flex items-center gap-2 text-xs font-mono text-white/40">
          <Play size={12} className="text-accent-light" />
          <span>Pipeline view</span>
        </div>
      </div>
    );
  }

  return null;
};

const ProjectCard = ({ project, index }) => {
  const isReversed = index % 2 === 1;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[60vh] py-12 border-b border-white/8 last:border-b-0"
    >
      <div className={isReversed ? "lg:order-2" : ""}>
        <div data-cursor="VIEW" className="group relative rounded-2xl border border-white/10 bg-base-900/40 p-4 md:p-6 overflow-hidden hover:border-accent/20 transition-all">
          <div className="bg-grid-fine absolute inset-0 opacity-30" />
          <div className="relative">
            <ProjectVisual project={project} isActive={true} />
          </div>
        </div>
      </div>
      <div className={isReversed ? "lg:order-1" : ""}>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl md:text-5xl font-bold text-accent tracking-tightest">{project.id}</span>
          <span className="text-xs font-mono text-white/30">{project.date}</span>
        </div>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tightest mb-2">{project.title}</h3>
        <p className="text-base md:text-lg text-accent-light font-medium mb-4">{project.subtitle}</p>
        <p className="text-base text-white/60 leading-relaxed mb-6 max-w-lg">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="px-3 py-1 rounded-full border border-white/10 bg-base-800/40 text-xs font-mono text-white/60">{t}</span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor={link.type === "github" ? "GITHUB" : "LIVE"}
              className="group flex items-center gap-2 text-sm font-medium text-white border border-white/15 rounded-full px-5 py-2.5 hover:bg-accent hover:border-accent transition-all duration-300"
            >
              {link.type === "github" ? <FaGithub size={16} /> : <ExternalLink size={16} />}
              {link.label}
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          ))}
          {project.links.length === 0 && <span className="text-sm font-mono text-white/30 px-4 py-2">Case Study</span>}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState("ALL");
  const filtered = filter === "ALL" ? projects : projects.filter((p) => p.categories.includes(filter));
  return (
    <section id="Work" className="relative px-6 md:px-12 lg:px-16 py-20 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-xs font-mono text-accent-light">03 / SELECTED WORK</span>
          <span className="flex-1 h-[1px] bg-white/8" />
        </div>
        <motion.h2 {...fadeUp} className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tightest mb-4">
          Featured work.
        </motion.h2>
        <motion.p {...fadeUp} className="text-base text-white/55 mb-10 max-w-xl">
          A selection of projects spanning web applications, full-stack development and cloud architecture.
        </motion.p>
        <div className="flex flex-wrap gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              data-cursor=""
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                filter === f
                  ? "bg-accent text-white border border-accent"
                  : "text-white/40 border border-white/10 hover:border-white/20 hover:text-white/70"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
