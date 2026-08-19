import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white/80 dark:bg-[#060608] border-t border-slate-200 dark:border-white/10 text-slate-800 dark:text-gray-300 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4">
          <div className="text-center sm:text-left">
            <div className="font-mono text-cyan-600 dark:text-cyan-400 text-xs sm:text-sm space-y-1">
              <div className="font-bold">{'©2025 MAURICIO_HERRERA'}</div>
              <div className="text-slate-500 dark:text-slate-400">{'// Desarrollador Full Stack'}</div>
              <div className="text-cyan-600 dark:text-cyan-400 flex items-center justify-center sm:justify-start gap-1.5 pt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                <span className="text-[11px] uppercase tracking-wider">{'> System online'}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/MauriHerrera7"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-cyan-500/10 border border-slate-200 dark:border-white/10 hover:border-cyan-500 text-slate-700 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 rounded-2xl transition-all shadow-xs"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/mauricio-herrera-7b744b274"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-cyan-500/10 border border-slate-200 dark:border-white/10 hover:border-cyan-500 text-slate-700 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 rounded-2xl transition-all shadow-xs"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a
              href="mailto:mauriherrera457@gmail.com"
              className="p-3 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-cyan-500/10 border border-slate-200 dark:border-white/10 hover:border-cyan-500 text-slate-700 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 rounded-2xl transition-all shadow-xs"
              aria-label="Email"
            >
              <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
