let map = null;
let currentRouteInstructions = [];
let lastSpokenInstruction = "";
const locations = [
  {
    id: "main-gate",
    name: "Main Gate",
    aliases: ["mvgr main gate", "college entrance", "entrance"],
    lat: 18.060211,
    lng: 83.407892,
    info: "MVGR Main Entrance",
    category: "Entrance",
    building: "Entrance Gate",
    image: "images/main-gate.jpg",
    landmark: "Front side of campus",
    keywords: ["main gate", "entrance", "gate"]
  },
  {
    id: "library",
    name: "Library",
    aliases: ["central library", "mvgr library", "digital library"],
    lat: 18.061323,
    lng: 83.406218,
    info: "MVGR Central Library",
    category: "Facility",
    image: "images/library.jpg",
    building: "Library Block",
    landmark: "Near Sports Complex",
    keywords: ["library", "books", "study", "reading"]
  },
  {
    id: "admin-block",
    name: "Admin Block",
    aliases: ["administration office", "admin office", "office"],
    lat: 18.060170,
    lng: 83.405607,
    info: "Administration Office",
    category: "Admin",
    building: "Admin Block",
    image: "images/admin-block.jpg",
    landmark: "Near central campus road",
    keywords: ["admin", "administration", "office"]
  },
  {
    id: "cse-department",
    name: "CSE Department",
    aliases: ["computer science department", "cse", "computer science"],
    lat: 18.059772,
    lng: 83.404963,
    info: "Computer Science Department",
    category: "Department",
    image: "images/cse-department.jpg",
    building: "CSE Block",
    landmark: "Near CSE Park",
    keywords: ["cse", "computer science", "department"]
  },
  {
    id: "it-department",
    name: "IT Department",
    aliases: ["it dept", "information technology department", "information technology"],
    lat: 18.060874,
    lng: 83.405269,
    info: "IT Department",
    category: "Department",
    building: "IT Block",
    landmark: "Near IT Park",
    keywords: ["it", "information technology", "department"]
  },
  {
    id: "ece-department",
    name: "ECE Department",
    aliases: ["ece dept", "electronics department", "department of ece"],
    lat: 18.059994,
    lng: 83.404346,
    info: "Department of ECE",
    category: "Department",
    building: "ECE Block",
    landmark: "Near Mechanical side",
    keywords: ["ece", "electronics", "department"]
  },
  {
    id: "mech-department",
    name: "MECH Department",
    aliases: ["mech dept", "mechanical department", "department of mechanical engineering"],
    lat: 18.060088,
    lng: 83.403901,
    info: "Department of Mechanical Engineering",
    category: "Department",
    building: "Mechanical Block",
    landmark: "Near Mechanical Workshop",
    keywords: ["mech", "mechanical", "department"]
  },
  {
    id: "data-engineering-department",
    name: "Data Engineering Department",
    aliases: ["data engineering", "data engineering dept", "department of data engineering"],
    lat: 18.062215,
    lng: 83.403976,
    info: "Department of Data Engineering",
    category: "Department",
    building: "Data Engineering Block",
    landmark: "Near Data Engineering Playground",
    keywords: ["data engineering", "data", "department"]
  },
  {
    id: "civil-chemical-eee",
    name: "Department of Civil, Chemical & EEE",
    aliases: ["civil chemical eee", "civil department", "eee department", "chemical department"],
    lat: 18.061736,
    lng: 83.405408,
    info: "MVGR Department of Civil, Chemical & EEE",
    category: "Department",
    building: "Civil/Chemical/EEE Block",
    landmark: "Near Civil Pond & Park",
    keywords: ["civil", "chemical", "eee", "department"]
  },
  {
    id: "english-humanities",
    name: "Department of English and Humanities",
    aliases: ["english department", "humanities department", "english and humanities"],
    lat: 18.059306,
    lng: 83.405239,
    info: "MVGR Department of English and Humanities",
    category: "Department",
    building: "Humanities Block",
    landmark: "Near central campus area",
    keywords: ["english", "humanities", "department"]
  },
  {
    id: "canteen",
    name: "Canteen",
    aliases: ["campus canteen", "food court", "mess"],
    lat: 18.061680,
    lng: 83.404920,
    info: "Campus Canteen",
    category: "Facility",
    building: "Canteen Block",
    landmark: "Near hostel and academic area",
    keywords: ["canteen", "food", "snacks"]
  },
  {
    id: "bakers-corner",
    name: "Bakers Corner",
    aliases: ["bakery", "baker's corner", "juice point"],
    lat: 18.060861,
    lng: 83.406264,
    info: "Bakers Corner",
    category: "Facility",
    building: "Food Kiosk",
    landmark: "Near cricket stadium side road",
    keywords: ["bakers", "bakery", "food"]
  },
  {
    id: "sports-complex",
    name: "Sports Complex",
    aliases: ["sports", "complex", "mvgr sports complex"],
    lat: 18.061230,
    lng: 83.406622,
    info: "MVGR Sports Complex",
    category: "Facility",
    building: "Sports Complex",
    landmark: "Near Library",
    keywords: ["sports", "complex", "games"]
  },
  {
    id: "open-auditorium",
    name: "Open Auditorium",
    aliases: ["auditorium", "mvgr open auditorium"],
    lat: 18.060420,
    lng: 83.404684,
    info: "MVGR Open Auditorium",
    category: "Facility",
    building: "Auditorium",
    landmark: "Near Mechanical and IT area",
    keywords: ["auditorium", "events", "open auditorium"]
  },
  {
    id: "college-central-park",
    name: "College Central Park",
    aliases: ["central park", "campus park"],
    lat: 18.060300,
    lng: 83.405280,
    info: "Campus Central Park",
    category: "Facility",
    building: "Open Space",
    landmark: "Center of campus",
    keywords: ["park", "central park", "garden"]
  },
  {
    id: "civil-pond-park",
    name: "Civil Pond & Park",
    aliases: ["civil pond", "pond", "civil park"],
    lat: 18.061695,
    lng: 83.406063,
    info: "MVGR Civil Pond & Park",
    category: "Facility",
    building: "Open Space",
    landmark: "Near Civil/Chemical/EEE Department",
    keywords: ["pond", "park", "civil pond"]
  },
  {
    id: "park-it",
    name: "Park IT Department",
    aliases: ["it park", "park near it"],
    lat: 18.060785,
    lng: 83.405735,
    info: "MVGR Park for IT Department",
    category: "Facility",
    building: "Open Space",
    landmark: "Near IT Department",
    keywords: ["park", "it park"]
  },
  {
    id: "park-cse",
    name: "Park CSE Department",
    aliases: ["cse park", "park near cse"],
    lat: 18.059713,
    lng: 83.405443,
    info: "MVGR Park for CSE Department",
    category: "Facility",
    building: "Open Space",
    landmark: "Near CSE Department",
    keywords: ["park", "cse park"]
  },
  {
    id: "cse-washrooms",
    name: "CSE Washrooms",
    aliases: ["toilets", "cse washrooms", "washroom", "restroom"],
    lat: 18.059479,
    lng: 83.404711,
    info: "MVGR CSE Washrooms",
    category: "Facility",
    building: "CSE Block",
    landmark: "Beside CSE Department",
    keywords: ["cse", "washroom", "facility", "toilet", "restroom"]
  },
  {
    id: "chemistry-lab",
    name: "Chemistry Lab",
    aliases: ["chem lab", "laboratory chemistry"],
    lat: 18.060909,
    lng: 83.404821,
    info: "MVGR Chemistry Lab",
    category: "Lab",
    building: "Chemistry Lab Block",
    landmark: "Near Machines Laboratory",
    keywords: ["chemistry", "lab", "laboratory"]
  },
  {
    id: "machines-laboratory",
    name: "Machines Laboratory",
    aliases: ["machines lab", "machine lab"],
    lat: 18.061073,
    lng: 83.404577,
    info: "MVGR Machines Laboratory",
    category: "Lab",
    building: "Mechanical Lab Block",
    landmark: "Near Chemistry Lab",
    keywords: ["machines", "lab", "laboratory"]
  },
  {
    id: "mechanical-workshop",
    name: "Mechanical Workshop",
    aliases: ["workshop", "mech workshop"],
    lat: 18.060575,
    lng: 83.404035,
    info: "MVGR Mechanical Workshop",
    category: "Lab",
    building: "Mechanical Workshop Block",
    landmark: "Near Mechanical Department",
    keywords: ["mechanical", "workshop", "lab"]
  },
  {
    id: "girls-hostel-mess",
    name: "Girls Hostel Mess",
    aliases: ["girls mess", "hostel mess girls"],
    lat: 18.062906,
    lng: 83.405888,
    info: "MVGR Girls Hostel Mess",
    category: "Hostel",
    building: "Girls Hostel",
    landmark: "Inside girls hostel zone",
    keywords: ["girls hostel", "mess", "hostel"]
  },
  {
    id: "girls-hostel-a",
    name: "Girls Hostel-A Block",
    aliases: ["girls hostel a", "girls block a"],
    lat: 18.063268,
    lng: 83.405969,
    info: "MVGR Girls Hostel A Block",
    category: "Hostel",
    building: "Girls Hostel A Block",
    landmark: "Girls hostel area",
    keywords: ["girls hostel", "hostel", "block a"]
  },
  {
    id: "girls-hostel-b",
    name: "Girls Hostel-B Block",
    aliases: ["girls hostel b", "girls block b"],
    lat: 18.063633,
    lng: 83.406028,
    info: "MVGR Girls Hostel B Block",
    category: "Hostel",
    building: "Girls Hostel B Block",
    landmark: "Girls hostel area",
    keywords: ["girls hostel", "hostel", "block b"]
  },
  {
    id: "girls-hostel-entrance",
    name: "Girls Hostel Entrance",
    aliases: ["girls hostel gate", "hostel entrance girls"],
    lat: 18.062485,
    lng: 83.405947,
    info: "MVGR Girls Hostel Entrance",
    category: "Hostel",
    building: "Girls Hostel Gate",
    landmark: "Entry point to girls hostel",
    keywords: ["girls hostel", "entrance", "gate"]
  },
  {
    id: "stationary",
    name: "MVGR STATIONARY",
    aliases: ["books", "pens", "stationary", "zerox", "papers", "records", "book"],
    lat: 18.061588,
    lng: 83.404456,
    info: "MVGR STATIONARY",
    category: "Facility",
    building: "stationary block",
    landmark: "Beside Canteen",
    keywords: ["books", "pens", "stationary", "zerox", "papers", "records", "book"]
  },
  {
    id: "boys-hostel-a",
    name: "Boys Hostel-A Block",
    aliases: ["boys hostel a", "boys block a"],
    lat: 18.058497,
    lng: 83.403659,
    info: "MVGR Boys Hostel A Block",
    category: "Hostel",
    building: "Boys Hostel A Block",
    landmark: "Boys hostel area",
    keywords: ["boys hostel", "hostel", "block a"]
  },
  {
    id: "staff-parking",
    name: "STAFF PARKING",
    aliases: ["faculty parking", "parking for faculty"],
    lat: 18.059145,
    lng: 83.405001,
    info: "FACULTY PARKING FOR HUMANITIES AND ENGLISH/MATHEMATHICS DEPT",
    category: "Parking",
    building: "Parking Zone",
    landmark: "Backside of Humanities,English and Mathematics Dept",
    keywords: ["parking", "faculty parking", "private parking"]
  },
  {
    id: "boys-hostel-b",
    name: "Boys Hostel-B Block",
    aliases: ["boys hostel b", "boys block b"],
    lat: 18.059147,
    lng: 83.403839,
    info: "MVGR Boys Hostel B Block",
    category: "Hostel",
    building: "Boys Hostel B Block",
    landmark: "Boys hostel area",
    keywords: ["boys hostel", "hostel", "block b"]
  },
  {
    id: "boys-hostel-c",
    name: "Boys Hostel-C Block",
    aliases: ["boys hostel c", "boys block c"],
    lat: 18.058905,
    lng: 83.403515,
    info: "MVGR Boys Hostel C Block",
    category: "Hostel",
    building: "Boys Hostel C Block",
    landmark: "Boys hostel area",
    keywords: ["boys hostel", "hostel", "block c"]
  },
  {
    id: "boys-hostel-entrance",
    name: "Boys Hostel Entrance",
    aliases: ["boys hostel gate", "hostel entrance boys"],
    lat: 18.059563,
    lng: 83.404590,
    info: "MVGR Boys Hostel Entrance",
    category: "Hostel",
    building: "Boys Hostel Gate",
    landmark: "Entry point to boys hostel",
    keywords: ["boys hostel", "entrance", "gate"]
  },
  {
    id: "bus-parking",
    name: "Bus Parking",
    aliases: ["bus stand", "college bus parking"],
    lat: 18.062190,
    lng: 83.405119,
    info: "MVGR College Bus Parking Area",
    category: "Parking",
    building: "Parking Zone",
    landmark: "Near hostel side",
    keywords: ["bus", "parking", "buses"]
  },
  {
    id: "bike-parking",
    name: "Bike Parking (Students)",
    aliases: ["student bike parking", "bike parking"],
    lat: 18.059545,
    lng: 83.407712,
    info: "MVGR Bike Parking for Students",
    category: "Parking",
    building: "Parking Zone",
    landmark: "Near campus entry side",
    keywords: ["bike", "parking", "students"]
  },
  {
    id: "staff-parking",
    name: "Parking (Staff) / 4 Wheeler",
    aliases: ["staff parking", "car parking", "4 wheeler parking"],
    lat: 18.059489,
    lng: 83.405965,
    info: "MVGR Staff / 4 Wheeler Parking",
    category: "Parking",
    building: "Parking Zone",
    landmark: "Near central road",
    keywords: ["staff", "parking", "car"]
  },
  {
    id: "basketball-court",
    name: "Basketball Court",
    aliases: ["basketball", "court"],
    lat: 18.059655,
    lng: 83.406132,
    info: "MVGR Basketball Court",
    category: "Sports",
    building: "Sports Area",
    landmark: "Near cricket stadium side",
    keywords: ["basketball", "sports", "court"]
  },
  {
    id: "practice-play-ground",
    name: "Practice Play Ground",
    aliases: ["practice ground", "play ground"],
    lat: 18.059522,
    lng: 83.407044,
    info: "MVGR Practice Play Ground",
    category: "Sports",
    building: "Sports Area",
    landmark: "Near student parking",
    keywords: ["ground", "sports", "practice"]
  },
  {
    id: "playground-data-engineering",
    name: "Playground for Data Engineering",
    aliases: ["data engineering playground", "playground data engineering"],
    lat: 18.061868,
    lng: 83.404427,
    info: "MVGR Playground for Data Engineering",
    category: "Sports",
    building: "Sports Area",
    landmark: "Near Data Engineering Department",
    keywords: ["playground", "data engineering", "sports"]
  },
  {
    id: "cricket-stadium",
    name: "Cricket Stadium",
    aliases: ["cricket ground", "stadium"],
    lat: 18.060603,
    lng: 83.406892,
    info: "MVGR Cricket Stadium",
    category: "Sports",
    building: "Sports Area",
    landmark: "Near Bakers Corner side",
    keywords: ["cricket", "stadium", "sports"]
  }
];

const defaultClassrooms = [
  {
    id: "cse-201",
    roomNumber: "CSE-201",
    roomName: "CSE Classroom 201",
    department: "CSE",
    year: "2nd Year",
    section: "A",
    roomType: "Classroom",
    block: "CSE Block",
    floor: "2",
    landmark: "Near CSE staircase",
    indoorNotes: "Go to 2nd floor, turn left from the staircase, and it is the 2nd room on the right.",
    outdoorTargetId: "cse-department"
  },
  {
    id: "cse-lab-1",
    roomNumber: "CSE-LAB-1",
    roomName: "Programming Lab",
    department: "CSE",
    year: "2nd Year",
    section: "All",
    roomType: "Lab",
    block: "CSE Block",
    floor: "1",
    landmark: "Ground floor lab corridor",
    indoorNotes: "Enter CSE Block, stay on 1st floor, go straight through the lab corridor, and the lab will be on the left.",
    outdoorTargetId: "cse-department"
  },
  {
    id: "it-301",
    roomNumber: "IT-301",
    roomName: "IT Classroom 301",
    department: "IT",
    year: "3rd Year",
    section: "A",
    roomType: "Classroom",
    block: "IT Block",
    floor: "3",
    landmark: "Near IT block central stairs",
    indoorNotes: "Take the stairs to 3rd floor. After reaching the landing, turn right. Room 301 is the first room on the left.",
    outdoorTargetId: "it-department"
  },
  {
    id: "ece-204",
    roomNumber: "ECE-204",
    roomName: "ECE Classroom 204",
    department: "ECE",
    year: "2nd Year",
    section: "B",
    roomType: "Classroom",
    block: "ECE Block",
    floor: "2",
    landmark: "Near ECE staff room",
    indoorNotes: "Reach the 2nd floor, walk past the staff room, and Room 204 is the third room on the right.",
    outdoorTargetId: "ece-department"
  },
  {
    id: "mech-workshop-1",
    roomNumber: "MECH-WS-1",
    roomName: "Mechanical Workshop Hall",
    department: "MECH",
    year: "1st Year",
    section: "All",
    roomType: "Workshop",
    block: "Mechanical Block",
    floor: "Ground",
    landmark: "Workshop entrance area",
    indoorNotes: "No upper floor needed. Enter through the workshop entrance and continue straight to the workshop hall.",
    outdoorTargetId: "mech-department"
  }
];
let selectedMarker = null;
let routingControl = null;
let userLocation = null;
let userLocationMarker = null;
let userAccuracyCircle = null;
let journeyWatchId = null;
let currentDestination = null;
let animatedRouteInterval = null;

