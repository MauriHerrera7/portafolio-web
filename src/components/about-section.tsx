
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
  { name: 'React', icon: FaReact, color: 'text-blue-400' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
  { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
  { name: 'Python', icon: FaPython, color: 'text-yellow-300' },
  { name: 'Django', icon: SiDjango, color: 'text-green-600' },
  { name: 'Java', icon: FaJava, color: 'text-orange-500' },
  { name: 'C++', icon: SiCplusplus, color: 'text-blue-600' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-400' },
  { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-400' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#030303] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-[1px] flex-1 bg-white/10" />
          <h2 className="text-sm font-mono tracking-[0.5em] text-cyan-500 uppercase">Sobre mí</h2>
          <div className="h-[1px] flex-1 bg-white/10" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Content - Bento Box 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-8 p-8 md:p-12 bg-white/5 border border-white/10 rounded-[40px] flex flex-col justify-center"
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Creando soluciones <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 font-black">Robustas</span> <br />
              con tecnología moderna.
            </h3>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl">
              Soy un desarrollador apasionado por la ingeniería de software y el diseño visual. 
              Mi objetivo es crear productos que no solo funcionen perfectamente, sino que también 
              ofrezcan una experiencia memorable.
            </p>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl">
               Con experiencia en ecosistemas <span className="text-white font-medium">JavaScript/TypeScript</span>, 
               me especializo en arquitecturas escalables y GUIs intuitivas de alto rendimiento.
            </p>
          </motion.div>

          {/* Profile Card - Bento Box 2 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-4 p-8 bg-gradient-to-br from-cyan-600 to-blue-700 rounded-[40px] flex flex-col items-center justify-center text-center text-white"
          >
            <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
               <Image 
                 src="https://res.cloudinary.com/dry6dvzoj/image/upload/v1756590188/profile-pic_2_bfzl6x.png" 
                 alt="Mauricio" 
                 fill
                 className="object-cover"
               />
            </div>
            <h4 className="text-2xl font-bold mb-1">Mauricio Herrera</h4>
            <p className="opacity-80 font-mono text-sm mb-6">Mendoza, Argentina 🇦🇷</p>
            <div className="flex gap-4">
               <div className="px-4 py-2 bg-white/10 rounded-full text-xs font-bold backdrop-blur-md border border-white/10 text-white">Full Stack</div>
               <div className="px-4 py-2 bg-white/10 rounded-full text-xs font-bold backdrop-blur-md border border-white/10 text-white font-mono">2026</div>
            </div>
          </motion.div>

          {/* Tech Stack - Bento Box 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-12 p-8 md:p-12 bg-white/5 border border-white/10 rounded-[40px]"
          >
            <div className="flex items-center justify-between mb-12">
               <h4 className="text-2xl font-bold">Tech Stack Principal</h4>
               <p className="text-xs font-mono text-cyan-500 uppercase tracking-widest">Herramientas diarias</p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-8">
               {skills.map((skill, i) => (
                 <motion.div 
                   key={skill.name}
                   whileHover={{ y: -5 }}
                   className="flex flex-col items-center gap-4 group"
                 >
                    <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-all duration-300">
                       <skill.icon className={`text-3xl ${skill.color}`} />
                    </div>
                    <span className="text-xs font-mono text-gray-500 group-hover:text-white transition-colors">{skill.name}</span>
                 </motion.div>
               ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
