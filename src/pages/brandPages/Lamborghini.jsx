import styles from "./Lamborghini.module.css";

export default function Lamborghini() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.overlay}></div>

        <div className={styles.content}>
          <h1>
            <span>Lamborghini</span> Rental in Dubai
          </h1>
          <p>
            Experience unmatched power, iconic design & extreme performance on
            Dubai roads
          </p>
        </div>
      </section>
    </>
  );
}
