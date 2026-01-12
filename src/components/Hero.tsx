import { ArrowRight, Sparkles, Utensils } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="inicio"
      className="relative min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop')`
        }}
      >
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-950/95 via-secondary-900/80 to-secondary-900/60" />
        {/* Warm tint overlay */}
        <div className="absolute inset-0 bg-primary-900/20" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-accent-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="container-custom relative z-10 pt-20 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-accent-400" />
            <span>Experiencia gastronómica única</span>
          </div>

          {/* Title */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 animate-slide-up">
            Donde cada plato cuenta una{' '}
            <span className="text-primary-400">historia</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed animate-slide-up max-w-2xl" style={{ animationDelay: '0.2s' }}>
            Fusionamos la riqueza de la cocina peruana con técnicas contemporáneas 
            para crear momentos inolvidables en tu paladar.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
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
          <div className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-white/10 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            {[
              { value: '8+', label: 'Años de sabor' },
              { value: '50+', label: 'Platos únicos' },
              { value: '15K+', label: 'Clientes felices' },
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

        {/* Floating Food Card - Hidden on mobile */}
        <div className="hidden xl:block absolute right-0 top-1/2 -translate-y-1/2 animate-float">
          <div className="w-72 h-80 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-6 rotate-6 shadow-2xl">
            <div className="w-full h-40 bg-gradient-to-br from-primary-500/30 to-accent-500/30 rounded-2xl mb-4 flex items-center justify-center">
              <span className="text-6xl">🍽️</span>
            </div>
            <h3 className="font-display text-white text-xl mb-2">Menú del Día</h3>
            <p className="text-white/70 text-sm mb-3">
              Descubre nuestras creaciones especiales preparadas cada día.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-accent-400 font-bold">Desde S/. 35</span>
              <span className="text-xs text-white/50">Almuerzo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/60 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
