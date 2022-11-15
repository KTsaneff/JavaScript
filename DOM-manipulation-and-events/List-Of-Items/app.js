function addItem() {
    //select input field and read value
    const input = document.getElementById('newItemText');
    console.log(input.value);
    //create new li element nad set its content to input value
    const liElement = document.createElement('li');
    liElement.textContent = input.value;
    //select ul and append new li
    document.getElementById('items').appendChild(liElement);

    //nice-to-have clear input field

    input.value = "";
}