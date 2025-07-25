import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const HeroBanner = () => (
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
);

export default HeroBanner; 