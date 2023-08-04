// function clearScreen() {
//     document.getElementById("result").value = "";
// }
 
// // This function display values
// function display(value) {
//     document.getElementById("result").value += value;
// }
 
// // This function evaluates the expression and returns result
// function calculate() {
//     var p = document.getElementById("result").value;
//     var q = eval(p);
//     document.getElementById("result").value = q;
// }




var bar = document.getElementById("bar");


function displayValue(value)
{   
    bar.value += value   
    console.log(value);  
}

function calC()
{
    var p = bar.value;
    var q = eval(p)
    bar.value = q
}

function clearAll()
{
    bar.value = ""
}

function clearOne() {
    bar.value = bar.value.slice(0, bar.value.length-1);

}