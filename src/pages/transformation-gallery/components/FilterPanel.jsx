import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const FilterPanel = ({ 
  filters, 
  onFilterChange, 
  onClearFilters, 
  isOpen, 
  onToggle,
  resultCount 
}) => {
  const categoryOptions = [
    { value: 'all', label: 'All Categories' },
    { value: 'natural-hair', label: 'Natural Hair Care' },
    { value: 'skincare', label: 'Skincare Treatments' },
    { value: 'bridal', label: 'Bridal Styling' },
    { value: 'everyday', label: 'Everyday Transformations' },
    { value: 'special-occasion', label: 'Special Occasions' },
    { value: 'color-treatment', label: 'Color Treatments' }
  ];

  const hairTypeOptions = [
    { value: 'all', label: 'All Hair Types' },
    { value: 'type-1', label: 'Type 1 (Straight)' },
    { value: 'type-2', label: 'Type 2 (Wavy)' },
    { value: 'type-3', label: 'Type 3 (Curly)' },
    { value: 'type-4', label: 'Type 4 (Coily)' }
  ];

  const skinToneOptions = [
    { value: 'all', label: 'All Skin Tones' },
    { value: 'light', label: 'Light' },
    { value: 'medium', label: 'Medium' },
    { value: 'dark', label: 'Dark' },
    { value: 'deep', label: 'Deep' }
  ];

  const occasionOptions = [
    { value: 'all', label: 'All Occasions' },
    { value: 'wedding', label: 'Wedding' },
    { value: 'party', label: 'Party/Event' },
    { value: 'professional', label: 'Professional' },
    { value: 'casual', label: 'Casual/Daily' },
    { value: 'photoshoot', label: 'Photoshoot' }
  ];

  const concernOptions = [
    { value: 'all', label: 'All Concerns' },
    { value: 'hair-growth', label: 'Hair Growth' },
    { value: 'hair-damage', label: 'Hair Damage' },
    { value: 'acne', label: 'Acne Treatment' },
    { value: 'aging', label: 'Anti-Aging' },
    { value: 'pigmentation', label: 'Pigmentation' },
    { value: 'dryness', label: 'Dryness' }
  ];

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'popular', label: 'Most Popular' },
    { value: 'rating', label: 'Highest Rated' }
  ];

  const handleFilterChange = (key, value) => {
    onFilterChange({ ...filters, [key]: value });
  };

  const activeFiltersCount = Object.values(filters).filter(value => value !== 'all' && value !== '').length;

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-6">
        <Button
          variant="outline"
          onClick={onToggle}
          iconName="Filter"
          iconPosition="left"
          className="w-full justify-between"
        >
          <span>Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}</span>
          <Icon name={isOpen ? "ChevronUp" : "ChevronDown"} size={16} />
        </Button>
      </div>

      {/* Filter Panel */}
      <div className={`bg-card rounded-xl shadow-brand p-6 transition-all duration-300 ${
        isOpen ? 'block' : 'hidden lg:block'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="font-headline font-semibold text-lg text-foreground">
              Filter Transformations
            </h3>
            <p className="text-sm text-text-secondary mt-1">
              {resultCount} transformations found
            </p>
          </div>
          {activeFiltersCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearFilters}
              iconName="X"
              iconPosition="left"
              className="text-text-secondary hover:text-foreground"
            >
              Clear All
            </Button>
          )}
        </div>

        {/* Filter Options */}
        <div className="space-y-6">
          {/* Category Filter */}
          <div>
            <Select
              label="Service Category"
              options={categoryOptions}
              value={filters.category}
              onChange={(value) => handleFilterChange('category', value)}
              className="w-full"
            />
          </div>

          {/* Hair Type Filter */}
          <div>
            <Select
              label="Hair Type"
              options={hairTypeOptions}
              value={filters.hairType}
              onChange={(value) => handleFilterChange('hairType', value)}
              className="w-full"
            />
          </div>

          {/* Skin Tone Filter */}
          <div>
            <Select
              label="Skin Tone"
              options={skinToneOptions}
              value={filters.skinTone}
              onChange={(value) => handleFilterChange('skinTone', value)}
              className="w-full"
            />
          </div>

          {/* Occasion Filter */}
          <div>
            <Select
              label="Occasion"
              options={occasionOptions}
              value={filters.occasion}
              onChange={(value) => handleFilterChange('occasion', value)}
              className="w-full"
            />
          </div>

          {/* Concern Filter */}
          <div>
            <Select
              label="Specific Concerns"
              options={concernOptions}
              value={filters.concern}
              onChange={(value) => handleFilterChange('concern', value)}
              className="w-full"
            />
          </div>

          {/* Sort Filter */}
          <div>
            <Select
              label="Sort By"
              options={sortOptions}
              value={filters.sort}
              onChange={(value) => handleFilterChange('sort', value)}
              className="w-full"
            />
          </div>

          {/* Price Range */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-3">
              Price Range
            </label>
            <div className="space-y-2">
              {[
                { value: 'all', label: 'All Prices' },
                { value: '0-50000', label: 'Under ₦50,000' },
                { value: '50000-100000', label: '₦50,000 - ₦100,000' },
                { value: '100000-200000', label: '₦100,000 - ₦200,000' },
                { value: '200000+', label: 'Above ₦200,000' }
              ].map((option) => (
                <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="priceRange"
                    value={option.value}
                    checked={filters.priceRange === option.value}
                    onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                    className="w-4 h-4 text-primary border-border focus:ring-primary focus:ring-2"
                  />
                  <span className="text-sm text-foreground">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Duration Filter */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-3">
              Treatment Duration
            </label>
            <div className="space-y-2">
              {[
                { value: 'all', label: 'Any Duration' },
                { value: '0-2', label: 'Under 2 hours' },
                { value: '2-4', label: '2-4 hours' },
                { value: '4-6', label: '4-6 hours' },
                { value: '6+', label: 'Over 6 hours' }
              ].map((option) => (
                <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="duration"
                    value={option.value}
                    checked={filters.duration === option.value}
                    onChange={(e) => handleFilterChange('duration', e.target.value)}
                    className="w-4 h-4 text-primary border-border focus:ring-primary focus:ring-2"
                  />
                  <span className="text-sm text-foreground">{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Apply Filters Button (Mobile) */}
        <div className="lg:hidden mt-6 pt-6 border-t border-border">
          <Button
            variant="default"
            onClick={onToggle}
            className="w-full bg-primary text-primary-foreground"
          >
            Apply Filters ({resultCount} results)
          </Button>
        </div>
      </div>
    </>
  );
};

export default FilterPanel;