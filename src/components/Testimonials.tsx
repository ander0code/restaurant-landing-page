import { Star, Quote } from 'lucide-react';


const testimonials = [
  {
    id: 1,
    name: 'María García',
    role: 'Blogger gastronómica',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2187&auto=format&fit=crop',
    content: 'Una experiencia culinaria excepcional. El ceviche mixto es simplemente el mejor que he probado en Lima. El ambiente es acogedor y el servicio impecable.',
    rating: 5
  },
  {
    id: 2,
    name: 'Carlos Rodríguez',
    role: 'Empresario',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
    content: 'Mi lugar favorito para reuniones de negocios. La calidad de los platos es consistente y el ambiente perfecto para conversar. El lomo saltado es espectacular.',
    rating: 5
  },
  {
    id: 3,
    name: 'Ana Martínez',
    role: 'Chef aficionada',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop',
    content: 'Como amante de la cocina peruana, puedo decir que Bistro Sabores captura la esencia de nuestros sabores tradicionales con un toque moderno y elegante.',
    rating: 5
  },
  {
    id: 4,
    name: 'Diego López',
    role: 'Food Influencer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2187&auto=format&fit=crop',
    content: 'Cada visita es una nueva aventura gastronómica. Los sabores son auténticos y las presentaciones son obras de arte. Sin duda, uno de los mejores restaurantes.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="section-decorator">
            <span className="text-primary-600 font-medium uppercase tracking-wider text-sm">
              Testimonios
            </span>
          </div>
          <h2 className="section-title mb-4">
            Lo que dicen nuestros <span className="text-gradient">clientes</span>
          </h2>
          <p className="section-subtitle mx-auto">
            La satisfacción de nuestros comensales es nuestro mayor premio
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-primary-600" />
                </div>
              </div>

              {/* Content */}
              <p className="text-secondary-700 text-lg leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent-500 fill-accent-500" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-secondary-100">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary-100"
                />
                <div>
                  <h4 className="font-bold text-secondary-900">{testimonial.name}</h4>
                  <p className="text-sm text-secondary-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '4.9', label: 'Rating en Google' },
            { value: '2.5K+', label: 'Reseñas positivas' },
            { value: '98%', label: 'Clientes satisfechos' },
            { value: '#1', label: 'En TripAdvisor Lima' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 font-display mb-1">
                {stat.value}
              </div>
              <div className="text-secondary-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
