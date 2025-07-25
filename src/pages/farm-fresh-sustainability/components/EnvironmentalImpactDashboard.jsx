import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const EnvironmentalImpactDashboard = () => {
  const [animatedValues, setAnimatedValues] = useState({
    carbonReduction: 0,
    waterSaved: 0,
    wasteReduced: 0,
    treesPlanted: 0
  });

  const targetValues = {
    carbonReduction: 85,
    waterSaved: 12500,
    wasteReduced: 92,
    treesPlanted: 150
  };

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = Object.keys(targetValues).map(key => {
      const target = targetValues[key];
      const increment = target / steps;
      let current = 0;

      return setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(intervals.find(interval => interval === this));
        }
        setAnimatedValues(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));
      }, stepDuration);
    });

    return () => intervals.forEach(interval => clearInterval(interval));
  }, []);

  const impactMetrics = [
    {
      id: 'carbon',
      title: 'Carbon Footprint Reduction',
      value: animatedValues.carbonReduction,
      unit: '%',
      description: 'Compared to industrial farming methods',
      icon: 'Leaf',
      color: 'text-success',
      bgColor: 'bg-success/10',
      details: 'Through sustainable farming practices, renewable energy usage, and local sourcing'
    },
    {
      id: 'water',
      title: 'Water Conservation',
      value: animatedValues.waterSaved,
      unit: 'L/month',
      description: 'Rainwater harvesting & efficient irrigation',
      icon: 'Droplets',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      details: 'Advanced drip irrigation systems and rainwater collection reduce water waste'
    },
    {
      id: 'waste',
      title: 'Waste Reduction',
      value: animatedValues.wasteReduced,
      unit: '%',
      description: 'Zero-waste farming approach',
      icon: 'Recycle',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      details: 'Composting, biodegradable packaging, and circular farming practices'
    },
    {
      id: 'trees',
      title: 'Trees Planted',
      value: animatedValues.treesPlanted,
      unit: '+',
      description: 'Contributing to reforestation efforts',
      icon: 'TreePine',
      color: 'text-green-700',
      bgColor: 'bg-green-50',
      details: 'Native Nigerian trees planted to offset carbon emissions and support biodiversity'
    }
  ];

  const monthlyProgress = [
    { month: 'Jan', carbon: 65, water: 8500, waste: 78, trees: 85 },
    { month: 'Feb', carbon: 70, water: 9200, waste: 82, trees: 95 },
    { month: 'Mar', carbon: 75, water: 10100, waste: 85, trees: 110 },
    { month: 'Apr', carbon: 78, water: 10800, waste: 88, trees: 125 },
    { month: 'May', carbon: 82, water: 11600, waste: 90, trees: 135 },
    { month: 'Jun', carbon: 85, water: 12500, waste: 92, trees: 150 }
  ];

  const certifications = [
    {
      name: "Organic Certification",
      issuer: "Nigerian Organic Agriculture Network",
      date: "Valid until Dec 2024",
      icon: "Award"
    },
    {
      name: "Sustainable Farming",
      issuer: "Lagos State Ministry of Agriculture",
      date: "Certified 2023",
      icon: "Shield"
    },
    {
      name: "Carbon Neutral",
      issuer: "Green Nigeria Initiative",
      date: "Verified 2024",
      icon: "Leaf"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-primary mb-4">
            Environmental Impact Dashboard
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Real-time metrics showcasing our commitment to sustainable agriculture and environmental responsibility
          </p>
        </div>

        {/* Impact Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {impactMetrics.map((metric) => (
            <div key={metric.id} className="bg-card rounded-2xl p-6 shadow-brand hover:shadow-brand-hover transition-all duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 ${metric.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={metric.icon} size={24} className={metric.color} />
                </div>
                <div className="text-right">
                  <div className="flex items-baseline space-x-1">
                    <span className="font-headline text-2xl lg:text-3xl font-bold text-primary">
                      {metric.value.toLocaleString()}
                    </span>
                    <span className="font-body text-sm text-secondary font-medium">
                      {metric.unit}
                    </span>
                  </div>
                </div>
              </div>
              
              <h3 className="font-body font-semibold text-foreground mb-2">
                {metric.title}
              </h3>
              <p className="font-body text-sm text-text-secondary mb-3">
                {metric.description}
              </p>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">
                {metric.details}
              </p>
            </div>
          ))}
        </div>

        {/* Progress Chart */}
        <div className="bg-card rounded-2xl p-8 shadow-brand mb-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="font-headline text-2xl font-bold text-primary mb-2">
                Monthly Progress Tracking
              </h3>
              <p className="font-body text-text-secondary">
                Our environmental impact improvements over the past 6 months
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-success rounded-full"></div>
                <span className="font-body text-sm text-text-secondary">Carbon Reduction</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="font-body text-sm text-text-secondary">Water Saved (000s L)</span>
              </div>
            </div>
          </div>

          <div className="relative h-64 flex items-end justify-between space-x-4">
            {monthlyProgress.map((data, index) => (
              <div key={data.month} className="flex-1 flex flex-col items-center">
                <div className="w-full flex flex-col space-y-2 mb-4">
                  {/* Carbon Bar */}
                  <div className="relative bg-muted rounded-full h-2">
                    <div 
                      className="absolute top-0 left-0 h-full bg-success rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${data.carbon}%` }}
                    />
                  </div>
                  {/* Water Bar */}
                  <div className="relative bg-muted rounded-full h-2">
                    <div 
                      className="absolute top-0 left-0 h-full bg-blue-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${(data.water / 15000) * 100}%` }}
                    />
                  </div>
                </div>
                <span className="font-body text-sm font-medium text-text-secondary">
                  {data.month}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-gradient-to-r from-surface to-muted rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="font-headline text-2xl font-bold text-primary mb-2">
              Certifications & Partnerships
            </h3>
            <p className="font-body text-text-secondary">
              Verified by leading environmental and agricultural organizations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-card rounded-xl p-6 text-center shadow-brand hover:shadow-brand-hover transition-all duration-300 group">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={cert.icon} size={28} className="text-accent-foreground" />
                </div>
                <h4 className="font-body font-semibold text-foreground mb-2">
                  {cert.name}
                </h4>
                <p className="font-body text-sm text-text-secondary mb-1">
                  {cert.issuer}
                </p>
                <p className="font-body text-xs text-muted-foreground">
                  {cert.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnvironmentalImpactDashboard;