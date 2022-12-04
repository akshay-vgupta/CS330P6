

function showclick() {
    console.log("clicked")
    var modal = document.getElementById("myModal")
  modal.style.display = "block";
}
function show2ndclick() {
    console.log("clicked")
    var modal = document.getElementById("myModal1")
  modal.style.display = "block";
}

function closeclick() {
    var modal = document.getElementById("myModal")
  modal.style.display = "none";
  var modal = document.getElementById("myModal1")
  modal.style.display = "none";
}

window.addEventListener("click", function(event) {
    var modal = document.getElementById("myModal")
    if (event.target == modal) {
        modal.style.display = "none";
      }
});