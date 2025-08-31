// Calulator app

const display = document.getElementById('display');

function addToDisplay(char){
    display.value += char;
}

function deleteItem(){
    display.value = display.value.toString().slice(0, -1);
}

function clearItem(){
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
