import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const EducationalContent = () => {
  const [activeTab, setActiveTab] = useState('recipes');

  const nigerianRecipes = [
    {
      id: 1,
      name: "Akara (Bean Cakes) with Fresh Eggs",
      difficulty: "Easy",
      time: "30 minutes",
      servings: 4,
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Traditional Nigerian bean cakes enhanced with farm-fresh eggs for extra protein and flavor.",
      ingredients: [
        "2 cups black-eyed beans (soaked overnight)",
        "3 New Arias farm-fresh eggs",
        "1 medium onion, chopped",
        "2 scotch bonnet peppers",
        "1 tsp salt",
        "Vegetable oil for frying"
      ],
      instructions: [
        "Peel the soaked beans and blend with minimal water until smooth",
        "Beat the fresh eggs and fold into the bean paste",
        "Add chopped onions, peppers, and salt. Mix well",
        "Heat oil to 350°F and drop spoonfuls of mixture",
        "Fry until golden brown and crispy outside",
        "Serve hot with bread or pap"
      ],
      nutritionalBenefits: "High in protein, fiber, and essential amino acids. The fresh eggs add superior vitamin D and omega-3 fatty acids.",
      tips: "Use New Arias eggs for richer color and better binding. The fresher the eggs, the fluffier your akara will be."
    },
    {
      id: 2,
      name: "Nigerian Egg Stew (Obe Eyin)",
      difficulty: "Medium",
      time: "45 minutes",
      servings: 6,
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Rich, flavorful egg stew perfect with rice, yam, or plantain. A Nigerian comfort food classic.",
      ingredients: [
        "8 New Arias farm-fresh eggs",
        "4 large tomatoes, blended",
        "2 red bell peppers",
        "1 large onion",
        "3 cloves garlic",
        "2 tbsp palm oil",
        "1 tsp curry powder",
        "Salt and seasoning cubes to taste"
      ],
      instructions: [
        "Hard boil the eggs for 10 minutes, then peel and set aside",
        "Blend tomatoes, peppers, onions, and garlic",
        "Heat palm oil and fry the blended mixture until thick",
        "Add curry powder, salt, and seasoning cubes",
        "Gently add the boiled eggs and simmer for 15 minutes",
        "Serve with rice, yam, or plantain"
      ],
      nutritionalBenefits: "Complete protein source with all essential amino acids. Rich in choline for brain health.",
      tips: "Fresh eggs from New Arias have firmer whites and won\'t break apart during cooking."
    },
    {
      id: 3,
      name: "Egg and Plantain Frittata",
      difficulty: "Easy",
      time: "25 minutes",
      servings: 4,
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "A fusion of Nigerian flavors in an Italian-style frittata, perfect for breakfast or dinner.",
      ingredients: [
        "6 New Arias farm-fresh eggs",
        "2 ripe plantains, sliced",
        "1 medium onion, sliced",
        "2 tomatoes, chopped",
        "1 green bell pepper",
        "2 tbsp vegetable oil",
        "Salt and black pepper to taste",
        "Fresh parsley for garnish"
      ],
      instructions: [
        "Preheat oven to 375°F",
        "Sauté plantains until golden, set aside",
        "In same pan, cook onions, tomatoes, and peppers",
        "Beat eggs with salt and pepper",
        "Add vegetables and plantains to beaten eggs",
        "Pour into oven-safe pan and bake for 15 minutes",
        "Garnish with parsley and serve"
      ],
      nutritionalBenefits: "Balanced meal with complex carbs from plantains and high-quality protein from fresh eggs.",
      tips: "The natural sweetness of plantains pairs beautifully with the rich flavor of farm-fresh eggs."
    }
  ];

  const nutritionalGuides = [
    {
      id: 1,
      title: "Complete Protein Power",
      icon: "Zap",
      content: `Farm-fresh eggs contain all nine essential amino acids your body needs but cannot produce on its own. New Arias eggs have 22% more protein than commercial alternatives, making them perfect for:\n\n• Muscle building and repair\n• Weight management\n• Growing children's development\n• Post-workout recovery\n• Healthy aging support`,
      keyFacts: [
        "13.2g protein per 100g serving",
        "Complete amino acid profile",
        "High biological value of 100",
        "Easily digestible protein source"
      ]
    },
    {
      id: 2,
      title: "Brain Health & Development",
      icon: "Brain",
      content: `The choline content in New Arias eggs is 37% higher than commercial eggs, supporting:\n\n• Memory and cognitive function\n• Fetal brain development during pregnancy\n• Neurotransmitter production\n• Cell membrane structure\n• Liver function and metabolism`,
      keyFacts: [
        "294mg choline per 100g",
        "Essential for brain development",
        "Supports memory formation",
        "Critical during pregnancy"
      ]
    },
    {
      id: 3,
      title: "Heart Health & Omega-3",
      icon: "Heart",
      content: `Free-range farming results in eggs with 89% more omega-3 fatty acids:\n\n• Reduces inflammation\n• Supports cardiovascular health\n• Improves cholesterol profile\n• Enhances brain function\n• Supports eye health`,
      keyFacts: [
        "180mg omega-3 per 100g",
        "Better HDL/LDL ratio",
        "Anti-inflammatory properties",
        "Supports heart rhythm"
      ]
    },
    {
      id: 4,
      title: "Vitamin & Mineral Rich",
      icon: "Sparkles",
      content: `New Arias eggs are significantly higher in essential vitamins and minerals:\n\n• Vitamin D: 112% more than commercial eggs\n• Vitamin B12: 50% higher for energy metabolism\n• Folate: 47% more for DNA synthesis\n• Selenium: Natural antioxidant protection\n• Iron: Better absorption and bioavailability`,
      keyFacts: [
        "87 IU Vitamin D per 100g",
        "1.8μg Vitamin B12",
        "47μg Folate",
        "Rich in selenium and iron"
      ]
    }
  ];

  const sustainableLivingTips = [
    {
      id: 1,
      title: "Reduce Food Waste",
      icon: "Recycle",
      tips: [
        "Use eggshells as natural fertilizer for your garden plants",
        "Store eggs properly to extend freshness up to 5 weeks",
        "Plan meals ahead to avoid buying more than you need",
        "Use older eggs for baking where freshness is less critical",
        "Compost eggshells to enrich your soil naturally"
      ],
      impact: "Reduces household waste by up to 15% and creates nutrient-rich compost"
    },
    {
      id: 2,
      title: "Support Local Agriculture",
      icon: "MapPin",
      tips: [
        "Choose locally produced eggs to reduce transportation emissions",
        "Visit local farms to understand sustainable practices",
        "Share information about sustainable farming with friends",
        "Support businesses that prioritize environmental responsibility",
        "Advocate for sustainable practices in your community"
      ],
      impact: "Reduces carbon footprint by 60% compared to imported alternatives"
    },
    {
      id: 3,
      title: "Conscious Consumption",
      icon: "Leaf",
      tips: [
        "Buy only what you need to minimize waste",
        "Choose quality over quantity for better nutrition",
        "Support free-range and organic farming practices",
        "Educate yourself about food production methods",
        "Make informed choices based on environmental impact"
      ],
      impact: "Promotes sustainable farming and reduces environmental degradation"
    },
    {
      id: 4,
      title: "Water Conservation",
      icon: "Droplets",
      tips: [
        "Support farms that use efficient irrigation systems",
        "Understand the water footprint of your food choices",
        "Practice water conservation in your own cooking",
        "Choose products from water-conscious producers",
        "Educate others about water-efficient farming"
      ],
      impact: "Saves up to 270L of water per dozen eggs compared to industrial farming"
    }
  ];

  const tabs = [
    { id: 'recipes', name: 'Nigerian Recipes', icon: 'ChefHat' },
    { id: 'nutrition', name: 'Nutrition Guide', icon: 'Heart' },
    { id: 'sustainability', name: 'Sustainable Living', icon: 'Leaf' }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-surface to-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-primary mb-4">
            Educational Resources
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Discover recipes, nutrition insights, and sustainable living tips from our experts
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-card rounded-xl p-2 shadow-brand">
            <div className="flex space-x-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-body font-medium text-sm transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-secondary text-secondary-foreground shadow-brand'
                      : 'text-text-secondary hover:text-primary hover:bg-muted'
                  }`}
                >
                  <Icon name={tab.icon} size={18} />
                  <span>{tab.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px]">
          {/* Recipes Tab */}
          {activeTab === 'recipes' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="font-headline text-2xl font-bold text-primary mb-2">
                  Nigerian-Inspired Egg Recipes
                </h3>
                <p className="font-body text-text-secondary">
                  Traditional and fusion recipes featuring our farm-fresh eggs
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {nigerianRecipes.map((recipe) => (
                  <div key={recipe.id} className="bg-card rounded-2xl overflow-hidden shadow-brand hover:shadow-brand-hover transition-all duration-300 group">
                    {/* Recipe Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={recipe.image}
                        alt={recipe.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium">
                        {recipe.difficulty}
                      </div>
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-foreground">
                        {recipe.time}
                      </div>
                    </div>

                    {/* Recipe Content */}
                    <div className="p-6">
                      <h4 className="font-headline text-xl font-bold text-primary mb-2">
                        {recipe.name}
                      </h4>
                      <p className="font-body text-sm text-text-secondary mb-4">
                        {recipe.description}
                      </p>

                      <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Icon name="Clock" size={14} />
                          <span>{recipe.time}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="Users" size={14} />
                          <span>{recipe.servings} servings</span>
                        </div>
                      </div>

                      {/* Ingredients Preview */}
                      <div className="mb-4">
                        <h5 className="font-body font-semibold text-foreground mb-2">Key Ingredients:</h5>
                        <div className="space-y-1">
                          {recipe.ingredients.slice(0, 3).map((ingredient, index) => (
                            <p key={index} className="font-body text-xs text-text-secondary">
                              • {ingredient}
                            </p>
                          ))}
                          {recipe.ingredients.length > 3 && (
                            <p className="font-body text-xs text-muted-foreground">
                              +{recipe.ingredients.length - 3} more ingredients
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Nutritional Benefits */}
                      <div className="bg-success/10 rounded-lg p-3 mb-4">
                        <h5 className="font-body font-semibold text-success mb-1">Nutritional Benefits:</h5>
                        <p className="font-body text-xs text-success/80">
                          {recipe.nutritionalBenefits}
                        </p>
                      </div>

                      {/* Pro Tip */}
                      <div className="bg-accent/10 rounded-lg p-3">
                        <h5 className="font-body font-semibold text-accent-foreground mb-1">Pro Tip:</h5>
                        <p className="font-body text-xs text-accent-foreground/80">
                          {recipe.tips}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Nutrition Tab */}
          {activeTab === 'nutrition' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="font-headline text-2xl font-bold text-primary mb-2">
                  Nutritional Excellence Guide
                </h3>
                <p className="font-body text-text-secondary">
                  Understanding the superior nutritional benefits of farm-fresh eggs
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {nutritionalGuides.map((guide) => (
                  <div key={guide.id} className="bg-card rounded-2xl p-8 shadow-brand hover:shadow-brand-hover transition-all duration-300">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon name={guide.icon} size={28} className="text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-headline text-xl font-bold text-primary mb-2">
                          {guide.title}
                        </h4>
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className="font-body text-text-secondary leading-relaxed whitespace-pre-line">
                        {guide.content}
                      </p>
                    </div>

                    <div className="bg-surface rounded-lg p-4">
                      <h5 className="font-body font-semibold text-foreground mb-3">Key Facts:</h5>
                      <div className="space-y-2">
                        {guide.keyFacts.map((fact, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Icon name="CheckCircle" size={14} className="text-success flex-shrink-0" />
                            <span className="font-body text-sm text-text-secondary">{fact}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sustainability Tab */}
          {activeTab === 'sustainability' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="font-headline text-2xl font-bold text-primary mb-2">
                  Sustainable Living Tips
                </h3>
                <p className="font-body text-text-secondary">
                  Simple ways to live more sustainably and support environmental responsibility
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {sustainableLivingTips.map((tipCategory) => (
                  <div key={tipCategory.id} className="bg-card rounded-2xl p-8 shadow-brand hover:shadow-brand-hover transition-all duration-300">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-16 h-16 bg-success/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon name={tipCategory.icon} size={28} className="text-success" />
                      </div>
                      <div>
                        <h4 className="font-headline text-xl font-bold text-primary mb-2">
                          {tipCategory.title}
                        </h4>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h5 className="font-body font-semibold text-foreground mb-3">Practical Tips:</h5>
                      <div className="space-y-3">
                        {tipCategory.tips.map((tip, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <Icon name="Leaf" size={14} className="text-success flex-shrink-0 mt-1" />
                            <span className="font-body text-sm text-text-secondary leading-relaxed">{tip}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-success/10 rounded-lg p-4">
                      <h5 className="font-body font-semibold text-success mb-2">Environmental Impact:</h5>
                      <p className="font-body text-sm text-success/80">
                        {tipCategory.impact}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EducationalContent;