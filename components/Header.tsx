// components/Header.tsx - FINAL FIXED VERSION
'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // 🔴 CRITICAL FIX: Handle initial page load
    // Start with clean history state
    if (window.history.state === null) {
      window.history.replaceState({ 
        page: 'portfolio',
        preventBack: true 
      }, '');
    }

    // 🔴 CRITICAL FIX: Block back button from leaving site
    const handlePopState = (event: PopStateEvent) => {
      // If user tries to go back to previous website
      if (!event.state || event.state.page !== 'portfolio') {
        // Keep them on current page
        window.history.pushState({ 
          page: 'portfolio',
          preventBack: true 
        }, '');
        
        // Optional: Show message
        console.log('Stay on portfolio site');
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // 🔴 CRITICAL FIX: Simple navigation WITHOUT hash in URL
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);

    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      const targetPosition = targetElement.offsetTop - 80;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      // 🔴 IMPORTANT: DO NOT update URL hash
      // This prevents browser history entries
      // window.location.hash = sectionId; // ❌ DON'T DO THIS
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'training', label: 'Training' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-xl md:text-2xl font-bold text-navy-900 hover:text-gold-700 transition-colors"
            >
              A2B<span className="text-gold-700">folio</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 text-sm font-medium text-navy-900 hover:bg-gold-50 hover:text-gold-700 rounded-lg transition-all duration-300"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white shadow-sm hover:bg-gray-50 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="py-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;