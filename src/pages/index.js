import React from 'react';
import Button from '../components/Button';
import Clients from '../components/Clients';
import Contact from '../components/Contact';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import Services from '../components/Services';
import customerData from '../data/customer-data';
import Hero from './Hero';

const Index = () => (
  <Layout>
    <Hero />
    {/* Services Section */}
    <section id="testimonials" className="py-10 px-10 lg:py-40">
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
    {/*  */}
    <section className="container mx-auto my-10 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Ready to grow your business?</h3>
      <p className="mt-8 px-20 text-4xl font-light">
        We make future products and services, and help our clients adapt and remain ahead in an increasingly complex world.
      </p>
      <p className="mt-8">
        <Button size="xl">Get Started</Button>
      </p>
    </section>
    {/* Clients */}
    <Contact />
    <Clients />
  </Layout>
);

export default Index;
