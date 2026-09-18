
import React, { useEffect, useState } from "react";
import api from "../services/api";

import DashboardLayout from "../components/layout/DashboardLayout";
import StatCard from "../components/cards/StatCard";

import LoadingState from "../components/common/LoadingState";
import EmptyState from "../components/common/EmptyState";
import ErrorState from "../components/common/ErrorState";
import OfflineState from "../components/common/OfflineState";
import SessionExpired from "../components/common/SessionExpired";

export default function Dashboard() {
  const [groups, setGroups] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [offline, setOffline] = useState(false);
  const [sessionExpired, setSessionExpired] = useState(false);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      setLoading(true);
      setError("");
      setOffline(false);
      setSessionExpired(false);

      const response = await api.get("/tasks/");

      setGroups(response.data);
    } catch (err) {
      console.log("Dashboard error:", err);

      if (
        err.code === "ERR_NETWORK" ||
        err.message === "Network Error"
      ) {
        setOffline(true);
      } else if (err.response?.status === 401) {
        setSessionExpired(true);
      } else {
        setError("Unable to connect to server.");
      }
    } finally {
      setLoading(false);
    }
  };

  // -----------------------------
  // STATES
  // -----------------------------

  if (loading) {
    return <LoadingState />;
  }

  if (offline) {
    return <OfflineState onRetry={loadTasks} />;
  }

  if (sessionExpired) {
    return (
      <SessionExpired
        onLogin={() => {
          alert("Please login again.");
        }}
      />
    );
  }

  if (error) {
    return (
      <ErrorState
        message={error}
        onRetry={loadTasks}
      />
    );
  }

  if (!groups) {
    return <EmptyState />;
  }

  // -----------------------------
  // TASK COUNTS
  // -----------------------------

  const totalTasks = Object.values(groups)
    .flat()
    .length;

  const internships = groups?.Internship?.length ?? 0;
  const placements = groups?.Placement?.length ?? 0;
  const tests = groups?.["Online Test"]?.length ?? 0;
  const academics = groups?.Academics?.length ?? 0;

  // -----------------------------
  // STATISTICS
  // -----------------------------

  const stats = [
    {
      title: "Total Tasks",
      value: totalTasks,
      icon: "📧",
    },
    {
      title: "Internships",
      value: internships,
      icon: "💼",
    },
    {
      title: "Placements",
      value: placements,
      icon: "🎯",
    },
    {
      title: "Online Tests",
      value: tests,
      icon: "📝",
    },
    {
      title: "Academics",
      value: academics,
      icon: "📚",
    },
  ];

  // -----------------------------
  // UI
  // -----------------------------

  return (
    <DashboardLayout>
      <div style={styles.container}>
        {/* Header */}

        <div style={styles.header}>
          <h1 style={styles.title}>👋 Welcome Back</h1>

          <p style={styles.subtitle}>
            You have {totalTasks} pending tasks today.
          </p>
        </div>

        {/* Statistics */}

        <div style={styles.statsContainer}>
          {stats.map((stat, index) => (
            <div key={index} style={styles.cardFull}>
              <StatCard
                title={stat.title}
                value={stat.value}
                icon={stat.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

const styles = {
  container: {
    padding: "20px",
    paddingBottom: "40px",
  },

  header: {
    marginBottom: "30px",
  },

  title: {
    fontSize: "28px",
    fontWeight: 700,
    margin: 0,
  },

  subtitle: {
    fontSize: "16px",
    color: "#666",
    marginTop: "8px",
  },

  statsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },

  cardFull: {
    width: "100%",
  },
};

