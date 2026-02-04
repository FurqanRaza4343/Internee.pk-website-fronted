
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Info Column */}
            <div className="reveal">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-8">Get in <span className="text-blue-600">Touch</span></h1>
              <p className="text-slate-600 text-lg mb-12">Have a question about our programs? Our team is here to help you navigate your tech career journey.</p>
              
              <div className="space-y-10">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-md">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Email Us</h4>
                    <p className="text-slate-600">support@internee.pk</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-emerald-600 shadow-md">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Call Support</h4>
                    <p className="text-slate-600">+92 (312) 1234567</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-amber-600 shadow-md">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Bank Details (Placeholder)</h4>
                    <p className="text-slate-600 text-sm">HBL Pakistan - Internee PVT LTD<br />Acc: 1234-5678-9012-3456</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-16">
                <h4 className="font-bold text-slate-900 mb-6">Follow Our Journey</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center hover:bg-blue-600 transition-all transform hover:-translate-y-1 shadow-lg shadow-slate-200">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  <a href="#" className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center hover:bg-pink-600 transition-all transform hover:-translate-y-1 shadow-lg shadow-slate-200">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="bg-white p-10 rounded-[40px] shadow-2xl shadow-slate-200 border border-slate-100">
                {submitted ? (
                  <div className="text-center py-12 animate-in fade-in duration-500">
                    <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-slate-500">We've received your request and will get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all"
                        placeholder="e.g. Hammad Sheikh"
                        onChange={e => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                      <input 
                        type="email" 
                        required
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all"
                        placeholder="hammad@example.com"
                        onChange={e => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">How can we help?</label>
                      <textarea 
                        required
                        rows={4}
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all resize-none"
                        placeholder="Tell us about your query..."
                        onChange={e => setFormData({...formData, message: e.target.value})}
                      ></textarea>
                    </div>
                    <button className="w-full py-5 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all transform hover:shadow-xl hover:shadow-blue-200 active:scale-95">
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
