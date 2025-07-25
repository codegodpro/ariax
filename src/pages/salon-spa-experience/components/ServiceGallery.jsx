import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ServiceGallery = () => {
  const [activeCategory, setActiveCategory] = useState('hair');
  const [selectedService, setSelectedService] = useState(null);

  const serviceCategories = [
    { id: 'hair', name: 'Hair Care', icon: 'Scissors' },
    { id: 'skincare', name: 'Skincare', icon: 'Sparkles' },
    { id: 'makeup', name: 'Makeup', icon: 'Palette' },
    { id: 'spa', name: 'Spa Treatments', icon: 'Flower' },
    { id: 'bridal', name: 'Bridal Services', icon: 'Crown' }
  ];

  const services = {
    hair: [
      {
        id: 1,
        name: "Natural Hair Care",
        description: "Specialized treatments for natural African hair textures using organic shea butter and indigenous oils.",
        price: "₦15,000 - ₦35,000",
        duration: "2-4 hours",
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop",
        beforeAfter: {
          before: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=200&h=200&fit=crop",
          after: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=200&h=200&fit=crop"
        },
        features: ["Deep conditioning", "Protective styling", "Scalp treatment", "Natural product consultation"]
      },
      {
        id: 2,
        name: "Protective Styling",
        description: "Expert braiding, twists, and protective styles that promote hair growth while maintaining elegance.",
        price: "₦8,000 - ₦25,000",
        duration: "3-6 hours",
        image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=400&h=300&fit=crop",
        beforeAfter: {
          before: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=200&h=200&fit=crop",
          after: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=200&h=200&fit=crop"
        },
        features: ["Box braids", "Cornrows", "Twists", "Faux locs"]
      },
      {
        id: 3,
        name: "Color & Highlights",
        description: "Professional coloring services designed specifically for melanin-rich hair and skin tones.",
        price: "₦20,000 - ₦50,000",
        duration: "3-5 hours",
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop",
        beforeAfter: {
          before: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=200&h=200&fit=crop",
          after: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=200&h=200&fit=crop"
        },
        features: ["Balayage", "Highlights", "Full color", "Color correction"]
      }
    ],
    skincare: [
      {
        id: 4,
        name: "Melanin Glow Facial",
        description: "Customized facial treatments using traditional Nigerian ingredients like black soap and honey.",
        price: "₦12,000 - ₦25,000",
        duration: "60-90 minutes",
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop",
        beforeAfter: {
          before: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=200&h=200&fit=crop",
          after: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=200&h=200&fit=crop"
        },
        features: ["Deep cleansing", "Exfoliation", "Hydration", "Anti-aging treatment"]
      },
      {
        id: 5,
        name: "Acne Treatment",
        description: "Specialized acne treatment for darker skin tones, preventing hyperpigmentation.",
        price: "₦15,000 - ₦30,000",
        duration: "75 minutes",
        image: "https://images.unsplash.com/photo-1616391182219-e080b4d1043a?w=400&h=300&fit=crop",
        beforeAfter: {
          before: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=200&h=200&fit=crop",
          after: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=200&h=200&fit=crop"
        },
        features: ["Gentle extraction", "LED therapy", "Custom serum", "Home care plan"]
      }
    ],
    makeup: [
      {
        id: 6,
        name: "Everyday Glam",
        description: "Natural makeup looks that enhance your features for daily confidence.",
        price: "₦8,000 - ₦15,000",
        duration: "45-60 minutes",
        image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=300&fit=crop",
        beforeAfter: {
          before: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=200&h=200&fit=crop",
          after: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=200&h=200&fit=crop"
        },
        features: ["Foundation matching", "Contouring", "Eye enhancement", "Lip color"]
      }
    ],
    spa: [
      {
        id: 7,
        name: "Relaxation Massage",
        description: "Full body massage using traditional Nigerian oils and modern techniques.",
        price: "₦18,000 - ₦35,000",
        duration: "60-90 minutes",
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop",
        beforeAfter: {
          before: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=200&h=200&fit=crop",
          after: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=200&h=200&fit=crop"
        },
        features: ["Swedish massage", "Deep tissue", "Aromatherapy", "Hot stone therapy"]
      }
    ],
    bridal: [
      {
        id: 8,
        name: "Complete Bridal Package",
        description: "Full bridal transformation including hair, makeup, and spa treatments for your special day.",
        price: "₦80,000 - ₦150,000",
        duration: "4-6 hours",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop",
        beforeAfter: {
          before: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=200&h=200&fit=crop",
          after: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=200&h=200&fit=crop"
        },
        features: ["Trial session", "Hair styling", "Makeup application", "Touch-up kit"]
      }
    ]
  };

  const currentServices = services[activeCategory] || [];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl lg:text-5xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Discover our comprehensive range of beauty and wellness services designed for the modern Nigerian woman
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-body font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-brand'
                  : 'bg-muted text-text-secondary hover:bg-accent hover:text-accent-foreground'
              }`}
            >
              <Icon name={category.icon} size={20} />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentServices.map((service) => (
            <div
              key={service.id}
              className="bg-card rounded-2xl shadow-brand hover:shadow-brand-hover transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-primary">{service.duration}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-headline text-xl font-semibold text-primary mb-2">
                  {service.name}
                </h3>
                <p className="font-body text-text-secondary mb-4 text-sm">
                  {service.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <span className="font-body font-semibold text-secondary text-lg">
                    {service.price}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="Eye"
                    iconPosition="left"
                    onClick={() => setSelectedService(service)}
                  >
                    View Details
                  </Button>
                </div>

                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-success" />
                      <span className="font-body text-sm text-text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant="default"
                  fullWidth
                  iconName="Calendar"
                  iconPosition="left"
                  className="bg-cta text-cta-foreground hover:bg-cta/90"
                >
                  Book Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Service Detail Modal */}
        {selectedService && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative h-64">
                <Image
                  src={selectedService.image}
                  alt={selectedService.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
                >
                  <Icon name="X" size={20} className="text-primary" />
                </button>
              </div>

              <div className="p-6">
                <h3 className="font-headline text-2xl font-bold text-primary mb-2">
                  {selectedService.name}
                </h3>
                <p className="font-body text-text-secondary mb-6">
                  {selectedService.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-muted rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="Clock" size={20} className="text-primary" />
                      <span className="font-body font-medium text-primary">Duration</span>
                    </div>
                    <span className="font-body text-text-secondary">{selectedService.duration}</span>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="DollarSign" size={20} className="text-primary" />
                      <span className="font-body font-medium text-primary">Price Range</span>
                    </div>
                    <span className="font-body text-text-secondary">{selectedService.price}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-body font-semibold text-primary mb-3">What's Included:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedService.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-success" />
                        <span className="font-body text-sm text-text-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Before/After Section */}
                <div className="mb-6">
                  <h4 className="font-body font-semibold text-primary mb-3">Transformation Gallery:</h4>
                  <div className="flex space-x-4">
                    <div className="flex-1">
                      <p className="font-body text-sm text-text-secondary mb-2">Before</p>
                      <Image
                        src={selectedService.beforeAfter.before}
                        alt="Before treatment"
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex items-center">
                      <Icon name="ArrowRight" size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-body text-sm text-text-secondary mb-2">After</p>
                      <Image
                        src={selectedService.beforeAfter.after}
                        alt="After treatment"
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="default"
                    iconName="Calendar"
                    iconPosition="left"
                    className="bg-cta text-cta-foreground hover:bg-cta/90 flex-1"
                  >
                    Book This Service
                  </Button>
                  <Button
                    variant="outline"
                    iconName="MessageCircle"
                    iconPosition="left"
                    className="flex-1"
                  >
                    Ask Questions
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceGallery;