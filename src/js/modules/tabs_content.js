class AllListItem {
    constructor(link, img, bookName, authorName, perentSelector) {
        this.link = link;
        this.img = img;
        this.bookName = bookName;
        this.authorName = authorName;
        this.parent = document.querySelector(perentSelector);
    }

    render() {
        const element = document.createElement('li');
        element.innerHTML = `
            <a href=${this.link}>
                <img ${this.img}"
                    alt="img"><br>
                <p>
                    <b>${this.bookName}</b><br>
                    ${this.authorName}
                </p>
            </a>
        `;
        this.parent.append(element);
    }
}

new AllListItem(
    'others/javascript/javascript-silnye-storony/page.html',
    'src="others/javascript/javascript-silnye-storony/javascript-silnye-storony.jpg"',
    `JavaScript: сильные стороны`,
    'Дуглас Крокфорд',
    '.all__list'
).render();

new AllListItem(
    'others/c_c-plyus/yazyk-programmirovaniya-c/page.html',
    'src="others/c_c-plyus/yazyk-programmirovaniya-c/yazyk-programmirovaniya-c.png"',
    `Язык программирования C`,
    'Брайан У. Керниган & Деннис М. Ритчи',
    '.all__list'
).render();

new AllListItem(
    'others/c_c-plyus/algoritmy-spravochnik-s-primerami-na-c-c-java-i-python/page.html',
    'src="others/c_c-plyus/algoritmy-spravochnik-s-primerami-na-c-c-java-i-python/algoritmy-spravochnik-s-primerami-na-c-c-java-i-python.png"',
    `Алгоритмы. Справочник. С примерами на C, C++, Java и Python`,
    'Джордж Хайнеман & Гэри Поллис & Стэнли Селков',
    '.all__list'
).render();

new AllListItem(
    'others/c_c-plyus/c-dlya-chajnikov/page.html',
    'src="others/c_c-plyus/c-dlya-chajnikov/c-dlya-chajnikov.png"',
    `C++ для чайников`,
    'Дэвис Стефан Рэнди',
    '.all__list'
).render();

new AllListItem(
    'others/c_c-plyus/programmirovanie-na-s-dlya-nachinayushih/page.html',
    'src="others/c_c-plyus/programmirovanie-na-s-dlya-nachinayushih/programmirovanie-na-s-dlya-nachinayushih.png"',
    `Программирование на С для начинающих`,
    'Майк МакГрат',
    '.all__list'
).render();

new AllListItem(
    'others/c_c-plyus/samouchitel-cc-i-c-builder-2007/page.html',
    'src="others/c_c-plyus/samouchitel-cc-i-c-builder-2007/samouchitel-cc-i-c-builder-2007.png"',
    `Самоучитель C/C++ и C++ Builder 2007`,
    'Пахомов Б.И.',
    '.all__list'
).render();

new AllListItem(
    'others/c_c-plyus/bezopasnoe-programmirovanie-na-c-i-c/page.html',
    'src="others/c_c-plyus/bezopasnoe-programmirovanie-na-c-i-c/bezopasnoe-programmirovanie-na-c-i-c.png"',
    `Безопасное программирование на C и C++`,
    'Сикорд Роберт',
    '.all__list'
).render();

new AllListItem(
    'others/c_c-plyus/upravlenie-elektronnymi-ustrojstvami-na-c/page.html',
    'src="others/c_c-plyus/upravlenie-elektronnymi-ustrojstvami-na-c/upravlenie-elektronnymi-ustrojstvami-na-c.jpg',
    `Управление электронными устройствами на C++`,
    'Янта Катупития, Ким Бентли',
    '.all__list'
).render();

new AllListItem(
    'others/c_sharp/unity-i-csharp-gejmdev-ot-idei-do-realizacii/page.html',
    'src="others/c_sharp/unity-i-csharp-gejmdev-ot-idei-do-realizacii/unity-i-csharp-gejmdev-ot-idei-do-realizacii.png',
    `Unity и C#. Геймдев от идеи до реализации`,
    'Джереми Гибсон Бонд',
    '.all__list'
).render();

