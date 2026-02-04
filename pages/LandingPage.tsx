
import React, { useEffect, useState } from 'react';
import { PageType } from '../types';

interface LandingPageProps {
  onNavigate: (page: PageType) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  const [counts, setCounts] = useState({ interns: 0, jobs: 0, partners: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prev => ({
        interns: Math.min(prev.interns + 125, 15000),
        jobs: Math.min(prev.jobs + 15, 2500),
        partners: Math.min(prev.partners + 5, 200)
      }));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center py-20 bg-white">
        {/* Animated Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-[100px] opacity-60 animate-float"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-100 rounded-full blur-[100px] opacity-60 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-bold mb-8 animate-bounce">
              <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
              New Internship Batch starting June 2024
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
              Empowering the Next <br />
              <span className="gradient-text">Generation of Tech</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
              Internee.pk connects the brightest students with world-class internship opportunities. Kickstart your career with real-world projects.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => onNavigate('signup')}
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-200 transition-all transform hover:-translate-y-1"
              >
                Join Now for Free
              </button>
              <button 
                onClick={() => onNavigate('internships')}
                className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 font-bold border-2 border-slate-200 rounded-2xl hover:bg-slate-50 transition-all transform hover:-translate-y-1"
              >
                View Internships
              </button>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
            <div className="p-8 bg-white rounded-3xl shadow-xl shadow-slate-100 border border-slate-100 hover:border-blue-200 transition-all group">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Practical Learning</h3>
              <p className="text-slate-500 leading-relaxed">Don't just learn theory. Build real products that users actually use every day.</p>
            </div>
            <div className="p-8 bg-white rounded-3xl shadow-xl shadow-slate-100 border border-slate-100 hover:border-blue-200 transition-all group">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Career Growth</h3>
              <p className="text-slate-500 leading-relaxed">Top performers get direct job referrals to our network of 200+ partner companies.</p>
            </div>
            <div className="p-8 bg-white rounded-3xl shadow-xl shadow-slate-100 border border-slate-100 hover:border-blue-200 transition-all group">
              <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-all">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Community</h3>
              <p className="text-slate-500 leading-relaxed">Join 15,000+ other students in Pakistan's largest growing tech community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="reveal">
              <div className="text-5xl font-extrabold text-blue-400 mb-2">{counts.interns.toLocaleString()}+</div>
              <div className="text-slate-400 font-medium">Interns Trained</div>
            </div>
            <div className="reveal">
              <div className="text-5xl font-extrabold text-cyan-400 mb-2">{counts.jobs.toLocaleString()}+</div>
              <div className="text-slate-400 font-medium">Job Placements</div>
            </div>
            <div className="reveal">
              <div className="text-5xl font-extrabold text-indigo-400 mb-2">{counts.partners.toLocaleString()}+</div>
              <div className="text-slate-400 font-medium">Partner Companies</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to jumpstart your career?</h2>
          <p className="text-xl text-blue-100 mb-12">Don't wait for opportunities. Create them by joining Internee.pk today.</p>
          <button 
            onClick={() => onNavigate('signup')}
            className="px-12 py-5 bg-white text-blue-600 font-bold rounded-2xl hover:bg-slate-50 transition-all text-lg shadow-xl"
          >
            Create Your Account
          </button>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2"></div>
      </section>
    </div>
  );
};

export default LandingPage;
