import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={styles.wrapper}>
      {/* Page Header */}
      <div className={styles.header}>
        <h1>My Profile</h1>
        <p>Manage your personal information and account settings</p>
      </div>

      {/* Profile Form */}
      <div className={styles.formWrapper}>
        {/* Profile Image */}
        <div className={styles.avatarSection}>
          <img
            src="https://images.unsplash.com/photo-1603415526960-f3c16b2de16f?q=80&w=400"
            alt="Profile"
          />
          <button>Change Photo</button>
        </div>

        {/* Form Fields */}
        <form className={styles.form}>
          {/* Name */}
          <div className={styles.field}>
            <label>Full Name</label>
            <input type="text" placeholder="Ahmed Khan" />
          </div>

          {/* Email */}
          <div className={styles.field}>
            <label>Email</label>
            <input type="email" placeholder="ahmed@example.com" />
          </div>

          {/* Phone */}
          <div className={styles.field}>
            <label>Phone Number</label>
            <input type="text" placeholder="+971 50 123 4567" />
          </div>

          {/* Location */}
          <div className={styles.field}>
            <label>Location</label>
            <input type="text" placeholder="Dubai, UAE" />
          </div>

          {/* Password */}
          <div className={styles.field}>
            <label>Password</label>
            <input type="password" placeholder="********" />
          </div>

          <button type="submit" className={styles.saveBtn}>
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
