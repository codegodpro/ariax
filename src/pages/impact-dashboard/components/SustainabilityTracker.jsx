import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SustainabilityTracker = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  
  const userImpactData = {
    month: {
      carbonSaved: "2.4 kg",
      waterConserved: "150 L",
      wasteReduced: "0.8 kg",
      renewableEnergy: "12 kWh",
      points: 245
    },
    year: {
      carbonSaved: "28.8 kg",
      waterConserved: "1,800 L", 
      wasteReduced: "9.6 kg",
      renewableEnergy: "144 kWh",
      points: 2940
    }
  };

  const achievements = [
    {
      id: 1,
      title: "Eco Warrior",
      description: "Saved 25kg+ CO₂ this year",
      icon: "Award",
      earned: true,
      date: "Dec 2024"
    },
    {
      id: 2,
      title: "Water Guardian",
      description: "Conserved 1,500L+ water",
      icon: "Droplets",
      earned: true,
      date: "Nov 2024"
    },
    {
      id: 3,
      title: "Green Champion",
      description: "100% renewable energy usage",
      icon: "Leaf",
      earned: false,
      progress: 85
    }
  ];

  const currentData = userImpactData[selectedPeriod];

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-brand">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-headline font-semibold text-lg text-text-primary">Your Impact Tracker</h3>
          <p className="font-body text-sm text-text-secondary">Track your personal sustainability journey</p>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            variant={selectedPeriod === 'month' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedPeriod('month')}
          >
            This Month
          </Button>
          <Button
            variant={selectedPeriod === 'year' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedPeriod('year')}
          >
            This Year
          </Button>
        </div>
      </div>

      {/* Impact Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-success/10 rounded-lg p-4 text-center">
          <Icon name="Leaf" size={24} className="text-success mx-auto mb-2" />
          <div className="font-body font-semibold text-success text-lg">{currentData.carbonSaved}</div>
          <div className="font-body text-xs text-text-secondary">CO₂ Saved</div>
        </div>
        
        <div className="bg-primary/10 rounded-lg p-4 text-center">
          <Icon name="Droplets" size={24} className="text-primary mx-auto mb-2" />
          <div className="font-body font-semibold text-primary text-lg">{currentData.waterConserved}</div>
          <div className="font-body text-xs text-text-secondary">Water Saved</div>
        </div>
        
        <div className="bg-warning/10 rounded-lg p-4 text-center">
          <Icon name="Trash2" size={24} className="text-warning mx-auto mb-2" />
          <div className="font-body font-semibold text-warning text-lg">{currentData.wasteReduced}</div>
          <div className="font-body text-xs text-text-secondary">Waste Reduced</div>
        </div>
        
        <div className="bg-secondary/10 rounded-lg p-4 text-center">
          <Icon name="Zap" size={24} className="text-secondary mx-auto mb-2" />
          <div className="font-body font-semibold text-secondary text-lg">{currentData.renewableEnergy}</div>
          <div className="font-body text-xs text-text-secondary">Clean Energy</div>
        </div>
      </div>

      {/* Points & Level */}
      <div className="bg-gradient-brand rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between text-white">
          <div>
            <div className="font-body font-semibold text-2xl">{currentData.points}</div>
            <div className="font-body text-sm opacity-90">Impact Points</div>
          </div>
          <div className="text-right">
            <div className="font-body font-medium">Level 3</div>
            <div className="font-body text-xs opacity-90">Sustainability Advocate</div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div>
        <h4 className="font-body font-semibold text-text-primary mb-4">Achievements</h4>
        <div className="space-y-3">
          {achievements.map((achievement) => (
            <div 
              key={achievement.id}
              className={`flex items-center space-x-3 p-3 rounded-lg border ${
                achievement.earned 
                  ? 'bg-success/5 border-success/20' :'bg-muted border-border'
              }`}
            >
              <div className={`p-2 rounded-full ${
                achievement.earned 
                  ? 'bg-success text-white' :'bg-muted text-text-secondary'
              }`}>
                <Icon name={achievement.icon} size={16} />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h5 className="font-body font-medium text-text-primary">{achievement.title}</h5>
                  {achievement.earned && (
                    <span className="font-body text-xs text-success">{achievement.date}</span>
                  )}
                </div>
                <p className="font-body text-sm text-text-secondary">{achievement.description}</p>
                
                {!achievement.earned && achievement.progress && (
                  <div className="mt-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-body text-xs text-text-secondary">Progress</span>
                      <span className="font-body text-xs text-text-secondary">{achievement.progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${achievement.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SustainabilityTracker;