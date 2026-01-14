import styles from "./Ferrari.module.css";

export default function Ferrari() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.overlay}></div>

        <div className={styles.content}>
          <h1>
            <span>Ferrari</span> Rental in Dubai
          </h1>
          <p>
            Pure Italian performance, speed & racing heritage for an
            unforgettable driving experience
          </p>
        </div>
      </section>
    </>
  );
}
