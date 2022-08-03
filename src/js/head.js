const head = document.querySelector('.head');

    head.innerHTML =
    `
        <a href = '/src'>IT Libr</a>
        <button onclick="window.location.href = '/src/others/tutorials.html';">Справочники</button>
        <button onclick="window.location.href = '/src'">Главная</button>
        <span class="burger"><b>☰</b></span>
    `;

