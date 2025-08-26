import React from 'react';
import { Edit, Calendar, Clock } from 'lucide-react';

// --- Apply for Upcoming Exams Section Component ---
export default function ApplyForExamSection() {
  // Data for upcoming exams. You can fetch this from an API.
  const upcomingExams = [
    {
      title: "All India Mock Test (JEE Main)",
      registrationCloses: "2025-09-15",
      examDate: "2025-09-20",
      status: "open"
    },
    {
      title: "All India Mock Test (NEET)",
      registrationCloses: "2025-09-22",
      examDate: "2025-09-28",
      status: "open"
    },
    {
      title: "WBJEE Practice Exam",
      registrationCloses: "2025-10-01",
      examDate: "2025-10-05",
      status: "open"
    },
    {
      title: "Class XI Half-Yearly Test",
      registrationCloses: "2025-08-25",
      examDate: "2025-09-01",
      status: "closed"
    }
  ];

  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
            Apply for <span className="text-indigo-600">Upcoming Exams</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Register for our upcoming mock tests and practice exams to benchmark your preparation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {upcomingExams.map((exam, index) => (
            <ExamCard key={index} exam={exam} />
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Reusable Exam Card Component ---
const ExamCard = ({ exam }) => {
  const isRegistrationOpen = exam.status === 'open';

  return (
    <div className={`
      bg-white border rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 
      flex flex-col p-6 group
      ${isRegistrationOpen ? 'border-slate-200' : 'border-slate-100 bg-slate-50'}
    `}>
      <div className="flex items-center mb-4">
        <div className={`p-3 rounded-full ${isRegistrationOpen ? 'bg-indigo-100' : 'bg-slate-200'}`}>
          <Edit className={`w-6 h-6 ${isRegistrationOpen ? 'text-indigo-600' : 'text-slate-500'}`} />
        </div>
        <h3 className={`text-xl font-bold ml-4 ${isRegistrationOpen ? 'text-slate-800' : 'text-slate-500'}`}>
          {exam.title}
        </h3>
      </div>
      
      <div className="space-y-3 text-sm text-slate-600 mb-6 flex-grow">
        <div className="flex items-center">
            <Calendar size={16} className="mr-3 text-slate-400"/>
            <span><strong>Exam Date:</strong> {new Date(exam.examDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
        </div>
        <div className="flex items-center">
            <Clock size={16} className="mr-3 text-slate-400"/>
            <span><strong>Registration Closes:</strong> {new Date(exam.registrationCloses).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
        </div>
      </div>

      <button
        disabled={!isRegistrationOpen}
        className={`
          mt-auto w-full text-center px-5 py-3 rounded-lg font-semibold transition-all duration-300
          ${isRegistrationOpen 
            ? 'bg-indigo-500 text-white hover:bg-indigo-600 transform group-hover:scale-105' 
            : 'bg-slate-300 text-slate-500 cursor-not-allowed'
          }
        `}
      >
        {isRegistrationOpen ? 'Apply Now' : 'Registration Closed'}
      </button>
    </div>
  );
};
