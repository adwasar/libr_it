// sidebar
const sidebar = document.querySelector('.sidebar');

    sidebar.innerHTML = `
    <h3>Навигация</h3>
        <a href=/libr_it/src/others/javascript.html class="a">JavaScript</a>
        <a href=/libr_it/src/others/java.html class="a">Java</a>
        <a href=/libr_it/src/others/python.html class="a">Python</a>
        <a href=/libr_it/src/others/php.html class="a">PHP</a>
        <a href=/libr_it/src/others/c_c-plyus.html class="a">C/C++</a>
        <a href=/libr_it/src/others/c_sharp.html class="a">C#</a>
        <a href=/libr_it/src/others/web-design.html class="a">Веб-дизайн</a>
        <a href=/libr_it/src/others/qa.html class="a">QA</a>
        <a href=/libr_it/src/others/html_css.html class="a">HTML/CSS</a>
    `;
    
// burger 
const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});