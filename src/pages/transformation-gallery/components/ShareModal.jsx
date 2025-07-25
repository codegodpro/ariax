import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ShareModal = ({ transformation, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [customMessage, setCustomMessage] = useState('');

  const shareUrl = `${window.location.origin}/transformation-gallery?id=${transformation.id}`;
  const defaultMessage = `Check out this amazing transformation by ${transformation.stylist} at New Arias! 🌟 #NewAriasTransformation #BeautyJourney`;

  const shareOptions = [
    {
      name: 'WhatsApp',
      icon: 'MessageCircle',
      color: 'bg-green-500',
      action: () => {
        const message = customMessage || defaultMessage;
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${message}\n\n${shareUrl}`)}`;
        window.open(whatsappUrl, '_blank');
      }
    },
    {
      name: 'Facebook',
      icon: 'Facebook',
      color: 'bg-blue-600',
      action: () => {
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        window.open(facebookUrl, '_blank', 'width=600,height=400');
      }
    },
    {
      name: 'Twitter',
      icon: 'Twitter',
      color: 'bg-blue-400',
      action: () => {
        const message = customMessage || defaultMessage;
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&url=${encodeURIComponent(shareUrl)}`;
        window.open(twitterUrl, '_blank', 'width=600,height=400');
      }
    },
    {
      name: 'Instagram',
      icon: 'Instagram',
      color: 'bg-gradient-to-r from-purple-500 to-pink-500',
      action: () => {
        // Instagram doesn't support direct URL sharing, so we copy the link
        copyToClipboard();
        alert('Link copied! You can now paste it in your Instagram story or bio.');
      }
    },
    {
      name: 'LinkedIn',icon: 'Linkedin',color: 'bg-blue-700',
      action: () => {
        const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        window.open(linkedinUrl, '_blank', 'width=600,height=400');
      }
    },
    {
      name: 'Email',icon: 'Mail',color: 'bg-gray-600',
      action: () => {
        const subject = `Amazing Transformation at New Arias`;
        const body = `${customMessage || defaultMessage}\n\nView the full transformation here: ${shareUrl}`;
        const emailUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = emailUrl;
      }
    }
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = shareUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card rounded-xl shadow-brand-hover max-w-md w-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h3 className="font-headline font-semibold text-lg text-foreground">
              Share Transformation
            </h3>
            <p className="text-text-secondary text-sm mt-1">
              Spread the beauty inspiration
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-text-secondary hover:text-foreground"
          >
            <Icon name="X" size={20} />
          </Button>
        </div>

        <div className="p-6">
          {/* Transformation Preview */}
          <div className="bg-muted/50 rounded-lg p-4 mb-6">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <Icon name="Sparkles" size={20} className="text-accent-foreground" />
              </div>
              <div>
                <h4 className="font-body font-medium text-foreground">
                  {transformation.clientName}
                </h4>
                <p className="text-text-secondary text-sm">
                  {transformation.category} • {transformation.stylist}
                </p>
              </div>
            </div>
            <p className="text-text-secondary text-sm line-clamp-2">
              {transformation.description}
            </p>
          </div>

          {/* Custom Message */}
          <div className="mb-6">
            <Input
              label="Custom Message (Optional)"
              type="text"
              placeholder={defaultMessage}
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              description="Personalize your share message"
            />
          </div>

          {/* Share Options */}
          <div className="mb-6">
            <h4 className="font-body font-medium text-foreground mb-4">
              Share on Social Media
            </h4>
            <div className="grid grid-cols-3 gap-3">
              {shareOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={option.action}
                  className={`${option.color} text-white p-4 rounded-lg hover:opacity-90 transition-opacity duration-200 flex flex-col items-center space-y-2`}
                >
                  <Icon name={option.icon} size={20} />
                  <span className="text-xs font-medium">{option.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Copy Link */}
          <div className="border-t border-border pt-6">
            <h4 className="font-body font-medium text-foreground mb-3">
              Or Copy Link
            </h4>
            <div className="flex space-x-2">
              <div className="flex-1 px-3 py-2 bg-muted rounded-lg text-text-secondary text-sm font-mono truncate">
                {shareUrl}
              </div>
              <Button
                variant={copied ? "success" : "outline"}
                size="sm"
                onClick={copyToClipboard}
                iconName={copied ? "Check" : "Copy"}
                iconPosition="left"
                className="flex-shrink-0"
              >
                {copied ? "Copied!" : "Copy"}
              </Button>
            </div>
          </div>

          {/* Additional Actions */}
          <div className="mt-6 pt-6 border-t border-border">
            <div className="flex space-x-3">
              <Button
                variant="outline"
                size="sm"
                iconName="Download"
                iconPosition="left"
                className="flex-1"
                onClick={() => {
                  // Create a download link for the transformation image
                  const link = document.createElement('a');
                  link.href = transformation.images[0];
                  link.download = `new-arias-transformation-${transformation.id}.jpg`;
                  link.click();
                }}
              >
                Save Image
              </Button>
              <Button
                variant="default"
                size="sm"
                iconName="Calendar"
                iconPosition="left"
                className="flex-1 bg-cta text-cta-foreground hover:bg-cta/90"
                onClick={() => {
                  onClose();
                  // Navigate to booking page
                  window.location.href = '/salon-spa-experience#booking';
                }}
              >
                Book Similar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;