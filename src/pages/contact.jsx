import React, { useState } from 'react';
import Header from '../components/ui/Header';
import AppIcon from '../components/AppIcon';
import Footer from '../pages/homepage/components/Footer';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'Salon',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would handle sending the form data to your backend or email service
  };

  return (
    <>
      <Header />
      {/* Hero Banner */}
      <section className="relative w-full min-h-[80vh] md:min-h-[95vh] flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-white mb-8 overflow-hidden">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-lg z-0" />
        <div className="relative z-10 text-center px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Get in Touch with New Arias</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/90">We'd love to hear from you! Reach out for appointments, farm orders, or any inquiry—our team is here to help you live beautifully and eat well.</p>
        </div>
      </section>
      <div className="min-h-screen bg-background p-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Salon Card */}
          <div className="glass-card backdrop-blur-lg bg-white/20 dark:bg-black/30 border border-white/30 dark:border-black/40 rounded-[8px] shadow-xl p-6 flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-2">
              <AppIcon name="Sparkles" size={20} className="text-pink-400" />
              <h2 className="text-2xl font-semibold">Arias Unisex Salon & Spa</h2>
            </div>
            <ul className="text-muted-foreground mb-2">
              <li>📍 Executive Mall, Plot 444, NTA Trans-Nkisi GRA, Onitsha</li>
              <li>📞 <a href="tel:+2348125727364" className="hover:text-primary">+234 812 572 7364</a></li>
              <li>💌 <a href="mailto:info@newariasbeauty.ng" className="hover:text-primary">info@newariasbeauty.ng</a></li>
              <li>📱 TikTok | Instagram | Facebook: <span className="font-semibold">@ariasunsexsalonandspa</span></li>
              <li>🕒 Mon–Sat 9AM–6PM | Sun 12PM–5PM</li>
            </ul>
            <a href="/salon" className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-[6px] font-semibold hover:bg-primary/90 transition-colors mt-2">Book Salon Appointment</a>
          </div>
          {/* Farm Card */}
          <div className="glass-card backdrop-blur-lg bg-white/20 dark:bg-black/30 border border-white/30 dark:border-black/40 rounded-[8px] shadow-xl p-6 flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-2">
              <AppIcon name="Egg" size={20} className="text-green-500" />
              <h2 className="text-2xl font-semibold">Arias Agro – The Farm</h2>
            </div>
            <ul className="text-muted-foreground mb-2">
              <li>📞 <a href="tel:+2348125727364" className="hover:text-primary">+234 812 572 7364</a></li>
              <li>📱 TikTok | Instagram | Facebook: <span className="font-semibold">@arias_agro</span></li>
              <li>🕒 Orders & Inquiries: Daily 8AM–6PM</li>
            </ul>
            <a href="/farm" className="inline-block bg-secondary text-secondary-foreground px-6 py-2 rounded-[6px] font-semibold hover:bg-secondary/90 transition-colors mt-2">Order Farm-Fresh Eggs</a>
          </div>
          {/* Contact Form Card (spans both columns) */}
          <div className="glass-card backdrop-blur-lg bg-white/20 dark:bg-black/30 border border-white/30 dark:border-black/40 rounded-[8px] shadow-xl p-6 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <AppIcon name="PhoneCall" size={20} className="text-blue-400" />
              <h2 className="text-2xl font-semibold">📝 Let’s Talk — We’d Love to Hear from You!</h2>
            </div>
            {submitted ? (
              <div className="bg-green-100 text-green-800 p-4 rounded-lg">Thank you for reaching out! We will get back to you soon.</div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full p-3 rounded border border-border focus:outline-none"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full p-3 rounded border border-border focus:outline-none"
                    required
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full p-3 rounded border border-border focus:outline-none"
                  />
                  <select
                    name="topic"
                    value={form.topic}
                    onChange={handleChange}
                    className="w-full p-3 rounded border border-border focus:outline-none"
                  >
                    <option value="Salon">Salon</option>
                    <option value="Eggs">Eggs</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full p-3 rounded border border-border focus:outline-none"
                  rows={4}
                  required
                />
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground px-8 py-3 rounded-[6px] font-semibold hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    {/* Footer */}
    <Footer /></>
  );
} 