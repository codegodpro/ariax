import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TrustIndicators = () => {
  const [activeTab, setActiveTab] = useState('certifications');

  const certifications = [
    {
      id: 1,
      name: "Organic Certification",
      issuer: "Nigerian Organic Agriculture Network (NOAN)",
      certNumber: "NOAN-ORG-2024-0156",
      validUntil: "December 2024",
      image: "https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Certified organic farming practices with no synthetic pesticides, herbicides, or chemical fertilizers.",
      verificationUrl: "https://noan.org.ng/verify/0156",
      benefits: [
        "100% organic feed sourcing",
        "Chemical-free environment",
        "Natural pest management",
        "Soil health preservation"
      ]
    },
    {
      id: 2,
      name: "Animal Welfare Certification",
      issuer: "Lagos State Ministry of Agriculture",
      certNumber: "LSMA-AW-2024-089",
      validUntil: "March 2025",
      image: "https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Certified humane treatment and free-range conditions meeting international animal welfare standards.",
      verificationUrl: "https://lagosagric.gov.ng/verify/089",
      benefits: [
        "Free-range environment",
        "Natural behavior expression",
        "Stress-free conditions",
        "Regular veterinary care"
      ]
    },
    {
      id: 3,
      name: "Food Safety Certification",
      issuer: "National Agency for Food and Drug Administration (NAFDAC)",
      certNumber: "NAFDAC-FS-2024-234",
      validUntil: "June 2025",
      image: "https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Comprehensive food safety standards ensuring product quality from farm to consumer.",
      verificationUrl: "https://nafdac.gov.ng/verify/234",
      benefits: [
        "HACCP compliance",
        "Regular quality testing",
        "Contamination prevention",
        "Traceability systems"
      ]
    },
    {
      id: 4,
      name: "Sustainable Agriculture",
      issuer: "Green Nigeria Initiative",
      certNumber: "GNI-SA-2024-078",
      validUntil: "September 2024",
      image: "https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Recognition for environmental stewardship and sustainable farming practices.",
      verificationUrl: "https://greennigeria.org/verify/078",
      benefits: [
        "Carbon footprint reduction",
        "Water conservation",
        "Renewable energy use",
        "Biodiversity protection"
      ]
    }
  ];

  const healthReports = [
    {
      id: 1,
      title: "Monthly Veterinary Health Report",
      date: "July 2024",
      veterinarian: "Dr. Adunni Okafor, DVM",
      clinic: "Lagos Veterinary Clinic",
      summary: "Comprehensive health assessment of all poultry showing excellent overall health status with 99.2% flock health rating.",
      keyFindings: [
        "Zero disease outbreaks recorded",
        "Optimal nutrition levels maintained",
        "Vaccination schedule up to date",
        "Stress indicators within normal range"
      ],
      downloadUrl: "#",
      reportType: "Veterinary Assessment"
    },
    {
      id: 2,
      title: "Nutritional Analysis Report",
      date: "June 2024",
      laboratory: "Federal Institute of Industrial Research",
      testNumber: "FIIRO-NA-2024-456",
      summary: "Detailed nutritional analysis confirming superior protein content, omega-3 levels, and vitamin density compared to commercial standards.",
      keyFindings: [
        "Protein content: 13.2g per 100g",
        "Omega-3: 180mg per 100g",
        "Vitamin D: 87 IU per 100g",
        "Zero antibiotic residues detected"
      ],
      downloadUrl: "#",
      reportType: "Laboratory Analysis"
    },
    {
      id: 3,
      title: "Microbiological Safety Report",
      date: "July 2024",
      laboratory: "Lagos State Food Safety Laboratory",
      testNumber: "LSFSL-MS-2024-789",
      summary: "Comprehensive microbiological testing confirming absence of harmful pathogens and compliance with international safety standards.",
      keyFindings: [
        "Salmonella: Not detected",
        "E. coli: Within safe limits",
        "Total bacterial count: Excellent",
        "Shelf life: 35+ days refrigerated"
      ],
      downloadUrl: "#",
      reportType: "Safety Testing"
    }
  ];

  const restaurantPartners = [
    {
      id: 1,
      name: "The Yellow Chilli",
      location: "Victoria Island, Lagos",
      chef: "Chef Adebayo Martins",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
      partnership: "Exclusive egg supplier since 2022",
      testimonial: "New Arias eggs have transformed our breakfast menu. The quality and consistency are unmatched, and our customers notice the difference immediately.",
      specialties: ["Gourmet breakfast", "Continental cuisine", "Artisan pastries"],
      rating: 4.8,
      monthlyOrder: "500+ dozens"
    },
    {
      id: 2,
      name: "Nkoyo Restaurant",
      location: "Lekki Phase 1, Lagos",
      chef: "Chef Emeka Okafor",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
      partnership: "Premium supplier since 2021",
      testimonial: "The rich flavor and vibrant yolks of New Arias eggs elevate our traditional Nigerian dishes. Our customers specifically request our egg-based specialties.",
      specialties: ["Nigerian cuisine", "Traditional dishes", "Contemporary fusion"],
      rating: 4.9,
      monthlyOrder: "300+ dozens"
    },
    {
      id: 3,
      name: "Cafe Neo",
      location: "Multiple Lagos locations",
      chef: "Head Chef Sarah Adebisi",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
      partnership: "Chain-wide supplier since 2023",
      testimonial: "Consistency across all our locations is crucial. New Arias delivers the same high quality every time, making our menu standardization seamless.",
      specialties: ["Cafe cuisine", "Light meals", "Baked goods"],
      rating: 4.7,
      monthlyOrder: "800+ dozens"
    },
    {
      id: 4,
      name: "Terra Kulture",
      location: "Tiamiyu Savage, Victoria Island",
      chef: "Chef Folake Adeyemi",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
      partnership: "Cultural cuisine partner since 2022",
      testimonial: "As a restaurant celebrating Nigerian culture, we need ingredients that represent the best of our land. New Arias eggs embody that excellence.",
      specialties: ["Cultural cuisine", "Art gallery dining", "Heritage dishes"],
      rating: 4.9,
      monthlyOrder: "200+ dozens"
    }
  ];

  const qualityMetrics = [
    { label: "Customer Satisfaction", value: 98.5, unit: "%", icon: "Heart" },
    { label: "Quality Consistency", value: 99.2, unit: "%", icon: "Target" },
    { label: "On-Time Delivery", value: 97.8, unit: "%", icon: "Clock" },
    { label: "Return Rate", value: 0.3, unit: "%", icon: "RotateCcw" }
  ];

  const tabs = [
    { id: 'certifications', name: 'Certifications', icon: 'Award' },
    { id: 'health', name: 'Health Reports', icon: 'FileText' },
    { id: 'partners', name: 'Restaurant Partners', icon: 'Users' }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-surface to-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-primary mb-4">
            Trust & Quality Assurance
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Verified certifications, health reports, and trusted partnerships that guarantee our quality
          </p>
        </div>

        {/* Quality Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {qualityMetrics.map((metric, index) => (
            <div key={index} className="bg-card rounded-xl p-6 text-center shadow-brand hover:shadow-brand-hover transition-all duration-300 group">
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon name={metric.icon} size={24} className="text-success" />
              </div>
              <div className="font-headline text-2xl lg:text-3xl font-bold text-primary mb-1">
                {metric.value}{metric.unit}
              </div>
              <p className="font-body text-sm text-text-secondary">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-card rounded-xl p-2 shadow-brand">
            <div className="flex space-x-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-body font-medium text-sm transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-primary text-primary-foreground shadow-brand'
                      : 'text-text-secondary hover:text-primary hover:bg-muted'
                  }`}
                >
                  <Icon name={tab.icon} size={18} />
                  <span>{tab.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px]">
          {/* Certifications Tab */}
          {activeTab === 'certifications' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {certifications.map((cert) => (
                <div key={cert.id} className="bg-card rounded-2xl p-8 shadow-brand hover:shadow-brand-hover transition-all duration-300 group">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border-2 border-success/20 group-hover:border-success/40 transition-colors duration-300">
                      <Image
                        src={cert.image}
                        alt={cert.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-headline text-xl font-bold text-primary mb-1">
                        {cert.name}
                      </h3>
                      <p className="font-body text-sm text-secondary font-medium mb-1">
                        {cert.issuer}
                      </p>
                      <p className="font-body text-xs text-text-secondary">
                        Valid until {cert.validUntil}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="bg-success/10 text-success px-3 py-1 rounded-full text-xs font-medium mb-2">
                        Verified
                      </div>
                      <p className="font-body text-xs text-muted-foreground">
                        #{cert.certNumber}
                      </p>
                    </div>
                  </div>

                  <p className="font-body text-text-secondary mb-6 leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-body font-semibold text-foreground mb-3">Key Benefits:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {cert.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Icon name="CheckCircle" size={14} className="text-success flex-shrink-0" />
                          <span className="font-body text-sm text-text-secondary">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-secondary hover:text-secondary/80 transition-colors duration-200"
                    >
                      <Icon name="ExternalLink" size={16} />
                      <span className="font-body text-sm font-medium">Verify Certificate</span>
                    </a>
                    <div className="flex items-center space-x-1">
                      <Icon name="Shield" size={16} className="text-success" />
                      <span className="font-body text-xs text-success font-medium">Authenticated</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Health Reports Tab */}
          {activeTab === 'health' && (
            <div className="space-y-8">
              {healthReports.map((report) => (
                <div key={report.id} className="bg-card rounded-2xl p-8 shadow-brand hover:shadow-brand-hover transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Report Info */}
                    <div className="lg:col-span-2">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-headline text-xl font-bold text-primary mb-2">
                            {report.title}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm text-text-secondary">
                            <div className="flex items-center space-x-1">
                              <Icon name="Calendar" size={14} />
                              <span>{report.date}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Icon name="FileText" size={14} />
                              <span>{report.reportType}</span>
                            </div>
                          </div>
                        </div>
                        <div className="bg-success/10 text-success px-3 py-1 rounded-full text-xs font-medium">
                          Latest Report
                        </div>
                      </div>

                      <p className="font-body text-text-secondary mb-6 leading-relaxed">
                        {report.summary}
                      </p>

                      <div className="mb-6">
                        <h4 className="font-body font-semibold text-foreground mb-3">Key Findings:</h4>
                        <div className="space-y-2">
                          {report.keyFindings.map((finding, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <Icon name="CheckCircle" size={14} className="text-success flex-shrink-0" />
                              <span className="font-body text-sm text-text-secondary">{finding}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Report Details */}
                    <div className="bg-surface rounded-xl p-6">
                      <h4 className="font-body font-semibold text-foreground mb-4">Report Details</h4>
                      
                      <div className="space-y-3 mb-6">
                        {report.veterinarian && (
                          <div>
                            <p className="font-body text-xs text-text-secondary">Veterinarian</p>
                            <p className="font-body text-sm font-medium text-foreground">{report.veterinarian}</p>
                          </div>
                        )}
                        
                        {report.clinic && (
                          <div>
                            <p className="font-body text-xs text-text-secondary">Clinic</p>
                            <p className="font-body text-sm font-medium text-foreground">{report.clinic}</p>
                          </div>
                        )}
                        
                        {report.laboratory && (
                          <div>
                            <p className="font-body text-xs text-text-secondary">Laboratory</p>
                            <p className="font-body text-sm font-medium text-foreground">{report.laboratory}</p>
                          </div>
                        )}
                        
                        {report.testNumber && (
                          <div>
                            <p className="font-body text-xs text-text-secondary">Test Number</p>
                            <p className="font-body text-sm font-medium text-foreground">{report.testNumber}</p>
                          </div>
                        )}
                      </div>

                      <a
                        href={report.downloadUrl}
                        className="flex items-center justify-center space-x-2 w-full bg-primary text-primary-foreground px-4 py-2 rounded-lg font-body font-medium text-sm hover:bg-primary/90 transition-colors duration-200"
                      >
                        <Icon name="Download" size={16} />
                        <span>Download Report</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Restaurant Partners Tab */}
          {activeTab === 'partners' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {restaurantPartners.map((partner) => (
                <div key={partner.id} className="bg-card rounded-2xl p-8 shadow-brand hover:shadow-brand-hover transition-all duration-300 group">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                      <Image
                        src={partner.image}
                        alt={partner.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-headline text-xl font-bold text-primary mb-1">
                        {partner.name}
                      </h3>
                      <p className="font-body text-sm text-text-secondary mb-1">
                        {partner.location}
                      </p>
                      <p className="font-body text-sm text-secondary font-medium">
                        {partner.chef}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1 mb-1">
                        <Icon name="Star" size={14} className="text-yellow-500 fill-current" />
                        <span className="font-body text-sm font-bold text-foreground">{partner.rating}</span>
                      </div>
                      <p className="font-body text-xs text-text-secondary">
                        {partner.monthlyOrder}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="font-body text-xs text-muted-foreground mb-1">{partner.partnership}</p>
                    <div className="flex flex-wrap gap-2">
                      {partner.specialties.map((specialty, index) => (
                        <span key={index} className="bg-accent/10 text-accent-foreground px-2 py-1 rounded-full text-xs">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <blockquote className="font-body text-text-secondary italic leading-relaxed mb-4">
                    "{partner.testimonial}"
                  </blockquote>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center space-x-2">
                      <Icon name="Award" size={16} className="text-success" />
                      <span className="font-body text-xs text-success font-medium">Verified Partner</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="TrendingUp" size={14} className="text-secondary" />
                      <span className="font-body text-xs text-secondary font-medium">Growing Partnership</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;