export interface CivicReport {
  id: string;
  category: string;
  description: string;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  imageUrl: string;
  timestamp: number;
  status: "pending" | "resolved" | "in-progress";
  district: string;
}

export const CATEGORIES = [
  "Sanitation and Waste Management",
  "Roads and Infrastructure", 
  "Drainage and Sewerage",
  "Public Health and Hygiene",
  "Water Supply",
  "Illegal Construction and Encroachments",
  "Public Property and Utilities",
  "Traffic and Parking"
];

export const mockReports: CivicReport[] = [
  // Sanitation and Waste Management
  {
    id: "1",
    category: "Sanitation and Waste Management",
    description: "Overflowing garbage bins near main market",
    location: { lat: 23.3441, lng: 85.3096, address: "Main Market, Ranchi" },
    imageUrl: "/garbage.jpg",
    timestamp: Date.now() - 2 * 60 * 60 * 1000,
    status: "pending",
    district: "Ranchi"
  },
  {
    id: "2", 
    category: "Sanitation and Waste Management",
    description: "Public toilet not cleaned for days",
    location: { lat: 22.8046, lng: 86.2029, address: "Steel City, East Singhbhum" },
    imageUrl: "/sanitation.jpg",
    timestamp: Date.now() - 5 * 60 * 60 * 1000,
    status: "pending",
    district: "East Singhbhum"
  },
  {
    id: "3",
    category: "Sanitation and Waste Management", 
    description: "Illegal dumping site near residential area",
    location: { lat: 23.7957, lng: 86.4304, address: "Coal City, Dhanbad" },
    imageUrl: "/garbage.jpg",
    timestamp: Date.now() - 8 * 60 * 60 * 1000,
    status: "in-progress",
    district: "Dhanbad"
  },
  {
    id: "4",
    category: "Sanitation and Waste Management",
    description: "Medical waste improperly disposed",
    location: { lat: 24.2900, lng: 86.3800, address: "Hospital Road, Deoghar" },
    imageUrl: "/sanitation.jpg",
    timestamp: Date.now() - 22 * 60 * 60 * 1000,
    status: "pending",
    district: "Deoghar"
  },
  {
    id: "5",
    category: "Sanitation and Waste Management",
    description: "Leaking garbage truck causing spillage",
    location: { lat: 22.7868, lng: 86.1848, address: "Bistupur, East Singhbhum" },
    imageUrl: "/garbage.jpg",
    timestamp: Date.now() - 13 * 60 * 60 * 1000,
    status: "resolved",
    district: "East Singhbhum"
  },
  {
    id: "6",
    category: "Sanitation and Waste Management",
    description: "Garbage not collected for a week", 
    location: { lat: 23.2519, lng: 85.8401, address: "Main Road, Ramgarh" },
    imageUrl: "/garbage.jpg",
    timestamp: Date.now() - 7 * 60 * 60 * 1000,
    status: "resolved",
    district: "Ramgarh"
  },

  // Roads and Infrastructure  
  {
    id: "7",
    category: "Roads and Infrastructure",
    description: "Large pothole causing traffic issues",
    location: { lat: 23.6702, lng: 85.3136, address: "City Center, Bokaro" },
    imageUrl: "/road.jpeg", 
    timestamp: Date.now() - 1 * 60 * 60 * 1000,
    status: "pending",
    district: "Bokaro"
  },
  {
    id: "8",
    category: "Roads and Infrastructure",
    description: "Broken road divider creating safety hazard",
    location: { lat: 24.5937, lng: 85.3647, address: "Main Road, Hazaribagh" },
    imageUrl: "/road.jpeg",
    timestamp: Date.now() - 12 * 60 * 60 * 1000,
    status: "resolved",
    district: "Hazaribagh"
  },
  {
    id: "9", 
    category: "Roads and Infrastructure",
    description: "Missing speed breakers near school zone",
    location: { lat: 24.1854, lng: 86.3009, address: "School Road, Giridih" },
    imageUrl: "/road.jpeg",
    timestamp: Date.now() - 18 * 60 * 60 * 1000,
    status: "pending",
    district: "Giridih"
  },

  // Drainage and Sewerage
  {
    id: "10",
    category: "Drainage and Sewerage",
    description: "Blocked drainage causing waterlogging",
    location: { lat: 23.6693, lng: 86.1511, address: "Sector 4, Bokaro" },
    imageUrl: "/sewage.jpg",
    timestamp: Date.now() - 3 * 60 * 60 * 1000,
    status: "pending",
    district: "Bokaro"
  },
  {
    id: "11",
    category: "Drainage and Sewerage",
    description: "Open sewage line near residential area",
    location: { lat: 24.4823, lng: 86.6977, address: "Civil Lines, Deoghar" },
    imageUrl: "/sewage.jpg",
    timestamp: Date.now() - 6 * 60 * 60 * 1000,
    status: "in-progress",
    district: "Deoghar"
  },
  {
    id: "12",
    category: "Drainage and Sewerage",
    description: "Manhole cover missing creating safety hazard",
    location: { lat: 24.2200, lng: 84.8900, address: "Main Road, Chatra" },
    imageUrl: "/sanitation.jpg",
    timestamp: Date.now() - 24 * 60 * 60 * 1000,
    status: "in-progress",
    district: "Chatra"
  },

  // Public Health and Hygiene
  {
    id: "13",
    category: "Public Health and Hygiene", 
    description: "Stagnant water breeding mosquitoes",
    location: { lat: 23.8103, lng: 86.4669, address: "ISM Campus, Dhanbad" },
    imageUrl: "/sanitation.jpg",
    timestamp: Date.now() - 4 * 60 * 60 * 1000,
    status: "pending",
    district: "Dhanbad"
  },
  {
    id: "14",
    category: "Public Health and Hygiene",
    description: "Dead animal on roadside causing health hazard", 
    location: { lat: 23.2599, lng: 85.8491, address: "Main Road, Ramgarh" },
    imageUrl: "/da.webp",
    timestamp: Date.now() - 7 * 60 * 60 * 1000,
    status: "resolved",
    district: "Ramgarh"
  },
  {
    id: "15",
    category: "Public Health and Hygiene",
    description: "Overflowing septic tank spreading diseases",
    location: { lat: 23.2400, lng: 85.8200, address: "Colony Road, Ramgarh" },
    imageUrl: "/sanitation.jpg",
    timestamp: Date.now() - 25 * 60 * 60 * 1000,
    status: "pending",
    district: "Ramgarh"
  },

  // Water Supply
  {
    id: "16", 
    category: "Water Supply",
    description: "No water supply for 3 days in residential area",
    location: { lat: 24.0734, lng: 84.0687, address: "Gandhi Chowk, Palamu" },
    imageUrl: "/fs.jpg",
    timestamp: Date.now() - 9 * 60 * 60 * 1000,
    status: "pending",
    district: "Palamu"
  },
  {
    id: "17",
    category: "Water Supply", 
    description: "Burst water pipeline wasting clean water",
    location: { lat: 23.3569, lng: 85.3358, address: "Doranda, Ranchi" },
    imageUrl: "/pipeline.jpg",
    timestamp: Date.now() - 11 * 60 * 60 * 1000,
    status: "in-progress",
    district: "Ranchi"
  },
  {
    id: "18",
    category: "Water Supply",
    description: "Contaminated water supply causing illness",
    location: { lat: 24.2049, lng: 84.9123, address: "New Area, Chatra" },
    imageUrl: "/fs.jpg", 
    timestamp: Date.now() - 15 * 60 * 60 * 1000,
    status: "pending",
    district: "Chatra"
  },

  // Illegal Construction and Encroachments
  {
    id: "19",
    category: "Illegal Construction and Encroachments",
    description: "Street vendors encroaching footpath",
    location: { lat: 23.3729, lng: 85.3350, address: "Albert Ekka Chowk, Ranchi" },
    imageUrl: "/illegalc.jpeg",
    timestamp: Date.now() - 16 * 60 * 60 * 1000,
    status: "resolved",
    district: "Ranchi"
  },

  // Public Property and Utilities
  {
    id: "20",
    category: "Public Property and Utilities",
    description: "Broken streetlight creating safety issue",
    location: { lat: 23.7307, lng: 86.4296, address: "Bank More, Dhanbad" },
    imageUrl: "/strretlight.webp",
    timestamp: Date.now() - 14 * 60 * 60 * 1000,
    status: "pending", 
    district: "Dhanbad"
  },
  {
    id: "21",
    category: "Public Property and Utilities",
    description: "Public park equipment damaged",
    location: { lat: 24.6208, lng: 85.3647, address: "Canary Hill, Hazaribagh" },
    imageUrl: "/strretlight.webp",
    timestamp: Date.now() - 19 * 60 * 60 * 1000,
    status: "pending",
    district: "Hazaribagh"
  },

  // Traffic and Parking
  {
    id: "22",
    category: "Traffic and Parking",
    description: "Illegal parking blocking main road",
    location: { lat: 22.8077, lng: 86.2030, address: "Jubilee Park, East Singhbhum" },
    imageUrl: "/parking.jpeg",
    timestamp: Date.now() - 20 * 60 * 60 * 1000,
    status: "pending",
    district: "East Singhbhum"
  },
  {
    id: "23", 
    category: "Traffic and Parking",
    description: "Missing traffic signal causing accidents",
    location: { lat: 24.1767, lng: 86.3028, address: "Station Road, Giridih" },
    imageUrl: "/parking.jpeg",
    timestamp: Date.now() - 21 * 60 * 60 * 1000,
    status: "resolved",
    district: "Giridih"
  },
];
