import { mainListTask } from "./DOMscripts.js";
import * as p from "./project";
const task=(name,projectId)=>{
    return {
        name,
        projectId,
    };
}
function showAddTask() {
    document.querySelector("#task--new_hidden").id = "task--new";
    document.querySelector(".task--add").classList.replace("task--add","task--add_hidden");
}
function addTask(nameValue,projectValue) {
    let obj=JSON.parse(localStorage.getItem("todoList"));
    obj.task.push(task(nameValue,obj.project[projectValue].id));
    obj.project[projectValue].count++;
    document.querySelector("#"+obj.project[projectValue].id+" .project--count").textContent=obj.project[projectValue].count;
    localStorage.setItem("todoList",JSON.stringify(obj));
    document.querySelector(".task--add_hidden").before(mainListTask(nameValue));
    document.querySelector("#task--new").id = "task--new_hidden";
    document.querySelector(".task--add_hidden").classList.replace("task--add_hidden","task--add");
}
function populateTaskList(){
    let obj=JSON.parse(localStorage.getItem("todoList"));
    for(let i=0;i<obj.task.length;i++){
        let nameValue=obj.task[i].name;
        document.querySelector(".task--add").before(mainListTask(nameValue));
    }
}
function populateProjectSelect(){
    let projectsArray=JSON.parse(localStorage.getItem("todoList")).project;
    let selectElement=document.querySelector("#task_project");
    //if project array is not empty repopulate select element
    if( Array.isArray(projectsArray) && projectsArray.length > 0){
        //remove old options
        while (selectElement.firstChild) {
            selectElement.removeChild(selectElement.firstChild);
        }
        //add new options
        for(let i=0;i<projectsArray.length;i++){
            const pOption=document.createElement("option");
            pOption.value=i;
            pOption.textContent=projectsArray[i].name;
            selectElement.appendChild(pOption);
        }
    }    
}
function cancelAddTask() {
    document.querySelector("#task--new").id = "task--new_hidden";
    document.querySelector(".task--add_hidden").classList.replace("task--add_hidden","task--add");
}
export { showAddTask, addTask, cancelAddTask, populateTaskList, populateProjectSelect};

