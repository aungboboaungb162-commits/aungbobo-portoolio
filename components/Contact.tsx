// components/Contact.tsx - WITH PDF GENERATOR COMPONENT
'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Linkedin, FileText, Clock, Calendar } from 'lucide-react';
import PDFGenerator from './PDFGenerator';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPDFInfo, setShowPDFInfo] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // REAL FORM SUBMISSION - Replace with your backend endpoint
    try {
      const response = await fetch('https://formspree.io/f/your-form-id', { // Replace with your Formspree or backend endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: `Professional Inquiry: ${formData.subject}`,
          _replyto: formData.email
        }),
      });

      if (response.ok) {
        console.log('Email sent successfully:', formData);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again or email directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownloadStart = () => {
    setShowPDFInfo(true);
  };

  const handleDownloadComplete = () => {
    setTimeout(() => {
      setShowPDFInfo(false);
    }, 5000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Address",
      value: "aungbobo.aungb162@gmail.com",
      description: "Primary contact for professional inquiries",
      action: "mailto:john.smith@maritimeprofessional.com?subject=Professional%20Inquiry"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Number",
      value: "+95-09254586830",
      description: "Available Monday to Friday",
      action: "tel:+959254586830"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Base Location",
      value: "Miami, Florida, USA",
      description: "Primary cruise departure hub",
      action: "https://maps.google.com/?q=Miami+Florida+USA"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn Profile",
      value: "linkedin.com/in/aungbobo",
      description: "Connect professionally",
      action: "https://linkedin.com/in/aungbobo"
    }
  ];

  const services = [
    {
      title: "Training Programs",
      description: "Custom F&B training for cruise ships",
      icon: "👨‍🏫"
    },
    {
      title: "Consultation",
      description: "Operational efficiency assessment",
      icon: "📊"
    },
    {
      title: "Staff Development",
      description: "Leadership and skills development",
      icon: "🚀"
    },
    {
      title: "Certification",
      description: "Industry standard certifications",
      icon: "🏆"
    }
  ];

  const availability = [
    { day: "Monday - Friday", time: "9:00 AM - 6:00 PM", status: "Available" },
    { day: "Saturday", time: "10:00 AM - 2:00 PM", status: "Limited" },
    { day: "Sunday", time: "Emergency Only", status: "On Call" }
  ];

  return (
    <section id="contact" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="h-px w-8 md:w-12 bg-gold-600 mr-4"></div>
            <span className="text-gold-600 font-medium tracking-wider text-sm md:text-base">
              CONTACT
            </span>
            <div className="h-px w-8 md:w-12 bg-gold-600 ml-4"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4 md:mb-6">
            Professional Inquiry
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto px-4 md:px-0 text-sm md:text-base">
            For training programs, consultations, or professional collaborations. I typically respond within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column - Contact Form */}
          <div>
            <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl md:text-2xl font-bold text-navy-900 mb-6 md:mb-8 flex items-center">
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-gold-600 mr-3" />
                Send a Message
              </h3>

              {isSubmitted ? (
                <div className="text-center py-8 md:py-12">
                  <CheckCircle className="w-12 h-12 md:w-16 md:h-16 text-green-500 mx-auto mb-4 md:mb-6" />
                  <h4 className="text-xl md:text-2xl font-bold text-navy-900 mb-3 md:mb-4">Message Sent!</h4>
                  <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base">
                    Thank you for your inquiry. I'll respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-gold-600 hover:bg-gold-500 text-white font-medium px-6 py-3 rounded-lg transition duration-300 text-sm md:text-base"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4 md:space-y-6">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition duration-300 text-sm md:text-base text-black"
                        placeholder="John Smith"
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition duration-300 text-sm md:text-base text-black"
                        placeholder="john@example.com"
                      />
                    </div>

                    {/* Subject Field */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Inquiry Type *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition duration-300 text-sm md:text-base text-black"
                      >
                        <option value="" className="text-gray-500">Select inquiry type</option>
                        <option value="Training Program" className="text-black">Training Program Inquiry</option>
                        <option value="Professional Consultation" className="text-black">Consultation Request</option>
                        <option value="Collaboration" className="text-black">Professional Collaboration</option>
                        <option value="Speaking Engagement" className="text-black">Speaking Engagement</option>
                        <option value="Other" className="text-black">Other Professional Inquiry</option>
                      </select>
                    </div>

                    {/* Message Field */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition duration-300 text-sm md:text-base text-black"
                        placeholder="Briefly describe your training needs or project..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gold-600 hover:bg-gold-500 text-white font-medium py-3 md:py-4 px-6 rounded-lg transition duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center text-sm md:text-base"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 md:w-5 md:h-5 mr-3" />
                          Send Professional Inquiry
                        </>
                      )}
                    </button>

                    {/* Privacy Note */}
                    <p className="text-gray-500 text-xs md:text-sm text-center mt-4">
                      Your information will only be used to respond to your inquiry.
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Services Offered - Mobile Responsive */}
            <div className="mt-6 md:mt-8">
              <h4 className="text-lg md:text-xl font-bold text-navy-900 mb-4 md:mb-6 flex items-center">
                <FileText className="w-4 h-4 md:w-5 md:h-5 text-gold-600 mr-3" />
                Professional Services
              </h4>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-white p-3 md:p-4 rounded-lg md:rounded-xl border border-gray-200 hover:border-gold-300 transition duration-300"
                  >
                    <div className="text-xl md:text-2xl mb-2 md:mb-3">{service.icon}</div>
                    <h5 className="font-bold text-gray-900 text-sm md:text-base mb-1">{service.title}</h5>
                    <p className="text-gray-600 text-xs md:text-sm">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Information */}
          <div>
            {/* Contact Cards - Responsive */}
            <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.action}
                  target={info.action.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl border border-gray-200 hover:border-gold-300 transition-all duration-300 group">
                    <div className="flex items-start">
                      <div className="p-2 md:p-3 bg-sea-100 text-gold-700 rounded-lg md:rounded-xl mr-3 md:mr-4 transition duration-300">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 text-sm md:text-base mb-1">{info.title}</h4>
                        <p className="text-gray-800 text-base md:text-lg font-medium mb-1 md:mb-2 truncate">{info.value}</p>
                        <p className="text-gray-600 text-xs md:text-sm">{info.description}</p>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability - Responsive */}
            <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 border border-gray-200 mb-6 md:mb-8">
              <h4 className="text-lg md:text-xl font-bold text-navy-900 mb-4 md:mb-6 flex items-center">
                <Clock className="w-4 h-4 md:w-5 md:h-5 text-gold-600 mr-3" />
                Availability
              </h4>
              <div className="space-y-3 md:space-y-4">
                {availability.map((slot, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row md:items-center justify-between p-3 md:p-4 bg-gray-50 rounded-lg gap-2 md:gap-0"
                  >
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 text-sm md:text-base">{slot.day}</div>
                      <div className="text-gray-600 text-xs md:text-sm">{slot.time}</div>
                    </div>
                    <span className={`
                      px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium self-start md:self-auto
                      ${slot.status === 'Available' ? 'bg-green-100 text-green-800' : ''}
                      ${slot.status === 'Limited' ? 'bg-amber-100 text-amber-800' : ''}
                      ${slot.status === 'On Call' ? 'bg-blue-100 text-blue-800' : ''}
                    `}>
                      {slot.status}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 md:mt-6 p-3 md:p-4 bg-sea-50 rounded-lg border border-sea-200">
                <p className="text-gray-700 text-xs md:text-sm">
                  <span className="font-bold">Note:</span> Typical response time is within 24 hours on business days.
                </p>
              </div>
            </div>

            {/* PDF GENERATOR COMPONENT */}
            <PDFGenerator 
              onDownloadStart={handleDownloadStart}
              onDownloadComplete={handleDownloadComplete}
            />

            {/* PDF Generation Info */}
            {showPDFInfo && (
              <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200 animate-pulse">
                <p className="text-green-800 text-sm text-center">
                  ⚡ PDF is being generated from website content...
                </p>
              </div>
            )}

            {/* Schedule Consultation Button */}
            <a
              href="mailto:john.smith@maritimeprofessional.com?subject=Schedule%20Consultation&body=Hi%20John,%20I'd%20like%20to%20schedule%20a%20consultation.%20Please%20suggest%20some%20available%20times."
              className="w-full mt-4 block bg-navy-900 hover:bg-navy-800 text-white font-medium py-3 md:py-4 px-6 rounded-xl transition duration-300 text-center flex items-center justify-center"
            >
              <Calendar className="w-4 h-4 md:w-5 md:h-5 mr-3" />
              Schedule Consultation
            </a>

            {/* Response Guarantee */}
            <div className="mt-6 p-4 md:p-6 bg-gradient-to-r from-gold-50 to-amber-50 rounded-xl md:rounded-2xl border border-gold-200">
              <div className="flex items-center mb-3 md:mb-4">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-gold-600 mr-3" />
                <h5 className="text-base md:text-lg font-bold text-navy-900">Response Guarantee</h5>
              </div>
              <p className="text-gray-700 text-xs md:text-sm">
                Guaranteed response within <span className="font-bold text-gold-700">24 hours</span> for all professional inquiries on business days.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section - Responsive */}
        <div className="mt-12 md:mt-16 bg-gradient-to-r from-navy-900 to-navy-800 rounded-xl md:rounded-3xl p-6 md:p-10 text-white">
          <div className="text-center mb-8 md:mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Ready to Elevate Your F&B Standards?</h3>
            <p className="text-white/80 max-w-2xl mx-auto text-sm md:text-base px-4 md:px-0">
              With 8+ years of cruise ship hospitality expertise, I provide targeted solutions for service excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-10">
            <div className="text-center p-4 md:p-6 bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl">
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">🎯</div>
              <div className="text-lg md:text-xl font-bold mb-2 md:mb-3">Custom Solutions</div>
              <p className="text-white/80 text-xs md:text-sm">Tailored training for your specific needs</p>
            </div>
            
            <div className="text-center p-4 md:p-6 bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl">
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">🚀</div>
              <div className="text-lg md:text-xl font-bold mb-2 md:mb-3">Proven Results</div>
              <p className="text-white/80 text-xs md:text-sm">Track record of improving service ratings</p>
            </div>
            
            <div className="text-center p-4 md:p-6 bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl">
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">🤝</div>
              <div className="text-lg md:text-xl font-bold mb-2 md:mb-3">Ongoing Support</div>
              <p className="text-white/80 text-xs md:text-sm">Continuous guidance and follow-up</p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="#contact"
              className="inline-flex items-center bg-gold-600 hover:bg-gold-500 text-white font-bold text-base md:text-lg px-6 md:px-10 py-3 md:py-4 rounded-lg md:rounded-xl transition duration-300"
            >
              <Mail className="w-5 h-5 md:w-6 md:h-6 mr-3" />
              Contact for Professional Inquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;