import React from 'react';
import FounderStory from './components/FounderStory';
import CompanyTimeline from './components/CompanyTimeline';
import ValuesShowcase from './components/ValuesShowcase';
import TeamProfiles from './components/TeamProfiles';
import BrandPhilosophy from './components/BrandPhilosophy';
import CommunityImpact from './components/CommunityImpact';
import BehindTheScenes from './components/BehindTheScenes';
import PressAndAwards from './components/PressAndAwards';

export default function AboutOurUniverse() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-8">About Our Universe</h1>
        <FounderStory />
        <CompanyTimeline />
        <ValuesShowcase />
        <TeamProfiles />
        <BrandPhilosophy />
        <CommunityImpact />
        <BehindTheScenes />
        <PressAndAwards />
      </div>
    </div>
  );
}