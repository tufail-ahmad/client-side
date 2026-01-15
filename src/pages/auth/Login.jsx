import { Link } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        {/* Left (Brand / Info) */}
        <div className={styles.left}>
          <h2>Welcome Back</h2>
          <p>
            Login to manage your luxury car rental website, bookings, pricing
            and business settings.
          </p>
        </div>

        {/* Right (Form) */}
        <div className={styles.right}>
          <h3>Login</h3>

          <form className={styles.form}>
            <div className={styles.field}>
              <label>Email</label>
              <input type="email" placeholder="you@example.com" />
            </div>

            <div className={styles.field}>
              <label>Password</label>
              <input type="password" placeholder="••••••••" />
            </div>

            <button type="submit" className={styles.loginBtn}>
              Login
            </button>

            <div className={styles.meta}>
              <Link to="/forgot">Forgot password?</Link>
              <span>
                Don’t have an account? <Link to="/sign-up">Sign up</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
