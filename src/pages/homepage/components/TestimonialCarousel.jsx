import React from 'react';

export default function TestimonialCarousel() {
  return (
    <section className="py-16 bg-muted">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">What Our Community Says</h2>
        <div className="bg-card p-8 rounded-lg">
          <p className="text-lg italic mb-4">
            "Arias Lifestyle Hub has completely transformed my approach to sustainable living. 
            The products are amazing and the community is so supportive!"
          </p>
          <p className="font-semibold">- Sarah M.</p>
        </div>
      </div>
    </section>
  );
}