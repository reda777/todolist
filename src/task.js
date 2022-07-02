import {createPriority, createDay, createToday, createTomorrow, mainGroup,taskEditBtn } from "./DOMscripts.js";
import { format, addDays, addMonths, parse, compareAsc, eachDayOfInterval, lastDayOfMonth, getWeekOfMonth, getDay } from 'date-fns';
import { createMainEvents} from './eventsScripts';
import * as p from "./project.js";
const task = (name, projectId, date, desc, prio) => {
    let id = Date.now().toString(36) + Math.random().toString(36).slice(2);
    return {
        id,
        name,
        desc,
        projectId,
        date,
        prio
    }
}
function showAddTask() {
    let objP = JSON.parse(localStorage.getItem("preferences"));
    const pOption = document.querySelector(`.task--menu [data-id="${objP["lastProject"]}"]`);
    taskProjectSelectedOption(pOption);
    document.querySelector(".task--new_hidden").classList.add("task--new");
    document.querySelector(".task--add").classList.replace("task--add", "task--add_hidden");
}
function closeMessageTab(condition, time) {
    let obj = JSON.parse(localStorage.getItem("todoList"));
    const projectValue = document.querySelector("#task_project div").className;
    const message = document.querySelector(".message--container_hidden");
    message.classList.add("message--container");
    message.querySelector(".message--text").textContent = "Task added to";
    message.querySelector(".message--dest").style.color = obj.project[projectValue].color;
    message.querySelector(".message--dest").textContent = `${obj.project[projectValue].name}`;

    let timeoutID = setTimeout(() => {
        message.firstChild.textContent = "";
        message.classList.remove("message--container");
    }, 3000);
    if (!condition) {
        clearTimeout(timeoutID);
        clearTimeout(time);
    }
    return timeoutID;
}
function addTaskButton() {
    const nameValue = document.querySelector("#task_name").value;
    const projectValue = document.querySelector("#task_project div").className;
    const dateValue = document.querySelector("#task--date div").dataset.date;
    const descValue= document.querySelector("#task_desc").value;
    const prioValue=document.querySelector("#task_prio div").dataset.prio;
    addTask(nameValue, projectValue, dateValue, descValue, prioValue);
    return closeMessageTab(true);
}
function addTask(nameValue, projectValue, dateValue, descValue, prioValue) {
    let obj = JSON.parse(localStorage.getItem("todoList"));
    //store the task in localstorage
    obj.task.push(task(nameValue, obj.project[projectValue].id, dateValue, descValue, prioValue));
    //update count of tasks in localstorage
    obj.project[projectValue].count++;
    //update count of tasks in the sidebar
    document.querySelector("#" + obj.project[projectValue].id + " .project--count").textContent = obj.project[projectValue].count;
    localStorage.setItem("todoList", JSON.stringify(obj));
    //populate correspondent task list 
    populateCurrentTab();
}
function populateCurrentTab() {
    const firstCase = ["Today", "Tomorrow", "Upcoming"];
    //get current tab
    let objP = JSON.parse(localStorage.getItem("preferences"));
    const currentTab = objP["sidebar"]["tab"];
    //pick which tab to populate
    if (firstCase.includes(currentTab)) {
        if (currentTab == "Upcoming") {
            populateUpcomingTab();
        } else {
            populateTodayOrTomorrowTab();
        }
    } else {
        populateProjectTab(currentTab);
    }
}
function populateProjectTab(pId) {
    let mainList = document.querySelectorAll("#main--list .main--list_dates");
    let obj = JSON.parse(localStorage.getItem("todoList"));
    let projectNameValue, projectColorValue, nameValue, idValue;
    //delete old list
    mainList.forEach(element => {
        element.parentNode.removeChild(element);
    });
    //populate and sort array of dates
    let listOfDates = [];
    for (let i = 0; i < obj.task.length; i++) {
        if (!listOfDates.includes(obj.task[i].date) && obj.task[i].projectId == pId) {
            listOfDates.push(obj.task[i].date);
        }
    }
    listOfDates.sort(function (a, b) {
        return compareAsc(parse(a, 'yyyy-MM-dd', new Date()), parse(b, 'yyyy-MM-dd', new Date()));
    });
    //create dom element for every sorted date
    for (let dates of listOfDates) {
        const dateHeader = document.createElement("div");
        dateHeader.className = "main--list_dates";
        dateHeader.dataset.date = dates;
        const dateHeaderText = document.createElement("div");
        dateHeaderText.className = "date--header_text";
        dateHeaderText.textContent = format(parse(dates, 'yyyy-MM-dd', new Date()), 'do LLL yyyy');
        dateHeader.appendChild(dateHeaderText);
        document.querySelector(".task--add")?.before(dateHeader) ||
            document.querySelector(".task--add_hidden")?.before(dateHeader);
    }
    //populate every dates with tasks
    for (let i = 0; i < obj.task.length; i++) {
        if (obj.task[i].projectId == pId) {
            idValue = obj.task[i].id;
            nameValue = obj.task[i].name;
            for (let k = 0; k < obj.project.length; k++) {
                if (obj.task[i].projectId == obj.project[k].id) {
                    projectNameValue = obj.project[k].name;
                    projectColorValue = obj.project[k].color;
                    document.querySelector(`#main--list [data-date="${obj.task[i].date}"]`)
                        .append(mainListTask(idValue, nameValue, projectNameValue, projectColorValue));
                }
            }
        }
    }
}
function populateUpcomingTab() {
    let mainList = document.querySelectorAll("#main--list .main--list_dates");
    let obj = JSON.parse(localStorage.getItem("todoList"));
    let projectNameValue, projectColorValue, nameValue, idValue;
    //delete old list
    mainList.forEach(element => {
        element.parentNode.removeChild(element);
    });
    //populate and sort array of dates
    let listOfDates = [];
    for (let i = 0; i < obj.task.length; i++) {
        if (!listOfDates.includes(obj.task[i].date)) {
            listOfDates.push(obj.task[i].date);
        }
    }
    listOfDates.sort(function (a, b) {
        return compareAsc(parse(a, 'yyyy-MM-dd', new Date()), parse(b, 'yyyy-MM-dd', new Date()));
    });
    //create dom element for every sorted date
    for (let dates of listOfDates) {
        const dateHeader = document.createElement("div");
        dateHeader.className = "main--list_dates";
        dateHeader.dataset.date = dates;
        const dateHeaderText = document.createElement("div");
        dateHeaderText.className = "date--header_text";
        dateHeaderText.textContent = format(parse(dates, 'yyyy-MM-dd', new Date()), 'do LLL yyyy');
        dateHeader.appendChild(dateHeaderText);
        document.querySelector(".task--add")?.before(dateHeader) ||
            document.querySelector(".task--add_hidden")?.before(dateHeader);
    }
    //populate every dates with tasks
    for (let i = 0; i < obj.task.length; i++) {
        idValue = obj.task[i].id;
        nameValue = obj.task[i].name;
        for (let k = 0; k < obj.project.length; k++) {
            if (obj.task[i].projectId == obj.project[k].id) {
                projectNameValue = obj.project[k].name;
                projectColorValue = obj.project[k].color;
                document.querySelector(`#main--list [data-date="${obj.task[i].date}"]`)
                    .append(mainListTask(idValue, nameValue, projectNameValue, projectColorValue));
            }
        }
    }
}
function turnStringToDate(s) {
    if (s == "Tomorrow") {
        return format(addDays(new Date(), 1), 'yyyy-MM-dd');
    } else {
        return format(new Date(), 'yyyy-MM-dd');
    }
}
function populateTodayOrTomorrowTab() {
    //get current tab
    let objP = JSON.parse(localStorage.getItem("preferences"));
    const currentTab = objP["sidebar"]["tab"];

    let taskList = document.querySelectorAll("#main--list .task");
    let obj = JSON.parse(localStorage.getItem("todoList"));
    let projectNameValue, projectColorValue, nameValue, idValue;
    //delete old list
    taskList.forEach(element => {
        element.parentNode.removeChild(element);
    });
    //populate task list of the current date
    for (let i = 0; i < obj.task.length; i++) {
        nameValue = obj.task[i].name;
        idValue = obj.task[i].id;
        if (obj.task[i].date == turnStringToDate(currentTab)) {
            for (let k = 0; k < obj.project.length; k++) {
                if (obj.task[i].projectId == obj.project[k].id) {
                    projectNameValue = obj.project[k].name;
                    projectColorValue = obj.project[k].color;
                    (document.querySelector(".task--add")
                        ?.before(mainListTask(idValue, nameValue, projectNameValue, projectColorValue))) ||
                        (document.querySelector(".task--add_hidden")
                            ?.before(mainListTask(idValue, nameValue, projectNameValue, projectColorValue)));
                }
            }
        }
    }
}
function showUpcomingTasks(element) {
    //keep the tab selected
    if (document.querySelector(".sidebar--header_clicked")) {
        document.querySelector(".sidebar--header_clicked").classList.remove("sidebar--header_clicked");
    }
    element.classList.add("sidebar--header_clicked");

    const main = document.querySelector("#main");
    main.removeChild(main.firstChild);
    main.appendChild(mainGroup("Upcoming"));
    let obj = JSON.parse(localStorage.getItem("preferences"));
    obj["sidebar"]["tab"] = "Upcoming";
    localStorage.setItem("preferences", JSON.stringify(obj));
    populateCurrentTab();
    createMainEvents();
}
function showProjectDates(p, e) {
    //keep the tab selected
    if (document.querySelector(".sidebar--header_clicked")) {
        document.querySelector(".sidebar--header_clicked").classList.remove("sidebar--header_clicked");
    }
    p.classList.add("sidebar--header_clicked");

    if (e.target.classList[0] != "project--edit_hidden" && e.target.classList[0] != "project--edit_icon") {
        const main = document.querySelector("#main");
        main.removeChild(main.firstChild);
        main.appendChild(mainGroup(p.id));
        let obj = JSON.parse(localStorage.getItem("preferences"));
        obj["sidebar"]["tab"] = p.id;
        localStorage.setItem("preferences", JSON.stringify(obj));
        populateCurrentTab();
        createMainEvents();
    }
}
function showTasksInDate(element) {
    //keep the tab selected
    if (document.querySelector(".sidebar--header_clicked")) {
        document.querySelector(".sidebar--header_clicked").classList.remove("sidebar--header_clicked");
    }
    element.classList.add("sidebar--header_clicked");

    const main = document.querySelector("#main");
    main.removeChild(main.firstChild);
    main.appendChild(mainGroup(element.textContent));
    let obj = JSON.parse(localStorage.getItem("preferences"));
    obj["sidebar"]["tab"] = element.textContent;
    localStorage.setItem("preferences", JSON.stringify(obj));
    taskDateSelectedOption(element);
    populateCurrentTab();
    createMainEvents();
}
////////////////////////////////////////////////////
function showTaskProjectSelect(elem) {
    let elementPos = elem.getBoundingClientRect();
    let bodyPos = document.body.getBoundingClientRect();
    document.querySelector(".task--menuouter_hidden").classList.add("task--menuouter");
    document.querySelector(".task--menu").style.left = `${elementPos.left + 2 - bodyPos.left}px`;
    document.querySelector(".task--menu").style.top = `${elementPos.bottom + 2 - bodyPos.top}px`;
}
function showTaskDateSelect(elem) {
    let elementPos = elem.getBoundingClientRect();
    let bodyPos = document.body.getBoundingClientRect();
    document.querySelector(".task--datemenuouter_hidden").classList.add("task--datemenuouter");
    document.querySelector(".task--datemenu").style.left = `${elementPos.left + 2 - bodyPos.left}px`;
    document.querySelector(".task--datemenu").style.top = `${elementPos.bottom + 2 - bodyPos.top}px`;
}
function hideTaskProjectSelect() {
    document.querySelector(".task--menuouter_hidden").classList.remove("task--menuouter");
}
function hideTaskDateSelect(e) {
    let datemenuOuter = document.querySelector(".task--datemenuouter_hidden");
    if (datemenuOuter == e.target)
        document.querySelector(".task--datemenuouter_hidden").classList.remove("task--datemenuouter");
}
function deleteTasksOfProject(projectId) {
    let obj = JSON.parse(localStorage.getItem("todoList"));
    let objP = JSON.parse(localStorage.getItem("preferences"));
    let newTask = obj.task.filter((element, index) => {
        return element.projectId != projectId;
    });
    obj.task = newTask;
    localStorage.setItem("todoList", JSON.stringify(obj));
    populateCurrentTab();
}
function cancelAddTask() {
    document.querySelector(".task--new_hidden").classList.remove("task--new");
    document.querySelector(".task--add_hidden").classList.replace("task--add_hidden", "task--add");
}
function taskProjectSelectedOption(selectedProject) {
    if (selectedProject != null) {
        let objP = JSON.parse(localStorage.getItem("preferences"));
        objP["lastProject"] = selectedProject.dataset.id;
        localStorage.setItem("preferences", JSON.stringify(objP));
    }
    const taskProject = document.querySelector(".task--new #task_project")||document.querySelector(".task_edit #task_project")
    ||document.querySelector(".task--new_hidden #task_project");
    if (taskProject.firstChild) {
        taskProject.removeChild(taskProject.firstChild);
    }
    let clonedProject = selectedProject.cloneNode(true);
    taskProject.appendChild(clonedProject);
}
function taskDateSelectedOption(selectedDate) {
    const taskDate = document.querySelector(".task--new #task--date")
    ||document.querySelector(".task_edit #task--date")
    ||document.querySelector(".task--new_hidden #task--date");
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
function mainListTask(tId, tContent, tProject, tColor) {
    const task = document.createElement("div");
    task.className = "task";
    task.dataset.id = tId;

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
    task.appendChild(taskEditBtn());
    createdTaskEvents(task);
    return task;
}
function currentMonth() {
    let selected = document.querySelector(".months--select_current");
    selected.textContent = format(new Date(), "LLL yyyy");
    selected.dataset.date = format(new Date(), "yyyy-MM-dd");
    createCalendar();
}
function nextMonth() {
    let selected = document.querySelector(".months--select_current");
    let nextDate = addMonths(parse(selected.dataset.date, 'yyyy-MM-dd', new Date()), 1);
    selected.textContent = format(nextDate, "LLL yyyy");
    selected.dataset.date = format(nextDate, "yyyy-MM-dd");
    createCalendar();
}
function preMonth() {
    let selected = document.querySelector(".months--select_current");
    let selectedDate = parse(selected.dataset.date, 'yyyy-MM-dd', new Date());
    let preDate = addMonths(selectedDate, -1);
    //compare the year and month
    let dateToCompare = parse(selected.dataset.date.slice(0, 7), 'yyyy-MM', new Date());
    let currentDate = new Date();
    let checkDate = compareAsc(dateToCompare, currentDate);
    if (checkDate != -1) {
        selected.textContent = format(preDate, "LLL yyyy");
        selected.dataset.date = format(preDate, "yyyy-MM-dd");
    }
    createCalendar();
}
function createCalendar() {
    const calendar = document.querySelector(".months--days");
    const selectedMonth = document.querySelector(".months--select_current").dataset.date;
    let checkDate = compareAsc(parse(selectedMonth, 'yyyy-MM-dd', new Date()), new Date());
    let currentMonth;
    if (checkDate == -1) {
        currentMonth = new Date();
    } else {
        currentMonth = parse(selectedMonth.slice(0, 7), 'yyyy-MM', new Date());
    }
    const dateOfDays = document.createElement("div");
    dateOfDays.className = "months--days";
    let daysArray = [[], [], [], [], [], []];
    let daysOfMonth = eachDayOfInterval({
        start: currentMonth,
        end: lastDayOfMonth(currentMonth)
    });
    for (let day of daysOfMonth) {
        daysArray[getWeekOfMonth(day) - 1][getDay(day)] = day;
    }
    for (let i = 0; i < daysArray.length; i++) {
        const eachWeek = document.createElement("div");
        eachWeek.className = `months--days_week`;
        for (let k = 0; daysArray[i].length != 0 && k < daysArray[i].length; k++) {
            const eachDay = document.createElement("div");
            if (daysArray[i][k] === undefined) {
                eachDay.textContent = "";
            } else {
                eachDay.className = "day";
                eachDay.dataset.date = format(daysArray[i][k], 'dd/MM/yyyy');
                eachDay.textContent = format(daysArray[i][k], "d");
            }
            eachWeek.appendChild(eachDay);
        }
        dateOfDays.appendChild(eachWeek);
    }
    while (calendar.firstChild) {
        calendar.removeChild(calendar.firstChild);
    }
    calendar.appendChild(dateOfDays);
}
function taskCalDateSelected(e) {
    if (e.target.className == "day") {
        const taskDate = document.querySelector(".task--new #task--date")||document.querySelector(".task_edit #task--date");
        if (taskDate.firstChild) {
            taskDate.removeChild(taskDate.firstChild);
        }
        taskDate.appendChild(createDay(e.target.dataset.date));
        document.querySelector(".task--datemenuouter_hidden").classList.remove("task--datemenuouter");
    }
}
function taskResizeTextArea(element) {
    let maxHeight = 200;
    element.style.height = "";
    element.style.height = Math.min(element.scrollHeight, maxHeight) + "px";
}
function markTaskDone(that) {
    let projectTaskId;
    let obj = JSON.parse(localStorage.getItem("todoList"));
    let completedTask = obj.task.filter((element, index) => {
        return element.id == that.parentNode.parentNode.dataset.id;
    });
    let newTask = obj.task.filter((element, index) => {
        return element.id != that.parentNode.parentNode.dataset.id;
    });
    for (let task of obj.task) {
        if (task.id == that.parentNode.parentNode.dataset.id)
            projectTaskId = task.projectId;
    }
    for (let project of obj.project) {
        if (project.id == projectTaskId) {
            project.count--;
        }
    }
    obj.completedTasks.push(completedTask);
    obj.task = newTask;
    localStorage.setItem("todoList", JSON.stringify(obj));
    populateCurrentTab();
    p.populateProjectList();
}
function showPrioSelect(elem){
    let elementPos = elem.getBoundingClientRect();
    let bodyPos = document.body.getBoundingClientRect();
    document.querySelector(".task--outerprio_hidden").classList.add("task--outerprio");
    document.querySelector(".task--prio").style.left = `${elementPos.left + 2 - bodyPos.left}px`;
    document.querySelector(".task--prio").style.top = `${elementPos.bottom + 2 - bodyPos.top}px`;
}
function hideTaskPrioSelect(e){
    let outerPrio = document.querySelector(".task--outerprio_hidden");
    if (outerPrio == e.target)
        document.querySelector(".task--outerprio_hidden").classList.remove("task--outerprio");
}
function selectedPrio(e){
    const taskPrio = document.querySelector(".task--new #task_prio")||document.querySelector(".task_edit #task_prio");
    if (taskPrio.firstChild) {
        taskPrio.removeChild(taskPrio.firstChild);
    }
    if(e.target.className=="select--prio" ){
        taskPrio.appendChild(createPriority(parseInt(e.target.dataset.prio) ));
    }else if(e.target.parentNode.className=="select--prio"){
        taskPrio.appendChild(createPriority(parseInt(e.target.parentNode.dataset.prio)));
    }
    document.querySelector(".task--outerprio_hidden").classList.remove("task--outerprio");
}
function showTaskEditIcon(element) {
    element.querySelector(".task--edit_hidden").classList.add("task--edit");
}
function hideTaskEditIcon(element) {
    //see if menu is open if its not hide icon
    if (document.querySelector(".task--menuouter") === null && element !== null) {
        element.querySelector(".task--edit_hidden").classList.remove("task--edit");
    }
}
function getProjectIdOfTaskId(tId){
    let obj = JSON.parse(localStorage.getItem("todoList"));
    for(let t of obj["task"]){
        if(tId==t.id)
            return t.projectId;
    }
    return null;
}
function getTaskName(tId){
    let obj = JSON.parse(localStorage.getItem("todoList"));
    for(let t of obj["task"]){
        if(tId==t.id)
            return t.name;
    }
    return "";
}
function getTaskDesc(tId){
    let obj = JSON.parse(localStorage.getItem("todoList"));
    for(let t of obj["task"]){
        if(tId==t.id)
            return t.desc;
    }
    return "";
}
function projectOfTask(selectedProject) {
    const taskProject = document.querySelector(".task_edit_hidden #task_project");
    if (taskProject.firstChild) {
        taskProject.removeChild(taskProject.firstChild);
    }
    let clonedProject = selectedProject.cloneNode(true);
    taskProject.appendChild(clonedProject);
}
function prioOfTask(prio){
    const taskPrio = document.querySelector(".task_edit_hidden #task_prio");
    if (taskPrio.firstChild) {
        taskPrio.removeChild(taskPrio.firstChild);
    }
    taskPrio.appendChild(createPriority(parseInt(prio)));
    document.querySelector(".task--outerprio_hidden").classList.remove("task--outerprio");
}
function getTaskPrio(tId){
    let obj = JSON.parse(localStorage.getItem("todoList"));
    for(let t of obj["task"]){
        if(tId==t.id)
            return t.prio;
    }
    return "";
}
function dateOfTask(tDate){
    const taskDate = document.querySelector(".task_edit_hidden #task--date");
    if (taskDate.firstChild) {
        taskDate.removeChild(taskDate.firstChild);
    }
    let todayDate=parse(format(new Date(),'yyyy-MM-dd'),'yyyy-MM-dd',new Date());
    let tomorrowDate=parse(format(addDays(new Date(), 1), 'yyyy-MM-dd'),'yyyy-MM-dd',new Date());
    if(compareAsc(todayDate,parse(tDate,'yyyy-MM-dd',new Date()))==0){
        taskDate.appendChild(createToday());
    }else if(compareAsc(tomorrowDate,parse(tDate,'yyyy-MM-dd',new Date()))==0){
        taskDate.appendChild(createTomorrow());
    }else{
        taskDate.appendChild(createDay(format(parse(tDate,'yyyy-MM-dd',new Date()),'dd/MM/yyyy')));
    }
}
function getTaskDate(tId){
    let obj = JSON.parse(localStorage.getItem("todoList"));
    for(let t of obj["task"]){
        if(tId==t.id)
            return t.date;
    }
    return "";
}
function showEditTask(t){
    let taskId=t.dataset.id;
    const editTaskInterface=document.querySelector(".task_edit_hidden");
    //task name
    editTaskInterface.querySelector("#task_name").value=getTaskName(taskId);
    //task desc
    editTaskInterface.querySelector("#task_desc").value=getTaskDesc(taskId);
    //selected project
    const pOption = document.querySelector(`.task--menu [data-id="${getProjectIdOfTaskId(taskId)}"]`);
    projectOfTask(pOption);
    //selected date
    dateOfTask(getTaskDate(taskId));
    //selected priority
    prioOfTask(getTaskPrio(taskId));
    document.querySelector(".task_edit_hidden").classList.add("task_edit");
    document.querySelector(".task_edit #task--new_submit_add").dataset.id=taskId;
}
function cancelEditTask(){
    document.querySelector(".task_edit_hidden").classList.remove("task_edit");
}
function saveTaskButton(elem) {
    const nameValue = document.querySelector(".task_edit #task_name").value;
    const dateValue = document.querySelector(".task_edit #task--date div").dataset.date;
    const descValue= document.querySelector(".task_edit #task_desc").value;
    const prioValue=document.querySelector(".task_edit #task_prio div").dataset.prio;
    const taskId=elem.dataset.id;
    editTask(taskId,nameValue, dateValue, descValue, prioValue);
    return closeMessageTab(true);
}
function editTask(taskId,nameValue, dateValue, descValue, prioValue) {
    let obj = JSON.parse(localStorage.getItem("todoList"));
    for(let t of obj["task"]){
        if(t.id==taskId){
            t.name=nameValue;
            t.date=dateValue;
            t.desc=descValue;
            t.prio=prioValue;
        }
    }
    localStorage.setItem("todoList", JSON.stringify(obj));
    //populate correspondent task list 
    populateCurrentTab();
    //close edit tab
    document.querySelector(".task_edit_hidden").classList.remove("task_edit");
}
function createdTaskEvents(t) {
    let taskDone = function () {
        setTimeout(() => {
            markTaskDone(this);
        }, 370);     
    }
    t.querySelector(".task--inputouter input").addEventListener("change", taskDone);
    let showIconEvent = function () {
        showTaskEditIcon(t);
    }
    let hideIconEvent = function () {
        hideTaskEditIcon(t);
    }
    t.addEventListener("mouseenter", showIconEvent);

    t.addEventListener("mouseleave", hideIconEvent);
    let showEditTevent = function () {
        //edit task
        showEditTask(t);
    }
    t.querySelector(".task--edit_hidden").addEventListener("click", showEditTevent);
}
export { saveTaskButton,cancelEditTask,selectedPrio,hideTaskPrioSelect,showPrioSelect,showProjectDates, populateCurrentTab, closeMessageTab, addTaskButton, mainListTask, taskProjectSelectedOption, showUpcomingTasks, currentMonth, taskResizeTextArea, taskCalDateSelected, preMonth, nextMonth, showTasksInDate, taskDateSelectedOption, hideTaskDateSelect, showTaskDateSelect, hideTaskProjectSelect, showTaskProjectSelect, deleteTasksOfProject, showAddTask, addTask, cancelAddTask };

