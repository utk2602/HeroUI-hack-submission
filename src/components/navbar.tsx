import React from 'react';
import { Navbar as HeroNavbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@heroui/react";
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { ThemeSwitcher } from './theme-switcher';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Features", href: "#features" },
    { name: "About", href: "#about" },
    { name: "Integrations", href: "#integrations" },
    { name: "Pricing", href: "#pricing" },
    { name: "Customers", href: "#customers" },
    { name: "Changelog", href: "#changelog" },
  ];

  return (
    <HeroNavbar 
      isMenuOpen={isMenuOpen} 
      onMenuOpenChange={setIsMenuOpen}
      className="fixed top-0 w-full z-50 bg-background shadow-sm" // Always opaque
      height="3.5rem"
      maxWidth="xl"
      className="px-4 mx-auto rounded-full my-2 max-w-7xl"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <Icon icon="lucide:sparkles" className="text-background" width={16} height={16} />
            </div>
            <p className="font-bold text-lg">Stellar</p>
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item.name}-${index}`}>
            <Link 
              href={item.href}
              className="text-foreground/80 hover:text-foreground transition-colors text-sm"
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      
      <NavbarContent justify="end" className="gap-3">
        <NavbarItem className="hidden sm:flex theme-toggle-area">
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <Button 
            as={Link} 
            color="default" 
            href="#" 
            variant="light"
            className="font-medium text-sm"
            size="sm"
          >
            Log in
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button 
            as={Link} 
            color="primary" 
            href="#" 
            variant="solid"
            className="font-medium text-sm"
            size="sm"
          >
            Sign up
          </Button>
        </NavbarItem>
      </NavbarContent>
      
      <NavbarMenu className="bg-background/95 backdrop-blur-md pt-6">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              href={item.href}
              className="w-full text-foreground/80 hover:text-foreground"
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Link
            href="#"
            className="w-full text-foreground/80 hover:text-foreground"
            size="lg"
          >
            Log in
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <ThemeSwitcher />
        </NavbarMenuItem>
      </NavbarMenu>
    </HeroNavbar>
  );
};