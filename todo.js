// 1. Create variables for each element that will be used or created
// 2. create an event listener for the add task input and get its current value
// 3. when there is a value for the input create a 


window.addEventListener('load', () => {
    const form = document.querySelector("#newtaskform")
    const input = document.querySelector(".newtaskinput")
    const list_el = document.querySelector("#tasks")


    let taskitems = JSON.parse(localStorage.getItem("tasks")) || []



    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value

        const todo = {
            content: e.target.elements.content.value,
            done: false,
            createdAt: new Date().getTime()
        }

        taskitems.push(todo)

        localStorage.setItem("taskitems", JSON.stringify(taskitems));

        e.target.reset()

        if (!task) {
            alert("Fill in")
            return;
        }
        // Task element itself
        const task_el = document.createElement("div")
        task_el.classList.add("task")

        // Task content
        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content")
        // task_content_el.innerText = task

        task_el.appendChild(task_content_el)

        const taskInput = document.createElement("input")
        taskInput.classList.add("text")
        taskInput.type = "text"
        taskInput.value = task
        taskInput.setAttribute("readonly", "readonly")

        task_content_el.appendChild(taskInput)

        list_el.appendChild(task_el)

        const btns = document.createElement("div")
        btns.classList.add("buttons")

        task_el.appendChild(btns)
        taskitems.push(task_el)
        console.log(taskitems)

        const editBtn = document.createElement("button")
        editBtn.classList.add("edit")
        editBtn.innerText = "edit"
        btns.appendChild(editBtn)
        console.log(editBtn)

        const deleteBtn = document.createElement("button")
        deleteBtn.classList.add("delete")
        deleteBtn.innerText = "delete"
        btns.appendChild(deleteBtn)

        input.value = "";

        task_content_el.appendChild(taskInput)
        console.log(taskInput)

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

        deleteBtn.addEventListener('click', () => {
            list_el.removeChild(task_el)
        })
    })
    window.localStorage.setItem("tasks", JSON.stringify(taskitems))
})

