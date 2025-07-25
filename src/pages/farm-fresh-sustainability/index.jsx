import React from 'react';
import Header from '../../components/ui/Header';
import AppIcon from '../../components/AppIcon';
import Footer from '../homepage/components/Footer';


export default function FarmFreshSustainability() {
  return (
    <>
      <Header />
      {/* Hero Banner */}
      <section className="relative w-full min-h-[80vh] md:min-h-[95vh] flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-white mb-8 overflow-hidden">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-lg z-0" />
        <div className="relative z-10 text-center px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Farm Fresh</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/90">Farm Produce.</p>
        </div>
      </section>
      <div className="min-h-screen bg-background p-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4">Arias Agro – The Farm</h1>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">🚜 About Arias Agro</h2>
            <p className="text-muted-foreground mb-4">
              Arias Agro is a poultry farming business passionate about delivering fresh, nutritious eggs across the region. Built on principles of sustainable agriculture, we combine modern techniques with ethical practices to ensure reliable production and distribution.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">🐔 What We Offer</h2>
            <ul className="list-disc list-inside text-muted-foreground mb-2">
              <li>Table Egg Production</li>
              <li>Bulk Supply to Restaurants, Hotels & Stores</li>
              <li>Farm-to-Customer Delivery</li>
              <li>Wholesale Distribution</li>
              <li>Poultry Health & Feed Management</li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">🛒 Contact</h2>
            <ul className="text-muted-foreground">
              <li>Phone: <a href="tel:+2348125727364" className="hover:text-primary">+234 812 572 7364</a></li>
              <li>TikTok, Facebook & Instagram: <span className="font-semibold">@arias_agro</span></li>
            </ul>
          </section>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
}