new AllListItem(
    'others/c_sharp/unity-v-dejstvii-multiplatformennaya-razrabotka-na-csharp/page.html',
    'src="others/c_sharp/unity-v-dejstvii-multiplatformennaya-razrabotka-na-csharp/unity-v-dejstvii-multiplatformennaya-razrabotka-na-csharp.png"',
    `Unity в действии. Мультиплатформенная разработка на C#`,
    'Джозеф Хокинг',
    '.all__list'
).render();

new AllListItem(
    'others/c_sharp/csharp-na-primerah/page.html',
    'src="others/c_sharp/csharp-na-primerah/csharp-na-primerah.png"',
    `С# на примерах`,
    'Евдокимов П.В.',
    '.all__list'
).render();

new AllListItem(
    'others/c_sharp/karli-vatson-csharp/page.html',
    'src="others/c_sharp/karli-vatson-csharp/karli-vatson-csharp.png"',
    `С#`,
    'Карли Ватсон',
    '.all__list'
).render();

new AllListItem(
    'others/c_sharp/izuchaem-csharp/page.html',
    'src="others/c_sharp/izuchaem-csharp/izuchaem-csharp.png"',
    `Изучаем C#`,
    'Эндрю Стиллмен & Дженнифер Грин',
    '.all__list'
).render();

new AllListItem(
    'others/java/legkij-sposob-vyuchit-java/page.html',
    'src="others/java/legkij-sposob-vyuchit-java/legkij-sposob-vyuchit-java.png"',
    `Легкий способ выучить Java`,
    'Брайсон Пэйн',
    '.all__list'
).render();

new AllListItem(
    'others/java/java-rukovodstvo-dlya-nachinayushih/page.html',
    'src="others/java/java-rukovodstvo-dlya-nachinayushih/java-rukovodstvo-dlya-nachinayushih.png"',
    `Java: руководство для начинающих`,
    'Герберт Шилдт',
    '.all__list'
).render();

new AllListItem(
    'others/java/java-effektivnoe-programmirovanie/page.html',
    'src="others/java/java-effektivnoe-programmirovanie/java-effektivnoe-programmirovanie.png"',
    `Java. Эффективное программирование`,
    'Джошуа Блох',
    '.all__list'
).render();

new AllListItem(
    'others/java/java-za-24-chasa-rukovodstvo-8-e-izdanie/page.html',
    'src="others/java/java-za-24-chasa-rukovodstvo-8-e-izdanie/java-za-24-chasa-rukovodstvo-8-e-izdanie.png"',
    `Java за 24 часа. Руководство. 8-е издание`,
    'Кейденхед Роджерс',
    '.all__list'
).render();

new AllListItem(
    'others/java/java-biblioteka-professionala-tom-1-osnovy/page.html',
    'src="others/java/java-biblioteka-professionala-tom-1-osnovy/java-biblioteka-professionala-tom-1-osnovy.png',
    `Java. Библиотека профессионала Том 1 Основы`,
    'Хорстманн Кей',
    '.all__list'
).render();

new AllListItem(
    'others/html_css/novaya-bolshaya-kniga-css/page.html',
    'src="others/html_css/novaya-bolshaya-kniga-css/novaya-bolshaya-kniga-css.jpeg"',
    `Новая большая книга CSS`,
    'Макфарланд Дэвид',
    '.all__list'
).render();

new AllListItem(
    'others/html_css/css-polnyj-spravochnik/page.html',
    'src="others/html_css/css-polnyj-spravochnik/css-polnyj-spravochnik.jpg"',
    `CSS: полный справочник`,
    'Эрик А. Мейер, Эстелл Уэйл',
    '.all__list'
).render();

new AllListItem(
    'others/html_css/css-dlya-profi/page.html',
    'src="others/html_css/css-dlya-profi/css-dlya-profi.jpeg"',
    `CSS для профи`,
    'Кит Грант',
    '.all__list'
).render();

