import styles from "./BMW.module.css";

export default function BMW() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.overlay}></div>

        <div className={styles.content}>
          <h1>
            <span>BMW</span> Rental in Dubai
          </h1>
          <p>
            Dynamic performance, executive comfort and cutting-edge technology
            designed for city and highway driving
          </p>
        </div>
      </section>
    </>
  );
}
