"use client";
import React from "react";
import Header from "@/app/components/Header";
import Head from "next/head";
import Footer from "@/app/components/Footer";

export default function DataTransferManagement() {
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
      <div className="banner_whatbedo_datatransfer"></div>
      <div className="container mb-5">
        <div className="heading_unlock_phone_datacenter">
          <h2 className="text-center custom_heading">
            Data Transfer/ Management
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
                  Data Transfer/ Management
                </li>
              </ol>
            </nav>
          </div>
          <div className="col-sm-12 col-lg-8 col-md-6 mt-2">
            <p>
              At Sellphone Lab in Calgary, we understand the importance of your
              personal and professional data. That’s why we offer a range of
              data transfer services to help keep your information safe, secure,
              and accessible.
            </p>
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12 mb-3">
                <h3 className="text-center">Our services include:</h3>
              </div>
              <div className="col-sm-4 col-md-4 col-lg-4 shadow p-3 mb-3 bg-white rounded">
                <h4 className="text-center">Data Backup:</h4>
                <p className="text-center">
                  At Sellphone Lab, we believe in the importance of having a
                  reliable backup of all your important data. Whether you’re
                  worried about a potential hardware failure or just want an
                  extra copy of your files, we can help. Our team of experts can
                  quickly and efficiently backup all your data, so you can rest
                  easy knowing your information is safe.
                </p>
              </div>
              <div className="col-sm-4 col-md-4 col-lg-4 shadow p-3 mb-3 bg-white rounded">
                <h4 className="text-center">
                  Hardware and Software Installation:
                </h4>
                <p className="text-center">
                  In addition to data backup, we also offer hardware and
                  software installation services. Whether you’re upgrading your
                  phone or computer, or simply need help setting up a new
                  device, our team can assist you every step of the way. We can
                  help you install new hardware, software, and even transfer
                  your data to the new device.
                </p>
              </div>
              <div className="col-sm-4 col-md-4 col-lg-4 shadow p-3 mb-3 bg-white rounded">
                <h4 className="text-center">Data Retrieval and Migration:</h4>
                <p className="text-center">
                  If you’ve lost your data due to a hardware failure or other
                  issue, don’t panic. Our team at Sellphone Lab can help you
                  retrieve your lost data and even migrate it to a new device.
                  Whether you need to recover a few important files or your
                  entire hard drive, we can help.
                </p>
              </div>

              <p>
                At Sellphone Lab, we’re more than just a data transfer service.
                We also offer a wide range of other services to meet all your
                tech needs. Whether you need a phone repair, computer repair, or
                even a new or used phone, we have you covered. We also offer
                phone accessories, phone unlocking services and mobile cases.
                So, whether you’re in need of a data transfer or simply looking
                for a new phone case, Sellphone Lab in Calgary is your
                one-stop-shop for all your tech needs. Trust us, with our team
                of expert technicians, you can be sure that your devices are in
                good hands. So, give us a call or stop by our shop today, and
                let us help you keep your data safe, secure, and accessible.
              </p>
            </div>
          </div>

          <div className="col-sm-12 col-lg-4 col-md-6">
            <img
              src="https://sellphonelab.ca/wp-content/uploads/2023/02/Data-Transfer_-Management.jpg.webp"
              className="img-fluid"
            />
            <h5 className="mt-3">Send Enquiry about Phone Repairs</h5>
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