new AllListItem(
    'others/html_css/html5-karmannyj-spravochnik/page.html',
    'src="others/html_css/html5-karmannyj-spravochnik/html5-karmannyj-spravochnik.jpg"',
    `HTML5: карманный справочник`,
    'Роббинс Дженнифер Нидерст',
    '.all__list'
).render();

new AllListItem(
    'others/html_css/izuchaem-html-xhtml-i-css/page.html',
    'src="others/html_css/izuchaem-html-xhtml-i-css/izuchaem-html-xhtml-i-css.jpeg"',
    `Изучаем HTML, XHTML и CSS`,
    'Робсон Элизабет, Фримен Эрик',
    '.all__list'
).render();

new AllListItem(
    'others/php/sozdaem-dinamicheskie-veb-sajty-s-pomoshyu-php-mysql-javascript-css-i-html5/page.html',
    'src="others/php/sozdaem-dinamicheskie-veb-sajty-s-pomoshyu-php-mysql-javascript-css-i-html5/sozdaem-dinamicheskie-veb-sajty-s-pomoshyu-php-mysql-javascript-css-i-html5.png"',
    `Создаем динамические веб-сайты с помощью PHP, MySQL, javascript, CSS и
    HTML5`,
    'Робин Никсон',
    '.all__list'
).render();

new AllListItem(
    'others/javascript/kak-ustroen-javascript/page.html',
    'src="others/javascript/kak-ustroen-javascript/kak-ustroen-javascript.png"',
    `Как устроен JavaScript`,
    'Д. Крокфорд',
    '.all__list'
).render();

new AllListItem(
    'others/javascript/javascript-i-jquery-razrabotka-i-dizajn-veb-sajtov/page.html',
    'src="others/javascript/javascript-i-jquery-razrabotka-i-dizajn-veb-sajtov/javascript-i-jquery-razrabotka-i-dizajn-veb-sajtov.png"',
    `Javascript и jQuery. Разработка и дизайн веб-сайтов`,
    'Джон Дакетт',
    '.all__list'
).render();

new AllListItem(
    'others/javascript/javascript-podrobnoe-rukovodstvo/page.html',
    'src="others/javascript/javascript-podrobnoe-rukovodstvo/javascript-podrobnoe-rukovodstvo.png"',
    `JavaScript Подробное руководство`,
    'Дэвид Флэнаган',
    '.all__list'
).render();

new AllListItem(
    'others/javascript/javascript-dlya-chajnikov/page.html',
    'src="others/javascript/javascript-dlya-chajnikov/javascript-dlya-chajnikov.png"',
    `JavaScript для чайников`,
    'Минник, Холланд',
    '.all__list'
).render();

new AllListItem(
    'others/javascript/javascript-dlya-detej/page.html',
    'src="others/javascript/javascript-dlya-detej/javascript-dlya-detej.jpg"',
    `JavaScript для детей`,
    'Ник Морган',
    '.all__list'
).render();

new AllListItem(
    'others/javascript/javascript-shablony/page.html',
    'src="others/javascript/javascript-shablony/javascript-shablony.png"',
    `JavaScript. Шаблоны`,
    'С. Стефанов',
    '.all__list'
).render();

new AllListItem(
    'others/javascript/izuchaem-programmirovanie-na-javascript/page.html',
    'src="others/javascript/izuchaem-programmirovanie-na-javascript/izuchaem-programmirovanie-na-javascript.png"',
    `Изучаем программирование на JavaScript`,
    'Фримен, Робсон',
    '.all__list'
).render();

new AllListItem(
    'others/php/izuchaem-php-7-rukovodstvo-po-sozdaniyu-interaktivnyh-veb-sajtov/page.html',
    'src="others/php/izuchaem-php-7-rukovodstvo-po-sozdaniyu-interaktivnyh-veb-sajtov/izuchaem-php-7-rukovodstvo-po-sozdaniyu-interaktivnyh-veb-sajtov.png"',
    `Изучаем PHP 7. Руководство по созданию интерактивных веб-сайтов`,
    'Дэвид Скляр',
    '.all__list'
).render();

