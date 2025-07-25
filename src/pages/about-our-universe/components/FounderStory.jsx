import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const FounderStory = () => {
  const founderData = {
    name: "Adaora Nkem-Okafor",
    title: "Founder & Visionary",
    image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=800",
    story: `My journey began in my grandmother's kitchen in Enugu, where she taught me that true beauty comes from nourishing both body and soul. After years in London's luxury beauty industry, I returned to Nigeria with a vision: to create a lifestyle ecosystem that celebrates our heritage while embracing innovation.\n\nThe idea for New Arias was born during the pandemic when I realized how disconnected we'd become from authentic living. I wanted to create a space where personal transformation and environmental consciousness could coexist beautifully.\n\nToday, New Arias represents more than a business—it's a movement toward complete living, where every service we provide and every egg we produce carries the intention of positive transformation.`,
    milestones: [
      {
        year: "2019",
        title: "The Vision",
        description: "Conceptualized the dual-brand lifestyle ecosystem during my final year in London's beauty industry."
      },
      {
        year: "2020",
        title: "Foundation",
        description: "Returned to Nigeria and established the first New Arias salon in Victoria Island, Lagos."
      },
      {
        year: "2021",
        title: "Expansion",
        description: "Launched the sustainable farm division, integrating fresh produce into our wellness philosophy."
      },
      {
        year: "2022",
        title: "Recognition",
        description: "Named \'Young Entrepreneur of the Year\' by Nigerian Business Excellence Awards."
      },
      {
        year: "2023",
        title: "Community Impact",
        description: "Reached 500+ transformations and created 50+ direct and indirect jobs in our community."
      },
      {
        year: "2024",
        title: "Cultural Destination",
        description: "Established New Arias as Nigeria's premier luxury lifestyle hub with international recognition."
      }
    ]
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/20 px-4 py-2 rounded-full mb-6">
            <Icon name="Heart" size={16} className="text-accent-foreground" />
            <span className="font-body text-sm font-medium text-accent-foreground">Our Origin Story</span>
          </div>
          <h2 className="font-headline text-4xl lg:text-5xl font-bold text-primary mb-6">
            The Journey to <span className="text-gradient-brand">Complete Living</span>
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-3xl mx-auto">
            From a grandmother's kitchen wisdom to Nigeria's first luxury lifestyle ecosystem
          </p>
        </div>

        {/* Founder Profile */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-brand-hover">
              <Image
                src={founderData.image}
                alt={founderData.name}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary rounded-full flex items-center justify-center shadow-brand">
              <Icon name="Sparkles" size={32} className="text-secondary-foreground" />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-headline text-3xl font-bold text-primary mb-2">
                {founderData.name}
              </h3>
              <p className="font-accent text-xl text-secondary mb-6">
                {founderData.title}
              </p>
            </div>

            <div className="space-y-4">
              {founderData.story.split('\n\n').map((paragraph, index) => (
                <p key={index} className="font-body text-text-secondary leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="flex items-center space-x-4 pt-4">
              <div className="flex items-center space-x-2 bg-muted px-4 py-2 rounded-lg">
                <Icon name="MapPin" size={16} className="text-primary" />
                <span className="font-body text-sm text-text-secondary">Lagos, Nigeria</span>
              </div>
              <div className="flex items-center space-x-2 bg-muted px-4 py-2 rounded-lg">
                <Icon name="Calendar" size={16} className="text-primary" />
                <span className="font-body text-sm text-text-secondary">Founded 2020</span>
              </div>
            </div>
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="relative">
          <div className="text-center mb-12">
            <h3 className="font-headline text-3xl font-bold text-primary mb-4">
              Our Journey Milestones
            </h3>
            <p className="font-body text-text-secondary">
              Key moments that shaped New Arias into the cultural destination it is today
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-accent hidden lg:block"></div>

            <div className="space-y-12">
              {founderData.milestones.map((milestone, index) => (
                <div key={milestone.year} className={`flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:space-x-8`}>
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-left`}>
                    <div className="bg-card border border-border rounded-xl p-6 shadow-brand hover:shadow-brand-hover transition-all duration-300">
                      <div className="flex items-center justify-center lg:justify-start space-x-2 mb-3">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                          <span className="font-body text-xs font-bold text-primary-foreground">
                            {milestone.year.slice(-2)}
                          </span>
                        </div>
                        <span className="font-body text-sm font-medium text-primary">
                          {milestone.year}
                        </span>
                      </div>
                      <h4 className="font-headline text-xl font-semibold text-primary mb-2">
                        {milestone.title}
                      </h4>
                      <p className="font-body text-text-secondary">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="relative z-10 my-4 lg:my-0">
                    <div className="w-4 h-4 bg-secondary rounded-full border-4 border-background shadow-brand"></div>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStory;