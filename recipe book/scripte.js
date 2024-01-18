// Задаем начальное состояние - все списки блюд скрыты
document.getElementById('demoBreakfast').style.display = "none";
document.getElementById('demoLunch').style.display = "none";
document.getElementById('demoDinner').style.display = "none";

function toggleMenu(menuId) {
    var menu = document.getElementById(menuId);

    // Скрываем другие списки блюд
    document.getElementById('demoBreakfast').style.display = "none";
    document.getElementById('demoLunch').style.display = "none";
    document.getElementById('demoDinner').style.display = "none";

    // Делаем текущий список видимым
    menu.style.display = "block";
}
