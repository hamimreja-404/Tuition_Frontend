import React, { useState, useEffect, useCallback } from 'react';
import { Target, Award, Users, BookCopy, Star, ChevronRight, ChevronLeft } from 'lucide-react';

// --- Main Component to hold all new sections ---
export default function HomePageAdditions() {
  return (
    <>
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </>
  );
}

// --- "Why Choose Us?" Section (Unchanged) ---
const WhyChooseUs = () => {
  const features = [
    {
      icon: <Award size={32} className="text-indigo-500" />,
      title: "Expert Guidance",
      description: "Learn from Arghya Ghose, an educator with 5+ years of experience and a passion for physics."
    },
    {
      icon: <Target size={32} className="text-purple-500" />,
      title: "Proven Results",
      description: "A consistent track record with 10-12 students selected each year in JEE, NEET, & WBJEE."
    },
    {
      icon: <Users size={32} className="text-pink-500" />,
      title: "Personalized Attention",
      description: "Small batch sizes and dedicated doubt-clearing sessions to focus on individual student needs."
    },
    {
      icon: <BookCopy size={32} className="text-orange-500" />,
      title: "Comprehensive Material",
      description: "Get access to curated study notes, question banks, and regular mock tests."
    }
  ];

  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
            Why Choose <span className="text-indigo-600">The Physics Helper?</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            We provide a learning experience that is effective, engaging, and result-oriented.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-200">
              <div className="flex items-center justify-center h-16 w-16 bg-slate-100 rounded-full mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- MOBILE-FIXED Sliding Student Testimonials Section ---
const Testimonials = () => {
  const testimonials = [
    {
      name: "Ankita Sharma",
      achievement: "Cracked NEET 2024",
      quote: "Arghya sir's teaching methods are phenomenal. He simplifies the toughest topics, which was crucial for my NEET preparation. The regular mock tests were a game-changer.",
      image: "https://placehold.co/100x100/E9D5FF/4F46E5?text=AS&font=lato"
    },
    {
      name: "Rahul Verma",
      achievement: "JEE Advanced AIR 982",
      quote: "The personalized attention I received here is unmatched. Sir was always available to clear my doubts, no matter how small. I owe my success in JEE to his guidance.",
      image: "https://placehold.co/100x100/D1FAE5/10B981?text=RV&font=lato"
    },
    {
      name: "Priya Das",
      achievement: "WBJEE Rank 150",
      quote: "The study materials are very comprehensive and aligned perfectly with the exam patterns. I felt confident and well-prepared thanks to The Physics Helper.",
      image: "https://placehold.co/100x100/FFE4E6/F43F5E?text=PD&font=lato"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
            What Our <span className="text-indigo-600">Students Say</span>
          </h2>
        </div>
        <div className="max-w-3xl mx-auto relative">
          <div className="overflow-hidden rounded-xl relative">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full flex-shrink-0 p-2">
                  <div className="bg-slate-50/60 border border-slate-200/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-center items-center text-center min-h-[320px] sm:min-h-[280px]">
                    <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 rounded-full mb-4 border-4 border-white shadow-lg"/>
                    <div>
                      <h4 className="font-bold text-slate-800 text-lg">{testimonial.name}</h4>
                      <p className="text-sm font-semibold text-indigo-600">{testimonial.achievement}</p>
                    </div>
                    <p className="text-slate-600 text-sm sm:text-base italic mt-4 max-w-xl">"{testimonial.quote}"</p>
                    <div className="flex mt-5">
                      {[...Array(5)].map((_, i) => <Star key={i} size={20} className="text-amber-400 fill-amber-400" />)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button onClick={prevSlide} className="absolute top-1/2 -left-3 md:-left-12 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-slate-100 transition z-10 border border-slate-200">
            <ChevronLeft size={24} className="text-slate-600"/>
          </button>
          <button onClick={nextSlide} className="absolute top-1/2 -right-3 md:-right-12 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-slate-100 transition z-10 border border-slate-200">
            <ChevronRight size={24} className="text-slate-600"/>
          </button>

          {/* Flat Pagination Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button key={index} onClick={() => goToSlide(index)} className={`h-1.5 rounded-sm transition-all duration-300 ${currentIndex === index ? 'bg-indigo-600 w-8' : 'bg-slate-300 w-4 hover:bg-slate-400'}`}></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


// --- Call to Action (CTA) Section (Unchanged) ---
const CTASection = () => {
  return (
    <section className="bg-indigo-600">
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-extrabold text-white">
          Ready to Ace Your Physics Exams?
        </h2>
        <p className="text-indigo-200 mt-4 mb-8 max-w-xl mx-auto">
          Join hundreds of successful students. Enroll today or book a free demo class to start your journey.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/admission" className="flex items-center justify-center bg-white text-indigo-600 font-bold py-3 px-8 rounded-lg hover:bg-slate-100 transition-transform transform hover:scale-105 shadow-lg">
            Enroll Now
          </a>
          <a href="/contact" className="flex items-center justify-center bg-indigo-500 text-white font-bold py-3 px-8 rounded-lg border-2 border-indigo-400 hover:bg-indigo-700 transition-all transform hover:scale-105 shadow-lg">
            Book a Free Demo <ChevronRight size={20} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};
