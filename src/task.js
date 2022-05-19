import { mainListTask } from "./DOMscripts.js";
function showAddTask() {
    document.querySelector("#task--new_hidden").id = "task--new";
    document.querySelector(".task--add").classList.replace("task--add","task--add_hidden");
}
function addTask(nameValue) {
    let obj=JSON.parse(localStorage.getItem("todoList"));
    obj.task.push({name:nameValue});
    localStorage.setItem("todoList",JSON.stringify(obj));
    document.querySelector("#main--list").prepend(mainListTask(nameValue));
    document.querySelector("#task--new").id = "task--new_hidden";
    document.querySelector(".task--add_hidden").classList.replace("task--add_hidden","task--add");
}
function populateTaskList(){
    let obj=JSON.parse(localStorage.getItem("todoList"));
    for(let i=0;i<obj.task.length;i++){
        let nameValue=obj.task[i].name;
        document.querySelector("#main--list").prepend(mainListTask(nameValue));
    }
}
function cancelAddTask() {
    document.querySelector("#task--new").id = "task--new_hidden";
    document.querySelector(".task--add_hidden").classList.replace("task--add_hidden","task--add");
}
export { showAddTask, addTask, cancelAddTask, populateTaskList };

