import React from 'react';

export default function SocialProofSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Trusted by Thousands</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
          <div className="text-xl font-semibold">Brand 1</div>
          <div className="text-xl font-semibold">Brand 2</div>
          <div className="text-xl font-semibold">Brand 3</div>
          <div className="text-xl font-semibold">Brand 4</div>
        </div>
      </div>
    </section>
  );
}