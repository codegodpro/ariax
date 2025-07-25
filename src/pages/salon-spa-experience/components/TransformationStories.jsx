import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TransformationStories = () => {
  const [selectedStory, setSelectedStory] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All Stories', count: 12 },
    { id: 'hair', name: 'Hair Transformation', count: 5 },
    { id: 'skincare', name: 'Skincare Journey', count: 3 },
    { id: 'bridal', name: 'Bridal Makeover', count: 2 },
    { id: 'confidence', name: 'Confidence Boost', count: 2 }
  ];

  const transformationStories = [
    {
      id: 1,
      name: "Kemi Adebayo",
      age: 28,
      profession: "Marketing Executive",
      category: "hair",
      beforeImage: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=300&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=300&h=300&fit=crop",
      serviceType: "Natural Hair Revival Package",
      duration: "6 months",
      stylist: "Adunni Okafor",
      rating: 5,
      testimonial: "I had been struggling with damaged hair for years due to excessive heat styling and chemical treatments. When I found New Arias, I was skeptical but desperate. Adunni took one look at my hair and created a comprehensive recovery plan.",
      fullStory: `My hair journey has been a rollercoaster of emotions. Growing up, I was told my natural hair was "difficult" and "unprofessional." I spent years straightening, relaxing, and heat-styling my hair into submission, not realizing I was slowly destroying it.

By 2023, my hair was breaking off, thinning at the crown, and I had developed scalp issues from harsh chemicals. I was wearing wigs daily and felt like I had lost a part of my identity. That's when my sister recommended New Arias.

**The Consultation:**
Adunni spent over an hour examining my hair and scalp, asking about my history, lifestyle, and goals. She didn't judge or make me feel bad about the damage. Instead, she explained what had happened and outlined a realistic recovery plan.

**The Treatment Plan:**
- **Month 1-2**: Deep conditioning treatments twice weekly, scalp healing therapy
- **Month 3-4**: Protective styling with regular moisture treatments
- **Month 5-6**: Gradual introduction of styling, length retention focus

**The Journey:**
The first month was challenging. My hair looked worse before it got better as we stripped away years of product buildup. But Adunni kept encouraging me, showing me small signs of progress I couldn't see.

By month three, I noticed my hair felt different - softer, stronger. The protective styles Adunni created were so beautiful that I received compliments daily. People couldn't believe it was my real hair!

**The Transformation:**
Six months later, I have healthy, thriving natural hair that I'm proud to wear in its natural state. More importantly, I've learned to love and care for my hair properly. The confidence boost has affected every area of my life.

**Key Learnings:**
- Patience is essential in hair recovery
- Proper products make a huge difference
- Professional guidance is invaluable
- Self-love is the foundation of beauty

**My Advice:**
Don't give up on your natural hair. Find professionals who understand your hair type and are committed to its health, not just quick fixes. The journey is worth it!Today, I'm a natural hair advocate and regularly share my story to inspire other women. New Arias didn't just transform my hair; they transformed my relationship with myself.`,
      beforeChallenges: [
        "Severe hair breakage and thinning",
        "Scalp irritation from chemicals",
        "Low self-esteem about natural hair",
        "Dependency on wigs and extensions"
      ],
      afterBenefits: [
        "Healthy, strong natural hair",
        "Improved scalp health",
        "Increased confidence",
        "Knowledge of proper hair care"
      ],
      productsUsed: [
        "Shea Moisture Deep Conditioning Mask",
        "African Pride Scalp Treatment",
        "Natural Hair Growth Oil Blend",
        "Protective Styling Products"
      ],
      timeline: [
        { month: 1, milestone: "Started deep conditioning treatments" },
        { month: 2, milestone: "Scalp healing and product detox" },
        { month: 3, milestone: "First protective style installation" },
        { month: 4, milestone: "Noticeable hair strength improvement" },
        { month: 5, milestone: "Length retention visible" },
        { month: 6, milestone: "Full transformation complete" }
      ]
    },
    {
      id: 2,
      name: "Funmi Okafor",
      age: 35,
      profession: "Entrepreneur",
      category: "skincare",
      beforeImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop",
      serviceType: "Melanin Glow Facial Series",
      duration: "4 months",
      stylist: "Fatima Abdullahi",
      rating: 5,
      testimonial: "After years of struggling with hyperpigmentation and uneven skin tone, Fatima's expertise and the Melanin Glow treatments have given me the clear, radiant skin I never thought possible.",
      fullStory: `My skin journey began in my teens with acne, but the real challenges started in my twenties when I began dealing with post-inflammatory hyperpigmentation. As a woman with darker skin, every blemish seemed to leave a dark mark that lasted for months.

**The Struggle:**
I tried countless products, from expensive international brands to harsh bleaching creams that only made things worse. The more I tried to "fix" my skin, the more damaged it became. I was spending hundreds of thousands of naira on products that promised miracles but delivered disappointment.

By my early thirties, my skin was a patchwork of dark spots, uneven tone, and ongoing breakouts. I avoided photos, wore heavy makeup daily, and felt self-conscious in professional and social settings.

**Finding New Arias:**
A colleague recommended Fatima after seeing her own skin transformation. I was hesitant - I'd been disappointed so many times before. But something about Fatima's approach was different from the start.

**The Assessment:**
Fatima spent time understanding not just my skin, but my lifestyle, stress levels, diet, and previous treatments. She explained how my skin type responds to different ingredients and why many products I'd used were actually counterproductive.

**The Treatment Plan:**
- **Month 1**: Gentle skin barrier repair and inflammation reduction
- **Month 2**: Introduction of active ingredients for pigmentation
- **Month 3**: Intensive brightening treatments
- **Month 4**: Maintenance and protection protocol

**The Process:**
The first month focused on healing. Fatima used traditional ingredients like black soap and honey alongside modern techniques. My skin initially purged, but she prepared me for this and provided constant support.

Month two introduced carefully selected acids and brightening agents. The treatments were customized for my skin's response, and Fatima adjusted the protocol based on how my skin reacted.

**The Results:**
By month four, my skin was transformed. The dark spots had faded significantly, my overall tone was even, and I had a natural glow I'd never experienced. More importantly, I learned how to maintain these results.

**Lifestyle Changes:**
- Simplified skincare routine with effective products
- Better sun protection habits
- Stress management techniques
- Dietary adjustments for skin health

**The Impact:**
This transformation went beyond skin deep. My confidence soared, affecting my business presentations, social interactions, and overall quality of life. I stopped wearing heavy makeup and started embracing my natural beauty.

**Ongoing Journey:**
I now visit Fatima monthly for maintenance treatments and have become an advocate for professional skincare. I share my story because I know how isolating skin struggles can feel, especially for women of color.

**Key Takeaways:**
- Professional assessment is crucial for effective treatment
- Patience and consistency are essential
- One size doesn't fit all in skincare
- Healthy skin is an investment, not an expense

My advice to anyone struggling with similar issues: don't give up, and don't try to fix everything at once. Find a professional who understands your skin type and is committed to your long-term skin health.`,
      beforeChallenges: [
        "Severe hyperpigmentation","Uneven skin tone","Ongoing acne breakouts","Low confidence and self-esteem"
      ],
      afterBenefits: [
        "Even, radiant skin tone","Significantly reduced dark spots","Clear, healthy complexion","Boosted confidence and self-image"
      ],
      productsUsed: [
        "African Black Soap Cleanser","Vitamin C Brightening Serum","Niacinamide Treatment","Broad Spectrum SPF 50"
      ],
      timeline: [
        { month: 1, milestone: "Skin barrier repair and healing" },
        { month: 2, milestone: "Introduction of active ingredients" },
        { month: 3, milestone: "Intensive brightening treatments" },
        { month: 4, milestone: "Maintenance protocol established" }
      ]
    },
    {
      id: 3,
      name: "Blessing Okoro",age: 26,profession: "Teacher",category: "bridal",
      beforeImage: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=300&h=300&fit=crop",afterImage: "https://images.unsplash.com/photo-1519741497674-611481863552?w=300&h=300&fit=crop",serviceType: "Complete Bridal Package",duration: "3 months preparation",stylist: "Chioma Nwankwo",rating: 5,testimonial: "Chioma made my wedding day absolutely magical. From the trial sessions to the final look, every detail was perfect. I felt like the most beautiful version of myself.",
      fullStory: `Planning a wedding is overwhelming, but finding the right beauty team shouldn't be. When I got engaged, I knew I wanted to look stunning but still feel like myself on my wedding day. That's exactly what Chioma and the New Arias team delivered.

**The Vision:**
I wanted a look that honored my Nigerian heritage while incorporating modern elegance. I'm not typically a heavy makeup person, so I was nervous about looking overdone or unlike myself in photos.

**The Consultation:**
Chioma spent hours with me, looking through inspiration photos, understanding my style, and discussing the wedding timeline. She asked about my dress, the venue, lighting, and even the time of day for photos.

**The Preparation Journey:**

**Month 1 - Foundation Building:**
We started with skincare preparation. Chioma connected me with Fatima for a series of facials to ensure my skin would be glowing and photo-ready. We also did color matching and discussed the overall aesthetic.

**Month 2 - Trial Sessions:**
We did three different trial sessions:
- **Trial 1**: Traditional Nigerian bridal look with bold colors
- **Trial 2**: Modern, natural glam approach
- **Trial 3**: Fusion of both styles (the winner!)

Each trial was photographed in different lighting to ensure the look would be perfect for both the ceremony and reception.

**Month 3 - Final Preparations:**
The final month included:
- Hair growth treatments and protective styling
- Final skin treatments
- Rehearsal with the actual wedding accessories
- Timeline coordination with photographers

**The Wedding Day:**
Chioma and her team arrived at 6 AM for a 2 PM ceremony. The process was so relaxing and enjoyable - they created a spa-like atmosphere while working efficiently.

**The Look:**
- **Hair**: Elegant updo incorporating traditional Nigerian hair accessories
- **Makeup**: Flawless base with bold, beautiful eyes and perfect lip color
- **Overall**: Sophisticated, timeless, and authentically me

**The Results:**
I felt absolutely radiant. The look lasted perfectly through the 12-hour celebration, from ceremony to reception to after-party. Most importantly, when I look at my wedding photos, I see myself - just the most beautiful version.

**Guest Reactions:**
The compliments were overwhelming. Guests kept asking who did my makeup and hair. Several friends have since booked with New Arias for their own special events.

**Beyond the Wedding:**
Chioma taught me techniques I still use today. She helped me understand what colors and styles work best for my features, and I've become much more confident with my everyday beauty routine.

**The Investment:**
While the bridal package was a significant investment, it was worth every naira. This wasn't just about looking good for one day - it was about feeling confident and beautiful during one of the most important moments of my life.

**For Future Brides:**
Start early, communicate openly about your vision, and trust the process. Chioma's expertise and attention to detail made my wedding day stress-free and absolutely perfect.

**The Lasting Impact:**
Beyond the beautiful photos and memories, this experience taught me the value of professional beauty services. I now prioritize self-care and professional treatments as investments in my confidence and well-being.

My wedding day was everything I dreamed of, and having Chioma as part of my team made it even more special. She didn't just do my makeup and hair - she helped me feel like the most beautiful bride in the world.`,
      beforeChallenges: [
        "Wedding day beauty anxiety","Uncertainty about the right look","Limited makeup experience","Pressure to look perfect"
      ],
      afterBenefits: [
        "Stunning, timeless bridal look","Increased confidence and poise","Beautiful wedding photos","Improved daily beauty skills"
      ],
      productsUsed: [
        "Long-wear Foundation","Waterproof Mascara","Setting Spray","Professional Hair Products"
      ],
      timeline: [
        { month: 1, milestone: "Initial consultation and skin prep" },
        { month: 2, milestone: "Multiple trial sessions" },
        { month: 3, milestone: "Final preparations and wedding day" }
      ]
    }
  ];

  const filteredStories = activeFilter === 'all' 
    ? transformationStories 
    : transformationStories.filter(story => story.category === activeFilter);

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl lg:text-5xl font-bold text-primary mb-4">
            Transformation Stories
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Real stories from real clients who have discovered their most beautiful selves at New Arias
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-body font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-primary text-primary-foreground shadow-brand'
                  : 'bg-card text-text-secondary hover:bg-accent hover:text-accent-foreground shadow-sm'
              }`}
            >
              <span>{filter.name}</span>
              <span className={`px-2 py-0.5 rounded-full text-xs ${
                activeFilter === filter.id
                  ? 'bg-primary-foreground/20 text-primary-foreground'
                  : 'bg-muted text-text-secondary'
              }`}>
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStories.map((story) => (
            <div
              key={story.id}
              className="bg-card rounded-2xl shadow-brand hover:shadow-brand-hover transition-all duration-300 overflow-hidden group cursor-pointer"
              onClick={() => setSelectedStory(story)}
            >
              {/* Before/After Images */}
              <div className="relative h-64">
                <div className="flex h-full">
                  <div className="w-1/2 relative overflow-hidden">
                    <Image
                      src={story.beforeImage}
                      alt={`${story.name} before`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
                      Before
                    </div>
                  </div>
                  <div className="w-1/2 relative overflow-hidden">
                    <Image
                      src={story.afterImage}
                      alt={`${story.name} after`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 right-2 bg-success text-white px-2 py-1 rounded text-xs font-medium">
                      After
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium capitalize">
                    {story.category}
                  </span>
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
                  <Icon name="Star" size={14} className="text-yellow-400 fill-current" />
                  <span className="text-xs font-medium text-primary">{story.rating}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-headline text-lg font-semibold text-primary">
                      {story.name}
                    </h3>
                    <p className="font-body text-sm text-text-secondary">
                      {story.profession}, {story.age}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-body text-xs text-text-secondary">Duration</p>
                    <p className="font-body text-sm font-medium text-secondary">{story.duration}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="font-body text-sm text-primary font-medium mb-1">
                    {story.serviceType}
                  </p>
                  <p className="font-body text-xs text-text-secondary">
                    with {story.stylist}
                  </p>
                </div>

                <p className="font-body text-sm text-text-secondary mb-4 line-clamp-3">
                  "{story.testimonial}"
                </p>

                <Button
                  variant="outline"
                  size="sm"
                  iconName="Eye"
                  iconPosition="left"
                  fullWidth
                  className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200"
                >
                  Read Full Story
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Story Detail Modal */}
        {selectedStory && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-card rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="relative">
                <div className="flex h-64 lg:h-80">
                  <div className="w-1/2 relative">
                    <Image
                      src={selectedStory.beforeImage}
                      alt={`${selectedStory.name} before`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="font-headline text-xl font-semibold">Before</h4>
                    </div>
                  </div>
                  <div className="w-1/2 relative">
                    <Image
                      src={selectedStory.afterImage}
                      alt={`${selectedStory.name} after`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 right-4 text-white">
                      <h4 className="font-headline text-xl font-semibold">After</h4>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedStory(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
                >
                  <Icon name="X" size={20} className="text-primary" />
                </button>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-white">
                  <h2 className="font-headline text-2xl lg:text-3xl font-bold mb-2">
                    {selectedStory.name}'s Transformation
                  </h2>
                  <p className="font-body opacity-90">
                    {selectedStory.profession}, {selectedStory.age} • {selectedStory.duration}
                  </p>
                </div>
              </div>

              <div className="p-6 lg:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Main Story */}
                  <div className="lg:col-span-2">
                    <div className="prose prose-lg max-w-none">
                      {selectedStory.fullStory.split('\n\n').map((paragraph, index) => {
                        if (paragraph.startsWith('**') && paragraph.endsWith(':**')) {
                          return (
                            <h3 key={index} className="font-headline text-xl font-semibold text-primary mt-8 mb-4">
                              {paragraph.replace(/\*\*/g, '').replace(':', '')}
                            </h3>
                          );
                        } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                          return (
                            <h4 key={index} className="font-body font-semibold text-primary mt-6 mb-3">
                              {paragraph.replace(/\*\*/g, '')}
                            </h4>
                          );
                        } else if (paragraph.includes('- ')) {
                          const items = paragraph.split('\n').filter(item => item.trim().startsWith('- '));
                          return (
                            <ul key={index} className="list-none space-y-2 mb-6">
                              {items.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start space-x-2">
                                  <Icon name="Check" size={16} className="text-success mt-1 flex-shrink-0" />
                                  <span className="font-body text-text-secondary">
                                    {item.replace('- ', '')}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          );
                        } else {
                          return (
                            <p key={index} className="font-body text-text-secondary mb-4 leading-relaxed">
                              {paragraph}
                            </p>
                          );
                        }
                      })}
                    </div>
                  </div>

                  {/* Sidebar Info */}
                  <div className="space-y-6">
                    {/* Service Details */}
                    <div className="bg-muted rounded-lg p-4">
                      <h4 className="font-body font-semibold text-primary mb-3">Service Details</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-text-secondary">Service:</span>
                          <span className="font-medium text-primary">{selectedStory.serviceType}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-text-secondary">Stylist:</span>
                          <span className="font-medium text-primary">{selectedStory.stylist}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-text-secondary">Duration:</span>
                          <span className="font-medium text-primary">{selectedStory.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-text-secondary">Rating:</span>
                          <div className="flex items-center space-x-1">
                            {[...Array(selectedStory.rating)].map((_, i) => (
                              <Icon key={i} name="Star" size={14} className="text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Before Challenges */}
                    <div className="bg-error/10 border border-error/20 rounded-lg p-4">
                      <h4 className="font-body font-semibold text-error mb-3">Before Challenges</h4>
                      <div className="space-y-2">
                        {selectedStory.beforeChallenges.map((challenge, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <Icon name="AlertCircle" size={14} className="text-error mt-0.5 flex-shrink-0" />
                            <span className="font-body text-sm text-text-secondary">{challenge}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* After Benefits */}
                    <div className="bg-success/10 border border-success/20 rounded-lg p-4">
                      <h4 className="font-body font-semibold text-success mb-3">After Benefits</h4>
                      <div className="space-y-2">
                        {selectedStory.afterBenefits.map((benefit, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <Icon name="CheckCircle" size={14} className="text-success mt-0.5 flex-shrink-0" />
                            <span className="font-body text-sm text-text-secondary">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Timeline */}
                    <div className="bg-muted rounded-lg p-4">
                      <h4 className="font-body font-semibold text-primary mb-3">Journey Timeline</h4>
                      <div className="space-y-3">
                        {selectedStory.timeline.map((item, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0">
                              {item.month}
                            </div>
                            <span className="font-body text-sm text-text-secondary">{item.milestone}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Products Used */}
                    <div className="bg-muted rounded-lg p-4">
                      <h4 className="font-body font-semibold text-primary mb-3">Products Used</h4>
                      <div className="space-y-2">
                        {selectedStory.productsUsed.map((product, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <Icon name="Package" size={14} className="text-secondary mt-0.5 flex-shrink-0" />
                            <span className="font-body text-sm text-text-secondary">{product}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="space-y-3">
                      <Button
                        variant="default"
                        fullWidth
                        iconName="Calendar"
                        iconPosition="left"
                        className="bg-cta text-cta-foreground hover:bg-cta/90"
                      >
                        Book Similar Service
                      </Button>
                      <Button
                        variant="outline"
                        fullWidth
                        iconName="MessageCircle"
                        iconPosition="left"
                      >
                        Ask Questions
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-luxury rounded-2xl p-8 text-center text-white mt-16">
          <Icon name="Sparkles" size={48} className="mx-auto mb-4 opacity-90" />
          <h3 className="font-headline text-2xl lg:text-3xl font-semibold mb-4">
            Ready for Your Transformation?
          </h3>
          <p className="font-body mb-6 opacity-90 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have discovered their most beautiful selves at New Arias
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              iconName="Calendar"
              iconPosition="left"
              className="bg-white text-primary hover:bg-white/90"
            >
              Book Consultation
            </Button>
            <Button
              variant="outline"
              iconName="Phone"
              iconPosition="left"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Call Us Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationStories;