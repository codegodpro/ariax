import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProductShowcase = () => {
  const [activeComparison, setActiveComparison] = useState('nutrition');

  const eggProducts = [
    {
      id: 1,
      name: "Premium Free-Range Eggs",
      size: "Large (12 pieces)",
      price: "₦2,500",
      originalPrice: "₦3,000",
      image: "https://images.pexels.com/photos/1556707/pexels-photo-1556707.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Free-Range", "Organic Feed", "Daily Fresh", "No Antibiotics"],
      nutritionScore: 95,
      freshnessScore: 98,
      sustainabilityScore: 92
    },
    {
      id: 2,
      name: "Organic Brown Eggs",
      size: "Medium (18 pieces)",
      price: "₦3,200",
      originalPrice: "₦3,800",
      image: "https://images.pexels.com/photos/1556707/pexels-photo-1556707.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Certified Organic", "Brown Shell", "High Protein", "Omega-3 Rich"],
      nutritionScore: 98,
      freshnessScore: 96,
      sustainabilityScore: 95
    },
    {
      id: 3,
      name: "Farm Fresh White Eggs",
      size: "Large (24 pieces)",
      price: "₦4,500",
      originalPrice: "₦5,200",
      image: "https://images.pexels.com/photos/1556707/pexels-photo-1556707.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Bulk Pack", "Family Size", "Premium Quality", "Same Day Fresh"],
      nutritionScore: 93,
      freshnessScore: 97,
      sustainabilityScore: 90
    }
  ];

  const comparisonData = {
    nutrition: {
      title: "Nutritional Comparison",
      subtitle: "Per 100g serving comparison",
      metrics: [
        { label: "Protein", newArias: "13.2g", commercial: "10.8g", improvement: "+22%" },
        { label: "Omega-3", newArias: "180mg", commercial: "95mg", improvement: "+89%" },
        { label: "Vitamin D", newArias: "87 IU", commercial: "41 IU", improvement: "+112%" },
        { label: "Vitamin B12", newArias: "1.8μg", commercial: "1.2μg", improvement: "+50%" },
        { label: "Folate", newArias: "47μg", commercial: "32μg", improvement: "+47%" },
        { label: "Choline", newArias: "294mg", commercial: "215mg", improvement: "+37%" }
      ]
    },
    freshness: {
      title: "Freshness Standards",
      subtitle: "Quality metrics comparison",
      metrics: [
        { label: "Collection Time", newArias: "6 AM Daily", commercial: "Weekly", improvement: "7x Fresher" },
        { label: "Delivery Time", newArias: "24 Hours", commercial: "7-14 Days", improvement: "10x Faster" },
        { label: "Storage Temp", newArias: "4°C Constant", commercial: "Variable", improvement: "Optimal" },
        { label: "Shell Strength", newArias: "98% Intact", commercial: "85% Intact", improvement: "+15%" },
        { label: "Yolk Color", newArias: "Deep Orange", commercial: "Pale Yellow", improvement: "Superior" },
        { label: "Taste Score", newArias: "9.2/10", commercial: "6.8/10", improvement: "+35%" }
      ]
    },
    sustainability: {
      title: "Environmental Impact",
      subtitle: "Sustainability comparison",
      metrics: [
        { label: "Carbon Footprint", newArias: "1.2kg CO₂", commercial: "4.8kg CO₂", improvement: "-75%" },
        { label: "Water Usage", newArias: "180L/dozen", commercial: "450L/dozen", improvement: "-60%" },
        { label: "Land Use", newArias: "Free Range", commercial: "Caged", improvement: "Humane" },
        { label: "Feed Source", newArias: "Local Organic", commercial: "Industrial", improvement: "Sustainable" },
        { label: "Waste Management", newArias: "Zero Waste", commercial: "High Waste", improvement: "100% Better" },
        { label: "Packaging", newArias: "Biodegradable", commercial: "Plastic", improvement: "Eco-Friendly" }
      ]
    }
  };

  const nutritionistEndorsements = [
    {
      name: "Dr. Adunni Okafor",
      title: "Clinical Nutritionist, Lagos University Teaching Hospital",
      image: "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "New Arias eggs show significantly higher nutritional density compared to commercial alternatives. The omega-3 content is particularly impressive.",
      rating: 5
    },
    {
      name: "Prof. Emeka Nwankwo",
      title: "Food Science Department, University of Nigeria",
      image: "https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "The protein quality and bioavailability in these farm-fresh eggs surpasses industry standards. Excellent for growing children and athletes.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-background to-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-primary mb-4">
            Premium Egg Collection
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Discover the superior quality and nutritional benefits of our farm-fresh eggs
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {eggProducts.map((product) => (
            <div key={product.id} className="bg-card rounded-2xl overflow-hidden shadow-brand hover:shadow-brand-hover transition-all duration-300 group">
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-success text-success-foreground px-3 py-1 rounded-full text-xs font-medium">
                  Fresh Today
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2">
                        {['nutrition', 'freshness', 'sustainability'].map((metric) => (
                          <div key={metric} className="text-center">
                            <div className="text-xs font-medium text-text-secondary capitalize">
                              {metric.slice(0, 4)}
                            </div>
                            <div className="text-sm font-bold text-primary">
                              {product[`${metric}Score`]}%
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="font-headline text-xl font-bold text-primary mb-2">
                  {product.name}
                </h3>
                <p className="font-body text-text-secondary mb-4">
                  {product.size}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature, index) => (
                    <span key={index} className="bg-accent/10 text-accent-foreground px-2 py-1 rounded-full text-xs font-medium">
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Pricing */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-baseline space-x-2">
                    <span className="font-headline text-2xl font-bold text-primary">
                      {product.price}
                    </span>
                    <span className="font-body text-sm text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                  </div>
                  <div className="bg-success/10 text-success px-2 py-1 rounded-full text-xs font-medium">
                    Save ₦{parseInt(product.originalPrice.replace('₦', '').replace(',', '')) - parseInt(product.price.replace('₦', '').replace(',', ''))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    Add to Cart
                  </Button>
                  <Button variant="default" size="sm" className="flex-1 bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    Order Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="bg-card rounded-2xl p-8 shadow-brand mb-16">
          <div className="text-center mb-8">
            <h3 className="font-headline text-2xl font-bold text-primary mb-2">
              Why Choose New Arias Eggs?
            </h3>
            <p className="font-body text-text-secondary">
              Detailed comparison with commercial alternatives
            </p>
          </div>

          {/* Comparison Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-muted rounded-lg p-1 flex space-x-1">
              {Object.keys(comparisonData).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveComparison(key)}
                  className={`px-6 py-2 rounded-md font-body font-medium text-sm transition-all duration-200 capitalize ${
                    activeComparison === key
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-text-secondary hover:text-primary'
                  }`}
                >
                  {key}
                </button>
              ))}
            </div>
          </div>

          {/* Comparison Content */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h4 className="font-headline text-xl font-bold text-primary mb-1">
                {comparisonData[activeComparison].title}
              </h4>
              <p className="font-body text-sm text-text-secondary">
                {comparisonData[activeComparison].subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {comparisonData[activeComparison].metrics.map((metric, index) => (
                <div key={index} className="bg-surface rounded-lg p-4 hover:bg-muted transition-colors duration-200">
                  <div className="text-center">
                    <h5 className="font-body font-semibold text-foreground mb-3">
                      {metric.label}
                    </h5>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-body text-xs text-text-secondary">New Arias</span>
                        <span className="font-body font-bold text-secondary">{metric.newArias}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-body text-xs text-text-secondary">Commercial</span>
                        <span className="font-body font-medium text-muted-foreground">{metric.commercial}</span>
                      </div>
                      <div className="pt-2 border-t border-border">
                        <span className="font-body text-xs font-bold text-success">{metric.improvement}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Nutritionist Endorsements */}
        <div className="bg-gradient-to-r from-accent/5 to-secondary/5 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="font-headline text-2xl font-bold text-primary mb-2">
              Expert Endorsements
            </h3>
            <p className="font-body text-text-secondary">
              Trusted by leading nutritionists and food scientists
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {nutritionistEndorsements.map((expert, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-brand">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={expert.image}
                      alt={expert.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-body font-semibold text-foreground mb-1">
                      {expert.name}
                    </h4>
                    <p className="font-body text-sm text-text-secondary mb-2">
                      {expert.title}
                    </p>
                    <div className="flex space-x-1">
                      {[...Array(expert.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <blockquote className="font-body text-text-secondary italic leading-relaxed">
                  "{expert.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;