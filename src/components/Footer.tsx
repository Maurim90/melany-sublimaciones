import React from 'react';
import { Instagram, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <span className="text-3xl font-script text-pink-400">Melany</span>
              <span className="text-sm font-medium ml-2 text-gray-400">Sublimaciones</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Diseños personalizados para tu empresa o evento especial. 
              Sublimados, estampados y bordados de alta calidad.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/melany.sublimaciones/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-pink-400 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="tel:1164701886" 
                className="text-gray-400 hover:text-pink-400 transition-colors"
              >
                <Phone size={24} />
              </a>
              <a 
                href="mailto:info@melanysublimaciones.com.ar" 
                className="text-gray-400 hover:text-pink-400 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-6">Productos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#ropa" className="text-gray-400 hover:text-pink-400 transition-colors">Ropa Personalizada</a>
              </li>
              <li>
                <a href="#gorras" className="text-gray-400 hover:text-pink-400 transition-colors">Gorras Personalizadas</a>
              </li>
              <li>
                <a href="#tazas" className="text-gray-400 hover:text-pink-400 transition-colors">Tazas Personalizadas</a>
              </li>
              <li>
                <a href="#otros" className="text-gray-400 hover:text-pink-400 transition-colors">Otros Productos</a>
              </li>
            </ul>
          </div>
          
          <div className="w-full md:w-1/3 px-4">
            <h4 className="text-lg font-semibold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-pink-400 transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#nosotros" className="text-gray-400 hover:text-pink-400 transition-colors">Nosotros</a>
              </li>
              <li>
                <a href="#productos" className="text-gray-400 hover:text-pink-400 transition-colors">Productos</a>
              </li>
              <li>
                <a href="#galeria" className="text-gray-400 hover:text-pink-400 transition-colors">Galería</a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-400 hover:text-pink-400 transition-colors">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Melany Sublimaciones. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;