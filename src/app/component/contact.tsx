export default function Contact() {
    return (
      <div id="Contact">
        <section className="text-red-400 bg-red-900 body-font relative">
          <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-red-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                title="map"
                className="absolute inset-0"
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                scrolling="no"
                src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                style={{ filter: "redscale(1) contrast(1.2) opacity(0.16)" }}
              />
              <div className="bg-red-900 relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1 bg-white">
                    House No. R-98,##### 5c-2, North karachi
                  </p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                    EMAIL
                  </h2>
                  <a className="text-red-400 leading-relaxed bg-white">
                    hnaveed264@gmail.com
                  </a>
                  <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
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
              <h2 className="inline-flex text-white bg-white-500 border-0 py-2 px-6 focus:outline-none hover:bg-white-600 rounded text-lg">
                QURIES:
              </h2>
              <p className="leading-relaxed mb-5">
                express your opinion and any queries you may have
              </p>
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-red-400">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-red-800 rounded border border-white-700 focus:border-white-500 focus:ring-2 focus:ring-red-900 text-base outline-none text-red-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-red-400">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-red-800 rounded border border-white-700 focus:border-blue-500 focus:ring-2 focus:ring-red-900 text-base outline-none text-red-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-red-400"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-red-800 rounded border border-white-700 focus:border-white-500 focus:ring-2 focus:ring-red-900 h-32 text-base outline-none text-red-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  defaultValue={""}
                />
              </div>
              <button className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-white-600 rounded text-lg">
                SENT MESSAGE
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }
  