new AllListItem(
    'others/php/razrabotka-web-prilozhenij-na-rnr-i-mysql/page.html',
    'src="others/php/razrabotka-web-prilozhenij-na-rnr-i-mysql/razrabotka-web-prilozhenij-na-rnr-i-mysql.png"',
    `Разработка web - приложений на РНР и MySQL`,
    'Лаура Томсон & Люк Веллинг',
    '.all__list'
).render();

new AllListItem(
    'others/php/obektno-orientirovannoe-programmirovanie-na-php/page.html',
    'src="others/php/obektno-orientirovannoe-programmirovanie-na-php/obektno-orientirovannoe-programmirovanie-na-php.png"',
    `Объектно-ориентированное программирование на PHP`,
    'Максим Кузнецов & Игорь Симдянов',
    '.all__list'
).render();

new AllListItem(
    'others/php/php-recepty-programmirovaniya/page.html',
    'src="others/php/php-recepty-programmirovaniya/php-recepty-programmirovaniya.png"',
    `PHP. Рецепты программирования`,
    'Скляр Д. & Трахтенберг А.',
    '.all__list'
).render();

new AllListItem(
    'others/python/prikladnoj-analiz-tekstovyh-dannyh-na-python-mashinnoe-obuchenie-i-sozdanie-prilozhenij/page.html',
    'src="others/python/prikladnoj-analiz-tekstovyh-dannyh-na-python-mashinnoe-obuchenie-i-sozdanie-prilozhenij/prikladnoj-analiz-tekstovyh-dannyh-na-python-mashinnoe-obuchenie-i-sozdanie-prilozhenij.png"',
    `Прикладной анализ текстовых данных на Python. Машинное обучение и создание
    приложений`,
    'Бенджамин Бенгфорт, Ребекка Билбро, Тони Охеда',
    '.all__list'
).render();

new AllListItem(
    'others/python/prostoj-python-sovremennyj-stil-programmirovaniya/page.html',
    'src="others/python/prostoj-python-sovremennyj-stil-programmirovaniya/prostoj-python-sovremennyj-stil-programmirovaniya.png"',
    `Простой Python. Современный стиль программирования`,
    'Билл Любанович',
    '.all__list'
).render();

new AllListItem(
    'others/python/sekrety-python-59-rekomendacij-po-napisaniyu-effektivnogo-koda/page.html',
    'src="others/python/sekrety-python-59-rekomendacij-po-napisaniyu-effektivnogo-koda/sekrety-python-59-rekomendacij-po-napisaniyu-effektivnogo-koda.png',
    `Секреты Python 59 рекомендаций по написанию эффективного кода`,
    'Бретт Слаткин',
    '.all__list'
).render();

new AllListItem(
    'others/python/python-dlya-slozhnyh-zadach-nauka-o-dannyh-i-mashinnoe-obuchenie/page.html',
    'src="others/python/python-dlya-slozhnyh-zadach-nauka-o-dannyh-i-mashinnoe-obuchenie/python-dlya-slozhnyh-zadach-nauka-o-dannyh-i-mashinnoe-obuchenie.png"',
    `Вандер Плас Дж. – Python для сложных задач наука о данных и машинное
    обучение`,
    'Вандер Плас Дж.',
    '.all__list'
).render();

new AllListItem(
    'others/python/izuchaem-programmirovanie-na-python/page.html',
    'src="others/python/izuchaem-programmirovanie-na-python/izuchaem-programmirovanie-na-python.png"',
    `Изучаем программирование на Python`,
    'Пол Бэрри',
    '.all__list'
).render();

new AllListItem(
    'others/python/avtomatizaciya-rutinnyh-zadach-s-pomoshyu-python-prakticheskoe-rukovodstvo-dlya-nachinayushih/page.html',
    'src="others/python/avtomatizaciya-rutinnyh-zadach-s-pomoshyu-python-prakticheskoe-rukovodstvo-dlya-nachinayushih/avtomatizaciya-rutinnyh-zadach-s-pomoshyu-python-prakticheskoe-rukovodstvo-dlya-nachinayushih.png"',
    `Автоматизация рутинных задач с помощью Python. практическое руководство для
    начинающих`,
    'Эл Свейгарт',
    '.all__list'
).render();

