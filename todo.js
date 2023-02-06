

// Event listener added to the page saying when page loads do something
window.addEventListener('load', () => {
    // Grabbing elements from the HTML and assigning them variables
    const form = document.querySelector("#newtaskform")
    const input = document.querySelector(".newtaskinput")
    const list_el = document.querySelector("#tasks")


    // Adding a submit event listener to the form element with parameter of e
    form.addEventListener('submit', (e) => {
        // prevents the page from re-loading when the form is submitted
        e.preventDefault();

        // assinging a variable of task to the value of the newtaskinput
        const task = input.value

        // if task is not task or in other words blank alert "fill in"
        if (!task) {
            alert("Fill in")
            return;
        }

        // Assinging task_el of a newly created div and then adding a class of task this will be used to create a container for the task itself and 
        // the delete and edit button
        const task_el = document.createElement("div")
        task_el.classList.add("task")
        //////////////////////////////////////////////////

        // Task content
        // creating a div and assigning it a variable of task_content_el that will hold the input element of the task, giving it a class of text, and placing it insde of the task_el
        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content")
        task_el.appendChild(task_content_el)

        // Assigning a variable that will create an input element, giving it a class of text, a type of text, a value of task which is the value of the
        // new task input, giving it an attribute of read-only so it cannot be focused or clicked, and putting the input inside of the task content element
        const taskInput = document.createElement("input")
        taskInput.classList.add("text")
        taskInput.type = "text"
        taskInput.value = task
        taskInput.setAttribute("readonly", "readonly")
        task_content_el.appendChild(taskInput)

        // Placing the task element and its descendants inside of the tasklist div
        list_el.appendChild(task_el)

        // Assigning a varible that will create a div element, giving the div a class of buttons, and placing the div inside of the task_el div 
        const btns = document.createElement("div")
        btns.classList.add("buttons")
        task_el.appendChild(btns)

        // Assigning a variable that will create a button, give it a class of edit, set the inner text to be edit, and placing it inside the buttons div
        const editBtn = document.createElement("button")
        editBtn.classList.add("edit")
        editBtn.innerText = "edit"
        btns.appendChild(editBtn)
        console.log(editBtn)

        // Assigning a variable that will create a button, give it a class of delete, set the inner text to be delete, and placing it inside the buttons div
        const deleteBtn = document.createElement("button")
        deleteBtn.classList.add("delete")
        deleteBtn.innerText = "delete"
        btns.appendChild(deleteBtn)

        // giving the newtask input a value of blank so the input will be empty after a task is submitted
        input.value = "";

        // placing the task input inside of the content div
        task_content_el.appendChild(taskInput)

        // Adding a click event listener to the edit button so that when it is clicked it lowercases the innertext of the edit button so that it can check
        // if it is equal to "edit" then removes the read-only attribute so the input can be edited and applies the focus method which tells the input it is selected
        // in order to apply some styles to the text color I defined in css
        // then it changed the innertext of the edit button to be save and else it adds the readonly attribute back and sets the innertext of the button to be edit again
        editBtn.addEventListener('click', () => {
            if (editBtn.innerText.toLocaleLowerCase() == "edit") {
                taskInput.removeAttribute("readonly");
                taskInput.focus()
                editBtn.innerText = "Save";
            } else {
                taskInput.setAttribute("readonly", "readonly")
                editBtn.innerText = "Edit"
            }
        })

        // Removes the task elementd from the task list container
        deleteBtn.addEventListener('click', () => {
            list_el.removeChild(task_el)
        })
    })
})

