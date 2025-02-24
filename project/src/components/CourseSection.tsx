import React from 'react';
import { BookOpen, Brain, Calculator, Globe, Code, Swords } from 'lucide-react';
import { useParallax } from '../hooks/useParallax';

const courses = [
  {
    title: 'Science',
    description: 'Comprehensive coverage of Physics, Chemistry, and Biology with focus on key concepts and practical applications.',
    icon: BookOpen,
  },
  {
    title: 'Mathematics',
    description: 'Master Algebra, Geometry, Trigonometry, and more with our expert-led problem-solving techniques.',
    icon: Calculator,
  },
  {
    title: 'Higher Mathematics',
    description: 'Advanced topics and complex problem-solving for students in the higher-level Math group.',
    icon: Brain,
  },
  {
    title: 'Social Science',
    description: 'In-depth coverage of History, Geography, Civics, and Economics with real-world applications.',
    icon: Globe,
  },
  {
    title: 'Computer Science',
    description: 'Learn Programming, Algorithms, and Data Structures with hands-on coding practice.',
    icon: Code,
  },
  {
    title: 'Thang-Ta',
    description: 'Traditional martial art training focusing on physical and mental well-being.',
    icon: Swords,
  },
];

const CourseSection = () => {
  const offset = useParallax(0.3);

  return (
    <div id="courses" className="py-24 bg-gray-50 animate-fade-in parallax-container">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div 
          className="mx-auto max-w-2xl text-center"
          style={{ transform: `translateY(${offset * -0.2}px)` }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Combined Revision Courses</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Comprehensive courses designed to help you excel in your Class X examinations.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3 stagger-animation">
            {courses.map((course, index) => (
              <div 
                key={course.title} 
                className="flex flex-col bg-white rounded-lg shadow-lg p-8 hover-scale"
                style={{ transform: `translateY(${offset * (0.1 * (index % 3))}px)` }}
              >
                <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-gray-900">
                  <course.icon className="h-5 w-5 flex-none text-indigo-600" />
                  {course.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{course.description}</p>
                  <p className="mt-6">
                    <a href="#contact" className="text-sm font-semibold leading-6 text-indigo-600 hover-scale inline-block">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default CourseSection;