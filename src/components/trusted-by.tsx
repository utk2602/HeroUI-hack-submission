import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export const TrustedBy = () => {
  const companies = [
    { name: "Google", icon: "logos:google" },
    { name: "Microsoft", icon: "logos:microsoft" },
    { name: "Amazon", icon: "logos:amazon" },
    { name: "Slack", icon: "logos:slack" },
    { name: "Spotify", icon: "logos:spotify" },
    { name: "Airbnb", icon: "logos:airbnb" },
    { name: "Netflix", icon: "logos:netflix" },
    { name: "Dropbox", icon: "logos:dropbox" },
    { name: "Asana", icon: "logos:asana" },
    { name: "Mailchimp", icon: "logos:mailchimp" }
  ];

  return (
    <div className="w-full mt-12">
      <p className="text-center text-sm text-foreground/50 mb-6">TRUSTED BY LEADING COMPANIES</p>
      
      <div className="relative overflow-hidden w-full py-4">
        <div className="flex animate-marquee whitespace-nowrap">
          {companies.concat(companies).map((company, index) => (
            <div 
              key={`${company.name}-${index}`} 
              className="flex items-center mx-8 opacity-70 hover:opacity-100 transition-opacity hover-color-effect"
            >
              <Icon icon={company.icon} className="w-auto h-6 md:h-8" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};