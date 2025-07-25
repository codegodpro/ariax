import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import AppIcon from '../../components/AppIcon';
import Footer from './components/Footer';
import InfoTile from './components/InfoTile';
// Remove Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const brandTiles = [
  {
    icon: 'Sparkles',
    title: 'Beauty & Wellness',
    description: 'Premium salon, spa, and grooming for men and women. Experience transformation in a luxurious, relaxing space.',
    color: 'from-pink-400 to-fuchsia-500',
  },
  {
    icon: 'Egg',
    title: 'Farm Fresh Agriculture',
    description: 'Nutritious, sustainable eggs and produce delivered from our ethical farm to your table.',
    color: 'from-green-400 to-lime-500',
  }
];

const salonServices = [
  { icon: 'Scissors', label: 'Hair' },
  { icon: 'Brush', label: 'Nails' },
  { icon: 'Spa', label: 'Spa' },
];
const farmServices = [
  { icon: 'Egg', label: 'Egg Production' },
  { icon: 'Truck', label: 'Delivery' },
];

const Homepage = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>New Arias Lifestyle Hub - Complete Living Starts Here | Beauty & Sustainable Living</title>
        <meta 
          name="description" 
          content="Nigeria's first luxury lifestyle platform combining premium beauty & wellness services with sustainable agriculture. Transform your life through conscious luxury at New Arias Lifestyle Hub." 
        />
        <meta 
          name="keywords" 
          content="New Arias, lifestyle hub, beauty salon Lagos, sustainable farm Nigeria, organic eggs, bridal makeover, spa treatments, conscious luxury, environmental sustainability" 
        />
        <meta name="author" content="New Arias Lifestyle Hub" />
        <meta property="og:title" content="New Arias Lifestyle Hub - Complete Living Starts Here" />
        <meta 
          property="og:description" 
          content="Where personal beauty meets sustainable living. Experience Nigeria's first luxury lifestyle platform that celebrates transformation and environmental consciousness." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://newarias.ng/homepage" />
        <meta property="og:image" content="https://newarias.ng/assets/images/og-homepage.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="New Arias Lifestyle Hub - Complete Living Starts Here" />
        <meta 
          name="twitter:description" 
          content="Nigeria's first luxury lifestyle platform combining beauty & wellness with sustainable living. Transform your life through conscious choices." 
        />
        <link rel="canonical" href="https://newarias.ng/homepage" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header at the top */}
        <Header />
        {/* Main Content */}
        <main>
          {/* Hero Section - Auto Slider */}
          <section className="relative w-full min-h-[80vh] md:min-h-[95vh] flex items-center justify-center overflow-hidden -mt-0 z-0">
            <Swiper
              modules={[EffectFade, Autoplay]}
              effect="fade"
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop
              className="w-full h-full"
            >
              {/* Slide 1 */}
              <SwiperSlide>
                <div className="relative flex items-center justify-center h-[80vh] md:h-[95vh] w-full" style={{
                  backgroundImage: 'url(/assets/images/salon.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}>
                  <div className="absolute inset-0 bg-black/40" style={{zIndex:1}} />
                  <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-4xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-pink-400 via-white to-green-400 bg-clip-text text-transparent drop-shadow-lg">
                      Welcome to New Arias
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-semibold text-white/90 mb-2">
                      Where Beauty Meets Nature
                    </h2>
                    <p className="text-lg md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
                      Experience luxury at our unisex salon & spa, and discover the freshest farm-to-table eggs from our sustainable poultry farm.
                    </p>
                    <a href="/salon" className="px-8 py-4 rounded-[6px] text-lg font-semibold text-white shadow-lg transition-all duration-200 bg-pink-500 hover:bg-pink-600">Book Salon Services</a>
                  </div>
                </div>
              </SwiperSlide>
              {/* Slide 2 */}
              <SwiperSlide>
                <div className="relative flex items-center justify-center h-[80vh] md:h-[95vh] w-full" style={{
                  backgroundImage: 'url(/assets/images/eggs.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}>
                  <div className="absolute inset-0 bg-black/40" style={{zIndex:1}} />
                  <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-4xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-green-400 via-white to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
                      Farm Fresh Nutrition
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-semibold text-white/90 mb-2">
                      Nutritious. Sustainable. Local.
                    </h2>
                    <p className="text-lg md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
                      Order eggs direct from our ethical farm. Bulk and retail supply available.
                    </p>
                    <a href="/farm" className="px-8 py-4 rounded-[6px] text-lg font-semibold text-white shadow-lg transition-all duration-200 bg-green-600 hover:bg-green-700">Shop Fresh Eggs</a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </section>

          {/* Brand Summary Tiles */}
          <section className="max-w-6xl mx-auto py-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-2 text-gray-900 dark:text-white">Our Divisions</h2>
            <p className="text-lg md:text-xl text-center text-gray-500 dark:text-gray-300 mb-10">Discover our two unique divisions, each dedicated to excellence in their respective fields.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Salon Card */}
              <div className="bg-white dark:bg-black/40 rounded-2xl shadow-lg border border-pink-100 dark:border-pink-400 p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-1">
                <div className="flex flex-col items-center mb-4">
                  <div className="bg-pink-50 dark:bg-pink-900/20 rounded-full p-4 mb-2"><AppIcon name='Sparkles' size={40} className="text-pink-400" /></div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Arias Unisex Salon & Spa</h3>
                  <div className="text-pink-500 font-semibold text-lg mt-1 mb-2">Beauty Redefined</div>
                </div>
                <p className="text-gray-700 dark:text-gray-200 mb-6">Professional beauty and wellness services in a luxurious, relaxing environment. From haircuts to spa treatments, we pamper you from head to toe.</p>
                <div className="grid grid-cols-2 gap-2 mb-6 w-full">
                  <div className="flex items-center gap-2 text-pink-600 text-sm"><AppIcon name='User' size={18} />Professional Stylists</div>
                  <div className="flex items-center gap-2 text-pink-600 text-sm"><AppIcon name='Spa' size={18} />Spa Treatments</div>
                  <div className="flex items-center gap-2 text-pink-600 text-sm"><AppIcon name='Users' size={18} />Unisex Services</div>
                  <div className="flex items-center gap-2 text-pink-600 text-sm"><AppIcon name='Star' size={18} />Premium Products</div>
                </div>
                <a href="/salon" className="w-full bg-pink-400 hover:bg-pink-500 text-white font-semibold py-3 rounded-[6px] text-lg shadow transition-all duration-200 flex items-center justify-center gap-2">Explore Services <span aria-hidden>→</span></a>
              </div>
              {/* Agro Card */}
              <div className="bg-white dark:bg-black/40 rounded-2xl shadow-lg border border-green-100 dark:border-green-400 p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-1">
                <div className="flex flex-col items-center mb-4">
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-full p-4 mb-2"><AppIcon name='Leaf' size={40} className="text-green-500" /></div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Arias Agro</h3>
                  <div className="text-green-600 font-semibold text-lg mt-1 mb-2">Fresh from Farm to Table</div>
                </div>
                <p className="text-gray-700 dark:text-gray-200 mb-6">Sustainable poultry farming delivering the freshest, highest quality eggs. Our free-range chickens are raised with care for premium nutrition.</p>
                <div className="grid grid-cols-2 gap-2 mb-6 w-full">
                  <div className="flex items-center gap-2 text-green-700 text-sm"><AppIcon name='Feather' size={18} />Free-Range Chickens</div>
                  <div className="flex items-center gap-2 text-green-700 text-sm"><AppIcon name='Calendar' size={18} />Fresh Daily</div>
                  <div className="flex items-center gap-2 text-green-700 text-sm"><AppIcon name='Leaf' size={18} />Sustainable Farming</div>
                  <div className="flex items-center gap-2 text-green-700 text-sm"><AppIcon name='Star' size={18} />Premium Quality</div>
                </div>
                <a href="/farm" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-[6px] text-lg shadow transition-all duration-200 flex items-center justify-center gap-2">Explore Products <span aria-hidden>→</span></a>
              </div>
            </div>
          </section>

          {/* About New Arias Section */}
          <section className="max-w-6xl mx-auto py-16 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              {/* Left Column: About, Short Intro, Why Choose, Join */}
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 dark:text-white flex items-center gap-2"><span>About New Arias</span></h2>
                <div className="flex items-center gap-2 mb-2 text-2xl"><span className="font-semibold text-primary">The Brand Behind Both – New Arias</span></div>
                <p className="text-gray-700 dark:text-gray-200 mb-4">At New Arias, we celebrate the vibrant spirit of Nigeria by intertwining beauty and wellness with the bounty of our land. As a proudly Nigerian lifestyle brand, we believe that true well-being springs from nurturing both your body and soul. This conviction inspires everything we do — from our luxurious Salon & Spa division that pampers your skin and senses, to Arias Agro, a dedicated arm that cultivates wholesome, nutritious farm produce to fuel your health and vitality.</p>
                <p className="text-gray-700 dark:text-gray-200 mb-4">Our offerings go beyond services and products; they are a commitment to elegance, authenticity, and excellence that transform everyday routines into cherished rituals. We serve not only style but a lifestyle — one where beauty meets nourishment and wellness is a vibrant journey shared with every family.</p>
                <h4 className="text-lg font-semibold text-secondary mb-1 mt-6">Short Introduction</h4>
                <p className="text-gray-700 dark:text-gray-200 mb-4">New Arias stands at the crossroads of beauty and agriculture, redefining lifestyle in Nigeria. With a deep sense of pride in our roots, we dedicate ourselves to enhancing your daily life with premium beauty services designed to rejuvenate and inspire, alongside fresh, ethically farmed produce that nurtures your body from within.</p>
                <p className="text-gray-700 dark:text-gray-200 mb-4">Wellness, to us, is holistic and harmonious — as much about glowing skin as it is about nourishing meals. We invite you to experience the seamless synergy of these worlds through New Arias.</p>
                <h4 className="text-lg font-semibold text-secondary mb-1 mt-6">Why Choose New Arias?</h4>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 mb-4 space-y-1">
                  <li><span className="font-semibold">Authenticity You Can Trust:</span> Rooted deeply in Nigerian soil and culture.</li>
                  <li><span className="font-semibold">Quality Without Compromise:</span> Premium products and services crafted with passion and precision.</li>
                  <li><span className="font-semibold">Holistic Wellness:</span> Beauty and nutrition combined to support your entire well-being.</li>
                  <li><span className="font-semibold">Sustainability & Ethics:</span> Committed to farming that protects our land and uplifts our farmers.</li>
                </ul>
                <h4 className="text-lg font-semibold text-secondary mb-1 mt-6">Join the New Arias Family</h4>
                <p className="text-gray-700 dark:text-gray-200 mb-2">Step into a lifestyle where beauty meets nourishment and every day holds the promise of wellness. Whether indulging in a rejuvenating facial, enjoying expertly crafted beauty treatments, or savoring farm-fresh ingredients in your meals, New Arias is here to support your journey — beautifully and naturally.</p>
                <p className="text-gray-700 dark:text-gray-200 font-semibold">New Arias. Elegance in Every Essence. Wellness in Every Grain.</p>
              </div>
              {/* Right Column: Vision and Mission Cards */}
              <div className="flex flex-col gap-8">
                {/* Vision Card */}
                <div className="bg-white dark:bg-black/40 rounded-2xl shadow-lg border border-pink-100 dark:border-pink-400 p-6">
                  <div className="flex items-center gap-2 mb-2 text-2xl"><span>🌈</span><span className="font-semibold text-pink-500">Our Vision</span></div>
                  <p className="text-gray-700 dark:text-gray-200 mb-2">To become a beacon of excellence and trust in households nationwide, New Arias strives to lead the way in merging beauty and agriculture into a singular lifestyle brand. We envision a future where families across Nigeria recognize us not just as a service or product provider but as an essential part of their well-being journey—enriching lives daily through:</p>
                  <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200 space-y-1">
                    <li>Timeless beauty care that uplifts and empowers</li>
                    <li>Farm-fresh produce that supports health and food security</li>
                    <li>Sustainable and ethical practices that honor our environment and communities</li>
                  </ul>
                </div>
                {/* Mission Card */}
                <div className="bg-white dark:bg-black/40 rounded-2xl shadow-lg border border-green-100 dark:border-green-400 p-6">
                  <div className="flex items-center gap-2 mb-2 text-2xl"><span>🚀</span><span className="font-semibold text-green-600">Our Mission</span></div>
                  <p className="text-gray-700 dark:text-gray-200 mb-2">At New Arias, our mission is twofold yet unified by a passion for enhancing life quality: To deliver stylish, personalized grooming and spa experiences that refresh your look and spirit, making every client feel confident, cared for, and radiant.</p>
                  <p className="text-gray-700 dark:text-gray-200 mb-2">To promote food security and holistic health through ethical farming practices, ensuring that nutritious, chemical-free produce reaches your table — because health begins with what you eat. We pledge to cultivate trust and community by embracing Nigeria’s rich heritage and bringing you the finest in beauty and nutrition.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Unified CTA Strip */}
          <section className="w-full py-12 flex flex-col items-center justify-center bg-gradient-to-r from-primary to-secondary text-white mt-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Join the Lifestyle – Beauty + Nutrition in Harmony</h2>
            <a href="/contact" className="bg-white text-primary font-bold px-8 py-4 rounded-[6px] shadow-lg hover:bg-primary hover:text-white transition-colors text-lg mt-2">Get Started</a>
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Homepage;