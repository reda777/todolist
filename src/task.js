import { mainListTask } from "./DOMscripts.js";
import * as p from "./project";
import { createdTaskListEvents } from "./eventsScripts.js";
const task = (name, projectId) => {
    return {
        name,
        projectId,
    };
}
function showAddTask() {
    document.querySelector("#task--new_hidden").id = "task--new";
    document.querySelector(".task--add").classList.replace("task--add", "task--add_hidden");
}
function addTask(nameValue, projectValue) {
    let obj = JSON.parse(localStorage.getItem("todoList"));
    obj.task.push(task(nameValue, obj.project[projectValue].id));
    obj.project[projectValue].count++;
    document.querySelector("#" + obj.project[projectValue].id + " .project--count").textContent = obj.project[projectValue].count;
    localStorage.setItem("todoList", JSON.stringify(obj));
    populateTaskList();
}
function populateTaskList() {
    let taskList=document.querySelectorAll("#main--list .task");
    let obj = JSON.parse(localStorage.getItem("todoList"));
    let projectNameValue, projectColorValue, nameValue;
    //delete old list
    taskList.forEach(element => {
        element.parentNode.removeChild(element);
    });
    //populate task list
    for (let i = 0; i < obj.task.length; i++) {
        nameValue = obj.task[i].name;
        for (let k = 0; k < obj.project.length; k++) {
            if (obj.task[i].projectId == obj.project[k].id) {
                projectNameValue = obj.project[k].name;
                projectColorValue = obj.project[k].color;
                (document.querySelector(".task--add")
                ?.before(mainListTask(nameValue, projectNameValue, projectColorValue))) || 
                (document.querySelector(".task--add_hidden")
                ?.before(mainListTask(nameValue, projectNameValue, projectColorValue)));
            }
        }
    }
}
function populateProjectSelect() {
    let projectsArray = JSON.parse(localStorage.getItem("todoList")).project;
    let selectElement = document.querySelector(".task--menu");
    //remove old options
    while (selectElement.firstChild) {
        selectElement.removeChild(selectElement.firstChild);
    }
    //if project array is not empty repopulate select element
    for (let i = 0; i < projectsArray.length; i++) {
        const pOption = document.createElement("div");
        pOption.className = i;
        pOption.textContent = projectsArray[i].name;
        selectElement.appendChild(pOption);
        createdTaskListEvents(pOption);
    }
}
function showTaskProjectSelect(){
    let elementPos=this.getBoundingClientRect();
    let bodyPos=document.body.getBoundingClientRect();
    document.querySelector(".task--menuouter_hidden").classList.add("task--menuouter");
    document.querySelector(".task--menu").style.left=`${elementPos.left+2-bodyPos.left}px`;
    document.querySelector(".task--menu").style.top=`${elementPos.bottom+2-bodyPos.top}px`;
}
function deleteTasks(taskId){
    let obj=JSON.parse(localStorage.getItem("todoList"));
    let newTask=obj.task.filter((element, index)=>{
        return element.projectId!=taskId;
    });
    obj.task=newTask;
    localStorage.setItem("todoList",JSON.stringify(obj));
    populateTaskList();
}
function cancelAddTask() {
    document.querySelector("#task--new").id = "task--new_hidden";
    document.querySelector(".task--add_hidden").classList.replace("task--add_hidden", "task--add");
}
export { showTaskProjectSelect, deleteTasks, showAddTask, addTask, cancelAddTask, populateTaskList, populateProjectSelect };

