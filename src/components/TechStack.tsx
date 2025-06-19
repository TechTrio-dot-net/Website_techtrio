// components/TechStack.tsx
'use client';

import { useTheme } from 'next-themes';
import {
  FaCode, FaLinux, FaCloud, FaDatabase, FaRobot, FaCogs
} from 'react-icons/fa';
import {
  SiMongodb, SiDocker, SiReact, SiNextdotjs, SiFirebase, SiStrapi,
  SiWordpress, SiAmazon, SiGooglecloud, SiJest,
  SiSelenium, SiApachejmeter, SiGrafana, SiPrometheus, SiNodedotjs,
  SiJavascript, SiTypescript, SiHtml5, SiCss3
} from 'react-icons/si';

import { ArrowRight } from 'lucide-react';

const techStack = [
  { name: 'IoT', icon: <FaRobot className="text-3xl text-blue-500" /> },
  { name: 'Arduino', icon: <FaCogs className="text-3xl text-green-500" /> },
  { name: 'Node.js', icon: <SiNodedotjs className="text-3xl text-green-600" /> },
  { name: 'React', icon: <SiReact className="text-3xl text-blue-400" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-3xl text-black dark:text-white" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-3xl text-green-500" /> },
  { name: 'Docker', icon: <SiDocker className="text-3xl text-blue-400" /> },
  { name: 'Firebase', icon: <SiFirebase className="text-3xl text-yellow-500" /> },
  { name: 'AWS', icon: <SiAmazon className="text-3xl text-orange-500" /> },
  { name: 'Google Cloud', icon: <SiGooglecloud className="text-3xl text-blue-500" /> },
  { name: 'Strapi', icon: <SiStrapi className="text-3xl text-purple-500" /> },
  { name: 'WordPress', icon: <SiWordpress className="text-3xl text-blue-600" /> },
  { name: 'Selenium', icon: <SiSelenium className="text-3xl text-green-600" /> },
  { name: 'Linux', icon: <FaLinux className="text-3xl text-black dark:text-white" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-3xl text-yellow-400" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-3xl text-blue-500" /> },
  { name: 'HTML5', icon: <SiHtml5 className="text-3xl text-orange-600" /> },
  { name: 'CSS3', icon: <SiCss3 className="text-3xl text-blue-500" /> },
];

export default function TechStack() {
  const { theme } = useTheme();

  return (
    <section className="bg-white dark:bg-[#0B0F1C] py-20 text-center px-6 md:px-16 transition-colors duration-300">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-black dark:text-white">
        Built with{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400">
          Cutting-Edge Technologies
        </span>
      </h2>
      <p className="text-gray-700 dark:text-gray-400 max-w-3xl mx-auto text-lg mb-12">
        Our robust and evolving tech stack supports scalable, secure, and innovative IoT and web solutions.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center mb-12">
        {techStack.map((tech, idx) => (
          <div
            key={idx}
            className="bg-gray-100 dark:bg-[#121826] rounded-xl py-6 flex flex-col items-center gap-3 transition hover:scale-105 duration-300"
          >
            {tech.icon}
            <span className="text-gray-800 dark:text-gray-300 font-medium">{tech.name}</span>
          </div>
        ))}
      </div>

      {/* <button className="mt-10 inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-green-400 text-white px-6 py-3 rounded-full font-semibold transition-all hover:brightness-110">
        Explore Our Full Tech Stack
        <ArrowRight size={18} />
      </button> */}
    </section>
  );
}
