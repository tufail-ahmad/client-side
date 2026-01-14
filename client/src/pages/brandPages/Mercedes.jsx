import styles from "./Mercedes.module.css";

export default function Mercedes() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.overlay}></div>

        <div className={styles.content}>
          <h1>
            <span>Mercedes Benz</span> Rental in Dubai
          </h1>
          <p>
            Refined luxury, advanced technology and smooth performance for
            executive and lifestyle travel
          </p>
        </div>
      </section>
    </>
  );
}
