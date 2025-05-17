import React from 'react';
import { Card, CardBody, Chip } from '@heroui/react';
import { Icon } from '@iconify/react';
import { useParallax } from '../hooks/use-parallax';

export const Changelog = () => {
  const { ref } = useParallax();
  
  const changes = [
    {
      version: "2.4.0",
      date: "June 15, 2023",
      type: "Feature",
      title: "Advanced Filtering",
      description: "Added powerful filtering capabilities to all dashboards with saved filter presets.",
      icon: "lucide:filter"
    },
    {
      version: "2.3.2",
      date: "May 28, 2023",
      type: "Improvement",
      title: "Performance Optimization",
      description: "Improved dashboard loading speed by 40% for large datasets.",
      icon: "lucide:zap"
    },
    {
      version: "2.3.0",
      date: "May 10, 2023",
      type: "Feature",
      title: "Custom Dashboards",
      description: "Users can now create and save custom dashboard layouts with drag-and-drop widgets.",
      icon: "lucide:layout-dashboard"
    },
    {
      version: "2.2.5",
      date: "April 22, 2023",
      type: "Fix",
      title: "Data Export Bug",
      description: "Fixed an issue with CSV exports truncating large datasets.",
      icon: "lucide:bug"
    }
  ];

  const getChipColor = (type) => {
    switch (type) {
      case "Feature": return "primary";
      case "Improvement": return "success";
      case "Fix": return "warning";
      default: return "default";
    }
  };

  return (
    <section 
      id="changelog" 
      className="py-20 md:py-28 relative overflow-hidden parallax-container"
      ref={ref}
    >
      <div 
        className="parallax-bg"
        style={{
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0) 70%)'
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold mb-3">
            CHANGELOG
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Always improving
          </h2>
          <p className="text-foreground/70">
            We're constantly updating and improving Stellar with new features, performance improvements, and bug fixes.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-6 w-px bg-content3"></div>
            
            <div className="space-y-8">
              {changes.map((change, index) => (
                <div
                  key={index}
                  className="relative pl-16 transform transition-all duration-700"
                  style={{
                    opacity: 1,
                    transform: `translateY(${index % 2 === 0 ? '0' : '0'})`,
                  }}
                >
                  <div className="absolute left-0 w-12 h-12 rounded-full bg-content1 border-4 border-background flex items-center justify-center">
                    <Icon icon={change.icon} className="text-primary w-5 h-5" />
                  </div>
                  
                  <Card className="card-hover-effect">
                    <CardBody className="p-6">
                      <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                        <div>
                          <h3 className="text-lg font-semibold">{change.title}</h3>
                          <p className="text-sm text-foreground/60">Version {change.version} • {change.date}</p>
                        </div>
                        <Chip color={getChipColor(change.type)} size="sm" variant="flat">
                          {change.type}
                        </Chip>
                      </div>
                      <p className="text-foreground/80">{change.description}</p>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="#" className="text-primary hover:underline inline-flex items-center gap-1">
              View full changelog <Icon icon="lucide:arrow-right" className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};