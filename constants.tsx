
import React from 'react';
import { Internship } from './types';

export const INTERNSHIPS: Internship[] = [
  {
    id: 'frontend',
    title: 'Frontend Developer',
    description: 'Master the art of building high-performance, responsive web interfaces using modern frameworks.',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    duration: '2-3 Months',
    outcomes: ['Portfolio-ready projects', 'Enterprise-grade UI skills', 'Performance optimization mastery']
  },
  {
    id: 'backend',
    title: 'Backend Developer',
    description: 'Architect scalable server-side systems, APIs, and database structures for modern applications.',
    skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
    duration: '3 Months',
    outcomes: ['API design expertise', 'Cloud deployment knowledge', 'Database management skills']
  },
  {
    id: 'uiux',
    title: 'UI/UX Designer',
    description: 'Learn user-centric design principles and master industry-standard tools to create stunning experiences.',
    skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping'],
    duration: '2 Months',
    outcomes: ['Design system creation', 'User testing proficiency', 'End-to-end UX workflow']
  },
  {
    id: 'chatbot',
    title: 'Chatbot Developer',
    description: 'Dive into NLP and conversational AI to build intelligent assistants and automated support systems.',
    skills: ['Python', 'Rasa', 'Dialogflow', 'OpenAI API'],
    duration: '3 Months',
    outcomes: ['AI integration skills', 'Conversation modeling', 'Production-ready bots']
  },
  {
    id: 'cybersecurity',
    title: 'Cyber Security',
    description: 'Learn to protect digital assets, conduct vulnerability assessments, and secure network infrastructures.',
    skills: ['Network Security', 'Ethical Hacking', 'OWASP', 'Linux'],
    duration: '4 Months',
    outcomes: ['Security auditing', 'Risk mitigation techniques', 'Professional certification prep']
  },
  {
    id: 'dataanalysis',
    title: 'Data Analysis',
    description: 'Turn raw data into actionable insights through visualization and statistical modeling techniques.',
    skills: ['Python', 'SQL', 'Tableau', 'Power BI'],
    duration: '3 Months',
    outcomes: ['Business intelligence', 'Data storytelling', 'Advanced SQL querying']
  },
  {
    id: 'datascience',
    title: 'Data Science',
    description: 'Build predictive models and leverage machine learning to solve complex business problems.',
    skills: ['Machine Learning', 'Pandas', 'Scikit-Learn', 'TensorFlow'],
    duration: '4 Months',
    outcomes: ['Model deployment', 'Statistical analysis', 'AI research methodology']
  }
];

export const TEAM_DETAILS = {
  ceo: {
    name: "Hammad Sheikh",
    role: "Chief Executive Officer",
    bio: "Visionary leader dedicated to bridging the gap between academia and industry in Pakistan."
  },
  cofounder: {
    name: "Rayyan Sheikh",
    role: "Co-Founder",
    bio: "Tech enthusiast focused on building scalable educational platforms for the next generation of developers."
  }
};
