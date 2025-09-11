import React from 'react';

const Contact = () => (
  <div className="min-h-screen bg-bg-primary text-gold-primary animate-fade-in flex flex-col items-center justify-center">
    <div className="w-full max-w-3xl mx-auto py-16 px-6 bg-deep-navy rounded-2xl shadow-gold border border-gold-primary/30">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center tracking-tight">Contact Us</h1>
      <p className="text-lg text-gold-light mb-4 text-center">For inquiries, partnerships, or support, email us at <a href="mailto:support@visiobiz.ai" className="underline text-gold-primary">support@visiobiz.ai</a></p>
    </div>
  </div>
);

export default Contact;
