import styles from "./Overview.module.css";

const Overview = () => {
  return (
    <div className={styles.wrapper}>
      {/* Page Header */}
      <div className={styles.header}>
        <h1>Dashboard Overview</h1>
        <p>Welcome back! Here’s a quick summary of your hosting activity.</p>
      </div>

      {/* Stats Cards */}
      <div className={styles.stats}>
        <div className={styles.card}>
          <h3>Total Cars</h3>
          <span>12</span>
        </div>

        <div className={styles.card}>
          <h3>Active Bookings</h3>
          <span>5</span>
        </div>

        <div className={styles.card}>
          <h3>Completed Trips</h3>
          <span>38</span>
        </div>

        <div className={styles.card}>
          <h3>Total Earnings</h3>
          <span>₹ 4,80,000</span>
        </div>
      </div>

      {/* Recent Activity */}
      <div className={styles.section}>
        <h2>Recent Activity</h2>

        <div className={styles.activity}>
          <div className={styles.activityItem}>
            <span>Lamborghini Huracán booked</span>
            <small>2 hours ago</small>
          </div>

          <div className={styles.activityItem}>
            <span>BMW X5 trip completed</span>
            <small>Yesterday</small>
          </div>

          <div className={styles.activityItem}>
            <span>New car added: Mercedes G-Class</span>
            <small>3 days ago</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
