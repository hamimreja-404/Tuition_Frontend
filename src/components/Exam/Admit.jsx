import React, { useState } from 'react';
import { Download, User, Calendar, Lock } from 'lucide-react';

// --- Download Admit Card Section Component ---
export default function DownloadAdmitCardSection() {
  const [applicationId, setApplicationId] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would validate the inputs and make an API call
    // to a secure endpoint to fetch and download the admit card.
    if (applicationId && dob && password) {
      alert(`Downloading admit card for Application ID: ${applicationId}`);
      // Reset form after submission
      setApplicationId('');
      setDob('');
      setPassword('');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
            Download <span className="text-indigo-600">Admit Card</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Enter your details below to download the admit card for your registered exam.
          </p>
        </div>

        <div className="max-w-lg mx-auto bg-slate-50 border border-slate-200 rounded-xl shadow-sm p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="applicationId" className="block text-sm font-medium text-slate-700 mb-2">
                Application ID
              </label>
              <div className="relative">
                <User className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  id="applicationId"
                  value={applicationId}
                  onChange={(e) => setApplicationId(e.target.value)}
                  placeholder="Enter your application ID"
                  className="w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="dob" className="block text-sm font-medium text-slate-700 mb-2">
                Date of Birth
              </label>
              <div className="relative">
                <Calendar className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="date"
                  id="dob"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
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
              Download Admit Card
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
