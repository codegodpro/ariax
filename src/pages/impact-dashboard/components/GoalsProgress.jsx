import React from 'react';
import Icon from '../../../components/AppIcon';

const GoalsProgress = () => {
  const goals = [
    {
      id: 1,
      title: "Carbon Neutral Operations",
      description: "Achieve net-zero carbon emissions across all facilities by 2025",
      progress: 78,
      target: "100%",
      current: "78%",
      deadline: "Dec 2025",
      category: "environmental",
      milestones: [
        { text: "Solar panels installed", completed: true },
        { text: "Energy audit completed", completed: true },
        { text: "Waste reduction program", completed: true },
        { text: "Carbon offset partnerships", completed: false }
      ]
    },
    {
      id: 2,
      title: "Local Employment",
      description: "Create 100 new jobs for Lagos community members",
      progress: 65,
      target: "100 jobs",
      current: "65 jobs",
      deadline: "Jun 2025",
      category: "social",
      milestones: [
        { text: "Skills training program launched", completed: true },
        { text: "Partnership with local schools", completed: true },
        { text: "Apprenticeship program", completed: false },
        { text: "Management training initiative", completed: false }
      ]
    },
    {
      id: 3,
      title: "Zero Waste Initiative",
      description: "Eliminate 95% of waste sent to landfills through recycling and composting",
      progress: 42,
      target: "95%",
      current: "42%",
      deadline: "Dec 2024",
      category: "environmental",
      milestones: [
        { text: "Composting system installed", completed: true },
        { text: "Recycling partnerships established", completed: true },
        { text: "Staff training completed", completed: false },
        { text: "Customer education program", completed: false }
      ]
    },
    {
      id: 4,
      title: "Community Health Programs",
      description: "Provide free health and wellness services to 500 community members",
      progress: 88,
      target: "500 people",
      current: "440 people",
      deadline: "Mar 2025",
      category: "health",
      milestones: [
        { text: "Mobile clinic launched", completed: true },
        { text: "Health screening events", completed: true },
        { text: "Nutrition education workshops", completed: true },
        { text: "Mental health support program", completed: false }
      ]
    }
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'environmental':
        return 'text-secondary';
      case 'social':
        return 'text-primary';
      case 'health':
        return 'text-success';
      default:
        return 'text-text-secondary';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'environmental':
        return 'Leaf';
      case 'social':
        return 'Users';
      case 'health':
        return 'Heart';
      default:
        return 'Target';
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-brand">
      <div className="mb-6">
        <h3 className="font-headline font-semibold text-lg text-text-primary mb-2">2025 Impact Goals</h3>
        <p className="font-body text-sm text-text-secondary">Our commitment to measurable positive change</p>
      </div>

      <div className="space-y-6">
        {goals.map((goal) => (
          <div key={goal.id} className="border border-border rounded-lg p-5">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start space-x-3">
                <div className={`p-2 rounded-lg bg-${goal.category === 'environmental' ? 'secondary' : goal.category === 'social' ? 'primary' : 'success'}/10`}>
                  <Icon 
                    name={getCategoryIcon(goal.category)} 
                    size={20} 
                    className={getCategoryColor(goal.category)}
                  />
                </div>
                <div>
                  <h4 className="font-body font-semibold text-text-primary mb-1">{goal.title}</h4>
                  <p className="font-body text-sm text-text-secondary leading-relaxed">{goal.description}</p>
                </div>
              </div>
              
              <div className="text-right">
                <div className="font-body font-semibold text-lg text-text-primary">{goal.current}</div>
                <div className="font-body text-xs text-text-secondary">of {goal.target}</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-body text-sm font-medium text-text-primary">Progress</span>
                <span className="font-body text-sm text-text-secondary">{goal.progress}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div 
                  className={`h-3 rounded-full transition-all duration-500 ${
                    goal.category === 'environmental' ? 'bg-secondary' : 
                    goal.category === 'social' ? 'bg-primary' : 'bg-success'
                  }`}
                  style={{ width: `${goal.progress}%` }}
                ></div>
              </div>
            </div>

            {/* Milestones */}
            <div className="mb-4">
              <h5 className="font-body font-medium text-text-primary mb-3">Key Milestones</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {goal.milestones.map((milestone, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon 
                      name={milestone.completed ? "CheckCircle" : "Circle"} 
                      size={14} 
                      className={milestone.completed ? "text-success" : "text-text-secondary"}
                    />
                    <span className={`font-body text-sm ${
                      milestone.completed ? "text-text-primary" : "text-text-secondary"
                    }`}>
                      {milestone.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deadline */}
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div className="flex items-center space-x-2 text-text-secondary">
                <Icon name="Calendar" size={14} />
                <span className="font-body text-xs">Target: {goal.deadline}</span>
              </div>
              <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                goal.progress >= 80 ? 'bg-success/10 text-success' :
                goal.progress >= 50 ? 'bg-warning/10 text-warning': 'bg-error/10 text-error'
              }`}>
                {goal.progress >= 80 ? 'On Track' : goal.progress >= 50 ? 'In Progress' : 'Needs Attention'}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoalsProgress;