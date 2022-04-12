let box = document.getElementById('box');

document.onmousemove = (event) => {
    var x = event.clientX;
    var y = event.clientY;
    box.style.left = x - (box.clientWidth/2) + "px";
    box.style.top = y - (box.clientWidth/2) + "px";
}
