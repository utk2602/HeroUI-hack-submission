import React from 'react';
import { Card, CardBody } from "@heroui/react";
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export const Features = () => {
  const features = [
    {
      icon: "lucide:bar-chart-2",
      title: "Advanced Analytics",
      description: "Get deep insights into your data with our powerful analytics tools. Visualize trends and make informed decisions."
    },
    {
      icon: "lucide:zap",
      title: "Real-time Data",
      description: "Access your data in real-time. No more waiting for reports to be generated or data to be processed."
    },
    {
      icon: "lucide:shield",
      title: "Enterprise Security",
      description: "Your data is secure with us. We use industry-leading security measures to protect your information."
    },
    {
      icon: "lucide:users",
      title: "Team Collaboration",
      description: "Work together seamlessly with your team. Share insights and collaborate on projects in real-time."
    },
    {
      icon: "lucide:smartphone",
      title: "Mobile Friendly",
      description: "Access your data on the go. Our platform is fully responsive and works on all devices."
    },
    {
      icon: "lucide:settings",
      title: "Customizable",
      description: "Tailor the platform to your needs. Create custom dashboards and reports that matter to you."
    }
  ];

  return (
    <section id="features" className="py-20 md:py-28 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section header with reduced motion */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold mb-3">
            FEATURES
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Everything you need to analyze and grow
          </h2>
          <p className="text-foreground/70">
            Our platform provides all the tools you need to understand your data, identify trends, 
            and make data-driven decisions that drive growth for your business.
          </p>
        </div>
        
        {/* Features grid with card hover effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="feature-card h-full card-hover-effect">
              <CardBody className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center mb-2">
                  <Icon icon={feature.icon} className="text-primary w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>
        
        {/* Feature highlight */}
        <div className="mt-20 bg-content1 p-6 md:p-10 rounded-2xl border border-content2 card-hover-effect">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-primary font-semibold mb-3">DASHBOARD</p>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Powerful analytics at your fingertips</h3>
              <p className="text-foreground/70 mb-8">
                Our intuitive dashboard gives you a comprehensive overview of your business performance.
                Track key metrics, identify trends, and make data-driven decisions with ease.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: "lucide:check-circle", text: "Interactive data visualizations" },
                  { icon: "lucide:check-circle", text: "Customizable dashboard widgets" },
                  { icon: "lucide:check-circle", text: "Export reports in multiple formats" },
                  { icon: "lucide:check-circle", text: "Schedule automated reports" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Icon icon={item.icon} className="text-primary w-5 h-5" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://img.heroui.chat/image/dashboard?w=600&h=400&u=2" 
                alt="Dashboard" 
                className="rounded-xl border border-content2 shadow-lg w-full"
              />
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-500/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-full h-96 gradient-bg opacity-30"></div>
    </section>
  );
};