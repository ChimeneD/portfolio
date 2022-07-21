/* eslint-disable @next/next/no-img-element */
import React from 'react';
import dynamic from 'next/dynamic';
import Layout from '@components/layout';
import Header from '@components/pages/header';
import About from '@components/pages/about';
import Skills from '@components/pages/skills';
import Portfolio from '@components/pages/portfolio';
import Contact from '@components/pages/contacts';
import Footer from '@components/footer';

const Home = () => {
  return (
    <Layout>
      <Header />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </Layout>
  );
};

export default dynamic(() => Promise.resolve(Home), { ssr: false });
