function enrollClick(btn) {

  // colorful button
  btn.classList.add(
    "bg-gradient-to-r",
    "from-pink-500",
    "via-orange-500",
    "to-yellow-400",
    "text-white",
    "scale-95"
  );

  // popup show
  const popup = document.getElementById("enrollPopup");
  popup.classList.remove("opacity-0");
  popup.classList.add("opacity-100");

  // redirect
  setTimeout(() => {
    window.location.href = "contact.html";
  }, 1200);
}

/*
  ========================================
  DATA LAYER
  ========================================
  Classes available for each board.
  Separated for scalability.
*/
const boards = {
  CBSE: [6,7,8,9,10,11,12],
  ICSE: [6,7,8,9,10,11,12]
};

/*
  ========================================
  BOARD SELECTION FUNCTION
  Shows class options dynamically
*/
function selectBoard(board) {
  const classSection = document.getElementById("classes");
  const classGrid = document.getElementById("classGrid");
  const classTitle = document.getElementById("classTitle");

  classSection.classList.remove("hidden");
  classGrid.innerHTML = "";

  classTitle.textContent = board + " - Select Your Class";

  boards[board].forEach(cls => {
    const btn = document.createElement("button");
    btn.textContent = "Class " + cls;
    btn.className = "bg-white p-4 rounded shadow hover:bg-secondary hover:text-white transition";
    btn.onclick = () => selectClass(board, cls);
    classGrid.appendChild(btn);
  });
}

/*
  ========================================
  CLASS SELECTION FUNCTION
  Displays study materials
*/
function selectClass(board, cls) {
  const materialSection = document.getElementById("materials");
  const materialTitle = document.getElementById("materialTitle");

  materialSection.classList.remove("hidden");
  materialTitle.textContent = board + " - Class " + cls + " Study Materials";

  materialSection.scrollIntoView({ behavior: "smooth" });
}
