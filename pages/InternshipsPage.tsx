
import React from 'react';
import { INTERNSHIPS } from '../constants.tsx';

const InternshipsPage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Available Internships</h1>
          <p className="max-w-2xl mx-auto text-xl text-blue-100">Browse our curated selection of high-impact roles and start building your legacy.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {INTERNSHIPS.map((internship, index) => (
              <div 
                key={internship.id} 
                className="bg-white rounded-3xl p-8 shadow-lg shadow-slate-200 hover:shadow-2xl hover:shadow-blue-100 transition-all border border-slate-100 flex flex-col h-full reveal"
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <div className="mb-6">
                  <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full mb-4">
                    {internship.duration}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{internship.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{internship.description}</p>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Skills to Learn</h4>
                    <div className="flex flex-wrap gap-2">
                      {internship.skills.map(skill => (
                        <span key={skill} className="px-3 py-1 bg-slate-50 text-slate-700 text-xs font-semibold rounded-lg border border-slate-200">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Outcomes</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      {internship.outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button className="w-full py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-blue-600 transition-all active:scale-95">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-amber-50 border border-amber-100 p-8 rounded-3xl flex items-center gap-6 reveal">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center shrink-0">
              <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div>
              <h4 className="text-lg font-bold text-amber-900 mb-1">Important Note</h4>
              <p className="text-amber-800 text-sm">Applications are reviewed on a rolling basis. Ensure your GitHub and LinkedIn profiles are updated before applying for technical roles.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InternshipsPage;
