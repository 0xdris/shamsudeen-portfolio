import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiHtml5, SiCss, SiJavascript, SiReact, SiTailwindcss, 
  SiNodedotjs, SiExpress, SiGit, SiGithub, SiFigma 
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

import { 
  MdDevices, MdApi, MdHttp, MdSecurity, MdWifiTethering, 
  MdSync, MdStorage, MdSearch, MdAccessibility 
} from 'react-icons/md';

const iconMap = {
  SiHtml5, SiCss3: SiCss, SiJavascript, SiReact, SiTailwindcss,
  SiNodedotjs, SiExpress, SiGit, SiGithub, SiVisualstudiocode: VscVscode, SiFigma,
  MdDevices, MdApi, MdHttp, MdSecurity, MdWifiTethering,
  MdSync, MdStorage, MdSearch, MdAccessibility
};

const SkillIcon = ({ name, icon, color, index }) => {
  const IconComponent = iconMap[icon] || MdDevices;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.08, 
        y: -5,
        transition: { type: "spring", stiffness: 300, damping: 15 }
      }}
      className="glass-card p-5 flex flex-col items-center gap-3 cursor-pointer group"
    >
      <motion.div 
        className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
        style={{ 
          backgroundColor: `${color}15`,
          boxShadow: `0 0 0 ${color}00`
        }}
        whileHover={{
          boxShadow: `0 0 30px ${color}40`,
          backgroundColor: `${color}25`
        }}
      >
        <IconComponent 
          size={28} 
          color={color} 
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </motion.div>
      <span className="text-sm font-medium text-text text-center">{name}</span>
    </motion.div>
  );
};

export default SkillIcon;


