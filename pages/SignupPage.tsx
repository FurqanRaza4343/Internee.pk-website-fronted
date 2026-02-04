
import React, { useState } from 'react';
import { PageType, SignupFormData } from '../types';

interface SignupPageProps {
  onNavigate: (page: PageType) => void;
}

const SignupPage: React.FC<SignupPageProps> = ({ onNavigate }) => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState<SignupFormData>({
    fullName: '',
    phoneNumber: '',
    whatsappNumber: '',
    email: '',
    githubUrl: '',
    linkedinUrl: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600 rounded-full blur-[150px] opacity-20 translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-xl w-full relative z-10">
        <div className="bg-white rounded-[40px] shadow-2xl p-8 md:p-12 animate-in zoom-in-95 duration-500">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Create Account</h1>
            <p className="text-slate-500 font-medium">Join 15,000+ students on Internee.pk</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {[
              { id: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Hammad Sheikh' },
              { id: 'phoneNumber', label: 'Phone Number', type: 'tel', placeholder: '+92 3XX XXXXXXX' },
              { id: 'whatsappNumber', label: 'WhatsApp Number', type: 'tel', placeholder: '+92 3XX XXXXXXX' },
              { id: 'email', label: 'Email Address', type: 'email', placeholder: 'name@example.com' },
              { id: 'githubUrl', label: 'GitHub Profile URL', type: 'url', placeholder: 'https://github.com/username' },
              { id: 'linkedinUrl', label: 'LinkedIn Profile URL', type: 'url', placeholder: 'https://linkedin.com/in/username' },
            ].map((field) => (
              <div key={field.id} className="relative group">
                <input
                  type={field.type}
                  id={field.id}
                  required
                  value={(formData as any)[field.id]}
                  onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                  className="peer w-full px-5 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:outline-none focus:border-blue-600 focus:bg-white placeholder-transparent transition-all pt-7"
                  placeholder={field.placeholder}
                />
                <label
                  htmlFor={field.id}
                  className="absolute left-5 top-2 text-xs font-bold text-blue-600 uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:font-medium peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:font-bold peer-focus:text-blue-600"
                >
                  {field.label}
                </label>
              </div>
            ))}

            <div className="pt-4">
              <button 
                type="submit"
                className="w-full py-5 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 hover:shadow-blue-200 active:scale-[0.98]"
              >
                Register Account
              </button>
            </div>
            
            <p className="text-center text-sm text-slate-500">
              Already have an account? <button type="button" onClick={() => onNavigate('home')} className="text-blue-600 font-bold hover:underline">Log in</button>
            </p>
          </form>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={() => setShowModal(false)}
          ></div>
          <div className="bg-white max-w-sm w-full rounded-3xl p-8 relative z-10 shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-10 duration-500">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-center mb-2">Registration Success!</h3>
            <p className="text-slate-500 text-center mb-8">Welcome aboard, {formData.fullName.split(' ')[0]}! Check your email to verify your account.</p>
            <button 
              onClick={() => onNavigate('home')}
              className="w-full py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all"
            >
              Go to Dashboard
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignupPage;
