import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CertificationBadge = ({ 
  name, 
  issuer, 
  logo, 
  date, 
  validUntil, 
  description, 
  verificationLink,
  type = "environmental" 
}) => {
  const getTypeColor = () => {
    switch (type) {
      case 'environmental':
        return 'border-secondary/20 bg-secondary/5';
      case 'social':
        return 'border-primary/20 bg-primary/5';
      case 'quality':
        return 'border-success/20 bg-success/5';
      case 'safety':
        return 'border-warning/20 bg-warning/5';
      default:
        return 'border-border bg-muted/20';
    }
  };

  const getTypeIcon = () => {
    switch (type) {
      case 'environmental':
        return 'Leaf';
      case 'social':
        return 'Users';
      case 'quality':
        return 'Award';
      case 'safety':
        return 'Shield';
      default:
        return 'CheckCircle';
    }
  };

  return (
    <div className={`border rounded-xl p-6 shadow-brand hover:shadow-brand-hover transition-all duration-300 ${getTypeColor()}`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          {logo ? (
            <div className="w-12 h-12 rounded-lg overflow-hidden bg-white p-1">
              <Image 
                src={logo} 
                alt={`${issuer} logo`}
                className="w-full h-full object-contain"
              />
            </div>
          ) : (
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Icon name={getTypeIcon()} size={24} className="text-primary" />
            </div>
          )}
          
          <div>
            <h4 className="font-body font-semibold text-text-primary">{name}</h4>
            <p className="font-body text-sm text-text-secondary">{issuer}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-1 text-success">
          <Icon name="CheckCircle" size={16} />
          <span className="font-body text-xs font-medium">Verified</span>
        </div>
      </div>
      
      <p className="font-body text-sm text-text-secondary leading-relaxed mb-4">
        {description}
      </p>
      
      <div className="flex items-center justify-between text-xs text-text-secondary">
        <div>
          <span className="font-medium">Issued:</span> {date}
        </div>
        {validUntil && (
          <div>
            <span className="font-medium">Valid until:</span> {validUntil}
          </div>
        )}
      </div>
      
      {verificationLink && (
        <div className="mt-4 pt-4 border-t border-border">
          <a 
            href={verificationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors duration-200"
          >
            <Icon name="ExternalLink" size={14} />
            <span className="font-body text-sm font-medium">Verify Certificate</span>
          </a>
        </div>
      )}
    </div>
  );
};

export default CertificationBadge;