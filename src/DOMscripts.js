import * as p from "./project";
import * as t from "./task";
import {format, addDays, eachDayOfInterval,lastDayOfMonth, addMonths,getWeekOfMonth, getDay} from 'date-fns';
function header() {
    const div = document.createElement("div");
    div.id = "header";
    div.textContent = "Todo List";
    return div;
}
function sidebar() {
    let preferences = Object.values(JSON.parse(localStorage.getItem("preferences"))["sidebar"]);
    const sidebar = document.createElement("div");
    sidebar.id = "sidebar";

    const sidebarGroup = document.createElement("div");
    sidebarGroup.id = "sidebar--group";
    sidebar.appendChild(sidebarGroup);
    sidebarGroup.appendChild(sidebarHeader("My List"));
    sidebarGroup.appendChild(sidebarHeader("Today"));
    sidebarGroup.appendChild(sidebarHeader("Tomorrow"));
    sidebarGroup.appendChild(sidebarHeader("Upcoming"));

    const sidebarHeadProject = sidebarHeader("Projects");
    const sidebarHeadBtn = document.createElement("div");
    sidebarHeadBtn.className = "sidebar--header_btn";

    const sidebarHeadBtnIcon = document.createElement("span");
    if (preferences[0]) {
        sidebarHeadBtnIcon.className = "sidebar--header_btn_icon_down";
    }
    else {
        sidebarHeadBtnIcon.className = "sidebar--header_btn_icon_up";
    }
    sidebarHeadBtn.appendChild(sidebarHeadBtnIcon);
    sidebarHeadProject.appendChild(sidebarHeadBtn);
    sidebarGroup.appendChild(sidebarHeadProject);

    const sidebarList = document.createElement("div");
    if (preferences[0]) {
        sidebarList.id = "sidebar--list";
    }
    else {
        sidebarList.id = "sidebar--list_hidden";
    }
    sidebarGroup.appendChild(sidebarList);

    const projectAdd = document.createElement("div");
    projectAdd.className = "project--add";
    sidebarList.appendChild(projectAdd);

    const projectAddBtn = document.createElement("div");
    projectAddBtn.className = "project--add_btn";
    projectAdd.appendChild(projectAddBtn);

    const projectAddBtnIcon = document.createElement("span");
    projectAddBtnIcon.className = "project--add_btn_icon";
    projectAddBtn.appendChild(projectAddBtnIcon);

    const projectAddName = document.createElement("div");
    projectAddName.className = "project--add_name";
    projectAddName.textContent = "Add Project";
    projectAdd.appendChild(projectAddName);
    return sidebar;
}
function sidebarHeader(tContent) {
    const div = document.createElement("div");
    div.className = "sidebar--header";
    const divChild = document.createElement("div");
    divChild.className = `sidebar--header_${tContent.toLowerCase()}`;
    divChild.textContent = tContent;
    div.appendChild(divChild);
    return div;
}
function sidebarProject(tId, tContent, tColor, tCount) {
    const project = document.createElement("div");
    project.id = tId;
    project.className = "project";
    const projectName = document.createElement("div");
    projectName.className = "project--name";
    projectName.textContent = tContent;
    projectName.style.color = tColor;
    project.appendChild(projectName);
    const projectCount = document.createElement("div");
    projectCount.className = "project--count";
    projectCount.textContent = tCount;
    project.appendChild(projectCount);
    project.appendChild(projectEditBtn());
    return project;
}
function main() {
    let obj = JSON.parse(localStorage.getItem("preferences"));
    const main = document.createElement("div");
    main.id = "main";

    main.appendChild(mainGroup(obj["sidebar"]["day"]));

    return main;
}
function mainGroup(option){
    const mainGroup = document.createElement("div");
    mainGroup.id = "main--group";

    const mainHeader = document.createElement("div");
    mainHeader.className = "main--header";
    const mainHeaderTitle = document.createElement("div");
    mainHeaderTitle.className = "main--header_title";
    mainHeaderTitle.textContent = option;
    mainHeader.appendChild(mainHeaderTitle);
    mainGroup.appendChild(mainHeader);

    const mainList = document.createElement("div");
    mainList.id = "main--list";
    mainGroup.appendChild(mainList);

    const taskAdd = document.createElement("div");
    taskAdd.className = "task--add";
    mainList.appendChild(taskAdd);

    const taskAddBtn = document.createElement("div");
    taskAddBtn.className = "task--add_btn";
    taskAdd.appendChild(taskAddBtn);

    const taskAddBtnIcon = document.createElement("span");
    taskAddBtnIcon.className = "task--add_btn_icon";
    taskAddBtn.appendChild(taskAddBtnIcon);

    const taskAddName = document.createElement("div");
    taskAddName.className = "task--add_name";
    taskAddName.textContent = "Add Task";
    taskAdd.appendChild(taskAddName);

    mainList.append(addTask());
    return mainGroup;
}
function mainListTask(tContent, tProject, tColor) {
    const task = document.createElement("div");
    task.className = "task";

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
    return task;
}
function footer() {
    const div = document.createElement("div");
    div.id = "footer";
    div.textContent = "Copyright © 2022 Reda";
    return div;
}
function addProject() {
    const newProject = document.createElement("div");
    newProject.id = "newproject_hidden";
    const newProjectTitle = document.createElement("div");
    newProjectTitle.id = "newproject--title";
    newProjectTitle.textContent = "Add Project";
    newProject.appendChild(newProjectTitle);

    const newProjectForm = document.createElement("div");
    newProjectForm.id = "newproject--form";
    newProject.appendChild(newProjectForm);

    const newProjectFormName = document.createElement("div");
    newProjectFormName.id = "newproject--form_name";
    newProjectForm.appendChild(newProjectFormName);
    const newProjectFormColor = document.createElement("div");
    newProjectFormColor.id = "newproject--form_color";
    newProjectForm.appendChild(newProjectFormColor);

    const projectNameLabel = document.createElement("label");
    Object.assign(projectNameLabel, {
        for: "project_name",
        textContent: "Name"
    });
    newProjectFormName.appendChild(projectNameLabel);

    const projectNameInput = document.createElement("input");
    Object.assign(projectNameInput, {
        type: "text",
        name: "project_name",
        id: "project_name"
    });
    newProjectFormName.appendChild(projectNameInput);

    const projectColorLabel = document.createElement("label");
    Object.assign(projectColorLabel, {
        for: "project_color",
        textContent: "Color"
    });
    newProjectFormColor.appendChild(projectColorLabel);

    const projectColorInput = document.createElement("input");
    Object.assign(projectColorInput, {
        type: "color",
        name: "project_color",
        id: "project_color"
    });
    newProjectFormColor.appendChild(projectColorInput);

    const newProjectFormSubmit = document.createElement("div");
    newProjectFormSubmit.id = "newproject--form_submit";
    newProjectForm.appendChild(newProjectFormSubmit);

    const newProjectFormSubmitAdd = document.createElement("div");
    newProjectFormSubmitAdd.id = "newproject--form_submit_add";
    newProjectFormSubmitAdd.textContent = "Add";
    newProjectFormSubmit.appendChild(newProjectFormSubmitAdd);
    const newProjectFormSubmitCancel = document.createElement("div");
    newProjectFormSubmitCancel.id = "newproject--form_submit_cancel";
    newProjectFormSubmitCancel.textContent = "Cancel";
    newProjectFormSubmit.appendChild(newProjectFormSubmitCancel);
    return newProject;
}
function projectEditBtn() {
    const projectEdit = document.createElement("div");
    projectEdit.className = "project--edit_hidden";

    const projectEditIcon = document.createElement("span");
    projectEditIcon.className = "project--edit_icon";
    projectEdit.appendChild(projectEditIcon);
    return projectEdit;
}
function projectEditMenu() {
    const editMenuOuter = document.createElement("div");
    editMenuOuter.className = "project--menuouter_hidden";

    const editMenu = document.createElement("div");
    editMenu.className = "project--menu";
    editMenuOuter.appendChild(editMenu);
    const editMenuDelete = document.createElement("div");
    editMenuDelete.className = "project--menu_delete";
    editMenuDelete.textContent = "Delete project";
    editMenu.appendChild(editMenuDelete);

    return editMenuOuter;
}
function addTask() {
    const taskNew = document.createElement("div");
    taskNew.id = "task--new_hidden";

    const taskNewInputs = document.createElement("div");
    taskNewInputs.id = "task--new_inputs";
    taskNew.appendChild(taskNewInputs);

    const taskNameInput = document.createElement("div");
    taskNameInput.id="task_name";
    taskNameInput.contentEditable=true;
    taskNewInputs.appendChild(taskNameInput);

    const taskSelectInput = document.createElement("div");
    taskSelectInput.id = "task_project";
    taskNewInputs.appendChild(taskSelectInput);

    const taskDateInput = document.createElement("div");
    taskDateInput.id = "task--date";
    taskNewInputs.appendChild(taskDateInput);

    const taskNewSubmit = document.createElement("div");
    taskNewSubmit.id = "task--new_submit";
    taskNew.appendChild(taskNewSubmit);

    const taskNewSubmitAdd = document.createElement("div");
    taskNewSubmitAdd.id = "task--new_submit_add";
    taskNewSubmitAdd.textContent = "Add Task";
    taskNewSubmit.appendChild(taskNewSubmitAdd);

    const taskNewSubmitCancel = document.createElement("div");
    taskNewSubmitCancel.id = "task--new_submit_cancel";
    taskNewSubmitCancel.textContent = "Cancel";
    taskNewSubmit.appendChild(taskNewSubmitCancel);

    return taskNew;
}
function taskProjectSelect() {
    const editMenuOuter = document.createElement("div");
    editMenuOuter.className = "task--menuouter_hidden";

    const editMenu = document.createElement("div");
    editMenu.className = "task--menu";
    editMenuOuter.appendChild(editMenu);

    return editMenuOuter;
}
function taskDateSelect() {
    let todayDate=getTodayDate();
    const editDateMenu = document.createElement("div");
    editDateMenu.className = "task--datemenuouter_hidden";

    const editMenu = document.createElement("div");
    editMenu.className = "task--datemenu";
    editDateMenu.appendChild(editMenu);

    const today = document.createElement("div");
    today.className = "datemenu--today";
    today.textContent = "Today";
    today.dataset.date= format(todayDate, 'yyyy-MM-dd');
    editMenu.appendChild(today);

    const tomorrow = document.createElement("div");
    tomorrow.className = "datemenu--tomorrow";
    tomorrow.textContent = "Tomorrow";
    let tomDate=addDays(todayDate,1);
    tomorrow.dataset.date= format(tomDate, 'yyyy-MM-dd');
    editMenu.appendChild(tomorrow);
    //calendar
    //calendar select month
    const monthsSelect=document.createElement("div");
    monthsSelect.className = "months--select";
    editMenu.appendChild(monthsSelect);

    const monthsSelectLeft=document.createElement("div");
    monthsSelectLeft.className = "months--select_left";
    monthsSelect.appendChild(monthsSelectLeft);

    const monthsSelectCurrent=document.createElement("div");
    monthsSelectCurrent.className = "months--select_current";
    monthsSelectCurrent.dataset.date=format(new Date(), 'yyyy-MM-dd');
    monthsSelectCurrent.textContent=format(new Date(), "LLL yyyy");
    monthsSelect.appendChild(monthsSelectCurrent);

    const monthsSelectRight=document.createElement("div");
    monthsSelectRight.className = "months--select_right";
    monthsSelect.appendChild(monthsSelectRight);
    //calendar days header
    const monthDaysHeader=document.createElement("div");
    monthDaysHeader.className = "months--days_header";
    editMenu.appendChild(monthDaysHeader);
    let nameOfDaysArray=["Su","Mo","Tu","We","Th","Fr","Sa"];
    for(let day of nameOfDaysArray){
        const dayOfweek=document.createElement("div");
        dayOfweek.textContent=day;
        monthDaysHeader.appendChild(dayOfweek);
    }
    //calendar days
    //every array has all dates of a single week
    const dateOfDays=document.createElement("div");
    dateOfDays.className="months--days";
    editMenu.appendChild(dateOfDays);
    let daysArray=[[],[],[],[],[],[]];
    let daysOfMonth=eachDayOfInterval({
        start: new Date(),
        end: lastDayOfMonth(new Date())
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
    return editDateMenu;
}
function getTodayDate(){
    return new Date();
}
function createStorage() {
    let check = localStorage.getItem("todoList");
    if (check === null) {
        let todoList = { project: [], task: [] };
        let preferences = { sidebar: { listState: true, day: "Today" } };
        localStorage.setItem("todoList", JSON.stringify(todoList));
        localStorage.setItem("preferences", JSON.stringify(preferences));
    }
}
function buildSite() {
    const content = document.createElement("div");
    content.id = "content";
    createStorage();
    let objP = JSON.parse(localStorage.getItem("preferences"));
    content.append(header(), sidebar(), main(), footer(), addProject(), projectEditMenu(), taskProjectSelect(), taskDateSelect());
    document.body.appendChild(content);
    p.populateProjectList();
    t.populateTaskListOfDate(objP["sidebar"]["day"]);
    t.populateProjectSelect();
}

export { mainGroup, buildSite, mainListTask, sidebarProject, projectEditBtn };