import React from "react";
import logo from "./images/logo.png";
import heroBG from "./images/hero-bg.png";
import illustrationTab1 from "./images/illustration-features-tab-1.png";
import illustrationTab2 from "./images/illustration-features-tab-2.png";
import bookmarkLogoWhite from "./images/logo-bookmark-white.png";
import logoChrome from "./images/logo-chrome.svg";
import logoFirefox from "./images/logo-firefox.svg";
import logoOpera from "./images/logo-opera.svg";
import { useNavigate } from "react-router-dom";
import "tw-elements";

const Landing = () => {
  const registerNavigate = useNavigate();
  const loginNavigate = useNavigate();

  return (
    <div className="font-Poppins">
      <header>
        <nav className="container flex items-center py-4 mt-4 sm:mt-12">
          <div className="py-1">
            <img src={logo} className="object-fill h-10 w-50" alt="" />
          </div>

          <div className="flex sm:hidden flex-1 justify-end">
            <i className="text-2xl fas fa-bars"></i>
          </div>
        </nav>
      </header>

      <section className="relative">
        <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h2 className="text-bookmark-blue text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
              Your Solution to your RentACar Business
            </h2>
            <p className="text-bookmark-grey text-lg text-center lg:text-left mb-6">
              A simple, yet powerful Web Application for your complex business,
              we are determined to help companies manage their relations with
              customers on the go with our easy to use Application
            </p>
            <div className="flex justify-center flex-wrap gap-6">
              <button
                type="button"
                onClick={() => loginNavigate("login")}
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
              >
                Login
              </button>

              <button
                onClick={() => registerNavigate("register")}
                className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-800"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Get started with CMHS
                </span>
              </button>
            </div>
          </div>

          <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
            <img
              className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
              src={heroBG}
              alt=""
            />
          </div>
        </div>

        <div
          className="
          hidden
          md:block
          overflow-hidden
          bg-bookmark-purple
          rounded-l-full
          absolute
          h-80
          w-2/4
          top-32
          right-0
          lg:
          -bottom-28
          lg:-right-36
        "
        ></div>
      </section>

      <section className="bg-bookmark-white py-20 mt-20 lg:mt-60">
        <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
          <h1 className="text-3xl text-center text-bookmark-blue">Features</h1>
          <p className="text-center text-bookmark-grey mt-4" id="features">
            Our product makes it easy for your business to hold history of you
            customers and cars
          </p>
        </div>

        <div className="relative mt-20 lg:mt-24">
          <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
            <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
              <img
                className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
                src={illustrationTab1}
                alt=""
              />
            </div>

            <div className="flex flex-1 flex-col items-center lg:items-start">
              <h1 className="text-3xl text-bookmark-blue">
                Add new customers or cars on a couple of clicks
              </h1>
              <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                Easy to organize and add new customer or cars, our application
                helps you and your employes know what customer is connected to
                what car and vice versa
              </p>
              <button
                type="button"
                className="btn btn-purple hover:bg-bookmark-white hover:text-black"
              >
                More Info
              </button>
            </div>
          </div>

          <div
            className="
            hidden
            lg:block
            overflow-hidden
            bg-bookmark-purple
            rounded-r-full
            absolute
            h-80
            w-2/4
            -bottom-24
            -left-36
          "
          ></div>
        </div>

        <div className="relative mt-20 lg:mt-52">
          <div className="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
            <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
              <img
                className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
                src={illustrationTab2}
                alt=""
              />
            </div>

            <div className="flex flex-1 flex-col items-center lg:items-start">
              <h1 className="text-3xl text-bookmark-blue">
                Intelligent filter
              </h1>
              <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                Our application has a powerful search filter when you need to
                know history of a customer on the go
              </p>
              <button
                type="button"
                className="btn btn-purple hover:bg-bookmark-white hover:text-black"
              >
                More Info
              </button>
            </div>
          </div>

          <div
            className="
            hidden
            lg:block
            overflow-hidden
            bg-bookmark-purple
            rounded-l-full
            absolute
            h-80
            w-2/4
            -bottom-24
            -right-36
          "
          ></div>
        </div>
      </section>

      <section className="py-20 mt-20">
        <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
          <h1 className="text-3xl text-center text-bookmark-blue">
            You can use our Application in most of the browsers
          </h1>
          <p className="text-center text-bookmark-grey mt-4">
            We are planing to ship our Application to mobile as well in the
            future
          </p>
        </div>

        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-16">
          <div claclassNamess="flex flex-col rounded-md shadow-md lg:mb-16">
            <div clclassNameass="p-6 flex flex-col items-center">
              <img src={logoChrome} alt="" />
              <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">Chrome</h3>
              <p className="mb-2 text-bookmark-grey font-light">
                Minimum version 62
              </p>
            </div>
            <hr className="border-b border-bookmark-white" />
          </div>

          <div className="flex flex-col rounded-md shadow-md lg:my-8">
            <div className="p-6 flex flex-col items-center">
              <img src={logoFirefox} alt="" />
              <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">Firefox</h3>
              <p className="mb-2 text-bookmark-grey font-light">
                Minimum version 62
              </p>
            </div>
            <hr className="border-b border-bookmark-white" />
          </div>

          <div className="flex flex-col rounded-md shadow-md lg:mt-16">
            <div className="p-6 flex flex-col items-center">
              <img src={logoOpera} alt="" />
              <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">Opera</h3>
              <p className="mb-2 text-bookmark-grey font-light">
                Minimum version 62
              </p>
            </div>
            <hr className="border-b border-bookmark-white" />
          </div>
        </div>
      </section>

      <section className="bg-bookmark-white py-20">
        <div className="container">
          <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
            <h1 className="text-3xl text-center text-bookmark-blue">
              Frequently Asked Questions
            </h1>
            <p className="text-center text-bookmark-grey mt-4">
              Here are some of our FAQs. If you have any other questions you’d
              like answered please feel free to email us.
            </p>
          </div>

          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
              <h2 className="accordion-header mb-0" id="flush-headingOne">
                <button
                  className="accordion-button
      relative
      flex
      items-center
      w-full
      py-4
      px-5
      text-base text-gray-800 text-left
      bg-white
      border-0
      rounded-none
      transition
      focus:outline-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  What does your application do
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse border-0 collapse show"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body py-4 px-5">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the first item's accordion body.
                </div>
              </div>
            </div>
            <div className="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
              <h2 className="accordion-header mb-0" id="flush-headingTwo">
                <button
                  className="accordion-button
      collapsed
      relative
      flex
      items-center
      w-full
      py-4
      px-5
      text-base text-gray-800 text-left
      bg-white
      border-0
      rounded-none
      transition
      focus:outline-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  How can i use your application
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse border-0 collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body py-4 px-5">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the second item's accordion body. Let's imagine this being
                  filled with some actual content.
                </div>
              </div>
            </div>
            <div className="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
              <h2 className="accordion-header mb-0" id="flush-headingThree">
                <button
                  className="accordion-button
      collapsed
      relative
      flex
      items-center
      w-full
      py-4
      px-5
      text-base text-gray-800 text-left
      bg-white
      border-0
      rounded-none
      transition
      focus:outline-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  how can i contact you
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body py-4 px-5">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the third item's accordion body. Nothing more exciting
                  happening here in terms of content, but just filling up the
                  space to make it look, at least at first glance, a bit more
                  representative of how this would look in a real-world
                  application.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-bookmark-blue py-8">
        <div className="container flex flex-col md:flex-row items-center">
          <div className="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
            <ul className="flex text-white uppercase gap-12 text-xs">
              <a href="#features">
                <li className="cursor-pointer">Features</li>
              </a>
              <li className="cursor-pointer">Pricing</li>
              <li className="cursor-pointer">Contact</li>
            </ul>
          </div>
          <div className="flex gap-10 mt-12 md:mt-0">
            <li>
              <i className="text-white text-2xl fab fa-twitter"></i>
            </li>
            <li>
              <i className="text-white text-2xl fab fa-facebook-square"></i>
            </li>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
