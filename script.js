
let tarefas = []

document.addEventListener("keypress", function(e){
   if(e.key == "Enter"){
       add()
   }
})

function add () {
    const input = document.querySelector("input")
    if(input.value == ""){
        alert("Sem tarefas!")

    } else{
    tarefas.push(input.value)
    input.value = ""
    render()}
 } 
 function render (){
      const ul = document.querySelector("ul")
      ul.innerHTML = null

      tarefas.forEach(function(tarefa)  {
          const li = document.createElement("li")
    li.innerText = tarefa 
    ul.appendChild(li)    
    const button = document.createElement("button")
    button.innerHTML = "X"
    button.addEventListener("click", function() {
        const index = tarefas.indexOf(tarefa)
        tarefas.splice(index, 1)
        render()
    })
    li.appendChild(button)
    })
 }
render()