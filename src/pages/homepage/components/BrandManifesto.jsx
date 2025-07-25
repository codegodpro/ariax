import React from 'react';

export default function BrandManifesto() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">About New Arias</h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          New Arias is a proudly Nigerian lifestyle brand dedicated to enhancing everyday living through premium beauty services and nutritious farm produce. We believe that wellness is holistic — from your skin to your diet.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-8 mb-6">
          <div className="flex-1 bg-card p-4 rounded-xl shadow">
            <h3 className="font-semibold mb-2">Arias Salon & Spa</h3>
            <ul className="text-left list-disc list-inside text-muted-foreground">
              <li>Beauty, Hair & Wellness</li>
              <li>Men & Women Services</li>
              <li>Spa Treatments & Grooming</li>
            </ul>
          </div>
          <div className="flex-1 bg-card p-4 rounded-xl shadow">
            <h3 className="font-semibold mb-2">🥚 Arias Agro</h3>
            <ul className="text-left list-disc list-inside text-muted-foreground">
              <li>Farm-Fresh Eggs</li>
              <li>Retail & Wholesale Delivery</li>
              <li>Ethical Poultry Farming</li>
            </ul>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold text-xl mb-2">🌈 Our Vision</h3>
          <p className="text-muted-foreground">To be a household name across beauty and agriculture — enriching lives through quality services and farm-fresh products.</p>
        </div>
        <div>
          <h3 className="font-semibold text-xl mb-2">🚀 Our Mission</h3>
          <p className="text-muted-foreground">Deliver stylish grooming experiences while promoting food security through ethical farming.</p>
        </div>
      </div>
    </section>
  );
}