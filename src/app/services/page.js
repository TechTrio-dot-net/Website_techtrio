"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion"; // ✅ Import Framer Motion
import TestimonialSection from "./../../components/testimonial";
import ContactForm from "./../../components/ContactForm";

import AnimationList from "./../../components/AnimationList";
import Products from "./../../components/Products";
import ClientCarousel from "./../../components/ClientCarousel"
import TechnologiesWeUse from "./../../components/TechnologiesWeUse";
import ServicesTabs from "./../../components/ServicesTabs";
// ✅ Updated Services List with Animations

const services = [
  { icon: "🛒", title: "E-commerce", description: "The online shop where you can sell your products." },
  { icon: "🖥️", title: "Website", description: "Things like your corporate or marketing website." },
  { icon: "💻", title: "Desktop App", description: "The apps that run natively on your computer." },
  { icon: "🌍", title: "Web App", description: "The apps that run in your web browser." },
  { icon: "📱", title: "Mobile App", description: "Apps that run natively on your Android and iOS phones." },
  { icon: "📂", title: "CMS", description: "Content Management System. The system where content gets managed." },
  { icon: "☁️", title: "Cloud Solutions", description: "Scalable cloud-based solutions for businesses." }
];

export default function Services() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <main className="pt-16 min-h-screen">

      <AnimationList />



      {/* ✅ Deliverables Section - Mobile & Desktop Friendly */}
      <section className="bg-gray-100 dark:bg-black text-black dark:text-white mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="container mx-auto flex flex-col lg:flex-row lg:justify-end">

          {/* ✅ Left Section - Sticky Title with Animation (Top in Mobile View) */}
          <motion.div
            className="w-full lg:w-1/2 lg:sticky top-20 self-start text-center "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 max-w-lg">
              <span className="bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
                Deliverables.
              </span>
            </h1>
            <p className="max-w-lg text-lg md:text-xl mt-2 text-gray-600 dark:text-gray-400">
              Including but not limited to.
            </p>
          </motion.div>

          {/* ✅ Right Section - Services List (Stacked in Mobile, Grid in Desktop) */}
          <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
            {services.map((service, index) => (
              <div key={index} className="flex items-start space-x-4 md:space-x-6">
                <span className="text-3xl md:text-4xl">{service.icon}</span>
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold">{service.title}</h2>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <TechnologiesWeUse />
      {/* ✅ Products Section */}
      <section  >
        {/* <Products /> */}
        <ServicesTabs />
      </section>

      {/* ✅ Testimonial Section */}
      <TestimonialSection />
      <ClientCarousel />
      {/* ✅ Contact Form */}
      <ContactForm />

    </main>
  );
}
