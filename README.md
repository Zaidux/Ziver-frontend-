<!-- auth.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sign Up / Login</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: black;
      color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }
    form {
      background: #222;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 0 10px white;
    }
    input {
      width: 100%;
      padding: 10px;
      margin: 10px 0;
      border: none;
      border-radius: 5px;
    }
    button {
      width: 100%;
      padding: 10px;
      background: #28a745;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h1>Sign Up / Login</h1>
  <form id="authForm">
    <input type="email" id="email" placeholder="Enter your email" required>
    <button type="submit">Register / Login</button>
  </form>

  <script>
    const form = document.getElementById("authForm");
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;

      // Send to backend
      const response = await fetch("https://your-backend-url.com/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      
      const result = await response.json();
      if (response.ok) {
        alert(result.message);
      } else {
        alert(result.error);
      }
    });
  </script>
</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ziver Mining App</title>
    <style>
        /* General Styling */
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #000;
            color: #fff;
            overflow-x: hidden;
        }

        .container {
            padding: 20px;
        }

        /* Background Styling - Starry Space */
        body::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background: radial-gradient(#ffffff 0.5px, transparent 0.5px);
            background-size: 20px 20px;
            z-index: -1;
        }

        /* Top Section */
        .top-section {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .app-name {
            font-size: 1.5rem;
            font-weight: bold;
        }
        .username {
            font-size: 1.2rem;
        }

        .balance {
            text-align: center;
            font-size: 2.5rem;
            margin-top: 20px;
        }

        /* Section Styles */
        .section {
            background: #121212;
            padding: 15px;
            border-radius: 10px;
            margin: 20px 0;
        }

        .farming-btn {
            background-color: #121212;
            border-radius: 8px;
            text-align: center;
            padding: 15px;
            font-size: 1.2rem;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        .farming-btn:hover {
            background-color: #1e1e1e;
        }

        /* Stats Section */
        .stats-section {
            padding: 20px;
            text-align: left;
            background: #1e1e1e;
            border-radius: 10px;
            margin-top: 20px;
        }
        .stats-section h3 {
            margin-bottom: 10px;
            font-size: 1.3rem;
            color: #9bff00;
        }

        .stat {
            margin-bottom: 10px;
            font-size: 1.1rem;
        }

        /* Bottom Navigation */
        .bottom-nav {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            background: #121212;
            display: flex;
            justify-content: space-around;
            padding: 10px 0;
        }

        .nav-item {
            text-align: center;
            font-size: 1rem;
            color: #fff;
            cursor: pointer;
            transition: color 0.3s ease;
        }

        .nav-item:hover {
            color: #9bff00;
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Top Section -->
        <div class="top-section">
            <div class="app-name">Ziver</div>
            <div class="username">Welcome, [username]</div>
        </div>

        <div class="balance">
            $ZIV 0
        </div>

        <!-- Check-in Section -->
        <div class="section">
            <div class="text">
                <h3>0-days check-in</h3>
                <p>Track your hard work here!</p>
            </div>
        </div>

        <!-- Start Mining Button -->
        <div class="farming-btn">
            Start Mining
        </div>

        <!-- Stats Section -->
        <div class="stats-section">
            <h3>Mining Stats</h3>
            <div class="stat">Total Supply Allocated: 10,000,000,000 $ZIV</div>
            <div class="stat">Mined So Far: [Backend Data]</div>
            <div class="stat">Total Registered Users: [Backend Data]</div>
            <div class="stat">Total Online Users: [Backend Data]</div>
        </div>
    </div>

    <!-- Bottom Navigation -->
    <div class="bottom-nav">
        <div class="nav-item">Home</div>
        <div class="nav-item">Earn</div>
        <div class="nav-
item">frens</div>
        <div class="nav-
item">Stats</div>
        <div class="nav-item">Wallet</div>
    </div>
</body>
</html>
