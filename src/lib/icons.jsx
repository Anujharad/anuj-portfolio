import {
  FaReact, FaNodeJs, FaJs, FaPython, FaHtml5, FaCss3Alt, FaPhp, FaLaravel,
  FaGitAlt, FaGithub, FaDocker, FaAws,
} from "react-icons/fa";
import {
  SiTypescript, SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiPostman,
} from "react-icons/si";

const iconMap = {
  react: FaReact,
  nodedotjs: FaNodeJs,
  node: FaNodeJs,
  express: SiExpress,
  mongodb: SiMongodb,
  aws: FaAws,
  docker: FaDocker,
  mysql: SiMysql,
  python: FaPython,
  tailwindcss: SiTailwindcss,
  javascript: FaJs,
  typescript: SiTypescript,
  html5: FaHtml5,
  css3: FaCss3Alt,
  laravel: FaLaravel,
  php: FaPhp,
  git: FaGitAlt,
  github: FaGithub,
  postman: SiPostman,
  code: FaJs,
};

export const TechIcon = ({ name, size = 20, className = "" }) => {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon size={size} className={className} />;
};
