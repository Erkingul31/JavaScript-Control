const themeBtn = document.getElementById("themeBtn");

let isDark = false;


themeBtn.addEventListener("click", function () {

    if (isDark === false) {

        document.body.style.backgroundColor = "#222";

        document.body.style.color = "white";

        themeBtn.textContent = "Светлая тема";

        isDark = true;

    } else {

        document.body.style.backgroundColor = "white";

        document.body.style.color = "black";

        themeBtn.textContent = "Темная тема";

        isDark = false;
    }

});