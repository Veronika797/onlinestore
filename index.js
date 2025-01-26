// let modal = document.getElementById("filterModal");
// console.log(modal);
// let btn = document.getElementById("openModal");
// console.log(btn);
// let span = document.getElementById("closeModal");

// btn.onclick = function() {
//     modal.style.display = "block";
// }

// span.onclick = function() {
//     modal.style.display = "none";
// }

// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

let show = function(state) {
    document.getElementById('modalForm').style.display = state;
    document.getElementById('filter').style.display = state;
}