<<<<<<< HEAD
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
=======
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
>>>>>>> ceb548a48894a78bcf50215c8c1ce77842c2b467
