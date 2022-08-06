// Присвоение ноера, для каждого елемента таблицы
const listItems = document.querySelectorAll("td a");

listItems.forEach((item, i) => {
    item.innerHTML = `${i + 1}. ${item.innerHTML}`;
});

// Шаблоны для списков
const orderList = document.querySelectorAll("li");

const bookInfo = document.querySelector(".book-info__list");

function checkUnOrderList() {
    if (bookInfo) {
        orderList[0].innerHTML = `${'<b>Название книги: </b>'} ${orderList[0].innerHTML}`;
        orderList[1].innerHTML = `${'<b>Автор: </b>'} ${orderList[1].innerHTML}`;
        orderList[2].innerHTML = `${'<b>Издание: </b>'} ${orderList[2].innerHTML} г.`;
        orderList[3].innerHTML = `${'<b>Размер: </b>'} ${orderList[3].innerHTML} MB`;
    }   
}
checkUnOrderList ();

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
const tabs = document.querySelectorAll('.tab-block'),
tabsContent = document.querySelectorAll('[data-tab_content]'),
tabsParent = document.querySelector('.tabs');

function hideTabsContent () {
    tabsContent.forEach (item => {
        item.classList.add('hide');
        item.classList.remove('tabs_tab-block_active');
    });
    tabs.forEach (item => {
        item.classList.remove('tabs_tab-block_active');
    });
}

function showTabsContent (i = 0) {
    tabsContent[i].classList.add('show');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabs_tab-block_active');
}

if (document.querySelector('.compilations')) {
    hideTabsContent();
    showTabsContent();
    
    tabsParent.addEventListener('click', (e) => {
        if (e.target.classList.contains('tab-block')) {
            tabs.forEach ((item, i) => {
                if (e.target == item) {
                    hideTabsContent();
                    showTabsContent(i);
                }
            });
        }
    });
}

// scroll-top
if (document.querySelector('.scroll-top')) {

    const scrollTop = document.querySelector('.scroll-top');
    
    scrollTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });
    
    window.addEventListener('scroll', () => {
        
        if (document.documentElement.scrollTop <= 300) {
            scrollTop.style.display = 'block';
            scrollTop.style.transform = 'translateX(150%)';
            scrollTop.style.transition = '0.2s';
        } else {
            scrollTop.style.display = 'block';
            scrollTop.style.transform = 'translateX(0px)';
            scrollTop.style.transition = '0.2s';
        }
    });
}

// futter

const footer = document.querySelector('footer');

footer.innerHTML = 
    `
    <div class="footer-section">
    <a href="https://adwasar.github.io/libr_it/others/about.html">О проекте</a>
    <a href="mailto:Adwasarik@gmail.com">E-mail автора</a>
    </div>
    `;
    









