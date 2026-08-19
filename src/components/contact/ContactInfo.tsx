
'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'mauriherrera457@gmail.com',
    href: 'mailto:mauriherrera457@gmail.com',
    color: 'text-cyan-500 dark:text-cyan-400'
  },
  {
    icon: Phone,
    label: 'Teléfono',
    value: '+54 261 555 2184',
    href: 'https://wa.me/542615552184',
    color: 'text-emerald-500 dark:text-green-400'
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: 'Mendoza, Argentina',
    color: 'text-red-500 dark:text-red-400'
  }
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/MauriHerrera7', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/mauricio-herrera-7b744b274', label: 'LinkedIn' }
];

export const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Información de Contacto</h3>
        <p className="text-slate-600 dark:text-gray-400 max-w-sm leading-relaxed">
          ¿Tienes un proyecto en mente? ¡Hablemos! Estoy disponible para nuevas oportunidades y colaboraciones.
        </p>
      </div>

      <div className="space-y-4">
        {contactDetails.map((detail, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-4 p-4 bg-white/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 rounded-2xl hover:border-cyan-500/40 transition-colors group shadow-sm dark:shadow-none"
          >
            <div className={`p-3 rounded-xl bg-slate-100 dark:bg-gray-900 border border-slate-200 dark:border-white/5 ${detail.color}`}>
              <detail.icon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-mono text-slate-500 dark:text-gray-500 uppercase tracking-widest">{detail.label}</p>
              {detail.href ? (
                <a href={detail.href} className="text-slate-900 dark:text-white font-medium hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">{detail.value}</a>
              ) : (
                <p className="text-slate-900 dark:text-white font-medium">{detail.value}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="pt-6 sm:pt-8 border-t border-slate-200 dark:border-white/10">
        <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-4 px-1">Sígueme en redes</p>
        <div className="flex gap-3 px-1">
          {socialLinks.map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="p-3 bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl hover:border-cyan-500/50 hover:bg-cyan-500/10 text-slate-700 dark:text-white transition-all shadow-sm dark:shadow-none"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};
