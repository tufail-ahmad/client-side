import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={styles.contactPage}>
      <div className={styles.container}>
        {/* Left Info */}
        <div className={styles.info}>
          <h1>Contact Us</h1>
          <p>
            Have questions about renting or hosting luxury cars? Our team is
            here to help you 24/7.
          </p>

          <div className={styles.details}>
            <div>
              <span>📍</span>
              <p>Dubai, United Arab Emirates</p>
            </div>
            <div>
              <span>📞</span>
              <p>+971 50 123 4567</p>
            </div>
            <div>
              <span>✉️</span>
              <p>support@luxride.ae</p>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className={styles.formBox}>
          <form className={styles.form}>
            <h2>Send us a message</h2>

            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message"></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
