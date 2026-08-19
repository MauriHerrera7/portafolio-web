
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaJava, FaDocker, FaGithub, FaJs, FaHtml5, FaCss3Alt, FaPython
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiTailwindcss, SiExpress, SiNestjs, SiMongodb, SiPostgresql, SiCplusplus, SiDjango
} from 'react-icons/si';

const skills = [
  { name: 'React', icon: FaReact, color: 'text-blue-500 dark:text-blue-400' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-slate-900 dark:text-white' },
  { name: 'JavaScript', icon: FaJs, color: 'text-amber-500 dark:text-yellow-400' },
  { name: 'Python', icon: FaPython, color: 'text-yellow-600 dark:text-yellow-300' },
  { name: 'Django', icon: SiDjango, color: 'text-emerald-600 dark:text-emerald-500' },
  { name: 'Java', icon: FaJava, color: 'text-orange-600 dark:text-orange-500' },
  { name: 'C++', icon: SiCplusplus, color: 'text-blue-600 dark:text-blue-500' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-600 dark:text-green-500' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-sky-600 dark:text-blue-400' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600 dark:text-green-400' },
  { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-600 dark:text-cyan-400' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-24 bg-slate-100/60 dark:bg-[#030303] text-slate-900 dark:text-white overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12 sm:mb-16">
          <div className="h-[1px] flex-1 bg-slate-300 dark:bg-white/10" />
          <h2 className="text-xs sm:text-sm font-mono tracking-[0.4em] sm:tracking-[0.5em] text-cyan-600 dark:text-cyan-400 uppercase">Sobre mí</h2>
          <div className="h-[1px] flex-1 bg-slate-300 dark:bg-white/10" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          
          {/* Main Content - Bento Box 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 p-6 sm:p-8 md:p-12 bg-white/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 rounded-3xl sm:rounded-[40px] shadow-xl shadow-slate-200/50 dark:shadow-none flex flex-col justify-center backdrop-blur-sm"
          >
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 leading-tight text-slate-900 dark:text-white">
              Creando soluciones <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 font-black">Robustas</span> <br />
              con tecnología moderna.
            </h3>
            <p className="text-slate-600 dark:text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 max-w-3xl">
              Soy un desarrollador apasionado por la ingeniería de software y el diseño visual. 
              Mi objetivo es crear productos que no solo funcionen perfectamente, sino que también 
              ofrezcan una experiencia memorable.
            </p>
            <p className="text-slate-600 dark:text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl">
               Con experiencia en ecosistemas <span className="text-slate-900 dark:text-white font-semibold">JavaScript/TypeScript</span> y <span className="text-slate-900 dark:text-white font-semibold">Python</span>, 
               me especializo en arquitecturas escalables y GUIs intuitivas de alto rendimiento.
            </p>
          </motion.div>

          {/* Profile Card - Bento Box 2 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-4 p-6 sm:p-8 bg-gradient-to-br from-cyan-600 to-blue-700 rounded-3xl sm:rounded-[40px] shadow-xl flex flex-col items-center justify-center text-center text-white"
          >
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-6 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
               <Image 
                 src="https://res.cloudinary.com/dry6dvzoj/image/upload/v1756590188/profile-pic_2_bfzl6x.png" 
                 alt="Mauricio Herrera" 
                 fill
                 sizes="128px"
                 className="object-cover"
               />
            </div>
            <h4 className="text-xl sm:text-2xl font-bold mb-1">Mauricio Herrera</h4>
            <p className="opacity-90 font-mono text-sm mb-6">Mendoza, Argentina 🇦🇷</p>
            <div className="flex gap-3">
               <div className="px-4 py-1.5 bg-white/15 rounded-full text-xs font-bold backdrop-blur-md border border-white/20 text-white">Full Stack</div>
            </div>
          </motion.div>

          {/* Tech Stack - Bento Box 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-12 p-6 sm:p-8 md:p-12 bg-white/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 rounded-3xl sm:rounded-[40px] shadow-xl shadow-slate-200/50 dark:shadow-none backdrop-blur-sm"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-8 sm:mb-12">
               <h4 className="text-2xl font-bold text-slate-900 dark:text-white">Tech Stack Principal</h4>
               <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">Herramientas diarias</p>
            </div>
            
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-4 sm:gap-6">
               {skills.map((skill) => (
                 <motion.div 
                   key={skill.name}
                   whileHover={{ y: -5 }}
                   className="flex flex-col items-center gap-3 group"
                 >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl flex items-center justify-center group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-all duration-300 shadow-sm">
                       <skill.icon className={`text-2xl sm:text-3xl ${skill.color}`} />
                    </div>
                    <span className="text-[11px] sm:text-xs font-mono text-slate-600 dark:text-gray-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors text-center">{skill.name}</span>
                 </motion.div>
               ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
