import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const PartnershipCard = ({ 
  name, 
  logo, 
  description, 
  category, 
  impact, 
  duration, 
  website,
  achievements = []
}) => {
  const getCategoryColor = () => {
    switch (category) {
      case 'environmental':
        return 'text-secondary bg-secondary/10';
      case 'community':
        return 'text-primary bg-primary/10';
      case 'education':
        return 'text-warning bg-warning/10';
      case 'health':
        return 'text-success bg-success/10';
      default:
        return 'text-text-secondary bg-muted';
    }
  };

  const getCategoryIcon = () => {
    switch (category) {
      case 'environmental':
        return 'Leaf';
      case 'community':
        return 'Users';
      case 'education':
        return 'GraduationCap';
      case 'health':
        return 'Heart';
      default:
        return 'Handshake';
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-brand hover:shadow-brand-hover transition-all duration-300">
      <div className="flex items-start space-x-4 mb-4">
        <div className="w-16 h-16 rounded-lg overflow-hidden bg-white p-2 border border-border">
          <Image 
            src={logo} 
            alt={`${name} logo`}
            className="w-full h-full object-contain"
          />
        </div>
        
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-body font-semibold text-text-primary">{name}</h4>
            {website && (
              <a 
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors duration-200"
              >
                <Icon name="ExternalLink" size={16} />
              </a>
            )}
          </div>
          
          <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor()}`}>
            <Icon name={getCategoryIcon()} size={12} />
            <span className="capitalize">{category}</span>
          </div>
        </div>
      </div>
      
      <p className="font-body text-sm text-text-secondary leading-relaxed mb-4">
        {description}
      </p>
      
      <div className="bg-surface/50 rounded-lg p-4 mb-4">
        <h5 className="font-body font-medium text-text-primary mb-2">Partnership Impact:</h5>
        <p className="font-body text-sm text-text-secondary">{impact}</p>
      </div>
      
      {achievements.length > 0 && (
        <div className="mb-4">
          <h5 className="font-body font-medium text-text-primary mb-3">Key Achievements:</h5>
          <div className="space-y-2">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Icon name="CheckCircle" size={14} className="text-success flex-shrink-0" />
                <span className="font-body text-sm text-text-secondary">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="flex items-center justify-between text-xs text-text-secondary pt-4 border-t border-border">
        <div className="flex items-center space-x-1">
          <Icon name="Calendar" size={12} />
          <span>Partnership since {duration}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Icon name="Handshake" size={12} />
          <span>Active</span>
        </div>
      </div>
    </div>
  );
};

export default PartnershipCard;