let bd = document.querySelector('.bd');
let tButton = document.querySelector('.tb')
tButton.onclick = function() {
    bd.classList.toggle('light');
    bd.classList.toggle('dark');
};