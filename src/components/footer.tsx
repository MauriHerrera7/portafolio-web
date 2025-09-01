import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 
                      border-t-2 border-cyan-600 dark:border-cyan-400 
                      text-gray-900 dark:text-gray-300 
                      transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <div className="text-center md:text-left">
            <div className="font-code text-cyan-600 dark:text-cyan-400 text-xs sm:text-sm space-y-1">
              <div>{'© 2025 MAURICIO_HERRERA.exe'}</div>
              <div className="text-blue-600 dark:text-blue-400">{'// All rights reserved'}</div>
              <div className="text-cyan-600 dark:text-cyan-400 animate-pulse">{'> System running...'}</div>
            </div>
          </div>
          
          <div className="flex gap-4 sm:gap-6">
            <a
              href="https://github.com/MauriHerrera7"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2 sm:p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 hover:border-cyan-600 dark:hover:border-cyan-400 text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 rounded-lg transition-all duration-300"
              title="GitHub"
            >
              <Github className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/mauricio-herrera-7b744b274"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2 sm:p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-all duration-300"
              title="LinkedIn"
            >
              <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:mauricio@ejemplo.com"
              className="group p-2 sm:p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 hover:border-purple-600 dark:hover:border-purple-400 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 rounded-lg transition-all duration-300"
              title="Email"
            >
              <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
