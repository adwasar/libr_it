// head
const head = document.querySelector('.head');

    head.innerHTML =
    `
        <a href = '/libr_it/src'>IT Libr</a>
        <button onclick="window.location.href = '/libr_it/src/others/tutorials.html';">Справочники</button>
        <button onclick="window.location.href = '/libr_it/src'">Главная</button>
        <span class="burger"><b>☰</b></span>
    `;

