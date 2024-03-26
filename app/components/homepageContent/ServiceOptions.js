import React from "react";
import styles from "../../cssFiles/InfoAndLink.module.css"; // Adjust the path as needed

function HomePageInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.newSection}>
        <h2 className={styles.title}>Our Services</h2>
        <div className={styles.servicesGrid}>
          <div>
            <h3>Phone Repairs</h3>
            <p>LCD Replacement, Battery Replacement, Water Damage Repair, Board Repair, Mic & Speaker Replacement, Screen Replacement, Speaker Replacement, Charging Port Replacement, Lifetime warranty on repairs</p>
            <a href="#" className={styles.link}>Learn more</a>
            <a href="#" className={styles.link}>View Services</a>
          </div>
          <div>
            <h3>Computer Repairs</h3>
            <p>LCD Replacement, Software Issues, MacBook Repair, Board Repairs, Water Damage</p>
            <a href="#" className={styles.link}>Learn more</a>
            <a href="#" className={styles.link}>View Services</a>
          </div>
          <div>
            <h3>Tab/iPad Repairs</h3>
            <p>Tabs, iPads, Smart Watches, Kindle, HeadPhones</p>
            <a href="#" className={styles.link}>Learn more</a>
            <a href="#" className={styles.link}>View Services</a>
          </div>
          <div>
            <h3>Phone Accessories</h3>
            <p>Earphones, Wall Chargers, Cables, Air Pods, and many more</p>
            <a href="#" className={styles.link}>Learn more</a>
            <a href="#" className={styles.link}>View Services</a>
          </div>
          <div>
            <h3>Data Transfer/Management</h3>
            <p>We offer a range of data transfer services, including data back-up, hardware and software installation, data retrieval and migration.</p>
            <a href="#" className={styles.link}>Learn more</a>
            <a href="#" className={styles.link}>View Services</a>
          </div>
          <div>
            <h3>Unlock Phones</h3>
            <p>At Sellphone Lab Calgary, we provide fast and high-quality unlocking service with the highest customer satisfaction.</p>
            <a href="#" className={styles.link}>Learn more</a>
            <a href="#" className={styles.link}>View Services</a>
          </div>
          <div>
            <h3>Sale of New & Used Phones</h3>
            <p>We offer a wide variety of mobile phones in our store. All our used phones are tested and inspected by our technicians.</p>
            <a href="#" className={styles.link}>Learn more</a>
            <a href="#" className={styles.link}>View Services</a>
          </div>
          <div>
            <h3>Sale of Phone Cases</h3>
            <p>Come and shop in our store, you will find various mobiles cases and covers at affordable prices. We have the best quality items with different styles. Our special mobile cases come with a lifetime warranty.</p>
            <a href="#" className={styles.link}>Learn more</a>
            <a href="#" className={styles.link}>View Services</a>
          </div>
          </div>
            {/* Optionally, if you have a page or section for all services, you can add a general link here */}
          <div className={styles.allServicesLink}>
            <a href="#" className={styles.link}>View All Services</a>
          </div>
        </div>
      </div>
    );
}

export default HomePageInfo;
