'use client';
// src/components/ContactForm.tsx

import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    // Here you would typically send the form data to your backend API
    // For now, we'll simulate an API call with a timeout
    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API delay
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        >
          <option value="">Please select a subject</option>
          <option value="General Inquiry">General Inquiry</option>
          <option value="Booking">Booking</option>
          <option value="Collaboration">Collaboration</option>
          <option value="Press">Press</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          disabled={formStatus === 'submitting'}
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
        </button>
      </div>
      {formStatus === 'success' && (
        <div className="mt-4 text-green-600">
          Thank you for reaching out! Your message has been sent successfully. I&apos;ll get back to you as soon as possible.
        </div>
      )}
      {formStatus === 'error' && (
        <div className="mt-4 text-red-600">
          I apologize, but there was an error sending your message. Please try again or contact me directly at hello@bryancee.com.
        </div>
      )}
    </form>
  );
};

export default ContactForm;