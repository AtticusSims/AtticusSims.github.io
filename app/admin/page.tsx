"use client";

import { useState, useEffect } from "react";
import styles from "./admin.module.css";

interface BannerCoord {
  subject: string;
  url: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

// Default credentials
const DEFAULT_USERNAME = "admin";
const DEFAULT_PASSWORD = "admin";

export default function AdminPage() {
  const [coords, setCoords] = useState<BannerCoord[]>([]);
  const [message, setMessage] = useState<string>("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showChangeCredentials, setShowChangeCredentials] = useState(false);
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      fetch("/api/banner-coords")
        .then((res) => res.json())
        .then((data) => setCoords(data))
        .catch((err) => setMessage("Error loading coordinates"));
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === DEFAULT_USERNAME && password === DEFAULT_PASSWORD) {
      setIsAuthenticated(true);
      setMessage("");
    } else {
      setMessage("Invalid credentials");
    }
  };

  const handleUrlChange = (index: number, newUrl: string) => {
    const newCoords = [...coords];
    newCoords[index] = { ...newCoords[index], url: newUrl };
    setCoords(newCoords);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/banner-coords", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(coords),
      });

      if (response.ok) {
        setMessage("URLs updated successfully!");
      } else {
        setMessage("Error updating URLs");
      }
    } catch (error) {
      setMessage("Error updating URLs");
    }
  };

  const handleCredentialsUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/update-credentials", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: newUsername,
          password: newPassword,
        }),
      });

      if (response.ok) {
        setMessage("Credentials updated successfully! Please log in again.");
        setIsAuthenticated(false);
        setShowChangeCredentials(false);
      } else {
        setMessage("Error updating credentials");
      }
    } catch (error) {
      setMessage("Error updating credentials");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Admin Login</h1>
        {message && (
          <p className={`${styles.message} ${styles.error}`}>{message}</p>
        )}
        <form onSubmit={handleLogin} className={styles.loginForm}>
          <div className={styles.formGroup}>
            <label className={styles.label}>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={styles.input}
                required
              />
            </label>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
                required
              />
            </label>
          </div>
          <button type="submit" className={styles.button}>
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Banner URL Admin</h1>
        <div className={styles.headerButtons}>
          <button onClick={handleSubmit} className={styles.saveButton}>
            Save Changes
          </button>
          <button
            onClick={() => setShowChangeCredentials(!showChangeCredentials)}
            className={styles.credentialsButton}
          >
            Change Credentials
          </button>
          <button
            onClick={() => setIsAuthenticated(false)}
            className={styles.logoutButton}
          >
            Logout
          </button>
        </div>
      </div>
      {message && <p className={styles.message}>{message}</p>}

      {showChangeCredentials && (
        <form
          onSubmit={handleCredentialsUpdate}
          className={styles.credentialsForm}
        >
          <h2 className={styles.subtitle}>Change Admin Credentials</h2>
          <div className={styles.formGroup}>
            <label className={styles.label}>
              New Username:
              <input
                type="text"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                className={styles.input}
                required
              />
            </label>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>
              New Password:
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className={styles.input}
                required
              />
            </label>
          </div>
          <button type="submit" className={styles.button}>
            Update Credentials
          </button>
        </form>
      )}

      <div className={styles.coordsList}>
        {coords.map((coord, index) => (
          <div key={index} className={styles.coordItem}>
            <label className={styles.label}>
              {coord.subject}:
              <input
                type="text"
                value={coord.url}
                onChange={(e) => handleUrlChange(index, e.target.value)}
                className={styles.input}
              />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
