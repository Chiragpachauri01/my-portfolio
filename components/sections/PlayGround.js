'use client';

import useFadeUp from "../../hooks/animations/useFadeUp";
export default function Playground() {

  // Trigger fade-up animation on cards only
  useFadeUp("[data-animate-card]");

  return (
    <section id="play" className="mt-16">
      <h2 className="text-3xl font-bold">Playground</h2>
      <p className="text-sm text-slate-500 mt-2">Mini tools, experiments & creative prototypes</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">

        {/* === Card 1: LLM Prompt Studio === */}
        <div className="glass p-6 rounded-2xl" data-animate-card>
          <h3 className="font-semibold text-lg">DocMind AI</h3>
          <p className="text-slate-500 text-sm mt-1 line-clamp-3 min-h-[4em]">
            RAG-based document question-answering implemented with vector embeddings, Qdrant as the vector store, and a Next.js frontend.
          </p>

          {/* Preview box */}
          <div className="relative mt-4 h-28 rounded-xl overflow-hidden border border-white/10">
            <video
              src="/videos/docMind.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4 mt-4 text-sm">
            <button className="btn-primary px-4 py-2 rounded-full">Open Demo</button>
            <button className="btn-ghost px-4 py-2 rounded-full">View Code</button>
          </div>
        </div>

        {/* === Card 2: Particle Composer === */}
        <div className="glass p-6 rounded-2xl" data-animate-card>
          <h3 className="font-semibold text-lg">Particle Composer</h3>
          <p className="text-slate-500 text-sm mt-1 line-clamp-3 min-h-[4em]">
            GSAP + Canvas playground for particle bursts, flow fields
            and cursor-following motion.
          </p>

          <div className="relative mt-4 h-28 rounded-xl overflow-hidden border border-white/10">
            <video
              src="/videos/particleComposer.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex items-center gap-4 mt-4 text-sm">
            <button className="btn-primary px-4 py-2 rounded-full">Open Demo</button>
            <button className="btn-ghost px-4 py-2 rounded-full">View Code</button>
          </div>
        </div>

        {/* === Card 3: Realtime Canvas === */}
        <div className="glass p-6 rounded-2xl" data-animate-card>
          <h3 className="font-semibold text-lg">Realtime Canvas</h3>
          <p className="text-slate-500 text-sm mt-1 line-clamp-3 min-h-[4em]">
            A fast, responsive 2D canvas engine for drawing,
            interactions and multiplayer experiments.
          </p>

          <div className="relative mt-4 h-28 rounded-xl overflow-hidden border border-white/10">
            <video
              src="/videos/realtimeCanvas.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex items-center gap-4 mt-4 text-sm">
            <button className="btn-primary px-4 py-2 rounded-full">Open Demo</button>
            <button className="btn-ghost px-4 py-2 rounded-full">View Code</button>
          </div>
        </div>

      </div>
    </section>
  );
}
