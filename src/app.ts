const object: HTMLElement = document.getElementById('ball');

let valueX: number = Math.floor(Math.random()*-260)-10;
let valueY: number = Math.floor(Math.random()*-260)-10;
object.style.bottom = `${valueY}px`;
object.style.right = `${valueX}px`;
document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 65:
            if(valueX>-10){
                break;
            }
            valueX = valueX+10;
            object.style.right = `${valueX}px`;
            break;
        case 87:
            if(valueY>-10){
                break;
            }
            valueY = valueY+10;
            object.style.bottom = `${valueY}px`;
            break;
        case 68:
            if(valueX<-270){
                break;
            }
            valueX = valueX-10;
            object.style.right = `${valueX}px`;
            break;
        case 83:
            if(valueY<-270){
                break;
            }
            valueY = valueY-10;
            object.style.bottom = `${valueY}px`;
            break;  
        }
}