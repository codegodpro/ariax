import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const WellnessJournal = () => {
  const [activeCategory, setActiveCategory] = useState('hair-care');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const categories = [
    { id: 'hair-care', name: 'Hair Care', icon: 'Scissors' },
    { id: 'skincare', name: 'Skincare', icon: 'Sparkles' },
    { id: 'wellness', name: 'Wellness', icon: 'Heart' },
    { id: 'diy-recipes', name: 'DIY Recipes', icon: 'Leaf' },
    { id: 'lifestyle', name: 'Lifestyle', icon: 'Sun' }
  ];

  const articles = {
    'hair-care': [
      {
        id: 1,
        title: "The Power of Shea Butter for Natural Hair",
        excerpt: "Discover how this indigenous Nigerian ingredient can transform your hair care routine with deep moisturizing and protective properties.",
        author: "Adunni Okafor",
        readTime: "5 min read",
        publishDate: "2024-01-15",
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=250&fit=crop",
        content: `Shea butter, known locally as "ori" in Yoruba, has been a cornerstone of African beauty rituals for centuries. This golden treasure from the African shea tree offers unparalleled benefits for natural hair care.

**Why Shea Butter Works:**
Shea butter contains natural vitamins A and E, along with essential fatty acids that penetrate the hair shaft to provide deep moisturization. Unlike synthetic products, shea butter doesn't just coat the hair—it actually nourishes it from within.

**How to Use Shea Butter in Your Routine:**
1. **Pre-Shampoo Treatment**: Apply raw shea butter to dry hair 30 minutes before washing
2. **Leave-In Conditioner**: Mix melted shea butter with coconut oil for daily moisture
3. **Scalp Treatment**: Massage into scalp to combat dryness and promote healthy growth
4. **Protective Styling**: Use as a sealant when creating braids or twists

**Choosing Quality Shea Butter:**
Always opt for raw, unprocessed shea butter. It should have a slightly nutty scent and ivory to light yellow color. Avoid products with added fragrances or chemicals that can diminish its natural benefits.

**Pro Tips from Our Stylists:**
- Warm shea butter between your palms before application
- A little goes a long way—start with a small amount
- Combine with other natural oils like jojoba or argan for enhanced benefits
- Use consistently for 4-6 weeks to see significant improvements

Remember, healthy hair starts with understanding your unique hair type and needs. Book a consultation with our natural hair specialists to create a personalized care routine.`,
        tags: ['Natural Hair', 'Shea Butter', 'Hair Care', 'Nigerian Beauty'],
        category: 'hair-care'
      },
      {
        id: 2,
        title: "Protective Styling: Beauty and Health Combined",
        excerpt: "Learn how protective styles can promote hair growth while keeping you looking fabulous throughout Nigeria's diverse climate conditions.",author: "Tolu Adeyemi",readTime: "7 min read",publishDate: "2024-01-10",image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=400&h=250&fit=crop",
        content: `Protective styling is more than just a fashion statement—it's a strategic approach to maintaining healthy hair while looking stunning. In Nigeria's varied climate, from Lagos humidity to Abuja's dry harmattan, protective styles offer the perfect solution.

**Understanding Protective Styling:**
Protective styles keep your hair ends tucked away and minimize daily manipulation, reducing breakage and promoting length retention. They're particularly beneficial for natural hair textures that are more prone to dryness and fragility.

**Popular Protective Styles:**
- **Box Braids**: Classic and versatile, lasting 6-8 weeks
- **Cornrows**: Traditional and practical, perfect for active lifestyles
- **Twists**: Gentle on hair, great for beginners
- **Bantu Knots**: Stylish and creates beautiful curl patterns when taken down
- **Faux Locs**: Trendy protective style with a bohemian vibe

**Preparation is Key:**
Before installing any protective style, ensure your hair is:
1. Clean and well-conditioned
2. Properly moisturized
3. Detangled gently
4. Trimmed of any damaged ends

**Maintenance Tips:**
- Sleep with a silk or satin scarf/pillowcase
- Moisturize your scalp regularly with light oils
- Don't keep styles in too long (maximum 8 weeks)
- Take breaks between protective styles

**Common Mistakes to Avoid:**
- Installing styles too tightly (can cause traction alopecia)
- Neglecting scalp care while styled
- Using poor quality extensions
- Keeping styles in for too long

**Climate Considerations:**
During harmattan season, focus on extra moisture and scalp care. In humid conditions, choose styles that allow for better air circulation around the scalp.

Our expert stylists can help you choose the perfect protective style for your lifestyle, hair type, and the current season. Book a consultation to explore your options!`,
        tags: ['Protective Styling', 'Hair Growth', 'Natural Hair', 'Climate Care'],
        category: 'hair-care'
      }
    ],
    'skincare': [
      {
        id: 3,
        title: "Black Soap: Nigeria\'s Ancient Skincare Secret",
        excerpt: "Explore the traditional benefits of authentic African black soap and how to incorporate it into your modern skincare routine for glowing skin.",
        author: "Fatima Abdullahi",
        readTime: "6 min read",
        publishDate: "2024-01-12",
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=250&fit=crop",
        content: `African black soap, or "ose dudu" in Yoruba, represents centuries of West African skincare wisdom. This traditional cleanser offers gentle yet effective cleansing for all skin types, particularly benefiting melanin-rich skin.

**What Makes Black Soap Special:**
Authentic black soap is made from plantain skins, palm kernel oil, coconut oil, and shea butter. The ash from plantain skins provides natural exfoliation, while the oils moisturize and nourish the skin.

**Benefits for Different Skin Types:**
- **Oily Skin**: Natural antibacterial properties help control excess oil
- **Dry Skin**: Shea butter and oils provide gentle moisturization
- **Sensitive Skin**: Minimal ingredients reduce risk of irritation
- **Acne-Prone Skin**: Gentle exfoliation helps unclog pores
- **Mature Skin**: Antioxidants help combat signs of aging

**How to Use Black Soap Properly:**
1. **Start Slowly**: Use 2-3 times per week initially
2. **Create a Lather**: Work into a rich foam with water
3. **Gentle Application**: Massage gently in circular motions
4. **Thorough Rinse**: Remove all residue with lukewarm water
5. **Follow with Moisturizer**: Always moisturize after cleansing

**Choosing Authentic Black Soap:**
Real black soap should be:
- Dark brown to black in color
- Soft and slightly crumbly texture
- Have a natural, earthy scent
- Free from artificial fragrances or colors

**DIY Black Soap Recipes:**
**Honey Black Soap Cleanser:**
- 1 piece black soap
- 2 tablespoons raw honey
- 1 tablespoon coconut oil
Mix ingredients for extra moisturizing properties.

**Turmeric Black Soap for Brightening:**
- 1 piece black soap
- 1 teaspoon turmeric powder
- 1 tablespoon rose water
Blend for natural skin brightening effects.

**Common Mistakes:**
- Using too frequently initially
- Not moisturizing after use
- Buying fake or processed versions
- Expecting immediate results

**Professional Tip:**
If you experience any dryness, reduce frequency of use and always follow with a good moisturizer. Our estheticians can help you create a personalized routine incorporating black soap based on your specific skin needs.`,
        tags: ['Black Soap', 'Natural Skincare', 'African Beauty', 'Traditional Remedies'],
        category: 'skincare'
      }
    ],
    'wellness': [
      {
        id: 4,
        title: "Holistic Beauty: Mind, Body, and Spirit Connection",
        excerpt: "Discover how mental wellness, physical health, and spiritual balance contribute to your outer radiance and overall beauty.",
        author: "New Arias Team",
        readTime: "8 min read",
        publishDate: "2024-01-08",
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=250&fit=crop",
        content: `True beauty radiates from within, encompassing not just physical appearance but mental clarity, emotional balance, and spiritual wellness. At New Arias, we believe in nurturing the complete person.

**The Mind-Beauty Connection:**
Stress, anxiety, and negative thoughts manifest physically through:
- Premature aging and fine lines
- Dull, tired-looking skin
- Hair loss and breakage
- Poor posture and reduced confidence

**Practices for Mental Wellness:**
1. **Daily Meditation**: Even 10 minutes can reduce stress hormones
2. **Gratitude Journaling**: Shifts focus to positive aspects of life
3. **Mindful Beauty Routines**: Transform daily care into self-love rituals
4. **Digital Detox**: Regular breaks from social media comparison

**Physical Wellness for Beauty:**
**Nutrition for Glowing Skin:**
- Omega-3 rich foods (fish, walnuts, flaxseeds)
- Antioxidant-rich fruits and vegetables
- Adequate water intake (8-10 glasses daily)
- Limit processed foods and excess sugar

**Exercise Benefits:**
- Improved circulation for healthy skin glow
- Better sleep quality
- Stress reduction
- Enhanced confidence and posture

**Sleep and Beauty:**
Quality sleep is when your body repairs and regenerates:
- Aim for 7-9 hours nightly
- Create a calming bedtime routine
- Keep bedroom cool and dark
- Avoid screens 1 hour before bed

**Spiritual Wellness Practices:**
- **Connection with Nature**: Regular outdoor time
- **Community Engagement**: Building meaningful relationships
- **Purpose-Driven Living**: Aligning actions with values
- **Cultural Connection**: Embracing your heritage and traditions

**Creating Your Holistic Beauty Routine:**
**Morning Ritual:**
- Gratitude meditation (5 minutes)
- Gentle skincare routine
- Nutritious breakfast
- Positive affirmations

**Evening Ritual:**
- Relaxing bath or shower
- Nourishing hair and skin treatments
- Reflection or journaling
- Preparation for restful sleep

**Nigerian Wellness Traditions:**
Incorporate traditional practices:
- **Palm wine moderation**: Rich in antioxidants when consumed responsibly
- **Traditional dancing**: Excellent exercise and cultural connection
- **Herbal teas**: Ginger, lemongrass, and moringa for health
- **Community gatherings**: Social wellness through connection

**Professional Support:**
Sometimes we need guidance on our wellness journey. Our team offers:
- Stress-relief spa treatments
- Nutritional counseling for beauty
- Mindfulness workshops
- Holistic beauty consultations

Remember, sustainable beauty comes from consistent self-care practices that honor your whole being, not just your appearance.`,
        tags: ['Holistic Beauty', 'Wellness', 'Mental Health', 'Self-Care'],
        category: 'wellness'
      }
    ],
    'diy-recipes': [
      {
        id: 5,
        title: "DIY Face Masks Using Nigerian Ingredients",
        excerpt: "Create effective, natural face masks using ingredients from your kitchen and local markets for radiant, healthy skin.",
        author: "Fatima Abdullahi",
        readTime: "4 min read",
        publishDate: "2024-01-05",
        image: "https://images.unsplash.com/photo-1616391182219-e080b4d1043a?w=400&h=250&fit=crop",
        content: `Nature provides the best ingredients for skincare, and Nigeria's rich agricultural heritage offers numerous options for DIY beauty treatments. These masks use locally available ingredients that are both effective and affordable.

**Honey and Turmeric Brightening Mask**
*Perfect for: Dull skin, dark spots, uneven tone*

**Ingredients:**
- 2 tablespoons raw honey
- 1 teaspoon turmeric powder
- 1 teaspoon lemon juice (optional)

**Instructions:**
1. Mix ingredients into a smooth paste
2. Apply to clean face, avoiding eye area
3. Leave for 15-20 minutes
4. Rinse with lukewarm water
5. Follow with moisturizer

**Benefits:** Honey moisturizes and has antibacterial properties, while turmeric brightens and reduces inflammation.

**Plantain Peel Exfoliating Mask**
*Perfect for: Oily skin, clogged pores, rough texture*

**Ingredients:**
- Peel from 1 ripe plantain
- 2 tablespoons oatmeal (ground)
- 1 tablespoon honey

**Instructions:**
1. Dry plantain peel in sun for 2 days
2. Grind dried peel into powder
3. Mix with oatmeal and honey
4. Gently massage onto face in circular motions
5. Leave for 10 minutes, then rinse

**Benefits:** Natural enzymes in plantain peel provide gentle exfoliation, while oatmeal soothes and cleanses.

**Avocado and Coconut Oil Hydrating Mask**
*Perfect for: Dry skin, mature skin, winter care*

**Ingredients:**
- 1/2 ripe avocado
- 1 tablespoon coconut oil
- 1 teaspoon honey

**Instructions:**
1. Mash avocado until smooth
2. Mix in coconut oil and honey
3. Apply thick layer to face and neck
4. Relax for 20 minutes
5. Remove with warm, damp cloth

**Benefits:** Avocado provides vitamins and healthy fats, coconut oil moisturizes deeply, and honey adds antibacterial protection.

**Papaya Enzyme Renewal Mask**
*Perfect for: Aging skin, sun damage, dullness*

**Ingredients:**
- 1/4 cup ripe papaya (mashed)
- 1 tablespoon plain yogurt
- 1 teaspoon honey

**Instructions:**
1. Combine all ingredients
2. Apply evenly to face
3. Leave for 15 minutes
4. Rinse with cool water
5. Pat dry gently

**Benefits:** Papaya enzymes naturally exfoliate dead skin cells, yogurt provides lactic acid for gentle renewal.

**Clay and Neem Purifying Mask**
*Perfect for: Acne-prone skin, oily skin, blackheads*

**Ingredients:**
- 2 tablespoons bentonite clay
- 1 teaspoon neem powder (or crushed neem leaves)
- Rose water (enough to make paste)

**Instructions:**
1. Mix clay and neem powder
2. Add rose water gradually to form paste
3. Apply to problem areas or entire face
4. Leave until almost dry (10-15 minutes)
5. Rinse with lukewarm water

**Benefits:** Clay draws out impurities, neem has antibacterial properties, rose water soothes and tones.

**Safety Tips:**
- Always patch test new ingredients
- Use fresh ingredients when possible
- Store any leftover masks in refrigerator for maximum 3 days
- Avoid eye area with all masks
- Discontinue use if irritation occurs

**Frequency Guidelines:**
- Exfoliating masks: 1-2 times per week
- Hydrating masks: 2-3 times per week
- Purifying masks: 1-2 times per week (oily skin), once per week (normal/dry skin)

**Professional Enhancement:**
While DIY masks are wonderful for maintenance, professional treatments can address specific concerns more effectively. Our estheticians can recommend the best combination of home care and professional treatments for your skin goals.`,
        tags: ['DIY Skincare', 'Natural Ingredients', 'Face Masks', 'Nigerian Beauty'],
        category: 'diy-recipes'
      }
    ],
    'lifestyle': [
      {
        id: 6,
        title: "Seasonal Beauty: Adapting Your Routine to Nigeria\'s Climate",
        excerpt: "Learn how to adjust your beauty routine throughout Nigeria\'s distinct seasons for optimal skin and hair health year-round.",
        author: "New Arias Team",
        readTime: "6 min read",
        publishDate: "2024-01-03",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=250&fit=crop",
        content: `Nigeria's tropical climate presents unique beauty challenges throughout the year. From the humid rainy season to the dry harmattan winds, adapting your beauty routine seasonally ensures healthy skin and hair year-round.**Understanding Nigeria's Seasons:**

**Rainy Season (April - October):**
- High humidity (70-90%)
- Frequent rainfall
- Warm temperatures
- Increased fungal/bacterial growth risk

**Dry Season/Harmattan (November - March):**
- Low humidity (20-40%)
- Dusty, dry winds
- Cooler temperatures
- Increased skin and hair dryness

**Rainy Season Beauty Strategy:**

**Skincare Adjustments:**
- **Lighter Moisturizers**: Switch to gel-based or water-based formulas
- **Oil Control**: Use clay masks 2-3 times weekly
- **Antifungal Care**: Incorporate tea tree oil or neem-based products
- **Sun Protection**: Don't skip SPF despite cloud cover
- **Frequent Cleansing**: Cleanse twice daily to remove excess oil and humidity buildup

**Hair Care Tips:**
- **Frizz Control**: Use leave-in conditioners with humidity blockers
- **Protective Styles**: Opt for updos and braids to minimize humidity exposure
- **Scalp Care**: Keep scalp clean and dry to prevent fungal issues
- **Quick-Dry Products**: Choose fast-absorbing oils and serums

**Makeup Modifications:**
- **Waterproof Formulas**: Essential for mascara and eyeliner
- **Setting Spray**: Lock makeup in place
- **Powder Foundation**: Better staying power than liquid
- **Minimal Base**: Let skin breathe in high humidity

**Dry Season/Harmattan Beauty Strategy:**

**Intensive Moisturizing:**
- **Rich Creams**: Switch to oil-based moisturizers
- **Layering**: Apply serum, then moisturizer, then face oil
- **Overnight Treatments**: Use sleeping masks and intensive treatments
- **Humidifier**: Add moisture to indoor air
- **Gentle Cleansing**: Avoid over-cleansing which strips natural oils

**Hair Protection:**
- **Deep Conditioning**: Weekly intensive treatments
- **Protective Styling**: Shield hair from dry winds
- **Scalp Oils**: Regular oiling to prevent dryness and flaking
- **Silk/Satin**: Use silk scarves and pillowcases
- **Trim Regularly**: Remove dry, damaged ends

**Body Care:**
- **Rich Body Butters**: Apply to damp skin for better absorption
- **Exfoliation**: Remove dry, flaky skin 2-3 times weekly
- **Hydrating Baths**: Add oils to bath water
- **Lip Care**: Use intensive lip balms and treatments

**Year-Round Essentials:**

**Daily Non-Negotiables:**
1. **Sunscreen**: SPF 30+ daily, regardless of season
2. **Hydration**: 8-10 glasses of water daily
3. **Gentle Cleansing**: Maintain skin barrier
4. **Moisturizing**: Adjust formula to season
5. **Scalp Care**: Keep scalp healthy and clean

**Transitional Periods:**
During season changes (March-April, October-November):
- **Gradual Adjustments**: Slowly transition product formulas
- **Skin Assessment**: Evaluate changing skin needs
- **Professional Consultation**: Consider seasonal facials
- **Product Rotation**: Have both seasonal routines ready

**Regional Considerations:**
- **Northern Nigeria**: More extreme dry season effects
- **Coastal Areas**: Higher humidity year-round
- **Middle Belt**: More moderate seasonal variations
- **Urban vs Rural**: Pollution factors in cities

**Professional Seasonal Treatments:**
- **Pre-Rainy Season**: Deep cleansing facials, scalp treatments
- **Mid-Rainy Season**: Oil-control treatments, protective styling
- **Pre-Harmattan**: Intensive hydrating treatments
- **Mid-Harmattan**: Repair and restoration treatments

**Budget-Friendly Seasonal Swaps:**
- **DIY Humidifier**: Bowl of water near bed during harmattan
- **Natural Oils**: Coconut oil for rainy season, shea butter for dry season
- **Seasonal Fruits**: Watermelon for hydration, oranges for vitamin C
- **Clothing Choices**: Breathable fabrics in rainy season, protective covering in harmattan

**Tracking Your Skin:**
Keep a simple beauty journal noting:
- Skin condition changes
- Product effectiveness
- Seasonal breakouts or dryness
- What works best when

This helps you perfect your seasonal routine over time and make informed product choices.

Remember, consistency is key. Small daily adjustments based on seasonal needs will yield better results than dramatic routine overhauls.`,
        tags: ['Seasonal Beauty', 'Climate Care', 'Nigerian Weather', 'Beauty Routine'],
        category: 'lifestyle'
      }
    ]
  };

  const currentArticles = articles[activeCategory] || [];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section className="py-16 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl lg:text-5xl font-bold text-primary mb-4">
            Wellness Journal
          </h2>
          <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
            Expert beauty tips, traditional wisdom, and wellness insights for your complete transformation journey
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-body font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-brand'
                  : 'bg-card text-text-secondary hover:bg-accent hover:text-accent-foreground shadow-sm'
              }`}
            >
              <Icon name={category.icon} size={20} />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentArticles.map((article) => (
            <article
              key={article.id}
              className="bg-card rounded-2xl shadow-brand hover:shadow-brand-hover transition-all duration-300 overflow-hidden group cursor-pointer"
              onClick={() => setSelectedArticle(article)}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {categories.find(c => c.id === article.category)?.name}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-text-secondary mb-3">
                  <div className="flex items-center space-x-1">
                    <Icon name="User" size={14} />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={14} />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="font-headline text-xl font-semibold text-primary mb-3 group-hover:text-secondary transition-colors duration-200">
                  {article.title}
                </h3>

                <p className="font-body text-text-secondary text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-accent/20 text-accent-foreground text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-body text-xs text-text-secondary">
                    {formatDate(article.publishDate)}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="ArrowRight"
                    iconPosition="right"
                    className="text-primary hover:text-secondary"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Article Modal */}
        {selectedArticle && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative h-64 lg:h-80">
                <Image
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
                >
                  <Icon name="X" size={20} className="text-primary" />
                </button>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {categories.find(c => c.id === selectedArticle.category)?.name}
                    </span>
                    <span className="text-sm opacity-90">{formatDate(selectedArticle.publishDate)}</span>
                  </div>
                  <h1 className="font-headline text-3xl lg:text-4xl font-bold mb-2">
                    {selectedArticle.title}
                  </h1>
                  <div className="flex items-center space-x-4 text-sm opacity-90">
                    <div className="flex items-center space-x-1">
                      <Icon name="User" size={16} />
                      <span>By {selectedArticle.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Clock" size={16} />
                      <span>{selectedArticle.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 lg:p-8">
                <div className="prose prose-lg max-w-none">
                  {selectedArticle.content.split('\n\n').map((paragraph, index) => {
                    if (paragraph.startsWith('**') && paragraph.endsWith(':**')) {
                      return (
                        <h3 key={index} className="font-headline text-xl font-semibold text-primary mt-8 mb-4">
                          {paragraph.replace(/\*\*/g, '').replace(':', '')}
                        </h3>
                      );
                    } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                      return (
                        <h4 key={index} className="font-body font-semibold text-primary mt-6 mb-3">
                          {paragraph.replace(/\*\*/g, '')}
                        </h4>
                      );
                    } else if (paragraph.includes('- ')) {
                      const items = paragraph.split('\n').filter(item => item.trim().startsWith('- '));
                      return (
                        <ul key={index} className="list-none space-y-2 mb-6">
                          {items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start space-x-2">
                              <Icon name="Check" size={16} className="text-success mt-1 flex-shrink-0" />
                              <span className="font-body text-text-secondary">
                                {item.replace('- ', '')}
                              </span>
                            </li>
                          ))}
                        </ul>
                      );
                    } else if (paragraph.match(/^\d+\./)) {
                      const items = paragraph.split('\n').filter(item => item.trim().match(/^\d+\./));
                      return (
                        <ol key={index} className="list-none space-y-2 mb-6">
                          {items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start space-x-3">
                              <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                                {itemIndex + 1}
                              </span>
                              <span className="font-body text-text-secondary">
                                {item.replace(/^\d+\.\s*/, '')}
                              </span>
                            </li>
                          ))}
                        </ol>
                      );
                    } else {
                      return (
                        <p key={index} className="font-body text-text-secondary mb-4 leading-relaxed">
                          {paragraph}
                        </p>
                      );
                    }
                  })}
                </div>

                <div className="border-t border-border pt-6 mt-8">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedArticle.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      variant="default"
                      iconName="Calendar"
                      iconPosition="left"
                      className="bg-cta text-cta-foreground hover:bg-cta/90"
                    >
                      Book Consultation
                    </Button>
                    <Button
                      variant="outline"
                      iconName="Share"
                      iconPosition="left"
                    >
                      Share Article
                    </Button>
                    <Button
                      variant="outline"
                      iconName="Bookmark"
                      iconPosition="left"
                    >
                      Save for Later
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="bg-gradient-luxury rounded-2xl p-8 text-center text-white mt-16">
          <Icon name="Mail" size={48} className="mx-auto mb-4 opacity-90" />
          <h3 className="font-headline text-2xl font-semibold mb-4">
            Stay Updated with Beauty Tips
          </h3>
          <p className="font-body mb-6 opacity-90 max-w-2xl mx-auto">
            Get weekly beauty tips, seasonal advice, and exclusive content delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-primary bg-white/90 backdrop-blur-sm placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button
              variant="secondary"
              iconName="Send"
              iconPosition="right"
              className="bg-white text-primary hover:bg-white/90"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellnessJournal;