// Neuer Versuch

// eventlistener - submit 
const form = document.querySelector("#form")
const blogs = document.querySelector(".c_second")
const done = document.querySelector(".done")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskName  = document.querySelector("#taskName")
    createBlog(taskName.value);
    // console.log(taskName.value) -- to check on console if submit works

    // löscht das innere des Eingabefeldes nach jedem Submit
    taskName.value =""
});

// CHOOSE BETWEEN WORK AND PERSONAL - change button color:
const changeButtonColor = (color) => {
    if (color === "red") {
        return personal = red;
    } else {
        return personal = blue; 
    }
};

// create new element where I will put the Message
const createBlog = (taskName) => {
    // console.log(taskName)
    // const container erstellt und dem einen blog als div in c_second 
    // angehängt mit appendChild
    const container = document.createElement("div");
    // der bekommt eine id 
    container.id = "innerBox";
    const taskTitle = document.createElement("h3");
    // container.innerText bringt den Text in den container taskName
    container.innerText = taskName 
    // done to right column:
    // const done = document.createElement("div");
    
    const moveButton = document.createElement("button");
    // container.innerText bringt den Text in den container taskName
    moveButton.innerText = ">";
    moveButton.id = "move-btn";

    const deleteButton = document.createElement("button");
    // container.innerText bringt den Text in den container taskName
    deleteButton.innerText = "x";
    deleteButton.id = "delete-btn";

    // eventlistener für den delete-button
deleteButton.addEventListener("click", (e) => {
    container.remove();
});


form.addEventListener("#delete-btn", (e) => {
    e.preventDefault();
    const finalColumn  = document.querySelector("#finalColumn")
    createBlog(finalColumn.value);
    // console.log(taskName.value) -- to check on console if submit works

    // löscht das innere des Eingabefeldes nach jedem Submit
    finalColumn.value =""
});


// deleteButton.addEventListener("click", (e) => {
//     e.preventDefault();
//     const innerBox  = document.querySelector("#innerBox")
//     createBlog(innerBox.value);
//     // console.log(taskName.value) -- to check on console if submit works

//     // löscht das innere des Eingabefeldes nach jedem Submit
//     innerBox.value =""
// });




   //die mama?
container.appendChild(taskTitle);

 // die children
blogs.appendChild(container);
container.appendChild(deleteButton);
container.appendChild(moveButton);
};


    // // Appending the elements inside of activeTasks
    // //parent.appendChild(child);

    // activeTasks.appendChild(taskTemplate);
    // // Appending the elements inside of taskTemplate

    // taskTemplate.appendChild(taskTitle);
    // taskTemplate.appendChild(priorityTitle);
    // taskTemplate.appendChild(inputPriorityOpt);
    // inputPriorityOpt.appendChild(blankOption);
    // inputPriorityOpt.appendChild(high);
    // inputPriorityOpt.appendChild(medium);
    // inputPriorityOpt.appendChild(low);
    // taskTemplate.appendChild(deadlineTitle);
    // taskTemplate.appendChild(inputDeadlineOpt);
    // taskTemplate.appendChild(editButton);
    // taskTemplate.appendChild(deleteButton);
    // taskTemplate.appendChild(doneButton);


    // ---- move from todo to done ----

