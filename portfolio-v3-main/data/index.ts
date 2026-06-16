import { IoLogoJavascript, IoLogoPython } from 'react-icons/io';
import { FaFigma, FaReact, FaGit, FaNode } from 'react-icons/fa';
import { SiMongodb, SiPostgresql, SiExpress, SiTailwindcss, SiPostman, SiVercel, SiCplusplus, SiC } from 'react-icons/si';
import { DiGithubBadge } from 'react-icons/di';

export const menuData = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'Projects',
    link: '/#work'
  },
  {
    name: 'About',
    link: '/about'
  },
  {
    name: 'Contact',
    link: '/#contact'
  }
];

export const skills = [
  {
    name: 'JavaScript',
    icon: IoLogoJavascript
  },
  {
    name: 'Python',
    icon: IoLogoPython
  },
  {
    name: 'React.js',
    icon: FaReact
  },
  {
    name: 'Node.js',
    icon: FaNode
  },
  {
    name: 'MongoDB',
    icon: SiMongodb
  },
  {
    name: 'PostgreSQL',
    icon: SiPostgresql
  },
  {
    name: 'Express.js',
    icon: SiExpress
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss
  },
  {
    name: 'Git',
    icon: FaGit
  },
  {
    name: 'GitHub',
    icon: DiGithubBadge
  },
  {
    name: 'Figma',
    icon: FaFigma
  },
  {
    name: 'Postman',
    icon: SiPostman
  }
];

export const projects = [
  {
    id: 1,
    name: 'SitWise – Library Seat Booking System',
    desc: 'A full-stack library seat reservation platform with real-time seat status tracking, secure REST APIs, and optimized MongoDB schemas. Built with the MERN stack featuring a responsive React interface for seamless seat management.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    github: null,
    web: null
  },
  {
    id: 2,
    name: 'OWASP Quiz Portal (CTF Platform)',
    desc: 'Backend services supporting 100+ participants with APIs for question delivery, submissions, and scoring. Optimized MongoDB collections designed for efficient competition data management.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    github: null,
    web: null
  },
  {
    id: 3,
    name: 'CTF Portal with Real-time Features',
    desc: 'Cybersecurity competition platform with live scoring and real-time synchronization powered by Convex. Includes gamified features like Attack, Shield, First Blood, and Hide from Leaderboard. Successfully scaled to support 500+ participants.',
    tech: ['React.js', 'Convex'],
    github: null,
    web: null
  }
];

export const workExperience = [
  {
    id: 1,
    position: 1,
    Company_name: 'OWASP Student Chapter',
    Desc: 'Core Member & Technical Coordinator',
    startYear: 'Aug 2024',
    endYear: 'Current'
  }
];

export const achievements = [
  {
    id: 1,
    name: 'HackSpire 2025 – Hackathon Finalist',
    desc: 'Selected among the top 15 teams out of 200+ participating teams.',
    link: '#',
    image: null
  },
  {
    id: 2,
    name: 'Innovate 2025 – Hackathon Finalist',
    desc: 'Recognized among 300+ teams for outstanding implementation quality and innovation.',
    link: '#',
    image: null
  }
];

// Empty comments array to prevent build errors (section removed from site)
export const comments: any[] = [];
