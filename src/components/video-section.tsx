import React from 'react';
import { Card } from '@heroui/react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export const VideoSection = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative rounded-2xl overflow-hidden max-w-5xl mx-auto card-hover-effect">
          <Card className="w-full bg-content1 p-0 overflow-hidden">
            <div className="relative aspect-video w-full overflow-hidden">
              {!isPlaying ? (
                <>
                  <img 
                    src="https://img.heroui.chat/image/dashboard?w=1200&h=675&u=3" 
                    alt="Video thumbnail" 
                    className="w-full h-full object-cover hover-color-effect"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <button 
                      onClick={() => setIsPlaying(true)}
                      className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center transition-transform hover:scale-110"
                    >
                      <Icon icon="lucide:play" className="text-background w-8 h-8 ml-1" />
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                    <h3 className="text-xl font-semibold mb-2">See Stellar in action</h3>
                    <p className="text-sm text-white/80">Watch how our platform can transform your data analytics</p>
                  </div>
                </>
              ) : (
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Stellar Demo Video"
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};