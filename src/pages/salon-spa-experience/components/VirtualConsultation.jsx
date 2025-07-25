import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const VirtualConsultation = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [consultationData, setConsultationData] = useState({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      age: ''
    },
    preferences: {
      serviceType: '',
      faceShape: '',
      skinType: '',
      lifestyle: '',
      budget: ''
    },
    concerns: {
      hairConcerns: [],
      skinConcerns: [],
      specificNeeds: ''
    },
    photo: null
  });
  const [recommendations, setRecommendations] = useState(null);

  const serviceTypes = [
    { value: 'hair', label: 'Hair Services' },
    { value: 'skincare', label: 'Skincare & Facials' },
    { value: 'makeup', label: 'Makeup Services' },
    { value: 'spa', label: 'Spa Treatments' },
    { value: 'bridal', label: 'Bridal Package' },
    { value: 'complete', label: 'Complete Makeover' }
  ];

  const faceShapes = [
    { value: 'oval', label: 'Oval' },
    { value: 'round', label: 'Round' },
    { value: 'square', label: 'Square' },
    { value: 'heart', label: 'Heart' },
    { value: 'diamond', label: 'Diamond' },
    { value: 'oblong', label: 'Oblong' }
  ];

  const skinTypes = [
    { value: 'oily', label: 'Oily' },
    { value: 'dry', label: 'Dry' },
    { value: 'combination', label: 'Combination' },
    { value: 'sensitive', label: 'Sensitive' },
    { value: 'normal', label: 'Normal' },
    { value: 'acne-prone', label: 'Acne-Prone' }
  ];

  const lifestyles = [
    { value: 'busy-professional', label: 'Busy Professional' },
    { value: 'stay-at-home', label: 'Stay at Home' },
    { value: 'student', label: 'Student' },
    { value: 'entrepreneur', label: 'Entrepreneur' },
    { value: 'creative', label: 'Creative Professional' },
    { value: 'retired', label: 'Retired' }
  ];

  const budgetRanges = [
    { value: 'budget', label: '₦5,000 - ₦15,000' },
    { value: 'mid-range', label: '₦15,000 - ₦35,000' },
    { value: 'premium', label: '₦35,000 - ₦60,000' },
    { value: 'luxury', label: '₦60,000+' }
  ];

  const hairConcerns = [
    'Hair breakage', 'Dry scalp', 'Thinning hair', 'Damaged ends',
    'Lack of volume', 'Frizzy hair', 'Color damage', 'Slow growth'
  ];

  const skinConcerns = [
    'Acne', 'Dark spots', 'Uneven skin tone', 'Fine lines',
    'Dryness', 'Oily T-zone', 'Large pores', 'Sensitivity'
  ];

  const handleInputChange = (section, field, value) => {
    setConsultationData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleConcernToggle = (section, concern) => {
    setConsultationData(prev => ({
      ...prev,
      concerns: {
        ...prev.concerns,
        [section]: prev.concerns[section].includes(concern)
          ? prev.concerns[section].filter(c => c !== concern)
          : [...prev.concerns[section], concern]
      }
    }));
  };

  const generateRecommendations = () => {
    // Mock AI recommendations based on input
    const mockRecommendations = {
      primaryService: {
        name: "Natural Hair Revival Package",
        description: "A comprehensive treatment designed for your hair type and concerns",
        price: "₦28,000",
        duration: "3 hours",
        stylist: "Adunni Okafor"
      },
      additionalServices: [
        {
          name: "Melanin Glow Facial",
          description: "Perfect for your skin type and concerns",
          price: "₦15,000",
          duration: "90 minutes"
        },
        {
          name: "Scalp Treatment",
          description: "Addresses your specific scalp concerns",
          price: "₦8,000",
          duration: "45 minutes"
        }
      ],
      homeCareTips: [
        "Use sulfate-free shampoo twice a week",
        "Apply leave-in conditioner to damp hair",
        "Sleep with a silk or satin pillowcase",
        "Deep condition weekly with natural oils"
      ],
      productRecommendations: [
        {
          name: "Shea Moisture Leave-In Conditioner",
          price: "₦3,500",
          description: "Perfect for your hair type"
        },
        {
          name: "African Black Soap Cleanser",
          price: "₦2,800",
          description: "Gentle cleansing for your skin type"
        }
      ]
    };

    setRecommendations(mockRecommendations);
    setCurrentStep(5);
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      generateRecommendations();
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="font-headline text-2xl font-semibold text-primary mb-2">
                Personal Information
              </h3>
              <p className="font-body text-text-secondary">
                Tell us a bit about yourself to get started
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Full Name"
                type="text"
                placeholder="Enter your full name"
                value={consultationData.personalInfo.name}
                onChange={(e) => handleInputChange('personalInfo', 'name', e.target.value)}
                required
              />
              <Input
                label="Email Address"
                type="email"
                placeholder="your.email@example.com"
                value={consultationData.personalInfo.email}
                onChange={(e) => handleInputChange('personalInfo', 'email', e.target.value)}
                required
              />
              <Input
                label="Phone Number"
                type="tel"
                placeholder="+234 xxx xxx xxxx"
                value={consultationData.personalInfo.phone}
                onChange={(e) => handleInputChange('personalInfo', 'phone', e.target.value)}
                required
              />
              <Input
                label="Age Range"
                type="text"
                placeholder="e.g., 25-30"
                value={consultationData.personalInfo.age}
                onChange={(e) => handleInputChange('personalInfo', 'age', e.target.value)}
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="font-headline text-2xl font-semibold text-primary mb-2">
                Your Preferences
              </h3>
              <p className="font-body text-text-secondary">
                Help us understand what you're looking for
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Service Type"
                options={serviceTypes}
                value={consultationData.preferences.serviceType}
                onChange={(value) => handleInputChange('preferences', 'serviceType', value)}
                placeholder="Select service type"
                required
              />
              <Select
                label="Face Shape"
                options={faceShapes}
                value={consultationData.preferences.faceShape}
                onChange={(value) => handleInputChange('preferences', 'faceShape', value)}
                placeholder="Select your face shape"
              />
              <Select
                label="Skin Type"
                options={skinTypes}
                value={consultationData.preferences.skinType}
                onChange={(value) => handleInputChange('preferences', 'skinType', value)}
                placeholder="Select your skin type"
              />
              <Select
                label="Lifestyle"
                options={lifestyles}
                value={consultationData.preferences.lifestyle}
                onChange={(value) => handleInputChange('preferences', 'lifestyle', value)}
                placeholder="Select your lifestyle"
              />
            </div>

            <Select
              label="Budget Range"
              options={budgetRanges}
              value={consultationData.preferences.budget}
              onChange={(value) => handleInputChange('preferences', 'budget', value)}
              placeholder="Select your budget range"
              className="max-w-md"
            />
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="font-headline text-2xl font-semibold text-primary mb-2">
                Your Concerns
              </h3>
              <p className="font-body text-text-secondary">
                What specific areas would you like to address?
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="font-body font-semibold text-primary mb-4">Hair Concerns:</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {hairConcerns.map((concern) => (
                    <button
                      key={concern}
                      onClick={() => handleConcernToggle('hairConcerns', concern)}
                      className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                        consultationData.concerns.hairConcerns.includes(concern)
                          ? 'bg-primary text-primary-foreground shadow-brand'
                          : 'bg-muted text-text-secondary hover:bg-accent hover:text-accent-foreground'
                      }`}
                    >
                      {concern}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-body font-semibold text-primary mb-4">Skin Concerns:</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {skinConcerns.map((concern) => (
                    <button
                      key={concern}
                      onClick={() => handleConcernToggle('skinConcerns', concern)}
                      className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                        consultationData.concerns.skinConcerns.includes(concern)
                          ? 'bg-primary text-primary-foreground shadow-brand'
                          : 'bg-muted text-text-secondary hover:bg-accent hover:text-accent-foreground'
                      }`}
                    >
                      {concern}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <Input
                  label="Specific Needs or Goals"
                  type="text"
                  placeholder="Tell us about any specific needs or goals you have..."
                  value={consultationData.concerns.specificNeeds}
                  onChange={(e) => handleInputChange('concerns', 'specificNeeds', e.target.value)}
                  description="Optional: Share any additional information that might help us serve you better"
                />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="font-headline text-2xl font-semibold text-primary mb-2">
                Photo Upload (Optional)
              </h3>
              <p className="font-body text-text-secondary">
                Upload a photo to get more personalized recommendations
              </p>
            </div>

            <div className="max-w-md mx-auto">
              <div className="border-2 border-dashed border-muted rounded-lg p-8 text-center">
                <Icon name="Upload" size={48} className="text-text-secondary mx-auto mb-4" />
                <p className="font-body text-text-secondary mb-4">
                  Drag and drop your photo here, or click to browse
                </p>
                <Button variant="outline" iconName="Camera" iconPosition="left">
                  Choose Photo
                </Button>
              </div>
              <p className="font-body text-sm text-text-secondary mt-4 text-center">
                Your photo will be kept private and used only for consultation purposes
              </p>
            </div>

            <div className="bg-accent/20 rounded-lg p-6 max-w-2xl mx-auto">
              <div className="flex items-start space-x-3">
                <Icon name="Info" size={20} className="text-primary mt-0.5" />
                <div>
                  <h4 className="font-body font-semibold text-primary mb-2">
                    Why upload a photo?
                  </h4>
                  <ul className="font-body text-sm text-text-secondary space-y-1">
                    <li>• Get more accurate color matching recommendations</li>
                    <li>• Receive personalized style suggestions</li>
                    <li>• Better understanding of your unique features</li>
                    <li>• More targeted product recommendations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <Icon name="Sparkles" size={48} className="text-primary mx-auto mb-4" />
              <h3 className="font-headline text-3xl font-semibold text-primary mb-2">
                Your Personalized Recommendations
              </h3>
              <p className="font-body text-text-secondary">
                Based on your preferences and concerns, here's what we recommend
              </p>
            </div>

            {recommendations && (
              <div className="space-y-8">
                {/* Primary Recommendation */}
                <div className="bg-gradient-luxury rounded-2xl p-6 text-white">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-headline text-xl font-semibold mb-2">
                        Recommended Service
                      </h4>
                      <h5 className="font-body text-lg font-medium">
                        {recommendations.primaryService.name}
                      </h5>
                    </div>
                    <Icon name="Award" size={32} className="text-yellow-300" />
                  </div>
                  
                  <p className="font-body mb-4 opacity-90">
                    {recommendations.primaryService.description}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div>
                      <p className="font-body text-sm opacity-75">Price</p>
                      <p className="font-body font-semibold">{recommendations.primaryService.price}</p>
                    </div>
                    <div>
                      <p className="font-body text-sm opacity-75">Duration</p>
                      <p className="font-body font-semibold">{recommendations.primaryService.duration}</p>
                    </div>
                    <div>
                      <p className="font-body text-sm opacity-75">Stylist</p>
                      <p className="font-body font-semibold">{recommendations.primaryService.stylist}</p>
                    </div>
                  </div>
                  
                  <Button
                    variant="secondary"
                    iconName="Calendar"
                    iconPosition="left"
                    className="bg-white text-primary hover:bg-white/90"
                  >
                    Book This Service
                  </Button>
                </div>

                {/* Additional Services */}
                <div>
                  <h4 className="font-headline text-xl font-semibold text-primary mb-4">
                    Additional Recommended Services
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {recommendations.additionalServices.map((service, index) => (
                      <div key={index} className="bg-card rounded-lg p-4 shadow-brand">
                        <h5 className="font-body font-semibold text-primary mb-2">
                          {service.name}
                        </h5>
                        <p className="font-body text-sm text-text-secondary mb-3">
                          {service.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <span className="font-body font-medium text-secondary">
                              {service.price}
                            </span>
                            <span className="font-body text-sm text-text-secondary">
                              {service.duration}
                            </span>
                          </div>
                          <Button variant="outline" size="sm">
                            Add
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Home Care Tips */}
                <div className="bg-muted rounded-lg p-6">
                  <h4 className="font-headline text-xl font-semibold text-primary mb-4">
                    Personalized Home Care Tips
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {recommendations.homeCareTips.map((tip, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Icon name="Check" size={16} className="text-success mt-1" />
                        <span className="font-body text-sm text-text-secondary">{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Product Recommendations */}
                <div>
                  <h4 className="font-headline text-xl font-semibold text-primary mb-4">
                    Recommended Products
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {recommendations.productRecommendations.map((product, index) => (
                      <div key={index} className="bg-card rounded-lg p-4 shadow-brand">
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-body font-semibold text-primary">
                            {product.name}
                          </h5>
                          <span className="font-body font-medium text-secondary">
                            {product.price}
                          </span>
                        </div>
                        <p className="font-body text-sm text-text-secondary mb-3">
                          {product.description}
                        </p>
                        <Button variant="outline" size="sm" fullWidth>
                          Add to Cart
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border">
                  <Button
                    variant="default"
                    iconName="Calendar"
                    iconPosition="left"
                    className="bg-cta text-cta-foreground hover:bg-cta/90 flex-1"
                  >
                    Book Consultation
                  </Button>
                  <Button
                    variant="outline"
                    iconName="Download"
                    iconPosition="left"
                    className="flex-1"
                  >
                    Save Recommendations
                  </Button>
                  <Button
                    variant="outline"
                    iconName="Share"
                    iconPosition="left"
                    className="flex-1"
                  >
                    Share Results
                  </Button>
                </div>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl lg:text-5xl font-bold text-primary mb-4">
            Virtual Consultation
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Get personalized beauty recommendations powered by AI and expert knowledge
          </p>
        </div>

        <div className="bg-card rounded-2xl shadow-brand-hover overflow-hidden">
          {/* Progress Bar */}
          {currentStep <= 4 && (
            <div className="bg-muted p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="font-body text-sm text-text-secondary">
                  Step {currentStep} of 4
                </span>
                <span className="font-body text-sm text-text-secondary">
                  {Math.round((currentStep / 4) * 100)}% Complete
                </span>
              </div>
              <div className="w-full bg-background rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / 4) * 100}%` }}
                />
              </div>
            </div>
          )}

          <div className="p-6 lg:p-8">
            {renderStep()}

            {/* Navigation Buttons */}
            {currentStep <= 4 && (
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
                <Button
                  variant="outline"
                  iconName="ChevronLeft"
                  iconPosition="left"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                >
                  Previous
                </Button>

                <div className="flex space-x-2">
                  {[1, 2, 3, 4].map((step) => (
                    <div
                      key={step}
                      className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                        step === currentStep
                          ? 'bg-primary'
                          : step < currentStep
                          ? 'bg-success' :'bg-muted'
                      }`}
                    />
                  ))}
                </div>

                <Button
                  variant="default"
                  iconName={currentStep === 4 ? "Sparkles" : "ChevronRight"}
                  iconPosition="right"
                  onClick={nextStep}
                  className="bg-cta text-cta-foreground hover:bg-cta/90"
                >
                  {currentStep === 4 ? 'Get Recommendations' : 'Next'}
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="text-center">
            <Icon name="Shield" size={32} className="text-primary mx-auto mb-3" />
            <h4 className="font-body font-semibold text-primary mb-2">100% Private</h4>
            <p className="font-body text-sm text-text-secondary">
              Your information is kept completely confidential
            </p>
          </div>
          <div className="text-center">
            <Icon name="Zap" size={32} className="text-primary mx-auto mb-3" />
            <h4 className="font-body font-semibold text-primary mb-2">Instant Results</h4>
            <p className="font-body text-sm text-text-secondary">
              Get personalized recommendations in minutes
            </p>
          </div>
          <div className="text-center">
            <Icon name="Users" size={32} className="text-primary mx-auto mb-3" />
            <h4 className="font-body font-semibold text-primary mb-2">Expert Backed</h4>
            <p className="font-body text-sm text-text-secondary">
              Recommendations from certified beauty professionals
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualConsultation;