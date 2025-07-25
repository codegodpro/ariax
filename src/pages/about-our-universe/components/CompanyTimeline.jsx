import React, { useState } from 'react';
import Icon from '@/components/AppIcon';
import Image from '@/components/AppImage';

const CompanyTimeline = () => {
  const [selectedMilestone, setSelectedMilestone] = useState(0);

  const timelineData = [
    {
      year: "2019",
      quarter: "Q4",
      title: "The Vision Takes Shape",
      subtitle: "Conceptualization & Planning",
      description: "After years in London's luxury beauty industry, founder Adaora Nkem-Okafor conceptualized New Arias as Nigeria's first dual-brand lifestyle ecosystem. Extensive market research and business planning began, focusing on the intersection of beauty and sustainability.",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=800",
      achievements: [
        "Completed comprehensive market analysis",
        "Developed brand philosophy and identity",
        "Secured initial funding and partnerships",
        "Identified prime location in Victoria Island"
      ],
      icon: "Lightbulb",
      color: "primary"
    },
    {
      year: "2020",
      quarter: "Q2",
      title: "Foundation & Launch",
      subtitle: "First Salon Opens",
      description: "Despite global challenges, New Arias opened its flagship salon in Victoria Island, Lagos. The launch focused on premium beauty services with a commitment to sustainable practices and community engagement from day one.",
      image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800",
      achievements: [
        "Opened 2,500 sq ft flagship salon",
        "Hired and trained 8 skilled professionals",
        "Launched signature beauty services",
        "Established community outreach programs"
      ],
      icon: "Home",
      color: "secondary"
    },
    {
      year: "2021",
      quarter: "Q1",
      title: "Sustainable Expansion",
      subtitle: "Farm Division Launch",
      description: "New Arias expanded beyond beauty with the launch of our sustainable farm operations. This marked the beginning of our complete living philosophy, integrating fresh, organic produce into our lifestyle ecosystem.",
      image: "https://images.pexels.com/photos/1300510/pexels-photo-1300510.jpeg?auto=compress&cs=tinysrgb&w=800",
      achievements: [
        "Established 5-acre sustainable farm",
        "Implemented zero-waste farming practices",
        "Launched fresh egg delivery service",
        "Created 12 additional employment opportunities"
      ],
      icon: "Leaf",
      color: "conversion"
    },
    {
      year: "2022",
      quarter: "Q3",
      title: "Industry Recognition",
      subtitle: "Awards & Accolades",
      description: "New Arias gained significant industry recognition, with founder Adaora receiving the 'Young Entrepreneur of the Year' award. The brand's unique approach to luxury lifestyle began attracting national attention.",
      image: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=800",
      achievements: [
        "Won Young Entrepreneur of the Year award",
        "Featured in major Nigerian business publications",
        "Reached 200+ satisfied customers",
        "Expanded team to 25+ professionals"
      ],
      icon: "Award",
      color: "accent"
    },
    {
      year: "2023",
      quarter: "Q2",
      title: "Community Impact",
      subtitle: "Milestone Achievements",
      description: "A landmark year for community impact, New Arias reached significant milestones in both beauty transformations and sustainable agriculture, solidifying its position as a community cornerstone.",
      image: "https://images.pexels.com/photos/3992499/pexels-photo-3992499.jpeg?auto=compress&cs=tinysrgb&w=800",
      achievements: [
        "Completed 500+ beauty transformations",
        "Created 50+ direct and indirect jobs",
        "Delivered 10,000+ fresh eggs to community",
        "Launched monthly community workshops"
      ],
      icon: "Users",
      color: "primary"
    },
    {
      year: "2024",
      quarter: "Q1",
      title: "Cultural Destination",
      subtitle: "National Recognition",
      description: "New Arias evolved into a recognized cultural destination, setting new standards for luxury lifestyle brands in Nigeria. International partnerships and expansion plans began taking shape.",
      image: "https://images.pexels.com/photos/3992492/pexels-photo-3992492.jpeg?auto=compress&cs=tinysrgb&w=800",
      achievements: [
        "Established as Nigeria's premier lifestyle hub",
        "Secured international brand partnerships",
        "Launched digital transformation platform",
        "Began expansion planning for second location"
      ],
      icon: "Star",
      color: "secondary"
    }
  ];

  const futureVision = {
    title: "Our Future Vision",
    subtitle: "2025 & Beyond",
    goals: [
      {
        title: "Multi-City Expansion",
        description: "Bringing the New Arias experience to Abuja, Port Harcourt, and other major Nigerian cities",
        icon: "MapPin",
        timeline: "2025-2026"
      },
      {
        title: "Digital Innovation Hub",
        description: "Launching virtual consultations, AI-powered beauty recommendations, and online farm-to-table delivery",
        icon: "Smartphone",
        timeline: "2025"
      },
      {
        title: "Sustainability Leadership",
        description: "Becoming Nigeria's first carbon-neutral lifestyle brand through renewable energy and sustainable practices",
        icon: "Leaf",
        timeline: "2026"
      },
      {
        title: "Cultural Export",
        description: "Expanding internationally to celebrate Nigerian beauty and agricultural excellence globally",
        icon: "Globe",
        timeline: "2027"
      }
    ]
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Icon name="Clock" size={16} className="text-primary" />
            <span className="font-body text-sm font-medium text-primary">Our Journey</span>
          </div>
          <h2 className="font-headline text-4xl lg:text-5xl font-bold text-primary mb-6">
            Evolution to <span className="text-gradient-brand">Cultural Destination</span>
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-3xl mx-auto">
            From concept to Nigeria's premier luxury lifestyle ecosystem—discover the milestones that shaped our journey
          </p>
        </div>

        {/* Interactive Timeline */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Timeline Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              {timelineData.map((milestone, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedMilestone(index)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                    selectedMilestone === index
                      ? 'bg-card border-primary shadow-brand'
                      : 'bg-background border-border hover:border-primary/50 hover:shadow-brand'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      selectedMilestone === index 
                        ? `${milestone.color === 'primary' ? 'bg-primary' : 
                           milestone.color === 'secondary' ? 'bg-secondary' :
                           milestone.color === 'accent'? 'bg-accent' : 'bg-conversion'}`
                        : 'bg-muted'
                    }`}>
                      <Icon 
                        name={milestone.icon} 
                        size={16} 
                        className={selectedMilestone === index 
                          ? 'text-white' :'text-text-secondary'
                        }
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className={`font-body text-sm font-bold ${
                          selectedMilestone === index ? 'text-primary' : 'text-text-secondary'
                        }`}>
                          {milestone.year}
                        </span>
                        <span className={`font-body text-xs px-2 py-0.5 rounded ${
                          selectedMilestone === index 
                            ? 'bg-primary/10 text-primary' :'bg-muted text-text-secondary'
                        }`}>
                          {milestone.quarter}
                        </span>
                      </div>
                      <h3 className={`font-headline text-sm font-semibold ${
                        selectedMilestone === index ? 'text-primary' : 'text-text-primary'
                      }`}>
                        {milestone.title}
                      </h3>
                      <p className="font-body text-xs text-text-secondary">
                        {milestone.subtitle}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Timeline Content */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-brand">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={timelineData[selectedMilestone].image}
                  alt={timelineData[selectedMilestone].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-background/90 backdrop-blur-brand rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-body text-sm font-bold text-primary">
                        {timelineData[selectedMilestone].year}
                      </span>
                      <span className="font-body text-xs px-2 py-0.5 bg-primary/10 text-primary rounded">
                        {timelineData[selectedMilestone].quarter}
                      </span>
                    </div>
                    <h3 className="font-headline text-xl font-bold text-primary">
                      {timelineData[selectedMilestone].title}
                    </h3>
                    <p className="font-body text-sm text-text-secondary">
                      {timelineData[selectedMilestone].subtitle}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="font-body text-text-secondary leading-relaxed mb-6">
                  {timelineData[selectedMilestone].description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-body font-semibold text-primary">Key Achievements:</h4>
                  {timelineData[selectedMilestone].achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="font-body text-sm text-text-secondary">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Future Vision */}
        <div className="bg-gradient-luxury rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Icon name="Telescope" size={24} className="text-primary-foreground" />
              <h3 className="font-headline text-3xl font-bold text-primary-foreground">
                {futureVision.title}
              </h3>
            </div>
            <p className="font-body text-primary-foreground/80 text-lg">
              {futureVision.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {futureVision.goals.map((goal, index) => (
              <div key={index} className="bg-background/10 backdrop-blur-brand rounded-xl p-6 border border-primary-foreground/20">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={goal.icon} size={20} className="text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-headline text-lg font-semibold text-primary-foreground">
                        {goal.title}
                      </h4>
                      <span className="font-body text-xs px-2 py-1 bg-primary-foreground/20 text-primary-foreground rounded">
                        {goal.timeline}
                      </span>
                    </div>
                    <p className="font-body text-sm text-primary-foreground/80 leading-relaxed">
                      {goal.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 pt-6 border-t border-primary-foreground/20">
            <p className="font-accent text-lg text-primary-foreground/90">
              "The future of New Arias is the future of conscious luxury in Nigeria—where tradition meets innovation, and individual transformation creates collective prosperity."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyTimeline;