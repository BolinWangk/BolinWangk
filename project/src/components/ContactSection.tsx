import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    course: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div id="contact" className="bg-gray-50 py-24 sm:py-32 animate-fade-in">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Get in touch with us to learn more about our courses or book your spot
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <div className="animate-slide-in">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Get in Touch</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Have questions? We're here to help. Send us a message and we'll respond as soon as possible.
            </p>
            <dl className="mt-8 space-y-6">
              <div className="flex gap-x-4 hover-scale">
                <dt>
                  <Phone className="h-6 w-6 text-indigo-600" />
                </dt>
                <dd className="text-base leading-7 text-gray-600">+91 1234567890</dd>
              </div>
              <div className="flex gap-x-4 hover-scale">
                <dt>
                  <Mail className="h-6 w-6 text-indigo-600" />
                </dt>
                <dd className="text-base leading-7 text-gray-600">contact@geniushub.com</dd>
              </div>
              <div className="flex gap-x-4 hover-scale">
                <dt>
                  <MapPin className="h-6 w-6 text-indigo-600" />
                </dt>
                <dd className="text-base leading-7 text-gray-600">
                  123 Education Street, Knowledge City, 123456
                </dd>
              </div>
            </dl>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-y-6 animate-slide-in">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 hover-scale"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 hover-scale"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
                Phone (optional)
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 hover-scale"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="course" className="block text-sm font-semibold leading-6 text-gray-900">
                Select Course
              </label>
              <select
                name="course"
                id="course"
                required
                className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 hover-scale"
                value={formData.course}
                onChange={handleChange}
              >
                <option value="">Select a course</option>
                <option value="science">Science</option>
                <option value="mathematics">Mathematics</option>
                <option value="higher-mathematics">Higher Mathematics</option>
                <option value="social-science">Social Science</option>
                <option value="computer-science">Computer Science</option>
                <option value="thang-ta">Thang-Ta</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows={4}
                className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 hover-scale"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover-scale animate-scale"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;