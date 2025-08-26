import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

// --- Branches Section Component ---
export default function BranchesSection() {
  // Data for the branch cards
  const branchData = [
    {
      city: "Kolkata",
      address: "123, ABC Road, Behala, Kolkata, West Bengal 700034",
      phone: "+91 98765 43210",
      email: "kolkata@physicshelper.com",
      mapLink: "https://maps.google.com/?q=Kolkata"
    },
    {
      city: "Malda",
      address: "456, XYZ Lane, English Bazar, Malda, West Bengal 732101",
      phone: "+91 98765 43211",
      email: "malda@physicshelper.com",
      mapLink: "https://maps.google.com/?q=Malda"
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
            Our <span className="text-indigo-600">Branches</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Find our state-of-the-art learning centers, conveniently located to serve students across the region.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {branchData.map((branch, index) => (
            <BranchCard key={index} branch={branch} />
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Reusable Branch Card Component ---
const BranchCard = ({ branch }) => (
  <div className="bg-slate-50 border border-slate-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col p-8 group">
    <div className="flex items-center mb-4">
      <div className="p-3 bg-indigo-100 rounded-full">
        <MapPin className="w-6 h-6 text-indigo-600" />
      </div>
      <h3 className="text-2xl font-bold text-slate-800 ml-4">
        {branch.city}
      </h3>
    </div>
    <p className="text-slate-600 mb-6 flex-grow">
      {branch.address}
    </p>
    <div className="space-y-3 text-sm text-slate-700 mb-6">
        <div className="flex items-center">
            <Phone size={16} className="mr-3 text-slate-400"/>
            <span>{branch.phone}</span>
        </div>
        <div className="flex items-center">
            <Mail size={16} className="mr-3 text-slate-400"/>
            <span>{branch.email}</span>
        </div>
    </div>
    <a
      href={branch.mapLink}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-auto w-full text-center bg-indigo-500 text-white px-5 py-3 rounded-lg font-semibold hover:bg-indigo-600 transition-all duration-300 transform group-hover:scale-105"
    >
      Get Directions
    </a>
  </div>
);
