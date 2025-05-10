import React from 'react';
import { CheckCircle as CircleCheck, Sparkles, Award, Clock } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Acerca de <span className="text-pink-500">Nosotros</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            En Melany Sublimaciones nos especializamos en crear productos personalizados 
            con diseños únicos que reflejan la identidad de tu empresa o evento.
          </p>
        </div>

        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <div className="h-full p-6 bg-white border border-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-cyan-100 text-cyan-500 mx-auto">
                <Sparkles size={28} />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Diseños Únicos</h3>
              <p className="text-gray-600 text-center">
                Creamos diseños personalizados que se adaptan perfectamente a tus necesidades.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <div className="h-full p-6 bg-white border border-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-pink-100 text-pink-500 mx-auto">
                <Award size={28} />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Alta Calidad</h3>
              <p className="text-gray-600 text-center">
                Utilizamos materiales y técnicas de primera calidad para resultados duraderos.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <div className="h-full p-6 bg-white border border-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-yellow-100 text-yellow-500 mx-auto">
                <Clock size={28} />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Entrega Rápida</h3>
              <p className="text-gray-600 text-center">
                Nos comprometemos con plazos de entrega rápidos y cumplimiento puntual.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <div className="h-full p-6 bg-white border border-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-green-100 text-green-500 mx-auto">
                <CircleCheck size={28} />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Personalización Total</h3>
              <p className="text-gray-600 text-center">
                Cada producto se personaliza según tus especificaciones exactas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;