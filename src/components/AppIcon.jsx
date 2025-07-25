
import React from 'react';
import * as Icons from 'lucide-react';

const AppIcon = ({ name, size = 24, className = "", ...props }) => {
  const IconComponent = Icons[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in lucide-react`);
    return <Icons.HelpCircle size={size} className={className} {...props} />;
  }
  
  return <IconComponent size={size} className={className} {...props} />;
};

export default AppIcon;
