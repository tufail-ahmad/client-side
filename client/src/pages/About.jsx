import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <section className={styles.aboutPage}>
      <div className={styles.container}>
        {/* Hero */}
        <div className={styles.hero}>
          <h1>About LuxRide</h1>
          <p>
            LuxRide is a premium car rental platform connecting luxury car
            owners with customers looking for world-class driving experiences in
            Dubai.
          </p>
        </div>

        {/* Content */}
        <div className={styles.content}>
          <div className={styles.card}>
            <h2>Who We Are</h2>
            <p>
              We are a Dubai-based luxury mobility platform focused on
              delivering elite car rental experiences. Our network includes
              supercars, luxury sedans, SUVs, and premium sports vehicles from
              trusted hosts.
            </p>
          </div>

          <div className={styles.card}>
            <h2>Our Mission</h2>
            <p>
              To redefine luxury car rentals by providing seamless access,
              transparent pricing, and exceptional customer service for both
              renters and hosts.
            </p>
          </div>

          <div className={styles.card}>
            <h2>Why Choose LuxRide</h2>
            <ul>
              <li>✔ Verified luxury car hosts</li>
              <li>✔ Premium & well-maintained vehicles</li>
              <li>✔ Transparent pricing in AED</li>
              <li>✔ 24/7 customer support</li>
              <li>✔ Secure bookings & payments</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
