import styles from "./RollsRoyce.module.css";

export default function RollsRoyce() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.overlay}></div>

        <div className={styles.content}>
          <h1>
            <span>Rolls Royce</span> Rental in Dubai
          </h1>
          <p>
            Unmatched luxury, handcrafted elegance and first-class comfort for
            those who expect nothing but the best
          </p>
        </div>
      </section>
    </>
  );
}
