import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Brand */}
        <div className={styles.brand}>
          <div className={styles.logo}>LuxRide</div>
          <p className={styles.tagline}>
            Premium car rental platform for luxury, sports and elite vehicles.
          </p>
        </div>

        {/* Navigation */}
        <div className={styles.section}>
          <h4>Company</h4>
          <Link to="/">Home</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/contact-us">Contact Us</Link>
        </div>

        {/* Explore */}
        <div className={styles.section}>
          <h4>Explore</h4>
          <Link to="/rent">Rent a Car</Link>
          <Link to="/car-types/luxury">Luxury Cars</Link>
          <Link to="/car-types/sports">Sports Cars</Link>
          <Link to="/car-types/economy">Economy Cars</Link>
          <Link to="/car-types/suv">SUV</Link>
        </div>

        {/* Brands */}
        <div className={styles.section}>
          <h4>Top Brands</h4>
          <Link to="/brand/lamborghini">Lamborghini</Link>
          <Link to="/brand/ferrari">Ferrari</Link>
          <Link to="/brand/rolls-royce">Rolls Royce</Link>
          <Link to="/brand/bmw">BMW</Link>
          <Link to="/brand/mercedes">Mercedes</Link>
        </div>
      </div>

      {/* Bottom */}
      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} LuxRide. All rights reserved.</p>

        <div className={styles.socials}>
          <a href="#" aria-label="Instagram">
            IN
          </a>
          <a href="#" aria-label="Facebook">
            FB
          </a>
          <a href="#" aria-label="Twitter">
            X
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
