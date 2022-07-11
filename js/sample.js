// Head
const head = document.querySelector('.head');

const logo = `index.html'>IT Libr</a>`,
      btnWriteToUs = `<button onclick="window.location.href = 'mailto:Adwasarik@gmail.com';">Написать нам</button>`,
      btnOnlineLibr = `libraries.html';">Онлайн библиотеки</button>`,
      btnHomePage = `index.html'">Главная</button>`,
      linkBurger = `<span class="burger"><b>☰</b></span>`;

    if (head.classList.contains('headDeep1')) {
        head.innerHTML =
        `
            <a href = '${logo}
            ${btnWriteToUs}
            <button onclick="window.location.href = 'others/${btnOnlineLibr}
            <button onclick="window.location.href = '${btnHomePage}
            ${linkBurger}
        `;
    } else if (head.classList.contains('headDeep2')) {
        head.innerHTML =
        `
            <a href = '../${logo}
            ${btnWriteToUs}
            <button onclick="window.location.href = '${btnOnlineLibr}
            <button onclick="window.location.href = '../${btnHomePage}
            ${linkBurger}
        `;
    } else if (head.classList.contains('headDeep3')) {
        head.innerHTML =
        `
            <a href = '../../../${logo}
            ${btnWriteToUs}
            <button onclick="window.location.href = '../../${btnOnlineLibr}
            <button onclick="window.location.href = '../../../${btnHomePage}
            ${linkBurger}
        `;
    }

// leftMenuCountent
const leftMenu = document.querySelector('.leftMenu');

const javaScript = `JavaScript.html" class="a">JavaScript</a>`,
      java = `Java.html" class="a">Java</a>`,
      piton = `Piton.html" class="a">Piton</a>`,
      php = `PHP.html" class="a">PHP</a>`,
      cPlusPlus = `C_C++.html" class="a">C/C++</a>`,
      cSharp = `C(sharp).html" class="a">C#</a>`,
      webDesigne =`Web-design.html" class="a">Веб-дизайн</a>`,
      qA =`QA.html" class="a">QA</a>`;


    if (leftMenu.classList.contains('leftMenuDeep1')) {
        leftMenu.innerHTML = `
        <h3>Навигация</h3>
            <a href="others/${javaScript}
            <a href="others/${java}
            <a href="others/${piton}
            <a href="others/${php}
            <a href="others/${cPlusPlus}
            <a href="others/${cSharp}
            <a href="others/${webDesigne}
            <a href="others/${qA}
        `;

    } else if (leftMenu.classList.contains('leftMenuDeep2')) {
        leftMenu.innerHTML = `
        <h3>Навигация</h3>
            <a href="${javaScript}
            <a href="${java}
            <a href="${piton}
            <a href="${php}
            <a href="${cPlusPlus}
            <a href="${cSharp}
            <a href="${webDesigne}
            <a href="${qA}
        `;
        
    } else if (leftMenu.classList.contains('leftMenuDeep3')) {
        leftMenu.innerHTML = `
        <h3>Навигация</h3>
            <a href="../../${javaScript}
            <a href="../../${java}
            <a href="../../${piton}
            <a href="../../${php}
            <a href="../../${cPlusPlus}
            <a href="../../${cSharp}
            <a href="../../${webDesigne}
            <a href="../../${qA}
        `;
    }

// Присвоение ноера, для каждого елемента таблицы
const listItems = document.querySelectorAll("td a");

listItems.forEach((item, i) => {
    item.innerHTML = `${i + 1}. ${item.innerHTML}`;
});

// Шаблоны для списков
const orderList = document.querySelectorAll("li");

const unOrderList = document.querySelector("ul"),
      compilationList = document.querySelector(".compilation__list");

function checkUnOrderList () {
    if (unOrderList && !compilationList) {
        orderList[0].innerHTML = `${'<b>Название книги: </b>'} ${orderList[0].innerHTML}`;
        orderList[1].innerHTML = `${'<b>Автор: </b>'} ${orderList[1].innerHTML}`;
        orderList[2].innerHTML = `${'<b>Издание: </b>'} ${orderList[2].innerHTML} г.`;
        orderList[3].innerHTML = `${'<b>Размер: </b>'} ${orderList[3].innerHTML} MB`;
    }   
}
checkUnOrderList ();

// Бургер 
const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
    leftMenu.classList.toggle('active');
});

// Огриничени длинны строки описания елементов подборки 
if (document.querySelector('.compilations') || document.querySelector('.all')) {

    const compilations = document.querySelector('.compilations'),
          pCompilations = compilations.querySelectorAll('p b'),
          allList = document.querySelector('.all'),
          pAllList = allList.querySelectorAll('p b');

    pCompilations.forEach (item => {
        if (item.innerHTML.length > 35) {
            item.innerHTML = `${item.innerHTML.substring(0, 35)}...`;
        }   
    });

    pAllList.forEach (item => {
        if (item.innerHTML.length > 35) {
            item.innerHTML = `${item.innerHTML.substring(0, 35)}...`;
        }   
    });
}

// Tabs 
const tabs = document.querySelectorAll('.tabBlock'),
tabsContent = document.querySelectorAll('[data-tab_content]'),
tabsParent = document.querySelector('.wrapperTab');

function hideTabsContent () {
    tabsContent.forEach (item => {
        item.classList.add('hide');
        item.classList.remove('tabBlock_active');
    });
    tabs.forEach (item => {
        item.classList.remove('tabBlock_active');
    });
}

function showTabsContent (i = 0) {
    tabsContent[i].classList.add('show');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabBlock_active');
}

if (document.querySelector('.compilations')) {
    hideTabsContent();
    showTabsContent();
    
    tabsParent.addEventListener('click', (e) => {
        if (e.target.classList.contains('tabBlock')) {
            tabs.forEach ((item, i) => {
                if (e.target == item) {
                    hideTabsContent();
                    showTabsContent(i);
                }
            });
        }
    });
}



