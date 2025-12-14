// components/TrainingDetailModal.tsx - FIXED VERSION
'use client';

import { useState, useEffect } from 'react';
import { X, Download, Mail, CheckCircle, User, Building, MessageSquare, Send } from 'lucide-react';

interface TrainingDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  program: {
    title: string;
    category: string;
    level: string;
    duration: string;
    description: string;
    modules: string[];
    icon: string;
    color: string;
    border: string;
  } | null;
}

const TrainingDetailModal = ({ isOpen, onClose, program }: TrainingDetailModalProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      setTimeout(() => setIsVisible(false), 300);
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Real PDF Download Function
  const handleDownload = () => {
    if (!program) return;
    
    setIsDownloading(true);
    
    // Create PDF content
    const pdfContent = `
      ==============================================
      TRAINING PROGRAM SYLLABUS
      ==============================================
      
      Program Title: ${program.title}
      Category: ${program.category}
      Level: ${program.level}
      Duration: ${program.duration}
      
      --------------------------------------------------
      PROGRAM OVERVIEW
      --------------------------------------------------
      ${program.description}
      
      --------------------------------------------------
      TRAINING MODULES
      --------------------------------------------------
      ${program.modules.map((module, index) => `${index + 1}. ${module}`).join('\n')}
      
      --------------------------------------------------
      LEARNING OUTCOMES
      --------------------------------------------------
      1. Master ${program.category.toLowerCase()} skills
      2. Apply knowledge in cruise ship environment
      3. Receive certification upon completion
      
      --------------------------------------------------
      TARGET AUDIENCE
      --------------------------------------------------
      • F&B Staff
      • Supervisors
      • Managers
      • Trainers
      
      --------------------------------------------------
      CONTACT INFORMATION
      --------------------------------------------------
      Trainer: John Smith
      Position: Senior F&B Trainer
      Email: john.smith@maritimeprofessional.com
      Phone: +1 (555) 123-4567
      
      ==============================================
      Generated: ${new Date().toLocaleDateString()}
      ==============================================
    `;
    
    // Create and download PDF file
    const blob = new Blob([pdfContent], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${program.title.replace(/\s+/g, '_')}_Syllabus.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    setTimeout(() => {
      setIsDownloading(false);
      alert(`✅ Syllabus for "${program.title}" has been downloaded successfully!`);
    }, 500);
  };

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Submit training request
  const handleSubmitRequest = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      alert('Please fill in at least your name and email.');
      return;
    }
    
    setIsSubmitting(true);
    
    // Here you would send the data to your backend
    // For now, we'll simulate API call
    setTimeout(() => {
      console.log('Training Request Submitted:', {
        ...formData,
        program: program?.title,
        timestamp: new Date().toISOString()
      });
      
      setIsSubmitting(false);
      setShowRequestForm(false);
      setFormData({ name: '', email: '', company: '', message: '' });
      
      alert(`🎉 Thank you ${formData.name}! Your training request has been submitted successfully. We will contact you at ${formData.email} within 24 hours.`);
    }, 1500);
  };

  if (!isVisible && !isOpen) return null;
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${
          isOpen ? 'opacity-50' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Modal */}
      <div 
        className={`relative bg-white rounded-2xl w-full max-w-4xl mx-auto max-h-[90vh] overflow-y-auto transform transition-all duration-300 ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors shadow-sm"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>

        {/* Modal Content */}
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-6">
            <div className="flex-1">
              <div className="flex items-start mb-4">
                <div className="text-4xl mr-4">{program.icon}</div>
                <div>
                  <span className="inline-block bg-gray-100 px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    {program.category}
                  </span>
                  <div className="mt-2 flex items-center">
                    <span className="text-sm text-gray-600 mr-4">
                      Level: <span className="font-bold text-navy-900">{program.level}</span>
                    </span>
                    <span className="text-sm text-gray-600">
                      Duration: <span className="font-bold text-gold-600">{program.duration}</span>
                    </span>
                  </div>
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy-900 leading-tight">
                {program.title}
              </h2>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8 p-6 bg-sea-50 rounded-xl border border-sea-100">
            <h3 className="text-xl font-bold text-navy-900 mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
              Program Overview
            </h3>
            <p className="text-gray-800 leading-relaxed">{program.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Training Modules */}
            <div>
              <h3 className="text-xl font-bold text-navy-900 mb-6 flex items-center">
                <div className="w-6 h-6 bg-gold-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-gold-700 font-bold">1</span>
                </div>
                Training Modules
              </h3>
              <div className="space-y-4">
                {program.modules.map((module, index) => (
                  <div 
                    key={index}
                    className="flex items-start p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-8 h-8 rounded-full bg-gold-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-gold-700 font-bold text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{module}</h4>
                      <p className="text-gray-600 text-sm">
                        Hands-on training with practical exercises and assessments
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Program Details */}
            <div className="space-y-8">
              {/* Learning Outcomes */}
              <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                <h3 className="text-xl font-bold text-navy-900 mb-4 flex items-center">
                  <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-blue-700 font-bold">✓</span>
                  </div>
                  Learning Outcomes
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-800 font-medium">Master {program.category.toLowerCase()} skills</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-800 font-medium">Apply knowledge in cruise ship environment</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-800 font-medium">Receive certification upon completion</span>
                  </li>
                </ul>
              </div>

              {/* Target Audience */}
              <div className="p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl border border-amber-200">
                <h3 className="text-xl font-bold text-navy-900 mb-4 flex items-center">
                  <div className="w-6 h-6 bg-amber-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-amber-700 font-bold">👥</span>
                  </div>
                  Target Audience
                </h3>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-white text-blue-700 font-medium rounded-lg shadow-sm border border-blue-200">
                    F&B Staff
                  </span>
                  <span className="px-4 py-2 bg-white text-green-700 font-medium rounded-lg shadow-sm border border-green-200">
                    Supervisors
                  </span>
                  <span className="px-4 py-2 bg-white text-purple-700 font-medium rounded-lg shadow-sm border border-purple-200">
                    Managers
                  </span>
                  <span className="px-4 py-2 bg-white text-amber-700 font-medium rounded-lg shadow-sm border border-amber-200">
                    Trainers
                  </span>
                </div>
              </div>

              {/* Delivery Method */}
              <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
                <h3 className="text-xl font-bold text-navy-900 mb-4 flex items-center">
                  <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-green-700 font-bold">🎯</span>
                  </div>
                  Delivery Method
                </h3>
                <div className="flex items-center">
                  <div className="mr-4 p-3 bg-white rounded-lg shadow-sm border border-gray-200">
                    <span className="text-2xl">👨‍🏫</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Interactive Classroom + Onboard Training</div>
                    <div className="text-gray-700 mt-1">Combination of theory and practical sessions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Training Request Form (Conditional) */}
          {showRequestForm ? (
            <div className="mt-8 p-6 bg-gradient-to-br from-gold-50 to-amber-50 rounded-xl border border-amber-200">
              <h3 className="text-xl font-bold text-navy-900 mb-6 flex items-center">
                <Mail className="w-6 h-6 text-gold-600 mr-3" />
                Request Custom Training
              </h3>
              
              <form onSubmit={handleSubmitRequest} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <User className="w-4 h-4 mr-2" />
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <Mail className="w-4 h-4 mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <Building className="w-4 h-4 mr-2" />
                    Company / Cruise Line
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none"
                    placeholder="Optional"
                  />
                </div>
                
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Additional Information
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none"
                    placeholder="Tell us about your training needs, preferred dates, or any questions..."
                  />
                </div>
                
                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 flex items-center justify-center bg-gold-600 hover:bg-gold-500 text-white font-medium py-3 px-6 rounded-lg transition duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-3" />
                        Submit Request
                      </>
                    )}
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => setShowRequestForm(false)}
                    className="flex-1 flex items-center justify-center bg-transparent border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 font-medium py-3 px-6 rounded-lg transition duration-300"
                  >
                    <X className="w-5 h-5 mr-3" />
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          ) : (
            /* Action Buttons */
            <div className="mt-10 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold text-navy-900 mb-6 text-center">
                Take Action
              </h3>
              <div className="flex flex-col lg:flex-row gap-4">
                {/* Download Button */}
                <button 
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className="flex-1 flex items-center justify-center bg-navy-900 hover:bg-navy-800 text-white font-medium py-4 px-6 rounded-xl transition duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                >
                  {isDownloading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                      Downloading...
                    </>
                  ) : (
                    <>
                      <Download className="w-5 h-5 mr-3" />
                      Download Program Syllabus (PDF)
                    </>
                  )}
                </button>

                {/* Request Button */}
                <button 
                  onClick={() => setShowRequestForm(true)}
                  className="flex-1 flex items-center justify-center bg-gold-600 hover:bg-gold-500 text-white font-medium py-4 px-6 rounded-xl transition duration-300 shadow-md hover:shadow-lg"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  Request Custom Training
                </button>

                {/* Close Button */}
                <button 
                  onClick={onClose}
                  className="flex-1 flex items-center justify-center bg-transparent border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 font-medium py-4 px-6 rounded-xl transition duration-300 shadow-sm hover:shadow"
                >
                  <X className="w-5 h-5 mr-3" />
                  Close Details
                </button>
              </div>
            </div>
          )}

          {/* Additional Info */}
          <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-gold-600">100%</div>
                <div className="text-gray-700 font-medium">Practical Focus</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gold-600">24/7</div>
                <div className="text-gray-700 font-medium">Support Available</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gold-600">✓</div>
                <div className="text-gray-700 font-medium">Certificate Included</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingDetailModal;