import { motion } from "motion/react";
import { ArrowUpRight, FileText, Terminal, MapPin, Sparkles, Code2, Server, Cloud } from "lucide-react";
import { personal } from "../../data/personal";
import { TechIcon } from "../../lib/icons";

const Hero = () => {
  return (
    <section id="Home" className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-16 pt-20 lg:pt-24 pb-8 overflow-hidden bg-base-900 bg-grid">
      {/* Background radial glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[130px] pointer-events-none -z-10" 
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col justify-between">
        {/* Availability Badge & Metadata */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center gap-4 mb-4 lg:mb-6 text-xs font-mono"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-white/90 font-medium tracking-wide">Available for Full-time Roles</span>
          </div>

          <div className="inline-flex items-center gap-2 text-white/50">
            <MapPin size={13} className="text-accent-light" />
            <span>{personal.location}</span>
          </div>
        </motion.div>

        {/* Main Grid: Hero Text & Technical Visualization */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading & Description */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tightest leading-[1.02] text-white"
            >
              Building high-impact<br />
              <span className="text-gradient">full-stack web</span><br />
              applications.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 lg:mt-6 text-sm sm:text-base text-white/70 max-w-xl leading-relaxed font-sans"
            >
              Hi, I&apos;m <strong className="text-white font-semibold">{personal.name}</strong>. {personal.positioning}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 mt-6 lg:mt-8"
            >
              <a
                href="#Work"
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-none bg-accent text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-300 hover:bg-accent-light hover:shadow-[0_0_20px_rgba(255,48,69,0.4)]"
              >
                <span>View Projects</span>
                <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#Contact"
                className="inline-flex items-center gap-2 px-5 py-3 border border-white/20 bg-transparent text-white font-mono text-xs uppercase tracking-wider font-medium hover:border-white/50 hover:bg-white/5 transition-all duration-300"
              >
                <span>Get In Touch</span>
              </a>

              {personal.resumeUrl && (
                <a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 text-white/60 hover:text-white font-mono text-xs uppercase tracking-wider transition-colors duration-300"
                >
                  <FileText size={14} className="text-accent-light" />
                  <span className="link-underline">Resume</span>
                </a>
              )}
            </motion.div>
          </div>

          {/* Right Column: Editorial Interactive Terminal / Architecture Widget */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="editorial-panel rounded-lg overflow-hidden shadow-2xl relative border border-white/15"
          >
            {/* Header bar */}
            <div className="px-4 py-2.5 bg-white/5 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-accent/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 text-[11px] font-mono text-white/50 flex items-center gap-1.5">
                  <Terminal size={12} className="text-accent-light" />
                  anuj@engineer-node ~ % status
                </span>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-accent-light px-2 py-0.5 bg-accent/10 rounded">
                LIVE STATUS
              </span>
            </div>

            {/* Terminal Body */}
            <div className="p-4 sm:p-5 font-mono text-xs space-y-3 text-white/80">
              <div className="flex items-center justify-between text-white/40 pb-2.5 border-b border-white/10">
                <span>SYSTEM ENVIRONMENT</span>
                <span className="text-emerald-400 font-semibold">HEALTHY (100%)</span>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-white/60 flex items-center gap-2">
                    <Code2 size={13} className="text-accent-light" /> Frontend Layer
                  </span>
                  <span className="text-white">React 19 / Vite / Tailwind</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-white/60 flex items-center gap-2">
                    <Server size={13} className="text-accent-light" /> Backend Systems
                  </span>
                  <span className="text-white">Node.js / Express / REST APIs</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-white/60 flex items-center gap-2">
                    <Cloud size={13} className="text-accent-light" /> Cloud & DevOps
                  </span>
                  <span className="text-white">AWS EC2 / S3 / Docker</span>
                </div>
              </div>

              {/* Code Snippet Box */}
              <div className="mt-3 p-3 rounded bg-black/50 border border-white/10 text-white/90 leading-relaxed font-mono text-[11px]">
                <div className="text-white/40 mb-1">// Candidate Engineer Matrix</div>
                <div><span className="text-accent-light">const</span> engineer = &#123;</div>
                <div className="pl-4">name: <span className="text-emerald-300">&quot;Anuj Harad&quot;</span>,</div>
                <div className="pl-4">role: <span className="text-emerald-300">&quot;Full Stack Developer&quot;</span>,</div>
                <div className="pl-4">specialty: [<span className="text-amber-300">&quot;Frontend&quot;</span>, <span className="text-amber-300">&quot;Backend&quot;</span>, <span className="text-amber-300">&quot;AWS Cloud&quot;</span>],</div>
                <div className="pl-4">status: <span className="text-accent-light">&quot;Open to opportunity&quot;</span></div>
                <div>&#125;;</div>
              </div>

              <div className="pt-2 flex items-center justify-between text-[10px] text-white/40">
                <span className="flex items-center gap-1.5">
                  <Sparkles size={11} className="text-accent-light" /> Build status: Pass
                </span>
                <span>Location: Mumbai (IST)</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quick Tech Badges (Stack Core) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-6 lg:mt-8 pt-4 lg:pt-5 border-t border-white/10 flex flex-wrap items-center gap-4 lg:gap-6"
        >
          <span className="text-xs font-mono text-white/40 uppercase tracking-widest">Stack Core</span>
          <div className="flex flex-wrap items-center gap-3 text-white/70">
            <div className="flex items-center gap-2 text-xs font-mono bg-white/5 px-2.5 py-1 rounded border border-white/10">
              <TechIcon name="react" size={14} className="text-accent-light" />
              <span>React</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono bg-white/5 px-2.5 py-1 rounded border border-white/10">
              <TechIcon name="node" size={14} className="text-emerald-400" />
              <span>Node.js</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono bg-white/5 px-2.5 py-1 rounded border border-white/10">
              <TechIcon name="aws" size={14} className="text-amber-400" />
              <span>AWS</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono bg-white/5 px-2.5 py-1 rounded border border-white/10">
              <TechIcon name="mongodb" size={14} className="text-green-500" />
              <span>MongoDB</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono bg-white/5 px-2.5 py-1 rounded border border-white/10">
              <TechIcon name="docker" size={14} className="text-sky-400" />
              <span>Docker</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
