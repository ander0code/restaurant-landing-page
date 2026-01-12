import { ArrowRight, Utensils } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop')`
        }}
      >
        <div className="absolute inset-0 bg-secondary-950/70" />
      </div>

      {/* Content - Centered */}
      <div className="container-custom relative z-10 text-center py-20">
        <div className="max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm mb-8">
            <Utensils className="w-4 h-4 text-primary-400" />
            <span>Cocina Peruana Contemporánea</span>
          </div>

          {/* Title */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
            Bistro{' '}
            <span className="text-primary-400">Sabores</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed max-w-2xl mx-auto">
            Fusionamos la tradición peruana con técnicas contemporáneas para crear una experiencia gastronómica única.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => scrollToSection('#reservas')}
              className="btn-primary group"
            >
              <span>Reservar Mesa</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('#menu')}
              className="btn-outline group"
            >
              <Utensils className="w-5 h-5" />
              <span>Ver Menú</span>
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-12 pt-8 border-t border-white/10">
            {[
              { value: '8+', label: 'Años' },
              { value: '50+', label: 'Platos' },
              { value: '15K+', label: 'Clientes' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-400 font-display">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
