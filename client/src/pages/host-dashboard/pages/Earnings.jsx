import { useState } from "react";
import styles from "./Earnings.module.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Sample Data
const monthlyEarnings = [
  { month: "Jan", earnings: 120000 },
  { month: "Feb", earnings: 95000 },
  { month: "Mar", earnings: 150000 },
  { month: "Apr", earnings: 80000 },
  { month: "May", earnings: 170000 },
  { month: "Jun", earnings: 200000 },
];

const Earnings = () => {
  const [filter, setFilter] = useState("Monthly"); // Monthly / Quarterly / Yearly

  return (
    <div className={styles.wrapper}>
      {/* Header */}
      <div className={styles.header}>
        <h1>Earnings</h1>
        <p>Track your revenue and total earnings</p>
      </div>

      {/* Filter */}
      <div className={styles.filter}>
        <button
          className={filter === "Monthly" ? styles.active : ""}
          onClick={() => setFilter("Monthly")}
        >
          Monthly
        </button>
        <button
          className={filter === "Quarterly" ? styles.active : ""}
          onClick={() => setFilter("Quarterly")}
        >
          Quarterly
        </button>
        <button
          className={filter === "Yearly" ? styles.active : ""}
          onClick={() => setFilter("Yearly")}
        >
          Yearly
        </button>
      </div>

      {/* Stats Cards */}
      <div className={styles.stats}>
        <div className={styles.card}>
          <h3>Total Earnings</h3>
          <span>AED 820,000</span>
        </div>
        <div className={styles.card}>
          <h3>Completed Trips</h3>
          <span>38</span>
        </div>
        <div className={styles.card}>
          <h3>Active Bookings</h3>
          <span>5</span>
        </div>
      </div>

      {/* Chart */}
      <div className={styles.chartWrapper}>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthlyEarnings}>
            <CartesianGrid stroke="#24242a" strokeDasharray="3 3" />
            <XAxis dataKey="month" stroke="#cfcfd6" />
            <YAxis
              stroke="#cfcfd6"
              tickFormatter={(value) => `AED ${value.toLocaleString()}`}
            />
            <Tooltip
              formatter={(value) => [
                `AED ${value.toLocaleString()}`,
                "Earnings",
              ]}
              contentStyle={{
                backgroundColor: "#14141a",
                borderRadius: "8px",
                border: "1px solid #24242a",
                color: "#ffffff",
              }}
            />
            <Bar dataKey="earnings" fill="#c89b3c" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Earnings;
