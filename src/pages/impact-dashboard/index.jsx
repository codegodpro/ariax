import React from 'react';
import MetricCard from './components/MetricCard';
import ImpactChart from './components/ImpactChart';
import GoalsProgress from './components/GoalsProgress';
import SustainabilityTracker from './components/SustainabilityTracker';
import CertificationBadge from './components/CertificationBadge';
import PartnershipCard from './components/PartnershipCard';
import ImpactStory from './components/ImpactStory';

export default function ImpactDashboard() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-8">Impact Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <MetricCard />
          <ImpactChart />
          <GoalsProgress />
          <SustainabilityTracker />
          <CertificationBadge />
          <PartnershipCard />
          <ImpactStory />
        </div>
      </div>
    </div>
  );
}