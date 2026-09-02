import React from 'react';
import { motion } from 'framer-motion';

// Import all your images
import springIcon from '../../assets/spring-icon.svg';
import awsIcon from '../../assets/aws.svg';
import flutterIcon from '../../assets/flutter.svg';
import postgresqlIcon from '../../assets/postgresql.svg';
import reactIcon from '../../assets/react.svg';
import nestjsIcon from '../../assets/nestjs.svg';
import graphqlIcon from '../../assets/graphql.svg';
import typescriptIcon from '../../assets/typescript-icon.svg';
import javaIcon from '../../assets/java.svg';
import githubActionsIcon from '../../assets/github-actions.svg';
import dockerIcon from '../../assets/docker.svg';

const icons = [
  {
    name: 'Spring',
    src: springIcon, // ✅ FIXED - using imported variable
    x: '20%',
    y: '15%',
    duration: 14,
    hoverColor: '#6db33f'
  },
  {
    name: 'AWS',
    src: awsIcon, // ✅ FIXED
    x: '50%',
    y: '10%',
    duration: 9,
    hoverColor: '#ff9900'
  },
  {
    name: 'Flutter',
    src: flutterIcon, // ✅ FIXED
    x: '80%',
    y: '15%',
    duration: 9,
    hoverColor: '#02569b'
  },
  {
    name: 'PostgreSQL',
    src: postgresqlIcon, // ✅ FIXED
    x: '95%',
    y: '55%',
    duration: 12,
    hoverColor: '#336791'
  },
  {
    name: 'React',
    src: reactIcon, // ✅ FIXED
    x: '10%',
    y: '35%',
    duration: 10,
    hoverColor: '#61dafb'
  },
  {
    name: 'NestJS',
    src: nestjsIcon, // ✅ FIXED
    x: '5%',
    y: '55%',
    duration: 10,
    hoverColor: '#e0234e'
  },
  {
    name: 'GraphQL',
    src: graphqlIcon, // ✅ FIXED
    x: '15%',
    y: '75%',
    duration: 14,
    hoverColor: '#e10098'
  },
  {
    name: 'TypeScript',
    src: typescriptIcon, // ✅ FIXED
    x: '90%',
    y: '35%',
    duration: 12,
    hoverColor: '#3178c6'
  },
  {
    name: 'Java',
    src: javaIcon, // ✅ FIXED
    x: '85%',
    y: '75%',
    duration: 8,
    hoverColor: '#f89820'
  },
  {
    name: 'GitHub Actions',
    src: githubActionsIcon, // ✅ FIXED
    x: '25%',
    y: '85%',
    duration: 10,
    hoverColor: '#2088ff'
  },
  {
    name: 'Docker',
    src: dockerIcon, // ✅ FIXED
    x: '75%',
    y: '85%',
    duration: 13,
    hoverColor: '#2496ed'
  }
];


const TechIcons = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-10 pointer-events-none hidden md:block">
      {icons.map((icon, index) => (
        <motion.div
          key={icon.name}
          className="absolute"
          style={{
            top: icon.y,
            left: icon.x,
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 0.28, scale: 1 }}
          transition={{
            delay: index * 0.08,
            duration: 0.7,
            ease: 'easeOut',
          }}
          title={icon.name}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              delay: index * 0.08 + 0.6,
              duration: icon.duration,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
            }}
          >
            <img
              src={icon.src}
              alt=""
              width={28}
              height={28}
              className="w-7 h-7 object-contain opacity-80"
              aria-hidden="true"
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default TechIcons;
