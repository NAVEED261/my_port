{
  /* Import the Link component from Next.js */
}
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <div id="Projects">
      <section className="text-pink-400 bg-pink-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              MY PROJECTS
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Master TypeScript with These 12 Exciting Projects If you are on a
              journey to master TypeScript, there is no better way than diving
              into hands-on projects. Practical application of knowledge not
              only solidifies your understanding but also makes the learning
              process enjoyable. Lets explore 12 thrilling TypeScript projects
              that will not only enhance your coding skills but also bring a
              sense of accomplishment. but i explor 6 projects.
            </p>
          </div>
          <div className="flex flex-wrap -m-8">
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/picture/download.jpg")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-pink-800 bg-pink-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-red-400 mb-1">
                    CALCULATOR PROJECT
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    INQUIRER CALCULATOR
                  </h1>
                  <p className="leading-relaxed">
                    This is the Project which I have created in TypeScript.
                  </p>
                  {/* Use anchor tag for external link */}
                  <a
                    href="https://github.com/NAVEED261/QUARATER-ONE-PROJECTS/tree/main/inqurier"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View project..
                    </p>
                  </a>
                </div>
              </div>
            </div>
            {/* Other project cards */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/picture/advanture game.jpg")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-pink-800 bg-pink-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-red-400 mb-1">
                    ADVANTURE GAME PROJECT
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    ADVANTURE GAME
                  </h1>
                  <p className="leading-relaxed">
                    This is the Project which I have created in TypeScript.
                  </p>
                  {/* Use anchor tag for external link */}
                  <a
                    href="https://github.com/NAVEED261/QUARATER-ONE-PROJECTS/tree/main/ADVENTURE%20GAME"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View project..
                    </p>
                  </a>
                </div>
              </div>
            </div>
            {/* 3RD PROJECT */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/picture/ATM.jpg")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-pink-800 bg-pink-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-red-400 mb-1">
                    AUTOMIC TALLER MACHINE PROJECT
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    ATM
                  </h1>
                  <p className="leading-relaxed">
                    This is the Project which I have created in TypeScript.
                  </p>
                  {/* Use anchor tag for external link */}
                  <a
                    href="https://github.com/NAVEED261/QUARATER-ONE-PROJECTS/tree/main/ATM"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View project..
                    </p>
                  </a>
                </div>
              </div>
            </div>
            {/* 4TH PROJECT */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/picture/QUIZ.jpg")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-pink-800 bg-pink-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-red-400 mb-1">
                    QUIZ PROJECT
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    QUIZ
                  </h1>
                  <p className="leading-relaxed">
                    This is the Project which I have created in TypeScript.
                  </p>
                  {/* Use anchor tag for external link */}
                  <a
                    href="https://github.com/NAVEED261/QUARATER-ONE-PROJECTS/tree/main/QUIZ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View project..
                    </p>
                  </a>
                </div>
              </div>
            </div>
            {/* 5TH PROJECT */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/picture/TODO.jpg")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-pink-800 bg-pink-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-red-400 mb-1">
                    TO-DO LIST PROJECT
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    TO-DO
                  </h1>
                  <p className="leading-relaxed">
                    This is the Project which I have created in TypeScript.
                  </p>
                  {/* Use anchor tag for external link */}
                  <a
                    href="https://github.com/NAVEED261/QUARATER-ONE-PROJECTS/tree/main/TO%20-%20%20DO%20LIST"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View project..
                    </p>
                  </a>
                </div>
              </div>
            </div>
            {/* 6TH PROJECT */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/picture/CURRENCY CONVERTER.jpg")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-pink-800 bg-pink-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-red-400 mb-1">
                    CURRENCY CONVERTER PROJECT
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    CURRENCY CONVERT
                  </h1>
                  <p className="leading-relaxed">
                    This is the Project which I have created in TypeScript.
                  </p>
                  {/* Use anchor tag for external link */}
                  <a
                    href="https://github.com/NAVEED261/QUARATER-ONE-PROJECTS/tree/main/CURRENCY%20CONVERTER"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View project..
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
