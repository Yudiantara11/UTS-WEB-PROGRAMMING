let box = document.getElementById('box');

document.onmousemove = (event) => {
    var x = event.clientX;
    var y = event.clientY;
    box.style.left = x - (box.clientWidth/2) + "px";
    box.style.top = y - (box.clientWidth/2) + "px";
    }
   
    const btn = document.getElementById('box');

    let index = 0;
    
    const colors = ['red', 'white', 'purple', 'black'];
    
    box.addEventListener('click', function onClick() {
      box.style.backgroundColor = colors[index];
      box.style.color = 'white';
    
      index = index >= colors.length - 1 ? 0 : index + 1;
    });