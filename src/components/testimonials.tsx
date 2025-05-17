import React from 'react';
import { Card, CardBody, Avatar } from "@heroui/react";
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export const Testimonials = () => {
  const testimonials = [
    {
      content: "Stellar has completely transformed how we analyze our data. The insights we've gained have directly contributed to a 40% increase in our conversion rates.",
      author: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechGrowth",
      avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=1",
      image: "https://img.heroui.chat/image/places?w=400&h=300&u=10"
    },
    {
      content: "The real-time analytics have been a game-changer for our team. We can now make informed decisions quickly without waiting for reports to be generated.",
      author: "Michael Chen",
      position: "Product Manager",
      company: "InnovateCorp",
      avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=2",
      image: "https://img.heroui.chat/image/places?w=400&h=300&u=11"
    },
    {
      content: "I was skeptical at first, but Stellar has exceeded all my expectations. The platform is intuitive, powerful, and has become an essential tool for our business.",
      author: "Emily Rodriguez",
      position: "CEO",
      company: "GrowthLabs",
      avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=3",
      image: "https://img.heroui.chat/image/places?w=400&h=300&u=12"
    }
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section header with reduced motion */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold mb-3">
            TESTIMONIALS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Trusted by businesses worldwide
          </h2>
          <p className="text-foreground/70">
            Don't just take our word for it. See what our customers have to say about how Stellar
            has helped them grow their businesses and make better decisions.
          </p>
        </div>
        
        {/* Testimonial grid with hover effect */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-hover h-full card-hover-effect">
              <Card className="h-full">
                <CardBody className="flex flex-col gap-4">
                  <div className="mb-2">
                    <Icon icon="lucide:quote" className="text-primary w-8 h-8 opacity-50" />
                  </div>
                  <p className="text-foreground/90 mb-6">{testimonial.content}</p>
                  
                  <div className="relative w-full h-40 mb-4 overflow-hidden rounded-lg">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author}
                      className="absolute inset-0 w-full h-full object-cover testimonial-image hover-color-effect"
                    />
                    <img 
                      src={testimonial.image} 
                      alt={`${testimonial.company} office`}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-300 hover-color-effect"
                    />
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-sm text-foreground/70">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
        
        {/* Logos */}
        <div className="mt-20">
          <p className="text-center text-foreground/50 mb-8">TRUSTED BY LEADING COMPANIES</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              "logos:google", "logos:microsoft", "logos:amazon", "logos:netflix", 
              "logos:slack", "logos:spotify"
            ].map((logo, index) => (
              <div key={index} className="opacity-60 hover:opacity-100 transition-opacity">
                <Icon icon={logo} className="w-auto h-8 md:h-10" />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute bottom-0 right-0 w-full h-96 gradient-bg opacity-30"></div>
    </section>
  );
};