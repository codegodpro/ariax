import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TeamProfiles = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('leadership');

  const departments = {
    leadership: {
      title: "Leadership Team",
      subtitle: "Visionaries & Strategic Leaders",
      icon: "Crown",
      members: [
        {
          name: "Adaora Nkem-Okafor",
          role: "Founder & CEO",
          specialty: "Visionary Leadership & Brand Strategy",
          image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=800",
          bio: "With over 8 years in London's luxury beauty industry, Adaora returned to Nigeria with a vision to redefine lifestyle luxury. Her philosophy of 'Complete Living' drives every aspect of New Arias.",
          philosophy: "True leadership is about creating spaces where others can discover their own brilliance while contributing to something greater than themselves.",
          achievements: [
            "Young Entrepreneur of the Year 2022",
            "Featured in Forbes Africa 30 Under 30",
            "Sustainable Business Leader Award 2023"
          ],
          social: {
            linkedin: "#",
            instagram: "#",
            twitter: "#"
          }
        },
        {
          name: "Kemi Adebayo",
          role: "Chief Operations Officer",
          specialty: "Operations Excellence & Team Development",
          image: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=800",
          bio: "A seasoned operations expert with 10+ years in hospitality and wellness industries. Kemi ensures every New Arias experience exceeds expectations through systematic excellence.",
          philosophy: "Excellence is not a destination but a daily practice. Every interaction is an opportunity to create something beautiful.",
          achievements: [
            "Operational Excellence Award 2023",
            "Team Leadership Certification",
            "Customer Experience Innovation Award"
          ],
          social: {
            linkedin: "#",
            instagram: "#"
          }
        }
      ]
    },
    salon: {
      title: "Salon & Spa Team",
      subtitle: "Beauty & Wellness Artisans",
      icon: "Sparkles",
      members: [
        {
          name: "Chioma Okafor",
          role: "Senior Stylist & Creative Director",
          specialty: "Natural Hair Artistry & Color Innovation",
          image: "https://images.pexels.com/photos/3992499/pexels-photo-3992499.jpeg?auto=compress&cs=tinysrgb&w=800",
          bio: "A master stylist with 12+ years of experience, Chioma specializes in celebrating natural Nigerian beauty while incorporating global techniques. Her work has been featured in major fashion publications.",
          philosophy: "Every client's hair tells a story. My job is to help them write the next beautiful chapter with confidence and authenticity.",
          achievements: [
            "Master Stylist Certification",
            "Natural Hair Excellence Award",
            "Featured in Vogue Nigeria"
          ],
          social: {
            instagram: "#",
            youtube: "#"
          }
        },
        {
          name: "Fatima Abdullahi",
          role: "Lead Spa Therapist",
          specialty: "Holistic Wellness & Therapeutic Treatments",
          image: "https://images.pexels.com/photos/3992492/pexels-photo-3992492.jpeg?auto=compress&cs=tinysrgb&w=800",
          bio: "Certified in multiple therapeutic modalities, Fatima brings a holistic approach to wellness that addresses both physical and emotional well-being through personalized spa experiences.",
          philosophy: "Healing happens when we create sacred space for transformation. Every treatment is a journey toward wholeness.",
          achievements: [
            "Certified Holistic Therapist",
            "Aromatherapy Specialist",
            "Wellness Innovation Award"
          ],
          social: {
            linkedin: "#",
            instagram: "#"
          }
        },
        {
          name: "David Ogundimu",
          role: "Master Barber",
          specialty: "Precision Cuts & Grooming Excellence",
          image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=800",
          bio: "With expertise in both traditional and contemporary barbering techniques, David creates grooming experiences that enhance masculine confidence and personal style.",
          philosophy: "A great cut is more than technique—it\'s about understanding the man behind the mirror and helping him present his best self to the world.",
          achievements: [
            "Master Barber Certification",
            "Men\'s Grooming Specialist",
            "Customer Choice Award 2023"
          ],
          social: {
            instagram: "#",
            tiktok: "#"
          }
        }
      ]
    },
    farm: {
      title: "Sustainable Farm Team",
      subtitle: "Agricultural Innovation & Sustainability",
      icon: "Leaf",
      members: [
        {
          name: "Emeka Nwankwo",
          role: "Farm Manager & Sustainability Director",
          specialty: "Sustainable Agriculture & Environmental Stewardship",
          image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=800",
          bio: "An agricultural engineer with 15+ years in sustainable farming, Emeka leads our zero-waste farm operations while maintaining the highest quality standards for our fresh produce.",
          philosophy: "Sustainable farming is not just about feeding people—it\'s about nurturing the earth that sustains us all for future generations.",
          achievements: [
            "Sustainable Agriculture Certification",
            "Environmental Stewardship Award",
            "Zero-Waste Farming Pioneer"
          ],
          social: {
            linkedin: "#",
            twitter: "#"
          }
        },
        {
          name: "Blessing Adebayo",
          role: "Quality Assurance Specialist",
          specialty: "Food Safety & Nutrition Standards",
          image: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=800",
          bio: "A food scientist dedicated to ensuring every egg meets the highest quality and safety standards. Blessing's expertise ensures our customers receive only the finest, most nutritious products.",
          philosophy: "Quality is not negotiable. Every product that leaves our farm carries our commitment to excellence and our customers\' trust.",
          achievements: [
            "Food Safety Certification",
            "Quality Management Expert",
            "Nutrition Standards Award"
          ],
          social: {
            linkedin: "#"
          }
        }
      ]
    },
    support: {
      title: "Support & Community Team",
      subtitle: "Customer Experience & Community Engagement",
      icon: "Users",
      members: [
        {
          name: "Amara Okafor",
          role: "Community Engagement Manager",
          specialty: "Customer Relations & Community Outreach",
          image: "https://images.pexels.com/photos/3992492/pexels-photo-3992492.jpeg?auto=compress&cs=tinysrgb&w=800",
          bio: "Passionate about building meaningful connections, Amara manages our community programs and ensures every customer feels valued and heard throughout their New Arias journey.",
          philosophy: "Community is the heart of everything we do. When we lift each other up, we all rise together.",
          achievements: [
            "Community Leadership Award",
            "Customer Experience Excellence",
            "Social Impact Recognition"
          ],
          social: {
            linkedin: "#",
            instagram: "#",
            facebook: "#"
          }
        },
        {
          name: "Ibrahim Yusuf",
          role: "Digital Experience Coordinator",
          specialty: "Technology Integration & Digital Innovation",
          image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=800",
          bio: "A tech enthusiast who bridges the gap between traditional service excellence and digital innovation, ensuring seamless experiences across all customer touchpoints.",
          philosophy: "Technology should enhance human connection, not replace it. The best digital experiences feel effortlessly personal.",
          achievements: [
            "Digital Innovation Award",
            "Customer Experience Technology",
            "Process Optimization Expert"
          ],
          social: {
            linkedin: "#",
            twitter: "#"
          }
        }
      ]
    }
  };

  const currentDepartment = departments[selectedDepartment];

  return (
    <section className="py-20 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/20 px-4 py-2 rounded-full mb-6">
            <Icon name="Users" size={16} className="text-accent-foreground" />
            <span className="font-body text-sm font-medium text-accent-foreground">Our Team</span>
          </div>
          <h2 className="font-headline text-4xl lg:text-5xl font-bold text-primary mb-6">
            Meet the <span className="text-gradient-brand">Passionate People</span>
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-3xl mx-auto">
            Behind New Arias' success are dedicated professionals who share our vision of complete living and conscious luxury
          </p>
        </div>

        {/* Department Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-muted p-1 rounded-lg flex flex-wrap gap-1">
            {Object.entries(departments).map(([key, dept]) => (
              <button
                key={key}
                onClick={() => setSelectedDepartment(key)}
                className={`px-4 py-2 rounded-md font-body font-medium text-sm transition-all duration-300 ${
                  selectedDepartment === key
                    ? 'bg-primary text-primary-foreground shadow-brand'
                    : 'text-text-secondary hover:text-primary hover:bg-background'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Icon name={dept.icon} size={14} />
                  <span className="hidden sm:inline">{dept.title}</span>
                  <span className="sm:hidden">{dept.title.split(' ')[0]}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Department Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name={currentDepartment.icon} size={20} className="text-primary" />
            </div>
            <div>
              <h3 className="font-headline text-2xl font-bold text-primary">
                {currentDepartment.title}
              </h3>
              <p className="font-body text-text-secondary">
                {currentDepartment.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentDepartment.members.map((member, index) => (
            <div key={index} className="bg-card border border-border rounded-2xl overflow-hidden shadow-brand hover:shadow-brand-hover transition-all duration-300">
              {/* Member Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                
                {/* Social Links Overlay */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  {Object.entries(member.social).map(([platform, link]) => (
                    <a
                      key={platform}
                      href={link}
                      className="w-8 h-8 bg-background/80 backdrop-blur-brand rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      <Icon 
                        name={platform === 'linkedin' ? 'Linkedin' : 
                              platform === 'instagram' ? 'Instagram' :
                              platform === 'twitter' ? 'Twitter' :
                              platform === 'facebook' ? 'Facebook' :
                              platform === 'youtube' ? 'Youtube' :
                              platform === 'tiktok' ? 'Music' : 'Link'} 
                        size={14} 
                      />
                    </a>
                  ))}
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="font-headline text-xl font-bold text-primary mb-1">
                    {member.name}
                  </h4>
                  <p className="font-body text-sm font-medium text-secondary mb-1">
                    {member.role}
                  </p>
                  <p className="font-body text-xs text-text-secondary">
                    {member.specialty}
                  </p>
                </div>

                <p className="font-body text-sm text-text-secondary leading-relaxed mb-4">
                  {member.bio}
                </p>

                {/* Philosophy Quote */}
                <div className="bg-muted rounded-lg p-4 mb-4">
                  <Icon name="Quote" size={14} className="text-accent-foreground mb-2" />
                  <p className="font-body text-sm text-text-secondary italic leading-relaxed">
                    {member.philosophy}
                  </p>
                </div>

                {/* Achievements */}
                <div className="space-y-2">
                  <h5 className="font-body font-semibold text-primary text-sm">Key Achievements:</h5>
                  {member.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="flex items-start space-x-2">
                      <div className="w-1 h-1 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="font-body text-xs text-text-secondary">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Culture Section */}
        <div className="mt-20 bg-gradient-luxury rounded-2xl p-8 lg:p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Icon name="Heart" size={24} className="text-primary-foreground" />
              <h3 className="font-headline text-3xl font-bold text-primary-foreground">
                Our Team Culture
              </h3>
            </div>

            <p className="font-body text-lg text-primary-foreground/90 mb-8">
              At New Arias, we believe that exceptional service comes from exceptional people. Our team culture is built on mutual respect, continuous learning, and shared commitment to our community's wellbeing.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-background/10 backdrop-blur-brand rounded-xl p-6 border border-primary-foreground/20">
                <Icon name="BookOpen" size={24} className="text-primary-foreground mx-auto mb-3" />
                <h4 className="font-headline text-lg font-semibold text-primary-foreground mb-2">
                  Continuous Learning
                </h4>
                <p className="font-body text-sm text-primary-foreground/80">
                  Regular training, workshops, and skill development opportunities keep our team at the forefront of industry innovation.
                </p>
              </div>

              <div className="bg-background/10 backdrop-blur-brand rounded-xl p-6 border border-primary-foreground/20">
                <Icon name="Users" size={24} className="text-primary-foreground mx-auto mb-3" />
                <h4 className="font-headline text-lg font-semibold text-primary-foreground mb-2">
                  Collaborative Spirit
                </h4>
                <p className="font-body text-sm text-primary-foreground/80">
                  We work together across departments to create seamless experiences that reflect our complete living philosophy.
                </p>
              </div>

              <div className="bg-background/10 backdrop-blur-brand rounded-xl p-6 border border-primary-foreground/20">
                <Icon name="Award" size={24} className="text-primary-foreground mx-auto mb-3" />
                <h4 className="font-headline text-lg font-semibold text-primary-foreground mb-2">
                  Excellence Recognition
                </h4>
                <p className="font-body text-sm text-primary-foreground/80">
                  We celebrate achievements and recognize team members who embody our values and exceed expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamProfiles;