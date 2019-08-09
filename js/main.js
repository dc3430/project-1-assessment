
/*----- app's state (variables) -----*/ 
let count;

/*----- cached element references -----*/ 
display = document.querySelector('msg');
input = document.querySelector('input');
/*----- event listeners -----*/ 
document.getElementById('increment').addEventListener('click', increment);
document.getElementById('decrement').addEventListener('click', decrement);
/*----- functions -----*/
init();

function init() {
    count = 0;
    input.value = 1;
    render();
}

function increment() {
    count += parseInt(input.value);
    render();
}

function decrement() {
    count -= parseInt(input.value);
    render();
}

function render() {
    msg.textContent = count;
    if (count < 0) {
        msg.style.color = "red";
    }
}
