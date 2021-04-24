// Set selectors for the to-do list and submit button
let toDoList = document.querySelector('.to-do_list');

let submit = document.querySelector('.submit_button');

// Click even for the submit button that adds input value to to-do list

submit.addEventListener('click', (e) => {
    e.preventDefault();

    // grab input value
    let inputValue = document.getElementById('to-do_input').value;
    document.getElementById('to-do_input').value = "";

    // Create new li 
    let newLi = document.createElement('li');

    // Add the input value as the innerHTML for the new li
    newLi.innerHTML = inputValue;

    // Add the new li to the existing list
    toDoList.appendChild(newLi);
});

// Click event to remove list item

toDoList.addEventListener('click', (e) => {
    e.preventDefault();
    e.target.style.textDecoration = "line-through";
    setInterval(function() {
        e.target.remove();
    }, 1000);
})

