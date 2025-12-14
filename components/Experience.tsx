// components/Experience.tsx - IMPROVED PROPORTIONS
const Experience = () => {
    const experiences = [
      {
        year: "2020 - Present",
        title: "Senior F&B Trainer",
        company: "Royal Caribbean International",
        location: "Global Cruise Routes",
        description: "Lead trainer for fine dining service teams across fleet. Developed training programs for 200+ staff members.",
        achievements: [
          "Improved service ratings by 30% across 5 ships",
          "Reduced staff turnover by 25% through improved training",
          "Implemented new wine service certification program"
        ],
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
        icon: "👨‍🏫"
      },
      {
        year: "2017 - 2020",
        title: "F&B Training Specialist",
        company: "Norwegian Cruise Line",
        location: "Caribbean & Mediterranean",
        description: "Specialized in luxury dining service training and staff development programs.",
        achievements: [
          "Trained 150+ staff in fine dining protocols",
          "Developed customized training for Asian market",
          "Achieved 95% guest satisfaction in dining"
        ],
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
        icon: "🎓"
      },
      {
        year: "2015 - 2017",
        title: "Assistant F&B Manager",
        company: "Princess Cruises",
        location: "Alaska & Asia Pacific",
        description: "Managed daily dining operations while developing junior staff training programs.",
        achievements: [
          "Managed team of 50+ dining staff",
          "Implemented cost-saving measures saving $100K annually",
          "Promoted to training role after 2 years"
        ],
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
        icon: "👔"
      },
      {
        year: "2014 - 2015",
        title: "Fine Dining Server",
        company: "Celebrity Cruises",
        location: "Mediterranean",
        description: "Started career in cruise ship hospitality, specializing in premium dining service.",
        achievements: [
          "Consistently top-rated server",
          "Selected for premium dining venues",
          "Promoted to management within 1 year"
        ],
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
        icon: "🍽️"
      }
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
              8-Year Career Progression
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Documented journey through luxury cruise ship hospitality with visual evidence
            </p>
          </div>
  
          {/* Experience Timeline */}
          <div className="max-w-6xl mx-auto">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`mb-20 lg:mb-24 ${
                  index % 2 === 0 ? '' : ''
                }`}
              >
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
                <div className={`
                  flex flex-col lg:flex-row gap-8 items-start
                  ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}
                `}>
                  {/* Image Column - 40% width */}
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
  
                  {/* Text Column - 60% width */}
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
                            <div className="text-2xl font-bold text-navy-900">4.9</div>
                            <div className="text-gray-600 text-sm">Avg. Rating</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-navy-900">98%</div>
                            <div className="text-gray-600 text-sm">Satisfaction</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-navy-900">25+</div>
                            <div className="text-gray-600 text-sm">Team Size</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
                {/* Connecting Line (except last) */}
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
                  A journey of continuous growth in cruise ship hospitality excellence
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                  <div className="text-5xl font-bold text-gold-300 mb-4">4</div>
                  <div className="text-xl font-medium mb-2">Major Cruise Lines</div>
                  <p className="text-white/70 text-sm">
                    Royal Caribbean, Norwegian, Princess, Celebrity
                  </p>
                </div>
                
                <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                  <div className="text-5xl font-bold text-gold-300 mb-4">500+</div>
                  <div className="text-xl font-medium mb-2">Professionals Trained</div>
                  <p className="text-white/70 text-sm">
                    In fine dining service and hospitality standards
                  </p>
                </div>
                
                <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                  <div className="text-5xl font-bold text-gold-300 mb-4">30%</div>
                  <div className="text-xl font-medium mb-2">Performance Increase</div>
                  <p className="text-white/70 text-sm">
                    Average improvement in service quality metrics
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