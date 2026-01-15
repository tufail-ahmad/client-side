import { Link } from "react-router-dom";
import styles from "./MyCars.module.css";

const MyCars = () => {
  return (
    <div className={styles.wrapper}>
      {/* Header */}
      <div className={styles.header}>
        <div>
          <h1>My Cars</h1>
          <p>Manage all cars you have listed for rent</p>
        </div>

        {/* Add Car Link */}
        <Link to="/host-dashboard/add-car" className={styles.addBtn}>
          + Add New Car
        </Link>
      </div>

      {/* Cars Grid */}
      <div className={styles.grid}>
        {/* Car Card 1 */}
        <div className={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=1200"
            alt="Lamborghini"
          />

          <div className={styles.info}>
            <h3>Lamborghini Huracán</h3>
            <span className={styles.type}>Luxury • Sports</span>

            <div className={styles.meta}>
              <span>AED 75,000 / day</span>
              <span className={styles.statusActive}>Active</span>
            </div>

            <div className={styles.actions}>
              <button>Edit</button>
              <button className={styles.danger}>Remove</button>
            </div>
          </div>
        </div>

        {/* Car Card 2 (IMAGE FIXED) */}
        <div className={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1549921296-3a6b1d66b1a3?q=80&w=1200"
            alt="BMW X5"
          />

          <div className={styles.info}>
            <h3>BMW X5</h3>
            <span className={styles.type}>Premium • SUV</span>

            <div className={styles.meta}>
              <span>AED 18,000 / day</span>
              <span className={styles.statusInactive}>Inactive</span>
            </div>

            <div className={styles.actions}>
              <button>Edit</button>
              <button className={styles.danger}>Remove</button>
            </div>
          </div>
        </div>

        {/* Car Card 3 */}
        <div className={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?q=80&w=1200"
            alt="Mercedes G-Class"
          />

          <div className={styles.info}>
            <h3>Mercedes G-Class</h3>
            <span className={styles.type}>Luxury • SUV</span>

            <div className={styles.meta}>
              <span>AED 35,000 / day</span>
              <span className={styles.statusActive}>Active</span>
            </div>

            <div className={styles.actions}>
              <button>Edit</button>
              <button className={styles.danger}>Remove</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCars;
