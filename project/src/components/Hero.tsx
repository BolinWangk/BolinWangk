import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useParallax } from '../hooks/useParallax';

const Hero = () => {
  const offset = useParallax(0.5);

  return (
    <div className="relative bg-white pt-16 parallax-container">
      <div 
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        style={{ transform: `translateY(${offset * 0.3}px)` }}
      >
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-200 to-indigo-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-24 pb-24 sm:pb-32">
        <div 
          className="mx-auto max-w-2xl text-center stagger-animation"
          style={{ transform: `translateY(${offset * -0.2}px)` }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            GENIUS HUB COACHING CENTRE
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Combined Revision Course for Class X
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Master your Class X exams with our comprehensive coaching program. Join the path to academic excellence.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#contact"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover-scale animate-scale"
            >
              Get Started
            </a>
            <a href="#courses" className="text-sm font-semibold leading-6 text-gray-900 flex items-center hover-scale">
              Learn more <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      
      <div 
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        style={{ transform: `translateY(${offset * 0.5}px)` }}
      >
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-indigo-200 to-indigo-600 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
      </div>
    </div>
  );
};

export default Hero;