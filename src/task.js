import { createDay,createToday, createTomorrow,mainListTask,mainGroup } from "./DOMscripts.js";
import {format,addDays,addMonths,parse, compareAsc,eachDayOfInterval,lastDayOfMonth,getWeekOfMonth,getDay} from 'date-fns';
import {createMainEvents} from './eventsScripts';
const task = (name, projectId, date) => {
    return {
        name,
        projectId,
        date,
    }
}
function showAddTask() {
    const pOption=document.querySelector(".task--menu").firstChild;
    document.querySelector("#task--new_hidden").id = "task--new";
    document.querySelector(".task--add").classList.replace("task--add", "task--add_hidden");
    taskProjectSelectedOption(pOption);
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
        const optionText=document.createElement("span");
        optionText.className="optionText";
        const optionTextInside=document.createElement("span");
        optionTextInside.textContent =projectsArray[i].name;
        

        const optionColor = document.createElement("span");
        optionColor.className = "optionColor";
        optionColor.style.backgroundColor = projectsArray[i].color;
        selectElement.appendChild(pOption);
        pOption.appendChild(optionColor);
        optionText.appendChild(optionTextInside);
        pOption.appendChild(optionText);
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
function hideTaskDateSelect(e) {
    let datemenuOuter=document.querySelector(".task--datemenuouter_hidden");
    if(datemenuOuter==e.target)
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
    let clonedProject=selectedProject.cloneNode(true);
    taskProject.appendChild(clonedProject);
}
function taskDateSelectedOption(selectedDate) {
    const taskDate = document.querySelector("#task--date");
    if (taskDate.firstChild) {
        taskDate.removeChild(taskDate.firstChild);
    }
    switch (selectedDate.textContent) {
        case "Today":
            taskDate.appendChild(createToday());
            break;
        case "Tomorrow":
            taskDate.appendChild(createTomorrow());
            break;
        default:
            console.log("Error selectedDate.textContent doesn't match");
            break;
    }
    document.querySelector(".task--datemenuouter_hidden").classList.remove("task--datemenuouter");
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
function currentMonth(){
    let selected=document.querySelector(".months--select_current");
    selected.textContent=format(new Date(),"LLL yyyy");
    selected.dataset.date=format(new Date(),"yyyy-MM-dd");
    createCalendar();
}
function nextMonth(){
    let selected=document.querySelector(".months--select_current");
    let nextDate=addMonths(parse(selected.dataset.date, 'yyyy-MM-dd', new Date()),1);
    selected.textContent=format(nextDate,"LLL yyyy");
    selected.dataset.date=format(nextDate,"yyyy-MM-dd");
    createCalendar();
}
function preMonth(){
    let selected=document.querySelector(".months--select_current");  
    let selectedDate=parse(selected.dataset.date, 'yyyy-MM-dd', new Date());
    let preDate=addMonths(selectedDate,-1);
    //compare the year and month
    let dateToCompare=parse(selected.dataset.date.slice(0,7), 'yyyy-MM', new Date());
    let currentDate=new Date();
    let checkDate=compareAsc(dateToCompare,currentDate);
    if(checkDate!=-1){
        selected.textContent=format(preDate,"LLL yyyy");
        selected.dataset.date=format(preDate,"yyyy-MM-dd");
    }
    createCalendar();
}
function createCalendar(){
    const calendar=document.querySelector(".months--days");
    const selectedMonth=document.querySelector(".months--select_current").dataset.date;
    let checkDate=compareAsc(parse(selectedMonth, 'yyyy-MM-dd', new Date()),new Date());
    let currentMonth;
    if(checkDate==-1){
        currentMonth=new Date();
    }else{
        currentMonth=parse(selectedMonth.slice(0,7), 'yyyy-MM', new Date());
    }
    const dateOfDays=document.createElement("div");
    dateOfDays.className="months--days";
    let daysArray=[[],[],[],[],[],[]];
    let daysOfMonth=eachDayOfInterval({
        start: currentMonth,
        end: lastDayOfMonth(currentMonth)
    });
    for(let day of daysOfMonth){
        daysArray[getWeekOfMonth(day)-1][getDay(day)]=day;
    }
    for(let i=0;i<daysArray.length;i++){
        const eachWeek=document.createElement("div");
        eachWeek.className=`months--days_week`;
        for(let k=0;daysArray[i].length!=0 && k<daysArray[i].length;k++){
            const eachDay=document.createElement("div");
            if(daysArray[i][k]===undefined){
                eachDay.textContent="";
            }else{
                eachDay.className="day";
                eachDay.dataset.date=format(daysArray[i][k],'dd/MM/yyyy');
                eachDay.textContent=format(daysArray[i][k],"d");
            }
            eachWeek.appendChild(eachDay);
        }
        dateOfDays.appendChild(eachWeek);
    }
    while(calendar.firstChild){
        calendar.removeChild(calendar.firstChild);
    }
    calendar.appendChild(dateOfDays);
}
function taskCalDateSelected(e){
    if(e.target.className=="day"){
        const taskDate = document.querySelector("#task--date");
        if (taskDate.firstChild) {
            taskDate.removeChild(taskDate.firstChild);
        }
        taskDate.appendChild(createDay(e));
        document.querySelector(".task--datemenuouter_hidden").classList.remove("task--datemenuouter");
    }
}
function taskResizeTextArea(element){
    let maxHeight=200;
    element.style.height = "";
    element.style.height = Math.min(element.scrollHeight, maxHeight) + "px";
}
function createdTaskListEvents(pOption) {
    let optionEvent = function () {
        taskProjectSelectedOption(pOption);
    }
    pOption.addEventListener("click", optionEvent);
}
export { currentMonth,taskResizeTextArea,taskCalDateSelected,preMonth,nextMonth,showTasksInDate, taskDateSelectedOption, hideTaskDateSelect, showTaskDateSelect, hideTaskProjectSelect, showTaskProjectSelect, deleteTasks, showAddTask, addTask, cancelAddTask, populateTaskListOfDate, populateProjectSelect };

