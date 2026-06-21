import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Briefcase, Layers, GitCommit } from 'lucide-react';
import { stats } from '../data/projects';

const statIcons = [Code2, Briefcase, Layers, GitCommit];

const About = () => {
  return (
    <section id="about" className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[120px]" />

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
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-4">
              Get To Know <span className="gradient-text">Me</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="space-y-6 text-muted leading-relaxed text-base sm:text-lg">
                <p>
                  I am a passionate web developer focused on building modern, responsive 
                  and accessible applications. I enjoy turning ideas into functional 
                  digital products using <span className="text-text font-medium">React</span>,{' '}
                  <span className="text-text font-medium">JavaScript</span>,{' '}
                  <span className="text-text font-medium">Node.js</span> and{' '}
                  <span className="text-text font-medium">Express</span>.
                </p>
                <p>
                  I love solving real-world problems and continuously improving my skills 
                  in full-stack web development. Every project is an opportunity to learn 
                  something new and push the boundaries of what's possible on the web.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open-source projects, or mentoring aspiring developers 
                  in the community.
                </p>
              </div>

              {/* Quick Info */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-4"
                >
                  <span className="text-primary font-mono text-sm">Name:</span>
                  <p className="text-text font-medium mt-1">Shamsudeen Idris</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-4"
                >
                  <span className="text-primary font-mono text-sm">Location:</span>
                  <p className="text-text font-medium mt-1">Available Remote</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-4"
                >
                  <span className="text-primary font-mono text-sm">Email:</span>
                  <p className="text-text font-medium mt-1 text-sm">hello@0xdris.dev</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-4"
                >
                  <span className="text-primary font-mono text-sm">Availability:</span>
                  <p className="text-text font-medium mt-1">Open to Work</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Right - Stats Cards */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, index) => {
                const IconComponent = statIcons[index];
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -5,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                    className="glass-card p-6 sm:p-8 text-center group"
                  >
                    <motion.div
                      whileHover={{ rotate: 10 }}
                      className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                    >
                      <IconComponent size={24} className="text-primary" />
                    </motion.div>
                    <motion.span
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.15 + 0.2, type: "spring" }}
                      className="block text-3xl sm:text-4xl font-bold gradient-text mb-2"
                    >
                      {stat.value}
                    </motion.span>
                    <span className="text-sm text-muted">{stat.label}</span>
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

export default About;