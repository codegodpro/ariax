import React, { useState } from 'react';
import Image from '@/components/AppImage';
import Icon from '@/components/AppIcon';
import Button from '@/components/ui/Button';

const StylistSpotlight = ({ stylist, onBookConsultation, onViewProfile }) => {
  return (
    <div className="bg-gradient-luxury rounded-xl p-6 text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-foreground rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary-foreground rounded-full translate-y-12 -translate-x-12"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="font-headline font-semibold text-xl mb-1">
              Stylist Spotlight
            </h3>
            <p className="text-primary-foreground/80 text-sm">
              Meet our featured transformation expert
            </p>
          </div>
          <div className="w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center">
            <Icon name="Star" size={20} className="text-primary-foreground" fill="currentColor" />
          </div>
        </div>

        {/* Stylist Info */}
        <div className="flex items-start space-x-4 mb-6">
          <div className="relative">
            <Image
              src={stylist.avatar}
              alt={stylist.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-primary-foreground/20"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
              <Icon name="Check" size={12} className="text-secondary-foreground" />
            </div>
          </div>

          <div className="flex-1">
            <h4 className="font-body font-semibold text-lg text-primary-foreground mb-1">
              {stylist.name}
            </h4>
            <p className="text-primary-foreground/80 text-sm mb-2">
              {stylist.title}
            </p>
            <div className="flex items-center space-x-4 text-xs text-primary-foreground/70">
              <div className="flex items-center space-x-1">
                <Icon name="Award" size={12} />
                <span>{stylist.experience} years</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Users" size={12} />
                <span>{stylist.clientCount}+ clients</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Star" size={12} fill="currentColor" />
                <span>{stylist.rating}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Specializations */}
        <div className="mb-6">
          <h5 className="font-body font-medium text-sm text-primary-foreground mb-3">
            Specializations
          </h5>
          <div className="flex flex-wrap gap-2">
            {stylist.specializations.map((spec, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-primary-foreground/20 text-primary-foreground text-xs rounded-full"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>

        {/* Featured Quote */}
        <div className="mb-6">
          <blockquote className="text-primary-foreground/90 text-sm italic leading-relaxed">
            "{stylist.quote}"
          </blockquote>
        </div>

        {/* Recent Achievement */}
        <div className="bg-primary-foreground/10 rounded-lg p-4 mb-6">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
              <Icon name="Trophy" size={14} className="text-secondary-foreground" />
            </div>
            <div>
              <h6 className="font-body font-medium text-sm text-primary-foreground mb-1">
                Recent Achievement
              </h6>
              <p className="text-primary-foreground/80 text-xs">
                {stylist.recentAchievement}
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onViewProfile(stylist.id)}
            iconName="User"
            iconPosition="left"
            className="flex-1 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
          >
            View Profile
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={() => onBookConsultation(stylist.id)}
            iconName="Calendar"
            iconPosition="left"
            className="flex-1 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            Book Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StylistSpotlight;