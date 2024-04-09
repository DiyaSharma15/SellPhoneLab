"use client";
import React from "react";
import Header from "@/app/components/Header";
import Head from "next/head";
import Footer from "@/app/components/Footer";

export default function PhoneAccessories() {
  return (
    <>
      <Header />
      <Head>
        <title>About Us - Sellphone Lab</title>
        <meta
          name="description"
          content="Learn more about Sellphone Lab, your ultimate destination for cell phone, computer, and tablet requirements."
        />
      </Head>
      <div className="banner_whatbedo_phoneaccessories"></div>
      <div className="container mb-5">
        <div className="heading_unlock_phone_datacenter">
          <h2 className="text-center custom_heading">Phone Accessories</h2>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-12 col-md-12 mt-5">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li class="breadcrumb-item">
                  <a href="/what-we-do">What we do</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Phone Accessories
                </li>
              </ol>
            </nav>
          </div>
          <div className="col-sm-12 col-lg-8 col-md-6 mt-2">
            <p>
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
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12 mb-3">
                <h3 className="text-center">Our services include:</h3>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6 shadow p-3 mb-3 bg-white rounded">
                <h4 className="text-center">Earphones</h4>
                <p className="text-center">
                  If you’re in need of a new set of earphones, we have a wide
                  variety of options available. We offer both wired and wireless
                  earphones, in a variety of styles and price ranges. Whether
                  you’re looking for a basic set of earbuds or a high-end pair
                  of noise-canceling earphones, we have something for everyone.
                </p>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6 shadow p-3 mb-3 bg-white rounded">
                <h4 className="text-center">Wall Chargers</h4>
                <p className="text-center">
                  A wall charger is an essential accessory for any phone. We
                  offer a wide variety of wall chargers, including fast-charging
                  options, so you can charge your phone quickly and efficiently.
                  We also offer multi-port chargers, so you can charge multiple
                  devices at once.
                </p>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6 shadow p-3 mb-3 bg-white rounded">
                <h4 className="text-center">Cables</h4>
                <p className="text-center">
                  Cables are another essential accessory for any phone. We offer
                  a wide variety of cables, including USB-C, Lightning, and
                  Micro-USB cables, so you can charge and transfer data from
                  your phone.
                </p>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6 shadow p-3 mb-3 bg-white rounded">
                <h4 className="text-center">AirPods</h4>
                <p className="text-center">
                  We also offer AirPods, which are becoming increasingly
                  popular. We have both the standard AirPods and the AirPods Pro
                  available, so you can choose the one that best suits your
                  needs.
                </p>
              </div>

              <p>
                In addition to phone accessories, we also offer phone repairs,
                computer repairs, data transfer and management, unlock phones,
                and the sale of new and used phones. We also have a wide
                selection of mobile cases to protect your phone from scratches
                and damage.
              </p>
              <p>
                At Sellphone Lab, we understand that your phone is an important
                part of your daily life. That’s why we are committed to
                providing you with the best accessories possible. Our team is
                dedicated to helping you find the perfect accessories to enhance
                your phone experience.
              </p>
              <p>
                If you’re looking for a reliable, affordable phone accessories
                shop in Calgary, look no further than Sellphone Lab. We
                guarantee that you will be satisfied with our services and will
                build trust on the Name “Sellphone Lab” shop in Calgary. Our
                goal is to provide you with the highest quality service and to
                make sure you’re completely satisfied. So, please give us a call
                or visit us today!
              </p>
            </div>
          </div>

          <div className="col-sm-12 col-lg-4 col-md-6">
            <img
              src="https://sellphonelab.ca/wp-content/uploads/2023/02/Phone-Accessories.jpg"
              className="img-fluid"
            />
            <h5 className="mt-3">Send Enquiry about Phone Accessories</h5>
            <form>
              <div className="form-group mt-3">
                <input
                  type="text"
                  name="full_name"
                  placeholder="Full Name"
                  className="form-control"
                  required=""
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  name="email_id"
                  placeholder="Email ID"
                  className="form-control"
                  required=""
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  name="full_name"
                  placeholder="Phone Number"
                  className="form-control"
                  required=""
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  placeholder="Message"
                  required=""
                ></textarea>
              </div>
              <div className="form-group mt-3">
                <button type="submit" className="btn btn-primary">
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
