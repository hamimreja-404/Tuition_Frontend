import { useState, useEffect } from "react";

// Testimonials Data
const testimonials = [
  {
    name: "Ankita Das",
    rating: 5,
    quote:
      "Sir explains every concept so clearly, and the test series really helped me improve my confidence for NEET. Best decision I made!",
  },
  {
    name: "Rohan Sarkar",
    rating: 5,
    quote:
      "The JEE Advanced coaching here was amazing. PYQs, tricks, mock tests—everything helped me stay ahead.",
  },
  {
    name: "Sourav Das",
    rating: 5,
    quote:
      "I was weak in Physics until I joined here. Sir's guidance and doubt sessions made a huge difference.",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / slidesPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [slidesPerView]);

  const getVisibleTestimonials = () => {
    const start = currentIndex * slidesPerView;
    return testimonials.slice(start, start + slidesPerView);
  };

  return (
    <section className="bg-[#FFF7EF] px-4 sm:px-6 md:px-10 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h5 className="text-sm text-gray-500 mb-2">Testimonials</h5>
        <h2 className="text-4xl font-serif italic font-bold mb-10">
          What Our Students Say
        </h2>

        <div className="relative">
          <div className="flex gap-6 justify-center flex-wrap transition-transform duration-500 ease-in-out">
            {getVisibleTestimonials().map((testimonial, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-md text-left w-full sm:w-[48%] md:w-[32%] h-auto"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xl font-bold text-gray-500">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <div className="text-yellow-500">
                      {"⭐".repeat(testimonial.rating)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm italic">
                  “{testimonial.quote}”
                </p>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 w-10 h-10 text-white p-2 rounded-full z-10"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 w-10 h-10 text-white p-2 rounded-full z-10"
          >
            ❯
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
