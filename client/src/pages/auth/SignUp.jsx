import styles from "./Signup.module.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        {/* Left Info */}
        <div className={styles.left}>
          <h2>Create Your Account</h2>
          <p>
            Launch your luxury car rental website in minutes. Manage cars,
            pricing, bookings and customers from one dashboard.
          </p>
        </div>

        {/* Right Form */}
        <div className={styles.right}>
          <h3>Sign Up</h3>

          <form className={styles.form}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label>First Name</label>
                <input type="text" placeholder="John" />
              </div>

              <div className={styles.field}>
                <label>Last Name</label>
                <input type="text" placeholder="Doe" />
              </div>
            </div>

            <div className={styles.field}>
              <label>Email</label>
              <input type="email" placeholder="you@example.com" />
            </div>

            <div className={styles.field}>
              <label>Password</label>
              <input type="password" placeholder="••••••••" />
            </div>

            <div className={styles.field}>
              <label>Confirm Password</label>
              <input type="password" placeholder="••••••••" />
            </div>

            <button type="submit" className={styles.signupBtn}>
              Create Account
            </button>

            <div className={styles.meta}>
              <span>
                Already have an account? <Link to="/login">Login</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
