'use client';

import { useTheme } from 'next-themes';
import { Briefcase, MapPin, Send, X } from 'lucide-react';
import { FaCheckCircle, FaRocket } from 'react-icons/fa';
import { db, storage } from './../../../db/firebase'; // ✅ make sure this path matches your project
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useState } from 'react';

export default function CareersPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [showModal, setShowModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState<File | null>(null);
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const jobListings = [
    {
      title: 'WordPress Developer',
      location: 'Ahmedabad (Hybrid)',
      department: 'Engineering',
      description:
        'We’re looking for a skilled WordPress Developer to build and manage custom websites and themes using PHP, HTML, CSS, and JavaScript.',
    },
    {
      title: 'Sr. Full-Stack Developer (Node.js/React)',
      location: 'Remote (IND)',
      department: 'Software Development',
      description:
        'Join our core development team to architect full-stack web applications using Node.js, React, and MongoDB.',
    },
    {
      title: 'Product Marketing Manager',
      location: 'Ahmedabad',
      department: 'Marketing',
      description:
        'Lead positioning, messaging, and GTM strategies for our tech products. Experience with B2B SaaS preferred.',
    },
  ];

  const openModal = (role: string) => {
    setSelectedRole(role);
    setShowModal(true);
    setStatus('');
    setName('');
    setEmail('');
    setResume(null);
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !resume) {
      setStatus('Please fill out all fields.');
      return;
    }

    setLoading(true);
    setStatus('');

    try {
      // 1. Upload to Cloudinary
      const formData = new FormData();
      formData.append('file', resume);
      formData.append('upload_preset', 'TechTrio');

      const cloudinaryRes = await fetch(`https://api.cloudinary.com/v1_1/ddztecdya/auto/upload`, {
        method: 'POST',
        body: formData,
      });

      const cloudinaryData = await cloudinaryRes.json();

      if (!cloudinaryRes.ok) throw new Error(cloudinaryData.error?.message || 'Upload failed');

      const resumeURL = cloudinaryData.secure_url;

      // 2. Save form data + resume link in Firestore
      await addDoc(collection(db, 'career'), {
        name,
        email,
        role: selectedRole,
        resumeURL,
        createdAt: Timestamp.now(),
      });

      setStatus('Application submitted successfully!');
      setShowModal(false);
    } catch (error: any) {
      console.error('Submission error:', error);
      setStatus(`Submission failed: ${error.message || 'Try again later.'}`);
    } finally {
      setLoading(false);
    }
  };



  return (
    <section
      className={`pt-40 min-h-screen py-20 px-6 md:px-24 ${isDark ? 'bg-[#0B0F1C] text-white' : 'bg-white text-black'}`}
    >
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Join{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400">
            Our Team
          </span>
        </h1>
        <p className={`max-w-2xl mx-auto mt-4 text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          Be part of a dynamic and innovative startup shaping the future of smart technology.
        </p>
      </div>

      {/* Why TechTrio Section */}
      <div className={`border rounded-xl p-6 md:p-10 max-w-4xl mx-auto mb-20 ${isDark ? 'bg-[#111827] border-[#1f2937]' : 'bg-gray-100 border-gray-300'}`}>
        <h2 className="text-xl font-semibold mb-2 text-center">Why TechTrio?</h2>
        <p className={`text-center text-sm mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          Work on cutting-edge projects with talented minds. We offer growth, benefits, and a collaborative culture.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-10 text-sm text-center">
          <div>
            <FaRocket className="text-green-400 text-2xl mb-2 mx-auto" />
            <p className="font-semibold">Innovative Culture</p>
            <p className="text-xs mt-1">Drive change with creative solutions.</p>
          </div>
          <div>
            <FaCheckCircle className="text-blue-400 text-2xl mb-2 mx-auto" />
            <p className="font-semibold">Growth Opportunities</p>
            <p className="text-xs mt-1">Develop your skills and career.</p>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="max-w-4xl mx-auto mb-20">
        <h3 className="text-2xl font-bold mb-6 text-center">Current Openings</h3>
        <div className="space-y-6">
          {jobListings.map((job, idx) => (
            <div
              key={idx}
              className={`rounded-lg p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border ${isDark ? 'bg-[#111827] border-[#1f2937]' : 'bg-gray-100 border-gray-300'}`}
            >
              <div>
                <h4 className="text-lg font-bold">{job.title}</h4>
                <div className={`flex gap-4 text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                  <span className="flex items-center gap-1"><Briefcase size={14} /> {job.department}</span>
                </div>
                <p className={`text-sm mt-2 max-w-md ${isDark ? 'text-gray-500' : 'text-gray-700'}`}>
                  {job.description}
                </p>
              </div>
              <button
                onClick={() => openModal(job.title)}
                className="px-5 py-2.5 rounded-full font-semibold text-sm border-2 border-green-400 text-green-400 hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Resume Submission CTA */}
      <div className="text-center mb-10">
        <h4 className="text-xl font-semibold mb-2">Don’t See a Fit?</h4>
        <p className={`mb-6 max-w-xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          We’re always open to talent! Submit your resume and let’s explore how you can contribute to TechTrio.
        </p>
        <button
          onClick={() => openModal('General Application')}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-green-400 text-white font-semibold text-sm hover:brightness-110 transition-all duration-300"
        >
          <Send size={16} />
          Submit Your Resume
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white dark:bg-[#1e293b] rounded-xl shadow-lg max-w-md w-full p-6 relative">
            <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-gray-500 hover:text-red-500">
              <X size={20} />
            </button>
            <h2 className="text-xl font-semibold mb-4">Apply for: {selectedRole}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded px-3 py-2"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded px-3 py-2"
                required
              />
              <input
                type="file"
                accept=".pdf"
                onChange={(e) => setResume(e.target.files?.[0] || null)}
                className="w-full"
                required
              />
              {status && <p className="text-sm text-red-500">{status}</p>}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-500 to-green-400 text-white py-2 rounded-xl font-semibold hover:brightness-105 transition"
              >
                {loading ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
