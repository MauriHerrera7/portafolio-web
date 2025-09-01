'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Github, Linkedin } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Envío a Formspree - Los mensajes llegarán a mauriherrera.dev@gmail.com
      const response = await fetch('https://formspree.io/f/meolzrvo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        throw new Error('Error al enviar formulario')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Header />
      
      <main className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent mb-4 md:mb-6">
              Trabajemos Juntos
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 mx-auto mb-6"></div>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Estoy interesado en oportunidades para colaborar en proyectos innovadores y desafiantes. 
              Si tienes alguna propuesta, pregunta o simplemente quieres saludar, 
              no dudes en contactarme a través del formulario o por mis redes sociales.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 dark:text-cyan-400 mb-6 md:mb-8 text-center lg:text-left">
                Información de Contacto
              </h2>
              
              <div className="space-y-4 md:space-y-6 mb-8">
                <div className="contact-card group bg-gray-50 dark:bg-gray-800/50 border-2 border-gray-300 dark:border-gray-600 rounded-lg p-4 md:p-6 hover:border-cyan-400 dark:hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-400/30 dark:hover:shadow-cyan-300/30 transition-all duration-300">
                  <div className="flex items-center">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 dark:bg-gradient-to-br dark:from-cyan-400/30 dark:to-blue-400/30 rounded-lg flex items-center justify-center mr-3 md:mr-4 flex-shrink-0 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 dark:group-hover:from-cyan-400/40 dark:group-hover:to-blue-400/40 transition-all duration-300">
                      <Mail className="h-5 w-5 md:h-6 md:w-6 text-cyan-600 dark:text-cyan-300 group-hover:text-blue-700 dark:group-hover:text-blue-300 icon-bounce transition-all duration-300" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base md:text-lg font-medium bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent dark:from-cyan-300 dark:to-blue-300">
                        Email
                      </h3>
                      <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 truncate">
                        mauriherrera457@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="contact-card group bg-gray-50 dark:bg-gray-800/50 border-2 border-gray-300 dark:border-gray-600 rounded-lg p-4 md:p-6 hover:border-cyan-400 dark:hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-400/30 dark:hover:shadow-cyan-300/30 transition-all duration-300">
                  <div className="flex items-center">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 dark:bg-gradient-to-br dark:from-cyan-400/30 dark:to-blue-400/30 rounded-lg flex items-center justify-center mr-3 md:mr-4 flex-shrink-0 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 dark:group-hover:from-cyan-400/40 dark:group-hover:to-blue-400/40 transition-all duration-300">
                      <Phone className="h-5 w-5 md:h-6 md:w-6 text-cyan-600 dark:text-cyan-300 group-hover:text-blue-700 dark:group-hover:text-blue-300 icon-bounce transition-all duration-300" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base md:text-lg font-medium bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent dark:from-cyan-300 dark:to-blue-300">
                        Teléfono
                      </h3>
                      <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                        +54 261 555 2184
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="contact-card group bg-gray-50 dark:bg-gray-800/50 border-2 border-gray-300 dark:border-gray-600 rounded-lg p-4 md:p-6 hover:border-cyan-400 dark:hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-400/30 dark:hover:shadow-cyan-300/30 transition-all duration-300">
                  <div className="flex items-center">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 dark:bg-gradient-to-br dark:from-cyan-400/30 dark:to-blue-400/30 rounded-lg flex items-center justify-center mr-3 md:mr-4 flex-shrink-0 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 dark:group-hover:from-cyan-400/40 dark:group-hover:to-blue-400/40 transition-all duration-300">
                      <MapPin className="h-5 w-5 md:h-6 md:w-6 text-cyan-600 dark:text-cyan-300 group-hover:text-blue-700 dark:group-hover:text-blue-300 icon-bounce transition-all duration-300" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base md:text-lg font-medium bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent dark:from-cyan-300 dark:to-blue-300">
                        Ubicación
                      </h3>
                      <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                        Mendoza, Argentina
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="contact-card group bg-gray-50 dark:bg-gray-800/50 border-2 border-gray-300 dark:border-gray-600 rounded-lg p-4 md:p-6 hover:border-cyan-400 dark:hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-400/30 dark:hover:shadow-cyan-300/30 transition-all duration-300">
                  <a href="https://github.com/MauriHerrera7" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 dark:bg-gradient-to-br dark:from-cyan-400/30 dark:to-blue-400/30 rounded-lg flex items-center justify-center mr-3 md:mr-4 flex-shrink-0 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 dark:group-hover:from-cyan-400/40 dark:group-hover:to-blue-400/40 transition-all duration-300">
                      <Github className="h-5 w-5 md:h-6 md:w-6 text-cyan-600 dark:text-cyan-300 group-hover:text-blue-700 dark:group-hover:text-blue-300 icon-bounce transition-all duration-300" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base md:text-lg font-medium bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent dark:from-cyan-300 dark:to-blue-300">
                        GitHub
                      </h3>
                      <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 truncate">
                        github.com/MauriHerrera7
                      </p>
                    </div>
                  </a>
                </div>
                
                <div className="contact-card group bg-gray-50 dark:bg-gray-800/50 border-2 border-gray-300 dark:border-gray-600 rounded-lg p-4 md:p-6 hover:border-cyan-400 dark:hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-400/30 dark:hover:shadow-cyan-300/30 transition-all duration-300">
                  <a href="https://www.linkedin.com/in/mauricio-herrera-7b744b274" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 dark:bg-gradient-to-br dark:from-cyan-400/30 dark:to-blue-400/30 rounded-lg flex items-center justify-center mr-3 md:mr-4 flex-shrink-0 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 dark:group-hover:from-cyan-400/40 dark:group-hover:to-blue-400/40 transition-all duration-300">
                      <Linkedin className="h-5 w-5 md:h-6 md:w-6 text-cyan-600 dark:text-cyan-300 group-hover:text-blue-700 dark:group-hover:text-blue-300 icon-bounce transition-all duration-300" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base md:text-lg font-medium bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent dark:from-cyan-300 dark:to-blue-300">
                        LinkedIn
                      </h3>
                      <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 truncate">
                        linkedin.com/in/mauricio-herrera
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex justify-center lg:justify-start gap-4">
                <a href="https://www.linkedin.com/in/mauricio-herrera-7b744b274" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:border-blue-400 dark:hover:border-cyan-400 hover:shadow-lg transition-all duration-300 group">
                  <svg className="w-5 h-5 text-blue-600 dark:text-cyan-400 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://github.com/MauriHerrera7" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:border-blue-400 dark:hover:border-cyan-400 hover:shadow-lg transition-all duration-300 group">
                  <svg className="w-5 h-5 text-blue-600 dark:text-cyan-400 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="mailto:mauriherrera.dev@gmail.com" className="p-3 bg-gray-100 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:border-blue-400 dark:hover:border-cyan-400 hover:shadow-lg transition-all duration-300 group">
                  <svg className="w-5 h-5 text-blue-600 dark:text-cyan-400 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
                  </svg>
                </a>
                <a href="https://wa.me/542615552184?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n." target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:border-blue-400 dark:hover:border-cyan-400 hover:shadow-lg transition-all duration-300 group">
                  <svg className="w-5 h-5 text-blue-600 dark:text-cyan-400 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Formulario de contacto */}
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 dark:text-cyan-400 mb-6 md:mb-8 text-center lg:text-left">
                Enviar Mensaje
              </h2>
              
              <div className="bg-gray-50 dark:bg-gray-800/50 border-2 border-gray-300 dark:border-cyan-300 rounded-lg p-4 md:p-6 form-neon-glow form-neon-pulse">
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  {submitStatus && (
                    <div className={`p-4 rounded-lg flex items-center gap-3 ${
                      submitStatus === 'success' 
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 border border-green-300 dark:border-green-700 success-message' 
                        : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400 border border-red-300 dark:border-red-700 error-message'
                    }`}>
                      {submitStatus === 'success' ? (
                        <>
                          <CheckCircle className="h-5 w-5" />
                          <span>¡Mensaje enviado exitosamente! Te contactaré pronto.</span>
                        </>
                      ) : (
                        <>
                          <AlertCircle className="h-5 w-5" />
                          <span>Error al enviar el mensaje. Por favor, intenta nuevamente.</span>
                        </>
                      )}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Nombre completo"
                        required
                        className="neon-input w-full px-3 md:px-4 py-2.5 md:py-3 bg-white dark:bg-gray-900/50 border-2 border-gray-300 dark:border-cyan-400/30 focus:border-blue-500 dark:focus:border-cyan-400 text-gray-900 dark:text-white text-sm md:text-base rounded-lg focus:outline-none transition-all duration-300"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Tu email"
                        required
                        className="neon-input w-full px-3 md:px-4 py-2.5 md:py-3 bg-white dark:bg-gray-900/50 border-2 border-gray-300 dark:border-cyan-400/30 focus:border-blue-500 dark:focus:border-cyan-400 text-gray-900 dark:text-white text-sm md:text-base rounded-lg focus:outline-none transition-all duration-300"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Asunto"
                      required
                      className="neon-input w-full px-3 md:px-4 py-2.5 md:py-3 bg-white dark:bg-gray-900/50 border-2 border-gray-300 dark:border-cyan-400/30 focus:border-blue-500 dark:focus:border-cyan-400 text-gray-900 dark:text-white text-sm md:text-base rounded-lg focus:outline-none transition-all duration-300"
                    />
                  </div>
                  
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      placeholder="Tu mensaje"
                      required
                      className="neon-input w-full px-3 md:px-4 py-2.5 md:py-3 bg-white dark:bg-gray-900/50 border-2 border-gray-300 dark:border-cyan-400/30 focus:border-blue-500 dark:focus:border-cyan-400 text-gray-900 dark:text-white text-sm md:text-base rounded-lg focus:outline-none transition-all duration-300 resize-none"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`neon-button w-full inline-flex items-center justify-center px-4 md:px-6 py-3 md:py-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-400 hover:from-cyan-600 hover:via-blue-700 hover:to-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 uppercase tracking-wider text-sm md:text-base ${
                      isSubmitting ? 'pulse-loading' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 md:h-5 md:w-5 border-b-2 border-white mr-2 md:mr-3"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3" />
                        Enviar Mensaje
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
