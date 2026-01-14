import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import styles from "./HostDashboardLayout.module.css";

const HostDashboardLayout = () => {
  const location = useLocation();
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const tabs = [
    { name: "Overview", path: "/host-dashboard" },
    { name: "My Cars", path: "/host-dashboard/my-cars" },
    { name: "Bookings", path: "/host-dashboard/bookings" },
    { name: "Earnings", path: "/host-dashboard/earnings" },
    { name: "Profile", path: "/host-dashboard/profile" },
  ];

  const handleLinkClick = () => {
    setMobileDropdownOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      {/* Desktop Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.logo}>Host Panel</div>
        <nav className={styles.nav}>
          {tabs.map((tab) => {
            const isActive = location.pathname === tab.path;
            return (
              <Link
                key={tab.name}
                to={tab.path}
                className={`${styles.tab} ${isActive ? styles.active : ""}`}
              >
                {tab.name}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Mobile / Tablet Dropdown */}
      <div className={styles.mobilePanel}>
        <button
          className={styles.dropdownToggle}
          onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
        >
          <span>Host Panel</span>
          <FiChevronDown
            className={`${styles.arrow} ${
              mobileDropdownOpen ? styles.open : ""
            }`}
          />
        </button>

        {mobileDropdownOpen && (
          <nav className={styles.mobileNav}>
            {tabs.map((tab) => {
              const isActive = location.pathname === tab.path;
              return (
                <Link
                  key={tab.name}
                  to={tab.path}
                  className={`${styles.tab} ${isActive ? styles.active : ""}`}
                  onClick={handleLinkClick}
                >
                  {tab.name}
                </Link>
              );
            })}
          </nav>
        )}
      </div>

      {/* Main content */}
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default HostDashboardLayout;
