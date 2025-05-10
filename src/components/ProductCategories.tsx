import React from 'react';
import { ShoppingBag, ShoppingCart } from 'lucide-react';

const ProductCategories: React.FC = () => {
  const categories = [
    {
      id: 'ropa',
      title: 'Ropa Personalizada',
      description: 'Remeras, buzos, camperas y más con tu diseño.',
      image: 'https://i.ibb.co/CKDBS3h2/4.jpg',
      items: ['Remeras', 'Buzos', 'Camperas', 'Pantalones de trabajo', 'Chombas', 'Egresados', 'Egresaditos']
    },
    {
      id: 'gorras',
      title: 'Gorras Personalizadas',
      description: 'Gorras con diseños únicos y bordados personalizados.',
      image: 'https://acdn-us.mitiendanube.com/stores/001/139/390/products/whatsapp-image-2024-04-22-at-09-31-44-c847f43dc7ba030bd117137892049954-480-0.webp',
      items: ['Gorras bordadas', 'Gorras sublimadas', 'Viseras', 'Gorras deportivas', 'Gorras para eventos']
    },
    {
      id: 'tazas',
      title: 'Tazas Personalizadas',
      description: 'Tazas de cerámica y plástico con tu mensaje o diseño favorito.',
      image: 'https://i.ibb.co/G4KtM5yT/Whats-App-Image-2025-05-10-at-11-08-55-AM.jpg',
      items: ['Tazas de plástico', 'Tazas de cerámica', 'Tazas mágicas', 'Tazas con foto', 'Tazas con mensaje']
    },
    {
      id: 'otros',
      title: 'Otros Productos',
      description: 'Cuadros, diseños de logos y más productos personalizados.',
      image: 'https://i.ibb.co/JjgzwhWw/maquina.jpg',
      items: ['Cuadros', 'Diseños de logos', 'Artículos promocionales', 'Regalos personalizados']
    }
  ];

  return (
    <section id="productos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nuestros <span className="text-pink-500">Productos</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Descubre nuestra amplia variedad de productos personalizables para cualquier ocasión
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-square">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                  <p className="text-white/80 mb-4 text-sm">{category.description}</p>
                  
                  <div className="overflow-hidden h-0 group-hover:h-auto transition-all duration-300">
                    <ul className="mb-4 text-white/90 text-sm">
                      {category.items.map((item, index) => (
                        <li key={index} className="mb-1 flex items-center">
                          <span className="mr-2 text-yellow-400">✓</span> {item}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex space-x-2">
                      <a 
                        href={`#${category.id}`} 
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white py-2 px-4 rounded-full text-sm font-medium flex items-center transition-colors"
                      >
                        <ShoppingBag size={16} className="mr-1" /> Ver Más
                      </a>
                      <a 
                        href="#contacto" 
                        className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-full text-sm font-medium flex items-center transition-colors"
                      >
                        <ShoppingCart size={16} className="mr-1" /> Consultar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;