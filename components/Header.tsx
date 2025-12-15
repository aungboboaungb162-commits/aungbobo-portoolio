// components/Header.tsx - History PushState Fixes Applied
'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && !(event.target as Element).closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    setActiveDropdown(null);

    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // Hash ကို ရှင်းထုတ်ပါ
      if (window.history.pushState) {
        window.history.pushState(null, '', '/'); 
      }
      return;
    }

    // Smooth scroll logic
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const targetPosition = (targetElement as HTMLElement).offsetTop - 80;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });

      // 🚨 FIX: Hash ကို History Stack ထဲ ထည့်သွင်းခြင်း
      // ၎င်းသည် Back Button ကို နှိပ်လျှင် ယခင် Section သို့ ပြန်သွားစေမည်
      if (window.history.pushState) {
        window.history.pushState(null, '', href);
      } else {
        // Fallback for older browsers (URL hash change)
        window.location.hash = href; 
      }
    }
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
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
              onClick={() => scrollToSection('#')}
              className="text-xl md:text-2xl font-bold text-navy-900 hover:text-gold-700 transition-colors"
            >
              A2B<span className="text-gold-700">folio</span>
              {/* 💡 Contrast Fix: text-gold-600 ကို text-gold-700 သို့ ပြင်ဆင်ထားသည် */}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  pathname === item.href
                    ? 'bg-gold-700 text-white' // 💡 Contrast Fix: bg-gold-600 ကို bg-gold-700 သို့ ပြင်ဆင်ထားသည်
                    : 'text-navy-900 hover:bg-gold-50 hover:text-gold-800' // 💡 Contrast Fix: hover:text-gold-700 ကို text-gold-800 သို့ ပြင်ဆင်ထားသည်
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
                  onClick={() => scrollToSection(item.href)}
                  className={`w-full text-left px-4 py-3 text-base font-medium transition-colors ${
                    pathname === item.href
                      ? 'bg-gold-700 text-white' // 💡 Contrast Fix: bg-gold-600 ကို bg-gold-700 သို့ ပြင်ဆင်ထားသည်
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