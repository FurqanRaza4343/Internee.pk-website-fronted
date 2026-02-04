
import React from 'react';
import { TEAM_DETAILS } from '../constants.tsx';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">About <span className="text-blue-600">Internee.pk</span></h1>
          <p className="max-w-3xl mx-auto text-xl text-slate-600">Developing the next generation of tech leaders in Pakistan.</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
              <h2 className="text-3xl font-bold mb-6">Bridging the Gap Between Education and Industry</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Internee.pk was born out of a simple observation: students in Pakistan graduate with great theoretical knowledge but lack the practical experience that top-tier companies demand. 
              </p>
              <p className="text-slate-600 leading-relaxed">
                We exist to solve this "Catch-22" where you need experience to get a job, but you need a job to get experience. By providing curated, project-based internships, we give students the tools to build real proof of work.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 reveal">
              <div className="p-8 bg-blue-600 text-white rounded-3xl shadow-xl">
                <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                <p className="text-blue-50">To provide 1 million Pakistani students with practical industry experience by 2030, fostering an ecosystem of innovation and economic growth.</p>
              </div>
              <div className="p-8 bg-slate-900 text-white rounded-3xl shadow-xl">
                <h3 className="text-xl font-bold mb-4">Our Vision</h3>
                <p className="text-slate-400">A Pakistan where every graduate is industry-ready and competitive on a global scale through hands-on learning and mentorship.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-16">Meet Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="p-10 bg-white rounded-3xl shadow-xl reveal group hover:-translate-y-2 transition-all">
              <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center text-blue-600 font-bold text-3xl">HS</div>
              <h3 className="text-2xl font-bold mb-2">{TEAM_DETAILS.ceo.name}</h3>
              <p className="text-blue-600 font-bold mb-4">{TEAM_DETAILS.ceo.role}</p>
              <p className="text-slate-500">{TEAM_DETAILS.ceo.bio}</p>
            </div>
            <div className="p-10 bg-white rounded-3xl shadow-xl reveal group hover:-translate-y-2 transition-all" style={{ transitionDelay: '0.1s' }}>
              <div className="w-24 h-24 bg-slate-100 rounded-full mx-auto mb-6 flex items-center justify-center text-slate-600 font-bold text-3xl">RS</div>
              <h3 className="text-2xl font-bold mb-2">{TEAM_DETAILS.cofounder.name}</h3>
              <p className="text-blue-600 font-bold mb-4">{TEAM_DETAILS.cofounder.role}</p>
              <p className="text-slate-500">{TEAM_DETAILS.cofounder.bio}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className="text-3xl font-bold mb-16">The Future Roadmap</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 p-8 bg-slate-50 rounded-2xl border-l-4 border-blue-600">
              <h4 className="text-xl font-bold mb-2">2024: Expansion</h4>
              <p className="text-slate-600">Launching 50 new internship categories and partnering with major tech hubs across Punjab and Sindh.</p>
            </div>
            <div className="flex-1 p-8 bg-slate-50 rounded-2xl border-l-4 border-emerald-600">
              <h4 className="text-xl font-bold mb-2">2025: Global Outreach</h4>
              <p className="text-slate-600">Connecting Pakistani talent with remote internship opportunities in Silicon Valley and Europe.</p>
            </div>
            <div className="flex-1 p-8 bg-slate-50 rounded-2xl border-l-4 border-amber-600">
              <h4 className="text-xl font-bold mb-2">2026: AI Integration</h4>
              <p className="text-slate-600">Launching an AI-powered skill matching engine to automate the placement of top talent into high-growth jobs.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
