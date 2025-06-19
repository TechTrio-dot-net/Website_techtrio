'use client';

import { useTheme } from 'next-themes';
import { FaMicrochip, FaServer, FaDatabase, FaCloud } from 'react-icons/fa';
import clsx from 'clsx';

const techSections = [
  {
    title: 'Frontend & UI',
    icon: <FaServer className="text-pink-400 text-2xl" />, // Or any other icon you prefer
    tw: 'border-pink-400',
    items: [
      { title: 'Next.js', desc: 'React-based framework for hybrid static & server rendering.' },
      { title: 'React.js', desc: 'Component-based UI library for building web interfaces.' },
      { title: 'Tailwind CSS', desc: 'Utility-first CSS framework for rapid UI development.' },
      { title: 'Framer Motion', desc: 'Declarative animations and interactions in React.' },
    ],
  },
  {
    title: 'Backend & API',
    icon: <FaServer className="text-green-400 text-2xl" />,
    tw: 'border-green-400',
    items: [
      { title: 'Node.js', desc: 'Event-driven JavaScript runtime for scalable backends.' },
      { title: 'Python (FastAPI/Django)', desc: 'For rapid API development and data processing.' },
      { title: 'REST & GraphQL APIs', desc: 'Standardized and flexible API design.' },
      { title: 'Microservices Architecture', desc: 'Modular and scalable backend services.' },
    ],
  },
  {
    title: 'Database & Storage',
    icon: <FaDatabase className="text-purple-400 text-2xl" />,
    tw: 'border-purple-400',
    items: [
      { title: 'MongoDB', desc: 'NoSQL document database for flexible data storage.' },
      { title: 'PostgreSQL', desc: 'Powerful open-source relational database.' },
      { title: 'Redis', desc: 'In-memory data store for caching and session management.' },
      { title: 'AWS S3 / Cloud Storage', desc: 'Scalable object storage for large files.' },
    ],
  },
  {
    title: 'DevOps & Cloud',
    icon: <FaCloud className="text-yellow-400 text-2xl" />,
    tw: 'border-yellow-400',
    items: [
      { title: 'Docker', desc: 'Containerization for consistent environments.' },
      { title: 'Kubernetes', desc: 'Orchestration platform for automated deployments.' },
      { title: 'CI/CD (Jenkins, GitLab CI)', desc: 'Automated build, test, and deploy pipelines.' },
      { title: 'AWS / Azure / GCP', desc: 'Cloud platforms for scalable infrastructure.' },
    ],
  },

  {
    title: 'Hardware & Embedded',
    icon: <FaMicrochip className="text-blue-500 text-2xl" />,
    tw: 'border-blue-500',
    items: [
      { title: 'ESP32', desc: 'Versatile Wi-Fi & Bluetooth SoC for IoT devices.' },
      { title: 'LoRa/LoRaWAN', desc: 'Long-range, low-power wireless communication.' },
      { title: 'Raspberry Pi', desc: 'Single-board computers for complex edge processing.' },
      { title: 'Custom PCB Design', desc: 'Tailored circuit boards for specific applications.' },
    ],
  },
];


export default function TechnologiesWeUse() {
  const { theme } = useTheme();

  return (
    <section className="bg-white dark:bg-[#0B0F1C] text-black dark:text-white px-6 md:px-16 py-20 transition-colors duration-300">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Technologies{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400">
            We Use
          </span>
        </h2>
        <p className="text-gray-700 dark:text-gray-400 max-w-3xl mx-auto text-lg">
          Our solutions are built on a foundation of robust, scalable, and
          cutting-edge technologies to deliver exceptional performance and reliability.
        </p>
      </div>

      {/* Flex row for columns */}
      <div className="flex flex-wrap gap-8 justify-between">
        {techSections.map((section, index) => {
          const isLastOdd =
            techSections.length % 2 !== 0 && index === techSections.length - 1;

          return (
            <div
              key={index}
              className={clsx(
                'w-full lg:w-[48%] bg-gray-100 dark:bg-[#0F172A] border border-gray-300 dark:border-[#1E293B] rounded-2xl p-6 md:p-10 transition-colors duration-300',
                {
                  'lg:mx-auto': isLastOdd, // Center only the last if odd
                }
              )}
            >
              <div className="flex items-center gap-3 mb-8">
                {section.icon}
                <h3 className="text-2xl font-bold">{section.title}</h3>
              </div>

              <div className="grid grid-cols-1 gap-x-12 gap-y-6">
                {section.items.map((item, idx) => (
                  <div key={idx} className={clsx('pl-4 border-l-4', section.tw)}>
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
