"use client";
import React from "react";
import Header from "@/app/components/Header";
import Head from "next/head";
import Footer from "@/app/components/Footer";

export default function Saleofnewusedphone() {
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
      <div className="heading_unlock_phone_sale_old"></div>
      <div className="container mb-5">
        <div className="heading_unlock_phone_datacenter">
          <h2 className="text-center custom_heading">
            Sale of new & used phones
          </h2>
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
                  Sale of new & used phones
                </li>
              </ol>
            </nav>
          </div>
          <div className="col-sm-12 col-lg-8 col-md-6 mt-2">
            <p>
              Are you in the market for a new or used phone? Look no further
              than Sellphone Lab in Calgary! We offer a wide selection of mobile
              phones to fit every budget and need. Whether you’re looking for a
              new, top-of-the-line iPhone or a reliable, used Samsung, we’ve got
              you covered.
            </p>
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12 shadow p-3 mb-3 bg-white rounded">
                <h4 className="text-center">Sale of New Phones</h4>
                <p className="text-center">
                  At Sellphone Lab, we understand the importance of having the
                  latest technology at your fingertips. That’s why we offer a
                  wide selection of new phones from all the top manufacturers.
                  From Smart Devices to Samsung to Huawei, you’ll find the
                  latest models and newest releases in our store. Plus, we offer
                  competitive prices to help you stay within your budget.
                </p>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-12 shadow p-3 mb-3 bg-white rounded">
                <h4 className="text-center">Sale of Used Phones</h4>
                <p className="text-center">
                  We understand that not everyone can afford a brand new phone.
                  That’s why we also offer a wide selection of used phones in
                  our store. All our used phones are thoroughly tested and
                  inspected by our team of experts to ensure they’re in
                  excellent working condition. You can trust that when you buy a
                  used phone from Sellphone Lab, it will be just as reliable and
                  functional as a new one.
                </p>
              </div>

              <p>
                Our team of experts are available to help you find the perfect
                phone to suit your needs and budget. Plus, we also offer a wide
                range of other services to meet all your tech needs. Whether you
                need a phone repair, computer repair, phone accessories, data
                transfer services, phone unlocking or even mobile cases, we have
                you covered. Trust us with our team of expert technicians and
                state-of-the-art technology, you can be sure that your devices
                are in good hands. So, give us a call or stop by our shop today
                and let us help you find the perfect phone for you.
              </p>
            </div>
          </div>

          <div className="col-sm-12 col-lg-4 col-md-6">
            <img
              src="https://sellphonelab.ca/wp-content/uploads/2023/02/Sale-of-new-used-phones.jpg.webp"
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
