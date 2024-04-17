"use client";
import React from "react";
import Header from "../components/Header";
import Head from "next/head";
import styles from "./About.module.css";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className={styles.container}>
      <Header />
      <Head>
        <title>About Us - Sellphone Lab</title>
        <meta
          name="description"
          content="Learn more about Sellphone Lab, your ultimate destination for cell phone, computer, and tablet requirements."
        />
      </Head>
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-sm-12 col-lg-12 col-md-12">
            <h2 className="text-center">About Us</h2>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <img
              src="https://sellphonelab.ca/wp-content/uploads/2022/10/mobile-phones-14-1024x576.jpg.webp"
              alt=""
            />
          </div>
          <div className="col-sm-6">
            <p>
              Welcome to Sellphone Lab, your ultimate destination for all your
              cell phone, computer, and tablet requirements. Whether you are
              contending with a cracked screen, software glitches, or on the
              lookout for a new device, our comprehensive array of services and
              products has got you covered.
            </p>
            <p>
              At Sellphone Lab, we take pride in delivering prompt and
              high-quality mobile repair and unlocking services, ensuring the
              utmost customer satisfaction.
            </p>
            <p>
              As your one-stop shop for cell phone, computer, and tablet repair
              and maintenance, we excel at fixing or replacing any part or
              facilitating on-the-spot upgrades. In fact, we offer same-day
              repairs, allowing you to wait comfortably while we restore your
              device.
            </p>
            <p>
              Known for our friendly and reliable service, whether you are
              seeking the latest gadget or need to revive an aging iPhone, we
              are here to assist you every step of the way.
            </p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <h3>We're Experienced</h3>
            <p>
              Our techs are trained professionals and ready to help you with any
              of your device repairs or upgrades. We offer Lcd replacement,
              battery replacement, water damage repair and board repair
              services.
            </p>
            <p>
              We sell both new and used mobile phones. All of our used phones
              are thoroughly tested and inspected by our technicians.
            </p>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <img src="https://sellphonelab.ca/wp-content/uploads/2022/10/mobile-phones-9-1024x576.jpg.webp" />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <img src="https://sellphonelab.ca/wp-content/uploads/2022/10/mobile-phones-6-1024x576.jpg.webp" />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <h3>Our Goal and Commitment</h3>
            <p>
              Our main goal is to maintain and exceed the expectations of our
              customers. Our friendly, professional and experienced staff is
              committed to providing you with a pleasant experience each time
              you interact with us.
            </p>
            <p>
              We are committed to giving you the best mobile repair and sales
              experience. We will provide you with reliable services for a very
              low price. Contact us today!
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
