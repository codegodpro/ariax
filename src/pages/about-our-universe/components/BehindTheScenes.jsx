import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const BehindTheScenes = () => {
  const [activeLocation, setActiveLocation] = useState('salon');

  const locations = {
    salon: {
      title: "Salon & Spa Experience",
      subtitle: "Where Transformation Happens",
      description: "Step into our Victoria Island sanctuary where skilled artisans create personalized beauty experiences using premium products and time-honored techniques.",
      image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800",
      dailyLife: [
        {
          time: "7:00 AM",
          activity: "Morning Preparation",
          description: "Our team arrives early to prepare treatment rooms, sterilize equipment, and set the perfect ambiance for the day ahead.",
          icon: "Sunrise"
        },
        {
          time: "9:00 AM",
          activity: "Client Consultations",
          description: "Personalized consultations begin, where we understand each client's unique needs and design their transformation journey.",
          icon: "MessageCircle"
        },
        {
          time: "11:00 AM",
          activity: "Signature Treatments",
          description: "Our signature services come to life—from precision cuts to rejuvenating facials, each treatment is a work of art.",
          icon: "Sparkles"
        },
        {
          time: "2:00 PM",
          activity: "Team Training",
          description: "Continuous learning sessions where our stylists master new techniques and share insights from their craft.",
          icon: "BookOpen"
        },
        {
          time: "4:00 PM",
          activity: "Community Sessions",
          description: "Special community workshops and beauty education sessions that extend our impact beyond individual services.",
          icon: "Users"
        },
        {
          time: "7:00 PM",
          activity: "Evening Reflection",
          description: "Day concludes with team reflection, client feedback review, and preparation for tomorrow's transformations.",
          icon: "Moon"
        }
      ],
      teamSpotlight: [
        {
          name: "Chioma Adebayo",
          role: "Senior Stylist",
          specialty: "Natural Hair Artistry",
          image: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=400",
          quote: "Every client teaches me something new about beauty. My role is to help them see their own radiance."
        },
        {
          name: "Kemi Ogundimu",
          role: "Spa Therapist",
          specialty: "Holistic Wellness",
          image: "https://images.pexels.com/photos/3992499/pexels-photo-3992499.jpeg?auto=compress&cs=tinysrgb&w=400",
          quote: "Healing happens when we create space for both physical and emotional transformation."
        }
      ]
    },
    farm: {
      title: "Sustainable Farm Operations",
      subtitle: "Where Nourishment Begins",
      description: "Our farm in the outskirts of Lagos represents our commitment to sustainable agriculture, producing fresh eggs while maintaining environmental harmony.",
      image: "https://images.pexels.com/photos/1300510/pexels-photo-1300510.jpeg?auto=compress&cs=tinysrgb&w=800",
      dailyLife: [
        {
          time: "5:30 AM",
          activity: "Dawn Care Routine",
          description: "Our farm team begins with feeding our free-range hens and checking their health, ensuring optimal conditions for quality egg production.",
          icon: "Sunrise"
        },
        {
          time: "7:00 AM",
          activity: "Fresh Egg Collection",
          description: "Careful collection of fresh eggs, each one inspected for quality before being prepared for our customers.",
          icon: "Package"
        },
        {
          time: "9:00 AM",
          activity: "Sustainable Practices",
          description: "Implementation of eco-friendly farming methods, from composting to water conservation, maintaining our environmental commitment.",
          icon: "Leaf"
        },
        {
          time: "12:00 PM",
          activity: "Quality Assurance",
          description: "Rigorous quality checks ensure every egg meets our premium standards before reaching our customers.",
          icon: "CheckCircle"
        },
        {
          time: "3:00 PM",
          activity: "Farm Maintenance",
          description: "Ongoing maintenance of facilities, equipment, and grounds to ensure optimal conditions for our livestock and operations.",
          icon: "Settings"
        },
        {
          time: "6:00 PM",
          activity: "Evening Monitoring",
          description: "Final health checks and securing of the farm for the night, ensuring our hens are safe and comfortable.",
          icon: "Shield"
        }
      ],
      teamSpotlight: [
        {
          name: "Emeka Nwankwo",
          role: "Farm Manager",
          specialty: "Sustainable Agriculture",
          image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400",
          quote: "Sustainable farming isn't just about production—it's about creating harmony between human needs and nature's wisdom."
        },
        {
          name: "Fatima Abdullahi",
          role: "Quality Specialist",
          specialty: "Nutrition & Safety",
          image: "https://images.pexels.com/photos/3992492/pexels-photo-3992492.jpeg?auto=compress&cs=tinysrgb&w=400",
          quote: "Every egg represents our commitment to quality. I ensure that commitment reaches every customer\'s table."
        }
      ]
    }
  };

  const currentLocation = locations[activeLocation];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 px-4 py-2 rounded-full mb-6">
            <Icon name="Camera" size={16} className="text-secondary" />
            <span className="font-body text-sm font-medium text-secondary">Behind The Scenes</span>
          </div>
          <h2 className="font-headline text-4xl lg:text-5xl font-bold text-primary mb-6">
            Inside Our <span className="text-gradient-brand">Daily Operations</span>
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-3xl mx-auto">
            Discover the passion, dedication, and craftsmanship that goes into every service and product we create
          </p>
        </div>

        {/* Location Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-muted p-1 rounded-lg">
            <button
              onClick={() => setActiveLocation('salon')}
              className={`px-6 py-3 rounded-md font-body font-medium transition-all duration-300 ${
                activeLocation === 'salon' ?'bg-primary text-primary-foreground shadow-brand' :'text-text-secondary hover:text-primary'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Icon name="Sparkles" size={16} />
                <span>Salon & Spa</span>
              </div>
            </button>
            <button
              onClick={() => setActiveLocation('farm')}
              className={`px-6 py-3 rounded-md font-body font-medium transition-all duration-300 ${
                activeLocation === 'farm' ?'bg-primary text-primary-foreground shadow-brand' :'text-text-secondary hover:text-primary'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Icon name="Leaf" size={16} />
                <span>Sustainable Farm</span>
              </div>
            </button>
          </div>
        </div>

        {/* Location Overview */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative overflow-hidden rounded-2xl shadow-brand-hover">
            <Image
              src={currentLocation.image}
              alt={currentLocation.title}
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-background/90 backdrop-blur-brand rounded-lg p-4">
                <h3 className="font-headline text-xl font-semibold text-primary mb-1">
                  {currentLocation.title}
                </h3>
                <p className="font-body text-sm text-text-secondary">
                  {currentLocation.subtitle}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-headline text-3xl font-bold text-primary">
              {currentLocation.title}
            </h3>
            <p className="font-body text-text-secondary leading-relaxed text-lg">
              {currentLocation.description}
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name="Clock" size={20} className="text-primary" />
                </div>
                <h4 className="font-body font-semibold text-primary mb-1">Daily Operations</h4>
                <p className="font-body text-sm text-text-secondary">12+ Hours</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name="Users" size={20} className="text-secondary" />
                </div>
                <h4 className="font-body font-semibold text-primary mb-1">Team Members</h4>
                <p className="font-body text-sm text-text-secondary">
                  {activeLocation === 'salon' ? '15+' : '8+'} Professionals
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Daily Life Timeline */}
        <div className="mb-20">
          <h3 className="font-headline text-3xl font-bold text-primary text-center mb-12">
            A Day in the Life
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentLocation.dailyLife.map((activity, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 hover:shadow-brand-hover transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Icon name={activity.icon} size={18} className="text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-body text-sm font-medium text-primary">{activity.time}</p>
                    <h4 className="font-headline text-lg font-semibold text-primary">
                      {activity.activity}
                    </h4>
                  </div>
                </div>
                <p className="font-body text-text-secondary text-sm leading-relaxed">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Spotlight */}
        <div className="bg-surface/50 rounded-2xl p-8 lg:p-12">
          <h3 className="font-headline text-3xl font-bold text-primary text-center mb-12">
            Meet Our Team
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {currentLocation.teamSpotlight.map((member, index) => (
              <div key={index} className="bg-card border border-border rounded-xl overflow-hidden shadow-brand">
                <div className="flex items-center space-x-4 p-6">
                  <div className="relative">
                    <div className="w-16 h-16 overflow-hidden rounded-full">
                      <Image
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-secondary rounded-full border-2 border-background"></div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-headline text-xl font-semibold text-primary">
                      {member.name}
                    </h4>
                    <p className="font-body text-sm text-secondary font-medium">
                      {member.role}
                    </p>
                    <p className="font-body text-xs text-text-secondary">
                      {member.specialty}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <div className="bg-muted rounded-lg p-4">
                    <Icon name="Quote" size={16} className="text-accent-foreground mb-2" />
                    <p className="font-body text-sm text-text-secondary italic leading-relaxed">
                      {member.quote}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BehindTheScenes;