import React from 'react';
import { ArrowRight, Edit } from 'lucide-react';

// --- Hero Section Component ---
export default function HeroSection() {
  return (
    <section className="bg-slate-50">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-800 mb-6 leading-tight">
              Master Physics for <span className="text-indigo-600">JEE, NEET & Boards</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto md:mx-0">
              Expert guidance for Class XI & XII students. Build a strong foundation, crack competitive exams, and excel in your academic journey with The Physics Helper.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="flex items-center justify-center bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-700 transition-transform transform hover:scale-105 shadow-lg">
                Enroll Now <ArrowRight size={20} className="ml-2" />
              </button>
              <button className="flex items-center justify-center bg-white text-indigo-600 font-bold py-3 px-8 rounded-lg border-2 border-indigo-200 hover:bg-indigo-50 transition-all transform hover:scale-105 shadow-lg">
                Take a Free Mock Test <Edit size={20} className="ml-2" />
              </button>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="hidden md:block">
            {/* You can replace this SVG with a high-quality image or illustration */}
            <div className="relative w-full h-full flex items-center justify-center">
                 <div className="absolute w-40 h-40 bg-indigo-200 rounded-full -top-10 -left-10 animate-pulse"></div>
                 <div className="absolute w-32 h-32 bg-purple-200 rounded-full -bottom-10 -right-10 animate-pulse delay-75"></div>
                <img 
                    src="https://placehold.co/500x500/E9D5FF/4F46E5?text=Physics+Genius" 
                    alt="Physics Tuition Illustration" 
                    className="rounded-2xl shadow-2xl relative z-10 w-full max-w-md"
                    onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/500x500/E9D5FF/4F46E5?text=Error'; }}
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
