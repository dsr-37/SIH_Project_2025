// src/components/IssueFeed.js
import React from "react";

function timeAgo(ts) {
  const now = new Date();
  const diff = (now - new Date(ts)) / 1000;
  if (diff < 60) return `${Math.floor(diff)} secs ago`;
  if (diff < 3600) return `${Math.floor(diff/60)} mins ago`;
  if (diff < 86400) return `${Math.floor(diff/3600)} hours ago`;
  return `${Math.floor(diff/86400)} days ago`;
}

function IssueFeed({ issues }) {
  const sorted = [...issues].sort((a, b) => b.timestamp - a.timestamp).slice(0, 10);
  return (
    <div>
      <h4>Incoming Feed</h4>
      <ul>
        {sorted.map(issue =>
          <li key={issue.id}>
            <img src={issue.photoUrl} width="30" alt="" />
            <span>{issue.description}</span>
            <span>{issue.location}</span>
            <span>{timeAgo(issue.timestamp)}</span>
          </li>
        )}
      </ul>
    </div>
  );
}
export default IssueFeed;
