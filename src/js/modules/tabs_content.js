class AllList {
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

new AllList(
    'others/javascript/javascript-silnye-storony/page.html',
    'src="others/javascript/javascript-silnye-storony/javascript-silnye-storony.jpg"',
    `JavaScript: сильные стороны`,
    'Дуглас Крокфорд',
    '.all__list'
).render();

new AllList(
    'others/c_c-plyus/yazyk-programmirovaniya-c/page.html',
    'src="others/c_c-plyus/yazyk-programmirovaniya-c/yazyk-programmirovaniya-c.png"',
    `Язык программирования C`,
    'Брайан У. Керниган & Деннис М. Ритчи',
    '.all__list'
).render();

new AllList(
    'others/c_c-plyus/algoritmy-spravochnik-s-primerami-na-c-c-java-i-python/page.html',
    'src="others/c_c-plyus/algoritmy-spravochnik-s-primerami-na-c-c-java-i-python/algoritmy-spravochnik-s-primerami-na-c-c-java-i-python.png"',
    `Алгоритмы. Справочник. С примерами на C, C++, Java и Python`,
    'Джордж Хайнеман & Гэри Поллис & Стэнли Селков',
    '.all__list'
).render();

new AllList(
    'others/c_c-plyus/c-dlya-chajnikov/page.html',
    'src="others/c_c-plyus/c-dlya-chajnikov/c-dlya-chajnikov.png"',
    `C++ для чайников`,
    'Дэвис Стефан Рэнди',
    '.all__list'
).render();

new AllList(
    'others/c_c-plyus/programmirovanie-na-s-dlya-nachinayushih/page.html',
    'src="others/c_c-plyus/programmirovanie-na-s-dlya-nachinayushih/programmirovanie-na-s-dlya-nachinayushih.png"',
    `Программирование на С для начинающих`,
    'Майк МакГрат',
    '.all__list'
).render();


