import React, { useState } from 'react';
import { Phone, MessageSquare, Mail, MapPin, Send, ChevronDown, ChevronUp } from 'lucide-react';

// --- Main Contact Page Component ---
export default function ContactUsPage() {
  return (
    <main className="bg-slate-50">
      <ContactHeader />
      <ContactGrid />
      <FAQSection />
    </main>
  );
}

// --- Header Component ---
const ContactHeader = () => (
  <div className="text-center pt-16 md:pt-24 pb-12">
    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
      Get In <span className="text-indigo-600">Touch</span>
    </h2>
    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto px-4">
      Have a question or need more information? We're here to help. Reach out to us through any of the channels below.
    </p>
  </div>
);

// --- Main Grid Layout for Contact Info and Form ---
const ContactGrid = () => (
  <div className="container mx-auto px-4 pb-16 md:pb-24">
    <div className="grid lg:grid-cols-2 gap-10">
      <DirectContactOptions />
      <ContactForm />
    </div>
  </div>
);

// --- Direct Contact Options Component (Call, WhatsApp, etc.) ---
const DirectContactOptions = () => {
  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6 text-green-600" />,
      bgColor: "bg-green-100",
      title: "Call Us",
      text: "Speak directly with our support team.",
      link: "tel:+919876543210",
      linkText: "+91 98765 43210"
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-emerald-600" />,
      bgColor: "bg-emerald-100",
      title: "Connect on WhatsApp",
      text: "Chat with us for quick inquiries.",
      link: "https://wa.me/919876543210",
      linkText: "Start a Chat"
    },
    {
      icon: <Mail className="w-6 h-6 text-sky-600" />,
      bgColor: "bg-sky-100",
      title: "Email Us",
      text: "Send your questions via email.",
      link: "mailto:contact@physicshelper.com",
      linkText: "contact@physicshelper.com"
    },
    {
      icon: <MapPin className="w-6 h-6 text-indigo-600" />,
      bgColor: "bg-indigo-100",
      title: "Our Location",
      text: "123, ABC Road, Behala, Kolkata",
      link: "https://maps.google.com/?q=Kolkata",
      linkText: "Get Directions"
    }
  ];

  return (
    <div className="space-y-6">
      {contactMethods.map((method, index) => (
        <a key={index} href={method.link} target="_blank" rel="noopener noreferrer" className="bg-white border border-slate-200 rounded-xl p-6 flex items-start hover:shadow-lg hover:border-indigo-300 transition-all duration-300 transform hover:-translate-y-1 group">
          <div className={`p-3 ${method.bgColor} rounded-full mr-5`}>
            {method.icon}
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-800">{method.title}</h3>
            <p className="text-slate-600 mb-2">{method.text}</p>
            <span className="font-semibold text-indigo-600 group-hover:underline">{method.linkText}</span>
          </div>
        </a>
      ))}
    </div>
  );
};

// --- Contact Form Component ---
const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent!\n\nName: ${formData.name}\nEmail: ${formData.email}`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-8 h-full">
      <h3 className="text-2xl font-bold text-slate-800 mb-6">Send us a Message</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
          <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required className="w-full p-3 border border-slate-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required className="w-full p-3 border border-slate-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Your Message</label>
          <textarea name="message" id="message" rows="6" value={formData.message} onChange={handleChange} placeholder="How can we help you?" required className="w-full p-3 border border-slate-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"></textarea>
        </div>
        <button type="submit" className="w-full flex items-center justify-center bg-indigo-500 text-white px-5 py-3 rounded-lg font-semibold hover:bg-indigo-600 transition-all duration-300">
          <Send size={18} className="mr-2" />
          Send Message
        </button>
      </form>
    </div>
  );
};

// --- FAQ Section Component ---
const FAQSection = () => {
  const faqs = [
    { question: "What are the timings for the classes?", answer: "Classes are typically held in the evenings on weekdays (4 PM - 8 PM) and on weekends (10 AM - 4 PM). A detailed schedule is provided upon enrollment." },
    { question: "Is there a discount for yearly payment?", answer: "Yes, we offer a significant discount for students who opt for the yearly plan. Please check the 'Fee Structure' section for more details." },
    { question: "How are doubt-clearing sessions conducted?", answer: "We conduct dedicated doubt-clearing sessions every week. Students can also ask questions during live classes or post them on our student portal for a quick response." },
    { question: "Can I get a demo class before enrolling?", answer: "Absolutely! We encourage students to take a free demo class to experience our teaching methodology. Please contact us to schedule one." }
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
            Frequently Asked <span className="text-indigo-600">Questions</span>
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Reusable FAQ Item (Accordion) ---
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 py-4">
      <button
        className="w-full flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="text-lg font-semibold text-slate-800">{question}</h4>
        {isOpen ? <ChevronUp className="w-5 h-5 text-indigo-500 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-500 flex-shrink-0" />}
      </button>
      <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
          <div className="overflow-hidden">
            <p className="pt-3 text-slate-600">{answer}</p>
          </div>
      </div>
    </div>
  );
};