const defaultIcon = L.icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

function normalizeText(text) {
  return (text || "")
    .toString()
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function buildIndoorLayout(classroom) {
  if (!classroom) return `<div class="layoutNote">No indoor layout available.</div>`;

  const roomLabel = classroom.roomNumber || classroom.roomName || "Target Room";
  const floorLabel = classroom.floor || "Unknown Floor";

  return `
    <div class="floorBadge">Floor: ${floorLabel}</div>
    <div class="layoutLegend">Simplified indoor navigation view</div>

    <div class="floorPlan">
      <div class="floorRow">
        <div class="floorBox stairs">STAIRS</div>
        <div class="floorBox corridor">CORRIDOR</div>
        <div class="floorBox">${classroom.department || "BLOCK"}</div>
      </div>

      <div class="floorRow">
        <div class="floorBox">Room 1</div>
        <div class="floorBox">Room 2</div>
        <div class="floorBox room-active">${roomLabel}</div>
        <div class="floorBox">Room 4</div>
      </div>
    </div>

    <div class="layoutNote">
      Highlighted room is the target destination. Follow the staircase and corridor guidance shown above.
    </div>
  `;
}

function buildResultImage(location) {
  if (!location || !location.image) return "";

  return `
    <div class="resultImageWrap">
      <img src="${location.image}" alt="${location.name}" class="resultImage">
    </div>
  `;
}

function getClassrooms() {
  const saved = localStorage.getItem("mvgr_classrooms");
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      return [...defaultClassrooms];
    }
  }
  localStorage.setItem("mvgr_classrooms", JSON.stringify(defaultClassrooms));
  return [...defaultClassrooms];
}

function getStartPointByName(name) {
  return locations.find(loc => loc.name === name) || locations.find(loc => loc.id === "main-gate");
}

function getLocationById(id) {
  return locations.find(loc => loc.id === id);
}

function clearOldRoute() {
  if (!map) return;

  if (selectedMarker) {
    map.removeLayer(selectedMarker);
    selectedMarker = null;
  }
  if (routingControl) {
    map.removeControl(routingControl);
    routingControl = null;
  }
}

