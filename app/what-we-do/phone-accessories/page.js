import React from "react";
import Header from "@/app/components/Header";
import Head from "next/head";
import Footer from "@/app/components/Footer";

export default function PhoneAccessories() {
  return (
    <>
      <Header />
      <Head>
        <title>Phone Accessories - Sellphone Lab</title>
        <meta
          name="description"
          content="Explore our wide range of phone accessories including earphones, chargers, cables, and AirPods. Quality products at affordable prices."
        />
      </Head>
      {/* Banner section */}
      <div
        className="bg-cover bg-center h-64"
        style={{
          backgroundImage:
            "url('https://sellphonelab.ca/wp-content/uploads/2023/02/Phone-Accessories.jpg')",
        }}
      ></div>
      <div className="bg-blue-800 py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold text-white">
            Phone Accessories
          </h2>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          {/* Content section */}
          <div className="w-full lg:w-2/3 md:w-1/2 p-5">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb flex flex-wrap list-none pl-0 rounded text-sm">
                <li className="breadcrumb-item">
                  <a href="/" className="text-blue-600">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item">
                  <a href="/what-we-do" className="text-blue-600">
                    What we do
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Phone Accessories
                </li>
              </ol>
            </nav>
            <p className="mt-5">
              Welcome to Sellphone Lab, your go-to destination for phone
              accessories in Calgary. Whether you’re looking for a new set of
              earphones, a wall charger, a cable, or even AirPods, we have you
              covered. We are committed to providing you with the highest
              quality accessories at an affordable price.
            </p>
            <p>
              When it comes to phone accessories, we understand that every
              person has their own unique needs. That’s why we offer a wide
              range of accessories to meet your specific needs.
            </p>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="shadow p-6 bg-white rounded-lg text-center">
                <h4 className="font-bold mb-2 text-blue-600">Earphones</h4>
                <p>
                  If you’re in need of a new set of earphones, we have a wide
                  variety of options available. We offer both wired and wireless
                  earphones, in a variety of styles and price ranges. Whether
                  you’re looking for a basic set of earbuds or a high-end pair
                  of noise-canceling earphones, we have something for everyone.
                </p>
              </div>
              <div className="shadow p-6 bg-white rounded-lg text-center">
                <h4 className="font-bold mb-2 text-blue-600">Wall Chargers</h4>
                <p>
                  A wall charger is an essential accessory for any phone. We
                  offer a wide variety of wall chargers, including fast-charging
                  options, so you can charge your phone quickly and efficiently.
                  We also offer multi-port chargers, so you can charge multiple
                  devices at once.
                </p>
              </div>
              <div className="shadow p-6 bg-white rounded-lg text-center">
                <h4 className="font-bold mb-2 text-blue-600">Cables</h4>
                <p>
                  Cables are another essential accessory for any phone. We offer
                  a wide variety of cables, including USB-C, Lightning, and
                  Micro-USB cables, so you can charge and transfer data from
                  your phone.
                </p>
              </div>
              <div className="shadow p-6 bg-white rounded-lg text-center">
                <h4 className="font-bold mb-2  text-blue-600">AirPods</h4>
                <p>
                  We also offer AirPods, which are becoming increasingly
                  popular. We have both the standard AirPods and the AirPods Pro
                  available, so you can choose the one that best suits your
                  needs.
                </p>
              </div>
            </div>
            <p className="mt-5">
              In addition to phone accessories, we also offer phone repairs,
              computer repairs, data transfer and management, unlock phones, and
              the sale of new and used phones. We also have a wide selection of
              mobile cases to protect your phone from scratches and damage.
            </p>
            <p>
              At Sellphone Lab, we understand that your phone is an important
              part of your daily life. That’s why we are committed to providing
              you with the best accessories possible. Our team is dedicated to
              helping you find the perfect accessories to enhance your phone
              experience.
            </p>
            <p>
              If you’re looking for a reliable, affordable phone accessories
              shop in Calgary, look no further than Sellphone Lab. We guarantee
              that you will be satisfied with our services and will build trust
              on the Name “Sellphone Lab” shop in Calgary. Our goal is to
              provide you with the highest quality service and to make sure
              you’re completely satisfied. So, please give us a call or visit us
              today!
            </p>
          </div>
          {/* Enquiry Form Section */}
          <div className="w-full lg:w-1/3 md:w-1/2 p-5">
            <h5 className="mt-3 font-semibold text-white text-lg bg-blue-800 py-2 px-4 rounded">
              Book Appointment
            </h5>

            <img
              src="https://sellphonelab.ca/wp-content/uploads/2023/02/Phone-Accessories.jpg"
              alt="Phone Accessories"
              className="rounded shadow mb-4 mt-4 w-full h-auto md:h-96"
            />

            <h5 className="mt-3 font-semibold  text-blue-600">
              Send Enquiry about Phone Accessories
            </h5>
            <form className="mt-3">
              <div className="form-group mb-4">
                <input
                  type="text"
                  name="full_name"
                  placeholder="Full Name"
                  className="form-control block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  required=""
                />
              </div>
              <div className="form-group mb-4">
                <input
                  type="text"
                  name="email_id"
                  placeholder="Email ID"
                  className="form-control block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  required=""
                />
              </div>
              <div className="form-group mb-4">
                <input
                  type="text"
                  name="phone_number"
                  placeholder="Phone Number"
                  className="form-control block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  required=""
                />
              </div>
              <div className="form-group mb-4">
                <textarea
                  className="form-control block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Message"
                  required=""
                ></textarea>
              </div>
              <div className="form-group mt-4">
                <button
                  type="submit"
                  className="px-6 py-2 border-0 rounded text-white font-bold bg-blue-600 hover:bg-blue-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
