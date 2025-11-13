import { useState } from 'react';
import { Home, Palette, Trees, Layers } from 'lucide-react';

export default function Services() {
  const [activeTab, setActiveTab] = useState('roofing');

  const services = {
    roofing: {
      icon: Home,
      title: 'Premium Roofing',
      description: 'Expert roofing solutions that protect and enhance your property with lasting durability and aesthetic appeal.',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Residential & Commercial Roofing',
        'Roof Repairs & Restoration',
        'Storm Damage Assessment',
        'Energy-Efficient Solutions',
        'Custom Tile & Slate Work',
        '25-Year Warranty'
      ]
    },
    landscaping: {
      icon: Trees,
      title: 'Landscape Design',
      description: 'Transform outdoor spaces into stunning natural retreats with expert landscape architecture and sustainable design.',
      image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Custom Garden Design',
        'Hardscape Installation',
        'Irrigation Systems',
        'Outdoor Living Spaces',
        'Sustainable Landscaping',
        'Seasonal Maintenance'
      ]
    },
    construction: {
      icon: Layers,
      title: 'Construction',
      description: 'Full-service construction expertise from foundation to finish, delivering exceptional quality and precision.',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Custom Home Building',
        'Commercial Construction',
        'Renovations & Additions',
        'Project Management',
        'Structural Engineering',
        'Green Building Certified'
      ]
    },
    moulding: {
      icon: Palette,
      title: 'Architectural Moulding',
      description: 'Exquisite decorative moulding and millwork that adds elegance and character to any interior or exterior space.',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Crown Moulding',
        'Wainscoting & Paneling',
        'Custom Trim Work',
        'Columns & Pilasters',
        'Corbels & Brackets',
        'Restoration Services'
      ]
    }
  };

  const tabs = [
    { id: 'roofing', label: 'Roofing', icon: Home },
    { id: 'landscaping', label: 'Landscaping', icon: Trees },
    { id: 'construction', label: 'Construction', icon: Layers },
    { id: 'moulding', label: 'Moulding', icon: Palette }
  ];

  const activeService = services[activeTab as keyof typeof services];
  const ActiveIcon = activeService.icon;

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Expertise Across Multiple Disciplines
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions tailored to bring your vision to life with unmatched quality and craftsmanship
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => {
            const TabIcon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <TabIcon size={20} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-96 md:h-auto overflow-hidden">
              <img
                src={activeService.image}
                alt={activeService.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
            </div>

            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-6 shadow-lg">
                <ActiveIcon className="text-white" size={32} />
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {activeService.title}
              </h3>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {activeService.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {activeService.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="self-start px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Get a Free Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
