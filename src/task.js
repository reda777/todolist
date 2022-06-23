import {createDay,createToday, createTomorrow,mainGroup } from "./DOMscripts.js";
import {format,addDays,addMonths,parse, compareAsc,eachDayOfInterval,lastDayOfMonth,getWeekOfMonth,getDay} from 'date-fns';
import {createMainEvents} from './eventsScripts';
import * as p from "./project.js";
const task = (name, projectId, date) => {
    let id = Date.now().toString(36) + Math.random().toString(36).slice(2);
    return {
        id,
        name,
        projectId,
        date,
    }
}
function showAddTask() {
    let objP = JSON.parse(localStorage.getItem("preferences"));
    const pOption=document.querySelector(`.task--menu [class="${objP["lastProject"]}"]`);
    taskProjectSelectedOption(pOption);
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
function deleteTasksOfProject(projectId) {
    let obj = JSON.parse(localStorage.getItem("todoList"));
    let objP =JSON.parse(localStorage.getItem("preferences"));
    let newTask = obj.task.filter((element, index) => {
        return element.projectId != projectId;
    });
    obj.task = newTask;
    localStorage.setItem("todoList", JSON.stringify(obj));
    populateTaskListOfDate(objP["sidebar"]["day"]);
}
function cancelAddTask() {
    document.querySelector("#task--new").id = "task--new_hidden";
    document.querySelector(".task--add_hidden").classList.replace("task--add_hidden", "task--add");
}
function taskProjectSelectedOption(selectedProject) {
    let objP =JSON.parse(localStorage.getItem("preferences"));
    objP["lastProject"]=selectedProject.className;
    localStorage.setItem("preferences", JSON.stringify(objP));
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
    //keep the tab selected
    if(document.querySelector(".sidebar--header_clicked")){
        document.querySelector(".sidebar--header_clicked").classList.remove("sidebar--header_clicked");
    }
    element.classList.add("sidebar--header_clicked");

    const main=document.querySelector("#main");
    main.removeChild(main.firstChild);
    main.appendChild(mainGroup(element.textContent));
    let obj = JSON.parse(localStorage.getItem("preferences"));
    obj["sidebar"]["day"]=element.textContent;
    localStorage.setItem("preferences", JSON.stringify(obj));
    taskDateSelectedOption(element);
    populateTaskListOfDate(element.textContent);
    createMainEvents();
}
function showUpcomingTasks(element){
    //keep the tab selected
    if(document.querySelector(".sidebar--header_clicked")){
        document.querySelector(".sidebar--header_clicked").classList.remove("sidebar--header_clicked");
    }
    element.classList.add("sidebar--header_clicked");

    const main=document.querySelector("#main");
    main.removeChild(main.firstChild);
    main.appendChild(mainGroup("Upcoming"));
    let obj = JSON.parse(localStorage.getItem("preferences"));
    obj["sidebar"]["day"]="Upcoming";
    localStorage.setItem("preferences", JSON.stringify(obj));
    populateUpcomingListOfDate();
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
    let projectNameValue, projectColorValue, nameValue,idValue;
    //delete old list
    taskList.forEach(element => {
        element.parentNode.removeChild(element);
    });
    //populate task list
    for (let i = 0; i < obj.task.length; i++) {
        nameValue = obj.task[i].name;
        idValue=obj.task[i].id;
        if(obj.task[i].date==date){
            for (let k = 0; k < obj.project.length; k++) {
                if (obj.task[i].projectId == obj.project[k].id) {
                    projectNameValue = obj.project[k].name;
                    projectColorValue = obj.project[k].color;
                    (document.querySelector(".task--add")
                        ?.before(mainListTask(idValue,nameValue, projectNameValue, projectColorValue))) ||
                        (document.querySelector(".task--add_hidden")
                            ?.before(mainListTask(idValue,nameValue, projectNameValue, projectColorValue)));
                }
            }
        }
    }
}
function mainListTask(tId,tContent, tProject, tColor) {
    const task = document.createElement("div");
    task.className = "task";
    task.dataset.id=tId;

    const taskInputOuter = document.createElement("div");
    taskInputOuter.className = "task--inputouter";
    task.appendChild(taskInputOuter);

    const taskCheckboxInput = document.createElement("input");
    Object.assign(taskCheckboxInput, {
        type: "checkbox",
        name: "task_state",
        id: "task_state"
    });
    taskInputOuter.appendChild(taskCheckboxInput);

    const taskName = document.createElement("div");
    taskName.className = "task--name";
    taskName.textContent = tContent;
    task.appendChild(taskName);

    const taskName_project = document.createElement("div");
    taskName_project.className = "task--name_project";
    taskName_project.textContent = tProject;
    taskName_project.style.color = tColor;
    task.appendChild(taskName_project);
    createdTaskEvents(task);
    return task;
}
function populateUpcomingListOfDate() {
    let date=format(new Date(), 'yyyy-MM-dd');
    let taskList = document.querySelectorAll("#main--list .task");
    let obj = JSON.parse(localStorage.getItem("todoList"));
    let projectNameValue, projectColorValue, nameValue,idValue;
    //delete old list
    taskList.forEach(element => {
        element.parentNode.removeChild(element);
    });
    //populate task list
    for (let i = 0; i < obj.task.length; i++) {
        let perviousDate;
        if(i==0){
            perviousDate=obj.task[i].date;
        }else{
            perviousDate=obj.task[i-1].date;
        }
        let currentDate=obj.task[i].date;
        if( i==0 || perviousDate != currentDate ){
            const dateHeader=document.createElement("div");
            nameValue = obj.task[i].name;
            idValue=obj.task[i].id;
            dateHeader.className="main--list";
            dateHeader.textContent=format(parse(obj.task[i].date,'yyyy-MM-dd',new Date()),'do LLL yyyy');
            document.querySelector(".task--add")?.before(dateHeader) ||
            document.querySelector(".task--add_hidden")?.before(dateHeader);
        }
        for (let k = 0; k < obj.project.length; k++) {
            if (obj.task[i].projectId == obj.project[k].id) {
                projectNameValue = obj.project[k].name;
                projectColorValue = obj.project[k].color;
                (document.querySelector(".task--add")
                    ?.before(mainListTask(idValue,nameValue, projectNameValue, projectColorValue))) ||
                    (document.querySelector(".task--add_hidden")
                        ?.before(mainListTask(idValue,nameValue, projectNameValue, projectColorValue)));
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
function markTaskDone(that){
    let projectTaskId;
    let obj = JSON.parse(localStorage.getItem("todoList"));
    let objP =JSON.parse(localStorage.getItem("preferences"));
    let completedTask = obj.task.filter((element, index) => {
        return element.id == that.parentNode.parentNode.dataset.id;
    });
    let newTask = obj.task.filter((element, index) => {
        return element.id != that.parentNode.parentNode.dataset.id;
    });
    for(let task of obj.task){
        if(task.id==that.parentNode.parentNode.dataset.id)
            projectTaskId=task.projectId;
    }
    for(let project of obj.project){
        if(project.id==projectTaskId){
            project.count--;
        }
    }
    obj.completedTask = completedTask;
    obj.task = newTask;
    localStorage.setItem("todoList", JSON.stringify(obj));
    populateTaskListOfDate(objP["sidebar"]["day"]);
    p.populateProjectList();
}
function createdTaskEvents(t) {
    let taskDone=function(){
        markTaskDone(this);
    }
    t.querySelector(".task--inputouter input").addEventListener("change",taskDone);
}
export { mainListTask,taskProjectSelectedOption,showUpcomingTasks,currentMonth,taskResizeTextArea,taskCalDateSelected,preMonth,nextMonth,showTasksInDate, taskDateSelectedOption, hideTaskDateSelect, showTaskDateSelect, hideTaskProjectSelect, showTaskProjectSelect, deleteTasksOfProject, showAddTask, addTask, cancelAddTask, populateTaskListOfDate };

