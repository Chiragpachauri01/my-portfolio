import useFadeUp from '../../hooks/animations/useFadeUpCards';
export default function ContactSection() {
      useFadeUp("[data-animate]");
  return (
    <section id="contact" className="mt-10">
      <div className="contact-grid">
        {/* Left Column (Text) */}
        <div data-animate>
            <h2 className="text-xl font-bold">Let’s build something</h2>
            <p className="text-sm text-slate-500 mt-2">I ship delightful frontend & AI features. Reach out for prototypes, consulting, or full-time roles.</p>
            <div className="mt-4 text-sm text-slate-500">Email: <a href="mailto:chiragpachauri01@gmail.com" className="text-indigo-600 font-semibold">chiragpachauri01@gmail.com</a></div>
        </div>

        {/* Right Column (Form) */}
        <form id="contactForm" className="glass" style={{padding:'18px',borderRadius:'12px'}} aria-label="Contact form" data-animate>
            <label className="block">
                <div className="text-sm font-medium text-slate-700 dark:text-slate-300">Your name</div>
                <input name="name" required className="mt-2 w-full p-3 rounded-lg border dark:border-slate-700 bg-white/70 dark:bg-slate-800/80" placeholder="Ada Lovelace" />
            </label>
            <label className="block mt-3">
                <div className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</div>
                <input name="email" type="email" required className="mt-2 w-full p-3 rounded-lg border dark:border-slate-700 bg-white/70 dark:bg-slate-800/80" placeholder="you@company.com" />
            </label>
            <label className="block mt-3">
                <div className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</div>
                <textarea name="message" rows="5" required className="mt-2 w-full p-3 rounded-lg border dark:border-slate-700 bg-white/70 dark:bg-slate-800/80" placeholder="Tell me about your project..."></textarea>
            </label>

            <div className="mt-4 flex items-center gap-3">
                <button id="sendBtn" className="btn-primary" type="submit">Send message</button>
                <div id="formStatus" className="text-sm text-slate-500"></div>
            </div>
        </form>
      </div>
    </section>
  );
}