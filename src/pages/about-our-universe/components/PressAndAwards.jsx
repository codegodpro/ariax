import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const PressAndAwards = () => {
  const [activeTab, setActiveTab] = useState('press');

  const pressFeatures = [
    {
      publication: "Forbes Africa",
      title: "Nigeria\'s Rising Beauty Entrepreneur Redefines Luxury",
      date: "March 2024",
      category: "Business Profile",
      excerpt: "Adaora Nkem-Okafor's New Arias is setting new standards for conscious luxury in Nigeria's beauty industry, proving that sustainability and premium service can coexist beautifully.",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=800",
      logo: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=200",
      readTime: "5 min read",
      featured: true
    },
    {
      publication: "Vogue Nigeria",
      title: "The Future of Nigerian Beauty: Tradition Meets Innovation",
      date: "January 2024",
      category: "Beauty Feature",
      excerpt: "New Arias salon is pioneering a movement that celebrates natural Nigerian beauty while incorporating cutting-edge techniques and sustainable practices.",
      image: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=800",
      logo: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=200",
      readTime: "7 min read",
      featured: true
    },
    {
      publication: "Guardian Nigeria",
      title: "Sustainable Agriculture Meets Beauty: A New Business Model",
      date: "November 2023",
      category: "Sustainability",
      excerpt: "How New Arias is revolutionizing the concept of lifestyle brands by integrating sustainable farming with premium beauty services.",
      image: "https://images.pexels.com/photos/1300510/pexels-photo-1300510.jpeg?auto=compress&cs=tinysrgb&w=800",
      logo: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=200",
      readTime: "4 min read",
      featured: false
    },
    {
      publication: "ThisDay Style",
      title: "Lagos Salon Creates Community Impact Through Beauty",
      date: "September 2023",
      category: "Community",
      excerpt: "New Arias demonstrates how beauty businesses can create meaningful social impact while maintaining luxury standards.",
      image: "https://images.pexels.com/photos/3992499/pexels-photo-3992499.jpeg?auto=compress&cs=tinysrgb&w=800",
      logo: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=200",
      readTime: "6 min read",
      featured: false
    },
    {
      publication: "Bella Naija",
      title: "Meet the Entrepreneur Changing Nigeria\'s Beauty Landscape",
      date: "July 2023",
      category: "Entrepreneur Profile",
      excerpt: "An in-depth look at Adaora Nkem-Okafor's journey from London's beauty industry to creating Nigeria's most innovative lifestyle brand.",
      image: "https://images.pexels.com/photos/3992492/pexels-photo-3992492.jpeg?auto=compress&cs=tinysrgb&w=800",
      logo: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=200",
      readTime: "8 min read",
      featured: false
    },
    {
      publication: "Business Day",
      title: "Young Entrepreneurs Leading Nigeria\'s Green Revolution",
      date: "May 2023",
      category: "Green Business",
      excerpt: "New Arias featured among Nigeria's top sustainable businesses making environmental impact while driving economic growth.",
      image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800",
      logo: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=200",
      readTime: "5 min read",
      featured: false
    }
  ];

  const awards = [
    {
      title: "Young Entrepreneur of the Year",
      organization: "Nigerian Business Excellence Awards",
      year: "2022",
      category: "Business Leadership",
      description: "Recognized for innovative business model combining beauty services with sustainable agriculture, creating significant community impact.",
      significance: "Nigeria's most prestigious business award for entrepreneurs under 35, recognizing innovation, impact, and leadership excellence.",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: "Award",
      color: "primary"
    },
    {
      title: "Sustainable Business Leader Award",
      organization: "Lagos State Environmental Excellence",
      year: "2023",
      category: "Environmental Impact",
      description: "Honored for implementing zero-waste farming practices and sustainable beauty service operations that set new industry standards.",
      significance: "Lagos State\'s highest recognition for businesses demonstrating exceptional environmental stewardship and sustainable practices.",
      image: "https://images.pexels.com/photos/1300510/pexels-photo-1300510.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: "Leaf",
      color: "conversion"
    },
    {
      title: "Beauty Innovation Excellence",
      organization: "African Beauty Industry Awards",
      year: "2023",
      category: "Industry Innovation",
      description: "Awarded for pioneering the integration of traditional Nigerian beauty practices with modern luxury service delivery.",
      significance: "Continental recognition for beauty businesses that advance the industry through innovation, quality, and cultural celebration.",
      image: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: "Sparkles",
      color: "accent"
    },
    {
      title: "Community Impact Champion",
      organization: "Victoria Island Business Association",
      year: "2023",
      category: "Social Responsibility",
      description: "Recognized for creating 50+ jobs and implementing community outreach programs that positively impact local residents.",
      significance: "Local business community\'s recognition for companies that prioritize social responsibility and community development.",
      image: "https://images.pexels.com/photos/3992499/pexels-photo-3992499.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: "Users",
      color: "secondary"
    },
    {
      title: "Forbes Africa 30 Under 30",
      organization: "Forbes Africa",
      year: "2024",
      category: "Business & Industry",
      description: "Selected among Africa's most promising young entrepreneurs for innovative approach to lifestyle business and community impact.",
      significance: "Continental recognition of young leaders who are transforming industries and creating positive change across Africa.",
      image: "https://images.pexels.com/photos/3992492/pexels-photo-3992492.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: "Star",
      color: "primary"
    }
  ];

  const certifications = [
    {
      title: "ISO 14001 Environmental Management",
      issuer: "International Organization for Standardization",
      year: "2023",
      description: "Certified for environmental management systems across all operations",
      icon: "Shield"
    },
    {
      title: "Organic Agriculture Certification",
      issuer: "Nigerian Organic Agriculture Network",
      year: "2022",
      description: "Certified organic farming practices for all agricultural operations",
      icon: "Leaf"
    },
    {
      title: "Beauty Industry Excellence",
      issuer: "Professional Beauty Association Nigeria",
      year: "2023",
      description: "Certified for maintaining highest standards in beauty service delivery",
      icon: "Sparkles"
    },
    {
      title: "Fair Trade Business Practices",
      issuer: "Fair Trade Nigeria",
      year: "2023",
      description: "Certified for ethical business practices and fair treatment of all stakeholders",
      icon: "Heart"
    }
  ];

  return (
    <section className="py-20 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Icon name="Trophy" size={16} className="text-primary" />
            <span className="font-body text-sm font-medium text-primary">Recognition & Awards</span>
          </div>
          <h2 className="font-headline text-4xl lg:text-5xl font-bold text-primary mb-6">
            Industry <span className="text-gradient-brand">Recognition</span>
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-3xl mx-auto">
            Our commitment to excellence, innovation, and community impact has earned recognition from leading industry organizations and media outlets
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-muted p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('press')}
              className={`px-6 py-3 rounded-md font-body font-medium transition-all duration-300 ${
                activeTab === 'press' ?'bg-primary text-primary-foreground shadow-brand' :'text-text-secondary hover:text-primary'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Icon name="Newspaper" size={16} />
                <span>Press Coverage</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('awards')}
              className={`px-6 py-3 rounded-md font-body font-medium transition-all duration-300 ${
                activeTab === 'awards' ?'bg-primary text-primary-foreground shadow-brand' :'text-text-secondary hover:text-primary'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={16} />
                <span>Awards & Honors</span>
              </div>
            </button>
          </div>
        </div>

        {/* Press Coverage Tab */}
        {activeTab === 'press' && (
          <div className="space-y-12">
            {/* Featured Articles */}
            <div>
              <h3 className="font-headline text-2xl font-bold text-primary mb-8 text-center">
                Featured Coverage
              </h3>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {pressFeatures.filter(article => article.featured).map((article, index) => (
                  <div key={index} className="bg-card border border-border rounded-2xl overflow-hidden shadow-brand hover:shadow-brand-hover transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <div className="bg-background/90 backdrop-blur-brand rounded-lg px-3 py-1">
                          <span className="font-body text-xs font-medium text-primary">
                            {article.category}
                          </span>
                        </div>
                      </div>
                      <div className="absolute top-4 right-4">
                        <div className="bg-background/90 backdrop-blur-brand rounded-lg px-2 py-1">
                          <span className="font-body text-xs text-text-secondary">
                            {article.readTime}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 overflow-hidden rounded">
                          <Image
                            src={article.logo}
                            alt={article.publication}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-body text-sm font-medium text-primary">
                            {article.publication}
                          </p>
                          <p className="font-body text-xs text-text-secondary">
                            {article.date}
                          </p>
                        </div>
                      </div>

                      <h4 className="font-headline text-lg font-semibold text-primary mb-3">
                        {article.title}
                      </h4>
                      <p className="font-body text-sm text-text-secondary leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* All Articles */}
            <div>
              <h3 className="font-headline text-2xl font-bold text-primary mb-8 text-center">
                Recent Coverage
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pressFeatures.filter(article => !article.featured).map((article, index) => (
                  <div key={index} className="bg-card border border-border rounded-xl overflow-hidden shadow-brand hover:shadow-brand-hover transition-all duration-300">
                    <div className="relative h-32 overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                    </div>

                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-body text-xs font-medium text-secondary">
                          {article.publication}
                        </span>
                        <span className="font-body text-xs text-text-secondary">
                          {article.date}
                        </span>
                      </div>

                      <h4 className="font-headline text-sm font-semibold text-primary mb-2 line-clamp-2">
                        {article.title}
                      </h4>
                      <p className="font-body text-xs text-text-secondary leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Awards Tab */}
        {activeTab === 'awards' && (
          <div className="space-y-12">
            {/* Major Awards */}
            <div>
              <h3 className="font-headline text-2xl font-bold text-primary mb-8 text-center">
                Major Awards & Honors
              </h3>
              <div className="space-y-8">
                {awards.map((award, index) => (
                  <div key={index} className={`grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}>
                    <div className={`relative overflow-hidden rounded-2xl shadow-brand ${
                      index % 2 === 1 ? 'lg:col-start-2' : ''
                    }`}>
                      <Image
                        src={award.image}
                        alt={award.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                      <div className="absolute top-6 left-6">
                        <div className="bg-background/90 backdrop-blur-brand rounded-lg px-3 py-1">
                          <span className="font-body text-sm font-medium text-primary">
                            {award.year}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          award.color === 'primary' ? 'bg-primary/10' : 
                          award.color === 'secondary' ? 'bg-secondary/10' :
                          award.color === 'accent'? 'bg-accent/20' : 'bg-conversion/10'
                        }`}>
                          <Icon 
                            name={award.icon} 
                            size={20} 
                            className={
                              award.color === 'primary' ? 'text-primary' : 
                              award.color === 'secondary' ? 'text-secondary' :
                              award.color === 'accent' ? 'text-accent-foreground' :
                              'text-conversion'
                            }
                          />
                        </div>
                        <div>
                          <p className="font-body text-sm font-medium text-secondary">
                            {award.organization}
                          </p>
                          <h3 className="font-headline text-2xl font-bold text-primary">
                            {award.title}
                          </h3>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                          <span className="font-body text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded">
                            {award.category}
                          </span>
                          <span className="font-body text-sm text-text-secondary">
                            {award.year}
                          </span>
                        </div>

                        <p className="font-body text-text-secondary leading-relaxed">
                          {award.description}
                        </p>

                        <div className="bg-muted rounded-lg p-4">
                          <h4 className="font-body font-semibold text-primary mb-2">Award Significance:</h4>
                          <p className="font-body text-sm text-text-secondary">
                            {award.significance}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-gradient-luxury rounded-2xl p-8 lg:p-12">
              <div className="text-center mb-8">
                <h3 className="font-headline text-3xl font-bold text-primary-foreground mb-4">
                  Professional Certifications
                </h3>
                <p className="font-body text-primary-foreground/80">
                  Industry certifications that validate our commitment to excellence and best practices
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-background/10 backdrop-blur-brand rounded-xl p-6 border border-primary-foreground/20">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name={cert.icon} size={20} className="text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-headline text-lg font-semibold text-primary-foreground">
                            {cert.title}
                          </h4>
                          <span className="font-body text-xs px-2 py-1 bg-primary-foreground/20 text-primary-foreground rounded">
                            {cert.year}
                          </span>
                        </div>
                        <p className="font-body text-sm text-primary-foreground/70 mb-2">
                          {cert.issuer}
                        </p>
                        <p className="font-body text-sm text-primary-foreground/80">
                          {cert.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PressAndAwards;