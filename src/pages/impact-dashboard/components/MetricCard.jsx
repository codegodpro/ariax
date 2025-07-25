import React from 'react';
import Icon from '../../../components/AppIcon';

const MetricCard = ({ 
  title, 
  value, 
  unit, 
  change, 
  changeType, 
  icon, 
  description, 
  color = "primary" 
}) => {
  const getColorClasses = () => {
    switch (color) {
      case 'success':
        return 'bg-success/10 text-success border-success/20';
      case 'secondary':
        return 'bg-secondary/10 text-secondary border-secondary/20';
      case 'warning':
        return 'bg-warning/10 text-warning border-warning/20';
      default:
        return 'bg-primary/10 text-primary border-primary/20';
    }
  };

  const getChangeColor = () => {
    if (changeType === 'positive') return 'text-success';
    if (changeType === 'negative') return 'text-error';
    return 'text-text-secondary';
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-brand hover:shadow-brand-hover transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-lg ${getColorClasses()}`}>
          <Icon name={icon} size={24} />
        </div>
        {change && (
          <div className={`flex items-center space-x-1 ${getChangeColor()}`}>
            <Icon 
              name={changeType === 'positive' ? 'TrendingUp' : changeType === 'negative' ? 'TrendingDown' : 'Minus'} 
              size={16} 
            />
            <span className="text-sm font-medium">{change}</span>
          </div>
        )}
      </div>
      
      <div className="space-y-2">
        <h3 className="font-body font-semibold text-text-primary text-lg">
          {value}
          {unit && <span className="text-text-secondary text-base ml-1">{unit}</span>}
        </h3>
        <p className="font-body text-sm text-text-secondary font-medium">{title}</p>
        {description && (
          <p className="font-body text-xs text-text-secondary leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  );
};

export default MetricCard;