import React from 'react';
import { Button } from "@heroui/react";
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export const Cta = () => {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="bg-content1 rounded-2xl border border-content2 p-8 md:p-12 text-center max-w-4xl mx-auto relative z-10">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-2xl">
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Ready to transform your business with data?
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto mb-8">
              Join thousands of businesses that use Stellar to make better decisions and drive growth.
              Start your free 14-day trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                color="primary"
                size="lg"
                className="font-medium px-8"
                startContent={<Icon icon="lucide:zap" />}
              >
                Get Started Free
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};