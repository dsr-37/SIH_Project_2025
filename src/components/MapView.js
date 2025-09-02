import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Red dot icon (customize as needed)
const redDot = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [2, -37],
});

const JHARKHAND_CENTER = [23.6102, 85.2799]; // Rough center

function MapView({ issues }) {
  const [selected, setSelected] = useState(null);

  return (
    <div id="map-container">
      <MapContainer 
        center={JHARKHAND_CENTER} 
        zoom={7} 
        style={{ width: "100%", height: "410px", borderRadius: "14px" }}
        maxBounds={[[21.5, 82.5], [25.5, 87.5]]}
        >
        <TileLayer
          // OpenStreetMap tiles (free, no key needed)
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />
        {issues.map(issue => (
          <Marker 
            key={issue.id} 
            position={[issue.lat, issue.lng]} 
            icon={redDot}
            eventHandlers={{
              click: () => setSelected(issue)
            }}
          />
        ))}
        {selected && (
          <Popup 
            position={[selected.lat, selected.lng]} 
            eventHandlers={{ remove: () => setSelected(null) }}>
            <div>
              <img src={selected.photoUrl} alt="Issue" style={{ width: "100px", borderRadius: "4px" }} />
              <div><b>{selected.description}</b></div>
              <div>Category: {selected.category}</div>
              <div>Location: {selected.location}</div>
              <button onClick={() => setSelected(null)}>Close</button>
            </div>
          </Popup>
        )}
      </MapContainer>
    </div>
  );
}

export default MapView;
