document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
let commentText = document.querySelector("Create New Task")
let submitButton = document.querySelector("#create-task-form")
let todos = document.querySelector("#tasks")

commentText.addEventListener("submit",toDoList())
submitButton.addEventListener("click", function(event){
  event.preventDefault()
})


function toDoList(){
  var a = document.createElement("li")

  todos.append(`${commentText}`, a)
  console.log("Hello")
}

