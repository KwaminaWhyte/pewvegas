import { useState } from "react";
import Navigation from "./component/Navigation";
import image from "./assets/annie-spratt-QckxruozjRg-unsplash.jpg";

const services = [
  {
    id: 1,
    name: "Software Development",
    icon: "far fa-globe",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quas alias sint repudiandae vero praesentium tenetur!",
  },
  {
    id: 2,
    name: "Smart Home Integrations",
    icon: "far fa-cogs",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quas alias sint repudiandae vero praesentium tenetur!",
  },
  {
    id: 3,
    name: "Consultancy Hardware and Networking",
    icon: "far fa-desktop",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quas alias sint repudiandae vero praesentium tenetur!",
  },
];
function App() {
  return (
    <>
      <Navigation />

      <img
        src={image}
        className="w-screen object-cover h-screen fixed -z-50"
        alt=""
        srcset=""
      />

      <div
        id="home"
        className="min-h-screen pt-16 flex md:flex-row flex-col text-white bg-black/60 items-center"
      >
        <section className="flex flex-col w-full md:w-1/2 ml-[13%]">
          <h1 className="md:text-6xl font-bold text-4xl">
            PEW VEGAS SOLUTIONS COMPANY
          </h1>

          <p className="my-11 text-lg">
            We provide effective and reliable information technology solutions
            to businesses, organizations, and Government agencies to connect
            with clients, integrate with vendors, and empower employees to work
            to their fullest potential
          </p>

          <a
            href="#more"
            className="py-4 px-11 border border-white mr-auto font-semibold hover:bg-white hover:text-black transition duration-300 ease-in-out"
          >
            Learn More
          </a>
        </section>

        <div className="bg-red-300 mt-auto mb-12 flex">
          <p>asd</p>
          <p>asd</p>
          <p>asd</p>
          <p>asd</p>
        </div>
      </div>

      <div
        class="dark:bg-gray-800 bg-gray-100 text-gray-900 min-h-screen"
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
                class="rounded-md shadow-md flex flex-col p-4 w-full md:w-[30%] dark:bg-gray-900 md:mx-1 bg-white dark:text-white"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <p class="h-16 w-16">
                  <span class="far fa-globe dark:text-white"></span>
                </p>

                <h3 class="text-xl font-semibold my-3">{service.name}</h3>

                <p class="text-base">{service.description}</p>

                <a
                  href="#"
                  class="ml-auto text-red-600 dark:text-red-400 mt-5 mr-2 text-base"
                >
                  Know More
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div
        class="dark:bg-gray-800 bg-gray-100 text-gray-900 min-h-screen"
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
                  111 Casticated St, New Site, Takoradi
                </p>
              </div>

              <div class="flex flex-col m-4 w-1/2">
                <h5 class="dark:text-white font-bold text-xl">Phone</h5>
                <p class="dark:text-white">+233 866788990</p>
                <p class="dark:text-white">+233 246807543</p>
              </div>

              <div class="flex flex-col m-4">
                <h5 class="dark:text-white font-bold text-xl">Others</h5>
                <p class="dark:text-white">123@nvhub.org</p>
                <p class="dark:text-white">info.norvushub.org</p>
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
    </>
  );
}

export default App;
