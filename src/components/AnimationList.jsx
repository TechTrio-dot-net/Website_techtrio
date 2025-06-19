// 'use client';

// import Image from 'next/image';
// import { useKeenSlider } from 'keen-slider/react';
// import 'keen-slider/keen-slider.min.css';
// import { useRef, useEffect, useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// export default function AnimationList() {
//   const timer = useRef(null);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [loaded, setLoaded] = useState(false);

//   const [sliderRef, instanceRef] = useKeenSlider({
//     loop: true,
//     slides: {
//       perView: 1,
//     },
//     slideChanged(slider) {
//       setCurrentSlide(slider.track.details.rel);
//     },
//     created() {
//       setLoaded(true);
//       startAutoSlide();
//     },
//   });

//   const startAutoSlide = () => {
//     clearAutoSlide();
//     timer.current = setInterval(() => {
//       instanceRef.current?.next();
//     }, 5000);
//   };

//   const clearAutoSlide = () => {
//     if (timer.current) clearInterval(timer.current);
//   };

//   useEffect(() => {
//     return () => clearAutoSlide();
//   }, []);

//   const banners = [
//     {
//       title: 'Smart Parking System',
//       button1: 'Book a Spot',
//       button2: 'How It Works',
//       image: '/Parking.jpg',
//     },
//     {
//       title: 'Invoice Management System (IMS)',
//       button1: 'Try IMS',
//       button2: 'View Dashboard',
//       image: '/IMS.jpg',
//     },
//     {
//       title: 'Vehicle Tracking System',
//       button1: 'Track Now',
//       button2: 'See Demo',
//       image: '/vehicle-tracking.svg',
//     },
//   ];

//   return (
//     <div className="space-y-16">
//       <section className="relative py-20 px-4 sm:px-8 bg-cover bg-center bg-no-repeat rounded-3xl overflow-hidden"
//         style={{ backgroundImage: 'url("/bg-banner.jpg")' }} // ✅ Replace with your banner image
//       >
//         <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-[#e9edfa]/80 dark:from-[#1a1a2e]/80 dark:to-[#121229]/80 z-0" />

//         <div ref={sliderRef} className="keen-slider max-w-6xl mx-auto relative z-10">
//           {banners.map((banner, index) => (
//             <div
//               key={index}
//               className="keen-slider__slide flex flex-col md:flex-row items-center justify-between gap-10 px-4 sm:px-0"
//             >
//               <div className="text-center md:text-left max-w-xl">
//                 <h2 className="text-3xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
//                   {banner.title}
//                 </h2>

//                 <div className="flex justify-center md:justify-start gap-4 flex-wrap">
//                   <button className="bg-gradient-to-r from-blue-500 to-green-400 text-white px-6 py-2 rounded-xl text-sm font-medium transition hover:opacity-90">
//                     {banner.button1}
//                   </button>
//                   <button className="bg-white text-[#1E1E4B] border border-[#1E1E4B] dark:bg-gray-900 dark:text-white px-6 py-2 rounded-xl text-sm font-medium transition hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-400 hover:text-white">
//                     {banner.button2}
//                   </button>
//                 </div>
//               </div>

//               <Image
//                 src={banner.image}
//                 alt={banner.title}
//                 width={400}
//                 height={300}
//                 className="object-contain"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Navigation Arrows */}
//         {loaded && instanceRef.current && (
//           <>
//             <button
//               onClick={() => instanceRef.current?.prev()}
//               className="absolute top-1/2 left-4 -translate-y-1/2 z-20 bg-white dark:bg-gray-800 text-black dark:text-white p-2 rounded-full shadow-md hover:scale-110 transition"
//             >
//               <ChevronLeft size={20} />
//             </button>
//             <button
//               onClick={() => instanceRef.current?.next()}
//               className="absolute top-1/2 right-4 -translate-y-1/2 z-20 bg-white dark:bg-gray-800 text-black dark:text-white p-2 rounded-full shadow-md hover:scale-110 transition"
//             >
//               <ChevronRight size={20} />
//             </button>
//           </>
//         )}

//         {/* Dots */}
//         {loaded && instanceRef.current && (
//           <div className="flex justify-center mt-6 gap-2 z-10 relative">
//             {banners.map((_, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => instanceRef.current?.moveToIdx(idx)}
//                 className={`w-3 h-3 rounded-full transition ${
//                   currentSlide === idx
//                     ? 'bg-gradient-to-r from-blue-500 to-green-400'
//                     : 'bg-gray-300 dark:bg-gray-600'
//                 }`}
//               />
//             ))}
//           </div>
//         )}
//       </section>
//     </div>
//   );
// }


'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function AnimationList() {
  const timer = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
      startAutoSlide();
    },
  });

  const startAutoSlide = () => {
    clearAutoSlide();
    timer.current = setInterval(() => {
      instanceRef.current?.next();
    }, 5000);
  };

  const clearAutoSlide = () => {
    if (timer.current) clearInterval(timer.current);
  };

  useEffect(() => {
    return () => clearAutoSlide();
  }, []);

  const banners = [
    {
      title: 'Smart Parking System',
      button1: 'Book a Spot',
      button2: 'How It Works',
      image: '/Parking.jpg',
    },
    {
      title: 'Invoice Management System (IMS)',
      button1: 'Try IMS',
      button2: 'View Dashboard',
      image: '/IMS.jpg',
    },
    {
      title: 'Vehicle Tracking System',
      button1: 'Track Now',
      button2: 'See Demo',
      image: '/tracking3.jpg',
    },
  ];

  return (
    <div className="space-y-16">
      <section className="relative h-[700px] overflow-hidden">
        <div ref={sliderRef} className="keen-slider h-full">
          {banners.map((banner, index) => (
            <div
              key={index}
              className="keen-slider__slide relative h-full bg-cover bg-center flex items-center justify-center text-center"
              style={{ backgroundImage: `url(${banner.image})` }}
            >
              {/* Overlay */}
             <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 backdrop-blur-sm" />

              {/* Content */}
              <div className="relative z-10 max-w-3xl mx-auto px-4">
                <h2 className="text-3xl md:text-6xl font-extrabold mb-6 text-white ">
                  {banner.title}
                </h2>

        <div className="flex justify-center gap-4 flex-wrap">
  <a
    href="/contact"
    className="bg-gradient-to-r from-blue-500 to-green-400 text-white px-8 py-3 rounded-xl text-sm font-semibold transition hover:opacity-90"
  >
    Contact Us for More Info
  </a>
</div>

              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        {/* {loaded && instanceRef.current && (
          <>
            <button
              onClick={() => instanceRef.current?.prev()}
              className="absolute top-1/2 left-4 -translate-y-1/2 z-20 bg-white dark:bg-gray-800 text-black dark:text-white p-2 rounded-full shadow-md hover:scale-110 transition"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => instanceRef.current?.next()}
              className="absolute top-1/2 right-4 -translate-y-1/2 z-20 bg-white dark:bg-gray-800 text-black dark:text-white p-2 rounded-full shadow-md hover:scale-110 transition"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )} */}

        {/* Dots */}
{loaded && instanceRef.current && (
  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
    {banners.map((_, idx) => (
      <button
        key={idx}
        onClick={() => instanceRef.current?.moveToIdx(idx)}
        className={`w-3 h-3 rounded-full transition ${
          currentSlide === idx
            ? 'bg-gradient-to-r from-blue-500 to-green-400'
            : 'bg-gray-300 dark:bg-gray-300'
        }`}
      />
    ))}
  </div>
)}

      </section>
    </div>
  );
}
