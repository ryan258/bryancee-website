// src/app/contact/page.tsx

import React from 'react';
import Link from 'next/link';

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Contact</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">Name</label>
              <input type="text" id="name" name="name" required 
                className="w-full px-3 py-2 border rounded-md" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">Email</label>
              <input type="email" id="email" name="email" required 
                className="w-full px-3 py-2 border rounded-md" />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-1">Subject</label>
              <select id="subject" name="subject" required 
                className="w-full px-3 py-2 border rounded-md">
                <option value="">Select a subject</option>
                <option value="booking">Booking Inquiry</option>
                <option value="media">Media Request</option>
                <option value="fanmail">Fan Mail</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">Message</label>
              <textarea id="message" name="message" required 
                className="w-full px-3 py-2 border rounded-md" rows={5}></textarea>
            </div>
            <button type="submit" 
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
              Send Message
            </button>
          </form>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Management:</h3>
              <p>John Doe Management</p>
              <p>Email: management@bryancee.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
            <div>
              <h3 className="font-semibold">Booking:</h3>
              <p>Jane Smith Booking Agency</p>
              <p>Email: booking@bryancee.com</p>
              <p>Phone: (098) 765-4321</p>
            </div>
            <div>
              <h3 className="font-semibold">Press Inquiries:</h3>
              <p>Email: press@bryancee.com</p>
            </div>
          </div>
        </section>
      </div>

      <section className="mt-12 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">How can I book Bryan for a private event?</h3>
            <p>Please use the contact form above or email our booking agency directly at booking@bryancee.com with details about your event.</p>
          </div>
          <div>
            <h3 className="font-semibold">Does Bryan offer music lessons?</h3>
            <p>Yes, Bryan offers limited music education services. Please check our <Link href="/services" className="text-blue-600 hover:underline">Services page</Link> for more information.</p>
          </div>
          <div>
            <h3 className="font-semibold">How can I get Bryan&apos;s autograph?</h3>
            <p>Bryan often signs autographs after his live performances. For mail requests, please send your item to the management address with a self-addressed stamped envelope.</p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Connect on Social Media</h2>
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/bryancee" target="_blank" rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
            Facebook
          </a>
          <a href="https://www.twitter.com/bryancee" target="_blank" rel="noopener noreferrer"
            className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500 transition duration-300">
            Twitter
          </a>
          <a href="https://www.instagram.com/bryancee" target="_blank" rel="noopener noreferrer"
            className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition duration-300">
            Instagram
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;