function renderIndoorDirections(classroom) {
  openAdvancedDrawer();

  const indoorPanel = document.getElementById("indoorResult");
  const indoorLayout = document.getElementById("indoorLayout");

  if (indoorPanel) {
    indoorPanel.innerHTML = `
      <div class="route-step"><b>Destination Block:</b> ${classroom.block}</div>
      <div class="route-step"><b>Floor:</b> ${classroom.floor}</div>
      <div class="route-step"><b>Landmark:</b> ${classroom.landmark}</div>
      <div class="route-step"><b>Indoor Route:</b> ${classroom.indoorNotes}</div>
    `;
  }

  if (indoorLayout) {
    indoorLayout.innerHTML = buildIndoorLayout(classroom);
  }
}

function renderOutdoorText(startPoint, destination) {
  const result = document.getElementById("result");

  result.innerHTML = `
    <h3>${destination.name}</h3>
    <p>${destination.info}</p>
    <p><b>Category:</b> ${destination.category}</p>
    <p><b>Building:</b> ${destination.building || "N/A"}</p>
    <p><b>Landmark:</b> ${destination.landmark || "N/A"}</p>
    <div class="route-step"><b>Outdoor Step 1:</b> Start from ${startPoint.name}</div>
    <div class="route-step"><b>Outdoor Step 2:</b> Move towards ${destination.building}</div>
    <div class="route-step"><b>Outdoor Step 3:</b> Reach the block entrance near ${destination.landmark}</div>
  `;
}

function drawRoute(found, startPoint) {
  currentDestination = found;
  clearOldRoute();

  selectedMarker = L.marker([found.lat, found.lng], { icon: defaultIcon })
    .addTo(map)
    .bindPopup(`<b>${found.name}</b><br>${found.info}`)
    .openPopup();

  routingControl = L.Routing.control({
    waypoints: [
      L.latLng(startPoint.lat, startPoint.lng),
      L.latLng(found.lat, found.lng)
    ],
    routeWhileDragging: false,
    addWaypoints: false,
    draggableWaypoints: false,
    fitSelectedRoutes: true,
    show: false,
    lineOptions: {
      styles: [{ color: "#3b82f6", opacity: 0.9, weight: 5 }]
    },
    createMarker: function () {
      return null;
    }
  }).addTo(map);

  routingControl.on("routesfound", function (e) {
    animateRouteLine();
    const route = e.routes[0];
    setRouteInstructions(route);
    const distance = route.summary.totalDistance;
    const time = route.summary.totalTime;
    const km = (distance / 1000).toFixed(2);
    const minutes = Math.ceil(time / 60);

    document.getElementById("result").innerHTML = `
      ${buildResultImage(found)}
      <h3>${found.name}</h3>
      <p>${found.info}</p>
      <p><b>Category:</b> ${found.category}</p>
      <p><b>Building:</b> ${found.building || "N/A"}</p>
      <p><b>Landmark:</b> ${found.landmark || "N/A"}</p>
      <p><b>Distance:</b> ${km} km</p>
      <p><b>Time:</b> ${minutes} min walk</p>
      <div class="route-step"><b>Outdoor Step 1:</b> Start from ${startPoint.name}</div>
      <div class="route-step"><b>Outdoor Step 2:</b> Follow the highlighted route on the map</div>
      <div class="route-step"><b>Outdoor Step 3:</b> Reach ${found.name}</div>
    `;
    const sheet = document.getElementById("routeSheet");
    if (sheet) {
      sheet.classList.remove("collapsed");
      sheet.classList.add("expanded");
    }

    document.getElementById("indoorResult").innerHTML =
      "This destination is an outdoor/campus-level location. Indoor directions are only shown for classrooms and labs.";
  });
}
function drawRouteFromCoordinates(found, startLat, startLng, startLabel = "Current Location") {
  currentDestination = found;
  clearOldRoute();

  selectedMarker = L.marker([found.lat, found.lng], { icon: defaultIcon })
    .addTo(map)
    .bindPopup(buildLocationPopup(found))
    .openPopup();

  routingControl = L.Routing.control({
    waypoints: [
      L.latLng(startLat, startLng),
      L.latLng(found.lat, found.lng)
    ],
    routeWhileDragging: false,
    addWaypoints: false,
    draggableWaypoints: false,
    fitSelectedRoutes: true,
    show: false,
    lineOptions: {
      styles: [{ color: "#3b82f6", opacity: 0.9, weight: 5 }]
    },
    createMarker: function () {
      return null;
    }
  }).addTo(map);

  routingControl.on("routesfound", function (e) {
    animateRouteLine();
    const route = e.routes[0];
    setRouteInstructions(route);
    const distance = route.summary.totalDistance;
    const time = route.summary.totalTime;
    const km = (distance / 1000).toFixed(2);
    const minutes = Math.ceil(time / 60);

    document.getElementById("result").innerHTML = `
      <h3>${found.name}</h3>
      <p>${found.info}</p>
      <p><b>Category:</b> ${found.category}</p>
      <p><b>Building:</b> ${found.building || "N/A"}</p>
      <p><b>Landmark:</b> ${found.landmark || "N/A"}</p>
      <p><b>Distance:</b> ${km} km</p>
      <p><b>Time:</b> ${minutes} min walk</p>
      <div class="route-step"><b>Outdoor Step 1:</b> Start from ${startLabel}</div>
      <div class="route-step"><b>Outdoor Step 2:</b> Follow the highlighted route on the map</div>
      <div class="route-step"><b>Outdoor Step 3:</b> Reach ${found.name}</div>
    `;
    const sheet = document.getElementById("routeSheet");
    if (sheet) {
      sheet.classList.remove("collapsed");
      sheet.classList.add("expanded");
    }

    document.getElementById("indoorResult").innerHTML =
      "This destination is an outdoor/campus-level location. Indoor directions are only shown for classrooms and labs.";
  });
}

