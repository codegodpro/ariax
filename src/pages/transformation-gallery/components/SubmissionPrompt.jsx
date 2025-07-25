import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const SubmissionPrompt = ({ onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    clientName: '',
    email: '',
    phone: '',
    serviceCategory: '',
    treatmentDate: '',
    consent: false,
    story: '',
    beforeImage: null,
    afterImage: null
  });

  const [dragActive, setDragActive] = useState({ before: false, after: false });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleDrag = (e, type) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(prev => ({ ...prev, [type]: true }));
    } else if (e.type === "dragleave") {
      setDragActive(prev => ({ ...prev, [type]: false }));
    }
  };

  const handleDrop = (e, type) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(prev => ({ ...prev, [type]: false }));
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0], type);
    }
  };

  const handleFileUpload = (file, type) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData(prev => ({ 
          ...prev, 
          [type === 'before' ? 'beforeImage' : 'afterImage']: e.target.result 
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.consent && formData.beforeImage && formData.afterImage) {
      onSubmit(formData);
    }
  };

  const incentives = [
    {
      icon: "Gift",
      title: "20% Service Discount",
      description: "Get 20% off your next treatment when your transformation is featured"
    },
    {
      icon: "Camera",
      title: "Professional Photos",
      description: "Complimentary professional photography session for featured clients"
    },
    {
      icon: "Star",
      title: "VIP Status",
      description: "Join our VIP client program with exclusive perks and early access"
    },
    {
      icon: "Users",
      title: "Community Feature",
      description: "Be featured across our social media platforms and website"
    }
  ];

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card rounded-xl shadow-brand-hover max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between">
          <div>
            <h2 className="font-headline font-semibold text-2xl text-foreground">
              Share Your Transformation
            </h2>
            <p className="text-text-secondary mt-1">
              Inspire others with your beauty journey and earn exclusive rewards
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
          {/* Incentives Section */}
          <div className="mb-8">
            <h3 className="font-body font-semibold text-lg text-foreground mb-4">
              Exclusive Benefits for Featured Transformations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {incentives.map((incentive, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-accent/10 rounded-lg">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name={incentive.icon} size={16} className="text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-body font-medium text-foreground text-sm">
                      {incentive.title}
                    </h4>
                    <p className="text-text-secondary text-xs mt-1">
                      {incentive.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Submission Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div>
              <h3 className="font-body font-semibold text-lg text-foreground mb-4">
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Full Name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.clientName}
                  onChange={(e) => handleInputChange('clientName', e.target.value)}
                  required
                />
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                />
                <Input
                  label="Phone Number"
                  type="tel"
                  placeholder="+234 xxx xxx xxxx"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  required
                />
                <Input
                  label="Treatment Date"
                  type="date"
                  value={formData.treatmentDate}
                  onChange={(e) => handleInputChange('treatmentDate', e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Service Information */}
            <div>
              <h3 className="font-body font-semibold text-lg text-foreground mb-4">
                Service Details
              </h3>
              <div className="mb-4">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Service Category
                </label>
                <select
                  value={formData.serviceCategory}
                  onChange={(e) => handleInputChange('serviceCategory', e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-input text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
                  required
                >
                  <option value="">Select service category</option>
                  <option value="natural-hair">Natural Hair Care</option>
                  <option value="skincare">Skincare Treatments</option>
                  <option value="bridal">Bridal Styling</option>
                  <option value="everyday">Everyday Transformations</option>
                  <option value="special-occasion">Special Occasions</option>
                  <option value="color-treatment">Color Treatments</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Transformation Story
                </label>
                <textarea
                  value={formData.story}
                  onChange={(e) => handleInputChange('story', e.target.value)}
                  placeholder="Share your experience, how you felt before and after, and what this transformation means to you..."
                  rows={4}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-input text-foreground focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
                  required
                />
              </div>
            </div>

            {/* Image Upload */}
            <div>
              <h3 className="font-body font-semibold text-lg text-foreground mb-4">
                Before & After Photos
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Before Image */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Before Photo
                  </label>
                  <div
                    className={`relative border-2 border-dashed rounded-lg p-6 text-center transition-colors duration-200 ${
                      dragActive.before 
                        ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                    }`}
                    onDragEnter={(e) => handleDrag(e, 'before')}
                    onDragLeave={(e) => handleDrag(e, 'before')}
                    onDragOver={(e) => handleDrag(e, 'before')}
                    onDrop={(e) => handleDrop(e, 'before')}
                  >
                    {formData.beforeImage ? (
                      <div className="relative">
                        <Image
                          src={formData.beforeImage}
                          alt="Before transformation"
                          className="w-full h-48 object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() => handleInputChange('beforeImage', null)}
                          className="absolute top-2 right-2 w-6 h-6 bg-error rounded-full flex items-center justify-center text-error-foreground"
                        >
                          <Icon name="X" size={12} />
                        </button>
                      </div>
                    ) : (
                      <div>
                        <Icon name="Upload" size={32} className="text-text-secondary mx-auto mb-2" />
                        <p className="text-text-secondary text-sm mb-2">
                          Drag & drop your before photo here
                        </p>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => e.target.files[0] && handleFileUpload(e.target.files[0], 'before')}
                          className="hidden"
                          id="before-upload"
                        />
                        <label
                          htmlFor="before-upload"
                          className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg cursor-pointer hover:bg-primary/90 transition-colors duration-200"
                        >
                          <Icon name="Camera" size={16} className="mr-2" />
                          Choose File
                        </label>
                      </div>
                    )}
                  </div>
                </div>

                {/* After Image */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    After Photo
                  </label>
                  <div
                    className={`relative border-2 border-dashed rounded-lg p-6 text-center transition-colors duration-200 ${
                      dragActive.after 
                        ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                    }`}
                    onDragEnter={(e) => handleDrag(e, 'after')}
                    onDragLeave={(e) => handleDrag(e, 'after')}
                    onDragOver={(e) => handleDrag(e, 'after')}
                    onDrop={(e) => handleDrop(e, 'after')}
                  >
                    {formData.afterImage ? (
                      <div className="relative">
                        <Image
                          src={formData.afterImage}
                          alt="After transformation"
                          className="w-full h-48 object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() => handleInputChange('afterImage', null)}
                          className="absolute top-2 right-2 w-6 h-6 bg-error rounded-full flex items-center justify-center text-error-foreground"
                        >
                          <Icon name="X" size={12} />
                        </button>
                      </div>
                    ) : (
                      <div>
                        <Icon name="Upload" size={32} className="text-text-secondary mx-auto mb-2" />
                        <p className="text-text-secondary text-sm mb-2">
                          Drag & drop your after photo here
                        </p>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => e.target.files[0] && handleFileUpload(e.target.files[0], 'after')}
                          className="hidden"
                          id="after-upload"
                        />
                        <label
                          htmlFor="after-upload"
                          className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg cursor-pointer hover:bg-primary/90 transition-colors duration-200"
                        >
                          <Icon name="Camera" size={16} className="mr-2" />
                          Choose File
                        </label>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Consent */}
            <div className="bg-muted/50 rounded-lg p-4">
              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.consent}
                  onChange={(e) => handleInputChange('consent', e.target.checked)}
                  className="w-4 h-4 text-primary border-border rounded focus:ring-primary focus:ring-2 mt-1"
                  required
                />
                <div className="text-sm">
                  <p className="text-foreground font-medium mb-1">
                    Content Usage Consent
                  </p>
                  <p className="text-text-secondary">
                    I consent to New Arias using my photos and story for marketing purposes across 
                    website, social media, and promotional materials. I understand that my submission 
                    will be reviewed and may be featured publicly. I confirm that I have the right 
                    to share these images and that all information provided is accurate.
                  </p>
                </div>
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex space-x-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="default"
                disabled={!formData.consent || !formData.beforeImage || !formData.afterImage}
                iconName="Send"
                iconPosition="left"
                className="flex-1 bg-cta text-cta-foreground hover:bg-cta/90"
              >
                Submit Transformation
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubmissionPrompt;