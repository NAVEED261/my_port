"use client"
import Image from "next/image";
import Link from "next/link";
export default function About() {
  const handleViewCV = () => {
    // Replace the link below with the actual URL of your CV
    window.open('https://example.com/your-cv.pdf', '_blank');
  };

  return (
    <div id="about">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded mx-auto"
              alt="hero"
              src={require("../../../public/picture/NAVEED-removebg-preview.jpg")}
              width={300}
              height={300}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Me
            </h1>
            <p className="mb-8 leading-relaxed">Phone Number: 0300-2385209</p>
            <p className="mb-8 leading-relaxed">
              My name is Hafiz Naveed Uddin, son of Nizam Uddin, residing in Karachi. First of
              all, I am a Hifzul-Quran from Wifaqul-Madaris Pakistan and I completed my Bachelor
              of Commerce from Karachi University in 2011. I have served in the Government
              Sector for 10 years as a Stenographer and also spent some time in the Private
              Sector at Unilever Pakistan as a Sales Officer.
              <br />
              <br />
              I have expanded my expertise into new technological and engineering domains.
              Currently, I am undertaking courses in Cloud, Artificial Intelligence, and
              Engineering through PIAIC, as well as from the prestigious Governor Initiative AI
              and Cloud Computing.
            </p>
            <div className="flex justify-center">
              <Link href={"/public/picture/NAVEED.jpg"}>
              <button
                className="inline-flex text-white bg-sedimen-500 border-0 py-2 px-6 focus:outline-none hover:bg-sedimen-600 rounded text-lg"
                onClick={handleViewCV}
              >
                View CV
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
