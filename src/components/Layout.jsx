import React from 'react';
import Header from './ui/Header';
import Footer from '../pages/homepage/components/Footer';
import HeroBanner from '../pages/homepage/components/HeroBanner';

const Layout = ({ children }) => (
  <>
    <Header />
    <HeroBanner />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout; 