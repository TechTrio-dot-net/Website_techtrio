  "use client";
  import Image from "next/image";
  import ThemeToggle from "./ThemeToggle";

  export default function Hero() {
    return (
      <>
        <div className="marqueecontainer w-full h-screen relative overflow-hidden mt-10">
          <div className="heading absolute top-[7%] left-1/2 -translate-x-1/2 w-full px-4 md:w-96 text-center">
            <h1 className="text-lg md:text-2xl font-semibold text-gray-900 dark:text-white leading-snug tracking-wide">
              Crafting a new<span className="bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent"> paradigm of parking</span>, one that is
            </h1>
          </div>
{/* <h1 className="text-center text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          Trusted by <br />
          <span className="bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
            Industry Leaders
          </span>
        </h1> */}


          {/* hero animation */}
          <div className="slidesm absolute  md:scale-[1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-[100%] space-y-6 md:space-y-8">
            {/* First Row */}
            <div className="overflow-hidden relative">
              <div className="flex whitespace-nowrap animate-[marquee_25s_linear_infinite] px-2 md:px-0">
                <div className="row lft w-full flex items-center justify-evenly gap-1 md:gap-6 min-w-full">
                  <div className="elem flex items-center gap-1 md:gap-6">
                    <h1 className="font-semibold font-['Pp_Neue_Machina_Inktrap'] text-2xl md:text-6xl text-gray-900 dark:text-white">flexible</h1>
                    <div className="imgdiv w-[2rem] h-[2rem] md:w-[3.5rem] md:h-[3.5rem] rounded-full overflow-hidden ">
                      <Image width={100} height={100} className="w-full h-full object-cover" src="https://res.cloudinary.com/ddztecdya/image/upload/v1739616077/jjcazg2sgasbz518q5ki.webp" alt="" />
                    </div>
                  </div>
                  <div className="elem flex items-center gap-1 md:gap-6">
                    <h1 className="font-semibold font-['Pp_Neue_Machina_Inktrap'] text-2xl md:text-6xl text-gray-900 dark:text-white">useful</h1>
                    <div className="imgdiv w-[2rem] h-[2rem] md:w-[3.5rem] md:h-[3.5rem] rounded-full overflow-hidden ">
                      <Image width={100} height={100} className="w-full h-full object-cover" src="https://res.cloudinary.com/ddztecdya/image/upload/v1739616077/agcsxcmnxvurhckjxdjh.webp" alt="" />
                    </div>
                  </div>
                  <div className="elem flex items-center gap-1 md:gap-6">
                    <h1 className="font-semibold font-['Pp_Neue_Machina_Inktrap'] text-2xl md:text-6xl text-gray-900 dark:text-white">quick</h1>
                    <div className="imgdiv w-[2rem] h-[2rem] md:w-[3.5rem] md:h-[3.5rem] rounded-full overflow-hidden ">
                      <Image width={100} height={100} className="w-full h-full object-cover" src="https://res.cloudinary.com/ddztecdya/image/upload/v1739616077/cfdqu8fzqphkrboznc9t.webp" alt="" />
                    </div>
                  </div>
                </div>
                <div className="row lft w-full flex items-center justify-evenly gap-1 md:gap-6 min-w-full">
                  {/* Duplicate of the above row for infinite scroll effect */}
                  <div className="elem flex items-center gap-1 md:gap-6">
                    <h1 className="font-semibold font-['Pp_Neue_Machina_Inktrap'] text-2xl md:text-6xl text-gray-900 dark:text-white">flexible</h1>
                    <div className="imgdiv w-[2rem] h-[2rem] md:w-[3.5rem] md:h-[3.5rem] rounded-full overflow-hidden ">
                      <Image width={100} height={100} className="w-full h-full object-cover" src="https://res.cloudinary.com/ddztecdya/image/upload/v1739616077/xwmowbgvkhhjn5m3t7tx.webp" alt="" />
                    </div>
                  </div>
                  <div className="elem flex items-center gap-1 md:gap-6">
                    <h1 className="font-semibold font-['Pp_Neue_Machina_Inktrap'] text-2xl md:text-6xl text-gray-900 dark:text-white">useful</h1>
                    <div className="imgdiv w-[2rem] h-[2rem] md:w-[3.5rem] md:h-[3.5rem] rounded-full overflow-hidden ">
                      <Image width={100} height={100} className="w-full h-full object-cover" src="https://res.cloudinary.com/ddztecdya/image/upload/v1739616077/nh1bqrr6hhpgp0kk5ryv.webp" alt="" />
                    </div>
                  </div>
                  <div className="elem flex items-center gap-1 md:gap-6">
                    <h1 className="font-semibold font-['Pp_Neue_Machina_Inktrap'] text-2xl md:text-6xl text-gray-900 dark:text-white">quick</h1>
                    <div className="imgdiv w-[2rem] h-[2rem] md:w-[3.5rem] md:h-[3.5rem] rounded-full overflow-hidden ">
                      <Image width={100} height={100} className="w-full h-full object-cover" src="https://res.cloudinary.com/ddztecdya/image/upload/v1739616077/k9voseu6vojtlnuunxma.webp" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="overflow-hidden relative">
              <div className="flex whitespace-nowrap animate-[marquee-reverse_20s_linear_infinite] px-2 md:px-0">
                <div className="row rgt flex flex-nowrap items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 min-w-max">
  <div className="elem flex items-center gap-1 sm:gap-3 md:gap-4">
    <h1 className="font-semibold font-['Pp_Neue_Machina_Inktrap'] text-2xl md:text-6xl text-gray-900 dark:text-white">
      efficient
    </h1>
    <div className="imgdiv w-[2rem] h-[2rem] md:w-[3.5rem] md:h-[3.5rem] rounded-full overflow-hidden">
      <Image
        width={100}
        height={100}
        className="w-full h-full object-cover"
        src="https://res.cloudinary.com/ddztecdya/image/upload/v1739616077/jjcazg2sgasbz518q5ki.webp"
        alt=""
      />
    </div>
  </div>

  <div className="elem flex items-center gap-1 sm:gap-3 md:gap-4">
    <h1 className="font-semibold font-['Pp_Neue_Machina_Inktrap'] text-2xl md:text-6xl text-gray-900 dark:text-white">
      security
    </h1>
    <div className="imgdiv w-[2rem] h-[2rem] md:w-[3.5rem] md:h-[3.5rem] rounded-full overflow-hidden">
      <Image
        width={100}
        height={100}
        className="w-full h-full object-cover"
        src="https://res.cloudinary.com/ddztecdya/image/upload/v1739616077/agcsxcmnxvurhckjxdjh.webp"
        alt=""
      />
    </div>
  </div>

  <div className="elem flex items-center gap-1 sm:gap-3 md:gap-4">
    <h1 className="font-semibold font-['Pp_Neue_Machina_Inktrap'] text-2xl md:text-6xl text-gray-900 dark:text-white">
      automation
    </h1>
    <div className="imgdiv w-[2rem] h-[2rem] md:w-[3.5rem] md:h-[3.5rem] rounded-full overflow-hidden">
      <Image
        width={100}
        height={100}
        className="w-full h-full object-cover"
        src="https://res.cloudinary.com/ddztecdya/image/upload/v1739616077/cfdqu8fzqphkrboznc9t.webp"
        alt=""
      />
    </div>
  </div>
</div>

                <div className="row rgt w-full flex items-center justify-evenly gap-1 md:gap-6 min-w-full">
                  {/* Duplicate of the above row for infinite scroll effect */}
                  <div className="elem flex items-center gap-1 md:gap-6">
                    <h1 className="font-semibold font-['Pp_Neue_Machina_Inktrap'] text-2xl md:text-6xl text-gray-900 dark:text-white">efficient</h1>
                    <div className="imgdiv w-[2rem] h-[2rem] md:w-[3.5rem] md:h-[3.5rem] rounded-full overflow-hidden ">
                      <Image width={100} height={100} className="w-full h-full object-cover" src="https://res.cloudinary.com/ddztecdya/image/upload/v1739616077/xwmowbgvkhhjn5m3t7tx.webp" alt="" />
                    </div>
                  </div>
                  <div className="elem flex items-center gap-1 md:gap-6">
                    <h1 className="font-semibold font-['Pp_Neue_Machina_Inktrap'] text-2xl md:text-6xl text-gray-900 dark:text-white">security</h1>
                    <div className="imgdiv w-[2rem] h-[2rem] md:w-[3.5rem] md:h-[3.5rem] rounded-full overflow-hidden ">
                      <Image width={100} height={100} className="w-full h-full object-cover" src="https://res.cloudinary.com/ddztecdya/image/upload/v1739616077/nh1bqrr6hhpgp0kk5ryv.webp" alt="" />
                    </div>
                  </div>
                  <div className="elem flex items-center gap-1 md:gap-6">
                    <h1 className="font-semibold font-['Pp_Neue_Machina_Inktrap'] text-2xl md:text-6xl text-gray-900 dark:text-white">automation</h1>
                    <div className="imgdiv w-[2rem] h-[2rem] md:w-[3.5rem] md:h-[3.5rem] rounded-full overflow-hidden ">
                      <Image width={100} height={100} className="w-full h-full object-cover" src="https://res.cloudinary.com/ddztecdya/image/upload/v1739616077/k9voseu6vojtlnuunxma.webp" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Third Row */}
            <div className="overflow-hidden relative">
              <div className="flex whitespace-nowrap animate-[marquee_25s_linear_infinite] px-2 md:px-0">
                <div className="row lft w-full flex items-center justify-evenly gap-1 md:gap-6 min-w-full">
                  <div className="elem flex items-center gap-1 md:gap-6">
                    <h1 className="font-semibold font-['Pp_Neue_Machina_Inktrap'] text-2xl md:text-6xl text-gray-900 dark:text-white">flexible</h1>
                    <div className="imgdiv w-[2rem] h-[2rem] md:w-[3.5rem] md:h-[3.5rem] rounded-full overflow-hidden ">
                      <Image width={100} height={100} className="w-full h-full object-cover" src="https://res.cloudinary.com/ddztecdya/image/upload/v1739616077/jjcazg2sgasbz518q5ki.webp" alt="" />
                    </div>
                  </div>
                  <div className="elem flex items-center gap-1 md:gap-6">
                    <h1 className="font-semibold font-['Pp_Neue_Machina_Inktrap'] text-2xl md:text-6xl text-gray-900 dark:text-white">useful</h1>
                    <div className="imgdiv w-[2rem] h-[2rem] md:w-[3.5rem] md:h-[3.5rem] rounded-full overflow-hidden ">
                      <Image width={100} height={100} className="w-full h-full object-cover" src="https://res.cloudinary.com/ddztecdya/image/upload/v1739616077/agcsxcmnxvurhckjxdjh.webp" alt="" />
                    </div>
                  </div>
                  <div className="elem flex items-center gap-1 md:gap-6">
                    <h1 className="font-semibold font-['Pp_Neue_Machina_Inktrap'] text-2xl md:text-6xl text-gray-900 dark:text-white">quick</h1>
                    <div className="imgdiv w-[2rem] h-[2rem] md:w-[3.5rem] md:h-[3.5rem] rounded-full overflow-hidden ">
                      <Image width={100} height={100} className="w-full h-full object-cover" src="https://res.cloudinary.com/ddztecdya/image/upload/v1739616077/cfdqu8fzqphkrboznc9t.webp" alt="" />
                    </div>
                  </div>
                </div>
                <div className="row lft w-full flex items-center justify-evenly gap-1 md:gap-6 min-w-full">
                  {/* Duplicate of the above row for infinite scroll effect */}
                  <div className="elem flex items-center gap-1 md:gap-6">
                    <h1 className="font-semibold font-['Pp_Neue_Machina_Inktrap'] text-2xl md:text-6xl text-gray-900 dark:text-white">flexible</h1>
                    <div className="imgdiv w-[2rem] h-[2rem] md:w-[3.5rem] md:h-[3.5rem] rounded-full overflow-hidden ">
                      <Image width={100} height={100} className="w-full h-full object-cover" src="https://res.cloudinary.com/ddztecdya/image/upload/v1739616077/xwmowbgvkhhjn5m3t7tx.webp" alt="" />
                    </div>
                  </div>
                  <div className="elem flex items-center gap-1 md:gap-6">
                    <h1 className="font-semibold font-['Pp_Neue_Machina_Inktrap'] text-2xl md:text-6xl text-gray-900 dark:text-white">useful</h1>
                    <div className="imgdiv w-[2rem] h-[2rem] md:w-[3.5rem] md:h-[3.5rem] rounded-full overflow-hidden ">
                      <Image width={100} height={100} className="w-full h-full object-cover" src="https://res.cloudinary.com/ddztecdya/image/upload/v1739616077/nh1bqrr6hhpgp0kk5ryv.webp" alt="" />
                    </div>
                  </div>
                  <div className="elem flex items-center gap-1 md:gap-6">
                    <h1 className="font-semibold font-['Pp_Neue_Machina_Inktrap'] text-2xl md:text-6xl text-gray-900 dark:text-white">quick</h1>
                    <div className="imgdiv w-[2rem] h-[2rem] md:w-[3.5rem] md:h-[3.5rem] rounded-full overflow-hidden ">
                      <Image width={100} height={100} className="w-full h-full object-cover" src="https://res.cloudinary.com/ddztecdya/image/upload/v1739616077/k9voseu6vojtlnuunxma.webp" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Fourth Row */}
            <div className="overflow-hidden relative">
              <div className="flex whitespace-nowrap animate-[marquee-reverse_20s_linear_infinite] px-2 md:px-0">
                <div className="row rgt w-full flex items-center justify-evenly gap-1 md:gap-6 min-w-full">
                  <div className="elem flex items-center gap-1 md:gap-6">
                    <h1 className="font-semibold font-['Pp_Neue_Machina_Inktrap'] text-2xl md:text-6xl text-gray-900 dark:text-white">efficient</h1>
                    <div className="imgdiv w-[2rem] h-[2rem] md:w-[3.5rem] md:h-[3.5rem] rounded-full overflow-hidden ">
                      <Image width={100} height={100} className="w-full h-full object-cover" src="https://res.cloudinary.com/ddztecdya/image/upload/v1739616077/jjcazg2sgasbz518q5ki.webp" alt="" />
                    </div>
                  </div>
                  <div className="elem flex items-center gap-1 md:gap-6">
                    <h1 className="font-semibold font-['Pp_Neue_Machina_Inktrap'] text-2xl md:text-6xl text-gray-900 dark:text-white">security</h1>
                    <div className="imgdiv w-[2rem] h-[2rem] md:w-[3.5rem] md:h-[3.5rem] rounded-full overflow-hidden ">
                      <Image width={100} height={100} className="w-full h-full object-cover" src="https://res.cloudinary.com/ddztecdya/image/upload/v1739616077/agcsxcmnxvurhckjxdjh.webp" alt="" />
                    </div>
                  </div>
                  <div className="elem flex items-center gap-1 md:gap-6">
                    <h1 className="font-semibold font-['Pp_Neue_Machina_Inktrap'] text-2xl md:text-6xl text-gray-900 dark:text-white">automation</h1>
                    <div className="imgdiv w-[2rem] h-[2rem] md:w-[3.5rem] md:h-[3.5rem] rounded-full overflow-hidden ">
                      <Image width={100} height={100} className="w-full h-full object-cover" src="https://res.cloudinary.com/ddztecdya/image/upload/v1739616077/cfdqu8fzqphkrboznc9t.webp" alt="" />
                    </div>
                  </div>
                </div>
                <div className="row rgt w-full flex items-center justify-evenly gap-1 md:gap-6 min-w-full">
                  {/* Duplicate of the above row for infinite scroll effect */}
                  <div className="elem flex items-center gap-1 md:gap-6">
                    <h1 className="font-semibold font-['Pp_Neue_Machina_Inktrap'] text-2xl md:text-6xl text-gray-900 dark:text-white">efficient</h1>
                    <div className="imgdiv w-[2rem] h-[2rem] md:w-[3.5rem] md:h-[3.5rem] rounded-full overflow-hidden ">
                      <Image width={100} height={100} className="w-full h-full object-cover" src="https://res.cloudinary.com/ddztecdya/image/upload/v1739616077/xwmowbgvkhhjn5m3t7tx.webp" alt="" />
                    </div>
                  </div>
                  <div className="elem flex items-center gap-1 md:gap-6">
                    <h1 className="font-semibold font-['Pp_Neue_Machina_Inktrap'] text-2xl md:text-6xl text-gray-900 dark:text-white">security</h1>
                    <div className="imgdiv w-[2rem] h-[2rem] md:w-[3.5rem] md:h-[3.5rem] rounded-full overflow-hidden ">
                      <Image width={100} height={100} className="w-full h-full object-cover" src="https://res.cloudinary.com/ddztecdya/image/upload/v1739616077/nh1bqrr6hhpgp0kk5ryv.webp" alt="" />
                    </div>
                  </div>
                  <div className="elem flex items-center gap-1 md:gap-6">
                    <h1 className="font-semibold font-['Pp_Neue_Machina_Inktrap'] text-2xl md:text-6xl text-gray-900 dark:text-white">automation</h1>
                    <div className="imgdiv w-[2rem] h-[2rem] md:w-[3.5rem] md:h-[3.5rem] rounded-full overflow-hidden ">
                      <Image width={100} height={100} className="w-full h-full object-cover" src="https://res.cloudinary.com/ddztecdya/image/upload/v1739616077/k9voseu6vojtlnuunxma.webp" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* fifth row */}
            <div className="overflow-hidden relative">
              <div className="flex whitespace-nowrap animate-[marquee_25s_linear_infinite] px-2 md:px-0">
                <div className="row lft w-full flex items-center justify-evenly gap-1 md:gap-6 min-w-full">
                  <div className="elem flex items-center gap-1 md:gap-6">
                    <h1 className="font-semibold font-['Pp_Neue_Machina_Inktrap'] text-2xl md:text-6xl text-gray-900 dark:text-white">flexible</h1>
                    <div className="imgdiv w-[2rem] h-[2rem] md:w-[3.5rem] md:h-[3.5rem] rounded-full overflow-hidden ">
                      <Image width={100} height={100} className="w-full h-full object-cover" src="https://res.cloudinary.com/ddztecdya/image/upload/v1739616077/jjcazg2sgasbz518q5ki.webp" alt="" />
                    </div>
                  </div>
                  <div className="elem flex items-center gap-1 md:gap-6">
                    <h1 className="font-semibold font-['Pp_Neue_Machina_Inktrap'] text-2xl md:text-6xl text-gray-900 dark:text-white">useful</h1>
                    <div className="imgdiv w-[2rem] h-[2rem] md:w-[3.5rem] md:h-[3.5rem] rounded-full overflow-hidden ">
                      <Image width={100} height={100} className="w-full h-full object-cover" src="https://res.cloudinary.com/ddztecdya/image/upload/v1739616077/agcsxcmnxvurhckjxdjh.webp" alt="" />
                    </div>
                  </div>
                  <div className="elem flex items-center gap-1 md:gap-6"> 
                    <h1 className="font-semibold font-['Pp_Neue_Machina_Inktrap'] text-2xl md:text-6xl text-gray-900 dark:text-white">quick</h1>
                    <div className="imgdiv w-[2rem] h-[2rem] md:w-[3.5rem] md:h-[3.5rem] rounded-full overflow-hidden ">
                      <Image width={100} height={100} className="w-full h-full object-cover" src="https://res.cloudinary.com/ddztecdya/image/upload/v1739616077/cfdqu8fzqphkrboznc9t.webp" alt="" />
                    </div>
                  </div>
                </div>
                <div className="row lft w-full flex items-center justify-evenly gap-1 md:gap-6 min-w-full">
                  {/* Duplicate of the above row for infinite scroll effect */}
                  <div className="elem flex items-center gap-1 md:gap-6">
                    <h1 className="font-semibold font-['Pp_Neue_Machina_Inktrap'] text-2xl md:text-6xl text-gray-900 dark:text-white">flexible</h1>
                    <div className="imgdiv w-[2rem] h-[2rem] md:w-[3.5rem] md:h-[3.5rem] rounded-full overflow-hidden ">
                      <Image width={100} height={100} className="w-full h-full object-cover" src="https://res.cloudinary.com/ddztecdya/image/upload/v1739616077/xwmowbgvkhhjn5m3t7tx.webp" alt="" />
                    </div>
                  </div>
                  <div className="elem flex items-center gap-1 md:gap-6">
                    <h1 className="font-semibold font-['Pp_Neue_Machina_Inktrap'] text-2xl md:text-6xl text-gray-900 dark:text-white">useful</h1>
                    <div className="imgdiv w-[2rem] h-[2rem] md:w-[3.5rem] md:h-[3.5rem] rounded-full overflow-hidden ">
                      <Image width={100} height={100} className="w-full h-full object-cover" src="https://res.cloudinary.com/ddztecdya/image/upload/v1739616077/nh1bqrr6hhpgp0kk5ryv.webp" alt="" />
                    </div>
                  </div>
                  <div className="elem flex items-center gap-1 md:gap-6">
                    <h1 className="font-semibold font-['Pp_Neue_Machina_Inktrap'] text-2xl md:text-6xl text-gray-900 dark:text-white">quick</h1>
                    <div className="imgdiv w-[2rem] h-[2rem] md:w-[3.5rem] md:h-[3.5rem] rounded-full overflow-hidden ">
                      <Image width={100} height={100} className="w-full h-full object-cover" src="https://res.cloudinary.com/ddztecdya/image/upload/v1739616077/k9voseu6vojtlnuunxma.webp" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }