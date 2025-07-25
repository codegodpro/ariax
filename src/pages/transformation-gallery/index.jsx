import React from 'react';
import FilterPanel from './components/FilterPanel';
import TransformationCard from './components/TransformationCard';
import StylistSpotlight from './components/StylistSpotlight';
import SubmissionPrompt from './components/SubmissionPrompt';
import ShareModal from './components/ShareModal';

export default function TransformationGallery() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-8">Transformation Gallery</h1>
        <FilterPanel />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <TransformationCard />
          <StylistSpotlight />
          <SubmissionPrompt />
        </div>
        <ShareModal />
      </div>
    </div>
  );
}