import React from 'react';
import { Link } from "@heroui/react";
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export const Footer = () => {
  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "Integrations", href: "#integrations" },
        { name: "Changelog", href: "#changelog" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#about" },
        { name: "Customers", href: "#customers" },
        { name: "Team", href: "#" },
        { name: "Careers", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Support", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { icon: "lucide:twitter", href: "#" },
    { icon: "lucide:facebook", href: "#" },
    { icon: "lucide:linkedin", href: "#" },
    { icon: "lucide:github", href: "#" }
  ];

  return (
    <footer className="bg-content1 border-t border-content2 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-8">
          {/* Logo and description */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Icon icon="lucide:sparkles" className="text-background" width={16} height={16} />
              </div>
              <span className="font-bold text-lg">Stellar</span>
            </div>
            <p className="text-foreground/70 mb-4 text-sm">
              Powerful analytics platform that helps businesses make data-driven decisions and drive growth.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <Link key={index} href={social.href} className="text-foreground/70 hover:text-primary transition-colors">
                  <Icon icon={social.icon} className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
          
          {/* Footer links */}
          {footerLinks.map((column, columnIndex) => (
            <div key={columnIndex}>
              <h4 className="font-semibold mb-4 text-sm">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href} 
                      className="text-foreground/70 hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom bar */}
        <div className="pt-6 mt-6 border-t border-content2 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-xs mb-4 md:mb-0">
            © {new Date().getFullYear()} Stellar. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-foreground/60 hover:text-primary text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-foreground/60 hover:text-primary text-xs transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};