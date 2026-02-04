
import React from 'react';

const JobsPage: React.FC = () => {
  const steps = [
    {
      title: "Enroll in Internship",
      description: "Select a specialized track and begin your 2-4 month journey of hands-on project work.",
      status: "Step 01"
    },
    {
      title: "Performance Review",
      description: "Our mentors evaluate your code quality, communication skills, and project deliveries.",
      status: "Step 02"
    },
    {
      title: "Get Certified",
      description: "Receive a globally recognized certificate and a recommendation letter from industry experts.",
      status: "Step 03"
    },
    {
      title: "Partner Matching",
      description: "We share your profile with our 200+ partner companies for direct interview opportunities.",
      status: "Step 04"
    },
    {
      title: "Secure Your Career",
      description: "Land your dream job with a portfolio that speaks louder than your resume.",
      status: "Step 05"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8">Your Career <span className="text-blue-500">Pathway</span></h1>
          <p className="max-w-2xl mx-auto text-xl text-slate-400">At Internee.pk, an internship is just the beginning. We build pipelines to professional success.</p>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10">
          <div className="grid grid-cols-6 h-full">
            {[...Array(6)].map((_, i) => <div key={i} className="border-r border-slate-700"></div>)}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-8 reveal">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold shrink-0 shadow-lg shadow-blue-200">
                    {index + 1}
                  </div>
                  {index !== steps.length - 1 && <div className="w-1 h-full bg-slate-100 my-4 rounded-full"></div>}
                </div>
                <div className="pb-8">
                  <span className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2 block">{step.status}</span>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-12 rounded-[40px] shadow-2xl shadow-slate-200 border border-slate-100 flex flex-col md:flex-row items-center gap-12 reveal">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Proven Success Records</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Our graduates have been hired by industry giants and fast-growing startups. 85% of our top-performing interns secure a job within 3 months of completion.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-slate-50 rounded-2xl">
                  <div className="text-2xl font-bold text-blue-600">85%</div>
                  <div className="text-xs text-slate-500 font-bold uppercase">Placement Rate</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl">
                  <div className="text-2xl font-bold text-emerald-600">PKR 70k+</div>
                  <div className="text-xs text-slate-500 font-bold uppercase">Avg starting Salary</div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-video bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400 font-bold italic">
                  Partner {i} Logo
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobsPage;
