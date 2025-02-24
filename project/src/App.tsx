import React from 'react';
import { BookOpen, GraduationCap, Users, Phone, Star, ChevronRight, Facebook, Instagram, Twitter } from 'lucide-react';
import Hero from './components/Hero';
import CourseSection from './components/CourseSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <GraduationCap className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">GENIUS HUB</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#courses" className="text-gray-700 hover:text-indigo-600">Courses</a>
              <a href="#testimonials" className="text-gray-700 hover:text-indigo-600">Testimonials</a>
              <a href="#about" className="text-gray-700 hover:text-indigo-600">About</a>
              <a href="#contact" className="text-gray-700 hover:text-indigo-600">Contact</a>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      <Hero />
      <CourseSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;