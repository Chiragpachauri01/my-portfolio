import useFadeUpCards from '../../hooks/animations/useFadeUpCards';
import { TechBubble } from './TechBubble';

export default function Experience() {
  useFadeUpCards(".experience-card");

  return (
    <section id="experience" className="mt-16">
      <h2 className="text-2xl font-bold tracking-tight">Experience</h2>
      <p className=" text-sm text-slate-500 mt-2">
        Places where I built, shipped, and explored AI-driven products
      </p>

      <div className="projects-grid mt-8 items-stretch">
        {/* Mphasis */}
        <article className="glass experience-card flex flex-col h-full">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">Mphasis</h3>
            <span className="text-xs text-slate-400">2023 — Present</span>
          </div>

          <p className="text-slate-600 mt-3 line-clamp-4 min-h-[6em]">
            Building enterprise web applications and internal AI-powered
            solutions, including document understanding and RAG pipelines.
          </p>

          {/* spacer pushes bubbles down */}


          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "React",
              "Next.js",
              "Redux",
              "TypeScript",
              "Python",
              "FastAPI",
              "REST APIs",
              "RAG",
              "Embeddings",
              "Vector Search",
              "Qdrant",
            ].map((tech) => (
              <TechBubble key={tech} label={tech} />
            ))}
          </div>
        </article>


        {/* Apponward */}
        <article className="glass experience-card flex flex-col h-full">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">Apponward Technologies</h3>
            <span className="text-xs text-slate-400">2023</span>
          </div>

          <p className="text-slate-600 mt-3 line-clamp-4 min-h-[6em]">
            Shipped production frontend features with a strong focus on
            performance and UI polish.
          </p>



          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "React",
              "Next.js",
              "Redux",
              "TypeScript",
              "FastAPI",
              "REST APIs",
              "Bootstrap",
              "Tailwind CSS",
            ].map((tech) => (
              <TechBubble key={tech} label={tech} />
            ))}
          </div>
        </article>


        {/* Omnie */}
        <article className="glass experience-card flex flex-col h-full">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">Omnie Solutions Pvt. Ltd.</h3>
            <span className="text-xs text-slate-400">2022 — 2023</span>
          </div>

          <p className="text-slate-600 mt-3 line-clamp-4 min-h-[6em]">
            Built my foundation as a developer by working on real client-facing
            modules, UI layouts, and small full-stack features.
          </p>



          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Bootstrap",
              "PHP",
              "REST APIs",
            ].map((tech) => (
              <TechBubble key={tech} label={tech} />
            ))}
          </div>
        </article>

      </div>
    </section>
  );
}
