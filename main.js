var btm = document.getElementById("btm");

btm.onclick = function() {
    let bg = document.getElementById("bg");
    let color_1 = Math.floor(Math.random()*(999999 - 111111 + 1)) + 111111;
    let color_2 = Math.floor(Math.random()*(999999 - 111111 + 1)) + 111111;
    bg.style.background = `linear-gradient(45deg, #${color_1}, #${color_2})`;
    btm.innerHTML = `Градиент #${color_1} - #${color_2}`;
};