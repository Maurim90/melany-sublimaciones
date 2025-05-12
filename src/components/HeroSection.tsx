import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center bg-gradient-to-r from-cyan-400 via-teal-300 to-yellow-300 overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-pink-500/20 animate-float"></div>
        <div className="absolute top-40 right-20 w-20 h-20 rounded-full bg-yellow-400/30 animate-float-delay"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 rounded-full bg-cyan-400/20 animate-float-slow"></div>
        <div className="absolute top-1/3 right-1/3 w-8 h-8 text-pink-400 animate-spin-slow">✨</div>
        <div className="absolute bottom-1/4 right-1/4 w-10 h-10 text-yellow-400 animate-pulse">⭐</div>
      </div>

      <div className="container mx-auto px-4 z-10 py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="block text-white drop-shadow-md">Personalizamos</span>
              <span className="block text-pink-500 drop-shadow-md">tu marca</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-xl">
              Diseños únicos para tu empresa, eventos o regalo especial. 
              Sublimados, estampados y bordados de alta calidad.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <a 
                href="#productos" 
                className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-center"
              >
                Ver Productos
              </a>
              <a 
                href="#contacto" 
                className="bg-white hover:bg-gray-100 text-pink-500 font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-center"
              >
                Contactanos
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 relative">
            <div className="relative bg-white p-4 rounded-lg shadow-xl transform rotate-3 max-w-md mx-auto">
              <div className="aspect-square overflow-hidden rounded">
                <img 
                  src="https://i.ibb.co/DPrj04NC/logo-negro.jpg"
                  alt="Remera personalizada con diseño colorido" 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-md">
                ¡Personalízalo!
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-3 rounded-lg shadow-xl transform -rotate-6 hidden md:block">
              <img 
                src="https://i.ibb.co/1GXGk0Dh/boca.jpg" 
                alt="Taza personalizada" 
                className="w-24 h-24 object-cover rounded"
              />
            </div>
            <div className="absolute -top-10 right-0 bg-white p-2 rounded-lg shadow-xl transform rotate-6 hidden md:block">
              <img 
                src="https://i.ibb.co/LzW1nMkH/taza-4.jpg" 
                alt="Gorra personalizada" 
                className="w-20 h-20 object-cover rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
