const form = document.getElementById("form")
const input = document.getElementById("input")
const todosUL = document.getElementById("todos")
const clearBtn = document.getElementById("clear")

form.addEventListener("submit", function(e){
  e.preventDefault()

  addTodo()
});

function addTodo(todo){
  let todoText = input.value;

  if(todo){
    todoText = todo.text;
  }
  if(todoText){
    const todoEl = document.createElement("li");
    if(todo && todo.completed){
      todoEl.classList.add("completed");
    }
    todoEl.innerText = todoText;

    todoEl.addEventListener("click", function(){
      todoEl.classList.add("completed")
    })

    clearBtn.addEventListener("click", function(){
      todoEl.remove();
    })

    todosUL.appendChild(todoEl);
    input.value = "";
  }
}
