import { ExternalLink, Award } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: 'Modern Estate Roofing',
      category: 'Roofing',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Premium slate roofing installation on luxury estate'
    },
    {
      title: 'Luxury Garden Retreat',
      category: 'Landscaping',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete landscape transformation with water features'
    },
    {
      title: 'Contemporary Villa',
      category: 'Construction',
      image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Custom-built modern architectural masterpiece'
    },
    {
      title: 'Victorian Restoration',
      category: 'Moulding',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Intricate crown moulding and trim restoration'
    },
    {
      title: 'Commercial Complex',
      category: 'Construction',
      image: 'https://images.pexels.com/photos/3862379/pexels-photo-3862379.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Multi-story commercial development project'
    },
    {
      title: 'Resort Landscaping',
      category: 'Landscaping',
      image: 'https://images.pexels.com/photos/2132171/pexels-photo-2132171.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Extensive resort grounds and garden design'
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Showcasing Excellence in Every Project
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of award-winning projects that demonstrate our commitment to quality and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {project.category}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center space-x-2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Award className="text-yellow-400" size={20} />
                    <span className="text-yellow-400 text-sm font-medium">Award Winner</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-200 text-sm mb-4">{project.description}</p>

                  <button className="flex items-center space-x-2 text-white font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span>View Details</span>
                    <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
}
