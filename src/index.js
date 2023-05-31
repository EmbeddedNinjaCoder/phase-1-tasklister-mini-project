document.addEventListener("DOMContentLoaded", () => {
  addingEventListeners()
  console.log("Hello")
});

function addingEventListeners(){ 
  document
    .getElementById("create-task-form")
    .addEventListener("submit", handleFormSubmit)
}

function handleFormSubmit(e) {
  e.preventDefault()
  //console.log(e)
  const task = e.target[0].value
  //console.log(task)
  //console.log(e.target.priority.value)
  const priorityLevel = parseInt(e.target.priority.value)
  //console.log(priorityLevel)
  displayTask(task, priorityLevel)
  e.target.reset()
}

function displayTask(task, priorityLevel){
  const taskUl = document.getElementById("tasks")
  //console.log(taskUl)

  const taskLi = document.createElement("li")

  const deleteBtn = document.createElement("button")

  deleteBtn.textContent = "x"
  deleteBtn.addEventListener("click", deleteTask)

  taskLi.textContent = task + " "
  //console.log(taskLi)
  taskLi.style.color = getPriorityColor(priorityLevel)
  taskLi.appendChild(deleteBtn)

  taskUl.appendChild(taskLi)
}

function deleteTask(e) {
  //console.log(e)
  e.target.parentNode.remove()
}

function getPriorityColor(priorityLevel) {
  //console.log(priorityLevel)
  if (priorityLevel === 1) {
    return("red")
  } else if (priorityLevel === 2) {
    return("blue") 
  } else {
    return("green")
  }
}





