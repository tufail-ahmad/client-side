import styles from "./Bookings.module.css";

const Bookings = () => {
  return (
    <div className={styles.wrapper}>
      {/* Page Header */}
      <div className={styles.header}>
        <div>
          <h1>Bookings</h1>
          <p>View and manage all car bookings</p>
        </div>
      </div>

      {/* Bookings Table */}
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Car</th>
              <th>Customer</th>
              <th>Dates</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <strong>Lamborghini Huracán</strong>
                <span>Sports • Luxury</span>
              </td>
              <td>
                Ahmed Khan
                <span>Dubai</span>
              </td>
              <td>
                12 Jan – 15 Jan
                <span>3 Days</span>
              </td>
              <td>AED 225,000</td>
              <td>
                <span className={styles.confirmed}>Confirmed</span>
              </td>
            </tr>

            <tr>
              <td>
                <strong>BMW X5</strong>
                <span>SUV • Premium</span>
              </td>
              <td>
                John Smith
                <span>Abu Dhabi</span>
              </td>
              <td>
                18 Jan – 20 Jan
                <span>2 Days</span>
              </td>
              <td>AED 36,000</td>
              <td>
                <span className={styles.pending}>Pending</span>
              </td>
            </tr>

            <tr>
              <td>
                <strong>Mercedes G-Class</strong>
                <span>Luxury • SUV</span>
              </td>
              <td>
                Ali Raza
                <span>Sharjah</span>
              </td>
              <td>
                25 Jan – 28 Jan
                <span>3 Days</span>
              </td>
              <td>AED 105,000</td>
              <td>
                <span className={styles.completed}>Completed</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
