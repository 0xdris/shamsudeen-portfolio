import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/projects';
import { GraduationCap, Code, Layers, Server, Rocket } from 'lucide-react';

const timelineIcons = [GraduationCap, Code, Layers, Server, Rocket];

const Experience = () => {
  return (
    <section id="experience" className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-[120px]" />

      <div className="section-padding relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
              My Journey
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-4">
              Experience <span className="gradient-text">Timeline</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto text-base sm:text-lg">
              My path from learning the basics to building full-stack applications
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-linear-to-b from-primary via-secondary to-primary/30" />

            <div className="space-y-8 sm:space-y-12">
              {experience.map((item, index) => {
                const IconComponent = timelineIcons[index % timelineIcons.length];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative pl-16 sm:pl-20"
                  >
                    {/* Timeline Dot */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.2, type: "spring" }}
                      className="absolute left-3 sm:left-5 top-0 w-7 h-7 sm:w-9 sm:h-9 rounded-full glass-strong flex items-center justify-center z-10"
                    >
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-primary" />
                    </motion.div>

                    {/* Content Card */}
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="glass-card p-5 sm:p-6 relative"
                    >
                      {/* Year Badge */}
                      <span className="inline-block px-3 py-1 text-xs font-mono font-medium text-primary bg-primary/10 rounded-full border border-primary/20 mb-3">
                        {item.year}
                      </span>

                      <div className="flex items-start gap-3 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <IconComponent size={16} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl font-semibold text-text mb-1">
                            {item.title}
                          </h3>
                          <p className="text-muted text-sm sm:text-base leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;