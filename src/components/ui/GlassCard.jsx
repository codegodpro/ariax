import React from 'react';
import { cn } from '../../utils/cn';

const GlassCard = ({ 
  children, 
  className = '', 
  variant = 'default',
  ...props 
}) => {
  const variants = {
    default: 'bg-background/80 backdrop-blur-brand border border-border/50',
    elevated: 'bg-card/90 backdrop-blur-brand border border-border shadow-brand',
    luxury: 'bg-gradient-luxury/80 backdrop-blur-brand border border-primary/20',
  };

  return (
    <div 
      className={cn(
        'rounded-xl p-6 transition-all duration-300',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;