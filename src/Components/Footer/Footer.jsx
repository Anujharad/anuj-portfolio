import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { personal } from "../../data/personal";

const Footer = () => (
  <footer className="relative border-t border-white/5 px-6 md:px-12 lg:px-16 py-12">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <h3 className="text-lg font-bold text-white tracking-tightest">ANUJ HARAD</h3>
          <p className="text-sm text-gray-500 mt-1">Software Engineering Graduate · Full Stack Developer</p>
        </div>
        <div className="flex items-center gap-5">
          <a href={personal.github} target="_blank" rel="noopener noreferrer" data-cursor="GITHUB" className="text-gray-500 hover:text-white transition-colors" aria-label="GitHub"><FaGithub size={20} /></a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" data-cursor="" className="text-gray-500 hover:text-white transition-colors" aria-label="LinkedIn"><FaLinkedinIn size={20} /></a>
          <a href={`mailto:${personal.email}`} data-cursor="" className="text-gray-500 hover:text-white transition-colors" aria-label="Email"><FaEnvelope size={20} /></a>
          <a href="#Home" data-cursor="" className="flex items-center gap-1 text-xs font-mono text-gray-500 hover:text-white transition-colors ml-2">
            Back to top <ArrowUp size={14} />
          </a>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-white/5">
        <p className="text-xs font-mono text-gray-600">© 2026 Anuj Harad</p>
      </div>
    </div>
  </footer>
);

export default Footer;
