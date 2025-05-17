import React from 'react';
import { Button, Link } from "@heroui/react";
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { TrustedBy } from './trusted-by';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-36 md:pb-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-content2 text-foreground text-sm mb-6">
          <span className="flex h-2 w-2 rounded-full bg-primary"></span>
          <span>New features available</span>
          <Icon icon="lucide:arrow-right" className="h-4 w-4" />
        </span>
        
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
          Empower your business with <span className="gradient-text">Stellar</span> analytics
        </h1>
        
        {/* Subheading */}
        <p className="text-foreground/70 text-lg md:text-xl mb-8 max-w-3xl">
          Unlock the full potential of your data with our powerful analytics platform. 
          Get actionable insights and make data-driven decisions faster than ever before.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Button 
            as={Link}
            href="#"
            color="primary"
            size="lg"
            className="font-medium px-8"
            startContent={<Icon icon="lucide:zap" />}
          >
            Get Started
          </Button>
          <Button 
            as={Link}
            href="#"
            variant="bordered"
            size="lg"
            className="font-medium px-8"
            startContent={<Icon icon="lucide:book" />}
          >
            Documentation
          </Button>
        </div>
        
        {/* Dashboard Preview */}
        <div className="relative w-full">
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 h-16 bottom-0 top-auto"></div>
          <img 
            src="https://img.heroui.chat/image/dashboard?w=1200&h=800&u=1" 
            alt="Stellar Dashboard" 
            className="w-full h-auto rounded-xl border border-content2 shadow-xl hover-color-effect"
          />
        </div>
        
        {/* Trusted By Section */}
        <TrustedBy />
      </div>
    </section>
  );
};