function drawRouteToClassroom(classroom, startPoint) {
  const targetLocation = getLocationById(classroom.outdoorTargetId);
  currentDestination = targetLocation;
  
  if (!targetLocation) {
    document.getElementById("result").innerHTML = "Outdoor target for this classroom was not found.";
    return;
  }

  clearOldRoute();

  selectedMarker = L.marker([targetLocation.lat, targetLocation.lng], { icon: defaultIcon })
    .addTo(map)
    .bindPopup(`<b>${classroom.roomNumber}</b><br>${classroom.roomName}<br>${classroom.block}`)
    .openPopup();

  routingControl = L.Routing.control({
    waypoints: [
      L.latLng(startPoint.lat, startPoint.lng),
      L.latLng(targetLocation.lat, targetLocation.lng)
    ],
    routeWhileDragging: false,
    addWaypoints: false,
    draggableWaypoints: false,
    fitSelectedRoutes: true,
    show: false,
    lineOptions: {
      styles: [{ color: "#3b82f6", opacity: 0.9, weight: 5 }]
    },
    createMarker: function () {
      return null;
    }
  }).addTo(map);

  routingControl.on("routesfound", function (e) {
    animateRouteLine();
    const route = e.routes[0];
    setRouteInstructions(route);
    const distance = route.summary.totalDistance;
    const time = route.summary.totalTime;
    const km = (distance / 1000).toFixed(2);
    const minutes = Math.ceil(time / 60);

    document.getElementById("result").innerHTML = `
      ${buildResultImage(targetLocation)}
      <h3>${classroom.roomNumber} - ${classroom.roomName}</h3>
      <p><b>Department:</b> ${classroom.department}</p>
      <p><b>Year:</b> ${classroom.year || "N/A"}</p>
      <p><b>Section:</b> ${classroom.section || "N/A"}</p>
      <p><b>Type:</b> ${classroom.roomType}</p>
      <p><b>Block:</b> ${classroom.block}</p>
      <p><b>Floor:</b> ${classroom.floor}</p>
      <p><b>Outdoor Destination:</b> ${targetLocation.name}</p>
      <p><b>Landmark:</b> ${classroom.landmark}</p>
      <p><b>Distance:</b> ${km} km</p>
      <p><b>Time:</b> ${minutes} min walk</p>
      <div class="route-step"><b>Outdoor Step 1:</b> Start from ${startPoint.name}</div>
      <div class="route-step"><b>Outdoor Step 2:</b> Walk towards ${targetLocation.building}</div>
      <div class="route-step"><b>Outdoor Step 3:</b> Enter ${classroom.block}</div>
    `;
    const sheet = document.getElementById("routeSheet");
    if (sheet) {
      sheet.classList.remove("collapsed");
      sheet.classList.add("expanded");
    }

    renderIndoorDirections(classroom);
  });
}

function scoreLocation(loc, query) {
  const q = normalizeText(query);
  const name = normalizeText(loc.name);
  const info = normalizeText(loc.info);
  const building = normalizeText(loc.building);
  const landmark = normalizeText(loc.landmark);
  const aliases = (loc.aliases || []).map(normalizeText);
  const keywords = (loc.keywords || []).map(normalizeText);

  if (name === q) return 100;
  if (aliases.includes(q)) return 95;
  if (building === q) return 90;
  if (keywords.includes(q)) return 85;
  if (name.startsWith(q)) return 80;
  if (aliases.some(a => a.startsWith(q))) return 75;
  if (name.includes(q)) return 70;
  if (aliases.some(a => a.includes(q))) return 65;
  if (building.includes(q)) return 60;
  if (landmark.includes(q)) return 55;
  if (info.includes(q)) return 50;
  if (keywords.some(k => k.includes(q))) return 45;
  if (normalizeText(loc.category) === q) return 40;

  return 0;
}

function scoreClassroom(room, query) {
  const q = normalizeText(query);

  const fields = [
    room.roomNumber,
    room.roomName,
    room.department,
    room.year,
    room.section,
    room.roomType,
    room.block,
    room.floor,
    room.landmark,
    `${room.department} ${room.year}`,
    `${room.department} ${room.year} ${room.section}`,
    `${room.year} ${room.department}`,
    `${room.year} ${room.department} ${room.section}`,
    `${room.department} ${room.section}`,
    `${room.year} ${room.section}`
  ].map(normalizeText);

  if (fields[0] === q) return 100;
  if (fields[1] === q) return 95;
  if (fields[2] === q) return 90;
  if (fields.some(f => f === q)) return 88;
  if (fields.some(f => f.startsWith(q))) return 80;
  if (fields.some(f => f.includes(q))) return 70;

  return 0;
}

function getRankedLocationMatches(query) {
  return locations
    .map(loc => ({ ...loc, score: scoreLocation(loc, query), resultType: "location" }))
    .filter(loc => loc.score > 0)
    .sort((a, b) => b.score - a.score);
}

function getRankedClassroomMatches(query) {
  return getClassrooms()
    .map(room => ({ ...room, score: scoreClassroom(room, query), resultType: "classroom" }))
    .filter(room => room.score > 0)
    .sort((a, b) => b.score - a.score);
}

function getAllRankedMatches(query) {
  return [...getRankedClassroomMatches(query), ...getRankedLocationMatches(query)]
    .sort((a, b) => b.score - a.score);
}

function searchLocation() {
  const query = document.getElementById("searchInput").value.trim();
  const startName = document.getElementById("startSelect").value;
  const startPoint = getStartPointByName(startName);

  if (!query) {
    document.getElementById("result").innerHTML = "Please enter a location or classroom name.";
    const sheet = document.getElementById("routeSheet");
    if (sheet) {
      sheet.classList.remove("collapsed");
      sheet.classList.add("expanded");
    }
    document.getElementById("indoorResult").innerHTML = "Indoor directions will appear here.";
    return;
  }

  const matches = getAllRankedMatches(query);

  if (matches.length === 0) {
    document.getElementById("result").innerHTML = "Location or classroom not found.";
    document.getElementById("indoorResult").innerHTML = "Indoor directions will appear here.";
    return;
  }

  if (matches.length === 1 || matches[0].score >= 90) {
    const top = matches[0];

    if (top.resultType === "classroom") {
      drawRouteToClassroom(top, startPoint);
    } else {
      drawRoute(top, startPoint);
    }
    return;
  }

  document.getElementById("result").innerHTML = `
    <div class="result-popup">
      <h3>Multiple matches found</h3>
      ${matches.slice(0, 6).map(item => `
        <div class="match-item" onclick="selectSearchResult('${item.resultType}', '${item.id}')">
          <b>${item.resultType === "classroom" ? item.roomNumber : item.name}</b><br>
          <small>${
            item.resultType === "classroom"
              ? `${item.department} • ${item.year || "N/A"} • ${item.section || "N/A"} • ${item.roomType}`
              : item.category
          }</small>
        </div>
      `).join("")}
    </div>
  `;
}

function selectSearchResult(type, id) {
  const startName = document.getElementById("startSelect").value;
  const startPoint = getStartPointByName(startName);

  if (type === "classroom") {
    const found = getClassrooms().find(room => room.id === id);
    if (found) {
      document.getElementById("searchInput").value = found.roomNumber;
      drawRouteToClassroom(found, startPoint);
    }
    return;
  }

  const found = locations.find(loc => loc.id === id);
  if (found) {
    document.getElementById("searchInput").value = found.name;
    drawRoute(found, startPoint);
  }
}

function quickSearch(categoryName) {
  const startName = document.getElementById("startSelect").value;
  const startPoint = getStartPointByName(startName);

  const found = locations.find(
    loc => normalizeText(loc.category) === normalizeText(categoryName)
  );

  if (!found) {
    document.getElementById("result").innerHTML = "No location found in this category.";
    return;
  }

  document.getElementById("searchInput").value = found.name;
  drawRoute(found, startPoint);
}

