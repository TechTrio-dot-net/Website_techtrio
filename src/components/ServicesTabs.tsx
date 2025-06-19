'use client';

import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import {
  FaMobileAlt,
  FaDatabase,
  FaCloud,
  FaGraduationCap,
  FaEdit,
  FaShoppingCart,
  FaGlobe
} from 'react-icons/fa';

const ServicesTabs = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<'services' | 'platforms' | 'corporate'>('services');

  const bgMain = theme === 'dark' ? 'bg-[#0f172a] text-white' : 'bg-white text-black';
  const bgCard = theme === 'dark' ? 'bg-[#1e293b]' : 'bg-gray-100';
  const borderCard = theme === 'dark' ? 'border-gray-700' : 'border-gray-300';
  const textMuted = theme === 'dark' ? 'text-gray-400' : 'text-gray-600';
  const textParagraph = theme === 'dark' ? 'text-blue-100' : 'text-gray-700';

  return (
    <section className={`${bgMain} py-16 px-4`}>
      <div className="max-w-6xl mx-auto text-center">


        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <TabButton
            label="Web & Mobile Development"
            isActive={activeTab === 'services'}
            onClick={() => setActiveTab('services')}
          />
          <TabButton
            label="LMS / CMS / E-Commerce"
            isActive={activeTab === 'platforms'}
            onClick={() => setActiveTab('platforms')}
          />
          <TabButton
            label="Corporate Websites"
            isActive={activeTab === 'corporate'}
            onClick={() => setActiveTab('corporate')}
          />
        </div>

        {/* Tab Content */}
        {activeTab === 'services' && (
          <TabContent
            heading="Custom Web & Mobile App Development"
            description="Crafting bespoke digital experiences that drive engagement, streamline operations, and achieve your business objectives."
            cardTitle="Full-Cycle Development Services"
            cardText="From initial concept and UI/UX design to development, testing, and deployment, TechTrio offers end-to-end web and mobile application development."
            cards={[
              {
                icon: <FaMobileAlt size={24} className="text-blue-400" />,
                title: 'Responsive Design',
                desc: 'Seamless experience across all devices - desktops, tablets, and mobiles.',
              },
              {
                icon: <FaDatabase size={24} className="text-green-400" />,
                title: 'Scalable Architectures',
                desc: 'Built to handle growth with robust backend systems and database solutions.',
              },
              {
                icon: <FaCloud size={24} className="text-orange-400" />,
                title: 'Cloud Deployment',
                desc: 'Reliable and scalable hosting solutions on leading cloud platforms.',
              },
            ]}
            cta="Start Your App Project →"
            ctaColor="bg-blue-600 hover:bg-blue-700"
          />
        )}

        {activeTab === 'platforms' && (
          <TabContent
            heading="LMS, CMS & E-commerce Platforms"
            description="Powerful, scalable, and customizable platforms to manage learning, content, and online sales effectively."
            cardTitle="Tailored Platform Solutions"
            cardText="TechTrio develops robust Learning Management Systems (LMS), Content Management Systems (CMS), and E-commerce platforms tailored to your specific needs."
            cards={[
              {
                icon: <FaGraduationCap size={24} className="text-blue-400" />,
                title: 'Engaging LMS Solutions',
                desc: 'Interactive course delivery, progress tracking, and certification management.',
              },
              {
                icon: <FaEdit size={24} className="text-green-400" />,
                title: 'Flexible CMS Platforms',
                desc: 'Easy content creation, management, and publishing for dynamic websites.',
              },
              {
                icon: <FaShoppingCart size={24} className="text-orange-400" />,
                title: 'Customizable E-commerce',
                desc: 'Secure payment gateways, inventory management, and personalized shopping experiences.',
              },
            ]}
            cta="Discuss Your Platform Needs →"
            ctaColor="bg-green-500 hover:bg-green-600"
          />
        )}

        {activeTab === 'corporate' && (
          <TabContent
            heading="Corporate & Marketing Websites"
            description="Stand out online with visually stunning, fast, and SEO-optimized websites tailored to your brand."
            cardTitle="Tailor-Made Brand Presence"
            cardText="We build impactful websites for businesses, startups, and agencies using modern frameworks and elegant UI."
            cards={[
              {
                icon: <FaGlobe size={24} className="text-blue-400" />,
                title: 'Corporate Identity',
                desc: 'Web presence that builds trust, credibility, and professionalism.',
              },
              {
                icon: <FaEdit size={24} className="text-green-400" />,
                title: 'Marketing Driven',
                desc: 'Optimized for conversions, lead generation, and growth.',
              },
              {
                icon: <FaMobileAlt size={24} className="text-orange-400" />,
                title: 'Fully Responsive',
                desc: 'Designed to perform seamlessly across all screen sizes.',
              },
            ]}
            cta="Let's Build Your Website →"
            ctaColor="bg-purple-600 hover:bg-purple-700"
          />
        )}
      </div>
    </section>
  );
};

const TabButton = ({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-200 ${
      isActive
        ? 'bg-gradient-to-r from-blue-500 to-green-400 text-white'
        : 'bg-gray-300 text-black dark:bg-gray-700 dark:text-white'
    }`}
  >
    {label}
  </button>
);

const TabContent = ({
  heading,
  description,
  cardTitle,
  cardText,
  cards,
  cta,
  ctaColor,
}: {
  heading: string;
  description: string;
  cardTitle: string;
  cardText: string;
  cards: { icon: React.ReactNode; title: string; desc: string }[];
  cta: string;
  ctaColor: string;
}) => {
  const { theme } = useTheme();
  const bgCard = theme === 'dark' ? 'bg-[#1e293b]' : 'bg-gray-100';
  const borderCard = theme === 'dark' ? 'border-gray-700' : 'border-gray-300';
  const textMuted = theme === 'dark' ? 'text-gray-400' : 'text-gray-600';
  const textParagraph = theme === 'dark' ? 'text-blue-100' : 'text-gray-700';
  const cardBg = theme === 'dark' ? 'bg-[#0f172a]' : 'bg-white';
  const textDesc = theme === 'dark' ? 'text-gray-400' : 'text-gray-600';

  return (
    <div className="space-y-6">
      <h2 className="text-2xl md:text-4xl font-bold">{heading}</h2>
      <p className={`text-lg md:text-xl max-w-3xl mx-auto ${textParagraph}`}>{description}</p>

      <div className={`${bgCard} rounded-xl p-6 mt-6 text-left`}>
        <h3 className="text-2xl font-bold mb-2">{cardTitle}</h3>
        <p className={`mb-6 ${textMuted}`}>{cardText}</p>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map(({ icon, title, desc }) => (
            <div
              key={title}
              className={`${cardBg} border ${borderCard} rounded-lg p-4 space-y-2 text-center`}
            >
              <div className="flex justify-center">{icon}</div>
              <h4 className="text-lg font-semibold">{title}</h4>
              <p className={`text-sm ${textDesc}`}>{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <button
            className={`${ctaColor} text-white font-semibold px-6 py-2 rounded-full transition-all duration-200`}
          >
            {cta}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesTabs;
