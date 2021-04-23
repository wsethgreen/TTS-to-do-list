
let toDoList = document.querySelector('.to-do_list');

let submit = document.querySelector('.submit_button');

// Function to add input value to to-do list

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

let toDoItem = document.querySelectorAll('.delete-btn');

var deletes = document.querySelectorAll('.removeBtn')
// Iterate all nodes
deletes.forEach(btn => {
  // Attach event listener. Note to preserve the button this-reference
  // by using the non-shorthand function
  btn.addEventListener('click', function() {
    var li = this.parentNode
    li.remove()
  })
})



// toDoItem.addEventListener('click', (e) => {
//     e.preventDefault();
//     toDoItem.remove();
// })
