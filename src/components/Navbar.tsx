import React, { useState, useEffect } from 'react';
import { Instagram } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className={`text-2xl font-script ${isScrolled ? 'text-pink-500' : 'text-white'}`}>
            Melany
          </span>
          <span className={`text-sm font-medium ml-2 ${isScrolled ? 'text-gray-600' : 'text-white/90'}`}>
            Sublimaciones
          </span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#inicio" className={`nav-link ${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-pink-500 transition-colors`}>Inicio</a>
          <a href="#nosotros" className={`nav-link ${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-pink-500 transition-colors`}>Nosotros</a>
          <a href="#productos" className={`nav-link ${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-pink-500 transition-colors`}>Productos</a>
          <a href="#galeria" className={`nav-link ${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-pink-500 transition-colors`}>Galería</a>
          <a href="#contacto" className={`nav-link ${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-pink-500 transition-colors`}>Contacto</a>
          <a 
            href="https://www.instagram.com/melany.sublimaciones/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`${isScrolled ? 'text-pink-500' : 'text-white'} hover:text-pink-400 transition-colors`}
          >
            <Instagram size={20} />
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-pink-500"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg py-4 px-4 absolute w-full">
          <div className="flex flex-col space-y-4">
            <a href="#inicio" className="text-gray-700 hover:text-pink-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Inicio</a>
            <a href="#nosotros" className="text-gray-700 hover:text-pink-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Nosotros</a>
            <a href="#productos" className="text-gray-700 hover:text-pink-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Productos</a>
            <a href="#galeria" className="text-gray-700 hover:text-pink-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Galería</a>
            <a href="#contacto" className="text-gray-700 hover:text-pink-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Contacto</a>
            <a 
              href="https://www.instagram.com/melany.sublimaciones/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-400 transition-colors flex items-center"
            >
              <Instagram size={20} className="mr-2" /> Instagram
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;