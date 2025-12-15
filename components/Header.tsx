// components/Header.tsx - FIXED BUILD ERROR
'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentHash, setCurrentHash] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Handle browser back/forward buttons
    const handlePopState = (event: PopStateEvent) => {
      // When back button is pressed, handle it
      const url = new URL(window.location.href);
      const hash = url.hash;
      
      if (hash) {
        // Scroll to the hash section
        setTimeout(() => {
          scrollToHash(hash);
        }, 50);
      } else {
        // Scroll to top if no hash
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    // Handle hash changes from URL
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        setCurrentHash(hash);
        setTimeout(() => {
          scrollToHash(hash);
        }, 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handleHashChange);

    // Initial hash check on page load
    const initialHash = window.location.hash;
    if (initialHash) {
      setCurrentHash(initialHash);
      setTimeout(() => {
        scrollToHash(initialHash);
      }, 500);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Function to scroll to hash
  const scrollToHash = (hash: string) => {
    if (!hash) return;
    
    const targetElement = document.querySelector(hash);
    if (targetElement) {
      const targetPosition = (targetElement as HTMLElement).offsetTop - 80;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Main function to handle navigation
  const handleNavigation = (href: string) => {
    setIsMenuOpen(false);

    if (href === '#') {
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      // Clear hash from URL
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
      setCurrentHash('');
      return;
    }

    // Scroll to section
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const targetPosition = (targetElement as HTMLElement).offsetTop - 80;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });

      // Update URL hash - IMPORTANT FOR MOBILE BACK BUTTON
      // Only update if hash is different from current
      if (currentHash !== href) {
        // Replace state instead of push to avoid too many history entries
        window.history.replaceState(null, '', href);
        setCurrentHash(href);
      }
    }
  };

  const navItems = [
    { href: '#', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#training', label: 'Training' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' }
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
              onClick={() => handleNavigation('#')}
              className="text-xl md:text-2xl font-bold text-navy-900 hover:text-gold-700 transition-colors"
            >
              A2B<span className="text-gold-700">folio</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavigation(item.href)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  currentHash === item.href || (item.href === '#' && !currentHash)
                    ? 'bg-gold-700 text-white'
                    : 'text-navy-900 hover:bg-gold-50 hover:text-gold-800'
                }`}
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
                  key={item.href}
                  onClick={() => handleNavigation(item.href)}
                  className={`w-full text-left px-4 py-3 text-base font-medium transition-colors ${
                    currentHash === item.href || (item.href === '#' && !currentHash)
                      ? 'bg-gold-700 text-white'
                      : 'text-gray-900 hover:bg-gray-50'
                  }`}
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