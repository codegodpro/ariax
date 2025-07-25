import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CustomerTestimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Chioma Okafor",
      location: "Victoria Island, Lagos",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      category: "Taste Quality",
      testimonial: `The difference in taste is incredible! These eggs have such rich, vibrant yolks and the flavor is so much better than what I used to buy from the supermarket. My family noticed the change immediately when I started using New Arias eggs for our weekend breakfast.`,
      orderFrequency: "Weekly subscriber for 8 months",
      favoriteUse: "Sunday family breakfast",
      verified: true
    },
    {
      id: 2,
      name: "Dr. Adebayo Martins",
      location: "Lekki Phase 1, Lagos",
      image: "https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      category: "Freshness",
      testimonial: `As a physician, I'm very conscious about what my family eats. The freshness of New Arias eggs is unmatched - you can see it in the firm whites and deep orange yolks. I've been recommending them to my patients who need high-quality protein sources.`,
      orderFrequency: "Bi-weekly orders for 1 year",
      favoriteUse: "Post-workout protein meals",
      verified: true
    },
    {
      id: 3,
      name: "Fatima Ibrahim",
      location: "Ikeja GRA, Lagos",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      category: "Sustainable Agriculture",
      testimonial: `I love supporting businesses that care about the environment. Knowing that these eggs come from free-range hens and sustainable farming practices makes me feel good about my purchase. Plus, the quality is exceptional - my baking has never been better!`,
      orderFrequency: "Monthly bulk orders for 6 months",
      favoriteUse: "Baking and cooking",
      verified: true
    },
    {
      id: 4,
      name: "Emmanuel Okonkwo",
      location: "Surulere, Lagos",
      image: "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      category: "Value for Money",
      testimonial: `Initially, I thought the price was high, but after trying them, I realized the value is incredible. The eggs last longer, taste better, and I feel good knowing I'm supporting local, sustainable farming. My restaurant customers always compliment our egg dishes now.`,
      orderFrequency: "Weekly commercial orders for 4 months",
      favoriteUse: "Restaurant menu items",
      verified: true
    },
    {
      id: 5,
      name: "Blessing Okoro",
      location: "Ajah, Lagos",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      category: "Health Benefits",
      testimonial: `Since switching to New Arias eggs, I've noticed my energy levels are more stable throughout the day. The nutritionist at my gym recommended them for their high protein content and omega-3 levels. They're now a staple in my fitness meal prep.`,
      orderFrequency: "Weekly orders for 10 months",
      favoriteUse: "Fitness meal preparation",
      verified: true
    },
    {
      id: 6,
      name: "Mr. & Mrs. Adeyemi",
      location: "Maryland, Lagos",
      image: "https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      category: "Family Satisfaction",
      testimonial: `Our three children are very picky eaters, but they absolutely love eggs made with New Arias products. The scrambled eggs are fluffier, the omelets are more flavorful, and we feel confident we're giving our kids the best nutrition possible.`,
      orderFrequency: "Bi-weekly family orders for 7 months",
      favoriteUse: "Children\'s breakfast meals",
      verified: true
    }
  ];

  const satisfactionStats = [
    { label: "Customer Satisfaction", value: 98, icon: "Heart" },
    { label: "Repeat Purchase Rate", value: 94, icon: "RotateCcw" },
    { label: "Recommendation Rate", value: 96, icon: "Users" },
    { label: "Quality Rating", value: 4.9, icon: "Star", isDecimal: true }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-surface to-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-primary mb-4">
            What Our Customers Say
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Real stories from families who've experienced the New Arias difference
          </p>
        </div>

        {/* Satisfaction Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {satisfactionStats.map((stat, index) => (
            <div key={index} className="bg-card rounded-xl p-6 text-center shadow-brand hover:shadow-brand-hover transition-all duration-300 group">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon name={stat.icon} size={24} className="text-secondary" />
              </div>
              <div className="font-headline text-2xl lg:text-3xl font-bold text-primary mb-1">
                {stat.isDecimal ? stat.value : stat.value + '%'}
              </div>
              <p className="font-body text-sm text-text-secondary">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Featured Testimonial */}
        <div className="bg-card rounded-2xl shadow-brand-hover overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Customer Image & Info */}
            <div className="relative bg-gradient-to-br from-accent/10 to-secondary/10 p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-brand">
                  <Image
                    src={testimonials[activeTestimonial].image}
                    alt={testimonials[activeTestimonial].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-body font-bold text-lg text-primary">
                    {testimonials[activeTestimonial].name}
                  </h3>
                  <p className="font-body text-sm text-text-secondary mb-1">
                    {testimonials[activeTestimonial].location}
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={14} className="text-yellow-500 fill-current" />
                      ))}
                    </div>
                    {testimonials[activeTestimonial].verified && (
                      <div className="flex items-center space-x-1">
                        <Icon name="CheckCircle" size={14} className="text-success" />
                        <span className="font-body text-xs text-success font-medium">Verified</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="bg-accent/20 text-accent-foreground px-3 py-1 rounded-full text-xs font-medium inline-block mb-4">
                  {testimonials[activeTestimonial].category}
                </div>
                <blockquote className="font-body text-text-secondary leading-relaxed text-lg italic">
                  "{testimonials[activeTestimonial].testimonial}"
                </blockquote>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Icon name="Calendar" size={16} className="text-muted-foreground" />
                  <span className="font-body text-sm text-text-secondary">
                    {testimonials[activeTestimonial].orderFrequency}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Heart" size={16} className="text-muted-foreground" />
                  <span className="font-body text-sm text-text-secondary">
                    Favorite use: {testimonials[activeTestimonial].favoriteUse}
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation & Controls */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="text-center mb-8">
                <h4 className="font-headline text-xl font-bold text-primary mb-2">
                  Customer Story {activeTestimonial + 1} of {testimonials.length}
                </h4>
                <p className="font-body text-text-secondary">
                  Authentic experiences from our valued customers
                </p>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-center space-x-4 mb-8">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 bg-muted hover:bg-accent hover:text-accent-foreground rounded-full flex items-center justify-center transition-all duration-200 group"
                >
                  <Icon name="ChevronLeft" size={20} className="group-hover:scale-110 transition-transform duration-200" />
                </button>

                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        activeTestimonial === index 
                          ? 'bg-secondary w-8' :'bg-border hover:bg-muted-foreground'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 bg-muted hover:bg-accent hover:text-accent-foreground rounded-full flex items-center justify-center transition-all duration-200 group"
                >
                  <Icon name="ChevronRight" size={20} className="group-hover:scale-110 transition-transform duration-200" />
                </button>
              </div>

              {/* Quick Preview */}
              <div className="grid grid-cols-2 gap-4">
                {testimonials.slice(0, 4).map((testimonial, index) => (
                  <button
                    key={testimonial.id}
                    onClick={() => setActiveTestimonial(index)}
                    className={`p-3 rounded-lg text-left transition-all duration-200 ${
                      activeTestimonial === index
                        ? 'bg-accent/20 border-2 border-accent' :'bg-muted hover:bg-surface border-2 border-transparent'
                    }`}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-8 h-8 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-body font-medium text-xs text-foreground">
                          {testimonial.name.split(' ')[0]}
                        </p>
                        <div className="flex space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Icon key={i} name="Star" size={10} className="text-yellow-500 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="font-body text-xs text-text-secondary line-clamp-2">
                      {testimonial.testimonial.substring(0, 60)}...
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="bg-card rounded-xl p-6 shadow-brand hover:shadow-brand-hover transition-all duration-300 group cursor-pointer"
                 onClick={() => setActiveTestimonial(index)}>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-body font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="font-body text-xs text-text-secondary">
                    {testimonial.location}
                  </p>
                </div>
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={12} className="text-yellow-500 fill-current" />
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <span className="bg-accent/10 text-accent-foreground px-2 py-1 rounded-full text-xs font-medium">
                  {testimonial.category}
                </span>
              </div>

              <blockquote className="font-body text-sm text-text-secondary leading-relaxed mb-4 line-clamp-4">
                "{testimonial.testimonial}"
              </blockquote>

              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{testimonial.orderFrequency.split(' ')[0]} customer</span>
                {testimonial.verified && (
                  <div className="flex items-center space-x-1">
                    <Icon name="CheckCircle" size={12} className="text-success" />
                    <span className="text-success">Verified</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;