import React from 'react';
import { BookOpen, Crosshair, Zap, Award } from 'lucide-react';

// --- Classes Offered Section Component ---
export default function ClassesSection() {
  // Data for the classes offered cards
  const classesData = [
    {
      title: "Class XI (Foundation)",
      description: "Building a rock-solid conceptual foundation in physics to excel in school exams and prepare for future competitive tests.",
      icon: <BookOpen size={32} />,
      color: "indigo",
    },
    {
      title: "Class XII (Boards)",
      description: "Comprehensive coverage of the Class XII syllabus with a focus on mastering topics for board examinations.",
      icon: <Award size={32} />,
      color: "purple",
    },
    {
      title: "NEET (Medical)",
      description: "A specialized curriculum with rigorous testing and strategic preparation to crack the medical entrance examination.",
      icon: <Crosshair size={32} />,
      color: "pink",
    },
    {
      title: "JEE Main & Advanced",
      description: "Advanced problem-solving techniques and in-depth conceptual clarity for aspiring engineering students.",
      icon: <Zap size={32} />,
      color: "orange",
    }
  ];

  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
            Classes We <span className="text-indigo-600">Offer</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Structured courses designed to cater to the unique needs of every student, from board exams to top competitive tests.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {classesData.map((item, index) => (
            <ClassCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Reusable Class Card Component ---
const ClassCard = ({ item }) => {
  // Dynamic classes for theming based on item.color
  const colorClasses = {
    iconText: `text-${item.color}-500`,
    bg: `bg-${item.color}-50`,
    border: `border-${item.color}-200`,
    hoverBorder: `hover:border-${item.color}-500`,
  };

  return (
    <div className={`
      ${colorClasses.bg} 
      ${colorClasses.border} 
      ${colorClasses.hoverBorder}
      border-2 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col p-6 text-center group transform hover:-translate-y-2
    `}>
      <div className={`flex justify-center items-center h-20 w-20 bg-white rounded-full mx-auto mb-5 shadow-md border-4 ${colorClasses.border}`}>
        <div className={colorClasses.iconText}>{item.icon}</div>
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-3">
        {item.title}
      </h3>
      <p className="text-slate-600 flex-grow">
        {item.description}
      </p>
    </div>
  );
};
