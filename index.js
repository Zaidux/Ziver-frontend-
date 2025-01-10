import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const App = () => {
  // States for dynamic data
  const [username, setUsername] = useState("Guest");
  const [balance, setBalance] = useState(0);
  const [daysCheckedIn, setDaysCheckedIn] = useState(0);

  // Fetch backend data on component mount
  useEffect(() => {
    fetch("https://your-backend-url.com/api/dashboard") // Replace with your backend API URL
      .then((response) => response.json())
      .then((data) => {
        setUsername(data.username);
        setBalance(data.balance);
        setDaysCheckedIn(data.daysCheckedIn);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <header>
        <h1>Ziver</h1>
        <p>Welcome, {username}</p>
        <h2>$ZIV {balance}</h2>
      </header>

      <main>
        <section id="dashboard">
          <h3>{daysCheckedIn}-days check-in</h3>
          <p>Track your hard work here!</p>
          <button onClick={() => alert("Mining Started!")}>Start Mining</button>
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

// Render the app
ReactDOM.render(<App />, document.getElementById("root"));