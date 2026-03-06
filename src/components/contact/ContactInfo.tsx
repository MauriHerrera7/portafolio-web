
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
    color: 'text-cyan-400'
  },
  {
    icon: Phone,
    label: 'Teléfono',
    value: '+54 261 555 2184',
    href: 'https://wa.me/542615552184',
    color: 'text-green-400'
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: 'Mendoza, Argentina',
    color: 'text-red-400'
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
        <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>
        <p className="text-gray-400 mb-8 max-w-sm">
          ¿Tienes un proyecto en mente? ¡Hablemos! Estoy disponible para nuevas oportunidades y colaboraciones.
        </p>
      </div>

      <div className="space-y-4">
        {contactDetails.map((detail, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl hover:border-cyan-500/30 transition-colors group"
          >
            <div className={`p-3 rounded-xl bg-gray-900 border border-white/5 ${detail.color}`}>
              <detail.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">{detail.label}</p>
              {detail.href ? (
                <a href={detail.href} className="text-white hover:text-cyan-400 transition-colors">{detail.value}</a>
              ) : (
                <p className="text-white">{detail.value}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="pt-8 border-t border-white/10">
        <p className="text-xs font-mono text-cyan-500 uppercase tracking-widest mb-6 px-4">Sígueme en redes</p>
        <div className="flex gap-4 px-4">
          {socialLinks.map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              whileHover={{ y: -3 }}
              className="p-3 bg-white/5 border border-white/10 rounded-full hover:border-cyan-500/50 hover:bg-cyan-500/10 text-white transition-all"
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};
