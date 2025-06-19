'use client';

export default function Marquee() {
  const leftWords = ["Quick", "Efficient", "Useful"];
  const rightWords = ["Flexible", "Security", "Automation"];

  // Reusable Marquee Component
  const MarqueeLine = ({ words, direction, circleColors }) => {
    return (
      <div className="flex w-[200%] py-2 md:py-4"> {/* Reduced mobile padding */}
        <div className={`flex animate-marquee-${direction} flex-1`}>
          {[...words, ...words].map((word, i) => (
            <div key={`${direction}-${i}`} className="flex-shrink-0 flex items-center mx-4 md:mx-12"> {/* Reduced mobile margin */}
              {direction === 'right' && (
                <div className={`mr-4 md:mr-12 w-6 h-6 md:w-12 md:h-12 rounded-full ${circleColors}`} />
              )}
              <h1 className="text-xl md:text-5xl font-bold whitespace-nowrap"> {/* Smaller mobile text */}
                {word}
              </h1>
              {direction === 'left' && (
                <div className={`ml-4 md:ml-12 w-6 h-6 md:w-12 md:h-12 rounded-full ${circleColors}`} />
              )}
            </div>
          ))}
        </div>
        <div className={`flex animate-marquee-${direction} flex-1`} aria-hidden="true">
          {[...words, ...words].map((word, i) => (
            <div key={`${direction}-mirror-${i}`} className="flex-shrink-0 flex items-center mx-4 md:mx-12">
              {direction === 'right' && (
                <div className={`mr-4 md:mr-12 w-6 h-6 md:w-12 md:h-12 rounded-full ${circleColors}`} />
              )}
              <h1 className="text-xl md:text-5xl font-bold whitespace-nowrap">
                {word}
              </h1>
              {direction === 'left' && (
                <div className={`ml-4 md:ml-12 w-6 h-6 md:w-12 md:h-12 rounded-full ${circleColors}`} />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="marqueecontainer w-full h-auto min-h-[50vh] md:h-screen relative overflow-hidden mt-4 md:mt-10"> {/* Adjusted mobile height */}
      {/* Fixed Heading - Mobile Optimized */}
      <div className="heading absolute top-[5%] md:top-[7%] left-1/2 -translate-x-1/2 w-full px-4 md:w-96 text-center z-20">
        <h1 className="text-2xl md:text-2xl font-semibold text-gray-900 dark:text-white leading-snug tracking-wide"> {/* Unified mobile text size */}
          Crafting a new<span className="bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent"> paradigm of parking</span>, one that is
        </h1>
      </div>

      {/* Marquee Lines with tighter mobile spacing */}
      <div className="absolute top-[40%] md:top-1/4 w-full space-y-2 md:space-y-8 z-10"> {/* Reduced mobile spacing */}
        <MarqueeLine
          words={leftWords}
          direction="left"
          circleColors="bg-gradient-to-r from-blue-400 to-purple-500"
        />
        <MarqueeLine
          words={rightWords}
          direction="right"
          circleColors="bg-gradient-to-r from-amber-400 to-pink-500"
        />
        <MarqueeLine
          words={leftWords}
          direction="left"
          circleColors="bg-gradient-to-r from-blue-400 to-purple-500"
        />
        <MarqueeLine
          words={rightWords}
          direction="right"
          circleColors="bg-gradient-to-r from-amber-400 to-pink-500"
        />
      </div>
    </div>
  );
}