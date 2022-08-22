const parent = document.querySelector('.all__list');

class AllList {
    constructor(link) {
        this.link = link
    }

    render() {
        const element = document.createElement('li');
        element.innerHTML = `
            <a href=${this.link}>
                <img src="others/javascript/javascript-silnye-storony/javascript-silnye-storony.jpg"
                    alt="img"><br>
                <p>
                    <b>JavaScript: сильные стороны</b><br>
                    Дуглас Крокфорд
                </p>
            </a>
        `;
        parent.prepend(element);
    }
}

new AllList("others/javascript/javascript-silnye-storony/page.html").render();


