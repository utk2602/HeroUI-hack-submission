import React from 'react';
import { Button, Card, CardBody, Chip } from "@heroui/react";
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export const Pricing = () => {
  const [billingCycle, setBillingCycle] = React.useState<'monthly' | 'annual'>('monthly');
  
  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for individuals and small projects",
      monthlyPrice: 29,
      annualPrice: 290,
      features: [
        "Up to 5 projects",
        "Basic analytics",
        "24-hour data retention",
        "Email support",
        "1 team member"
      ],
      popular: false
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses and teams",
      monthlyPrice: 79,
      annualPrice: 790,
      features: [
        "Unlimited projects",
        "Advanced analytics",
        "30-day data retention",
        "Priority support",
        "5 team members",
        "Custom dashboards",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large organizations with advanced needs",
      monthlyPrice: 199,
      annualPrice: 1990,
      features: [
        "Unlimited everything",
        "Enterprise analytics",
        "Unlimited data retention",
        "24/7 dedicated support",
        "Unlimited team members",
        "Custom integrations",
        "Advanced security",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 md:py-28 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section header with reduced motion */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold mb-3">
            PRICING
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Simple, transparent pricing
          </h2>
          <p className="text-foreground/70 mb-10">
            Choose the plan that's right for you and start leveraging the power of data analytics today.
            All plans come with a 14-day free trial, no credit card required.
          </p>
          
          {/* Billing toggle with reduced motion */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <span className={`font-medium ${billingCycle === 'monthly' ? 'text-foreground' : 'text-foreground/60'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                billingCycle === 'annual' ? 'bg-primary' : 'bg-content3'
              }`}
            >
              <span
                className={`absolute top-1 w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300 ${
                  billingCycle === 'annual' ? 'left-9' : 'left-1'
                }`}
              ></span>
            </button>
            <div className="flex items-center gap-2">
              <span className={`font-medium ${billingCycle === 'annual' ? 'text-foreground' : 'text-foreground/60'}`}>
                Annual
              </span>
              <Chip color="primary" size="sm" variant="flat">Save 20%</Chip>
            </div>
          </div>
        </div>
        
        {/* Pricing cards with tick marks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={`pricing-card h-full card-hover-effect ${plan.popular ? 'popular' : ''}`}>
              <CardBody className="flex flex-col h-full">
                {plan.popular && (
                  <Chip color="primary" className="self-start mb-4">
                    Most Popular
                  </Chip>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-foreground/70 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                  </span>
                  <span className="text-foreground/70">
                    /{billingCycle === 'monthly' ? 'month' : 'year'}
                  </span>
                </div>
                <Button 
                  color={plan.popular ? "primary" : "default"} 
                  variant={plan.popular ? "solid" : "bordered"}
                  className="mb-8 font-medium"
                  size="lg"
                  fullWidth
                >
                  Get Started
                </Button>
                <div className="space-y-3 mt-auto">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon icon="lucide:check" className="text-primary w-3 h-3" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
        
        {/* Enterprise CTA */}
        <div className="mt-16 text-center">
          <p className="text-foreground/70 mb-4">
            Need a custom plan for your enterprise? Contact our sales team for a tailored solution.
          </p>
          <Button 
            color="default" 
            variant="flat"
            className="font-medium"
            endContent={<Icon icon="lucide:arrow-right" />}
          >
            Contact Sales
          </Button>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-96 gradient-bg opacity-30"></div>
    </section>
  );
};