new AllListItem(
    'others/web-design/emocionalnyj-vebdizajn/page.html',
    'src="others/web-design/emocionalnyj-vebdizajn/emocionalnyj-vebdizajn.jpg"',
    `Эмоциональный веб-дизайн`,
    'Аарон Уолтер',
    '.all__list'
).render();

new AllListItem(
    'others/web-design/dizajn-dlya-realnogo-mira/page.html',
    'src="others/web-design/dizajn-dlya-realnogo-mira/dizajn-dlya-realnogo-mira.jpg"',
    `Дизайн для реального мира`,
    'Виктор Папанек',
    '.all__list'
).render();

new AllListItem(
    'others/web-design/osnovy-kontentnoj-strategii/page.html',
    'src="others/web-design/osnovy-kontentnoj-strategii/osnovy-kontentnoj-strategii.jpg"',
    `Основы контентной стратегии`,
    'Эрин Киссейн',
    '.all__list'
).render();

new AllListItem(
    'others/web-design/otzyvchivyj-vebdizajn/page.html',
    'src="others/web-design/otzyvchivyj-vebdizajn/otzyvchivyj-vebdizajn.png"',
    `Отзывчивый веб-дизайн`,
    'Итан Маркотт',
    '.all__list'
).render();

new AllListItem(
    'others/web-design/dizajn/page.html',
    'src="others/web-design/dizajn/dizajn.jpg"',
    `Дизайнь. Современный креатифф`,
    'Хизер Бредли',
    '.all__list'
).render();

new AllListItem(
    'others/web-design/snachala-mobilnye/page.html',
    'src="others/web-design/snachala-mobilnye/snachala-mobilnye.png"',
    `Сначала мобильные`,
    'Люк Вроблевски',
    '.all__list'
).render();

new AllListItem(
    'others/qa/gibkoe-testirovanie/page.html',
    'src="others/qa/gibkoe-testirovanie/gibkoe-testirovanie.png"',
    `Гибкое тестирование. Практическое руководство для тестировщиков ПО и гибких
    команд`,
    'Лайза Криспин, Джанет Грегори',
    '.all__list'
).render();

new AllListItem(
    'others/qa/klyuchevye-processy-testirovaniya/page.html',
    'src="others/qa/klyuchevye-processy-testirovaniya/klyuchevye-processy-testirovaniya.png"',
    `Ключевые процессы тестирования`,
    'Рекс Блэк',
    '.all__list'
).render();

new AllListItem(
    'others/qa/testirovanie-dot-com/page.html',
    'src="others/qa/testirovanie-dot-com/testirovanie-dot-com.jpg"',
    `Тестирование DOT COM или Пособие по жестокому обращению с багами в интернет-
    стартапах`,
    'Савин Роман',
    '.all__list'
).render();

new AllListItem(
    'others/qa/testirovanie-chernogo-yashhika/page.html',
    'src="others/qa/testirovanie-chernogo-yashhika/testirovanie-chernogo-yashhika.png"',
    `Тестирование черного ящика. Технологии функционального тестирования программного
    обеспечения и систем`,
    'Борис Бейзер',
    '.all__list'
).render();

new AllListItem(
    'others/qa/testirovanie-programmnogo-obespecheniya.-bazovyj-kurs/page.html',
    'src="others/qa/testirovanie-programmnogo-obespecheniya.-bazovyj-kurs/testirovanie-programmnogo-obespecheniya.-bazovyj-kurs.png"',
    `Тестирование программного обеспечения. Базовый курс`,
    'Святослав Куликов',
    '.all__list'
).render();

