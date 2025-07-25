import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CommunityImpact = () => {
  const impactMetrics = [
    {
      number: "500+",
      label: "Lives Transformed",
      description: "Beauty transformations that boosted confidence and self-esteem",
      icon: "Sparkles",
      color: "primary"
    },
    {
      number: "50+",
      label: "Jobs Created",
      description: "Direct and indirect employment opportunities in our community",
      icon: "Users",
      color: "secondary"
    },
    {
      number: "10,000+",
      label: "Fresh Eggs Delivered",
      description: "Nutritious, sustainably-produced eggs reaching local families",
      icon: "Package",
      color: "accent"
    },
    {
      number: "25%",
      label: "Carbon Footprint Reduction",
      description: "Environmental impact reduction through sustainable practices",
      icon: "Leaf",
      color: "conversion"
    }
  ];

  const impactStories = [
    {
      category: "Economic Empowerment",
      title: "Local Employment Initiative",
      description: "We've created sustainable employment opportunities for 50+ individuals, from skilled stylists to farm workers, contributing to local economic growth and family stability.",
      image: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=800",
      achievements: [
        "15 full-time salon positions created",
        "8 farm operation jobs established",
        "12 part-time and seasonal opportunities",
        "15 indirect jobs through supply chain partnerships"
      ],
      icon: "Briefcase"
    },
    {
      category: "Environmental Stewardship",
      title: "Sustainable Agriculture Program",
      description: "Our farm operations demonstrate that premium quality and environmental responsibility can coexist, setting new standards for sustainable agriculture in Nigeria.",
      image: "https://images.pexels.com/photos/1300510/pexels-photo-1300510.jpeg?auto=compress&cs=tinysrgb&w=800",
      achievements: [
        "Zero-waste farming practices implemented",
        "Rainwater harvesting system installed",
        "Organic composting program established",
        "Solar-powered farm operations"
      ],
      icon: "Leaf"
    },
    {
      category: "Community Wellness",
      title: "Beauty Education Outreach",
      description: "Free beauty workshops and self-care education programs have reached hundreds of community members, promoting wellness and self-confidence.",
      image: "https://images.pexels.com/photos/3992499/pexels-photo-3992499.jpeg?auto=compress&cs=tinysrgb&w=800",
      achievements: [
        "Monthly community beauty workshops",
        "Free consultations for students",
        "Self-care education programs",
        "Confidence-building initiatives"
      ],
      icon: "Heart"
    },
    {
      category: "Cultural Preservation",
      title: "Nigerian Beauty Heritage",
      description: "We celebrate and preserve traditional Nigerian beauty practices while integrating modern techniques, creating a bridge between heritage and innovation.",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=800",
      achievements: [
        "Traditional beauty techniques documented",
        "Local ingredient sourcing prioritized",
        "Cultural beauty stories shared",
        "Heritage-modern fusion services created"
      ],
      icon: "Star"
    }
  ];

  const testimonials = [
    {
      name: "Amara Okafor",
      role: "Community Member",
      location: "Victoria Island, Lagos",
      quote: "New Arias didn't just transform my appearance—they transformed my entire outlook on life. The confidence I gained here has opened doors I never imagined possible.",
      image: "https://images.pexels.com/photos/3992492/pexels-photo-3992492.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5
    },
    {
      name: "Ibrahim Yusuf",
      role: "Local Business Owner",
      location: "Ikoyi, Lagos",
      quote: "As a customer of their farm-fresh eggs, I've seen firsthand their commitment to quality and sustainability. They're setting new standards for local agriculture.",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5
    },
    {
      name: "Blessing Adebayo",
      role: "Former Workshop Participant",
      location: "Surulere, Lagos",
      quote: "The free beauty workshop I attended changed my perspective on self-care. Now I run my own small beauty business, inspired by what I learned at New Arias.",
      image: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-conversion/10 px-4 py-2 rounded-full mb-6">
            <Icon name="Heart" size={16} className="text-conversion" />
            <span className="font-body text-sm font-medium text-conversion">Community Impact</span>
          </div>
          <h2 className="font-headline text-4xl lg:text-5xl font-bold text-primary mb-6">
            Creating <span className="text-gradient-brand">Positive Change</span>
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-3xl mx-auto">
            Our commitment extends beyond services to meaningful community transformation through economic empowerment, environmental stewardship, and cultural celebration
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {impactMetrics.map((metric, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-brand-hover transition-all duration-300">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                metric.color === 'primary' ? 'bg-primary/10' :
                metric.color === 'secondary' ? 'bg-secondary/10' :
                metric.color === 'accent'? 'bg-accent/20' : 'bg-conversion/10'
              }`}>
                <Icon 
                  name={metric.icon} 
                  size={24} 
                  className={
                    metric.color === 'primary' ? 'text-primary' :
                    metric.color === 'secondary' ? 'text-secondary' :
                    metric.color === 'accent' ? 'text-accent-foreground' :
                    'text-conversion'
                  }
                />
              </div>
              <h3 className="font-headline text-3xl font-bold text-primary mb-2">
                {metric.number}
              </h3>
              <h4 className="font-body font-semibold text-primary mb-2">
                {metric.label}
              </h4>
              <p className="font-body text-sm text-text-secondary">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        {/* Impact Stories */}
        <div className="space-y-12 mb-20">
          <div className="text-center">
            <h3 className="font-headline text-3xl font-bold text-primary mb-4">
              Our Impact Stories
            </h3>
            <p className="font-body text-text-secondary max-w-2xl mx-auto">
              Real stories of transformation, empowerment, and positive change in our community
            </p>
          </div>

          {impactStories.map((story, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-8 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              <div className={`relative overflow-hidden rounded-2xl shadow-brand ${
                index % 2 === 1 ? 'lg:col-start-2' : ''
              }`}>
                <Image
                  src={story.image}
                  alt={story.title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <div className="bg-background/90 backdrop-blur-brand rounded-lg px-3 py-1">
                    <span className="font-body text-sm font-medium text-primary">
                      {story.category}
                    </span>
                  </div>
                </div>
              </div>

              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name={story.icon} size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-sm font-medium text-secondary">
                      {story.category}
                    </p>
                    <h3 className="font-headline text-2xl font-bold text-primary">
                      {story.title}
                    </h3>
                  </div>
                </div>

                <p className="font-body text-text-secondary leading-relaxed">
                  {story.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-body font-semibold text-primary">Key Achievements:</h4>
                  {story.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="font-body text-sm text-text-secondary">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Testimonials */}
        <div className="bg-gradient-luxury rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="font-headline text-3xl font-bold text-primary-foreground mb-4">
              Community Voices
            </h3>
            <p className="font-body text-primary-foreground/80 max-w-2xl mx-auto">
              Hear from community members whose lives have been touched by New Arias
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-background/10 backdrop-blur-brand rounded-xl p-6 border border-primary-foreground/20">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-primary-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="font-body text-sm text-primary-foreground/70">
                      {testimonial.role}
                    </p>
                    <p className="font-body text-xs text-primary-foreground/60">
                      {testimonial.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Icon key={starIndex} name="Star" size={14} className="text-cta fill-current" />
                  ))}
                </div>

                <p className="font-body text-sm text-primary-foreground/90 leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityImpact;