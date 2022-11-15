function addItem() {
    //select input field and read value
    const input = document.getElementById('newItemText');
    console.log(input.value);
    //create new li element nad set its content to input value
    const liElement = document.createElement('li');
    liElement.textContent = input.value;

    //create Delete button
    const button = document.createElement('a');
    button.href = '#';
    button.textContent = '[Delete]';
    button.addEventListener('click', removeElement); 

    liElement.appendChild(button);

    //select ul and append new li
    document.getElementById('items').appendChild(liElement);

    //nice-to-have clear input field

    input.value = "";

    function removeElement(ev) {
        const parent = ev.target.parentNode;
        parent.remove();
    }
}