function showSuggestions() {
  const query = document.getElementById("searchInput").value.trim();
  const suggestionsBox = document.getElementById("suggestionsBox");

  if (!query) {
    suggestionsBox.style.display = "none";
    suggestionsBox.innerHTML = "";
    return;
  }

  const matches = getAllRankedMatches(query).slice(0, 6);

  if (matches.length === 0) {
    suggestionsBox.style.display = "none";
    suggestionsBox.innerHTML = "";
    return;
  }

  suggestionsBox.innerHTML = matches.map(item => `
    <div class="suggestion-item" onclick="selectSuggestion('${item.resultType}', '${item.id}')">
      <b>${item.resultType === "classroom" ? item.roomNumber : item.name}</b><br>
      <small>${
        item.resultType === "classroom"
          ? `${item.department} • ${item.year || "N/A"} • ${item.section || "N/A"} • ${item.roomType}`
          : item.category
      }</small>
    </div>
  `).join("");

  suggestionsBox.style.display = "block";
}

function selectSuggestion(type, id) {
  document.getElementById("suggestionsBox").style.display = "none";
  selectSearchResult(type, id);
}

function openAdmin() {
  window.location.href = "admin.html";
}

document.addEventListener("click", function (event) {
  const searchWrap = document.querySelector(".searchWrap");
  const suggestionsBox = document.getElementById("suggestionsBox");

  if (searchWrap && !searchWrap.contains(event.target)) {
    suggestionsBox.style.display = "none";
  }
});
if (typeof L !== "undefined" && document.getElementById("map")) {
  map = L.map("map").setView([18.060099, 83.405837], 18);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 22,
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  map.on("click", function (e) {
    const lat = e.latlng.lat.toFixed(6);
    const lng = e.latlng.lng.toFixed(6);

    const coordsBox = document.getElementById("coordsBox");
    if (coordsBox) {
      coordsBox.innerHTML = `Clicked position:<br>lat: ${lat}, lng: ${lng}`;
    }
  });
}
function calculateDistance(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) *
    Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function useMyLocation() {
  if (!navigator.geolocation) {
    alert("Geolocation is not supported in this browser.");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    function(position) {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      const accuracy = position.coords.accuracy;

      const nearestCampus = getNearestCampusLocation(lat, lng);

      userLocation = {
        lat,
        lng,
        accuracy,
        snappedLocation: nearestCampus.location
      };

      if (map) {
        if (userLocationMarker) {
          map.removeLayer(userLocationMarker);
        }

        if (userAccuracyCircle) {
          map.removeLayer(userAccuracyCircle);
        }

        userLocationMarker = L.marker([lat, lng])
          .addTo(map)
          .bindPopup(`
            <b>Approximate Location</b><br>
            Accuracy: ${Math.round(accuracy)} meters<br>
            Nearest Campus Point: ${nearestCampus.location ? nearestCampus.location.name : "Not found"}
          `)
          .openPopup();

        userAccuracyCircle = L.circle([lat, lng], {
          radius: accuracy,
          color: "#2563eb",
          fillColor: "#60a5fa",
          fillOpacity: 0.18,
          weight: 2
        }).addTo(map);

        map.setView([lat, lng], accuracy > 300 ? 16 : 18);
      }

      const nearbyResult = document.getElementById("nearbyResult");
      if (nearbyResult) {
        if (accuracy > 300) {
          nearbyResult.innerHTML = `
            <div class="route-step"><b>Status:</b> Approximate GPS detected, but accuracy is low for exact routing.</div>
            <div class="route-step"><b>Latitude:</b> ${lat.toFixed(6)}</div>
            <div class="route-step"><b>Longitude:</b> ${lng.toFixed(6)}</div>
            <div class="route-step"><b>Accuracy:</b> approximately ${Math.round(accuracy)} meters</div>
            <div class="route-step"><b>Nearest Campus Point:</b> ${nearestCampus.location ? nearestCampus.location.name : "Not found"}</div>
            <div class="route-step">Nearby results and routing will use the nearest mapped campus point.</div>
          `;
        } else {
          nearbyResult.innerHTML = `
            <div class="route-step"><b>Status:</b> Current location captured successfully.</div>
            <div class="route-step"><b>Latitude:</b> ${lat.toFixed(6)}</div>
            <div class="route-step"><b>Longitude:</b> ${lng.toFixed(6)}</div>
            <div class="route-step"><b>Accuracy:</b> approximately ${Math.round(accuracy)} meters</div>
            <div class="route-step"><b>Nearest Campus Point:</b> ${nearestCampus.location ? nearestCampus.location.name : "Not found"}</div>
            <div class="route-step">Nearby results and routing will use the nearest mapped campus point.</div>
          `;
        }
      }
    },
    function(error) {
      alert("Unable to get your location. Please allow location access.");
      console.error(error);
    },
    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0
    }
  );
}

function showNearbyPlaces() {
  openAdvancedDrawer();
  const nearbyResult = document.getElementById("nearbyResult");

  if (!nearbyResult) return;

  let sourceLat = null;
  let sourceLng = null;
  let sourceLabel = "Selected Start Location";

  if (userLocation && userLocation.snappedLocation) {
    sourceLat = userLocation.snappedLocation.lat;
    sourceLng = userLocation.snappedLocation.lng;
    sourceLabel = `Nearest Campus Point: ${userLocation.snappedLocation.name}`;
  } else {
    const startName = document.getElementById("startSelect").value;
    const startPoint = getStartPointByName(startName);

    if (!startPoint) {
      nearbyResult.innerHTML = `
        <div class="route-step">No valid start point available.</div>
      `;
      return;
    }

    sourceLat = startPoint.lat;
    sourceLng = startPoint.lng;
    sourceLabel = `Manual Start Point: ${startPoint.name}`;
  }

  const rankedPlaces = locations
    .map(loc => {
      const distance = calculateDistance(sourceLat, sourceLng, loc.lat, loc.lng);
      return {
        ...loc,
        distance
      };
    })
    .sort((a, b) => a.distance - b.distance);

  const nearest = rankedPlaces.slice(0, 5);

  nearbyResult.innerHTML = `
    <div class="route-step"><b>Nearby Search Source:</b> ${sourceLabel}</div>
    ${nearest.map((place, index) => `
      <div class="route-step" style="cursor:pointer;" onclick="navigateToNearbyPlace('${place.id}')">
        <b>${index + 1}. ${place.name}</b><br>
        Category: ${place.category}<br>
        Building: ${place.building || "N/A"}<br>
        Landmark: ${place.landmark || "N/A"}<br>
        Distance: ${(place.distance * 1000).toFixed(0)} meters<br>
        <small style="color:#2563eb;"><b>Click to navigate</b></small>
      </div>
    `).join("")}
  `;
}

