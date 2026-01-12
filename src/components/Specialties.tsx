import { Star, ChefHat, Award } from 'lucide-react';


const specialties = [
  {
    id: 1,
    name: 'Ceviche Mixto Premium',
    description: 'Nuestra versión del clásico peruano con pescado del día, camarones, pulpo y conchas negras. Marinado en leche de tigre con toques de jengibre y rocoto.',
    price: 68,
    image: 'https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?q=80&w=2070&auto=format&fit=crop',
    chef: 'Chef Carlos',
    rating: 4.9,
    reviews: 234
  },
  {
    id: 2,
    name: 'Risotto de Mariscos',
    description: 'Arroz arborio cremoso con langostinos tigre, calamares baby y almejas. Terminado con mantequilla de ají amarillo y parmesano reggiano.',
    price: 75,
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=2070&auto=format&fit=crop',
    chef: 'Chef María',
    rating: 4.8,
    reviews: 189
  },
  {
    id: 3,
    name: 'Lomo Negro Angus',
    description: 'Corte premium de res Angus 250g sellado a la perfección. Acompañado de puré de ají panca, espárragos grillados y reducción de vino tinto.',
    price: 95,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=2070&auto=format&fit=crop',
    chef: 'Chef Carlos',
    rating: 4.9,
    reviews: 312
  }
];

export default function Specialties() {
  return (
    <section id="especialidades" className="section-padding bg-secondary-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      {/* Decorative Lights */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/20 rounded-full text-primary-400 text-sm mb-4">
            <Award className="w-4 h-4" />
            <span>Selección del Chef</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Especialidades de la Casa
          </h2>
          <p className="text-xl text-secondary-400 max-w-2xl mx-auto">
            Creaciones exclusivas que representan lo mejor de nuestra cocina,
            preparadas con técnicas de alta gastronomía.
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {specialties.map((item, index) => (
            <div
              key={item.id}
              className={`group relative bg-secondary-800/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-secondary-700/50 hover:border-primary-500/50 transition-all duration-500 ${index === 1 ? 'lg:scale-105 lg:z-10' : ''
                }`}
            >
              {/* Featured Badge for center item */}
              {index === 1 && (
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-xs font-semibold rounded-full shadow-lg">
                    Favorito
                  </span>
                </div>
              )}

              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-transparent to-transparent" />

                {/* Price Tag */}
                <div className="absolute bottom-4 left-4">
                  <span className="px-4 py-2 bg-white/95 backdrop-blur-sm text-secondary-900 font-bold rounded-xl shadow-lg">
                    S/. {item.price}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(item.rating) ? 'text-accent-400 fill-accent-400' : 'text-secondary-600'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-secondary-400">
                    {item.rating} ({item.reviews} reseñas)
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                  {item.name}
                </h3>

                {/* Description */}
                <p className="text-secondary-400 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Chef */}
                <div className="flex items-center gap-3 pt-4 border-t border-secondary-700/50">
                  <div className="w-10 h-10 bg-primary-500/20 rounded-full flex items-center justify-center">
                    <ChefHat className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-sm text-secondary-500">Creado por</p>
                    <p className="text-white font-medium">{item.chef}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section >
  );
}
