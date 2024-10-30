// app/contact/page.tsx

"use client";

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Only render component on client side after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/sendMessage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSuccess(false), 3000);
      } else {
        console.error('Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  // Render nothing on the server and render content on the client only
  if (!mounted) {
    return null;
  }

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen p-6 bg-gray-900 text-white">
        <div className="flex flex-col md:flex-row w-full max-w-4xl p-8 rounded-xl bg-gray-800 shadow-2xl space-y-8 md:space-y-0 md:space-x-8">
          
          {/* Left Side: Contact Information */}
          <div className="flex-1 p-8 rounded-lg bg-gray-900 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 text-center md:text-left">
              Contact Information
            </h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaPhone className="text-teal-400 mr-3" aria-label="Phone" />
                <a href="tel:+919860733808" className="text-lg hover:text-teal-300">
                  +91 9860733808
                </a>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-teal-400 mr-3" aria-label="Email" />
                <a href="mailto:svardhman@gmail.com" className="text-lg hover:text-teal-300">
                  svardhman@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <FaGithub className="text-teal-400 mr-3" aria-label="GitHub" />
                <a
                  href="https://github.com/vardhman-shaha/vshaha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:text-teal-300"
                >
                  GitHub Profile
                </a>
              </div>
              <div className="flex items-center">
                <FaLinkedin className="text-teal-400 mr-3" aria-label="LinkedIn" />
                <a
                  href="https://www.linkedin.com/in/vardhman-shaha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:text-teal-300"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="flex-1 p-8 rounded-lg bg-gray-900 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 text-center md:text-left">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-teal-300">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 px-4 py-2 bg-gray-800 rounded-md text-white focus:ring-2 focus:ring-teal-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-teal-300">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 px-4 py-2 bg-gray-800 rounded-md text-white focus:ring-2 focus:ring-teal-400"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-teal-300">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 px-4 py-2 bg-gray-800 rounded-md text-white focus:ring-2 focus:ring-teal-400"
                  rows={4}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-md hover:from-blue-600 hover:to-teal-600 transition-colors shadow-md font-semibold"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              {success && (
                <p className="text-teal-300 text-center mt-4">Message sent successfully!</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
