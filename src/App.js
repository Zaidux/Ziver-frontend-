import React, { useState, useEffect } from "react";
import "./styles.css";

const App = () => {
  // States for user data and message
  const [username, setUsername] = useState("Guest");
  const [balance, setBalance] = useState(0);
  const [daysCheckedIn, setDaysCheckedIn] = useState(0);
  const [message, setMessage] = useState(""); // New state for message

  // Fetch backend data
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await fetch(
          "https://ziver-minig-app.onrender.com/api/dashboard"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setUsername(data.username || "Guest");
        setBalance(data.balance || 0);
        setDaysCheckedIn(data.daysCheckedIn || 0);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    const fetchMessage = async () => {
      try {
        const response = await fetch("http://localhost:5000/");
        const data = await response.json();
        setMessage(data.message);
      } catch (error) {
        console.error("Error fetching message:", error);
      }
    };

    fetchDashboardData();
    fetchMessage(); // Fetch message data
  }, []);

  return (
    <div className="app">
      <header>
        <h1>Ziver</h1>
        <p>Welcome, {username}</p>
        <h2>$ZIV {balance}</h2>
      </header>

      <main>
        <section id="dashboard">
          <h3>{daysCheckedIn}-day streak</h3>
          <p>Track your progress!</p>
          <button onClick={() => alert("Mining Started!")}>Start Mining</button>
        </section>

        <section id="message">
          <h3>{message || 'Loading message...'}</h3> {/* Display the fetched message */}
        </section>
      </main>

      <footer>
        <nav>
          <a href="#">Home</a>
          <a href="#">Earn</a>
          <a href="#">Frens</a>
          <a href="#">Stats</a>
          <a href="#">Wallet</a>
        </nav>
      </footer>
    </div>
  );
};

export default App;
import ErrorBoundary from './ErrorBoundary';
<ErrorBoundary>
  <App />
</ErrorBoundary>