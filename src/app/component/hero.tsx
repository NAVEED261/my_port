// THIS IS MY PORTFOLIO WHICH IS COMPLETED HELP OF NEXT.JS . TAILWIND CSS AND ABOVE LIBRARY LIKE AS TAILBLOCK,TRANSFORM HTML TO JSX, TYPEWRITER EFFECT, REACT ICON
"use client"
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="text-gpurple-600 body-font bg-fixed bg-cover bg-center custom-image">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gpurple-900">
            I AM
            <br className="hidden lg:inline-block" />
            <Typewriter
              options={{
                strings: [
                  "HTML DEVELOPER",
                  "CSS DEVELOPER",
                  "JAVASCRIPT DEVELOPER",
                  "TYPESCRIPT DEVELOPER",
                  "NEXT JS DEVELOPER",
                  "IN SHORT WEB DEVELOPER",
                          "AND",
                  "STENOGRAPHER"
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="w-[100px] h-[2px] bg-blue-900"></div>
          <p className="mb-8 leading-relaxed">
            My name is Hafiz Naveed Uddin. I am a highly dedicated and
            hardworking individual who harbors a deep passion for my work. A
            significant aspect of my life is the memorization of the Quran, and
            I am also proficient in shorthand as a stenographer. In addition to
            my linguistic skills in Urdu, English, and shorthand, I have
            expanded my expertise into new technological and engineering
            domains. Currently, I am undertaking courses in Cloud, Artificial
            Intelligence, and Compute Engineering through PIAIC, as well as from
            the prestigious Governor House Karachi.
          </p>
          <div className="flex justify-center">
            <Link href={"#Contact"}>
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              CONTACT
            </button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Image
  className="object-cover rounded"
  alt="hero"
  src={require("../../../public/picture/NAVEED-removebg-preview.jpg")}
  width={600}
  height={100}
  style={{ objectPosition: '50% 50%' }} // Set object position to right
/>

        </div>
      </div>
    </section>
  );
}
