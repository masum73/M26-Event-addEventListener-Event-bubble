//system 1 - function
function handleOnClick(){
    const handlerStatus = document.getElementById('handler-status');
    handlerStatus.innerText = 'handled by function attached on onclick attribute';
}

//system 2 - direct
document.getElementById('event-listener').addEventListener('click', function(){
    const handlerStatus = document.getElementById('handler-status');
    handlerStatus.innerText = 'text updated by addEventListener button';
})

//system 2 - another - recap 

document.getElementById('btn-update').addEventListener('click', function(){
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value; 
    const p = document.getElementById('input-text-display');
    p.innerText = inputText;
    inputField.value = ' ';
})