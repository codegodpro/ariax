import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const VirtualTourSection = () => {
  const [currentView, setCurrentView] = useState(0);

  const tourViews = [
    {
      id: 1,
      name: "Reception & Lounge",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop",
      description: "Welcome to our luxurious reception area featuring traditional Nigerian art and modern comfort.",
      hotspots: [
        { x: 30, y: 40, label: "Consultation Area" },
        { x: 70, y: 60, label: "Product Display" }
      ]
    },
    {
      id: 2,
      name: "Hair Styling Studio",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=600&fit=crop",
      description: "State-of-the-art styling stations equipped with premium tools for all hair textures.",
      hotspots: [
        { x: 25, y: 50, label: "Natural Hair Station" },
        { x: 75, y: 45, label: "Color Bar" }
      ]
    },
    {
      id: 3,
      name: "Spa Treatment Rooms",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop",
      description: "Serene treatment rooms designed for ultimate relaxation and rejuvenation.",
      hotspots: [
        { x: 40, y: 30, label: "Facial Suite" },
        { x: 60, y: 70, label: "Massage Room" }
      ]
    },
    {
      id: 4,
      name: "Bridal Suite",
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&h=600&fit=crop",
      description: "Exclusive bridal preparation suite with panoramic views of Lagos skyline.",
      hotspots: [
        { x: 50, y: 40, label: "Bridal Chair" },
        { x: 80, y: 20, label: "Photography Corner" }
      ]
    }
  ];

  const nextView = () => {
    setCurrentView((prev) => (prev + 1) % tourViews.length);
  };

  const prevView = () => {
    setCurrentView((prev) => (prev - 1 + tourViews.length) % tourViews.length);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-accent/10 to-secondary/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl lg:text-5xl font-bold text-primary mb-4">
            Virtual Salon Tour
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Step inside our Lagos sanctuary where Nigerian luxury meets world-class beauty expertise
          </p>
        </div>

        <div className="bg-card rounded-2xl shadow-brand-hover overflow-hidden">
          <div className="relative h-96 lg:h-[500px]">
            <Image
              src={tourViews[currentView].image}
              alt={tourViews[currentView].name}
              className="w-full h-full object-cover"
            />
            
            {/* Hotspots */}
            {tourViews[currentView].hotspots.map((hotspot, index) => (
              <div
                key={index}
                className="absolute w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg animate-pulse cursor-pointer group"
                style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
              >
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-primary text-primary-foreground text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  {hotspot.label}
                </div>
              </div>
            ))}

            {/* Navigation Controls */}
            <button
              onClick={prevView}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors duration-200"
            >
              <Icon name="ChevronLeft" size={24} className="text-primary" />
            </button>
            
            <button
              onClick={nextView}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors duration-200"
            >
              <Icon name="ChevronRight" size={24} className="text-primary" />
            </button>

            {/* View Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
              {currentView + 1} / {tourViews.length}
            </div>
          </div>

          <div className="p-6 lg:p-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-headline text-2xl font-semibold text-primary">
                {tourViews[currentView].name}
              </h3>
              <div className="flex space-x-2">
                {tourViews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentView(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === currentView ? 'bg-primary' : 'bg-muted'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <p className="font-body text-text-secondary mb-6">
              {tourViews[currentView].description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                iconName="Calendar"
                iconPosition="left"
                className="bg-cta text-cta-foreground hover:bg-cta/90"
              >
                Book a Visit
              </Button>
              <Button
                variant="outline"
                iconName="Phone"
                iconPosition="left"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {tourViews.map((view, index) => (
            <button
              key={view.id}
              onClick={() => setCurrentView(index)}
              className={`relative group overflow-hidden rounded-lg transition-all duration-300 ${
                index === currentView 
                  ? 'ring-2 ring-primary shadow-brand' 
                  : 'hover:shadow-lg'
              }`}
            >
              <Image
                src={view.image}
                alt={view.name}
                className="w-full h-24 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <span className="text-white text-sm font-medium p-3 w-full text-left">
                  {view.name}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VirtualTourSection;