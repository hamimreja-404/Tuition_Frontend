import React from 'react';
import { Award, Users, Target } from 'lucide-react';

// --- About Section Component ---
export default function AboutSection() {
  const stats = [
    {
      icon: <Award size={32} className="text-indigo-500" />,
      value: "5+",
      label: "Years of Experience"
    },
    {
      icon: <Users size={32} className="text-purple-500" />,
      value: "10-12",
      label: "Students Selected Annually"
    },
    {
      icon: <Target size={32} className="text-pink-500" />,
      label: "In NEET, JEE & WBJEE"
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Image Section with decorative elements */}
          <div className="relative flex justify-center items-center">
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-slate-100 rounded-full z-0"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 border-8 border-slate-100 rounded-2xl z-0"></div>
            <img 
              src="https://placehold.co/400x500/1E293B/FFFFFF?text=Arghya+Ghose" 
              alt="Educator Arghya Ghose" 
              className="rounded-xl shadow-2xl relative z-10 w-full max-w-sm"
              onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x500/1E293B/FFFFFF?text=Error'; }}
            />
            {/* Physics Graphic Overlay */}
            <div className="absolute -bottom-4 -left-4 z-20 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                <svg className="w-16 h-16 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                    <path d="M9 3.75a7.5 7.5 0 010 16.5" />
                </svg>
            </div>
          </div>

          {/* Text Content Section */}
          <div className="text-center lg:text-left">
            <p className="text-indigo-600 font-semibold mb-2">ABOUT THE EDUCATOR</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Meet Arghya Ghose
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              With over five years of dedicated teaching experience, Arghya Ghose has established himself as a leading mentor for aspiring engineers and doctors. His passion for physics and unique teaching methodology simplifies complex concepts, empowering students to achieve their full potential.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              His student-centric approach focuses on building a robust conceptual foundation, rigorous practice, and personalized doubt-clearing sessions. This has resulted in a consistent track record of success.
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="bg-slate-50 p-4 rounded-lg shadow-sm">
                  <div className="flex justify-center mb-2">
                    {stat.icon}
                  </div>
                  {stat.value && <p className="text-2xl font-bold text-slate-800">{stat.value}</p>}
                  <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
