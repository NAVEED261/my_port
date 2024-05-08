import Link from "next/link";
import { AiOutlineDownload } from "react-icons/ai";

export default function Navbar() {
  return (
    <div className="bg-white z-70 sticky top-10">
      <header className="text-sky-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <Link href={"/#Home"} className="mr-5 hover:text-gray-900">
              HOME
            </Link>
            <Link href={"#about"} className="mr-5 hover:text-gray-900">
              ABOUT
            </Link>
            <Link href={"#Skills"} className="mr-5 hover:text-gray-900">
              SKILLS
            </Link>
            <Link href={"#Projects"} className="mr-5 hover:text-gray-900">
              PROJECTS
            </Link>
            <Link href={"#Contact"} className="mr-5 hover:text-blue-900">
              CONTACT
            </Link>
          </nav>
          <div className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
            <span className="ml-3 text-xl">MY_PORTFOLIO</span>
          </div>
          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            <Link href="/cv/HAFIZ NAVEED UDDIN CV.docx">
              <button className="inline-flex items-center bg-gradient-to-r from-purple-400 to-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-gradient-to-r from-purple-500 to-pink-600 rounded-full text-white text-base mt-4 md:mt-0">
                Download cv
                <AiOutlineDownload className="text-xl ml-2" />
              </button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
