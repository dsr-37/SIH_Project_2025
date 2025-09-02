// src/App.js
import React, { useState } from "react";
import MapView from "./components/MapView";
import IssueFeed from "./components/IssueFeed";
import CategoryPieChart from "./components/CategoryPieChart";
import CategoryGrid from "./components/CategoryGrid";
import { fakeIssues } from "./fakedata"; // <-- NEW
import "./styles.css";

function App() {
  // Instead of fetching from Firestore for now:
  const [issues, setIssues] = useState(fakeIssues);

  return (
    <div className="dashboard">
      <header>Jharkhand Civic Issues</header>
      <main>
        <div className="map-section">
          <MapView issues={issues} />
        </div>
        <aside className="side-panel">
          <CategoryPieChart issues={issues} />
          <IssueFeed issues={issues} />
        </aside>
      </main>
      <footer>
        <CategoryGrid issues={issues} />
      </footer>
    </div>
  );
}
export default App;
