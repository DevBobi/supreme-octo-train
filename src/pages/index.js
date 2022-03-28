import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Clients from '../components/layout/Clients';
import Layout from '../components/layout/Layout';
import Services from '../components/Services';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';
import Hero from './Hero';

const Index = () => (
  <Layout>
    <Hero />
    {/* Services Section */}
    <section id="testimonials" className="py-20 px-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">Our Services</LabelText>
        <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {/* Grid system  */}
          {customerData.map(service => (
            <div key={service.title} className="flex-1 px-3">
              <Services service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* Clients */}
    <Clients />
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Ready to grow your business?</h3>
      <p className="mt-8 text-xl font-light">
        Quis lectus nulla at volutpat diam ut. Enim lobortis scelerisque fermentum dui faucibus in.
      </p>
      <p className="mt-8">
        <Button size="xl">Get Started Now</Button>
      </p>
    </section>
  </Layout>
);

export default Index;
