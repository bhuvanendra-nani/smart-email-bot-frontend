
import React from "react";

export default function DashboardLayout({ children }) {
  return (
    <div style={styles.safeArea}>
      <div style={styles.container}>
        {children}
      </div>
    </div>
  );
}

const styles = {
  safeArea: {
    minHeight: "100vh",
    backgroundColor: "#FFFFFF",
  },

  container: {
    minHeight: "100vh",
  },
};

