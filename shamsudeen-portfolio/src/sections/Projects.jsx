import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { projects } from "../data/projects";
import ProjectModal from "../components/ProjectModal";

const ProjectCard = ({ project, index, onViewDetails }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const isReversed = index % 2 !== 0;

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImage(
      (prev) => (prev - 1 + project.images.length) % project.images.length,
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
        isReversed ? "lg:direction-rtl" : ""
      }`}
    >
      {/* Image Gallery */}
      <motion.div
        className={`relative group ${isReversed ? "lg:order-2" : ""}`}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="relative overflow-hidden rounded-2xl glass-card aspect-video">
          <motion.img
            key={currentImage}
            src={project.images[currentImage]}
            alt={project.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Navigation */}
          <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={prevImage}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextImage}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImage(idx);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentImage ? "bg-primary w-6" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Decorative Element */}
        <div
          className={`absolute -z-10 w-full h-full rounded-2xl bg-linear-to-br from-primary/10 to-secondary/10 ${
            isReversed ? "-top-4 -right-4" : "-top-4 -left-4"
          }`}
        />
      </motion.div>

      {/* Content */}
      <div className={`${isReversed ? "lg:order-1 lg:text-right" : ""}`}>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full border border-primary/20 mb-4"
        >
          Featured Project
        </motion.span>

        <h3 className="text-2xl sm:text-3xl font-bold text-text mb-3">
          {project.title}
        </h3>

        <p className="text-muted mb-6 leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Tech Stack */}
        <div
          className={`flex flex-wrap gap-2 mb-6 ${isReversed ? "lg:justify-end" : ""}`}
        >
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-muted border border-border hover:border-primary/30 hover:text-primary transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div
          className={`flex flex-wrap gap-3 ${isReversed ? "lg:justify-end" : ""}`}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onViewDetails(project)}
            className="btn-primary flex items-center gap-2 text-sm"
          >
            <Eye size={16} />
            View Details
          </motion.button>
          <motion.a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary flex items-center gap-2 text-sm"
          >
            <ExternalLink size={16} />
            Live Demo
          </motion.a>
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted hover:text-text hover:border-primary/30 transition-colors"
            aria-label="View GitHub"
          >
            <SiGithub size={18} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section
      id="projects"
      className="relative py-20 sm:py-28 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-primary/3 rounded-full blur-[200px]" />

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
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto text-base sm:text-lg">
              A selection of my recent work showcasing my skills and passion for
              building great products
            </p>
          </motion.div>

          {/* Projects List */}
          <div className="space-y-20 lg:space-y-32">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={modalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default Projects;
