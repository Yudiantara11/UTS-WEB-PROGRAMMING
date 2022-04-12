let box = document.getElementById('box');

document.onmousemove = (event) => {
    var x = event.clientX;
    var y = event.clientY;
    box.style.left = x - (box.clientWidth/2) + "px";
    box.style.top = y - (box.clientWidth/2) + "px";
    }
function random(number){
    return Math.floor(Math.random() * number)
}
document.onclick = function () {
berubah= "rgb("+random(255)+", "+random(255)+", "+random(255)+")";
box.style.backgroundColor = berubah;
}
function random(number){
    return Math.floor(Math.random() * number)
}
document.onclick = function () {
randomize= "rgb("+random(255)+", "+random(255)+", "+random(255)+")";
box.style.backgroundColor = randomize;
}