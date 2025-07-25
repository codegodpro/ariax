import React from 'react';

export default function ImpactDashboard() {
  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-primary mb-2">10,000+</h3>
            <p className="text-card-foreground">Lives Transformed</p>
          </div>
          <div className="bg-card p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-success mb-2">50%</h3>
            <p className="text-card-foreground">Carbon Footprint Reduced</p>
          </div>
          <div className="bg-card p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-accent mb-2">100+</h3>
            <p className="text-card-foreground">Local Farms Supported</p>
          </div>
        </div>
      </div>
    </section>
  );
}