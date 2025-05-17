import React from 'react';
import { Card, CardBody, Avatar, Tabs, Tab } from '@heroui/react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export const FounderSection = () => {
  const founders = [
    {
      name: "Alex Johnson",
      position: "CEO & Co-founder",
      avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=10",
      quote: "Data should tell a story that everyone can understand.",
      bio: "Alex has over 15 years of experience in data analytics and previously founded two successful startups. He holds an MBA from Stanford and is passionate about democratizing data access.",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Sophia Chen",
      position: "CTO & Co-founder",
      avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=11",
      quote: "The best technology is invisible. It just works.",
      bio: "Sophia is a former Google engineer with expertise in machine learning and AI. She has a Ph.D. in Computer Science from MIT and has published numerous papers on data visualization.",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Marcus Williams",
      position: "Chief Design Officer",
      avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=12",
      quote: "Design is not just how it looks, but how it works.",
      bio: "Marcus previously led design teams at Apple and Airbnb. He believes in creating intuitive user experiences that make complex data accessible to everyone.",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Olivia Rodriguez",
      position: "COO",
      avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=13",
      quote: "Success is the sum of small efforts repeated day in and day out.",
      bio: "Olivia brings operational excellence from her time at McKinsey and as COO of a Fortune 500 company. She ensures Stellar runs efficiently while maintaining our customer-first focus.",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "David Kim",
      position: "Chief Data Scientist",
      avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=14",
      quote: "In God we trust. All others must bring data.",
      bio: "David is a renowned data scientist who previously worked at NASA and Tesla. He leads our research team in developing cutting-edge analytics algorithms.",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    }
  ];
  
  const [selected, setSelected] = React.useState("0");

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold mb-3">
            OUR TEAM
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Meet the founders
          </h2>
          <p className="text-foreground/70">
            The brilliant minds behind Stellar who are passionate about making data analytics accessible to everyone.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Tabs 
            aria-label="Founders" 
            selectedKey={selected} 
            onSelectionChange={setSelected}
            color="primary"
            variant="underlined"
            classNames={{
              tabList: "gap-4 w-full relative rounded-none p-0 border-b border-divider",
              cursor: "w-full bg-primary",
              tab: "max-w-fit px-0 h-12",
              tabContent: "group-data-[selected=true]:text-primary"
            }}
          >
            {founders.map((founder, index) => (
              <Tab
                key={index.toString()}
                title={
                  <div className="flex items-center gap-2">
                    <Avatar
                      src={founder.avatar}
                      className="w-8 h-8"
                      isBordered={selected === index.toString()}
                      color="primary"
                    />
                    <span>{founder.name}</span>
                  </div>
                }
              >
                <Card className="mt-8">
                  <CardBody className="p-6">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-1/3 flex flex-col items-center">
                        <Avatar
                          src={founder.avatar}
                          className="w-32 h-32 mb-4"
                          isBordered
                          color="primary"
                        />
                        <h3 className="text-xl font-semibold text-center">{founder.name}</h3>
                        <p className="text-foreground/70 text-center mb-4">{founder.position}</p>
                        <div className="flex gap-4 mt-2">
                          <a href={founder.social.twitter} className="text-foreground/70 hover:text-primary transition-colors">
                            <Icon icon="lucide:twitter" className="w-5 h-5" />
                          </a>
                          <a href={founder.social.linkedin} className="text-foreground/70 hover:text-primary transition-colors">
                            <Icon icon="lucide:linkedin" className="w-5 h-5" />
                          </a>
                          <a href={founder.social.github} className="text-foreground/70 hover:text-primary transition-colors">
                            <Icon icon="lucide:github" className="w-5 h-5" />
                          </a>
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <blockquote className="text-xl italic mb-6 text-foreground/90">"{founder.quote}"</blockquote>
                        <p className="text-foreground/70">{founder.bio}</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Tab>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};