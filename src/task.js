import { mainListTask,mainGroup } from "./DOMscripts.js";
import {format,addDays,addMonths,parse,compareDesc, compareAsc} from 'date-fns';
import {createMainEvents} from './eventsScripts';
const task = (name, projectId, date) => {
    return {
        name,
        projectId,
        date,
    }
}
function showAddTask() {
    document.querySelector("#task--new_hidden").id = "task--new";
    document.querySelector(".task--add").classList.replace("task--add", "task--add_hidden");
}
function addTask(nameValue, projectValue, dateValue) {
    let obj = JSON.parse(localStorage.getItem("todoList"));
    let objP = JSON.parse(localStorage.getItem("preferences"));
    obj.task.push(task(nameValue, obj.project[projectValue].id, dateValue));
    obj.project[projectValue].count++;
    document.querySelector("#" + obj.project[projectValue].id + " .project--count").textContent = obj.project[projectValue].count;
    localStorage.setItem("todoList", JSON.stringify(obj));
    if(turnDateToString(dateValue)==objP["sidebar"]["day"]){
        populateTaskListOfDate(turnDateToString(dateValue));
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

        const optionColor = document.createElement("span");
        optionColor.className = "optionColor";
        optionColor.style.backgroundColor = projectsArray[i].color;
        pOption.appendChild(optionColor);
        createdTaskListEvents(pOption);
    }
}
function showTaskProjectSelect() {
    let elementPos = document.querySelector("#task_project").getBoundingClientRect();
    let bodyPos = document.body.getBoundingClientRect();
    document.querySelector(".task--menuouter_hidden").classList.add("task--menuouter");
    document.querySelector(".task--menu").style.left = `${elementPos.left + 2 - bodyPos.left}px`;
    document.querySelector(".task--menu").style.top = `${elementPos.bottom + 2 - bodyPos.top}px`;
}
function showTaskDateSelect() {
    let elementPos = document.querySelector("#task--date").getBoundingClientRect();
    let bodyPos = document.body.getBoundingClientRect();
    document.querySelector(".task--datemenuouter_hidden").classList.add("task--datemenuouter");
    document.querySelector(".task--datemenu").style.left = `${elementPos.left + 2 - bodyPos.left}px`;
    document.querySelector(".task--datemenu").style.top = `${elementPos.bottom + 2 - bodyPos.top}px`;
}
function hideTaskProjectSelect() {
    document.querySelector(".task--menuouter_hidden").classList.remove("task--menuouter");
}
function hideTaskDateSelect() {
    document.querySelector(".task--datemenuouter_hidden").classList.remove("task--datemenuouter");
}
function deleteTasks(taskId) {
    let obj = JSON.parse(localStorage.getItem("todoList"));
    let objP =JSON.parse(localStorage.getItem("preferences"));
    let newTask = obj.task.filter((element, index) => {
        return element.projectId != taskId;
    });
    obj.task = newTask;
    localStorage.setItem("todoList", JSON.stringify(obj));
    populateTaskListOfDate(objP["sidebar"]["listState"]);
}
function cancelAddTask() {
    document.querySelector("#task--new").id = "task--new_hidden";
    document.querySelector(".task--add_hidden").classList.replace("task--add_hidden", "task--add");
}
function taskProjectSelectedOption(selectedProject) {
    const taskProject = document.querySelector("#task_project");
    if (taskProject.firstChild) {
        taskProject.removeChild(taskProject.firstChild);
    }
    const child = document.createElement("div");
    child.className = selectedProject.className;
    taskProject.appendChild(child);
    child.textContent = `${selectedProject.textContent}`;
}
function taskDateSelectedOption(selectedDate) {
    const taskDate = document.querySelector("#task--date");
    if (taskDate.firstChild) {
        taskDate.removeChild(taskDate.firstChild);
    }
    const child = document.createElement("div");
    child.className = selectedDate.className;
    child.dataset.date = selectedDate.dataset.date;
    taskDate.appendChild(child);
    child.textContent = `${selectedDate.textContent}`;
}
function showTasksInDate(element){
    const main=document.querySelector("#main");
    main.removeChild(main.firstChild);
    main.appendChild(mainGroup(element.textContent));
    let obj = JSON.parse(localStorage.getItem("preferences"));
    obj["sidebar"]["day"]=element.textContent;
    localStorage.setItem("preferences", JSON.stringify(obj));
    populateTaskListOfDate(element.textContent);
    createMainEvents();
}
function turnDateToString(dateOption){
    let today=format(new Date(), 'yyyy-MM-dd');
    let tomorrow=format(addDays(new Date(),1),'yyyy-MM-dd');
    if(today==dateOption){
        return "Today";
    }else if(tomorrow==dateOption){
        return "Tomorrow";
    }
}
function populateTaskListOfDate(dateOption) {
    let date=format(new Date(), 'yyyy-MM-dd');
    if(dateOption=="Tomorrow"){
        date=format(addDays(new Date(),1),'yyyy-MM-dd');
    }
    let taskList = document.querySelectorAll("#main--list .task");
    let obj = JSON.parse(localStorage.getItem("todoList"));
    let projectNameValue, projectColorValue, nameValue;
    //delete old list
    taskList.forEach(element => {
        element.parentNode.removeChild(element);
    });
    //populate task list
    for (let i = 0; i < obj.task.length; i++) {
        nameValue = obj.task[i].name;
        if(obj.task[i].date==date){
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
}
function nextMonth(){
    let selected=document.querySelector(".months--select_current");
    let nextDate=addMonths(parse(selected.dataset.date, 'yyyy-MM-dd', new Date()),1);
    selected.textContent=format(nextDate,"LLL");
    selected.dataset.date=format(nextDate,"yyyy-MM-dd");
}
function preMonth(){
    let selected=document.querySelector(".months--select_current");
    let preDate=addMonths(parse(selected.dataset.date, 'yyyy-MM-dd', new Date()),-1);
    let currentDate=new Date();
    let checkDate=compareAsc(preDate,currentDate);
    if(checkDate==1){
        selected.textContent=format(preDate,"LLL");
        selected.dataset.date=format(preDate,"yyyy-MM-dd");
    }
}
function createdTaskListEvents(pOption) {
    let optionEvent = function () {
        taskProjectSelectedOption(pOption);
    }
    pOption.addEventListener("click", optionEvent);
}
export { preMonth,nextMonth,showTasksInDate, taskDateSelectedOption, hideTaskDateSelect, showTaskDateSelect, hideTaskProjectSelect, showTaskProjectSelect, deleteTasks, showAddTask, addTask, cancelAddTask, populateTaskListOfDate, populateProjectSelect };

