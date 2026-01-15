import styles from "./CarTypes.module.css";
import { Link } from "react-router-dom";
import {
  FaCarSide,
  FaTachometerAlt,
  FaTruckMonster,
  FaWallet,
} from "react-icons/fa";

const CarTypes = () => {
  return (
    <section className={styles.section}>
      <h2>Browse by Car Type</h2>
      <p className={styles.subtitle}>
        Choose the perfect ride for your journey
      </p>

      <div className={styles.grid}>
        <Link to="/car-types/luxury" className={styles.card}>
          <FaCarSide />
          <h3>Luxury</h3>
          <p>Premium comfort & elegance</p>
        </Link>

        <Link to="/car-types/sports" className={styles.card}>
          <FaTachometerAlt />
          <h3>Sports</h3>
          <p>High performance supercars</p>
        </Link>

        <Link to="/car-types/suv" className={styles.card}>
          <FaTruckMonster />
          <h3>SUV</h3>
          <p>Power & space for every journey</p>
        </Link>

        <Link to="/car-types/economy" className={styles.card}>
          <FaWallet />
          <h3>Economy</h3>
          <p>Affordable & reliable cars</p>
        </Link>
      </div>
    </section>
  );
};

export default CarTypes;
