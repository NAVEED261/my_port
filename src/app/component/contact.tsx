export default function Contact() {
  return (
    <div id="Contact" className="contact-container">
      <section className="contact-section text-sky-900 bg-gradient-to-r from-sky-500 to-indigo-500 body-font relative">
        <div className="container px-5 py-24 mx-auto flex lg:flex-nowrap flex-wrap">
          {/* Responsive Map Section */}
          <div className="lg:w-2/3 md:w-1/2 map-container overflow-hidden rounded-lg lg:mr-10 p-10 flex items-end justify-start relative">
          <iframe
              width="100%"
              height="400" /* Adjust height as needed */
              title="Your Business Location"
              className="absolute inset-0 z-10"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=400&hl=en&q=%C4%B0zmir+(Your%20Business%Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              style={{ filter: "grayscale(0.5) contrast(1.2) opacity(0.7)" }} /* Adjust filter for aesthetics */
            />
            <div className="bg-blue-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/3 md:w-1/2 contact-info flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                <h2 className="title-font font-semibold text-pink-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1 bg-white">
                  House No. R-98,##### 5c-2, North karachi
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-pink-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-red-400 leading-relaxed bg-sky-900">
                  hnaveed264@gmail.com
                </a>
                <h2 className="title-font font-semibold text-pink-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed bg-white">
                  0300-2385209 <br />
                  0332-3426523
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="inline-flex text-sky-900 bg-sky-900-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-900-600 rounded text-lg">
              QURIES:
            </h2>
            <p className="leading-relaxed mb-5">
              express your opinion and any queries you may have
            </p>
            <form action="https://formspree.io/f/mqkrnvoe" method="POST">
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-large text-teal-600-400"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-red-800 rounded border border-sky-900-700 focus:border-sky-900-500 focus:ring-2 focus:ring-gray-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-large text-sky-900-400"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-red-800 rounded border border-sky-900-700 focus:border-blue-500 focus:ring-2 focus:ring-red-900 text-base outline-none text-red-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>

              <div className="relative mb-4">
                <label
                  htmlFor="subject"
                  className="leading-7 text-large text-sky-900-400"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full bg-red-800 rounded border border-sky-900-700 focus:border-blue-500 focus:ring-2 focus:ring-red-900 text-base outline-none text-red-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>

              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-large text-sky-900-400"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-red-800 rounded border border-sky-900-700 focus:border-sky-900-500 focus:ring-2 focus:ring-red-900 h-32 text-base outline-none text-pink-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  defaultValue={""}
                  required
                />
              </div>
              <button className="text-sky-900 bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-900-600 rounded text-lg">
                SENT MESSAGE
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
