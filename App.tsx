
import React, { useState, useEffect, useCallback } from 'react';
import { PageType } from './types';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import InternshipsPage from './pages/InternshipsPage';
import JobsPage from './pages/JobsPage';
import ContactPage from './pages/ContactPage';
import SignupPage from './pages/SignupPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scroll logic for section transitions
  const navigateTo = (page: PageType) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  // Scroll reveal implementation
  const handleScroll = useCallback(() => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((element) => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('active');
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll, currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <LandingPage onNavigate={navigateTo} />;
      case 'about': return <AboutPage />;
      case 'internships': return <InternshipsPage />;
      case 'jobs': return <JobsPage />;
      case 'contact': return <ContactPage />;
      case 'signup': return <SignupPage onNavigate={navigateTo} />;
      default: return <LandingPage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation 
        currentPage={currentPage} 
        onNavigate={navigateTo} 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      
      <main className="flex-grow pt-20">
        <div className="transition-all duration-500 ease-in-out">
          {renderPage()}
        </div>
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
