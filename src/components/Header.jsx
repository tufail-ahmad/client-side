import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const [brandOpen, setBrandOpen] = useState(false);
  const [typeOpen, setTypeOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileBrand, setMobileBrand] = useState(false);
  const [mobileType, setMobileType] = useState(false);

  const brandTimer = useRef(null);
  const typeTimer = useRef(null);

  const openBrand = () => {
    clearTimeout(brandTimer.current);
    setBrandOpen(true);
  };

  const closeBrand = () => {
    brandTimer.current = setTimeout(() => {
      setBrandOpen(false);
    }, 150);
  };

  const openType = () => {
    clearTimeout(typeTimer.current);
    setTypeOpen(true);
  };

  const closeType = () => {
    typeTimer.current = setTimeout(() => {
      setTypeOpen(false);
    }, 150);
  };

  const handleMobileNavClick = () => {
    setMobileOpen(false);
    setMobileBrand(false);
    setMobileType(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          LuxRide
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.nav}>
          <Link to="/" className={styles.link}>
            Home
          </Link>
          <Link to="/about-us" className={styles.link}>
            About Us
          </Link>

          {/* Brands */}
          <div
            className={styles.dropdown}
            onMouseEnter={openBrand}
            onMouseLeave={closeBrand}
          >
            <span>Brands</span>
            {brandOpen && (
              <div className={styles.menu}>
                <Link to="/brand/lamborghini">Lamborghini</Link>
                <Link to="/brand/ferrari">Ferrari</Link>
                <Link to="/brand/rolls-royce">Rolls Royce</Link>
                <Link to="/brand/bmw">BMW</Link>
                <Link to="/brand/mercedes">Mercedes</Link>
              </div>
            )}
          </div>

          {/* Car Types */}
          <div
            className={styles.dropdown}
            onMouseEnter={openType}
            onMouseLeave={closeType}
          >
            <span>Car Types</span>
            {typeOpen && (
              <div className={styles.menu}>
                <Link to="/car-types/luxury">Luxury</Link>
                <Link to="/car-types/sports">Sports</Link>
                <Link to="/car-types/economy">Economy</Link>
                <Link to="/car-types/suv">SUV</Link>
              </div>
            )}
          </div>

          <Link to="/rent" className={styles.link}>
            Rent a Car
          </Link>
          <Link to="/contact-us" className={styles.link}>
            Contact Us
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className={styles.actions}>
          <Link to="/login" className={styles.login}>
            Login
          </Link>
          <Link to="/sign-up" className={styles.signup}>
            Sign Up
          </Link>
          <Link to="/host-dashboard" className={styles.dashboard}>
            ▦ Dashboard
          </Link>
        </div>

        {/* Hamburger */}
        <div
          className={styles.hamburger}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className={styles.mobileMenu}>
          <Link to="/" onClick={handleMobileNavClick}>
            Home
          </Link>
          <Link to="/about-us" onClick={handleMobileNavClick}>
            About Us
          </Link>

          <div
            className={styles.mobileDropdown}
            onClick={() => setMobileBrand(!mobileBrand)}
          >
            Brands
          </div>
          {mobileBrand && (
            <div className={styles.mobileSubmenu}>
              <Link to="/brand/lamborghini" onClick={handleMobileNavClick}>
                Lamborghini
              </Link>
              <Link to="/brand/ferrari" onClick={handleMobileNavClick}>
                Ferrari
              </Link>
              <Link to="/brand/rolls-royce" onClick={handleMobileNavClick}>
                Rolls Royce
              </Link>
              <Link to="/brand/bmw" onClick={handleMobileNavClick}>
                BMW
              </Link>
              <Link to="/brand/mercedes" onClick={handleMobileNavClick}>
                Mercedes
              </Link>
            </div>
          )}

          <div
            className={styles.mobileDropdown}
            onClick={() => setMobileType(!mobileType)}
          >
            Car Types
          </div>
          {mobileType && (
            <div className={styles.mobileSubmenu}>
              <Link to="/car-types/luxury" onClick={handleMobileNavClick}>
                Luxury
              </Link>
              <Link to="/car-types/sports" onClick={handleMobileNavClick}>
                Sports
              </Link>
              <Link to="/car-types/economy" onClick={handleMobileNavClick}>
                Economy
              </Link>
              <Link to="/car-types/suv" onClick={handleMobileNavClick}>
                SUV
              </Link>
            </div>
          )}

          <Link to="/rent" onClick={handleMobileNavClick}>
            Rent a Car
          </Link>
          <Link to="/contact-us" onClick={handleMobileNavClick}>
            Contact Us
          </Link>

          {/* Auth Section */}
          <div className={styles.mobileAuth}>
            <Link
              to="/login"
              className={styles.login}
              onClick={handleMobileNavClick}
            >
              Login
            </Link>
            <Link
              to="/sign-up"
              className={styles.signup}
              onClick={handleMobileNavClick}
            >
              Sign Up
            </Link>
            <Link
              to="/host-dashboard"
              className={styles.dashboard}
              onClick={handleMobileNavClick}
            >
              ▦ Dashboard
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
