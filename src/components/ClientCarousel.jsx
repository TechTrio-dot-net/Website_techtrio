"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ClientLogosCarousel() {
  const logos = [
    "https://res.cloudinary.com/dob666wa0/image/upload/v1744742600/shivshakti_xguzmn.jpg",
    "https://res.cloudinary.com/dob666wa0/image/upload/v1744742599/HQT_Emboss_Logo_odzfxa.png",
    "https://res.cloudinary.com/dob666wa0/image/upload/v1744742599/DEV_Emboss_nfcvxk.png",
    "/Adani_logo_2012.svg.png",
    "/significadotco_logo.jpeg",
    "/csivvn_logo.jpeg",
    "/LOGO-1.webp",
    "/significo_health_logo.jpeg",
    "/TalentAchivers.png",
    "/UC-LOGO-2.png",
    "/Epitailo Logo.png"
  ];

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) {
        setTheme(storedTheme);
      } else {
        setTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      }

      const handleThemeChange = () => {
        setTheme(localStorage.getItem("theme") || "light");
      };

      window.addEventListener("storage", handleThemeChange);
      return () => window.removeEventListener("storage", handleThemeChange);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full py-20 px-6 transition-colors duration-300">
      <div className="w-full max-w-6xl">
        <h1 className="text-center text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          Trusted by <br />
          <span className="bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
            Industry Leaders
          </span>
        </h1>
        <p
          className={`text-center text-lg md:text-xl max-w-3xl mx-auto mb-10 ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          We partner with a diverse range of clients to deliver innovative solutions and drive their success.
        </p>

        <div className="relative flex w-full overflow-hidden h-36 md:h-40 rounded-lg py-8 bg-opacity-50">
          <div className="flex min-w-max animate-scroll space-x-24">
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="relative w-44 h-28 md:w-52 md:h-32 flex-shrink-0">
                <Image
                  src={logo}
                  alt={`Client ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100px, 200px"
                  style={{ objectFit: "contain" }}
                  priority={index < 3}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 80s linear infinite;
        }
      `}</style>
    </div>
  );
}
