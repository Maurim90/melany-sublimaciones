import React from 'react';
import { Send, Phone, Instagram, Map } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contacto" className="py-20 bg-gradient-to-r from-cyan-400 via-teal-300 to-yellow-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-sm">
            Contáctanos
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-white/90 max-w-2xl mx-auto text-lg">
            ¿Tienes algo en mente? Estamos listos para ayudarte a crear exactamente lo que necesitas.
          </p>
        </div>

        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-10 lg:mb-0">
            <div className="p-8 bg-white rounded-xl shadow-xl h-full">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Envíanos un mensaje</h3>
              
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                >
                  <Send size={18} className="mr-2" /> Enviar Mensaje
                </button>
              </form
              action="https://formspree.io/f/mvgawqkq"
              method="POST">
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 px-4">
            <div className="p-8 bg-white rounded-xl shadow-xl h-full">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Información de Contacto</h3>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mr-4">
                    <Phone className="text-pink-500" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Teléfono</h4>
                    <p className="text-gray-600">1164701886</p>
                    <p className="text-gray-600">1130261600</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mr-4">
                    <Instagram className="text-pink-500" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Instagram</h4>
                    <a 
                      href="https://www.instagram.com/melany.sublimaciones/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-pink-500 hover:text-pink-600 transition-colors"
                    >
                      @melany.sublimaciones
                    </a>
                    <p className="text-gray-600 text-sm mt-1">Síguenos para ver nuestros últimos trabajos</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mr-4">
                    <Map className="text-pink-500" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Ubicación</h4>
                    <p className="text-gray-600">Moreno, Buenos Aires, Argentina</p>
                    <p className="text-gray-600 text-sm mt-1">Consulta por envios</p>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Horario de Atención</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-gray-600">Lunes - Viernes:</div>
                    <div className="text-gray-800 font-medium">9:00 - 18:00</div>
                    <div className="text-gray-600">Sábado:</div>
                    <div className="text-gray-800 font-medium">10:00 - 14:00</div>
                    <div className="text-gray-600">Domingo:</div>
                    <div className="text-gray-800 font-medium">Cerrado</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
