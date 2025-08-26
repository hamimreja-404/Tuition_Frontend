import React from 'react';
import { Calendar, Shield, Award, CheckCircle } from 'lucide-react';

// --- Fee Structure Section Component ---
export default function FeeStructureSection() {
  // Data for the pricing plans
  const plans = [
    {
      title: "Monthly Plan",
      price: "150",
      duration: "/month",
      features: [
        "8 Live Classes",
        "Weekly Quizzes",
        "Doubt Clearing Sessions",
        "Access to Recorded Lectures"
      ],
      icon: <Calendar className="w-8 h-8 text-indigo-500" />,
      color: "indigo",
      popular: false
    },
    {
      title: "Quarterly Plan",
      price: "400",
      duration: "/quarter",
      features: [
        "24 Live Classes",
        "Bi-Weekly Mock Tests",
        "Personalized Mentorship",
        "All Monthly Plan Benefits"
      ],
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      color: "purple",
      popular: true
    },
    {
      title: "Yearly Plan",
      price: "1200",
      duration: "/year",
      features: [
        "96+ Live Classes",
        "Full Syllabus Coverage",
        "Dedicated Exam Prep",
        "All Quarterly Plan Benefits"
      ],
      icon: <Award className="w-8 h-8 text-pink-500" />,
      color: "pink",
      popular: false
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
            Transparent <span className="text-indigo-600">Fee Structure</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Choose a plan that best fits your learning needs. No hidden costs, just quality education.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Reusable Pricing Card Component ---
const PricingCard = ({ plan }) => {
    
  const colorClasses = {
    border: plan.popular ? `border-${plan.color}-500` : 'border-slate-200',
    buttonBg: `bg-${plan.color}-500`,
    buttonHoverBg: `hover:bg-${plan.color}-600`,
    popularBg: `bg-${plan.color}-500`,
    iconBg: `bg-${plan.color}-100`
  };

  return (
    <div className={`relative border-2 ${colorClasses.border} rounded-xl shadow-lg bg-white flex flex-col transform hover:scale-105 transition-transform duration-300`}>
      {plan.popular && (
        <div className={`absolute top-0 right-6 -mt-4 text-white text-sm font-bold px-4 py-1 rounded-full shadow-md ${colorClasses.popularBg}`}>
          Most Popular
        </div>
      )}
      <div className="p-8 flex-grow flex flex-col">
        <div className="flex items-center mb-6">
          <div className={`p-3 rounded-full mr-4 ${colorClasses.iconBg}`}>
            {plan.icon}
          </div>
          <h3 className="text-2xl font-bold text-slate-800">{plan.title}</h3>
        </div>
        <div className="mb-6">
          <span className="text-5xl font-extrabold text-slate-900">${plan.price}</span>
          <span className="text-slate-500 font-medium">{plan.duration}</span>
        </div>
        <ul className="space-y-4 mb-8 text-slate-600 flex-grow">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <button className={`w-full ${colorClasses.buttonBg} text-white font-bold py-3 px-6 rounded-lg ${colorClasses.buttonHoverBg} transition-colors duration-300 shadow-md`}>
          Choose Plan
        </button>
      </div>
    </div>
  );
};
