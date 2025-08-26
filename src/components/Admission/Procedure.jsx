import React from 'react';
import { User, FileText, BookOpen, Award } from 'lucide-react';

// --- Admission Procedure Section Component ---
export default function AdmissionProcedureSection() {
  // Data for the admission steps
  const steps = [
    {
      icon: <User className="w-8 h-8 text-indigo-600" />,
      title: "Initial Consultation",
      description: "Schedule a free meeting with our academic counselor to discuss your goals and learning needs."
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-600" />,
      title: "Assessment Test",
      description: "Take a short diagnostic test to help us understand your current knowledge and identify areas for improvement."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-pink-600" />,
      title: "Enroll & Get Started",
      description: "Complete the enrollment process, choose your plan, and get immediate access to our learning platform."
    },
    {
      icon: <Award className="w-8 h-8 text-orange-600" />,
      title: "Begin Your First Class",
      description: "Join your first live class with our expert tutor and start your journey to mastering physics!"
    }
  ];

  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
            Admission <span className="text-indigo-600">Procedure</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Our admission process is simple and transparent, designed to get you started on your learning journey smoothly.
          </p>
        </div>

        <div className="relative">
          {/* The connecting line for desktop view */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-slate-200"></div>
          
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center">
                {/* Step Circle */}
                <div className="relative z-10 flex items-center justify-center w-24 h-24 bg-white border-4 border-slate-200 rounded-full shadow-lg">
                  {step.icon}
                </div>
                {/* Step Number for mobile */}
                <div className="md:hidden absolute -left-4 top-8 flex items-center justify-center w-10 h-10 bg-indigo-600 text-white font-bold rounded-full">
                  {index + 1}
                </div>
                {/* Connecting line for mobile view */}
                {index < steps.length - 1 && (
                  <div className="md:hidden mt-4 h-16 w-1 bg-slate-200"></div>
                )}
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
