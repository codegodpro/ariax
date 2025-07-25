import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const ImpactStory = ({ 
  name, 
  image, 
  story, 
  impact, 
  category, 
  date, 
  metrics 
}) => {
  const getCategoryIcon = () => {
    switch (category) {
      case 'beauty':
        return 'Sparkles';
      case 'career':
        return 'TrendingUp';
      case 'confidence':
        return 'Heart';
      case 'sustainability':
        return 'Leaf';
      default:
        return 'User';
    }
  };

  const getCategoryColor = () => {
    switch (category) {
      case 'beauty':
        return 'text-accent bg-accent/10';
      case 'career':
        return 'text-success bg-success/10';
      case 'confidence':
        return 'text-primary bg-primary/10';
      case 'sustainability':
        return 'text-secondary bg-secondary/10';
      default:
        return 'text-text-secondary bg-muted';
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-brand hover:shadow-brand-hover transition-all duration-300">
      <div className="flex items-start space-x-4 mb-4">
        <div className="relative">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <Image 
              src={image} 
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center ${getCategoryColor()}`}>
            <Icon name={getCategoryIcon()} size={12} />
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-body font-semibold text-text-primary">{name}</h4>
            <span className="text-xs text-text-secondary font-body">{date}</span>
          </div>
          <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor()}`}>
            <Icon name={getCategoryIcon()} size={12} />
            <span className="capitalize">{category}</span>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <blockquote className="font-body text-text-primary leading-relaxed">
          "{story}"
        </blockquote>
        
        <div className="bg-surface/50 rounded-lg p-4">
          <h5 className="font-body font-medium text-text-primary mb-2">Impact Achieved:</h5>
          <p className="font-body text-sm text-text-secondary mb-3">{impact}</p>
          
          {metrics && metrics.length > 0 && (
            <div className="grid grid-cols-2 gap-3">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="font-body font-semibold text-primary text-lg">{metric.value}</div>
                  <div className="font-body text-xs text-text-secondary">{metric.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImpactStory;