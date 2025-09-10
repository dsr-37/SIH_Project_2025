export interface CivicReport {
  id: string;
  category: string;
  description: string;
  location: {
    lat: number;
    lng: number;
  };
  imageUrl: string;
  timestamp: number;
  status: "Pending" | "In-Progress" | "Marked" | "Resolved";
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

export const getAllReports = () => mockReports;

export const mockReports: CivicReport[] = [
  {
    "id": "1",
    "category": "Sanitation and Waste Management",
    "description": "Illegal dumping site near residential area",
    "location": {
      "lat": 22.248883259222154,
      "lng": 85.24678503061321
    },
    "imageUrl": "/garbage.jpg",
    "timestamp": 1756347002307,
    "status": "Pending",
    "district": "Hazaribagh"
  },
  {
    "id": "2",
    "category": "Sanitation and Waste Management",
    "description": "Public toilet not cleaned for days",
    "location": {
      "lat": 22.481117437349916,
      "lng": 85.88188567136072
    },
    "imageUrl": "/sanitation.jpg",
    "timestamp": 1755850202307,
    "status": "In-Progress",
    "district": "Ramgarh"
  },
  {
    "id": "3",
    "category": "Sanitation and Waste Management",
    "description": "Public toilet not cleaned for days",
    "location": {
      "lat": 23.48156465000896,
      "lng": 86.09628860724811
    },
    "imageUrl": "/sanitation.jpg",
    "timestamp": 1745579402307,
    "status": "Marked",
    "district": "East Singhbhum"
  },
  {
    "id": "4",
    "category": "Sanitation and Waste Management",
    "description": "Medical waste improperly disposed",
    "location": {
      "lat": 23.607764024898835,
      "lng": 85.72982688854759
    },
    "imageUrl": "/sanitation.jpg",
    "timestamp": 1755367802307,
    "status": "In-Progress",
    "district": "Ranchi"
  },
  {
    "id": "5",
    "category": "Sanitation and Waste Management",
    "description": "Overflowing garbage bins near main market",
    "location": {
      "lat": 23.560497662635132,
      "lng": 86.80579670542058
    },
    "imageUrl": "/garbage.jpg",
    "timestamp": 1757387402307,
    "status": "Pending",
    "district": "East Singhbhum"
  },
  {
    "id": "6",
    "category": "Sanitation and Waste Management",
    "description": "Overflowing garbage bins near main market",
    "location": {
      "lat": 22.634881808030382,
      "lng": 86.74527281621955
    },
    "imageUrl": "/garbage.jpg",
    "timestamp": 1756779002307,
    "status": "Pending",
    "district": "Dhanbad"
  },
  {
    "id": "7",
    "category": "Sanitation and Waste Management",
    "description": "Leaking garbage truck causing spillage",
    "location": {
      "lat": 24.58564139628254,
      "lng": 85.6393610913651
    },
    "imageUrl": "/garbage.jpg",
    "timestamp": 1757481002307,
    "status": "Pending",
    "district": "East Singhbhum"
  },
  {
    "id": "8",
    "category": "Sanitation and Waste Management",
    "description": "Medical waste improperly disposed",
    "location": {
      "lat": 23.799112548165983,
      "lng": 86.60034707986209
    },
    "imageUrl": "/sanitation.jpg",
    "timestamp": 1757347802307,
    "status": "Pending",
    "district": "Hazaribagh"
  },
  {
    "id": "9",
    "category": "Sanitation and Waste Management",
    "description": "Overflowing garbage bins near main market",
    "location": {
      "lat": 22.543221177097937,
      "lng": 85.03980864300074
    },
    "imageUrl": "/garbage.jpg",
    "timestamp": 1747995002307,
    "status": "Marked",
    "district": "Giridih"
  },
  {
    "id": "10",
    "category": "Sanitation and Waste Management",
    "description": "Leaking garbage truck causing spillage",
    "location": {
      "lat": 24.484996418867865,
      "lng": 86.19750063404506
    },
    "imageUrl": "/garbage.jpg",
    "timestamp": 1755353402307,
    "status": "In-Progress",
    "district": "Palamu"
  },
  {
    "id": "11",
    "category": "Sanitation and Waste Management",
    "description": "Garbage not collected for a week",
    "location": {
      "lat": 24.271919822655214,
      "lng": 86.1762914999895
    },
    "imageUrl": "/garbage.jpg",
    "timestamp": 1753575002307,
    "status": "In-Progress",
    "district": "Hazaribagh"
  },
  {
    "id": "12",
    "category": "Sanitation and Waste Management",
    "description": "Public toilet not cleaned for days",
    "location": {
      "lat": 22.06630700181871,
      "lng": 86.6031747334028
    },
    "imageUrl": "/sanitation.jpg",
    "timestamp": 1757473802307,
    "status": "Pending",
    "district": "Palamu"
  },
  {
    "id": "13",
    "category": "Sanitation and Waste Management",
    "description": "Illegal dumping site near residential area",
    "location": {
      "lat": 22.043749789721744,
      "lng": 85.92402276798079
    },
    "imageUrl": "/garbage.jpg",
    "timestamp": 1756361402307,
    "status": "Pending",
    "district": "Ranchi"
  },
  {
    "id": "14",
    "category": "Sanitation and Waste Management",
    "description": "Overflowing garbage bins near main market",
    "location": {
      "lat": 22.287855981054893,
      "lng": 86.92634236624663
    },
    "imageUrl": "/garbage.jpg",
    "timestamp": 1757409002307,
    "status": "In-Progress",
    "district": "Deoghar"
  },
  {
    "id": "15",
    "category": "Roads and Infrastructure",
    "description": "Missing speed breakers near school zone",
    "location": {
      "lat": 24.470651204680593,
      "lng": 85.61282241559846
    },
    "imageUrl": "/road.jpeg",
    "timestamp": 1755702602307,
    "status": "In-Progress",
    "district": "Dhanbad"
  },
  {
    "id": "16",
    "category": "Roads and Infrastructure",
    "description": "Broken road divider creating safety hazard",
    "location": {
      "lat": 24.957003803477306,
      "lng": 85.22854192719939
    },
    "imageUrl": "/road.jpeg",
    "timestamp": 1757437802307,
    "status": "Pending",
    "district": "Giridih"
  },
  {
    "id": "17",
    "category": "Roads and Infrastructure",
    "description": "Large pothole causing traffic issues",
    "location": {
      "lat": 24.300624655707974,
      "lng": 86.09599167445305
    },
    "imageUrl": "/road.jpeg",
    "timestamp": 1756588202307,
    "status": "Pending",
    "district": "Ranchi"
  },
  {
    "id": "18",
    "category": "Roads and Infrastructure",
    "description": "Broken road divider creating safety hazard",
    "location": {
      "lat": 24.249441060421837,
      "lng": 86.24688772650568
    },
    "imageUrl": "/road.jpeg",
    "timestamp": 1757355002307,
    "status": "Pending",
    "district": "Ranchi"
  },
  {
    "id": "19",
    "category": "Roads and Infrastructure",
    "description": "Large pothole causing traffic issues",
    "location": {
      "lat": 23.242377482198957,
      "lng": 86.0602201630591
    },
    "imageUrl": "/road.jpeg",
    "timestamp": 1755882602307,
    "status": "Pending",
    "district": "East Singhbhum"
  },
  {
    "id": "20",
    "category": "Roads and Infrastructure",
    "description": "Large pothole causing traffic issues",
    "location": {
      "lat": 24.182835851753623,
      "lng": 86.81349148402498
    },
    "imageUrl": "/road.jpeg",
    "timestamp": 1752336602307,
    "status": "In-Progress",
    "district": "Ramgarh"
  },
  {
    "id": "21",
    "category": "Roads and Infrastructure",
    "description": "Missing speed breakers near school zone",
    "location": {
      "lat": 22.101664884938046,
      "lng": 86.56240009192253
    },
    "imageUrl": "/road.jpeg",
    "timestamp": 1756120202307,
    "status": "In-Progress",
    "district": "East Singhbhum"
  },
  {
    "id": "22",
    "category": "Drainage and Sewerage",
    "description": "Blocked drainage causing waterlogging",
    "location": {
      "lat": 22.33802321038203,
      "lng": 85.3659022983935
    },
    "imageUrl": "/sewage.jpg",
    "timestamp": 1755760202307,
    "status": "In-Progress",
    "district": "East Singhbhum"
  },
  {
    "id": "23",
    "category": "Drainage and Sewerage",
    "description": "Manhole cover missing creating safety hazard",
    "location": {
      "lat": 23.912685057689238,
      "lng": 85.73226926528153
    },
    "imageUrl": "/sanitation.jpg",
    "timestamp": 1753089002307,
    "status": "Marked",
    "district": "Ranchi"
  },
  {
    "id": "24",
    "category": "Drainage and Sewerage",
    "description": "Open sewage line near residential area",
    "location": {
      "lat": 22.949718134900053,
      "lng": 85.52947813657651
    },
    "imageUrl": "/sewage.jpg",
    "timestamp": 1753499402307,
    "status": "In-Progress",
    "district": "Bokaro"
  },
  {
    "id": "25",
    "category": "Drainage and Sewerage",
    "description": "Manhole cover missing creating safety hazard",
    "location": {
      "lat": 24.69007425448802,
      "lng": 85.60574111779187
    },
    "imageUrl": "/sanitation.jpg",
    "timestamp": 1757315402307,
    "status": "Pending",
    "district": "Ramgarh"
  },
  {
    "id": "26",
    "category": "Drainage and Sewerage",
    "description": "Blocked drainage causing waterlogging",
    "location": {
      "lat": 23.69692234812161,
      "lng": 85.85877384972626
    },
    "imageUrl": "/sewage.jpg",
    "timestamp": 1756084202307,
    "status": "Pending",
    "district": "Hazaribagh"
  },
  {
    "id": "27",
    "category": "Public Health and Hygiene",
    "description": "Stagnant water breeding mosquitoes",
    "location": {
      "lat": 23.41588073733009,
      "lng": 86.49339150773896
    },
    "imageUrl": "/sanitation.jpg",
    "timestamp": 1757448602307,
    "status": "Pending",
    "district": "East Singhbhum"
  },
  {
    "id": "28",
    "category": "Public Health and Hygiene",
    "description": "Stagnant water breeding mosquitoes",
    "location": {
      "lat": 23.71961535139466,
      "lng": 86.1495212601711
    },
    "imageUrl": "/sanitation.jpg",
    "timestamp": 1755681002307,
    "status": "In-Progress",
    "district": "Giridih"
  },
  {
    "id": "29",
    "category": "Public Health and Hygiene",
    "description": "Overflowing septic tank spreading diseases",
    "location": {
      "lat": 23.080554431886316,
      "lng": 86.84337547797585
    },
    "imageUrl": "/sanitation.jpg",
    "timestamp": 1757437802307,
    "status": "Pending",
    "district": "Deoghar"
  },
  {
    "id": "30",
    "category": "Public Health and Hygiene",
    "description": "Overflowing septic tank spreading diseases",
    "location": {
      "lat": 23.514671118569392,
      "lng": 86.24962835722368
    },
    "imageUrl": "/sanitation.jpg",
    "timestamp": 1755468602307,
    "status": "In-Progress",
    "district": "Dhanbad"
  },
  {
    "id": "31",
    "category": "Public Health and Hygiene",
    "description": "Stagnant water breeding mosquitoes",
    "location": {
      "lat": 23.666072074541006,
      "lng": 85.38379511116683
    },
    "imageUrl": "/sanitation.jpg",
    "timestamp": 1749769802308,
    "status": "In-Progress",
    "district": "Chatra"
  },
  {
    "id": "32",
    "category": "Public Health and Hygiene",
    "description": "Stagnant water breeding mosquitoes",
    "location": {
      "lat": 24.776276033991113,
      "lng": 85.30898573963745
    },
    "imageUrl": "/sanitation.jpg",
    "timestamp": 1753863002308,
    "status": "Marked",
    "district": "Chatra"
  },
  {
    "id": "33",
    "category": "Public Health and Hygiene",
    "description": "Stagnant water breeding mosquitoes",
    "location": {
      "lat": 24.37816258713884,
      "lng": 85.04945749757584
    },
    "imageUrl": "/sanitation.jpg",
    "timestamp": 1757405402308,
    "status": "Pending",
    "district": "Ranchi"
  },
  {
    "id": "34",
    "category": "Public Health and Hygiene",
    "description": "Stagnant water breeding mosquitoes",
    "location": {
      "lat": 22.375689896427474,
      "lng": 85.99876773163354
    },
    "imageUrl": "/sanitation.jpg",
    "timestamp": 1755565802308,
    "status": "Pending",
    "district": "Dhanbad"
  },
  {
    "id": "35",
    "category": "Public Health and Hygiene",
    "description": "Stagnant water breeding mosquitoes",
    "location": {
      "lat": 23.245910193587473,
      "lng": 85.50869808328574
    },
    "imageUrl": "/sanitation.jpg",
    "timestamp": 1755547802308,
    "status": "In-Progress",
    "district": "East Singhbhum"
  },
  {
    "id": "36",
    "category": "Public Health and Hygiene",
    "description": "Overflowing septic tank spreading diseases",
    "location": {
      "lat": 22.53288795867499,
      "lng": 86.8570573070292
    },
    "imageUrl": "/sanitation.jpg",
    "timestamp": 1753380602308,
    "status": "Pending",
    "district": "Dhanbad"
  },
  {
    "id": "37",
    "category": "Public Health and Hygiene",
    "description": "Overflowing septic tank spreading diseases",
    "location": {
      "lat": 24.30239602999805,
      "lng": 86.31785144185905
    },
    "imageUrl": "/sanitation.jpg",
    "timestamp": 1757473802308,
    "status": "Pending",
    "district": "Palamu"
  },
  {
    "id": "38",
    "category": "Water Supply",
    "description": "Burst water pipeline wasting clean water",
    "location": {
      "lat": 23.57796045267154,
      "lng": 85.23016183232919
    },
    "imageUrl": "/pipeline.jpg",
    "timestamp": 1755288602308,
    "status": "In-Progress",
    "district": "Dhanbad"
  },
  {
    "id": "39",
    "category": "Water Supply",
    "description": "Burst water pipeline wasting clean water",
    "location": {
      "lat": 22.99607430253875,
      "lng": 85.26920320617793
    },
    "imageUrl": "/pipeline.jpg",
    "timestamp": 1753405802308,
    "status": "In-Progress",
    "district": "Bokaro"
  },
  {
    "id": "40",
    "category": "Water Supply",
    "description": "Contaminated water supply causing illness",
    "location": {
      "lat": 24.095573937619008,
      "lng": 85.02862111622206
    },
    "imageUrl": "/fs.jpg",
    "timestamp": 1757470202308,
    "status": "Pending",
    "district": "Ranchi"
  },
  {
    "id": "41",
    "category": "Water Supply",
    "description": "Burst water pipeline wasting clean water",
    "location": {
      "lat": 22.283862274684612,
      "lng": 85.01795598440829
    },
    "imageUrl": "/pipeline.jpg",
    "timestamp": 1748430602308,
    "status": "Marked",
    "district": "Ramgarh"
  },
  {
    "id": "42",
    "category": "Water Supply",
    "description": "Burst water pipeline wasting clean water",
    "location": {
      "lat": 24.29520197093959,
      "lng": 86.99594203974756
    },
    "imageUrl": "/pipeline.jpg",
    "timestamp": 1757362202308,
    "status": "Pending",
    "district": "Deoghar"
  },
  {
    "id": "43",
    "category": "Water Supply",
    "description": "Contaminated water supply causing illness",
    "location": {
      "lat": 23.696250751710945,
      "lng": 85.95306883397431
    },
    "imageUrl": "/fs.jpg",
    "timestamp": 1757337002308,
    "status": "Pending",
    "district": "Deoghar"
  },
  {
    "id": "44",
    "category": "Water Supply",
    "description": "Contaminated water supply causing illness",
    "location": {
      "lat": 24.120105736171567,
      "lng": 85.62638515854783
    },
    "imageUrl": "/fs.jpg",
    "timestamp": 1756703402308,
    "status": "In-Progress",
    "district": "Dhanbad"
  },
  {
    "id": "45",
    "category": "Water Supply",
    "description": "Contaminated water supply causing illness",
    "location": {
      "lat": 24.39509023756825,
      "lng": 86.19129575939762
    },
    "imageUrl": "/fs.jpg",
    "timestamp": 1757405402308,
    "status": "Pending",
    "district": "Ramgarh"
  },
  {
    "id": "46",
    "category": "Water Supply",
    "description": "Contaminated water supply causing illness",
    "location": {
      "lat": 24.941426878123337,
      "lng": 85.03746920644582
    },
    "imageUrl": "/fs.jpg",
    "timestamp": 1752815402308,
    "status": "In-Progress",
    "district": "Deoghar"
  },
  {
    "id": "47",
    "category": "Water Supply",
    "description": "Burst water pipeline wasting clean water",
    "location": {
      "lat": 24.878310075438222,
      "lng": 86.06683555913857
    },
    "imageUrl": "/pipeline.jpg",
    "timestamp": 1756055402308,
    "status": "Pending",
    "district": "Chatra"
  },
  {
    "id": "48",
    "category": "Water Supply",
    "description": "No water supply for 3 days in residential area",
    "location": {
      "lat": 24.56184851611669,
      "lng": 86.83312829875231
    },
    "imageUrl": "/fs.jpg",
    "timestamp": 1753769402308,
    "status": "Marked",
    "district": "Hazaribagh"
  },
  {
    "id": "49",
    "category": "Water Supply",
    "description": "Burst water pipeline wasting clean water",
    "location": {
      "lat": 23.775986074242702,
      "lng": 86.63495885626548
    },
    "imageUrl": "/pipeline.jpg",
    "timestamp": 1756368602308,
    "status": "Pending",
    "district": "East Singhbhum"
  },
  {
    "id": "50",
    "category": "Water Supply",
    "description": "No water supply for 3 days in residential area",
    "location": {
      "lat": 24.434988114068894,
      "lng": 85.46972803929276
    },
    "imageUrl": "/fs.jpg",
    "timestamp": 1754374202308,
    "status": "In-Progress",
    "district": "Ramgarh"
  },
  {
    "id": "51",
    "category": "Water Supply",
    "description": "Contaminated water supply causing illness",
    "location": {
      "lat": 23.61046343697727,
      "lng": 85.37017195616092
    },
    "imageUrl": "/fs.jpg",
    "timestamp": 1756188602308,
    "status": "Pending",
    "district": "Ranchi"
  },
  {
    "id": "52",
    "category": "Water Supply",
    "description": "Contaminated water supply causing illness",
    "location": {
      "lat": 23.203569902849424,
      "lng": 85.17251028847627
    },
    "imageUrl": "/fs.jpg",
    "timestamp": 1746414602308,
    "status": "Marked",
    "district": "Palamu"
  },
  {
    "id": "53",
    "category": "Water Supply",
    "description": "Burst water pipeline wasting clean water",
    "location": {
      "lat": 24.920244871710914,
      "lng": 86.26429545496643
    },
    "imageUrl": "/pipeline.jpg",
    "timestamp": 1757329802308,
    "status": "Pending",
    "district": "Dhanbad"
  },
  {
    "id": "54",
    "category": "Water Supply",
    "description": "Contaminated water supply causing illness",
    "location": {
      "lat": 24.926142246362417,
      "lng": 85.49218231861255
    },
    "imageUrl": "/fs.jpg",
    "timestamp": 1757326202308,
    "status": "In-Progress",
    "district": "Deoghar"
  },
  {
    "id": "55",
    "category": "Water Supply",
    "description": "Burst water pipeline wasting clean water",
    "location": {
      "lat": 24.454012690928593,
      "lng": 85.0548796278929
    },
    "imageUrl": "/pipeline.jpg",
    "timestamp": 1746882602308,
    "status": "Marked",
    "district": "Hazaribagh"
  },
  {
    "id": "56",
    "category": "Water Supply",
    "description": "No water supply for 3 days in residential area",
    "location": {
      "lat": 22.67100846857995,
      "lng": 86.95632243354261
    },
    "imageUrl": "/fs.jpg",
    "timestamp": 1753863002308,
    "status": "In-Progress",
    "district": "Ramgarh"
  },
  {
    "id": "57",
    "category": "Illegal Construction and Encroachments",
    "description": "Street vendors encroaching footpath",
    "location": {
      "lat": 23.673393450794116,
      "lng": 86.73002964549607
    },
    "imageUrl": "/illegalc.jpeg",
    "timestamp": 1751433002308,
    "status": "Marked",
    "district": "Ranchi"
  },
  {
    "id": "58",
    "category": "Illegal Construction and Encroachments",
    "description": "Street vendors encroaching footpath",
    "location": {
      "lat": 23.21159876771668,
      "lng": 86.3381445922483
    },
    "imageUrl": "/illegalc.jpeg",
    "timestamp": 1752444602308,
    "status": "Pending",
    "district": "Palamu"
  },
  {
    "id": "59",
    "category": "Public Property and Utilities",
    "description": "Broken streetlight creating safety issue",
    "location": {
      "lat": 22.64836989302236,
      "lng": 85.51368565545195
    },
    "imageUrl": "/streetlight.webp",
    "timestamp": 1756566602308,
    "status": "In-Progress",
    "district": "Ramgarh"
  },
  {
    "id": "60",
    "category": "Public Property and Utilities",
    "description": "Broken streetlight creating safety issue",
    "location": {
      "lat": 22.251089973134043,
      "lng": 86.39318576429592
    },
    "imageUrl": "/streetlight.webp",
    "timestamp": 1757473802308,
    "status": "Pending",
    "district": "East Singhbhum"
  },
  {
    "id": "61",
    "category": "Public Property and Utilities",
    "description": "Public park equipment damaged",
    "location": {
      "lat": 24.03758696263713,
      "lng": 86.05799247032068
    },
    "imageUrl": "/streetlight.webp",
    "timestamp": 1757340602308,
    "status": "Pending",
    "district": "Dhanbad"
  },
  {
    "id": "62",
    "category": "Traffic and Parking",
    "description": "Illegal parking blocking main road",
    "location": {
      "lat": 22.99802485305509,
      "lng": 85.48660363981448
    },
    "imageUrl": "/parking.jpeg",
    "timestamp": 1756681802308,
    "status": "Pending",
    "district": "Palamu"
  },
  {
    "id": "63",
    "category": "Traffic and Parking",
    "description": "Missing traffic signal causing accidents",
    "location": {
      "lat": 22.501895368474138,
      "lng": 85.57803981106345
    },
    "imageUrl": "/parking.jpeg",
    "timestamp": 1756444202308,
    "status": "Marked",
    "district": "Chatra"
  },
  {
    "id": "64",
    "category": "Traffic and Parking",
    "description": "Illegal parking blocking main road",
    "location": {
      "lat": 23.745671039190228,
      "lng": 86.514435995394
    },
    "imageUrl": "/parking.jpeg",
    "timestamp": 1755861002308,
    "status": "Pending",
    "district": "Giridih"
  },
  {
    "id": "65",
    "category": "Traffic and Parking",
    "description": "Missing traffic signal causing accidents",
    "location": {
      "lat": 24.1009423503412,
      "lng": 85.42995361134756
    },
    "imageUrl": "/parking.jpeg",
    "timestamp": 1755940202308,
    "status": "In-Progress",
    "district": "Giridih"
  },
  {
    "id": "66",
    "category": "Traffic and Parking",
    "description": "Illegal parking blocking main road",
    "location": {
      "lat": 24.943534468767435,
      "lng": 86.43540676800882
    },
    "imageUrl": "/parking.jpeg",
    "timestamp": 1757329802308,
    "status": "In-Progress",
    "district": "Ranchi"
  }
];
