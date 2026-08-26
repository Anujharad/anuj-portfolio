import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "About", href: "#About" },
  { label: "Work", href: "#Work" },
  { label: "Experience", href: "#Experience" },
  { label: "Skills", href: "#Skills" },
  { label: "Contact", href: "#Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-base-950/80 backdrop-blur-md border-b border-white/8" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-12 lg:px-16 h-16">
          <a href="#Home" data-cursor="" className="text-sm font-bold tracking-tightest text-white hover:text-accent-light transition-colors">
            ANUJ HARAD
          </a>
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} data-cursor="" className="text-sm text-white/50 hover:text-white transition-colors link-underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden md:flex items-center gap-5">
            <span className="flex items-center gap-2 text-xs font-mono text-white/40">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Open to opportunities
            </span>
            <a href="#Contact" data-cursor="" className="flex items-center gap-1 text-sm font-medium text-white border border-white/10 rounded-full px-4 py-1.5 hover:bg-white/5 hover:border-accent/40 transition-all">
              Let&apos;s Talk <ArrowUpRight size={14} />
            </a>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white p-2" aria-label="Toggle menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden bg-base-950/95 backdrop-blur-lg border-b border-white/8"
          >
            <ul className="flex flex-col px-6 py-6 gap-1">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href} onClick={() => setMenuOpen(false)} className="block py-3 text-lg text-white/70 hover:text-white border-b border-white/8">
                    {item.label}
                  </a>
                </li>
              ))}
              <a href="#Contact" onClick={() => setMenuOpen(false)} className="mt-4 flex items-center justify-center gap-1 text-sm font-medium text-white border border-white/10 rounded-full px-4 py-2.5">
                Let&apos;s Talk <ArrowUpRight size={14} />
              </a>
              <span className="flex items-center gap-2 mt-4 text-xs font-mono text-white/40">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Open to opportunities
              </span>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
