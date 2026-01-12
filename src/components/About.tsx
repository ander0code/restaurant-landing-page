import { Award, Users, Heart, Leaf } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Pasión',
      description: 'Cada plato es preparado con amor y dedicación'
    },
    {
      icon: Leaf,
      title: 'Frescura',
      description: 'Ingredientes frescos seleccionados diariamente'
    },
    {
      icon: Award,
      title: 'Calidad',
      description: 'Estándares de excelencia en cada detalle'
    },
    {
      icon: Users,
      title: 'Familia',
      description: 'Un ambiente cálido donde todos son bienvenidos'
    },
  ];

  return (
    <section id="nosotros" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=2077&auto=format&fit=crop"
                alt="Chef preparando plato"
                className="w-full h-[500px] object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/40 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 lg:-right-12 bg-white rounded-2xl shadow-xl p-6 max-w-xs animate-float">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center">
                  <Award className="w-7 h-7 text-primary-600" />
                </div>
                <div>
                  <div className="font-display text-2xl font-bold text-secondary-900">8+</div>
                  <div className="text-sm text-secondary-600">Años de experiencia</div>
                </div>
              </div>
              <p className="text-sm text-secondary-500">
                Reconocidos por la calidad de nuestra cocina peruana fusión
              </p>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-100 rounded-full -z-10" />
          </div>

          {/* Content Column */}
          <div>
            {/* Section Label */}
            <div className="section-decorator">
              <span className="text-primary-600 font-medium uppercase tracking-wider text-sm">
                Nuestra Historia
              </span>
            </div>

            <h2 className="section-title mb-6">
              Una tradición de{' '}
              <span className="text-gradient">sabor peruano</span>
            </h2>

            <p className="text-secondary-600 text-lg leading-relaxed mb-6">
              Desde 2016, Bistro Sabores ha sido el hogar de los amantes de la buena 
              cocina en Lima. Nuestro chef ejecutivo, con más de 20 años de experiencia, 
              fusiona las recetas tradicionales peruanas con técnicas culinarias modernas.
            </p>

            <p className="text-secondary-600 leading-relaxed mb-10">
              Cada ingrediente es cuidadosamente seleccionado de productores locales, 
              garantizando frescura y apoyando a nuestra comunidad. Creemos que la mejor 
              comida nace de la pasión por compartir momentos especiales.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 group"
                >
                  <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-200 transition-colors">
                    <value.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary-900 mb-1">{value.title}</h4>
                    <p className="text-sm text-secondary-500">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
