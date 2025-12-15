// components/Experience.tsx
import Image from 'next/image';

const Experience = () => {
  const experiences = [
    {
      year: "2025 – Present",
      title: "Professional F&B Trainer | Hospitality Program Specialist",
      company: "Global Choice Hospitality & Cruise Ship Training",
      location: "Myanmar",
      description:
        "Leading advanced Food & Beverage training programs for cruise ship and hospitality professionals, based on international service standards for luxury ocean and river cruise operations. Developing structured F&B training frameworks covering fine dining service, beverage operations, and inter-departmental hotel coordination to prepare candidates for global cruise and hospitality careers.",
      achievements: [
        "Designed and delivered advanced F&B training programs for 200+ hospitality professionals",
        "Standardized fine dining and beverage service procedures aligned with cruise ship expectations",
        "Strengthened service consistency through structured training and assessments",
        "Introduced international wine service and guest interaction standards"
      ],
      stats: {
        rating: "4.9",
        satisfaction: "98%",
        teamSize: "25+"
      },
      image: "/images/trainer.jpg",
      icon: "🎓"
    },
    {
      year: "2023 – 2025",
      title: "Chef de Rang | Acting Maître d’ (Relief)",
      company: "AmaWaterways · APT River Cruises · Travelmarvel Cruises",
      location: "European River Routes",
      description:
        "Provided luxury fine dining service aboard premium river cruise vessels, while regularly acting as Maître d’ replacement to support dining room leadership, guest satisfaction, and service coordination. Worked closely with F&B management and galley teams to maintain consistent service standards across multiple brands and itineraries.",
      achievements: [
        "Supervised fine dining service operations as Chef de Rang",
        "Performed Acting / Relief Maître d’ duties including team coordination and guest relations",
        "Led daily service briefings, table assignments, and service timing",
        "Coached junior service staff during live operations",
        "Maintained luxury river cruise service standards across different brands"
      ],
      stats: {
        rating: "4.8",
        satisfaction: "96%",
        teamSize: "15–20"
      },
      image: "/images/cdr.jpeg",
      icon: "👔"
    },
    {
      year: "2017 – 2023",
      title: "Food & Beverage Server",
      company: "AIDA Cruises",
      location: "International Cruise Routes",
      description:
        "Delivered professional Food & Beverage service aboard international cruise vessels, supporting daily dining operations in a high-volume, multicultural environment. Built a strong foundation in cruise ship hospitality, guest engagement, teamwork, and adherence to international service standards.",
      achievements: [
        "Delivered consistent table service across multiple dining venues",
        "Adapted to multinational teams and diverse guest expectations",
        "Maintained service quality during high-volume operations",
        "Recognized for reliability, teamwork, and service attitude",
        "Supported senior service staff during peak service periods"
      ],
      stats: {
        rating: "4.7",
        satisfaction: "95%",
        teamSize: "Daily 25+ covers"
      },
      image: "/images/aidawaiter.jpeg",
      icon: "🍽️"
    },
    ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center mb-4">
            <div className="h-px w-12 bg-gold-600 mr-4"></div>
            <span className="text-gold-600 font-medium tracking-wider">
              PROFESSIONAL EXPERIENCE
            </span>
            <div className="h-px w-12 bg-gold-600 ml-4"></div>
          </div>
          
          <h2 className="text-4xl font-bold text-navy-900 mb-6">
            8-Year Cruise & Hospitality Career
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Documented journey through luxury cruise and river cruise hospitality.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-20 lg:mb-24">
              {/* Year Indicator */}
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-full bg-gold-100 border-4 border-white shadow-lg flex items-center justify-center">
                  <span className="text-gold-700 font-bold">{exp.year.split(' ')[0]}</span>
                </div>
                <div className="ml-4">
                  <div className="text-sm text-gray-500">TIMELINE</div>
                  <div className="text-xl font-bold text-navy-900">{exp.year}</div>
                </div>
              </div>

              {/* Content Container */}
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Image Column */}
                <div className="lg:w-2/5">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src={exp.image} 
                        alt={`${exp.title} at ${exp.company}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                      />
                    </div>
                    
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    
                    {/* Role Badge */}
                    <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{exp.icon}</span>
                        <div>
                          <div className="font-bold text-navy-900 text-sm">{exp.title}</div>
                          <div className="text-gray-600 text-xs">{exp.company}</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Location Tag */}
                    <div className="absolute bottom-6 left-6">
                      <div className="text-white font-bold">{exp.location}</div>
                    </div>
                  </div>
                </div>

                {/* Text Column */}
                <div className="lg:w-3/5">
                  <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                    {/* Header */}
                    <div className="mb-8">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-navy-900 mb-2">
                            {exp.title}
                          </h3>
                          <div className="flex items-center text-gray-600">
                            <span className="font-medium">{exp.company}</span>
                            <span className="mx-3 text-gray-400">•</span>
                            <span>{exp.location}</span>
                          </div>
                        </div>
                        <div className="hidden lg:block">
                          <div className="text-gold-600 text-4xl">{exp.icon}</div>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {exp.description}
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-100 mb-8"></div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 mb-6 tracking-wider uppercase">
                        Key Achievements
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {exp.achievements.map((achievement, idx) => (
                          <div 
                            key={idx} 
                            className="flex items-start p-3 bg-sea-50 rounded-lg"
                          >
                            <div className="w-6 h-6 rounded-full bg-gold-100 flex items-center justify-center mr-3 flex-shrink-0">
                              <div className="w-2 h-2 rounded-full bg-gold-600"></div>
                            </div>
                            <span className="text-gray-700">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Stats Row */}
                    <div className="mt-8 pt-6 border-t border-gray-100">
                      <div className="flex flex-wrap gap-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-navy-900">{exp.stats.rating}</div>
                          <div className="text-gray-600 text-sm">Avg. Rating</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-navy-900">{exp.stats.satisfaction}</div>
                          <div className="text-gray-600 text-sm">Satisfaction</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-navy-900">{exp.stats.teamSize}</div>
                          <div className="text-gray-600 text-sm">Team / Covers</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connecting Line */}
              {index < experiences.length - 1 && (
                <div className="hidden lg:flex justify-center mt-8">
                  <div className="w-0.5 h-12 bg-gradient-to-b from-gold-300 to-gold-100"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl p-10 text-white">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold mb-4">Career Highlights</h3>
              <p className="text-white/80 max-w-2xl mx-auto">
                Continuous growth in cruise ship and river cruise hospitality excellence since 2017
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                <div className="text-5xl font-bold text-gold-300 mb-4">4</div>
                <div className="text-xl font-medium mb-2">Major Cruise Brands</div>
                <p className="text-white/70 text-sm">
                  AIDA Cruises, AmaWaterways, APT, Travelmarvel
                </p>
              </div>
              
              <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                <div className="text-5xl font-bold text-gold-300 mb-4">200+</div>
                <div className="text-xl font-medium mb-2">Professionals Trained</div>
                <p className="text-white/70 text-sm">
                  F&B and hospitality staff
                </p>
              </div>
              
              <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                <div className="text-5xl font-bold text-gold-300 mb-4">30%</div>
                <div className="text-xl font-medium mb-2">Performance Increase</div>
                <p className="text-white/70 text-sm">
                  Average service improvement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
