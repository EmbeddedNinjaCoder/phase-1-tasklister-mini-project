document.addEventListener("DOMContentLoaded", () => {
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
  displayTask(task)
}

function displayTask(task){
  const taskUl = document.getElementById("tasks")
  //console.log(taskUl)
  const taskLi = document.createElement("li")
  const deleteBtn = document.createElement("button")
  deleteBtn.textContent = "x"

  deleteBtn.addEventListener("click", deleteTask)

  taskLi.textContent = task + " "
  //console.log(taskLi)
  taskLi.appendChild(deleteBtn)
  taskUl.appendChild(taskLi)
}

function deleteTask(e) {
  e.target.parentNode.remove()
}

addingEventListeners()



