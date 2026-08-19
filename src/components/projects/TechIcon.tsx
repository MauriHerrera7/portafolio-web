
import React from 'react';
import { 
  SiReact, SiJavascript, SiHtml5, SiCss3, SiBootstrap, SiExpress, SiMongodb, SiNodedotjs, 
  SiPostgresql, SiNextdotjs, SiTypescript, SiTailwindcss, SiStripe, SiPython, SiThreedotjs, 
  SiSocketdotio, SiTensorflow, SiPrisma, SiWebgl, SiNestjs, SiDocker, SiSwagger, SiCloudinary, 
  SiJsonwebtokens, SiAuth0, SiRender, SiWhatsapp, SiGooglesheets, SiDjango, SiGithub,
  SiMui 
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { Code2, Zap, Sparkles, Bot, FileText, QrCode } from 'lucide-react';

interface TechIconProps {
  tech: string;
  size?: number;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ tech, size = 20, className = "" }) => {
  const techLower = tech.toLowerCase();
  const iconProps = { size, className: `text-cyan-600 dark:text-cyan-400 ${className}` };

  if (techLower.includes('react')) return <SiReact {...iconProps} />;
  if (techLower.includes('javascript')) return <SiJavascript {...iconProps} />;
  if (techLower.includes('html')) return <SiHtml5 {...iconProps} />;
  if (techLower.includes('css')) return <SiCss3 {...iconProps} />;
  if (techLower.includes('bootstrap')) return <SiBootstrap {...iconProps} />;
  if (techLower.includes('express')) return <SiExpress {...iconProps} />;
  if (techLower.includes('mongodb')) return <SiMongodb {...iconProps} />;
  if (techLower.includes('node')) return <SiNodedotjs {...iconProps} />;
  if (techLower.includes('postgresql')) return <SiPostgresql {...iconProps} />;
  if (techLower.includes('next')) return <SiNextdotjs {...iconProps} />;
  if (techLower.includes('typescript')) return <SiTypescript {...iconProps} />;
  if (techLower.includes('tailwind')) return <SiTailwindcss {...iconProps} />;
  if (techLower.includes('stripe')) return <SiStripe {...iconProps} />;
  if (techLower.includes('python')) return <SiPython {...iconProps} />;
  if (techLower.includes('three')) return <SiThreedotjs {...iconProps} />;
  if (techLower.includes('socket')) return <SiSocketdotio {...iconProps} />;
  if (techLower.includes('tensorflow')) return <SiTensorflow {...iconProps} />;
  if (techLower.includes('prisma')) return <SiPrisma {...iconProps} />;
  if (techLower.includes('webgl')) return <SiWebgl {...iconProps} />;
  if (techLower.includes('nodemon')) return <SiNodedotjs {...iconProps} />;
  if (techLower.includes('nestjs') || techLower.includes('nest')) return <SiNestjs {...iconProps} />;
  if (techLower.includes('docker')) return <SiDocker {...iconProps} />;
  if (techLower.includes('swagger')) return <SiSwagger {...iconProps} />;
  if (techLower.includes('cloudinary')) return <SiCloudinary {...iconProps} />;
  if (techLower.includes('jwt')) return <SiJsonwebtokens {...iconProps} />;
  if (techLower.includes('flowbite')) return <Code2 {...iconProps} className="text-blue-600 dark:text-blue-500" />;
  if (techLower.includes('oauth2') || techLower.includes('oauth')) return <SiAuth0 {...iconProps} />;
  if (techLower.includes('render')) return <SiRender {...iconProps} />;
  if (techLower.includes('d3')) return <Code2 {...iconProps} />;
  if (techLower.includes('langgraph') || techLower.includes('langchain')) return <Bot {...iconProps} className="text-violet-500 dark:text-violet-400" />;
  if (techLower.includes('drf') || techLower.includes('rest framework')) return <SiDjango {...iconProps} className="text-emerald-500 dark:text-emerald-400" />;
  if (techLower.includes('aws') || techLower.includes('s3')) return <FaAws {...iconProps} className="text-amber-500" />;
  if (techLower.includes('material') || techLower.includes('mui')) return <SiMui {...iconProps} className="text-blue-500" />;
  if (techLower.includes('pdf')) return <FileText {...iconProps} className="text-red-500" />;
  if (techLower.includes('qr')) return <QrCode {...iconProps} className="text-cyan-500" />;
  if (techLower.includes('django')) return <SiDjango {...iconProps} className="text-emerald-500 dark:text-emerald-400" />;
  if (techLower.includes('github')) return <SiGithub {...iconProps} />;
  if (techLower === 'ia' || techLower === 'ai' || techLower.includes('inteligencia artificial')) return <Sparkles {...iconProps} className="text-amber-500 dark:text-amber-400" />;
  if (techLower.includes('openai')) return <Zap {...iconProps} className="text-green-500" />;
  if (techLower.includes('whatsapp')) return <SiWhatsapp {...iconProps} className="text-green-500" />;
  if (techLower.includes('google sheets') || techLower.includes('sheets')) return <SiGooglesheets {...iconProps} className="text-emerald-600" />;

  return <Code2 {...iconProps} />;
};
