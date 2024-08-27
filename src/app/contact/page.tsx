// src/app/contact/page.tsx

import React from 'react';
import ContactForm from '@/components/ContactForm';
import SocialLinks from '@/components/SocialLinks';

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Connect with Our Harmonic Community</h1>
      
      <section className="mb-12">
        <p className="text-xl mb-6">
          Dear friends on this journey of conscious encouragement, I&apos;m thrilled that you&apos;re reaching out to connect. Whether you&apos;re looking to share your story, explore collaboration opportunities, or simply say hello, your message is a cherished note in our collective symphony of positive change.
        </p>
        <p className="text-xl mb-6">
          Every connection we make is an opportunity to spread more light and harmony in the world. I look forward to hearing from you and exploring how we can create beautiful music together — both literally and figuratively!
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Reach Out Directly</h2>
          <ContactForm />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Let&apos;s Connect</h2>
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2">For Booking Inquiries:</h3>
            <p className="mb-1">Email: booking@bryancee.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2">For Press & Media:</h3>
            <p className="mb-1">Email: press@bryancee.com</p>
            <p>Phone: (098) 765-4321</p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2">General Inquiries:</h3>
            <p>Email: hello@bryancee.com</p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Join Our Harmonious Community:</h3>
            <SocialLinks />
          </div>
        </section>
      </div>

      <section className="mt-12 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">A Note on Our Shared Journey</h2>
        <p className="mb-4">
          Every message, every connection we make, is a step towards a more harmonious world. Your thoughts, ideas, and energy are invaluable contributions to this movement of conscious encouragement we&apos;re building together.
        </p>
        <p>
          While I may not be able to respond to every message personally, please know that each one is read and deeply appreciated. Your words fuel the melodies of change we&apos;re creating, and I&apos;m grateful for your presence on this journey.
        </p>
      </section>
    </div>
  );
};

export default ContactPage;