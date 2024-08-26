// src/components/Footer.tsx

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement newsletter signup logic
    console.log('Newsletter signup:', email);
    setEmail('');
    // You would typically send this to your API or newsletter service
  };

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-blue-400">About</Link></li>
              <li><Link href="/music" className="hover:text-blue-400">Music</Link></li>
              <li><Link href="/events" className="hover:text-blue-400">Events</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com/bryancee" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com/bryancee" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com/bryancee" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <FaInstagram size={24} />
              </a>
              <a href="https://youtube.com/bryancee" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-700 text-white px-4 py-2 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700 transition duration-300 mt-2 sm:mt-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Bryan Cee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;