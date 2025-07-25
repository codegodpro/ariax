import React, { useState } from 'react';
import Image from '@/components/AppImage';
import Icon from '@/components/AppIcon';
import Button from '@/components/ui/Button';

const TransformationCard = ({ transformation, onFavorite, onShare, onRequestService }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === transformation.images.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? transformation.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-card rounded-xl shadow-brand hover:shadow-brand-hover transition-all duration-300 overflow-hidden group">
      {/* Image Gallery Section */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={transformation.images[currentImageIndex]}
          alt={`${transformation.clientName} transformation - ${transformation.category}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Image Navigation */}
        {transformation.images.length > 1 && (
          <>
            <button
              onClick={handlePrevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-background"
            >
              <Icon name="ChevronLeft" size={16} className="text-foreground" />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-background"
            >
              <Icon name="ChevronRight" size={16} className="text-foreground" />
            </button>
            
            {/* Image Indicators */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1">
              {transformation.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    index === currentImageIndex ? 'bg-primary' : 'bg-background/60'
                  }`}
                />
              ))}
            </div>
          </>
        )}

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
            {transformation.category}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => onFavorite(transformation.id)}
            className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors duration-200 ${
              transformation.isFavorited 
                ? 'bg-error text-error-foreground' 
                : 'bg-background/80 text-foreground hover:bg-background'
            }`}
          >
            <Icon name="Heart" size={14} fill={transformation.isFavorited ? "currentColor" : "none"} />
          </button>
          <button
            onClick={() => onShare(transformation)}
            className="w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-background transition-colors duration-200"
          >
            <Icon name="Share2" size={14} />
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Client Info */}
        <div className="flex items-center space-x-3 mb-4">
          <Image
            src={transformation.clientAvatar}
            alt={transformation.clientName}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-headline font-semibold text-lg text-foreground">
              {transformation.clientName}
            </h3>
            <p className="text-sm text-text-secondary">
              {transformation.treatmentDate}
            </p>
          </div>
        </div>

        {/* Transformation Details */}
        <div className="mb-4">
          <h4 className="font-body font-medium text-foreground mb-2">
            {transformation.title}
          </h4>
          <p className="text-sm text-text-secondary line-clamp-3">
            {transformation.description}
          </p>
        </div>

        {/* Treatment Info */}
        <div className="flex flex-wrap gap-2 mb-4">
          <div className="flex items-center space-x-1 text-xs text-text-secondary">
            <Icon name="Clock" size={12} />
            <span>{transformation.duration}</span>
          </div>
          <div className="flex items-center space-x-1 text-xs text-text-secondary">
            <Icon name="User" size={12} />
            <span>{transformation.stylist}</span>
          </div>
          {transformation.price && (
            <div className="flex items-center space-x-1 text-xs text-secondary">
              <Icon name="Tag" size={12} />
              <span>₦{transformation.price.toLocaleString()}</span>
            </div>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {transformation.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
            >
              {tag}
            </span>
          ))}
          {transformation.tags.length > 3 && (
            <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
              +{transformation.tags.length - 3} more
            </span>
          )}
        </div>

        {/* Expandable Content */}
        {isExpanded && (
          <div className="border-t border-border pt-4 mb-4 animate-gentle-fade">
            <div className="space-y-3">
              {/* Client Testimonial */}
              <div>
                <h5 className="font-body font-medium text-sm text-foreground mb-2">
                  Client's Experience
                </h5>
                <p className="text-sm text-text-secondary italic">
                  "{transformation.testimonial}"
                </p>
              </div>

              {/* Stylist Insights */}
              <div>
                <h5 className="font-body font-medium text-sm text-foreground mb-2">
                  Stylist's Notes
                </h5>
                <p className="text-sm text-text-secondary">
                  {transformation.stylistNotes}
                </p>
              </div>

              {/* Treatment Process */}
              <div>
                <h5 className="font-body font-medium text-sm text-foreground mb-2">
                  Treatment Process
                </h5>
                <ul className="text-sm text-text-secondary space-y-1">
                  {transformation.process.map((step, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-primary font-medium">{index + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Maintenance Tips */}
              {transformation.maintenance && (
                <div>
                  <h5 className="font-body font-medium text-sm text-foreground mb-2">
                    Maintenance Tips
                  </h5>
                  <p className="text-sm text-text-secondary">
                    {transformation.maintenance}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
            iconPosition="right"
            className="flex-1"
          >
            {isExpanded ? "Show Less" : "Read More"}
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={() => onRequestService(transformation)}
            iconName="Calendar"
            iconPosition="left"
            className="flex-1 bg-cta text-cta-foreground hover:bg-cta/90"
          >
            Book Similar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TransformationCard;