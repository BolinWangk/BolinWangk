import React from 'react';
import { Star } from 'lucide-react';
import { useParallax } from '../hooks/useParallax';

const testimonials = [
  {
    content: "The combined revision course at GENIUS HUB helped me cover all subjects systematically. The teachers were incredibly helpful, and I scored higher than I expected in my exams!",
    author: "Rahul S.",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
  {
    content: "Thanks to GENIUS HUB's expert faculty and structured approach, I was able to improve my grades significantly. The personal attention made all the difference.",
    author: "Priya M.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
  {
    content: "The Thang-Ta classes alongside academic subjects helped me maintain both physical and mental balance. A unique and effective learning experience!",
    author: "Amit K.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  },
];

const TestimonialsSection = () => {
  const offset = useParallax(0.2);

  return (
    <div id="testimonials" className="py-24 bg-white sm:py-32 animate-fade-in parallax-container">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div 
          className="mx-auto max-w-2xl text-center"
          style={{ transform: `translateY(${offset * -0.2}px)` }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Success Stories from Our Students
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Hear what our students have to say about their experience at GENIUS HUB
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mt-20 lg:max-w-none lg:grid-cols-3 stagger-animation">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="flex flex-col justify-between bg-white p-8 rounded-2xl shadow-lg ring-1 ring-gray-200 hover-scale"
              style={{ transform: `translateY(${offset * (0.1 * (index % 3))}px)` }}
            >
              <div className="flex items-center gap-x-1 text-indigo-600">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="mt-6 text-base leading-7 text-gray-600">{testimonial.content}</p>
              <div className="mt-6 flex items-center gap-x-4">
                <img
                  className="h-10 w-10 rounded-full bg-gray-50"
                  src={testimonial.image}
                  alt={testimonial.author}
                />
                <div>
                  <p className="text-sm font-semibold leading-6 text-gray-900">{testimonial.author}</p>
                  <p className="text-sm leading-6 text-gray-600">Class X Student</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;