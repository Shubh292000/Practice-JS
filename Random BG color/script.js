var body = document.getElementById("bdy");

function getRandomColor() {

    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
  

    const color = `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;
  
    return color;
  }



var btn = document.getElementById("butt")
var clr = document.getElementById("clr")

btn.addEventListener("click",function(){
    var r = getRandomColor()
    body.style.backgroundColor = r
    clr.innerHTML = r;

})
