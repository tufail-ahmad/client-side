import { Link } from "react-router-dom";
import styles from "./ForgotPassword.module.css";

const ForgotPassword = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h1 className={styles.title}>Forgot Password</h1>
        <p className={styles.subtitle}>
          Enter your registered email address and we’ll send you a password
          reset link.
        </p>

        <form className={styles.form}>
          <label>Email Address</label>
          <input type="email" placeholder="you@example.com" required />

          <button type="submit" className={styles.submit}>
            Send Reset Link
          </button>
        </form>

        <div className={styles.links}>
          <Link to="/login">Back to Login</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
