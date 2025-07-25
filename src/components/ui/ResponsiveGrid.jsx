
import React from 'react';
import { cn } from '../../utils/cn';

const ResponsiveGrid = ({ 
  children, 
  className = "",
  variant = "default",
  gap = "6",
  ...props 
}) => {
  const variants = {
    default: "grid-responsive",
    cards: "grid-responsive-cards",
    masonry: "columns-1 sm:columns-2 lg:columns-3 xl:columns-4",
    auto: "grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))]",
  };

  const gapClasses = {
    "2": "gap-2",
    "4": "gap-4",
    "6": "gap-6",
    "8": "gap-8",
    "12": "gap-12",
  };

  return (
    <div 
      className={cn(
        variants[variant],
        gapClasses[gap],
        className
      )} 
      {...props}
    >
      {children}
    </div>
  );
};

export default ResponsiveGrid;
