

function move() {
    elem = document.getElementById("myBar");
    width = 1;
    id = setInterval(frame, 10);
    loading_an='';
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
         
      
        }
        

    }


} 