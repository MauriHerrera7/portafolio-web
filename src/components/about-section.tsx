'use client';

import Image from 'next/image';
import { 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaNodeJs, 
  FaJava, 
  FaDocker, 
  FaGithub 
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiTailwindcss, 
  SiExpress, 
  SiNestjs, 
  SiMongodb, 
  SiPostgresql, 
  SiCplusplus 
} from 'react-icons/si';

export default function AboutSection() {
  const skills = [
    { name: 'React', icon: FaReact, color: 'text-blue-500 dark:text-blue-400' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-800 dark:text-white' },
    { name: 'HTML', icon: FaHtml5, color: 'text-orange-600 dark:text-orange-500' },
    { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-600 dark:text-blue-500' },
    { name: 'JavaScript', icon: FaJs, color: 'text-yellow-500 dark:text-yellow-400' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-600 dark:text-cyan-400' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-600 dark:text-green-500' },
    { name: 'Express', icon: SiExpress, color: 'text-gray-700 dark:text-gray-300' },
    { name: 'NestJS', icon: SiNestjs, color: 'text-red-600 dark:text-red-500' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500 dark:text-green-400' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-500 dark:text-blue-400' },
    { name: 'Java', icon: FaJava, color: 'text-orange-700 dark:text-orange-600' },
    { name: 'C++', icon: SiCplusplus, color: 'text-blue-700 dark:text-blue-600' },
    { name: 'Docker', icon: FaDocker, color: 'text-blue-500 dark:text-blue-400' },
    { name: 'GitHub', icon: FaGithub, color: 'text-gray-800 dark:text-gray-300' },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cyan-600 dark:text-cyan-400 mb-6 sm:mb-8 text-center lg:text-left">
              Sobre Mí
            </h2>
            
            <div className="bg-gray-100 dark:bg-black/50 border-2 border-cyan-600 dark:border-cyan-400 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Soy un desarrollador Full Stack apasionado por crear soluciones innovadoras 
                y experiencias digitales excepcionales. Me especializo en tecnologías modernas 
                y siempre estoy buscando nuevos desafíos que me permitan crecer profesionalmente.
              </p>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Con experiencia tanto en frontend como backend, disfruto construyendo 
                aplicaciones completas que no solo funcionen perfectamente, sino que 
                también brinden una experiencia de usuario memorable.
              </p>
            </div>
            
            <div className="bg-gray-100 dark:bg-black/50 border-2 border-purple-600 dark:border-purple-500 rounded-lg p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-purple-600 dark:text-purple-400 mb-4 sm:mb-6 flex items-center justify-center lg:justify-start">
                <span className="mr-3">💡</span>
                Habilidades Técnicas
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
                {skills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div 
                      key={skill.name}
                      className="flex flex-col items-center group hover:scale-110 transition-all duration-300"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="bg-gray-200 dark:bg-gray-800 p-2 sm:p-3 rounded-lg border border-gray-300 dark:border-gray-600 group-hover:border-cyan-600 dark:group-hover:border-cyan-400 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-400/20">
                        <IconComponent className={`text-2xl sm:text-3xl ${skill.color} group-hover:drop-shadow-lg`} />
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 border-2 border-cyan-600 dark:border-cyan-400 rounded-xl p-4 sm:p-6 lg:p-8 w-full">
                <div className="text-center mb-4 sm:mb-6">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 relative">
                    <div className="w-full h-full bg-gradient-to-br from-cyan-600 dark:from-cyan-400 to-purple-600 dark:to-purple-500 rounded-full p-1">
                      <div className="w-full h-full rounded-full overflow-hidden">
                        <Image
                          src="https://res.cloudinary.com/dry6dvzoj/image/upload/v1756590188/profile-pic_2_bfzl6x.png"
                          alt="Mauricio Herrera"
                          width={96}
                          height={96}
                          className="w-full h-full object-cover rounded-full"
                          priority
                        />
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full border-2 border-gray-100 dark:border-gray-900 animate-pulse"></div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">Mauricio Herrera</h3>
                  <p className="text-cyan-600 dark:text-cyan-400 font-medium text-sm sm:text-base">Full Stack Developer</p>
                </div>
                
                <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 dark:text-gray-400">Estado:</span>
                    <span className="text-green-400 flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      Disponible
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 dark:text-gray-400">Enfoque:</span>
                    <span className="text-purple-600 dark:text-purple-400">Frontend & Backend</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 dark:text-gray-400">Experiencia:</span>
                    <span className="text-yellow-600 dark:text-yellow-400">3+ años</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 dark:text-gray-400">Ubicación:</span>
                    <span className="text-cyan-600 dark:text-cyan-400">Remote Ready</span>
                  </div>
                </div>
                
                <div className="mt-4 sm:mt-6 pt-4 border-t border-gray-300 dark:border-gray-700">
                  <div className="flex justify-center space-x-4 sm:space-x-6">
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl font-bold text-cyan-600 dark:text-cyan-400">15+</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Proyectos</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl font-bold text-purple-600 dark:text-purple-400">10+</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Tecnologías</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl font-bold text-yellow-600 dark:text-yellow-400">100%</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Dedicación</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Elementos flotantes - Solo visibles en pantallas grandes */}
              <div className="hidden lg:block absolute -top-4 -right-4 text-cyan-400 text-sm animate-bounce">
                💻
              </div>
              <div className="hidden lg:block absolute -bottom-4 -left-4 text-purple-400 text-sm animate-pulse">
                🚀
              </div>
              <div className="hidden lg:block absolute top-1/2 -left-8 text-yellow-400 text-xs animate-ping">
                ⭐
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
