var addButton = document.getElementById('add')    
var inputTask = document.getElementById('new-task')
var unfinishedTasks = document.getElementById('unfinished-tasks') 
var label = document.createElement('label') 
const prior = document.getElementById('priority')
let NewTodoArr = []


addButton.addEventListener ('click', function addTask () {
    
    if (inputTask.value === ''){
        return alert ('Введите текст задачи!') 
    }

    var listItem = document.createElement('li')     //элемент списка
     
    const task = document.getElementById('new-task')
    
    let NewTodo = {
        text: task.value, 
        prioritet: prior.value,
        date: new Date().toLocaleString()
        }
        NewTodoArr.unshift(NewTodo)
        
    inputTask.value = ''  //обнулим значение строки
    let displayTask = ''
    NewTodoArr.forEach(item => {
        swap(item)
        displayTask += `<li class = "tasks"> ${priors}
        <label> ${item.text}</label>
        <label> ${item.date}</label>
        <i class= 'material-icons delete'>delete</i>
        </li>`
        unfinishedTasks.innerHTML = displayTask

    })
    
    function swap(item) { 
            let selected = document.getElementById('priority').options.selectedIndex
            let val = document.getElementById('priority').options[selected].value;
            if (item.priors === 'low') {
                priors = `<font color="red">низкий</font>`
                } else if (val === 'middle') {
                priors = `<font color="blue">средний</font>` 
                } else {
                priors = `<font color="green">высокий</font>` 
                }
            return priors
        } 
    
        unfinishedTasks.addEventListener('click', (e) => {
            e.preventDefault() //чтобы не включалось действие по умолчанию
            NewTodoArr.forEach(i => {
                if (e.target.closest('.delete')) {
                    NewTodoArr.splice(i,1) //начиная с i позиции удаляем 1 элемент
                }
                let displayTask = ''
                if (NewTodoArr.length === 0) unfinishedTasks.innerHTML = '' //если массив пустой, то удаляем и из визуала
                NewTodoArr.forEach(item => {
                    swap(item)
                    displayTask += `<li class="tasks">${prior}
                    <label>${item.name}</label>
                    <label>${item.time}</label>
                    <i class ="material-icons delete">delete</i>
                    </li>`
                    unfinishedTasks.innerHTML = displayTask
                })
            })
        })


    function closeTask  () { 
        //console.log('2')
    }

    function finishTask () {  
        //console.log('3')
    }

})

