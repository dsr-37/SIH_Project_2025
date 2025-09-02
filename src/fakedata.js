// src/fakeData.js

export const fakeIssues = [
  {
    id: '1',
    lat: 23.3441,
    lng: 85.3096,
    photoUrl: "https://images.pexels.com/photos/924127/pexels-photo-924127.webp",
    category: "Garbage",
    description: "Garbage pile not cleared",
    timestamp: new Date(Date.now() - 2 * 3600 * 1000).toISOString(), // 2 hours ago
    location: "Ranchi",
  },
  {
    id: '2',
    lat: 23.7957,
    lng: 86.4304,
    photoUrl: "https://images.pexels.com/photos/433452/pexels-photo-433452.webp",
    category: "Road",
    description: "Major road pothole",
    timestamp: new Date(Date.now() - 3 * 3600 * 1000).toISOString(), // 3 hours ago
    location: "Dhanbad",
  },
  {
    id: '3',
    lat: 22.8046,
    lng: 86.2029,
    photoUrl: "https://images.pexels.com/photos/164631/pexels-photo-164631.webp",
    category: "Water",
    description: "Water leak from pipeline",
    timestamp: new Date(Date.now() - 3500 * 1000).toISOString(), // ~58 mins ago
    location: "Jamshedpur",
  },
  {
    id: '4',
    lat: 24.0027,
    lng: 84.0035,
    photoUrl: "https://images.pexels.com/photos/56144/pexels-photo-56144.webp",
    category: "Streetlight",
    description: "Streetlight outage",
    timestamp: new Date(Date.now() - 1800 * 1000).toISOString(), // 30 min ago
    location: "Palamu",
  },
  {
    id: '5',
    lat: 24.3696,
    lng: 83.3939,
    photoUrl: "https://images.pexels.com/photos/206866/pexels-photo-206866.webp",
    category: "Others",
    description: "Open manhole uncovered",
    timestamp: new Date(Date.now() - 10000 * 1000).toISOString(), // 2.8 hours ago
    location: "Garhwa",
  },
  // Add more like above for realism!
];
