import React from 'react';
import { Card, CardBody } from '@heroui/react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary font-semibold mb-3">ABOUT US</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our mission is to make data accessible</h2>
            <p className="text-foreground/70 mb-8">
              Founded in 2018, Stellar has been on a mission to democratize data analytics. 
              We believe that every business, regardless of size, should have access to powerful 
              analytics tools that drive growth and innovation.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon icon="lucide:target" className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                  <p className="text-foreground/70">
                    To create a world where data-driven decisions are accessible to everyone, 
                    empowering businesses of all sizes to thrive in the digital economy.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon icon="lucide:heart" className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                  <p className="text-foreground/70">
                    We're committed to transparency, innovation, and customer success. 
                    Our team works tirelessly to ensure that our platform evolves with your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <Card className="row-span-2 h-full card-hover-effect">
                <CardBody className="p-0">
                  <img 
                    src="https://img.heroui.chat/image/places?w=400&h=600&u=1" 
                    alt="Office" 
                    className="w-full h-full object-cover rounded-lg hover-color-effect"
                  />
                </CardBody>
              </Card>
              
              <Card className="h-full card-hover-effect">
                <CardBody className="p-0">
                  <img 
                    src="https://img.heroui.chat/image/places?w=300&h=300&u=2" 
                    alt="Team" 
                    className="w-full h-full object-cover rounded-lg hover-color-effect"
                  />
                </CardBody>
              </Card>
              
              <Card className="h-full card-hover-effect">
                <CardBody className="p-0">
                  <img 
                    src="https://img.heroui.chat/image/places?w=300&h=300&u=3" 
                    alt="Workspace" 
                    className="w-full h-full object-cover rounded-lg hover-color-effect"
                  />
                </CardBody>
              </Card>
            </div>
            
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-primary/10 rounded-full blur-xl -z-10"></div>
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-primary/10 rounded-full blur-xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};