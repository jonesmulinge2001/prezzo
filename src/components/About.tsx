import { CheckCircle2, Target, Heart, Shield } from 'lucide-react';
import pk1 from '../assests/pk1.jpeg';
import pk2 from '../assests/pk2.jpeg';
import pk3 from '../assests/pk3.jpeg';


export default function About() {
  const values = [
    { icon: Target, title: 'Precision', description: 'Meticulous attention to detail in every project' },
    { icon: Heart, title: 'Passion', description: 'Dedicated craftsmanship in everything we create' },
    { icon: Shield, title: 'Integrity', description: 'Honest, transparent, and reliable service' }
  ];

  const serviceImages = [pk1, pk2, pk3];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                About Our Expertise
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Crafting Excellence for Nearly Three Decades
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              As a world-renowned expert in construction, roofing, landscaping, and architectural moulding,
              I've dedicated my career to transforming spaces into masterpieces that stand the test of time.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Every project is an opportunity to blend innovative design with traditional craftsmanship,
              ensuring that each client receives not just a service, but a work of art that exceeds expectations.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Certified Master Craftsman',
                'Licensed & Fully Insured',
                'Award-Winning Designs',
                'Sustainable Building Practices'
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="text-blue-600 flex-shrink-0" size={24} />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="text-center p-4 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-lg transition-shadow">
                    <div className="flex justify-center mb-2">
                      <Icon className="text-blue-600" size={28} />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">{value.title}</h4>
                    <p className="text-xs text-gray-600">{value.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Service Images Gallery */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {serviceImages.map((img, idx) => (
                <div key={idx} className="overflow-hidden rounded-xl shadow-md hover:scale-105 transition-transform">
                  <img src={img} alt={`Service ${idx + 1}`} className="w-full h-32 object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1170686/pexels-photo-1170686.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Expert at work"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                28+
              </div>
              <div className="text-gray-600 font-medium">Years of Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
