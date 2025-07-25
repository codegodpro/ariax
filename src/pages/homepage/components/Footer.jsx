import React from 'react';
import { Link } from 'react-router-dom';
import AppIcon from '../../../components/AppIcon';

export default function Footer() {
  return (
    <>
      <footer className="bg-gradient-to-r from-primary to-secondary backdrop-blur-lg border border-glass-200 shadow-glass text-white py-12">
        <div className="w-full px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Arias Lifestyle Hub</h3>
              <p className="mb-2 flex items-center gap-2"><AppIcon name="MapPin" size={16} className="text-primary" />Shop A2/A3/A4, Plot 444 Executive Mall, NTA Trans-Nkisi GRA, Onitsha</p>
              <p className="opacity-80">&copy; 2024 New Arias. All rights reserved.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 flex items-center gap-2"><AppIcon name="Link" size={18} className="text-primary" />Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="flex items-center gap-2 transition-all duration-200 hover:text-primary hover:underline hover:brightness-125 underline-offset-4"><AppIcon name="Home" size={16} />Home</Link></li>
                <li><Link to="/salon" className="flex items-center gap-2 transition-all duration-200 hover:text-primary hover:underline hover:brightness-125 underline-offset-4"><AppIcon name="Sparkles" size={16} />Salon & Spa</Link></li>
                <li><Link to="/farm" className="flex items-center gap-2 transition-all duration-200 hover:text-primary hover:underline hover:brightness-125 underline-offset-4"><AppIcon name="Egg" size={16} />Farm Fresh</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 flex items-center gap-2"><AppIcon name="PhoneCall" size={18} className="text-primary" />Contact & Socials</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2"><AppIcon name="Phone" size={16} /><a href="tel:+2348125727364" className="transition-all duration-200 hover:text-primary hover:underline hover:brightness-125 underline-offset-4">+234 812 572 7364</a></li>
                <li className="flex items-center gap-2"><AppIcon name="Mail" size={16} /><a href="mailto:info@newariasbeauty.ng" className="transition-all duration-200 hover:text-primary hover:underline hover:brightness-125 underline-offset-4">info@newariasbeauty.ng</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 flex items-center gap-2"><AppIcon name="Clock" size={18} className="text-primary" />Hours</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2"><AppIcon name="Scissors" size={16} />Salon: Mon–Sat 9AM–6PM | Sun 12PM–5PM</li>
                <li className="flex items-center gap-2"><AppIcon name="Egg" size={16} />Farm: Daily 8AM–6PM</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}