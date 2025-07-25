import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const StylistProfiles = () => {
  const [selectedStylist, setSelectedStylist] = useState(null);

  const stylists = [
    {
      id: 1,
      name: "Adunni Okafor",
      title: "Master Hair Stylist & Salon Director",
      specialties: ["Natural Hair Care", "Protective Styling", "Hair Health"],
      experience: "12 years",
      image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&h=400&fit=crop",
      bio: `Adunni is a passionate advocate for natural hair care with over a decade of experience transforming lives through hair. She specializes in protective styling techniques that promote healthy hair growth while maintaining elegance. Her journey began in her grandmother's kitchen, learning traditional hair care methods using indigenous Nigerian ingredients.

Her philosophy centers on embracing natural beauty while providing modern solutions. She has trained with international hair academies and brings a unique blend of traditional wisdom and contemporary techniques to every client.`,
      certifications: [
        "International Hair Academy Certification",
        "Natural Hair Specialist License",
        "Trichology Foundation Course",
        "Protective Styling Master Class"
      ],
      achievements: [
        "Featured in Bella Naija Beauty 2023",
        "Lagos Fashion Week Hair Director",
        "Natural Hair Movement Ambassador",
        "1000+ Successful Transformations"
      ],
      clientReviews: [
        {
          name: "Kemi Adebayo",
          rating: 5,
          comment: "Adunni transformed my damaged hair into healthy, beautiful locks. Her expertise in natural hair care is unmatched!"
        },
        {
          name: "Funmi Lagos",
          rating: 5,
          comment: "The best protective styling experience I\'ve ever had. My hair has grown so much under her care."
        }
      ],
      availability: "Monday - Friday",
      bookingRate: "₦25,000 - ₦45,000"
    },
    {
      id: 2,
      name: "Chioma Nwankwo",
      title: "Senior Makeup Artist & Color Specialist",
      specialties: ["Bridal Makeup", "Color Matching", "Special Events"],
      experience: "8 years",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=400&fit=crop",
      bio: `Chioma is renowned for her exceptional skill in makeup artistry, particularly her expertise in color matching for diverse skin tones. She has worked with numerous brides across Nigeria, creating stunning looks that enhance natural beauty while reflecting personal style.

Her artistic journey began in art school, where she developed an eye for color and composition. She later specialized in makeup artistry, focusing on techniques that celebrate the beauty of melanin-rich skin. Chioma believes that makeup should enhance, not mask, natural beauty.`,
      certifications: [
        "Professional Makeup Artist Certification",
        "Bridal Makeup Specialist",
        "Color Theory Advanced Course",
        "Airbrush Makeup Certification"
      ],
      achievements: [
        "Lead Makeup Artist for 200+ Weddings",
        "Featured in Wedding Digest Nigeria",
        "Celebrity Makeup Artist",
        "Makeup Workshop Instructor"
      ],
      clientReviews: [
        {
          name: "Blessing Okoro",
          rating: 5,
          comment: "Chioma made me feel like a queen on my wedding day. Her attention to detail is incredible!"
        },
        {
          name: "Amara Obi",
          rating: 5,
          comment: "Perfect color matching every time. She understands how to work with my skin tone beautifully."
        }
      ],
      availability: "Tuesday - Saturday",
      bookingRate: "₦15,000 - ₦35,000"
    },
    {
      id: 3,
      name: "Fatima Abdullahi",
      title: "Licensed Esthetician & Spa Therapist",
      specialties: ["Skincare", "Facial Treatments", "Spa Therapy"],
      experience: "10 years",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
      bio: `Fatima brings a holistic approach to skincare, combining modern dermatological knowledge with traditional African beauty practices. She specializes in treating diverse skin types and conditions, with particular expertise in caring for melanin-rich skin.

Her passion for skincare began with her own journey to healthy skin, leading her to study esthetics and spa therapy. She believes in the power of consistent, gentle care and educates her clients on maintaining healthy skin routines using both modern products and natural ingredients.`,
      certifications: [
        "Licensed Esthetician",
        "Advanced Facial Therapy",
        "Chemical Peel Certification",
        "Spa Therapy Diploma"
      ],
      achievements: [
        "Skincare Specialist of the Year 2022",
        "Featured in Healthy Living Magazine",
        "Acne Treatment Success Rate 95%",
        "Skincare Education Advocate"
      ],
      clientReviews: [
        {
          name: "Ngozi Emeka",
          rating: 5,
          comment: "Fatima helped me overcome years of acne problems. My skin has never looked better!"
        },
        {
          name: "Aisha Mohammed",
          rating: 5,
          comment: "Her facials are amazing! She really understands different skin types and needs."
        }
      ],
      availability: "Monday - Saturday",
      bookingRate: "₦12,000 - ₦28,000"
    },
    {
      id: 4,
      name: "Tolu Adeyemi",
      title: "Junior Stylist & Natural Hair Specialist",
      specialties: ["Wash & Go Styles", "Twist Outs", "Hair Education"],
      experience: "4 years",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      bio: `Tolu is our rising star, bringing fresh energy and innovative techniques to natural hair care. Despite being newer to the industry, her passion for hair health and natural styling has quickly made her a client favorite.

She specializes in wash-and-go styles and twist-outs that work with natural hair texture rather than against it. Tolu is also passionate about hair education, helping clients understand their hair type and how to care for it at home.`,
      certifications: [
        "Natural Hair Styling Certificate",
        "Hair Health Fundamentals",
        "Client Consultation Training",
        "Product Knowledge Specialist"
      ],
      achievements: [
        "Rising Talent Award 2023",
        "Client Satisfaction Rate 98%",
        "Hair Education Workshop Leader",
        "Social Media Hair Influencer"
      ],
      clientReviews: [
        {
          name: "Yemi Adebola",
          rating: 5,
          comment: "Tolu taught me so much about my hair. Her wash and go styles last for days!"
        },
        {
          name: "Dami Ogundimu",
          rating: 5,
          comment: "She\'s so patient and explains everything. Perfect for someone new to natural hair care."
        }
      ],
      availability: "Wednesday - Sunday",
      bookingRate: "₦8,000 - ₦20,000"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl lg:text-5xl font-bold text-primary mb-4">
            Meet Our Expert Team
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Our talented stylists and therapists are passionate about bringing out your natural beauty
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stylists.map((stylist) => (
            <div
              key={stylist.id}
              className="bg-card rounded-2xl shadow-brand hover:shadow-brand-hover transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={stylist.image}
                  alt={stylist.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <div className="flex items-center space-x-2 text-white">
                    <Icon name="Star" size={16} className="text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">5.0 Rating</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-headline text-xl font-semibold text-primary mb-1">
                  {stylist.name}
                </h3>
                <p className="font-body text-sm text-secondary mb-3">
                  {stylist.title}
                </p>

                <div className="flex items-center space-x-2 mb-4">
                  <Icon name="Clock" size={16} className="text-text-secondary" />
                  <span className="font-body text-sm text-text-secondary">
                    {stylist.experience} experience
                  </span>
                </div>

                <div className="space-y-2 mb-6">
                  {stylist.specialties.slice(0, 2).map((specialty, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon name="Check" size={14} className="text-success" />
                      <span className="font-body text-sm text-text-secondary">{specialty}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col space-y-3">
                  <Button
                    variant="default"
                    size="sm"
                    iconName="Calendar"
                    iconPosition="left"
                    fullWidth
                    className="bg-cta text-cta-foreground hover:bg-cta/90"
                  >
                    Book with {stylist.name.split(' ')[0]}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="User"
                    iconPosition="left"
                    fullWidth
                    onClick={() => setSelectedStylist(stylist)}
                  >
                    View Profile
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stylist Detail Modal */}
        {selectedStylist && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative h-64 lg:h-80">
                <Image
                  src={selectedStylist.image}
                  alt={selectedStylist.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <button
                  onClick={() => setSelectedStylist(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
                >
                  <Icon name="X" size={20} className="text-primary" />
                </button>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="font-headline text-3xl font-bold mb-2">
                    {selectedStylist.name}
                  </h3>
                  <p className="font-body text-lg opacity-90">
                    {selectedStylist.title}
                  </p>
                </div>
              </div>

              <div className="p-6 lg:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h4 className="font-headline text-xl font-semibold text-primary mb-4">
                      About {selectedStylist.name.split(' ')[0]}
                    </h4>
                    <div className="font-body text-text-secondary space-y-4 mb-6">
                      {selectedStylist.bio.split('\n\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>

                    <div className="mb-6">
                      <h5 className="font-body font-semibold text-primary mb-3">Specialties:</h5>
                      <div className="flex flex-wrap gap-2">
                        {selectedStylist.specialties.map((specialty, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h5 className="font-body font-semibold text-primary mb-3">Client Reviews:</h5>
                      <div className="space-y-4">
                        {selectedStylist.clientReviews.map((review, index) => (
                          <div key={index} className="bg-muted rounded-lg p-4">
                            <div className="flex items-center space-x-2 mb-2">
                              <div className="flex space-x-1">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                                ))}
                              </div>
                              <span className="font-body font-medium text-primary">{review.name}</span>
                            </div>
                            <p className="font-body text-sm text-text-secondary italic">
                              "{review.comment}"
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-muted rounded-lg p-4">
                      <h5 className="font-body font-semibold text-primary mb-3">Quick Info</h5>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Icon name="Clock" size={16} className="text-text-secondary" />
                          <span className="font-body text-sm text-text-secondary">
                            {selectedStylist.experience} experience
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Icon name="Calendar" size={16} className="text-text-secondary" />
                          <span className="font-body text-sm text-text-secondary">
                            {selectedStylist.availability}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Icon name="DollarSign" size={16} className="text-text-secondary" />
                          <span className="font-body text-sm text-text-secondary">
                            {selectedStylist.bookingRate}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-muted rounded-lg p-4">
                      <h5 className="font-body font-semibold text-primary mb-3">Certifications</h5>
                      <div className="space-y-2">
                        {selectedStylist.certifications.map((cert, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <Icon name="Award" size={14} className="text-success mt-0.5" />
                            <span className="font-body text-sm text-text-secondary">{cert}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-muted rounded-lg p-4">
                      <h5 className="font-body font-semibold text-primary mb-3">Achievements</h5>
                      <div className="space-y-2">
                        {selectedStylist.achievements.map((achievement, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <Icon name="Trophy" size={14} className="text-secondary mt-0.5" />
                            <span className="font-body text-sm text-text-secondary">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Button
                        variant="default"
                        fullWidth
                        iconName="Calendar"
                        iconPosition="left"
                        className="bg-cta text-cta-foreground hover:bg-cta/90"
                      >
                        Book with {selectedStylist.name.split(' ')[0]}
                      </Button>
                      <Button
                        variant="outline"
                        fullWidth
                        iconName="MessageCircle"
                        iconPosition="left"
                      >
                        Send Message
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default StylistProfiles;