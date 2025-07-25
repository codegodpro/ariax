
import React from 'react';
import GlassCard from './GlassCard';
import Button from './Button';
import ResponsiveGrid from './ResponsiveGrid';
import Icon from '../AppIcon';

const ShowcaseSection = () => {
  const features = [
    {
      title: "Glass Morphism",
      description: "Beautiful glass-like cards with blur effects",
      icon: "Sparkles",
      variant: "default",
      effects: { hover3d: true, shimmer: true }
    },
    {
      title: "3D Interactions",
      description: "Hover effects with 3D transformations",
      icon: "Zap",
      variant: "heavy",
      effects: { hover3d: true, glow: true }
    },
    {
      title: "Floating Elements",
      description: "Smooth floating animations",
      icon: "Cloud",
      variant: "minimal",
      effects: { floating: true, hover3d: true }
    },
    {
      title: "Neon Glows",
      description: "Vibrant glowing effects",
      icon: "Star",
      variant: "default",
      effects: { glow: true, shimmer: true }
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline font-bold text-4xl lg:text-5xl mb-6 text-gradient-neon">
            Enhanced UI Showcase
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-3xl mx-auto">
            Experience the power of modern design with glass morphism, 3D effects, and smooth animations
          </p>
        </div>

        <ResponsiveGrid variant="cards" gap="8">
          {features.map((feature, index) => (
            <GlassCard
              key={index}
              variant={feature.variant}
              {...feature.effects}
              className="p-8 text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-neon rounded-full flex items-center justify-center shadow-neon">
                <Icon 
                  name={feature.icon} 
                  size={24} 
                  className="text-white group-hover:animate-spin-slow" 
                />
              </div>
              
              <h3 className="font-headline font-semibold text-xl mb-4 text-foreground">
                {feature.title}
              </h3>
              
              <p className="font-body text-text-secondary mb-6 leading-relaxed">
                {feature.description}
              </p>
              
              <Button
                variant="neon"
                size="sm"
                enhance3d
                glow
                iconName="ArrowRight"
                iconPosition="right"
                className="group-hover:scale-110"
              >
                Explore
              </Button>
            </GlassCard>
          ))}
        </ResponsiveGrid>

        <div className="mt-16 text-center">
          <Button
            variant="glass"
            size="lg"
            enhance3d
            iconName="Palette"
            iconPosition="left"
            className="text-lg px-8 py-4"
          >
            View All Features
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
