import React from 'react';
import { Card, CardBody } from '@heroui/react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export const Integrations = () => {
  const integrations = [
    { name: "Slack", icon: "logos:slack-icon", description: "Send reports and alerts directly to your Slack channels" },
    { name: "Google Analytics", icon: "logos:google-analytics", description: "Import your GA data for deeper insights" },
    { name: "Salesforce", icon: "logos:salesforce", description: "Connect your CRM data for complete customer insights" },
    { name: "HubSpot", icon: "logos:hubspot", description: "Integrate marketing automation with analytics" },
    { name: "Shopify", icon: "logos:shopify", description: "Track e-commerce performance and customer behavior" },
    { name: "GitHub", icon: "logos:github-icon", description: "Monitor development metrics and team productivity" },
    { name: "Stripe", icon: "logos:stripe", description: "Analyze payment data and revenue streams" },
    { name: "Zendesk", icon: "logos:zendesk", description: "Connect support metrics to business performance" }
  ];

  return (
    <section id="integrations" className="py-20 md:py-28 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold mb-3">
            INTEGRATIONS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Connect with your favorite tools
          </h2>
          <p className="text-foreground/70">
            Stellar integrates seamlessly with over 100+ tools and platforms you already use,
            bringing all your data together in one place.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrations.map((integration, index) => (
            <Card key={index} className="h-full card-hover-effect hover:border-primary transition-all duration-300">
              <CardBody className="flex flex-col gap-4">
                <div className="w-12 h-12 flex items-center justify-center hover-color-effect">
                  <Icon icon={integration.icon} className="w-10 h-10" />
                </div>
                <h3 className="text-lg font-semibold">{integration.name}</h3>
                <p className="text-foreground/70 text-sm">{integration.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-foreground/70">
            Don't see your tool? <a href="#" className="text-primary hover:underline">Request an integration</a>
          </p>
        </div>
      </div>
    </section>
  );
};