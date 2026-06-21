import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/projects';
import SkillIcon from '../components/SkillIcon';

const Skills = () => {
  const categories = [
    { key: 'frontend', title: 'Frontend Development', color: '#14B8A6' },
    { key: 'backend', title: 'Backend Development', color: '#38BDF8' },
    { key: 'tools', title: 'Tools & Concepts', color: '#94A3B8' },
  ];

  return (
    <section id="skills" className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="section-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
              My Skills
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-4">
              Technologies I <span className="gradient-text">Work With</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto text-base sm:text-lg">
              A comprehensive toolkit of technologies I use to bring ideas to life
            </p>
          </motion.div>

          {/* Skills Categories */}
          <div className="space-y-16">
            {categories.map((category, catIndex) => (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: category.color }}
                  />
                  <h3 className="text-xl sm:text-2xl font-semibold text-text">
                    {category.title}
                  </h3>
                  <div className="flex-1 h-px bg-linear-to-r from-border to-transparent" />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
                  {skills[category.key].map((skill, index) => (
                    <SkillIcon
                      key={skill.name}
                      {...skill}
                      index={index + catIndex * 5}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;