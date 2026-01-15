import CarTypes from "../components/CarTypes";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.overlay}></div>

        <div className={styles.content}>
          <h1>
            Experience <span>Luxury</span> Driving in Dubai
          </h1>

          <p>
            Rent premium cars from verified hosts. Drive supercars, luxury
            sedans & SUVs with confidence.
          </p>
        </div>
      </section>
      <CarTypes />
    </>
  );
};

export default Home;