function scanSelectedLandmark() {
  openAdvancedDrawer();

  const selectedId = document.getElementById("landmarkSelect").value;
  const scanResult = document.getElementById("scanResult");

  if (!scanResult) return;

  if (!selectedId) {
    scanResult.innerHTML = `
      <div class="route-step">Please select a landmark first.</div>
    `;
    return;
  }

  if (selectedId === "current-location") {
    if (!userLocation || !userLocation.snappedLocation) {
      scanResult.innerHTML = `
        <div class="route-step"><b>Current Location:</b> Not available yet.</div>
        <div class="route-step">Please click <b>Use Approximate Location</b> first.</div>
      `;
      return;
    }

    const detectedLocation = userLocation.snappedLocation;

    const nearest = locations
      .filter(loc => loc.id !== detectedLocation.id)
      .map(loc => ({
        ...loc,
        distance: calculateDistance(
          detectedLocation.lat,
          detectedLocation.lng,
          loc.lat,
          loc.lng
        )
      }))
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 3);

    scanResult.innerHTML = `
      <div class="route-step"><b>Detected Landmark:</b> Current Location</div>
      <div class="route-step"><b>Nearest Campus Point:</b> ${detectedLocation.name}</div>
      <div class="route-step"><b>Category:</b> ${detectedLocation.category}</div>
      <div class="route-step"><b>Building:</b> ${detectedLocation.building || "N/A"}</div>
      <div class="route-step"><b>Nearest Facilities:</b><br>
        ${nearest.map((place, index) => `
          ${index + 1}. ${place.name} - ${(place.distance * 1000).toFixed(0)} meters
        `).join("<br>")}
      </div>
    `;

    if (map) {
      map.setView([detectedLocation.lat, detectedLocation.lng], 18);

      if (selectedMarker) {
        map.removeLayer(selectedMarker);
      }

      selectedMarker = L.marker([detectedLocation.lat, detectedLocation.lng], { icon: defaultIcon })
        .addTo(map)
        .bindPopup(`<b>Current Location Mapped To:</b><br>${detectedLocation.name}`)
        .openPopup();
    }

    return;
  }

  const detectedLocation = locations.find(loc => loc.id === selectedId);

  if (!detectedLocation) {
    scanResult.innerHTML = `
      <div class="route-step">Landmark could not be identified.</div>
    `;
    return;
  }

  const nearest = locations
    .filter(loc => loc.id !== detectedLocation.id)
    .map(loc => ({
      ...loc,
      distance: calculateDistance(
        detectedLocation.lat,
        detectedLocation.lng,
        loc.lat,
        loc.lng
      )
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 3);

  scanResult.innerHTML = `
    <div class="route-step"><b>Detected Landmark:</b> ${detectedLocation.name}</div>
    <div class="route-step"><b>Category:</b> ${detectedLocation.category}</div>
    <div class="route-step"><b>Building:</b> ${detectedLocation.building || "N/A"}</div>
    <div class="route-step"><b>Landmark Info:</b> ${detectedLocation.landmark || "N/A"}</div>
    <div class="route-step"><b>Nearest Facilities:</b><br>
      ${nearest.map((place, index) => `
        ${index + 1}. ${place.name} - ${(place.distance * 1000).toFixed(0)} meters
      `).join("<br>")}
    </div>
  `;

  if (map) {
    map.setView([detectedLocation.lat, detectedLocation.lng], 18);

    if (selectedMarker) {
      map.removeLayer(selectedMarker);
    }

    selectedMarker = L.marker([detectedLocation.lat, detectedLocation.lng], { icon: defaultIcon })
      .addTo(map)
      .bindPopup(`<b>Detected Landmark:</b><br>${detectedLocation.name}`)
      .openPopup();
  }
}
function navigateToNearbyPlace(placeId) {
  const place = locations.find(loc => loc.id === placeId);
  if (!place) return;

  document.getElementById("searchInput").value = place.name;

  if (userLocation && userLocation.snappedLocation) {
    drawRoute(place, userLocation.snappedLocation);
    return;
  }

  const startName = document.getElementById("startSelect").value;
  const startPoint = getStartPointByName(startName);
  drawRoute(place, startPoint);
}
function getNearestCampusLocation(lat, lng) {
  let nearest = null;
  let minDistance = Infinity;

  for (const loc of locations) {
    const dist = calculateDistance(lat, lng, loc.lat, loc.lng);
    if (dist < minDistance) {
      minDistance = dist;
      nearest = loc;
    }
  }

  return {
    location: nearest,
    distanceKm: minDistance
  };
}
function openAdvancedDrawer() {
  const drawer = document.getElementById("advancedDrawer");
  if (drawer) drawer.classList.add("open");
}

function closeAdvancedDrawer() {
  const drawer = document.getElementById("advancedDrawer");
  if (drawer) drawer.classList.remove("open");
}

function toggleAdvancedDrawer() {
  const drawer = document.getElementById("advancedDrawer");
  if (drawer) drawer.classList.toggle("open");
}
function animateRouteLine() {
  if (animatedRouteInterval) {
    clearInterval(animatedRouteInterval);
    animatedRouteInterval = null;
  }

  setTimeout(() => {
    const paths = document.querySelectorAll(".leaflet-overlay-pane svg path");

    let offset = 0;
    animatedRouteInterval = setInterval(() => {
      offset -= 2;
      paths.forEach(path => {
        path.style.strokeDasharray = "12 10";
        path.style.strokeDashoffset = offset;
      });
    }, 80);
  }, 500);
}

function startJourneyMode() {
  if (!currentDestination) {
    alert("Please search a destination first before starting journey mode.");
    return;
  }

  if (!navigator.geolocation) {
    alert("Geolocation is not supported in this browser.");
    return;
  }

  if (journeyWatchId !== null) {
    alert("Journey mode is already active.");
    return;
  }

  openAdvancedDrawer();

  const journeyResult = document.getElementById("journeyResult");
  if (journeyResult) {
    journeyResult.innerHTML = `
      <div class="route-step"><b>Status:</b> Journey tracking started.</div>
      <div class="route-step"><b>Destination:</b> ${currentDestination.name}</div>
      <div class="route-step">Waiting for live GPS updates...</div>
    `;
  }

  journeyWatchId = navigator.geolocation.watchPosition(
    function(position) {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      const accuracy = position.coords.accuracy;

      const nearestCampus = getNearestCampusLocation(lat, lng);

      userLocation = {
        lat,
        lng,
        accuracy,
        snappedLocation: nearestCampus.location
      };

      if (map) {
        if (userLocationMarker) {
          map.removeLayer(userLocationMarker);
        }

        if (userAccuracyCircle) {
          map.removeLayer(userAccuracyCircle);
        }

        userLocationMarker = L.marker([lat, lng])
          .addTo(map)
          .bindPopup(`
            <b>Live Journey Location</b><br>
            Accuracy: ${Math.round(accuracy)} meters<br>
            Nearest Campus Point: ${nearestCampus.location ? nearestCampus.location.name : "Not found"}
          `);

        userAccuracyCircle = L.circle([lat, lng], {
          radius: accuracy,
          color: "#2563eb",
          fillColor: "#60a5fa",
          fillOpacity: 0.18,
          weight: 2
        }).addTo(map);
      }

      const distToDestination = calculateDistance(
        lat,
        lng,
        currentDestination.lat,
        currentDestination.lng
      );
      
      let guidanceText = "Continue towards your destination.";

      if (distToDestination * 1000 <= 25) {
        guidanceText = "You have arrived at your destination.";
      } else if (distToDestination * 1000 <= 60) {
        guidanceText = "You are very close. Keep going straight.";
      } else if (currentRouteInstructions.length > 0) {
        guidanceText = getFriendlyInstructionText(currentRouteInstructions[0].text);
      }

      speakText(guidanceText);

      if (journeyResult) {
        journeyResult.innerHTML = `
          <div class="route-step"><b>Guidance:</b> ${guidanceText}</div>
          <div class="route-step"><b>Status:</b> Journey in progress</div>
          <div class="route-step"><b>Destination:</b> ${currentDestination.name}</div>
          <div class="route-step"><b>Current Accuracy:</b> ${Math.round(accuracy)} meters</div>
          <div class="route-step"><b>Nearest Campus Point:</b> ${nearestCampus.location ? nearestCampus.location.name : "Not found"}</div>
          <div class="route-step"><b>Distance to Destination:</b> ${(distToDestination * 1000).toFixed(0)} meters</div>
          <div class="route-step"><b>Live Coordinates:</b> ${lat.toFixed(6)}, ${lng.toFixed(6)}</div>
        `;
      }
    },
    function(error) {
      console.error(error);
      if (journeyResult) {
        journeyResult.innerHTML = `
          <div class="route-step"><b>Status:</b> Unable to update live journey.</div>
          <div class="route-step">Please allow location access and try again.</div>
        `;
      }
    },
    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0
    }
  );
}