new AllListItem(
    'others/qa/testirovanie-programmnogo-obespecheniya.-sem-kanerdzhek-folk-eng-kek-nguen/page.html',
    'src="others/qa/testirovanie-programmnogo-obespecheniya.-sem-kanerdzhek-folk-eng-kek-nguen/testirovanie-programmnogo-obespecheniya.-sem-kanerdzhek-folk-eng-kek-nguen.jpg"',
    `Тестирование программного обеспечения. Фундаментальные концепции менеджмента
    бизнес-приложений`,
    'Сэм Канер, Джек Фолк, Енг Кек Нгуен',
    '.all__list'
).render();

//

new AllListItem(
    'others/html_css/novaya-bolshaya-kniga-css/page.html',
    'src="others/html_css/novaya-bolshaya-kniga-css/novaya-bolshaya-kniga-css.jpeg"',
    `Новая большая книга CSS`,
    'Макфарланд Дэвид',
    '.compilationLayout .compilation__list'
).render();

new AllListItem(
    'others/html_css/css-polnyj-spravochnik/page.html',
    'src="others/html_css/css-polnyj-spravochnik/css-polnyj-spravochnik.jpg"',
    `CSS: полный справочник`,
    'Эрик А. Мейер, Эстелл Уэйл',
    '.compilationLayout .compilation__list'
).render();

new AllListItem(
    'others/html_css/css-dlya-profi/page.html',
    'src="others/html_css/css-dlya-profi/css-dlya-profi.jpeg"',
    `CSS для профи`,
    'Кит Грант',
    '.compilationLayout .compilation__list'
).render();

new AllListItem(
    'others/html_css/html5-karmannyj-spravochnik/page.html',
    'src="others/html_css/html5-karmannyj-spravochnik/html5-karmannyj-spravochnik.jpg"',
    `HTML5: карманный справочник`,
    'Роббинс Дженнифер Нидерст',
    '.compilationLayout .compilation__list'
).render();

new AllListItem(
    'others/html_css/izuchaem-html-xhtml-i-css/page.html',
    'src="others/html_css/izuchaem-html-xhtml-i-css/izuchaem-html-xhtml-i-css.jpeg"',
    `Изучаем HTML, XHTML и CSS`,
    'Робсон Элизабет, Фримен Эрик',
    '.compilationLayout .compilation__list'
).render();

new AllListItem(
    'others/php/sozdaem-dinamicheskie-veb-sajty-s-pomoshyu-php-mysql-javascript-css-i-html5/page.html',
    'src="others/php/sozdaem-dinamicheskie-veb-sajty-s-pomoshyu-php-mysql-javascript-css-i-html5/sozdaem-dinamicheskie-veb-sajty-s-pomoshyu-php-mysql-javascript-css-i-html5.png"',
    `Создаем динамические веб-сайты с помощью PHP, MySQL, javascript, CSS и
    HTML5`,
    'Робин Никсон',
    '.compilationLayout .compilation__list'
).render();

new AllListItem(
    'others/web-design/emocionalnyj-vebdizajn/page.html',
    'src="others/web-design/emocionalnyj-vebdizajn/emocionalnyj-vebdizajn.jpg"',
    `Эмоциональный веб-дизайн`,
    'Аарон Уолтер',
    '.compilationWebDesigne .compilation__list'
).render();

new AllListItem(
    'others/web-design/dizajn-dlya-realnogo-mira/page.html',
    'src="others/web-design/dizajn-dlya-realnogo-mira/dizajn-dlya-realnogo-mira.jpg"',
    `Дизайн для реального мира`,
    'Виктор Папанек',
    '.compilationWebDesigne .compilation__list'
).render();

new AllListItem(
    'others/web-design/osnovy-kontentnoj-strategii/page.html',
    'src="others/web-design/osnovy-kontentnoj-strategii/osnovy-kontentnoj-strategii.jpg"',
    `Основы контентной стратегии`,
    'Эрин Киссейн',
    '.compilationWebDesigne .compilation__list'
).render();

new AllListItem(
    'others/web-design/otzyvchivyj-vebdizajn/page.html',
    'src="others/web-design/otzyvchivyj-vebdizajn/otzyvchivyj-vebdizajn.png"',
    `Отзывчивый веб-дизайн`,
    'Итан Маркотт',
    '.compilationWebDesigne .compilation__list'
).render();

new AllListItem(
    'others/web-design/dizajn/page.html',
    'src="others/web-design/dizajn/dizajn.jpg"',
    `Дизайнь. Современный креатифф`,
    'Хизер Бредли',
    '.compilationWebDesigne .compilation__list'
).render();

new AllListItem(
    'others/web-design/snachala-mobilnye/page.html',
    'src="others/web-design/snachala-mobilnye/snachala-mobilnye.png"',
    `Сначала мобильные`,
    'Люк Вроблевски',
    '.compilationWebDesigne .compilation__list'
).render();

//

new AllListItem(
    'others/qa/gibkoe-testirovanie/page.html',
    'src="others/qa/gibkoe-testirovanie/gibkoe-testirovanie.png"',
    `Гибкое тестирование. Практическое руководство для тестировщиков ПО и гибких
    команд`,
    'Лайза Криспин, Джанет Грегори',
    '.compilationqa .compilation__list'
).render();

new AllListItem(
    'others/qa/klyuchevye-processy-testirovaniya/page.html',
    'src="others/qa/klyuchevye-processy-testirovaniya/klyuchevye-processy-testirovaniya.png"',
    `Ключевые процессы тестирования`,
    'Рекс Блэк',
    '.compilationqa .compilation__list'
).render();

new AllListItem(
    'others/qa/testirovanie-dot-com/page.html',
    'src="others/qa/testirovanie-dot-com/testirovanie-dot-com.jpg"',
    `Тестирование DOT COM или Пособие по жестокому обращению с багами в интернет-
    стартапах`,
    'Савин Роман',
    '.compilationqa .compilation__list'
).render();

new AllListItem(
    'others/qa/testirovanie-chernogo-yashhika/page.html',
    'src="others/qa/testirovanie-chernogo-yashhika/testirovanie-chernogo-yashhika.png"',
    `Тестирование черного ящика. Технологии функционального тестирования программного
    обеспечения и систем`,
    'Борис Бейзер',
    '.compilationqa .compilation__list'
).render();

new AllListItem(
    'others/qa/testirovanie-programmnogo-obespecheniya.-bazovyj-kurs/page.html',
    'src="others/qa/testirovanie-programmnogo-obespecheniya.-bazovyj-kurs/testirovanie-programmnogo-obespecheniya.-bazovyj-kurs.png"',
    `Тестирование программного обеспечения. Базовый курс`,
    'Святослав Куликов',
    '.compilationqa .compilation__list'
).render();

new AllListItem(
    'others/qa/testirovanie-programmnogo-obespecheniya.-sem-kanerdzhek-folk-eng-kek-nguen/page.html',
    'src="others/qa/testirovanie-programmnogo-obespecheniya.-sem-kanerdzhek-folk-eng-kek-nguen/testirovanie-programmnogo-obespecheniya.-sem-kanerdzhek-folk-eng-kek-nguen.jpg"',
    `Тестирование программного обеспечения. Фундаментальные концепции менеджмента
    бизнес-приложений`,
    'Сэм Канер, Джек Фолк, Енг Кек Нгуен',
    '.compilationqa .compilation__list'
).render();

// Огриничени длинны строки описания елементов подборки 
if (document.querySelector('.compilations') || document.querySelector('.all')) {

    const compilations = document.querySelector('.compilations'),
          pCompilations = compilations.querySelectorAll('p b'),
          allList = document.querySelector('.all'),
          pAllList = allList.querySelectorAll('p b');

    pCompilations.forEach (item => {
        if (item.innerHTML.length > 40) {
            item.innerHTML = `${item.innerHTML.substring(0, 35)}...`;
        }   
    });

    pAllList.forEach (item => {
        if (item.innerHTML.length > 40) {
            item.innerHTML = `${item.innerHTML.substring(0, 35)}...`;
        }   
    });
}