// components/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import { FaShip, FaBriefcase, FaGraduationCap, FaImages, FaEnvelope, FaHome } from 'react-icons/fa';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Client side မှာပဲ run အောင်လုပ်မယ်
  useEffect(() => {
    setIsClient(true);
  }, []);

  const navItems = [
    { name: 'Home', href: '#', icon: <FaHome /> },
    { name: 'Experience', href: '#experience', icon: <FaBriefcase /> },
    { name: 'Training', href: '#training', icon: <FaGraduationCap /> },
    { name: 'Gallery', href: '#gallery', icon: <FaImages /> },
    { name: 'Contact', href: '#contact', icon: <FaEnvelope /> },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (href === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Server side မှာ mobile menu ကိုမပြအောင်လုပ်မယ်
  if (!isClient) {
    return (
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-sea-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="bg-navy-900 text-white p-3 rounded-xl mr-3">
                <FaShip className="text-2xl" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-navy-900">
                  Maritime<span className="text-gold-600">Professional</span>
                </h1>
                <p className="text-sm text-gray-600">Seaman & F&B Trainer</p>
              </div>
            </div>
            
            {/* Desktop Navigation - SSR အတွက် */}
            <nav className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center px-4 py-2 rounded-lg text-gray-700"
                >
                  <span className="mr-2 text-gold-600">
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.name}</span>
                </a>
              ))}
            </nav>

            {/* Mobile button - SSR အတွက် */}
            <div className="md:hidden">
              <button className="p-2 rounded-lg bg-sea-50 text-navy-900">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-sea-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          
          {/* Logo/Brand Section */}
          <div className="flex items-center">
            <div className="bg-navy-900 text-white p-3 rounded-xl mr-3">
              <FaShip className="text-2xl" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-navy-900">
                Maritime<span className="text-gold-600">Professional</span>
              </h1>
              <p className="text-sm text-gray-600">Seaman & F&B Trainer</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="flex items-center px-4 py-2 rounded-lg text-gray-700 hover:bg-sea-50 hover:text-navy-900 transition duration-300 group"
              >
                <span className="mr-2 text-gold-600 group-hover:text-gold-700">
                  {item.icon}
                </span>
                <span className="font-medium">{item.name}</span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg bg-sea-50 text-navy-900 hover:bg-sea-100 transition duration-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>

        {/* Mobile Navigation - Client side မှာပဲပြမယ် */}
        {isClient && (
          <div className={`mt-4 md:hidden bg-white border border-sea-200 rounded-lg p-4 shadow-lg transition-all duration-300 ${
            isMobileMenuOpen ? 'block animate-fade-in' : 'hidden'
          }`}>
            <div className="space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="flex items-center px-4 py-3 rounded-lg hover:bg-sea-50 text-gray-700 transition duration-300"
                >
                  <span className="mr-3 text-gold-600">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;