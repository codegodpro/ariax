import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ValuesShowcase = () => {
  const [activeValue, setActiveValue] = useState(0);

  const coreValues = [
    {
      id: 0,
      title: "Authenticity",
      subtitle: "Genuine Excellence in Everything",
      icon: "Heart",
      color: "primary",
      description: "We believe in being true to ourselves, our heritage, and our customers. Authenticity drives every decision, from the products we choose to the services we provide. We celebrate genuine beauty and honest relationships.",
      manifestations: [
        {
          area: "Customer Service",
          example: "Honest consultations that prioritize client needs over sales targets",
          impact: "95% customer satisfaction through transparent communication"
        },
        {
          area: "Product Selection",
          example: "Carefully curated products that align with our quality standards",
          impact: "Zero compromise on ingredient quality or ethical sourcing"
        },
        {
          area: "Team Culture",
          example: "Open communication and genuine care for team member growth",
          impact: "98% team retention rate and continuous professional development"
        },
        {
          area: "Community Engagement",
          example: "Real impact initiatives rather than performative gestures",
          impact: "Measurable community improvements and lasting relationships"
        }
      ],
      image: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=800",
      quote: "Authenticity is not about being perfect—it's about being real, honest, and true to our values in every interaction."
    },
    {
      id: 1,
      title: "Sustainability",
      subtitle: "Environmental Consciousness in Action",
      icon: "Leaf",
      color: "conversion",
      description: "Our commitment to sustainability goes beyond trends—it's a fundamental responsibility to future generations. We integrate eco-friendly practices across all operations while maintaining luxury standards.",
      manifestations: [
        {
          area: "Farm Operations",
          example: "Zero-waste farming with composting and renewable energy systems",
          impact: "25% reduction in environmental footprint compared to industry standards"
        },
        {
          area: "Salon Practices",
          example: "Eco-friendly products and water conservation systems",
          impact: "40% reduction in water usage through innovative recycling systems"
        },
        {
          area: "Packaging & Delivery",
          example: "Biodegradable packaging and carbon-neutral delivery options",
          impact: "100% sustainable packaging across all product lines"
        },
        {
          area: "Energy Management",
          example: "Solar power integration and energy-efficient equipment",
          impact: "60% renewable energy usage across all facilities"
        }
      ],
      image: "https://images.pexels.com/photos/1300510/pexels-photo-1300510.jpeg?auto=compress&cs=tinysrgb&w=800",
      quote: "True luxury means enjoying the finest things while ensuring they remain available for future generations."
    },
    {
      id: 2,
      title: "Luxury",
      subtitle: "Premium Experiences with Purpose",
      icon: "Crown",
      color: "accent",
      description: "We redefine luxury as experiences that elevate both the individual and the community. Our premium services create lasting value that extends beyond the moment of service.",
      manifestations: [
        {
          area: "Service Excellence",
          example: "Personalized treatments with premium products and expert techniques",
          impact: "Industry-leading service quality recognized by beauty professionals"
        },
        {
          area: "Facility Design",
          example: "Thoughtfully designed spaces that promote relaxation and transformation",
          impact: "Award-winning interior design that enhances the customer experience"
        },
        {
          area: "Product Quality",
          example: "Premium, ethically-sourced products that deliver exceptional results",
          impact: "Superior outcomes that justify premium pricing through value delivery"
        },
        {
          area: "Customer Experience",
          example: "White-glove service from consultation to follow-up care",
          impact: "Luxury experience accessible to diverse community members"
        }
      ],
      image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800",
      quote: "Luxury is not about exclusion—it\'s about creating exceptional experiences that inspire and elevate everyone they touch."
    },
    {
      id: 3,
      title: "Community",
      subtitle: "Collective Growth and Empowerment",
      icon: "Users",
      color: "secondary",
      description: "We believe that individual transformation creates ripple effects throughout our community. Every service we provide and every job we create contributes to collective prosperity and wellbeing.",
      manifestations: [
        {
          area: "Local Employment",
          example: "Prioritizing local hiring and providing comprehensive training programs",
          impact: "50+ jobs created with competitive wages and growth opportunities"
        },
        {
          area: "Community Programs",
          example: "Free workshops, consultations, and educational initiatives",
          impact: "500+ community members reached through outreach programs"
        },
        {
          area: "Local Partnerships",
          example: "Collaborating with local suppliers and supporting small businesses",
          impact: "₦2M+ invested in local supply chain partnerships annually"
        },
        {
          area: "Cultural Celebration",
          example: "Promoting Nigerian beauty standards and traditional practices",
          impact: "Cultural pride and identity strengthened through authentic representation"
        }
      ],
      image: "https://images.pexels.com/photos/3992499/pexels-photo-3992499.jpeg?auto=compress&cs=tinysrgb&w=800",
      quote: "When we lift each other up, we all rise together. Community is not just where we work—it's who we serve and why we exist."
    }
  ];

  const currentValue = coreValues[activeValue];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 px-4 py-2 rounded-full mb-6">
            <Icon name="Compass" size={16} className="text-secondary" />
            <span className="font-body text-sm font-medium text-secondary">Our Values</span>
          </div>
          <h2 className="font-headline text-4xl lg:text-5xl font-bold text-primary mb-6">
            Values That <span className="text-gradient-brand">Guide Everything</span>
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-3xl mx-auto">
            Our core values aren't just words on a wall—they're living principles that shape every decision, interaction, and innovation at New Arias
          </p>
        </div>

        {/* Interactive Values Explorer */}
        <div className="grid lg:grid-cols-5 gap-8 mb-16">
          {/* Values Navigation */}
          <div className="lg:col-span-2 space-y-4">
            {coreValues.map((value, index) => (
              <button
                key={value.id}
                onClick={() => setActiveValue(index)}
                className={`w-full text-left p-6 rounded-xl border transition-all duration-300 ${
                  activeValue === index
                    ? 'bg-card border-primary shadow-brand'
                    : 'bg-background border-border hover:border-primary/50 hover:shadow-brand'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    activeValue === index 
                      ? `${value.color === 'primary' ? 'bg-primary' : 
                         value.color === 'secondary' ? 'bg-secondary' :
                         value.color === 'accent'? 'bg-accent' : 'bg-conversion'}`
                      : 'bg-muted'
                  }`}>
                    <Icon 
                      name={value.icon} 
                      size={20} 
                      className={activeValue === index 
                        ? 'text-white' :'text-text-secondary'
                      }
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-headline text-xl font-semibold mb-1 ${
                      activeValue === index ? 'text-primary' : 'text-text-primary'
                    }`}>
                      {value.title}
                    </h3>
                    <p className="font-body text-sm text-text-secondary">
                      {value.subtitle}
                    </p>
                  </div>
                  <Icon 
                    name="ChevronRight" 
                    size={16} 
                    className={`transition-transform duration-300 ${
                      activeValue === index ? 'rotate-90 text-primary' : 'text-text-secondary'
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Active Value Content */}
          <div className="lg:col-span-3">
            <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-brand">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={currentValue.image}
                  alt={currentValue.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-background/90 backdrop-blur-brand rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        currentValue.color === 'primary' ? 'bg-primary' : 
                        currentValue.color === 'secondary' ? 'bg-secondary' :
                        currentValue.color === 'accent'? 'bg-accent' : 'bg-conversion'
                      }`}>
                        <Icon name={currentValue.icon} size={18} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-headline text-xl font-bold text-primary">
                          {currentValue.title}
                        </h3>
                        <p className="font-body text-sm text-text-secondary">
                          {currentValue.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="font-body text-text-secondary leading-relaxed mb-6">
                  {currentValue.description}
                </p>

                <div className="bg-muted rounded-lg p-4 mb-6">
                  <Icon name="Quote" size={16} className="text-accent-foreground mb-2" />
                  <p className="font-body text-sm text-text-secondary italic leading-relaxed">
                    {currentValue.quote}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Value Manifestations */}
        <div className="bg-surface/50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="font-headline text-3xl font-bold text-primary mb-4">
              How <span className="text-gradient-brand">{currentValue.title}</span> Shows Up Daily
            </h3>
            <p className="font-body text-text-secondary">
              Real examples of how our values translate into tangible actions and measurable impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {currentValue.manifestations.map((manifestation, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 hover:shadow-brand-hover transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    currentValue.color === 'primary' ? 'bg-primary/10' : 
                    currentValue.color === 'secondary' ? 'bg-secondary/10' :
                    currentValue.color === 'accent'? 'bg-accent/20' : 'bg-conversion/10'
                  }`}>
                    <div className={`w-2 h-2 rounded-full ${
                      currentValue.color === 'primary' ? 'bg-primary' : 
                      currentValue.color === 'secondary' ? 'bg-secondary' :
                      currentValue.color === 'accent' ? 'bg-accent-foreground' :
                      'bg-conversion'
                    }`}></div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-headline text-lg font-semibold text-primary mb-2">
                      {manifestation.area}
                    </h4>
                    <p className="font-body text-sm text-text-secondary mb-3 leading-relaxed">
                      {manifestation.example}
                    </p>
                    <div className={`bg-muted rounded-lg px-3 py-2 ${
                      currentValue.color === 'primary' ? 'border-l-4 border-primary' : 
                      currentValue.color === 'secondary' ? 'border-l-4 border-secondary' :
                      currentValue.color === 'accent'? 'border-l-4 border-accent' : 'border-l-4 border-conversion'
                    }`}>
                      <p className="font-body text-xs font-medium text-primary">
                        Impact: {manifestation.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Integration Statement */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-luxury rounded-2xl p-8 lg:p-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-2 mb-6">
                <Icon name="Infinity" size={24} className="text-primary-foreground" />
                <h3 className="font-headline text-3xl font-bold text-primary-foreground">
                  Values in Harmony
                </h3>
              </div>
              
              <p className="font-body text-lg text-primary-foreground/90 mb-6">
                Our four core values don't exist in isolation—they work together to create the New Arias experience. Authenticity ensures our luxury is genuine, sustainability makes our community impact lasting, and community connection gives meaning to everything we do.
              </p>

              <div className="grid md:grid-cols-4 gap-4">
                {coreValues.map((value, index) => (
                  <div key={value.id} className="bg-background/10 backdrop-blur-brand rounded-lg p-4 border border-primary-foreground/20">
                    <div className="w-8 h-8 bg-primary-foreground/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Icon name={value.icon} size={16} className="text-primary-foreground" />
                    </div>
                    <h4 className="font-headline text-sm font-semibold text-primary-foreground text-center">
                      {value.title}
                    </h4>
                  </div>
                ))}
              </div>

              <p className="font-accent text-lg text-primary-foreground/80 mt-6">
                "When values align with actions, transformation becomes inevitable."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesShowcase;