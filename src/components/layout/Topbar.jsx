import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from "react-native";
import axios from "axios";

export default function Topbar() {
  const [running, setRunning] = useState(false);
  const [search, setSearch] = useState("");

  const runBot = async () => {
    try {
      setRunning(true);

      await axios.post(
        "http://10.0.2.2:8000/bot/run"
      );

      Alert.alert(
        "Success",
        "Email Bot executed successfully."
      );

    } catch (err) {
      console.error(err);

      Alert.alert(
        "Error",
        "Unable to run Email Bot."
      );
    } finally {
      setRunning(false);
    }
  };

  const refresh = () => {
    // We will handle screen refresh through navigation/state
    // instead of window.location.reload()
    Alert.alert("Refresh", "Refreshing tasks...");
  };

  return (
    <View style={styles.container}>

      {/* Top Header */}

      <View style={styles.header}>

        <Text style={styles.logo}>
          📧 Smart Email Bot
        </Text>

        <View style={styles.headerRight}>

          <TouchableOpacity
            style={styles.iconButton}
            onPress={refresh}
          >
            <Text style={styles.icon}>
              🔄
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconButton}
          >
            <Text style={styles.icon}>
              🔔
            </Text>

            <View style={styles.badge}>
              <Text style={styles.badgeText}>
                4
              </Text>
            </View>
          </TouchableOpacity>

          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              B
            </Text>
          </View>

        </View>

      </View>

      {/* Search */}

      <View style={styles.searchContainer}>

        <Text style={styles.searchIcon}>
          🔍
        </Text>

        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Search tasks..."
          placeholderTextColor="#94a3b8"
          style={styles.searchInput}
        />

      </View>

      {/* Run Bot */}

      <TouchableOpacity
        style={[
          styles.runButton,
          running && styles.disabledButton,
        ]}
        onPress={runBot}
        disabled={running}
      >

        {running ? (
          <>
            <ActivityIndicator
              size="small"
              color="#ffffff"
            />

            <Text style={styles.runButtonText}>
              Running...
            </Text>
          </>
        ) : (
          <>
            <Text style={styles.playIcon}>
              ▶
            </Text>

            <Text style={styles.runButtonText}>
              Run Bot
            </Text>
          </>
        )}

      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    paddingVertical: 12,

    borderBottomWidth: 1,
    borderBottomColor: "#e2e8f0",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  logo: {
    fontSize: 19,
    fontWeight: "700",
    color: "#0f172a",
  },

  headerRight: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconButton: {
    marginLeft: 12,
    position: "relative",
    padding: 4,
  },

  icon: {
    fontSize: 20,
  },

  badge: {
    position: "absolute",
    right: -2,
    top: -3,

    minWidth: 16,
    height: 16,

    borderRadius: 8,

    backgroundColor: "#ef4444",

    justifyContent: "center",
    alignItems: "center",
  },

  badgeText: {
    color: "#ffffff",
    fontSize: 10,
    fontWeight: "700",
  },

  avatar: {
    width: 36,
    height: 36,

    borderRadius: 18,

    backgroundColor: "#2563eb",

    justifyContent: "center",
    alignItems: "center",

    marginLeft: 12,
  },

  avatarText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#f8fafc",

    borderRadius: 10,

    marginTop: 14,

    paddingHorizontal: 12,

    height: 46,
  },

  searchIcon: {
    fontSize: 18,
    marginRight: 8,
  },

  searchInput: {
    flex: 1,
    fontSize: 15,
    color: "#0f172a",
  },

  runButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#2563eb",

    borderRadius: 10,

    height: 46,

    marginTop: 12,
  },

  disabledButton: {
    opacity: 0.7,
  },

  playIcon: {
    color: "#ffffff",
    fontSize: 15,
    marginRight: 8,
  },

  runButtonText: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "600",
  },
});