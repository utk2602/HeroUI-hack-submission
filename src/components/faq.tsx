import React from 'react';
import { Accordion, AccordionItem } from "@heroui/react";
import { motion } from 'framer-motion';

export const Faq = () => {
  const faqItems = [
    {
      question: "How does the 14-day free trial work?",
      answer: "Our 14-day free trial gives you full access to all features of the plan you choose. No credit card is required to start. At the end of the trial, you can choose to subscribe or your account will automatically downgrade to our free plan with limited features."
    },
    {
      question: "Can I change plans later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. When upgrading, the new features will be immediately available. When downgrading, the changes will take effect at the start of your next billing cycle."
    },
    {
      question: "Is there a limit to how much data I can analyze?",
      answer: "Each plan has different data limits. The Starter plan allows up to 100,000 data points per month, Professional allows up to 1 million, and Enterprise has unlimited data points. If you need more, our sales team can create a custom plan for you."
    },
    {
      question: "Do you offer discounts for nonprofits or educational institutions?",
      answer: "Yes, we offer special pricing for nonprofits, educational institutions, and startups. Please contact our sales team with verification of your organization's status to learn more about these discounts."
    },
    {
      question: "How secure is my data?",
      answer: "We take data security very seriously. All data is encrypted both in transit and at rest. We use industry-standard security practices, regular security audits, and comply with GDPR, CCPA, and other privacy regulations. Our platform is hosted on secure cloud infrastructure with 99.9% uptime."
    },
    {
      question: "Can I export my data if I decide to cancel?",
      answer: "Absolutely. You maintain ownership of your data at all times. If you decide to cancel, you can export all your data in various formats (CSV, JSON, Excel) before closing your account. We also offer data migration services for enterprise customers."
    }
  ];

  return (
    <section id="faq" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold mb-3">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Frequently asked questions
          </h2>
          <p className="text-foreground/70">
            Find answers to common questions about Stellar and how it can help your business.
            If you don't see your question here, feel free to contact our support team.
          </p>
        </div>
        
        {/* FAQ accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion variant="bordered" className="bg-content1 rounded-xl">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                aria-label={item.question}
                title={item.question}
                className="text-foreground"
              >
                <p className="text-foreground/70 pb-2">{item.answer}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        {/* Additional help */}
        <div className="text-center mt-12">
          <p className="text-foreground/70">
            Still have questions? Contact our support team at{" "}
            <a href="mailto:support@stellar.com" className="text-primary hover:underline">
              support@stellar.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};