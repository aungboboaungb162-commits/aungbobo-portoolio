// components/Training.tsx - UPDATED VERSION (Fixed Icons & Removed Verification Button)
'use client';

import { useState } from 'react';
import TrainingDetailModal from './TrainingDetailModal';
import { Award, CheckCircle, Calendar, Shield, FileText, Globe, Users, Star } from 'lucide-react';

const Training = () => {
  const [selectedProgram, setSelectedProgram] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const trainingPrograms = [
    {
      title: "Fine Dining Service Excellence",
      category: "Service Standards",
      level: "Advanced",
      duration: "4 Weeks",
      description: "Comprehensive training program for luxury dining service including wine pairing, tableside service, and guest interaction. Designed specifically for cruise ship environments with focus on maritime operations.",
      modules: [
        "Wine & Beverage Knowledge",
        "Tableside Etiquette",
        "Guest Experience Management",
        "Service Recovery Techniques",
        "Cruise-Specific Service Protocols",
        "International Guest Relations"
      ],
      icon: "🍷",
      color: "from-purple-50 to-purple-100",
      border: "border-purple-200"
    },
    {
      title: "Cruise Ship F&B Operations",
      category: "Operations Management",
      level: "Intermediate",
      duration: "6 Weeks",
      description: "Training on cruise-specific F&B operations including inventory, cost control, and staff scheduling in maritime environment. Covers emergency procedures and sea-specific challenges.",
      modules: [
        "Inventory Management at Sea",
        "Cost Control Systems",
        "Staff Scheduling & Rotation",
        "Safety & Sanitation Protocols",
        "Emergency Procedures",
        "Maritime Regulations"
      ],
      icon: "🚢",
      color: "from-blue-50 to-blue-100",
      border: "border-blue-200"
    },
    {
      title: "Hospitality Leadership Development",
      category: "Leadership",
      level: "Advanced",
      duration: "8 Weeks",
      description: "Leadership program for F&B supervisors and managers focusing on team building, conflict resolution, and performance management in isolated cruise environments.",
      modules: [
        "Team Leadership Skills",
        "Conflict Resolution",
        "Performance Evaluation",
        "Training & Mentoring",
        "Crisis Management",
        "Cross-Cultural Leadership"
      ],
      icon: "👨‍💼",
      color: "from-green-50 to-green-100",
      border: "border-green-200"
    },
    {
      title: "Wine Service & Pairing Certification",
      category: "Specialized Skills",
      level: "Expert",
      duration: "2 Weeks",
      description: "Intensive wine education program covering major wine regions, tasting techniques, and food pairing principles. Includes cruise-specific wine storage and service.",
      modules: [
        "Wine Regions & Varietals",
        "Tasting & Evaluation",
        "Food & Wine Pairing",
        "Wine Service Techniques",
        "Cellar Management at Sea",
        "Wine List Development"
      ],
      icon: "🍇",
      color: "from-amber-50 to-amber-100",
      border: "border-amber-200"
    },
    {
      title: "Bar & Beverage Management",
      category: "Beverage Operations",
      level: "Intermediate",
      duration: "4 Weeks",
      description: "Comprehensive beverage program covering bar operations, cocktail creation, inventory, and profitability in cruise ship bars and lounges.",
      modules: [
        "Bar Setup & Operations",
        "Mixology Fundamentals",
        "Beverage Cost Control",
        "Menu Development",
        "Entertainment Integration",
        "Revenue Optimization"
      ],
      icon: "🍸",
      color: "from-red-50 to-red-100",
      border: "border-red-200"
    },
    {
      title: "Guest Service Excellence",
      category: "Customer Service",
      level: "All Levels",
      duration: "2 Weeks",
      description: "Foundational guest service training focusing on creating memorable experiences and handling special requests in multi-cultural cruise environments.",
      modules: [
        "Guest Interaction Skills",
        "Service Recovery",
        "Cultural Awareness",
        "Upselling Techniques",
        "Language & Communication",
        "Feedback Management"
      ],
      icon: "⭐",
      color: "from-indigo-50 to-indigo-100",
      border: "border-indigo-200"
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "Certified Hospitality Trainer (CHT)",
      issuer: "American Hotel & Lodging Association",
      year: "2022",
      validity: "Lifetime",
      category: "Training Excellence",
      icon: <Award className="w-6 h-6 text-blue-600" />,
      color: "bg-gradient-to-br from-blue-50 to-blue-100",
      border: "border-blue-200",
      description: "Highest standard for hospitality training professionals",
      level: "Advanced"
    },
    {
      id: 2,
      name: "Wine & Spirits Education Trust Level 3",
      issuer: "WSET Global",
      year: "2021",
      validity: "Lifetime",
      category: "Beverage Expertise",
      icon: <CheckCircle className="w-6 h-6 text-purple-600" />,
      color: "bg-gradient-to-br from-purple-50 to-purple-100",
      border: "border-purple-200",
      description: "Advanced knowledge of wine and spirits",
      level: "Expert"
    },
    {
      id: 3,
      name: "Food Safety Manager Certification",
      issuer: "National Restaurant Association",
      year: "2020",
      validity: "5 Years",
      category: "Safety Standards",
      icon: <Shield className="w-6 h-6 text-green-600" />,
      color: "bg-gradient-to-br from-green-50 to-green-100",
      border: "border-green-200",
      description: "Advanced food safety and sanitation management",
      level: "Professional"
    },
    {
      id: 4,
      name: "Cruise Ship Hospitality Management",
      issuer: "Florida Cruise Association",
      year: "2019",
      validity: "Lifetime",
      category: "Maritime Specialization",
      icon: <Calendar className="w-6 h-6 text-amber-600" />,
      color: "bg-gradient-to-br from-amber-50 to-amber-100",
      border: "border-amber-200",
      description: "Specialized cruise industry management",
      level: "Advanced"
    },
    {
      id: 5,
      name: "Advanced Service Techniques",
      issuer: "International Cruise Council",
      year: "2023",
      validity: "3 Years",
      category: "Service Excellence",
      icon: <Star className="w-6 h-6 text-red-600" />,
      color: "bg-gradient-to-br from-red-50 to-red-100",
      border: "border-red-200",
      description: "Advanced guest service methodologies",
      level: "Advanced"
    },
    {
      id: 6,
      name: "Multicultural Team Leadership",
      issuer: "Global Hospitality Institute",
      year: "2022",
      validity: "Lifetime",
      category: "Leadership",
      icon: <Users className="w-6 h-6 text-indigo-600" />,
      color: "bg-gradient-to-br from-indigo-50 to-indigo-100",
      border: "border-indigo-200",
      description: "Leading diverse international teams",
      level: "Expert"
    }
  ];

  const handleViewDetails = (program: any) => {
    setSelectedProgram(program);
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="training" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center mb-4">
              <div className="h-px w-12 bg-gold-600 mr-4"></div>
              <span className="text-gold-600 font-medium tracking-wider">
                PROFESSIONAL DEVELOPMENT
              </span>
              <div className="h-px w-12 bg-gold-600 ml-4"></div>
            </div>
            
            <h2 className="text-4xl font-bold text-navy-900 mb-6">
              Training Programs & Certifications
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Industry-recognized training programs and professional certifications
            </p>
          </div>

          {/* Training Programs Grid */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-navy-900 mb-10 text-center">
              Professional Training Programs
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trainingPrograms.map((program, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-br ${program.color} ${program.border} rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group`}
                  onClick={() => handleViewDetails(program)}
                >
                  {/* Program Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                        {program.icon}
                      </div>
                      <div className="inline-block bg-white/80 px-3 py-1 rounded-full text-sm font-medium text-gray-700 mb-2">
                        {program.category}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">Level</div>
                      <div className="font-bold text-navy-900">{program.level}</div>
                    </div>
                  </div>

                  {/* Program Title */}
                  <h3 className="text-xl font-bold text-navy-900 mb-4 group-hover:text-navy-700 transition-colors">
                    {program.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 mb-6 line-clamp-3">
                    {program.description}
                  </p>

                  {/* Duration */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-sm text-gray-600">Duration</div>
                    <div className="font-bold text-gold-700">{program.duration}</div>
                  </div>

                  {/* Modules Preview */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-600 mb-3">
                      Training Modules:
                    </h4>
                    <ul className="space-y-2">
                      {program.modules.slice(0, 3).map((module, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-gold-500 mr-3"></div>
                          <span className="text-gray-700 text-sm line-clamp-1">{module}</span>
                        </li>
                      ))}
                      {program.modules.length > 3 && (
                        <li className="text-sm text-gray-500 pl-5">
                          +{program.modules.length - 3} more modules
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* CTA */}
                  <button 
                    className="w-full mt-6 bg-white/80 hover:bg-white border border-gray-300 text-navy-900 font-medium py-3 rounded-lg transition duration-300 group-hover:border-gold-400 group-hover:text-gold-700"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleViewDetails(program);
                    }}
                  >
                    View Program Details
                  </button>
                </div>
              ))}
            </div>

            {/* Instructions */}
            <div className="mt-12 text-center">
              <p className="text-gray-600">
                <span className="text-gold-600 font-medium">💡 Professional Tip:</span> Click on any program card to view complete details
              </p>
            </div>
          </div>

          {/* PROFESSIONAL CERTIFICATIONS SECTION */}
          <div className="mb-20">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-gold-600 mr-3" />
                <h3 className="text-3xl font-bold text-navy-900">Professional Certifications</h3>
                <Award className="w-8 h-8 text-gold-600 ml-3" />
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Industry-recognized credentials validating expertise in cruise ship hospitality and F&B training
              </p>
            </div>

            {/* Certifications Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {certifications.map((cert) => (
                <div 
                  key={cert.id}
                  className={`${cert.color} ${cert.border} rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300`}
                >
                  {/* Certification Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className="p-3 rounded-xl bg-white shadow-sm mr-4">
                        {cert.icon}
                      </div>
                      <div>
                        <span className="inline-block px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-700 mb-2">
                          {cert.category}
                        </span>
                        <div className="text-xs text-gray-500">Level: {cert.level}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">Year</div>
                      <div className="font-bold text-navy-900">{cert.year}</div>
                    </div>
                  </div>

                  {/* Certification Name */}
                  <h4 className="text-xl font-bold text-navy-900 mb-4 leading-tight">
                    {cert.name}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-700 mb-6 text-sm">
                    {cert.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Issuing Authority</span>
                      <span className="text-sm font-medium text-navy-900">{cert.issuer}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Validity</span>
                      <span className={`text-sm font-bold ${
                        cert.validity === 'Lifetime' 
                          ? 'text-green-600' 
                          : 'text-gold-600'
                      }`}>
                        {cert.validity}
                      </span>
                    </div>

                    {/* Status Badge */}
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="flex items-center">
                        <div className={`w-3 h-3 rounded-full mr-2 ${
                          cert.validity === 'Lifetime' ? 'bg-green-500' : 'bg-gold-500'
                        }`}></div>
                        <span className="text-sm text-gray-700">
                          {cert.validity === 'Lifetime' ? 'Permanent Credential' : 'Active & Renewable'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Certification Stats */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="lg:w-full">
                  <h4 className="text-2xl font-bold text-navy-900 mb-4 flex items-center">
                    <FileText className="w-6 h-6 text-gold-600 mr-3" />
                    Certification Summary
                  </h4>
                  <p className="text-gray-700 mb-6">
                    All certifications are obtained from recognized industry organizations and maintained through continuous professional development.
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-gold-600 mb-2">{certifications.length}</div>
                      <div className="text-sm text-gray-700">Total Certifications</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-gold-600 mb-2">4</div>
                      <div className="text-sm text-gray-700">Lifetime Validity</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-gold-600 mb-2">6</div>
                      <div className="text-sm text-gray-700">Issuing Organizations</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-gold-600 mb-2">2023</div>
                      <div className="text-sm text-gray-700">Most Recent</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Development Journey */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-navy-900 to-navy-800 rounded-3xl p-10 text-white">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold mb-4">Professional Development Journey</h3>
                <p className="text-white/80 max-w-2xl mx-auto">
                  Continuous learning and certification in cruise ship hospitality excellence
                </p>
              </div>
              
              <div className="relative">
                {/* Timeline */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-1 bg-gold-400/30 w-4/5"></div>
                
                <div className="grid lg:grid-cols-4 gap-8 relative">
                  {[
                    { year: "2019", title: "Maritime Specialization", desc: "Cruise Ship Hospitality Management" },
                    { year: "2020", title: "Safety Standards", desc: "Food Safety Manager Certification" },
                    { year: "2021", title: "Beverage Expertise", desc: "WSET Level 3 Certification" },
                    { year: "2022-2023", title: "Training Excellence", desc: "Multiple Advanced Certifications" }
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 rounded-full bg-gold-600 border-4 border-white shadow-lg mx-auto mb-6 flex items-center justify-center">
                        <span className="text-white font-bold">{item.year}</span>
                      </div>
                      <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                      <p className="text-white/80 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Training Methodology */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm mb-12">
            <h3 className="text-2xl font-bold text-navy-900 mb-8 text-center">
              Professional Training Methodology
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-to-b from-blue-50 to-white rounded-xl border border-blue-100">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-blue-600">🎯</span>
                </div>
                <h4 className="text-xl font-bold text-navy-900 mb-3">Industry Standards</h4>
                <p className="text-gray-600">
                  Training aligned with global hospitality and maritime industry standards
                </p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-b from-green-50 to-white rounded-xl border border-green-100">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-green-600">📊</span>
                </div>
                <h4 className="text-xl font-bold text-navy-900 mb-3">Measurable Outcomes</h4>
                <p className="text-gray-600">
                  Performance metrics and competency-based assessment systems
                </p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-b from-purple-50 to-white rounded-xl border border-purple-100">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-purple-600">🔄</span>
                </div>
                <h4 className="text-xl font-bold text-navy-900 mb-3">Continuous Improvement</h4>
                <p className="text-gray-600">
                  Regular program updates based on industry feedback and trends
                </p>
              </div>
            </div>
          </div>

          {/* Professional Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
              <div className="text-3xl font-bold text-gold-600 mb-2">500+</div>
              <div className="text-gray-700 font-medium">Professionals Trained</div>
              <div className="text-gray-500 text-sm mt-2">International cruise staff</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
              <div className="text-3xl font-bold text-gold-600 mb-2">6</div>
              <div className="text-gray-700 font-medium">Certified Programs</div>
              <div className="text-gray-500 text-sm mt-2">Industry-recognized</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
              <div className="text-3xl font-bold text-gold-600 mb-2">98%</div>
              <div className="text-gray-700 font-medium">Success Rate</div>
              <div className="text-gray-500 text-sm mt-2">Certification completion</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
              <div className="text-3xl font-bold text-gold-600 mb-2">4.9/5</div>
              <div className="text-gray-700 font-medium">Satisfaction Score</div>
              <div className="text-gray-500 text-sm mt-2">Program feedback</div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <TrainingDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        program={selectedProgram}
      />
    </>
  );
};

export default Training;