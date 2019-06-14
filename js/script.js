var inputVal = 1;
var totalVal = 0;

var btnAdd = document.getElementById('add');
var btnSub = document.getElementById('subtract');
var displayVal = document.getElementById('total');
var displayInput = document.getElementById('inputvalue');


displayVal.textContent = 0;
displayInput.value = 1;
displayVal.textContent = 0;
displayInput.value = 1;    



displayInput.addEventListener('input', changeInputVal);
btnAdd.addEventListener('click', addValue)
btnSub.addEventListener('click', subtractValue)

function addValue() {
    totalVal = totalVal + inputVal;
    displayVal.textContent = totalVal;
    checkValueChangeColor()
}
function subtractValue() {
    totalVal = totalVal - inputVal;
    displayVal.textContent = totalVal;
    checkValueChangeColor()
}

function changeInputVal() {
    inputVal = parseInt(displayInput.value);

}

function checkValueChangeColor() {
    if (totalVal < 0){
        displayVal.classList.remove('black');
        displayVal.classList.add('red');
    } else {
        displayVal.classList.remove('red');
        displayVal.classList.add('black');
    }

}

