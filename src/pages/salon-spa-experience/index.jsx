import React from 'react';
import Header from '../../components/ui/Header';
import AppIcon from '../../components/AppIcon';
import Footer from '../homepage/components/Footer';

export default function SalonSpaExperience() {
  return (
    <>
      <Header />
      {/* Hero Banner */}
      <section className="relative w-full min-h-[80vh] md:min-h-[95vh] flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-white mb-8 overflow-hidden">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-lg z-0" />
        <div className="relative z-10 text-center px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Salon & Spa</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/90">Premium Salon Experience.</p>
        </div>
      </section>
      <div className="min-h-screen bg-background p-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4">New Arias Unisex Saloon and Spa</h1>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">🌟 About Us</h2>
            <p className="text-muted-foreground mb-4">
              Welcome to New Arias Unisex Saloon and Spa, where beauty meets expertise. We offer premium grooming and wellness services for both men and women in a stylish and relaxing space. From routine treatments to glam makeovers, our team is dedicated to bringing out the best version of you.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">💅 Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-1">Hair Services (Men & Women)</h3>
                <ul className="list-disc list-inside text-muted-foreground mb-2">
                  <li>Haircuts, Coloring, Braiding, Relaxing</li>
                  <li>Dreadlocks, Weaves, Wig Styling</li>
                  <li>Blow Dry, Silk Press, Treatments</li>
                </ul>
                <h3 className="font-semibold mb-1">Barbering (Men & Boys)</h3>
                <ul className="list-disc list-inside text-muted-foreground mb-2">
                  <li>Classic Haircuts, Fades, Beard Styling</li>
                  <li>Hot Towel Shave, Scalp Treatment</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Nail Care</h3>
                <ul className="list-disc list-inside text-muted-foreground mb-2">
                  <li>Manicure, Pedicure</li>
                  <li>Acrylics, Gel, Nail Art</li>
                </ul>
                <h3 className="font-semibold mb-1">Skincare & Beauty</h3>
                <ul className="list-disc list-inside text-muted-foreground mb-2">
                  <li>Facials, Waxing, Makeup</li>
                  <li>Eyelash Extensions, Brow Tinting</li>
                </ul>
                <h3 className="font-semibold mb-1">Spa & Wellness</h3>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Swedish/Deep Tissue Massage</li>
                  <li>Body Scrub, Steam Therapy</li>
                </ul>
              </div>
            </div>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">📱 Socials</h2>
            <ul className="text-muted-foreground">
              <li>TikTok, Facebook & Instagram: <span className="font-semibold">@ariasunsexsalonandspa</span></li>
            </ul>
          </section>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
}