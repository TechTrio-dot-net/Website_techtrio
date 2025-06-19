'use client';

import { useTheme } from 'next-themes';
import { BsLightningChargeFill } from 'react-icons/bs';

export default function CTASection() {
  const { theme } = useTheme();

  const isDark = theme === 'dark';

  return (
    <section
      className={`relative px-6 md:px-0 py-20 transition-colors duration-300 ${
        isDark ? 'bg-[#0B0F1C] text-white' : 'bg-white text-black'
      } flex justify-center items-center`}
    >
      <div
        className={`relative max-w-4xl w-full rounded-2xl p-10 md:p-16 text-center border transition-colors duration-300 ${
          isDark
            ? 'bg-[#0F172A] border-[#1E293B]'
            : 'bg-gray-100 border-gray-300'
        }`}
      >
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <BsLightningChargeFill
            className={`text-3xl ${
              isDark ? 'text-green-400' : 'text-green-500'
            }`}
          />
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
          Ready to Transform Your <br className="hidden md:block" />
          Business with{' '}
          <span className="text-blue-500">Smart</span>{' '}
          <span className="text-green-400">Solutions?</span>
        </h2>

        {/* Description */}
        <p
          className={`text-lg max-w-2xl mx-auto mb-10 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          Discover how TechTrio Automation can tailor innovative digital,
          cloud, and intelligent systems to meet your unique challenges and
          accelerate growth.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a
            href="/contact"
            className={`font-semibold px-6 py-3 rounded-lg transition flex items-center justify-center gap-2 ${
              isDark
                ? 'bg-blue-500 hover:bg-blue-600 text-white'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            Request a Consultation <span>→</span>
          </a>
          <a
            href="/services"
            className={`font-semibold px-6 py-3 rounded-lg border transition ${
              isDark
                ? 'border-green-400 hover:border-green-500 text-green-400 hover:text-green-300'
                : 'border-green-500 hover:border-green-600 text-green-600 hover:text-green-700'
            }`}
          >
            Explore Our Solutions
          </a>
        </div>
      </div>
    </section>
  );
}
