import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const FarmToTableTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);

  const timelineSteps = [
    {
      id: 0,
      title: "Sustainable Farming",
      description: "Our hens roam freely on organic pastures, fed with locally sourced, chemical-free grains.",
      image: "https://images.pexels.com/photos/1300355/pexels-photo-1300355.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: "Leaf",
      duration: "Daily Care",
      details: "Free-range environment with 24/7 veterinary monitoring and organic feed sourcing from local Nigerian farmers."
    },
    {
      id: 1,
      title: "Fresh Collection",
      description: "Eggs are collected daily at dawn, ensuring maximum freshness and nutritional value.",
      image: "https://images.pexels.com/photos/1556707/pexels-photo-1556707.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: "Sunrise",
      duration: "6:00 AM Daily",
      details: "Hand-collected by trained staff using sanitized equipment, immediately date-stamped and quality checked."
    },
    {
      id: 2,
      title: "Quality Testing",
      description: "Each batch undergoes rigorous quality control including freshness, size, and nutritional testing.",
      image: "https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: "Shield",
      duration: "2 Hours",
      details: "Laboratory testing for salmonella, weight classification, and shell integrity using international standards."
    },
    {
      id: 3,
      title: "Eco Packaging",
      description: "Packaged in biodegradable materials with minimal environmental impact and maximum protection.",
      image: "https://images.pexels.com/photos/4033151/pexels-photo-4033151.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: "Package",
      duration: "30 Minutes",
      details: "Recyclable cardboard cartons made from 100% post-consumer materials with natural cushioning."
    },
    {
      id: 4,
      title: "Cold Chain Delivery",
      description: "Temperature-controlled delivery ensures eggs reach you in perfect condition within 24 hours.",
      image: "https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: "Truck",
      duration: "Same Day",
      details: "Refrigerated vehicles maintain 4°C temperature with GPS tracking and delivery confirmation."
    },
    {
      id: 5,
      title: "Your Table",
      description: "Farm-fresh eggs delivered to your doorstep, ready to nourish your family with premium nutrition.",
      image: "https://images.pexels.com/photos/1556707/pexels-photo-1556707.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: "Home",
      duration: "Enjoy Fresh",
      details: "Delivered with care instructions, storage tips, and recipe suggestions for maximum enjoyment."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-surface to-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-primary mb-4">
            Farm to Table Journey
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Follow the complete journey of our premium eggs from sustainable farming to your family table
          </p>
        </div>

        {/* Interactive Timeline */}
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-20 left-0 right-0 h-1 bg-border hidden lg:block">
            <div 
              className="h-full bg-secondary transition-all duration-1000 ease-out"
              style={{ width: `${(activeStep / (timelineSteps.length - 1)) * 100}%` }}
            />
          </div>

          {/* Timeline Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-4">
            {timelineSteps.map((step, index) => (
              <div
                key={step.id}
                className={`relative cursor-pointer transition-all duration-300 ${
                  activeStep === index ? 'transform scale-105' : 'hover:transform hover:scale-102'
                }`}
                onClick={() => setActiveStep(index)}
              >
                {/* Step Circle */}
                <div className={`relative z-10 w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-300 ${
                  activeStep === index 
                    ? 'bg-secondary text-secondary-foreground shadow-brand-hover' 
                    : activeStep > index
                    ? 'bg-success text-success-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                }`}>
                  <Icon 
                    name={activeStep > index ? "Check" : step.icon} 
                    size={24} 
                    className="transition-all duration-300"
                  />
                </div>

                {/* Step Content */}
                <div className="text-center">
                  <h3 className={`font-body font-semibold text-sm mb-2 transition-colors duration-300 ${
                    activeStep === index ? 'text-primary' : 'text-text-secondary'
                  }`}>
                    {step.title}
                  </h3>
                  <p className={`font-body text-xs transition-colors duration-300 ${
                    activeStep === index ? 'text-secondary' : 'text-muted-foreground'
                  }`}>
                    {step.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Step Details */}
        <div className="mt-12 bg-card rounded-2xl shadow-brand overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative h-64 lg:h-80 overflow-hidden">
              <Image
                src={timelineSteps[activeStep].image}
                alt={timelineSteps[activeStep].title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name={timelineSteps[activeStep].icon} size={20} />
                  <span className="font-body font-medium text-sm">
                    Step {activeStep + 1} of {timelineSteps.length}
                  </span>
                </div>
                <h3 className="font-headline text-xl font-bold">
                  {timelineSteps[activeStep].title}
                </h3>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Icon name={timelineSteps[activeStep].icon} size={20} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-headline text-2xl font-bold text-primary">
                      {timelineSteps[activeStep].title}
                    </h3>
                    <p className="font-body text-sm text-secondary font-medium">
                      {timelineSteps[activeStep].duration}
                    </p>
                  </div>
                </div>
                
                <p className="font-body text-text-secondary mb-4 leading-relaxed">
                  {timelineSteps[activeStep].description}
                </p>
                
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {timelineSteps[activeStep].details}
                </p>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                  disabled={activeStep === 0}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg font-body font-medium text-sm transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-text-secondary hover:text-primary hover:bg-muted"
                >
                  <Icon name="ChevronLeft" size={16} />
                  <span>Previous</span>
                </button>

                <div className="flex space-x-2">
                  {timelineSteps.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveStep(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        activeStep === index ? 'bg-secondary w-6' : 'bg-border hover:bg-muted-foreground'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setActiveStep(Math.min(timelineSteps.length - 1, activeStep + 1))}
                  disabled={activeStep === timelineSteps.length - 1}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg font-body font-medium text-sm transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-text-secondary hover:text-primary hover:bg-muted"
                >
                  <span>Next</span>
                  <Icon name="ChevronRight" size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmToTableTimeline;