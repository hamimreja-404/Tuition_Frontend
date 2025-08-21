// src/App.jsx
import React, { useEffect, useState } from "react";
import TestimonialsSection from "./Testimonials";
import AOS from "aos";
import "aos/dist/aos.css";
import Pic from "../assets/Pic.jpg";

const Home = () => {


  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="font-sans text-[#2C2C2C] bg-[#FFF9F4] min-h-screen">


      {/* Sections */}
      <main className="pt-16 space-y-20">
        {/* Hero */}
        <section
          id="home"
          className="bg-[#FCEBDD] px-6 md:px-10 py-20"
          data-aos="fade-up"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src= {Pic}
                alt="Student"
                className="rounded-xl w-full shadow-md"
              />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-5xl font-serif italic font-semibold leading-snug mb-6">
                Explore Physics's Accadamy <br />
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                Discover the proven approach of Physics's Accadamy Tuition,
                helping students excel in X–XII, JEE & NEET.
              </p>
              <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium">
                Get Started
              </button>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="bg-[#FDFBF6] px-6 md:px-10 py-20"
          data-aos="fade-up"
        >
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h5 className="text-sm text-gray-500 mb-2">About Us</h5>
              <h2 className="text-4xl font-serif italic font-bold mb-4">
                Arghya Sen's Physics Tuition
              </h2>
              <p className="text-gray-600 mb-4">
                Arghya Sen’s Physics Tuition (The Physics Helper) is a highly
                rated center in Behala, Kolkata, offering both offline and
                online sessions for XI, XII, NEET, and JEE aspirants.
              </p>
              <p className="text-gray-600 mb-4">
                Known for personal mentorship, strong academic outcomes, regular
                tests, mock exams, and student-centric support.
              </p>
              <button className="bg-black text-white px-6 py-3 rounded-full font-medium">
                Join Our Classes
              </button>
            </div>
            <div>
              <img
                src="https://media.gettyimages.com/id/497130603/photo/man-standing-against-chalkboard-solves-physics-equations-rear-view-retro.jpg?s=612x612&w=0&k=20&c=rfsp68WN9mRt84TKxpnOOP4bfxUYMK3RSS_OnuzlDDA="
                className="rounded-xl w-full shadow-md"
                alt="Tutor"
              />
            </div>
          </div>
        </section>

        {/* Courses */}
        <section
          id="courses"
          className="bg-[#FBEBDB] px-6 md:px-10 py-20"
          data-aos="fade-up"
        >
          <div className="max-w-6xl mx-auto text-center">
            <h5 className="text-sm text-gray-500 mb-2">Our Courses</h5>
            <h2 className="text-4xl font-serif italic font-bold mb-10">
              Comprehensive Programs
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                ["Class XI", "Foundation + JEE/NEET Basics"],
                ["Class XII", "Advanced Physics with Exams"],
                ["NEET", "MCQs, Diagrams, PYQs"],
                ["JEE", "Tricks, Test Series, Problem-Solving"],
              ].map(([title, desc], i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" data-aos="fade-up">
          <TestimonialsSection />
        </section>
        {/* ✅ Fee Section */}
        <section id="fees" className="bg-[#FCEBDD] px-10 py-20">
          <div className="max-w-6xl mx-auto text-center">
            <h5 className="text-sm text-gray-500 mb-2">
              Fee Structure / Plans
            </h5>
            <h2 className="text-4xl font-serif italic font-bold mb-10">
              Flexible Plans That Fit Your Goals
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
              {/* Monthly Plan */}
              <div className="bg-white p-6 rounded-xl shadow-md text-left">
                <h3 className="text-xl font-bold mb-2">Monthly Plan</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Ideal for short-term focused learning or flexible schedules.
                </p>
                <ul className="text-sm text-gray-700 list-disc list-inside space-y-1 mb-4">
                  <li>Access to all regular classes</li>
                  <li>Weekly Tests & Assignments</li>
                  <li>Recorded Lectures</li>
                </ul>
                <p className="font-semibold text-lg mb-2">₹2,000/month</p>
              </div>

              {/* Yearly Plan */}
              <div className="bg-white p-6 rounded-xl shadow-md text-left">
                <h3 className="text-xl font-bold mb-2">Yearly Plan</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Best for consistent long-term preparation with benefits.
                </p>
                <ul className="text-sm text-gray-700 list-disc list-inside space-y-1 mb-4">
                  <li>All Monthly Benefits</li>
                  <li>Full Syllabus Coverage</li>
                  <li>Exclusive Test Series</li>
                </ul>
                <p className="font-semibold text-lg mb-2">₹20,000/year</p>
              </div>

              {/* Combo Plan */}
              <div className="bg-white p-6 rounded-xl shadow-md text-left">
                <h3 className="text-xl font-bold mb-2">NEET/JEE Combo Pack</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Focused dual-preparation with integrated study material.
                </p>
                <ul className="text-sm text-gray-700 list-disc list-inside space-y-1 mb-4">
                  <li>NEET + JEE Prep</li>
                  <li>Doubt Clearing Sessions</li>
                  <li>Mock Exams + PYQs</li>
                </ul>
                <p className="font-semibold text-lg mb-2">₹35,000/year</p>
              </div>
            </div>

            <p className="text-gray-600 mb-6 text-sm">
              💡{" "}
              <span className="font-medium text-black">
                Early Registration Offers:
              </span>{" "}
              Get up to 15% off for enrolling before{" "}
              <span className="text-red-500 font-semibold">31st July</span>.
            </p>
            <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all">
              📞 Call Now / Book a Trial
            </button>
          </div>
        </section>
        {/* Contact */}
        <section
          id="contact"
          className="bg-[#FFF7EF] px-6 md:px-10 py-20"
          data-aos="fade-up"
        >
          <div className="max-w-6xl mx-auto text-center">
            <h5 className="text-sm text-gray-500 mb-2">Contact & Location</h5>
            <h2 className="text-4xl font-serif italic font-bold mb-10">
              Get In Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">📍 Location</h3>

                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.4211850194124!2d88.3110458!3d22.488375399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027bb363ecb037%3A0xfd420fdc1a227696!2sThe%20Physics%20Helper%20(By%3A%20Arghya%20Sen)!5e0!3m2!1sen!2sin!4v1751742011627!5m2!1sen!2sin"
                    className="w-full h-64 rounded-xl border"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    📞 Contact Info
                  </h3>
                  <p className="text-sm">Phone: +91 90000 00000</p>
                  <p className="text-sm">
                    WhatsApp:{" "}
                    <a
                      href="https://wa.me/919000000000"
                      className="text-blue-600"
                    >
                      Chat Now
                    </a>
                  </p>
                  <p className="text-sm">
                    Email:{" "}
                    <a
                      href="mailto:info@yourinstitute.com"
                      className="text-blue-600"
                    >
                      info@yourinstitute.com
                    </a>
                  </p>
                </div>
              </div>

              <form className="bg-white p-6 rounded-xl shadow-md space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-2 border border-gray-300 rounded text-sm"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-2 border border-gray-300 rounded text-sm"
                  required
                />
                <textarea
                  placeholder="Message"
                  className="w-full p-2 border border-gray-300 rounded text-sm"
                  rows="3"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="bg-black text-white px-6 py-2 rounded-full text-sm"
                >
                  📞 Schedule a Callback
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      
    </div>
  );
};

export default Home;
