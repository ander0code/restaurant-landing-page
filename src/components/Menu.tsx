import { useState } from 'react';
import { Flame, Fish, Salad, Wine, Coffee, Cake } from 'lucide-react';


interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isPopular?: boolean;
  isNew?: boolean;
}

const categories = [
  { id: 'all', name: 'Todo', icon: Flame },
  { id: 'entradas', name: 'Entradas', icon: Salad },
  { id: 'ceviches', name: 'Ceviches', icon: Fish },
  { id: 'platos', name: 'Platos Fuertes', icon: Flame },
  { id: 'bebidas', name: 'Bebidas', icon: Wine },
  { id: 'postres', name: 'Postres', icon: Cake },
];

const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Ceviche Clásico',
    description: 'Pescado fresco marinado en limón, cebolla morada, ají limo y cilantro',
    price: 45,
    category: 'ceviches',
    image: 'https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?q=80&w=2070&auto=format&fit=crop',
    isPopular: true
  },
  {
    id: '2',
    name: 'Tiradito Nikkei',
    description: 'Finas láminas de pescado con salsa de maracuyá y ají amarillo',
    price: 48,
    category: 'ceviches',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2070&auto=format&fit=crop',
    isNew: true
  },
  {
    id: '3',
    name: 'Lomo Saltado',
    description: 'Tiras de lomo fino salteadas con cebolla, tomate, ají amarillo y papas fritas',
    price: 55,
    category: 'platos',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop',
    isPopular: true
  },
  {
    id: '4',
    name: 'Causa Limeña',
    description: 'Capas de papa amarilla con pollo, palta y mayonesa de ají amarillo',
    price: 32,
    category: 'entradas',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2081&auto=format&fit=crop'
  },
  {
    id: '5',
    name: 'Anticuchos',
    description: 'Brochetas de corazón de res a la parrilla con papas doradas y ají',
    price: 38,
    category: 'entradas',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2087&auto=format&fit=crop',
    isPopular: true
  },
  {
    id: '6',
    name: 'Arroz con Mariscos',
    description: 'Arroz cremoso con langostinos, calamares, conchas y pulpo',
    price: 62,
    category: 'platos',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=2072&auto=format&fit=crop'
  },
  {
    id: '7',
    name: 'Pisco Sour',
    description: 'Cóctel clásico peruano con pisco, limón, jarabe y clara de huevo',
    price: 28,
    category: 'bebidas',
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?q=80&w=2065&auto=format&fit=crop',
    isPopular: true
  },
  {
    id: '8',
    name: 'Suspiro a la Limeña',
    description: 'Dulce tradicional de manjar blanco con merengue de oporto',
    price: 22,
    category: 'postres',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=2064&auto=format&fit=crop'
  }
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="section-padding bg-secondary-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="section-decorator">
            <span className="text-primary-600 font-medium uppercase tracking-wider text-sm">
              Descubre
            </span>
          </div>
          <h2 className="section-title mb-4">
            Nuestro <span className="text-gradient">Menú</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Una selección de nuestros platos más representativos, 
            preparados con ingredientes frescos y técnicas tradicionales.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30'
                    : 'bg-white text-secondary-600 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="card group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  {item.isPopular && (
                    <span className="px-3 py-1 bg-primary-500 text-white text-xs font-semibold rounded-full">
                      Popular
                    </span>
                  )}
                  {item.isNew && (
                    <span className="px-3 py-1 bg-accent-500 text-white text-xs font-semibold rounded-full">
                      Nuevo
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display text-lg font-bold text-secondary-900 group-hover:text-primary-600 transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-primary-600 font-bold whitespace-nowrap">
                    S/. {item.price}
                  </span>
                </div>
                <p className="text-sm text-secondary-500 leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="text-center mt-12">
          <button className="btn-secondary">
            <Coffee className="w-5 h-5" />
            Ver Menú Completo
          </button>
        </div>
      </div>
    </section>
  );
}
