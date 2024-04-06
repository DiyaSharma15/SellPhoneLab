"use client";
import React from "react";
import Header from "../components/Header";
import Head from "next/head";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="">
      <Header />
      <Head>
        <title>Locations - Sellphone Lab</title>
        <meta
          name="description"
          content="Learn more about Sellphone Lab, your ultimate destination for cell phone, computer, and tablet requirements."
        />
      </Head>
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-sm-12 col-lg-12 col-md-12">
            <h2 className="text-center">Our Locations</h2>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div class="card">
              <img
                src="https://sellphonelab.ca/wp-content/uploads/2023/03/sellphone-lab-2-1024x624.jpeg.webp"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title text-center">
                  SellPhone Lab - Calgary, AB
                </h5>
                <p class="card-text text-center">
                  Your Trusted Source for Mobile Repairs, Devices, and
                  Accessories in Calgary, AB
                </p>
                <a
                  href="/locations/sellphone-lab-calgary-ab"
                  class="btn btn-primary cardachorbtn"
                >
                  Location Details
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div class="card">
              <img
                src="https://sellphonelab.ca/wp-content/uploads/2023/12/Sellphone-labs-location-Olds-AB-1024x712.jpg.webp"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title text-center">Sellphone Lab – Olds, AB</h5>
                <p class="card-text text-center">
                  Your Trusted Source for Mobile Repairs, Devices, and
                  Accessories in Olds, AB
                </p>
                <a
                  href="/locations/sellphone-lab-olds-ab"
                  class="btn btn-primary cardachorbtn"
                >
                  Location Details
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div class="card">
              <img
                src="https://sellphonelab.ca/wp-content/uploads/2023/03/sellphone-lab-1-1024x553.jpg.webp"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title text-center">
                  Sellphone Lab – Cochrane, AB
                </h5>
                <p class="card-text text-center">
                  Your Trusted Source for Mobile Repairs, Devices, and
                  Accessories in Cochrane, AB
                </p>
                <a
                  href="/locations/sellphone-lab-cochrane-ab"
                  class="btn btn-primary cardachorbtn"
                >
                  Location Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
