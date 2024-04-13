"use client";
import React from "react";
import Header from "@/app/components/Header";
import Head from "next/head";
import Footer from "@/app/components/Footer";

export default function SaleMobileCase() {
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
      <div className="heading_unlock_mobilecase"></div>
      <div className="container mb-5">
        <div className="heading_unlock_phone_datacenter">
          <h2 className="text-center custom_heading">Sale of Mobile Cases</h2>
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
                  Sale of Mobile Cases
                </li>
              </ol>
            </nav>
          </div>
          <div className="col-sm-12 col-lg-8 col-md-6 mt-2">
            <p>
              At Sellphone Lab in Calgary, we understand the importance of
              protecting your phone. Not only does it keep your device looking
              new and stylish, but it also helps to prevent damage from everyday
              wear and tear. That’s why we offer a wide selection of mobile
              cases and covers at our store. Whether you’re looking for a
              simple, clear case or a rugged, protective cover, we’ve got you
              covered.
            </p>
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12 shadow p-3 mb-3 bg-white rounded">
                <h4 className="text-center">Variety of Styles</h4>
                <p className="text-center">
                  We offer a wide variety of mobile cases and covers in our
                  store. From classic, clear cases to stylish, designer covers,
                  you’ll find something to suit your personal style. We also
                  have a variety of materials available, including silicone,
                  leather, and even wood. Whether you’re looking for something
                  sleek and minimalistic or something bold and colorful, we have
                  the perfect case for you.
                </p>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-12 shadow p-3 mb-3 bg-white rounded">
                <h4 className="text-center">Affordable Prices</h4>
                <p className="text-center">
                  At Sellphone Lab, we believe that everyone should have access
                  to high-quality mobile cases and covers. That’s why we offer
                  our products at affordable prices, so you can protect your
                  phone without breaking the bank. Plus, our selection is
                  constantly updating, so you can always find the latest styles
                  and trends at our store.
                </p>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-12 shadow p-3 mb-3 bg-white rounded">
                <h4 className="text-center">Quality Items</h4>
                <p className="text-center">
                  We believe in providing our customers with the best quality
                  items. All the mobile cases and covers in our store are made
                  from high-quality materials and are designed to last. We
                  inspect and test all our cases to ensure they meet our high
                  standards before putting them on sale.
                </p>
              </div>

              <p>
                In addition to selling mobile cases, we also offer a wide range
                of other services to meet all your tech needs. Whether you need
                a phone repair, computer repair, phone accessories, data
                transfer services, phone unlocking or even new or used phones,
                we have you covered. Trust us with our team of expert
                technicians and state-of-the-art technology, you can be sure
                that your devices are in good hands. So, give us a call or stop
                by our shop today and let us help you find the perfect mobile
                case for you.
              </p>
            </div>
          </div>

          <div className="col-sm-12 col-lg-4 col-md-6">
            <img
              src="https://sellphonelab.ca/wp-content/uploads/2023/02/sellphone-lab-inside-1-1024x553.jpg.webp"
              className="img-fluid"
            />
            <h5 className="mt-3">Send Enquiry about Sale of Mobile Cases</h5>
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
