import useFadeUp from '../../hooks/animations/useFadeUpCards';
export default function TechStack() {
    useFadeUp("[data-animate]");
  return (
    <section id="tech" className="mt-14">
      <h2 className="text-2xl font-bold">Tech Stack</h2>
      <p className="text-sm text-slate-500 mt-2">Technologies I use to build fast, scalable experiences</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {/* Frontend */}
          <div className="glass p-6 rounded-2xl " data-animate>
              <h3 className="font-semibold text-lg mb-3">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">React</span>
                  <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">Next.js</span>
                  <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-medium">JavaScript</span>
                  <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">Material-UI</span>
                  <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">Redux</span>
              </div>
          </div>
          {/* Backend */}
          <div className="glass p-6 rounded-2xl " data-animate>
              <h3 className="font-semibold text-lg mb-3">Backend</h3>
              <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium">Python</span>
                  <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-sm font-medium">FastAPI</span>
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium">REST APIs</span>
                  <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">Firebase</span>
              </div>
          </div>
          {/* GenAI */}
          <div className="glass p-6 rounded-2xl " data-animate>
              <h3 className="font-semibold text-lg mb-3">GenAI & LLMs</h3>
              <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-sm font-medium">Gemini API</span>
                  <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">RAG Pipelines</span>
                  <span className="px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm font-medium">Embeddings</span>
                  <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">Qdrant</span>
              </div>
          </div>
          {/* Tools */}
          <div className="glass p-6 rounded-2xl " data-animate>
              <h3 className="font-semibold text-lg mb-3">Tools</h3>
              <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-700 text-sm font-medium">Git</span>
                  <span className="px-3 py-1 rounded-full bg-orange-200 text-orange-700 text-sm font-medium">Postman</span>
                  <span className="px-3 py-1 rounded-full bg-blue-200 text-blue-700 text-sm font-medium">VS Code</span>
                  <span className="px-3 py-1 rounded-full bg-yellow-200 text-yellow-700 text-sm font-medium">JIRA</span>
              </div>
          </div>
          {/* Cloud / DB */}
          <div className="glass p-6 rounded-2xl " data-animate>
              <h3 className="font-semibold text-lg mb-3">Cloud & Databases</h3>
              <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium">Supabase</span>
                  <span className="px-3 py-1 rounded-full bg-lime-100 text-lime-700 text-sm font-medium">MongoDB</span>
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">Qdrant Cloud</span>
              </div>
          </div>
      </div>
    </section>
  );
}