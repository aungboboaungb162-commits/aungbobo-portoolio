// app/page.tsx
'use client';

// =========================================================
// 📥 Imports
// =========================================================
import Header from '@/components/Header';
import Experience from '@/components/Experience';
import Training from '@/components/Training';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

// =========================================================
// ♻️ Profile Image Card Component (Refactored & Exported)
// **Home Component ၏ အပြင်ဘက်တွင် သတ်မှတ်ထားပါသည်။**
// =========================================================

interface ProfileImageCardProps {
  isMobile?: boolean; 
}

const ProfileImageCard: React.FC<ProfileImageCardProps> = ({ isMobile = false }) => {
  const badgeClasses = isMobile 
    ? "absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-900/80 backdrop-blur-sm border border-white/30 rounded-lg px-6 py-3 shadow-lg"
    : "absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-900/80 backdrop-blur-sm border border-white/30 rounded-lg px-8 py-4 shadow-lg";

  return (
    <div className="relative">
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-white/20">
        <Image 
          src="/images/aungboboprofile-v2.jpg" 
          alt="Aung Bo Bo - Professional F&B Trainer"
          width={800}
          height={1000}
          className="w-full h-auto object-cover"
          priority
        />
      </div>
      
      {/* Availability Badge */}
      <div className={badgeClasses}>
        <div className="text-center">
          <div className="text-sm text-white/80 mb-1">{isMobile ? "Available For" : "Currently Available For"}</div>
          <div className="font-bold text-white text-sm">Professional Engagements</div>
        </div>
      </div>
    </div>
  );
}

// =========================================================
// 🚀 Home Page Component (Default Export)
// =========================================================
export default function Home() {
  
  // 💡 LCP Optimization: Corrected Background Image Path
  const backgroundImagePath = "/images/backgroundphoto.jpg"; 
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center">
          {/* Cruise Ship Fine Dining Background */}
          <div className="absolute inset-0">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                // 💥 Fix: Uses the corrected path
                backgroundImage: `url('${backgroundImagePath}')` 
              }}
            />
            {/* Color Overlay (bg-gray-900/50 is in the next div) */}
          </div>

          <div className="container mx-auto px-4 relative z-10 py-12">
            {/* Mobile: Photo First, Desktop: Photo Right */}
            <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-12">
              
              {/* Mobile: Photo First */}
              <div className="lg:hidden w-full mb-12">
                {/* 📌 Fix: ProfileImageCard is now correctly defined outside Home */}
                <ProfileImageCard isMobile={true} /> 
              </div>

              {/* Professional Content */}
              <div 
                className="lg:w-3/5 order-2 lg:order-1 p-6 md:p-10 rounded-2xl 
                           bg-gray-900/50 shadow-2xl border border-white/20 lg:h-full flex flex-col justify-center"
              >
                
                {/* Professional Identity */}
                <div className="mb-10">
                  <div className="mb-6">
                    <div className="text-sm font-semibold text-gold-300 uppercase tracking-wider mb-2">
                      Cruise Ship Hospitality Expert
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                      AUNG BO BO
                    </h1>
                    <div className="text-xl lg:text-2xl text-gold-300 font-medium">
                      F&B Training Specialist
                    </div>
                  </div>
                  
                  {/* Core Value Proposition */}
                  <div className="max-w-2xl mb-12">
                    <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
                      Transforming luxury cruise ship dining experiences through 
                      comprehensive F&B staff training that enhances service quality, 
                      increases guest satisfaction, and drives operational excellence.
                    </p>
                  </div>
                </div>
                
                {/* Professional Credentials */}
                <div className="mb-12">
                  <div className="grid grid-cols-3 gap-4 md:gap-8">
                    <div className="border-l-4 border-gold-500 pl-3 md:pl-4">
                      <div className="text-2xl md:text-3xl font-bold text-white">8+</div>
                      <div className="text-white/80 text-sm md:text-base">Years Experience</div>
                      <div className="text-xs md:text-sm text-gold-300/80 mt-1">Luxury Cruise Lines</div>
                    </div>
                    <div className="border-l-4 border-gold-500 pl-3 md:pl-4">
                      <div className="text-2xl md:text-3xl font-bold text-white">50+</div>
                      <div className="text-white/80 text-sm md:text-base">Teams Trained</div>
                      <div className="text-xs md:text-sm text-gold-300/80 mt-1">International Staff</div>
                    </div>
                    <div className="border-l-4 border-gold-500 pl-3 md:pl-4">
                      <div className="text-2xl md:text-3xl font-bold text-white">5★</div>
                      <div className="text-white/80 text-sm md:text-base">Service Rating</div>
                      <div className="text-xs md:text-sm text-gold-300/80 mt-1">Consistent Excellence</div>
                    </div>
                  </div>
                </div>
                
                {/* Professional Actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="#experience" 
                    className="bg-gold-600 hover:bg-gold-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 text-center"
                  >
                    View Professional Experience
                  </a>
                  <a 
                    href="#contact" 
                    className="bg-transparent hover:bg-white/10 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 text-center"
                  >
                    Contact for Consultation
                  </a>
                </div>
              </div>
              
              {/* Desktop: Photo Right - Hidden on Mobile */}
              <div className="hidden lg:block lg:w-2/5 order-1 lg:order-2">
                <ProfileImageCard />
              </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <a href="#experience" className="text-white/60 animate-bounce block">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <Experience />

        {/* Training Section */}
        <Training />

        {/* Gallery Section */}
        <Gallery />

        {/* Contact Section */}
        <Contact />

      </main>

      {/* Footer Section - Navy Background */}
      <footer className="py-10 bg-blue-900 text-white border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Maritime Professional</h4>
              <p className="text-blue-300">
                Specializing in cruise ship fine dining operations and F&B staff training with 8+ years of international experience.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#experience" className="text-white/80 hover:text-gold-300 transition duration-300">Experience</a></li>
                <li><a href="#training" className="text-white/80 hover:text-gold-300 transition duration-300">Training Programs</a></li>
                <li><a href="#gallery" className="text-white/80 hover:text-gold-300 transition duration-300">Gallery</a></li>
                <li><a href="#contact" className="text-white/80 hover:text-gold-300 transition duration-300">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4">Contact Info</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-3 text-gold-300" />
                  <span>john.smith@maritimeprofessional.com</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-3 text-gold-300" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-3 text-gold-300" />
                  <span>Miami, Florida, USA</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-10 pt-8 border-t border-white/10 text-center">
            <p className="text-white/60">
              © {new Date().getFullYear()} Seaman & F&B Trainer Professional Portfolio. All rights reserved.
            </p>
            <p className="text-white/40 text-sm mt-2">
              Designed for professional presentation and career advancement
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}