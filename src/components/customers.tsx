import React from 'react';
import { Card, CardBody } from '@heroui/react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export const Customers = () => {
  const customers = [
    {
      name: "Acme Inc.",
      logo: "logos:airbnb",
      quote: "Stellar helped us increase our conversion rate by 35% in just three months.",
      industry: "E-commerce"
    },
    {
      name: "TechCorp",
      logo: "logos:dropbox",
      quote: "We've been able to make data-driven decisions faster than ever before.",
      industry: "SaaS"
    },
    {
      name: "Global Media",
      logo: "logos:asana",
      quote: "The insights we've gained have transformed our content strategy completely.",
      industry: "Media"
    },
    {
      name: "HealthPlus",
      logo: "logos:slack-icon",
      quote: "Patient satisfaction has improved by 28% since implementing Stellar.",
      industry: "Healthcare"
    },
    {
      name: "EduLearn",
      logo: "logos:spotify",
      quote: "Our student engagement metrics have never been more actionable.",
      industry: "Education"
    },
    {
      name: "FinTrust",
      logo: "logos:mailchimp",
      quote: "Security and compliance were our top concerns. Stellar delivered on both.",
      industry: "Finance"
    }
  ];

  return (
    <section id="customers" className="py-20 md:py-28 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold mb-3">
            CUSTOMERS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Trusted by innovative companies
          </h2>
          <p className="text-foreground/70">
            From startups to enterprise organizations, companies of all sizes use Stellar
            to make better decisions and drive growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {customers.map((customer, index) => (
            <Card key={index} className="h-full card-hover-effect hover:border-primary transition-all duration-300">
              <CardBody className="flex flex-col gap-4">
                <div className="flex justify-between items-center mb-2">
                  <Icon icon={customer.logo} className="w-auto h-8 grayscale" />
                  <span className="text-xs text-foreground/50 px-2 py-1 bg-content2 rounded-full">
                    {customer.industry}
                  </span>
                </div>
                <p className="text-foreground/90 italic">"{customer.quote}"</p>
                <div className="mt-auto pt-4 border-t border-content2">
                  <p className="font-medium">{customer.name}</p>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-foreground/70">
            Join over 10,000+ companies already using Stellar
          </p>
        </div>
      </div>
    </section>
  );
};