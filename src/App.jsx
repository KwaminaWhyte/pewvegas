import { useState } from "react";
import Navigation from "./component/Navigation";
import Footer from "./component/Footer";
import image from "./assets/annie-spratt-QckxruozjRg-unsplash.jpg";

const services = [
  {
    id: 1,
    name: "Software Development",
    icon: "far fa-globe",
    description:
      "Ecommerce Platform, Website Design and Development, Mobile Apps and Stand-alone Application Development",
    list: ["item 1", "item 2", "item 3"],
  },
  {
    id: 2,
    name: "Smart Home Integrations",
    icon: "far fa-cogs",
    description:
      "Home Assistant, Alexa, Homebridge, Siri, Google Assistant, Home Media Servers, Personal Backup Servers.",
  },
  {
    id: 3,
    name: "Consultancy Hardware and Networking",
    icon: "far fa-desktop",
    description:
      "VPN Setup, Network setup and Architecture, Security and Access Controls",
  },
];
function App() {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <img
        src={image}
        className="w-screen object-cover h-screen fixed -z-50"
        alt=""
        srcset=""
      />

      <div
        id="home"
        className="min-h-screen w-full overflow-hidden pt-16 flex md:flex-row flex-col bg-black/60 items-center"
      >
        <section className="flex flex-col w-[94%] mt-[30%] md:mt-5  md:w-1/2 md:ml-[13%]">
          <h1 className="md:text-6xl font-bold text-3xl text-white">
            PEW VEGAS SOLUTIONS COMPANY
          </h1>

          <p className="my-11 text-lg text-white w-full">
            We provide effective and reliable information technology solutions
            to businesses, organizations, and Government agencies to connect
            with clients, integrate with vendors, and empower employees to work
            to their fullest potential.
          </p>

          <a
            href="#contact"
            className="py-4 px-11 border text-white border-white mr-auto font-semibold hover:bg-white hover:text-black transition duration-300 ease-in-out"
          >
            Contact Us
          </a>
        </section>

        <div className="mt-auto mb-12 flex">
          <a href="#" className="text-transparent">
            <img
              src="https://i.pinimg.com/originals/a2/5f/4f/a25f4f58938bbe61357ebca42d23866f.png"
              alt=""
              className="w-8 h-8"
            />
          </a>

          <a href="#" className="text-transparent mx-5">
            <img
              src="https://th.bing.com/th/id/R.3f7189662f19f8318fc75252deee723a?rik=Qa956Np1tp8Zcg&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f06%2fTwitter-Logo.png&ehk=6ekNd2ZmhpvFDGRZF19QcumP9fb8pZRkwrbFbK%2bpULA%3d&risl=&pid=ImgRaw&r=0"
              alt=""
              className="w-8 h-8"
            />
          </a>

          <a href="#" className="text-transparent">
            <img
              src="https://th.bing.com/th/id/R.c3fcc390427d68b89647e834adf7fc87?rik=5W%2fa9g9fys8WDg&pid=ImgRaw&r=0"
              alt=""
              className="w-8 h-8"
            />
          </a>
        </div>
      </div>

      <div
        class="dark:bg-gray-800 w-screen bg-gray-100 text-gray-900 min-h-screen"
        id="services"
      >
        <section class="flex flex-col w-full md:w-[90%] mx-auto pt-16">
          <div class="m-9 w-full md:w-full">
            <p
              class="text-red-600 dark:text-red-400 text-lg font-poppins"
              data-aos="fade-up"
            >
              We Work for Your Best Experience
            </p>
            <h2
              class="text-5xl dark:text-white font-bold my-4 font-poppins"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Our Services
            </h2>
            <p
              class="dark:text-white text-lg w-1/2 font-quicksand"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              We provide best ever services for your great experience. We make
              all efforts for the revolutionary change.
            </p>
          </div>

          <div class="flex flex-col md:flex-row flex-wrap w-full justify-between">
            {services.map((service) => (
              <div
                class="rounded-md shadow-md w-[94%] mx-auto mb-3 flex flex-col p-4 md:w-[30%] dark:bg-gray-900 md:mx-1 bg-white dark:text-white"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <p class="h-16 w-16">
                  <span class="far fa-globe dark:text-white"></span>
                </p>

                <h3 class="text-xl font-semibold my-3">{service.name}</h3>

                <ul class="text-base">{service.description}</ul>

                {/* <a
                  href="#"
                  class="ml-auto text-red-600 dark:text-red-400 mt-5 mr-2 text-base"
                >
                  Know More
                </a> */}
              </div>
            ))}
          </div>
        </section>
      </div>

      <div
        class="dark:bg-gray-800 w-screen bg-gray-100 text-gray-900 min-h-screen"
        id="contact"
      >
        <section class="flex flex-col w-[90%] mx-auto  md:flex-row border-gray-800 items-center py-5 pt-16">
          <div class="md:w-1/2 w-full m-9">
            <p class="text-red-400 text-lg font-poppins" data-aos="fade-up">
              Feel free to contact us
            </p>
            <h2
              class="text-5xl dark:text-white font-bold my-4 font-poppins"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Contact us
            </h2>
            <p
              class="dark:text-white text-lg w-[90%] font-quicksand"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              If you want to help our services, have questions about our work or
              experiencing any technical difficulties, please do not hesitate to
              contact us.
            </p>
            <div class="flex mt-4 flex-wrap">
              <div class="flex flex-col m-4 w-1/2">
                <h5 class="dark:text-white font-bold text-xl">Address</h5>
                <p class="dark:text-white">
                  David N. Akuamoah Wiredu Building Salisbury Aly.
                </p>
              </div>

              <div class="flex flex-col m-4 w-1/2">
                <h5 class="dark:text-white font-bold text-xl">Phone</h5>
                <p class="dark:text-white">+233 244982690</p>
                <p class="dark:text-white">+233 269625787</p>
              </div>

              <div class="flex flex-col m-4">
                <h5 class="dark:text-white font-bold text-xl">Others</h5>
                <p class="dark:text-white">pewvegas@gmail.com</p>
                <p class="dark:text-white">info.pewvegas.com</p>
              </div>
            </div>
          </div>

          <div class="md:w-1/2 w-full m-9">
            <div class="flex flex-col dark:text-white mb-3">
              <label for="name" class="mb-2">
                Name
              </label>
              <input
                class="dark:text-white dark:bg-gray-900 bg-gray-200 p-3 rounded-md"
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
              />
            </div>

            <div class="flex flex-col dark:text-white mb-3">
              <label for="email" class="mb-2">
                Email
              </label>
              <input
                class="dark:text-white dark:bg-gray-900 bg-gray-200 p-3 rounded-md"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>

            <div class="flex flex-col dark:text-white mb-3">
              <label for="messge" class="mb-2">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="4"
                class="dark:text-white dark:bg-gray-900 bg-gray-200 p-3 rounded-md"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <button
              type="submit"
              class="dark:bg-black text-red-500 dark:text-white border-2 hover:text-white border-red-400 outline-none px-7 py-2 hover:bg-red-400 duration-300 mt-4"
            >
              Send
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}

export default App;
