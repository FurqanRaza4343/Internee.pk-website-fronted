
import React from 'react';
import { PageType } from '../types';

interface NavigationProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (val: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate, isMenuOpen, setIsMenuOpen }) => {
  const navItems: { label: string; value: PageType }[] = [
    { label: 'Home', value: 'home' },
    { label: 'About', value: 'about' },
    { label: 'Internships', value: 'internships' },
    { label: 'Jobs', value: 'jobs' },
    { label: 'Contact', value: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
              I
            </div>
            <span className="text-2xl font-extrabold tracking-tight">
              Internee<span className="text-blue-600">.pk</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => onNavigate(item.value)}
                className={`text-sm font-semibold transition-colors hover:text-blue-600 ${
                  currentPage === item.value ? 'text-blue-600' : 'text-slate-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => onNavigate('signup')}
              className="px-6 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-full hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 transition-all active:scale-95"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-600 hover:text-blue-600 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-effect border-b border-slate-200 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => onNavigate(item.value)}
                className="block w-full text-left px-3 py-4 text-base font-bold text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => onNavigate('signup')}
              className="mt-4 block w-full px-3 py-4 bg-blue-600 text-white text-base font-bold text-center rounded-lg shadow-md"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
