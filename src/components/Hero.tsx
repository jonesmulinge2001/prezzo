import { ArrowRight, Award, Users, Building2 } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Construction site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/85 to-purple-900/95"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Award className="text-yellow-400" size={20} />
            <span className="text-white text-sm font-medium">Award-Winning Excellence Since 1995</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Building Dreams Into
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Timeless Reality
            </span>
          </h1>

          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            World-renowned expert in construction, roofing, landscaping, and architectural moulding.
            Transforming visions into exceptional craftsmanship with over 28 years of excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToContact}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Start Your Project</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border-2 border-white/30"
            >
              View Portfolio
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Building2 className="text-blue-400" size={32} />
              </div>
              <div className="text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-gray-300 text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="text-purple-400" size={32} />
              </div>
              <div className="text-3xl font-bold text-white mb-1">98%</div>
              <div className="text-gray-300 text-sm">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Award className="text-yellow-400" size={32} />
              </div>
              <div className="text-3xl font-bold text-white mb-1">25+</div>
              <div className="text-gray-300 text-sm">Industry Awards</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
