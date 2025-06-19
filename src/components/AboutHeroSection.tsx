'use client';

import { useTheme } from 'next-themes';
import Link from 'next/link';
import { FaWifi  } from 'react-icons/fa';

export default function AboutHeroSection() {
  const { theme } = useTheme();

  return (
    <section
      className={`relative py-[12rem] px-6 md:px-0 py-24 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-[#0B0F1C] text-white' : 'bg-white text-black'
      } flex justify-center items-center`}
    >
      <div className="text-center max-w-5xl mx-auto">

        {/* Badge */}
        <div
          className={`mb-6 inline-flex items-center gap-2 px-4 py-1 text-sm font-medium rounded-full border ${
            theme === 'dark'
              ? 'bg-[#0D1C19] border-green-600 text-green-400'
              : 'bg-green-50 border-green-400 text-green-600'
          }`}
        >
          <FaWifi  className="text-lg" />
          Flagship IoT: Smart Parking System
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Powering Smarter Cities <br />
          <span className="bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
            & Businesses Worldwide
          </span>
        </h1>

        {/* Subheading */}
        <p
          className={`text-lg md:text-xl max-w-3xl mx-auto mb-10 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          Build with intelligent SaaS solutions by TechTrio. From advanced IoT systems
          like Smart Parking to custom web & mobile applications, we deliver
          innovation that drives results.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className={`px-6 py-3 rounded-lg font-semibold transition duration-200 ${
              theme === 'dark'
                ? 'bg-blue-500 hover:bg-blue-600 text-white'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            Get Started →
          </Link>
          <Link
            href="/services"
            className={`px-6 py-3 rounded-lg font-semibold border transition duration-200 ${
              theme === 'dark'
                ? 'border-green-500 hover:border-green-600 text-green-400 hover:text-green-300'
                : 'border-green-600 hover:border-green-700 text-green-600 hover:text-green-700'
            }`}
          >
            Explore Products & Services
          </Link>
        </div>
      </div>
    </section>
  );
}
