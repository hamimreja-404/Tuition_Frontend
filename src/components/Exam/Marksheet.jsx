import React, { useState } from 'react';
import { Download, User, FileText } from 'lucide-react';

// --- Download Marksheet Section Component ---
export default function DownloadMarksheetSection() {
  const [applicationId, setApplicationId] = useState('');
  const [dob, setDob] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would validate the inputs and make an API call
    // to a secure endpoint to fetch and download the marksheet.
    if (applicationId && dob) {
      alert(`Downloading marksheet for Application ID: ${applicationId}`);
      // Reset form after submission
      setApplicationId('');
      setDob('');
    } else {
      alert('Please fill in both fields.');
    }
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
            Download <span className="text-indigo-600">Marksheet</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Enter your details below to view and download your exam marksheet.
          </p>
        </div>

        <div className="max-w-lg mx-auto bg-slate-50 border border-slate-200 rounded-xl shadow-sm p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="applicationIdMarksheet" className="block text-sm font-medium text-slate-700 mb-2">
                Application ID / Roll Number
              </label>
              <div className="relative">
                <User className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  id="applicationIdMarksheet"
                  value={applicationId}
                  onChange={(e) => setApplicationId(e.target.value)}
                  placeholder="Enter your application ID or roll no."
                  className="w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="dobMarksheet" className="block text-sm font-medium text-slate-700 mb-2">
                Date of Birth
              </label>
              <div className="relative">
                <FileText className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="date"
                  id="dobMarksheet"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center bg-indigo-500 text-white px-5 py-3 rounded-lg font-semibold hover:bg-indigo-600 transition-all duration-300"
            >
              <Download size={18} className="mr-2" />
              Download Marksheet
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
