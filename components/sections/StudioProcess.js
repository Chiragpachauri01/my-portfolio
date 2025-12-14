'use client';
import useFadeUp from '../../hooks/animations/useFadeUpCards';

export default function StudioProcess() {

  // Activate fade-up animation for cards
  useFadeUp("[data-animate-card]");

  return (
    <section id="studio" className="mt-16">
      <h2 className="text-3xl font-bold">Studio</h2>
      <p className="text-sm text-slate-500 mt-2">
        How I think, build, experiment and explore creative technologies
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">

        {/* Card 1 */}
        <div className="glass p-6 rounded-2xl " data-animate-card>
          <h3 className="font-semibold text-lg">My Process</h3>
          <p className="text-slate-500 text-sm mt-1">How I approach building products</p>

          <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li>🧭 Product framing → understand outcomes</li>
            <li>⚡ Rapid prototypes → validate fast</li>
            <li>🔧 Build → iterate → refine</li>
            <li>📈 Performance & UX polish</li>
            <li>📊 Ship → measure → improve</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="glass p-6 rounded-2xl " data-animate-card>
          <h3 className="font-semibold text-lg">My AI Workflow</h3>
          <p className="text-slate-500 text-sm mt-1">GenAI systems I build</p>

          <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li>📄 Document ingestion → chunking</li>
            <li>🔎 Embeddings (Gemini / OpenAI)</li>
            <li>🗃 Vector DB search (Qdrant)</li>
            <li>🧩 Context merging + LLM reasoning</li>
            <li>🤖 RAG → response ranking → final output</li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="glass p-6 rounded-2xl " data-animate-card>
          <h3 className="font-semibold text-lg">Experiments</h3>
          <p className="text-slate-500 text-sm mt-1">Creative playgrounds</p>

          <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li>🎨 GSAP scrolling + micro-interactions</li>
            <li>🔥 WebGL / Canvas particle tests</li>
            <li>⚙️ UI motion prototypes (Framer Motion)</li>
            <li>💬 LLM Prompt testing tools</li>
            <li>✨ Custom parallax + blob logic</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
