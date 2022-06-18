// leftMenuCountent
const leftMenu = document.querySelector('.leftMenu');
const leftMenuCountentDeep1 = document.createElement('div');

if (leftMenu.classList.contains('deep1')) {
    leftMenuCountentDeep1.innerHTML = `
    <h3>Специфика</h3>
        <a href="others/JavaScript.html" class="a">JavaScript</a>
        <a href="others/Java.html" class="a">Java</a>
        <a href="others/Piton.html" class="a">Piton</a>
        <a href="others/PHP.html" class="a">PHP</a>
        <a href="others/C_C++.html" class="a">C/C++</a>
        <a href="others/C(sharp).html" class="a">C#</a>
        <a href="others/C(sharp).html" class="a">test</a>
        <a href="others/C(sharp).html" class="a">yey</a>
    `;

leftMenu.append(leftMenuCountentDeep1);
} else if (leftMenu.classList.contains('deep2')) {
    leftMenuCountentDeep1.innerHTML = `
    <h3>Специфика</h3>
        <a href="JavaScript.html" class="a">JavaScript</a>
        <a href="Java.html" class="a">Java</a>
        <a href="Piton.html" class="a">Piton</a>
        <a href="PHP.html" class="a">PHP</a>
        <a href="C_C++.html" class="a">C/C++</a>
        <a href="C(sharp).html" class="a">C#</a>
        <a href="C(sharp).html" class="a">test</a>
        <a href="C(sharp).html" class="a">yey</a>
    `;
    
leftMenu.append(leftMenuCountentDeep1);
} else if (leftMenu.classList.contains('deep3')) {
    leftMenuCountentDeep1.innerHTML = `
    <h3>Специфика</h3>
        <a href="../../JavaScript.html" class="a">JavaScript</a>
        <a href="../../Java.html" class="a">Java</a>
        <a href="../../Piton.html" class="a">Piton</a>
        <a href="../../PHP.html" class="a">PHP</a>
        <a href="../../C_C++.html" class="a">C/C++</a>
        <a href="../../C(sharp).html" class="a">C#</a>
        <a href="../../C(sharp).html" class="a">test</a>
        <a href="../../C(sharp).html" class="a">yey</a>
    `;

leftMenu.append(leftMenuCountentDeep1);
}