function stopJourneyMode() {
  if (journeyWatchId !== null) {
    navigator.geolocation.clearWatch(journeyWatchId);
    journeyWatchId = null;
  }

  if (animatedRouteInterval) {
    clearInterval(animatedRouteInterval);
    animatedRouteInterval = null;
  }

  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }

  lastSpokenInstruction = "";

  if (map && userLocationMarker) {
    map.removeLayer(userLocationMarker);
    userLocationMarker = null;
  }

  if (map && userAccuracyCircle) {
    map.removeLayer(userAccuracyCircle);
    userAccuracyCircle = null;
  }

  clearOldRoute();
  currentDestination = null;
  userLocation = null;

  const journeyResult = document.getElementById("journeyResult");
  if (journeyResult) {
    journeyResult.innerHTML = `
      <div class="route-step"><b>Status:</b> Journey tracking stopped.</div>
      <div class="route-step">Live tracking, marker, and route have been cleared.</div>
    `;
  }
}
function openJourneyModal() {
  const modal = document.getElementById("journeyModal");
  if (modal) modal.classList.add("open");
}

function closeJourneyModal() {
  const modal = document.getElementById("journeyModal");
  if (modal) modal.classList.remove("open");
}

function confirmJourneySetup() {
  const startValue = document.getElementById("journeyStartSelect").value;
  const endQuery = document.getElementById("journeyEndInput").value.trim();

  if (!endQuery) {
    alert("Please enter an ending point.");
    return;
  }

  const matches = getAllRankedMatches(endQuery);

  if (!matches.length) {
    alert("Ending point not found.");
    return;
  }

  const target = matches[0];

  if (target.resultType === "classroom") {
    const targetLocation = getLocationById(target.outdoorTargetId);
    if (!targetLocation) {
      alert("Classroom outdoor location not found.");
      return;
    }

    if (startValue === "current") {
      if (userLocation && userLocation.snappedLocation) {
        drawRouteToClassroom(target, userLocation.snappedLocation);
      } else {
        alert("Please use approximate location first, or choose a campus starting point.");
        return;
      }
    } else {
      const startPoint = getStartPointByName(startValue);
      drawRouteToClassroom(target, startPoint);
    }
  } else {
    if (startValue === "current") {
      if (userLocation && userLocation.snappedLocation) {
        drawRoute(target, userLocation.snappedLocation);
      } else {
        alert("Please use approximate location first, or choose a campus starting point.");
        return;
      }
    } else {
      const startPoint = getStartPointByName(startValue);
      drawRoute(target, startPoint);
    }
  }

  closeJourneyModal();
  setTimeout(() => {
    startJourneyMode();
  }, 500);
}
function setRouteInstructions(route) {
  currentRouteInstructions = [];

  if (!route || !route.instructions) return;

  currentRouteInstructions = route.instructions.map(step => {
    return {
      text: step.text || "Continue",
      distance: step.distance || 0
    };
  });
}

function speakText(text) {
  if (!("speechSynthesis" in window)) return;
  if (!text || text === lastSpokenInstruction) return;

  lastSpokenInstruction = text;

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 1;
  utterance.pitch = 1;
  utterance.volume = 1;
  window.speechSynthesis.speak(utterance);
}

function getFriendlyInstructionText(text) {
  const t = (text || "").toLowerCase();

  if (t.includes("left")) return "Turn left.";
  if (t.includes("right")) return "Turn right.";
  if (t.includes("straight")) return "Go straight.";
  if (t.includes("continue")) return "Continue straight.";
  if (t.includes("arrive")) return "You are approaching your destination.";
  return text || "Continue towards your destination.";
}
document.addEventListener("click", function (event) {
  const drawer = document.getElementById("advancedDrawer");
  const toggleBtn = document.querySelector(".drawerToggle");

  if (!drawer || !drawer.classList.contains("open")) return;
  if (drawer.contains(event.target)) return;
  if (toggleBtn && toggleBtn.contains(event.target)) return;

  if (window.innerWidth < 900) {
    drawer.classList.remove("open");
  }
});

function toggleRouteSheet(event) {
  if (event) event.stopPropagation();

  const sheet = document.getElementById("routeSheet");
  const btn = document.querySelector(".routeSheetToggleBtn");
  if (!sheet) return;

  const isCollapsed = sheet.classList.contains("collapsed");

  if (isCollapsed) {
    sheet.classList.remove("collapsed");
    sheet.classList.add("expanded");
    if (btn) btn.innerHTML = "⌄";
  } else {
    sheet.classList.remove("expanded");
    sheet.classList.add("collapsed");
    if (btn) btn.innerHTML = "⌃";
  }
}