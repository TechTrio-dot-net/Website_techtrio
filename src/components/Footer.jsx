'use client';

import Image from 'next/image';
import Link from 'next/link'; // <-- Added for internal routing
import { useTheme } from 'next-themes';
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';
import { MdEmail, MdLocationOn } from 'react-icons/md';

export default function Footer() {
  const { theme } = useTheme();

  const bgImage =
    theme === 'dark'
      ? "bg-[url('/grid-dark.svg')]"
      : "bg-[url('/grid-light.svg')]";

  return (
    <footer
      className={`relative py-12 px-6 md:px-16 border-t transition-colors duration-300
        ${theme === 'dark' ? 'bg-[#0B0F1C] text-white border-[#1E293B]' : 'bg-white text-black border-gray-200'}
        ${bgImage} bg-[length:40px_40px] bg-center bg-repeat`}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 relative z-10">
        {/* Logo + Tagline */}
        <div>
          <div className="mb-4">
            <Image
              src={
                theme === 'dark'
                  ? 'https://res.cloudinary.com/ddztecdya/image/upload/v1739845925/zjzj0ytpqzkbplrgiams.png'
                  : 'https://res.cloudinary.com/ddztecdya/image/upload/v1739845925/jrzjovv25dgvbdaywc5p.png'
              }
              alt="TechTrio Logo"
              width={160}
              height={40}
              priority
            />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Pioneering Tomorrows Innovation,<br /> Today.
          </p>
          <div className="flex gap-4 text-xl text-gray-500 dark:text-gray-400">
            <a href="https://github.com/TechTrio-dot-net" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/company/techtrio-automation/" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/techtrio_automation/" className="hover:text-pink-500 dark:hover:text-pink-400 transition-colors duration-200">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-bold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
            <li><Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400">About Us</Link></li>
            <li><Link href="/services" className="hover:text-blue-600 dark:hover:text-blue-400">Products & Services</Link></li>
            <li><Link href="/blogs" className="hover:text-blue-600 dark:hover:text-blue-400">Blog</Link></li>
            <li><Link href="/careers" className="hover:text-blue-600 dark:hover:text-blue-400">Careers</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-bold mb-4">Support</h3>
          <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
            <li><Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact Us</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-blue-600 dark:hover:text-blue-400">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h3 className="text-lg font-bold mb-4">Get In Touch</h3>
          <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
            <li className="flex items-start gap-2">
              <MdEmail className="text-blue-500 mt-1" />
              <span>info@techtrio.net</span>
            </li>
            <li className="flex items-start gap-2">
              <MdLocationOn className="text-blue-500 mt-1" />
              <span>
                F-23, Shaligeam Crown,
                <br />
                Vijapur, Mehsana - 382870
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 pt-6 border-t border-[#1E293B] dark:border-[#1E293B] text-center text-sm text-gray-500 dark:text-gray-400">
        © 2025 TechTrio Automation. All rights reserved.
      </div>
    </footer>
  );
}
