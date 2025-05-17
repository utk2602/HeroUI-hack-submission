import React from 'react';
import { Card, CardBody } from '@heroui/react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export const BeamSection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <Card className="beam-hover overflow-visible card-hover-effect">
              <CardBody className="p-0">
                <img 
                  src="https://img.heroui.chat/image/dashboard?w=600&h=500&u=4" 
                  alt="Analytics Dashboard" 
                  className="w-full h-full object-cover rounded-lg hover-color-effect"
                />
              </CardBody>
            </Card>
          </div>
          
          <div className="order-1 lg:order-2">
            <p className="text-primary font-semibold mb-3">POWERFUL INSIGHTS</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform raw data into actionable insights</h2>
            <p className="text-foreground/70 mb-8">
              Our advanced analytics platform helps you understand your data at a deeper level. 
              Identify trends, spot opportunities, and make data-driven decisions with confidence.
            </p>
            
            <div className="space-y-4">
              {[
                { icon: "lucide:trending-up", text: "Real-time performance tracking" },
                { icon: "lucide:layers", text: "Multi-dimensional data analysis" },
                { icon: "lucide:zap", text: "Instant insights with AI-powered recommendations" },
                { icon: "lucide:share-2", text: "Seamless sharing across your organization" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                    <Icon icon={item.icon} className="text-primary w-4 h-4" />
                  </div>
                  <span className="text-foreground/90">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};