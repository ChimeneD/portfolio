"use client";

import Layout from "@/components/layout";
import Header from "@/components/pages/header";
import About from "@/components/pages/about";
import Skills from "@/components/pages/skills";
import Portfolio from "@/components/pages/portfolio";
import Contact from "@/components/pages/contacts";
import Footer from "@/components/footer";

export default function Home() {
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
}
