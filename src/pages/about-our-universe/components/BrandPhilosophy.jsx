import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const BrandPhilosophy = () => {
  const [activePhilosophy, setActivePhilosophy] = useState(0);

  const philosophyPillars = [
    {
      id: 0,
      title: "Complete Living",
      subtitle: "Holistic Lifestyle Integration",
      icon: "Infinity",
      description: `Complete Living is our core philosophy that beauty and sustainability are not separate pursuits, but interconnected aspects of a fulfilling life. When you transform your appearance, you're also transforming your relationship with yourself and your environment.`,
      principles: [
        "Personal transformation enhances environmental consciousness",
        "Sustainable practices amplify inner beauty",
        "Community wellness creates individual prosperity",
        "Authentic living requires both self-care and earth-care"
      ],
      image: "https://images.pexels.com/photos/3985062/pexels-photo-3985062.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "primary"
    },
    {
      id: 1,
      title: "Conscious Luxury",
      subtitle: "Premium with Purpose",
      icon: "Crown",
      description: `True luxury isn't just about premium experiences—it's about creating positive impact while indulging in life's finest offerings. Our conscious luxury approach ensures every service and product contributes to personal and planetary wellbeing.`,
      principles: [
        "Luxury experiences that give back to community",
        "Premium quality without environmental compromise",
        "Exclusive services accessible to diverse communities",
        "Sophisticated solutions with sustainable foundations"
      ],
      image: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "secondary"
    },
    {
      id: 2,
      title: "Cultural Celebration",
      subtitle: "Modern Nigerian Excellence",
      icon: "Star",
      description: `We celebrate the richness of Nigerian culture while embracing global innovations. Our approach honors traditional beauty practices and agricultural wisdom while incorporating cutting-edge techniques and sustainable technologies.`,
      principles: [
        "Traditional wisdom meets modern innovation",
        "Nigerian beauty standards celebrated globally",
        "Local ingredients elevated to luxury status",
        "Cultural heritage preserved through contemporary expression"
      ],
      image: "https://images.pexels.com/photos/3992499/pexels-photo-3992499.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "accent"
    },
    {
      id: 3,
      title: "Community Transformation",
      subtitle: "Collective Growth Philosophy",
      icon: "Users",
      description: `Individual transformation creates ripple effects throughout our community. Every client's journey contributes to a larger movement of conscious living, sustainable practices, and cultural pride that elevates everyone.`,
      principles: [
        "Individual growth strengthens community bonds",
        "Shared experiences create lasting connections",
        "Local employment drives economic empowerment",
        "Collective consciousness shapes positive change"
      ],
      image: "https://images.pexels.com/photos/3992492/pexels-photo-3992492.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "conversion"
    }
  ];

  const manifesto = {
    title: "The Complete Living Manifesto",
    statements: [
      "We believe beauty is not vanity, but self-respect made visible.",
      "We know that caring for the earth enhances our own radiance.",
      "We understand that luxury without purpose is empty indulgence.",
      "We celebrate Nigerian excellence while embracing global wisdom.",
      "We create spaces where transformation happens naturally.",
      "We build community through shared values and authentic experiences."
    ]
  };

  return (
    <section className="py-20 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Icon name="Compass" size={16} className="text-primary" />
            <span className="font-body text-sm font-medium text-primary">Our Philosophy</span>
          </div>
          <h2 className="font-headline text-4xl lg:text-5xl font-bold text-primary mb-6">
            The <span className="text-gradient-brand">Complete Living</span> Philosophy
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-3xl mx-auto">
            Where personal transformation and environmental consciousness converge to create authentic luxury
          </p>
        </div>

        {/* Philosophy Pillars */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Interactive Navigation */}
          <div className="space-y-4">
            {philosophyPillars.map((pillar, index) => (
              <button
                key={pillar.id}
                onClick={() => setActivePhilosophy(index)}
                className={`w-full text-left p-6 rounded-xl border transition-all duration-300 ${
                  activePhilosophy === index
                    ? 'bg-card border-primary shadow-brand'
                    : 'bg-background border-border hover:border-primary/50 hover:shadow-brand'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    activePhilosophy === index ? 'bg-primary' : 'bg-muted'
                  }`}>
                    <Icon 
                      name={pillar.icon} 
                      size={20} 
                      className={activePhilosophy === index ? 'text-primary-foreground' : 'text-text-secondary'}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-headline text-xl font-semibold mb-1 ${
                      activePhilosophy === index ? 'text-primary' : 'text-text-primary'
                    }`}>
                      {pillar.title}
                    </h3>
                    <p className="font-body text-sm text-text-secondary">
                      {pillar.subtitle}
                    </p>
                  </div>
                  <Icon 
                    name="ChevronRight" 
                    size={16} 
                    className={`transition-transform duration-300 ${
                      activePhilosophy === index ? 'rotate-90 text-primary' : 'text-text-secondary'
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Active Philosophy Content */}
          <div className="bg-card border border-border rounded-xl overflow-hidden shadow-brand">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={philosophyPillars[activePhilosophy].image}
                alt={philosophyPillars[activePhilosophy].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon 
                    name={philosophyPillars[activePhilosophy].icon} 
                    size={18} 
                    className="text-primary-foreground"
                  />
                </div>
                <div>
                  <h3 className="font-headline text-xl font-semibold text-primary">
                    {philosophyPillars[activePhilosophy].title}
                  </h3>
                  <p className="font-body text-sm text-text-secondary">
                    {philosophyPillars[activePhilosophy].subtitle}
                  </p>
                </div>
              </div>

              <p className="font-body text-text-secondary mb-6 leading-relaxed">
                {philosophyPillars[activePhilosophy].description}
              </p>

              <div className="space-y-3">
                <h4 className="font-body font-semibold text-primary">Core Principles:</h4>
                {philosophyPillars[activePhilosophy].principles.map((principle, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="font-body text-sm text-text-secondary">
                      {principle}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Manifesto Section */}
        <div className="bg-gradient-luxury rounded-2xl p-8 lg:p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Icon name="Scroll" size={24} className="text-primary-foreground" />
              <h3 className="font-headline text-2xl font-bold text-primary-foreground">
                {manifesto.title}
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {manifesto.statements.map((statement, index) => (
                <div key={index} className="flex items-start space-x-3 text-left">
                  <div className="w-6 h-6 bg-primary-foreground/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-body text-xs font-bold text-primary-foreground">
                      {index + 1}
                    </span>
                  </div>
                  <p className="font-body text-primary-foreground/90 leading-relaxed">
                    {statement}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-primary-foreground/20">
              <p className="font-accent text-lg text-primary-foreground/80">
                "Complete living starts with conscious choices, grows through authentic experiences, and flourishes in community connection."
              </p>
              <p className="font-body text-sm text-primary-foreground/60 mt-2">
                — New Arias Philosophy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandPhilosophy;