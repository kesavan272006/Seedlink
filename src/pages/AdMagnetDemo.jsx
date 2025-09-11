import React from 'react';

const AdMagnetDemo = () => {
  return (
    <div className="min-h-screen bg-bg-primary text-gold-primary animate-fade-in flex flex-col items-center justify-center">
      <div className="w-full max-w-3xl mx-auto py-16 px-6 bg-deep-navy rounded-2xl shadow-gold border border-gold-primary/30">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center tracking-tight">AdMagnet AI Demo</h1>
        {/* TODO: Add upload, poster, WhatsApp message demo */}
        <div className="text-gold-light mb-4 text-center">Upload a product photo to generate a poster and WhatsApp message (demo coming soon).</div>
        <button className="mt-6 px-6 py-3 bg-gold-primary text-bg-primary font-semibold rounded-lg shadow-gold hover:bg-gold-light transition-all">Try Ad Generator</button>
      </div>
    </div>
  );
};

export default AdMagnetDemo;
