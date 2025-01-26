var modal = document.getElementById("filterModal");
var btn = document.getElementById("filterButton");
var closeBtn = document.querySelector(".close");

// Открыть модальное окно при нажатии на кнопку
btn.onclick = function() {
    modal.setAttribute("open", "true");
}

// Закрыть модальное окно при нажатии на "Закрыть"
closeBtn.onclick = function() {
    modal.removeAttribute("open");
}

// Закрыть модальное окно при нажатии вне его
modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.removeAttribute("open");
    }
});