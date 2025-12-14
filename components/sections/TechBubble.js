import {
  SiReact,
  SiNextdotjs,
  SiPython,
  SiFastapi,
  SiFirebase,
  SiTypescript,
  SiRedux,
  SiJavascript,
  SiPhp,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
} from "react-icons/si";

import { HiOutlineCpuChip } from "react-icons/hi2";
import { BsDatabase } from "react-icons/bs";
import { MdApi } from "react-icons/md";

const techMap = {
  // Frontend Frameworks
  React: { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#000000" },

  // State & Language
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  Redux: { icon: SiRedux, color: "#764ABC" },

  // Styling / UI
  "Material UI": { icon: SiMui, color: "#007FFF" },
  MUI: { icon: SiMui, color: "#007FFF" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  Bootstrap: { icon: SiBootstrap, color: "#7952B3" },

  // Backend / BaaS
  Python: { icon: SiPython, color: "#3776AB" },
  FastAPI: { icon: SiFastapi, color: "#009688" },
  Firebase: { icon: SiFirebase, color: "#FFCA28" },

  // APIs
  "REST APIs": { icon: MdApi, color: "#0EA5E9" },

  // AI / GenAI
  RAG: { icon: HiOutlineCpuChip, color: "#6366F1" },
  Embeddings: { icon: HiOutlineCpuChip, color: "#8B5CF6" },
  "Vector Search": { icon: BsDatabase, color: "#0EA5E9" },
  Qdrant: { icon: BsDatabase, color: "#0EA5E9" },

  // Legacy / Training
  PHP: { icon: SiPhp, color: "#777BB4" },
};

export function TechBubble({ label }) {
  const tech = techMap[label];
  if (!tech) return null;

  const Icon = tech.icon;

  return (
    <span
      className="flex items-center gap-2 text-xs px-3 py-1 rounded-full
                 bg-slate-100 text-slate-700
                 hover:bg-slate-200 transition"
    >
      <Icon className="text-sm" style={{ color: tech.color }} />
      {label}
    </span>
  );
}
