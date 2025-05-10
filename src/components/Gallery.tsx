import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const galleryItems = [
    {
      id: 1,
      image: 'https://dcdn-us.mitiendanube.com/stores/004/209/518/products/img_0439-8fbce0053039c0e9d917298847854731-1024-1024.webp',
      category: 'tazas',
      title: 'Taza personalizada'
    },
    {
      id: 2,
      image: 'https://i.postimg.cc/1zG2Cq3j/2.jpg',
      category: 'ropa',
      title: 'Ropa de trabajo'
    },
    {
      id: 3,
      image: 'https://acdn-us.mitiendanube.com/stores/001/139/390/products/whatsapp-image-2024-04-22-at-09-31-44-c847f43dc7ba030bd117137892049954-480-0.webp',
      category: 'gorras',
      title: 'Gorras sublimadas'
    },
    {
      id: 4,
      image: 'https://www.multigraphics.com.pa/wp-content/uploads/2017/08/sublimacion-de-productos-panama.jpg',
      category: 'otros',
      title: 'Diseño personalizado'
    },
    {
      id: 5,
      image: 'https://i.ibb.co/NgWVv17R/3.jpg',
      category: 'ropa',
      title: 'Buzo con estampado'
    },
    {
      id: 6,
      image: 'https://i.ibb.co/Kc3qwXYD/cuadro.jpg',
      category: 'Cuadros',
      title: 'Cuadros personalizados'
    },
    {
      id: 7,
      image: 'https://www.brildor.com/blog/wp-content/uploads/2023/03/cabecera-negocio-bordado-1024x581.jpg',
      category: 'Bordados',
      title: 'Bordados para empresas'
    },
    {
      id: 8,
      image: 'https://www.garajedoce.com/wp-content/uploads/2022/11/10-tendencias-logos-cabecera.jpg',
      category: 'Logos',
      title: 'Diseños de logos'
    }
  ];

  const [filter, setFilter] = useState('todos');
  
  const filteredItems = filter === 'todos' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nuestra <span className="text-pink-500">Galería</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Algunos de nuestros trabajos realizados para clientes satisfechos
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap justify-center gap-2">
            <button 
              onClick={() => setFilter('todos')} 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'todos' 
                  ? 'bg-pink-500 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Todos
            </button>
            <button 
              onClick={() => setFilter('ropa')} 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'ropa' 
                  ? 'bg-pink-500 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Ropa
            </button>
            <button 
              onClick={() => setFilter('gorras')} 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'gorras' 
                  ? 'bg-pink-500 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Gorras
            </button>
            <button 
              onClick={() => setFilter('tazas')} 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'tazas' 
                  ? 'bg-pink-500 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Tazas
            </button>
            <button 
              onClick={() => setFilter('otros')} 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'otros' 
                  ? 'bg-pink-500 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Otros
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer"
              onClick={() => setSelectedImage(item.image)}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <h3 className="text-white font-medium">{item.title}</h3>
                  <p className="text-white/70 text-sm">{item.category.charAt(0).toUpperCase() + item.category.slice(1)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white bg-pink-500 hover:bg-pink-600 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={20} />
          </button>
          <img 
            src={selectedImage} 
            alt="Imagen ampliada" 
            className="max-w-full max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;