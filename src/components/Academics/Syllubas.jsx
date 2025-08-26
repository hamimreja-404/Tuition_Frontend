import React from 'react';
import { Book, Download, Target } from 'lucide-react';

// --- Syllabus Section Component ---
export default function SyllabusSection() {
  // Data for the syllabus cards. Replace '#' with your actual PDF file paths.
  const syllabusData = [
    {
      title: "Class XI Physics",
      description: "Complete CBSE & State Board syllabus covering all fundamental concepts.",
      icon: <Book size={32} className="text-indigo-500" />,
      downloadLink: "/path/to/class-xi-syllabus.pdf"
    },
    {
      title: "Class XII Physics",
      description: "Advanced topics for board examinations, building a strong base for competitive tests.",
      icon: <Book size={32} className="text-purple-500" />,
      downloadLink: "/path/to/class-xii-syllabus.pdf"
    },
    {
      title: "NEET Physics",
      description: "Focused syllabus covering all topics as per the latest NTA guidelines for medical aspirants.",
      icon: <Target size={32} className="text-pink-500" />,
      downloadLink: "/path/to/neet-syllabus.pdf"
    },
    {
      title: "JEE (Main & Adv) Physics",
      description: "Comprehensive syllabus for engineering aspirants, covering in-depth concepts and problem-solving.",
      icon: <Target size={32} className="text-orange-500" />,
      downloadLink: "/path/to/jee-syllabus.pdf"
    }
  ];

  const handleDownload = (url, filename) => {
    if (!url || url.startsWith('/path/to/')) {
        alert('Download link is not available yet.');
        return;
    }
    const link = document.createElement("a");
    link.href = url;
    link.download = filename || "syllabus.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
            Course <span className="text-indigo-600">Syllabus</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Download the detailed syllabus for your respective courses to stay ahead in your preparation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {syllabusData.map((item, index) => (
            <SyllabusCard 
              key={index}
              item={item}
              onDownload={handleDownload}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Reusable Syllabus Card Component ---
const SyllabusCard = ({ item, onDownload }) => (
  <div className="bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col p-6 text-center group">
    <div className="flex justify-center items-center h-20 w-20 bg-white rounded-full mx-auto mb-4 shadow-md">
      {item.icon}
    </div>
    <h3 className="text-xl font-bold text-slate-800 mb-2">
      {item.title}
    </h3>
    <p className="text-slate-600 flex-grow mb-6">
      {item.description}
    </p>
    <button
      onClick={() => onDownload(item.downloadLink, `${item.title.replace(/ /g, '-')}-Syllabus.pdf`)}
      className="mt-auto w-full flex items-center justify-center bg-white text-indigo-600 border-2 border-indigo-200 px-4 py-2 rounded-lg font-semibold hover:bg-indigo-500 hover:text-white hover:border-indigo-500 transition-all duration-300 transform group-hover:scale-105"
    >
      <Download size={16} className="mr-2" />
      Download PDF
    </button>
  </div>
);
