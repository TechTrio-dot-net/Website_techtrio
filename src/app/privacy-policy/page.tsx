'use client';

import { useTheme } from 'next-themes';

export default function PrivacyPolicyPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      className={`pt-40 min-h-screen py-20 px-6 md:px-24 transition-colors duration-300 ${
        isDark ? 'bg-[#0B0F1C] text-white' : 'bg-white text-black'
      }`}
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400">Policy</span>
        </h1>
        <p className="mt-4 text-gray-400">
          Your privacy is important to us at TechTrio.
        </p>
        <p className="text-sm text-gray-500 mt-1">Last Updated: June 19, 2025</p>
      </div>

      <div
        className={`max-w-4xl mx-auto p-6 md:p-10 rounded-xl border ${
          isDark ? 'bg-[#111827] border-[#1f2937]' : 'bg-gray-100 border-gray-300'
        }`}
      >
        <div className="space-y-8 text-sm md:text-base leading-relaxed">
          {/* 1. Introduction */}
          <div>
            <h2 className="font-semibold text-lg mb-2">1. Introduction</h2>
            <p>
              Welcome to TechTrio Automation ("Company", "we", "our", "us"). This Privacy Policy explains how we collect, use, and safeguard your information when you use our websites and services. By accessing or using our services, you agree to this policy. If you do not agree, please discontinue use.
            </p>
          </div>

          {/* 2. Information We Collect */}
          <div>
            <h2 className="font-semibold text-lg mb-2">2. Information We Collect</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Personal Information:</strong> Includes your name, email address, phone number, and any other data you provide when filling out forms or contacting us.
              </li>
              <li>
                <strong>Usage Data:</strong> IP address, browser type, operating system, referring URLs, access times, and pages visited. This helps us improve service performance.
              </li>
              <li>
                <strong>Device and Interaction Data:</strong> Logs and metadata from your interaction with our systems, for support, security, and analytics.
              </li>
            </ul>
          </div>

          {/* 3. How We Use Your Information */}
          <div>
            <h2 className="font-semibold text-lg mb-2">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>To provide, maintain, and improve our services</li>
              <li>To communicate with you (support, updates, announcements)</li>
              <li>To analyze system usage and optimize performance</li>
              <li>To secure our services and prevent fraud or abuse</li>
              <li>To comply with legal obligations</li>
            </ul>
          </div>

          {/* 4. Data Security */}
          <div>
            <h2 className="font-semibold text-lg mb-2">4. Data Security</h2>
            <p>
              We host all data on secure, encrypted cloud servers managed by TechTrio. We use modern security protocols including SSL/TLS encryption, firewalls, and access control to ensure that your information is protected at all times. All communications and stored data are end-to-end encrypted.
            </p>
          </div>

          {/* 5. Cookies & Analytics */}
          <div>
            <h2 className="font-semibold text-lg mb-2">5. Cookies & Analytics</h2>
            <p>
              We use cookies and third-party tools such as Google Analytics to monitor usage patterns and enhance user experience. These cookies do not contain personally identifiable information. You may disable cookies in your browser settings.
            </p>
          </div>

          {/* 6. Your Rights */}
          <div>
            <h2 className="font-semibold text-lg mb-2">6. Your Rights</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Access and review the data we hold about you</li>
              <li>Request correction of incorrect information</li>
              <li>Request deletion of your personal data</li>
              <li>Withdraw consent for data usage at any time</li>
              <li>File a complaint with a data protection authority</li>
            </ul>
            <p className="mt-2">
              These rights are provided under applicable privacy laws including the Indian IT Act and GDPR (where applicable).
            </p>
          </div>

          {/* 7. Policy Changes */}
          <div>
            <h2 className="font-semibold text-lg mb-2">7. Policy Updates</h2>
            <p>
              We may revise this policy occasionally to comply with law or improve transparency. Changes will be posted here with a revised “Last Updated” date. Material changes may be communicated via email or banners on our site.
            </p>
          </div>

          {/* 8. Contact Us */}
          <div>
            <h2 className="font-semibold text-lg mb-2">8. Contact Us</h2>
            <p>
              For questions or concerns about this Privacy Policy, please contact:
            </p>
            <p className="mt-2">
              📧 <a href="mailto:privacy@techtrio.in" className="text-blue-400 hover:underline">privacy@techtrio.in</a><br />
              📍 F‑23, Shaligeam Crown, Vijapur, Mehsana – 382870, India
            </p>
          </div>

          {/* Legal Disclaimer */}
          <div className="text-xs text-center text-gray-500 border-t pt-4 mt-6">
            This Privacy Policy is intended as a general guideline. For full compliance, we recommend seeking legal consultation under Indian IT Act, 2011 and global regulations like GDPR.
          </div>
        </div>
      </div>
    </section>
  );
}
