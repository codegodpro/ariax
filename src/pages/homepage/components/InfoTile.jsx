import React from 'react';
import AppIcon from '../../../components/AppIcon';

export default function InfoTile({ icon, title, description, color = 'from-primary to-secondary', children }) {
  return (
    <div className={`glass-card backdrop-blur-lg bg-white/20 dark:bg-black/30 border border-white/30 dark:border-black/40 rounded-[8px] shadow-xl p-6 flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-2xl`}> 
      <div className={`w-14 h-14 flex items-center justify-center rounded-[8px] bg-gradient-to-br ${color} mb-4 shadow-lg`}>
        <AppIcon name={icon} size={32} className="text-white drop-shadow" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-white drop-shadow-lg">{title}</h3>
      <p className="text-base text-white/80 mb-2">{description}</p>
      {children}
    </div>
  );
} 