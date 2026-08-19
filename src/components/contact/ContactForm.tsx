
'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://formspree.io/f/meolzrvo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Error al enviar formulario');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-6 sm:p-10 bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none"
    >
      <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          <div className="space-y-2">
            <label className="text-xs font-mono text-slate-500 dark:text-gray-400 uppercase tracking-widest ml-1 font-semibold">Nombre</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-5 py-3.5 sm:py-4 bg-slate-100/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500 text-sm sm:text-base"
              placeholder="Juan Pérez"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-mono text-slate-500 dark:text-gray-400 uppercase tracking-widest ml-1 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-5 py-3.5 sm:py-4 bg-slate-100/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500 text-sm sm:text-base"
              placeholder="juan@ejemplo.com"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-mono text-slate-500 dark:text-gray-400 uppercase tracking-widest ml-1 font-semibold">Asunto</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
            className="w-full px-5 py-3.5 sm:py-4 bg-slate-100/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500 text-sm sm:text-base"
            placeholder="Oportunidad de proyecto"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-mono text-slate-500 dark:text-gray-400 uppercase tracking-widest ml-1 font-semibold">Mensaje</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={5}
            required
            className="w-full px-5 py-3.5 sm:py-4 bg-slate-100/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500 resize-none text-sm sm:text-base"
            placeholder="Hola Mauricio, me gustaría hablar sobre..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 sm:py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-2xl shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-3 disabled:opacity-50 text-sm sm:text-base cursor-pointer"
        >
          {isSubmitting ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              <Send className="w-5 h-5" />
              ENVIAR MENSAJE
            </>
          )}
        </button>

        <AnimatePresence>
          {submitStatus && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`p-4 rounded-xl flex items-center gap-3 ${
                submitStatus === 'success' ? 'bg-emerald-500/10 text-emerald-600 dark:text-green-400 border border-emerald-500/20' : 'bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20'
              }`}
            >
              {submitStatus === 'success' ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
              <span className="text-sm font-medium">
                {submitStatus === 'success' ? '¡Mensaje enviado con éxito!' : 'Ocurrió un error. Inténtalo de nuevo.'}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  );
};
