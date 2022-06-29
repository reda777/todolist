import * as p from "./project";
import * as t from "./task";
import { format, addDays, eachDayOfInterval, lastDayOfMonth, parse, getWeekOfMonth, getDay } from 'date-fns';
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
    div.classList.add("sidebar--header");
    if (tContent == "Projects")
        div.classList.add(tContent.toLowerCase());
    const divChild = document.createElement("div");
    divChild.className = `sidebar--header_${tContent.toLowerCase()}`;
    div.appendChild(divChild);
    const spanChild = document.createElement("span");
    spanChild.className = `sidebar--header_${tContent.toLowerCase()}_icon`;
    divChild.appendChild(spanChild);
    const spanChildT = document.createElement("span");
    spanChildT.className = `sidebar--header_${tContent.toLowerCase()}_text`;
    spanChildT.textContent = tContent;
    divChild.appendChild(spanChildT);
    return div;
}
function sidebarProject(tId, tContent, tColor, tCount) {
    const project = document.createElement("div");
    project.id = tId;
    project.className = "project";
    const projectName = document.createElement("div");
    projectName.className = "project--name";
    projectName.style.color = tColor;
    project.appendChild(projectName);
    const projectNameSpan = document.createElement("span");
    projectNameSpan.textContent = tContent;
    projectName.appendChild(projectNameSpan);
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

    main.appendChild(mainGroup(obj["sidebar"]["tab"]));

    return main;
}
function mainGroup(option) {
    let obj = JSON.parse(localStorage.getItem("todoList"));
    let headerText;
    for (let i = 0; i < obj.project.length; i++) {
        if (option == obj.project[i].id) {
            headerText = obj.project[i].name;
        }
    }
    //if option value is not an id just show the string
    if (headerText == null) {
        headerText = option;
    }
    const mainGroup = document.createElement("div");
    mainGroup.id = "main--group";

    const mainHeader = document.createElement("div");
    mainHeader.className = "main--header";
    const mainHeaderTitle = document.createElement("div");
    mainHeaderTitle.className = "main--header_title";
    mainHeaderTitle.textContent = headerText;
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
function footer() {
    const div = document.createElement("div");
    div.id = "footer";
    div.textContent = "Copyright © 2022 Reda";
    return div;
}
function addProject() {
    const colorsArray = ["#13c7e7", "#6484c6", "#1014cb", "#d24157", "#ff0000"
        , "#4fc972", "#cc552c", "#d4459a", "#b7b434", "#69a537"
        , "#a556c6", "#35845a", "#986e34", "#8E05C2", "#5e2dbb"];
    const newProject = document.createElement("div");
    newProject.id = "newproject_hidden";
    const projectInterface = document.createElement("div");
    projectInterface.id = "project--interface";
    newProject.appendChild(projectInterface);
    const newProjectTitle = document.createElement("div");
    newProjectTitle.id = "newproject--title";
    newProjectTitle.textContent = "Add Project";
    projectInterface.appendChild(newProjectTitle);

    const newProjectForm = document.createElement("div");
    newProjectForm.id = "newproject--form";
    projectInterface.appendChild(newProjectForm);

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

    const projectColorList = document.createElement("div");
    projectColorList.className = "project--color_list";
    newProjectFormColor.appendChild(projectColorList);

    for (let i = 0; i < colorsArray.length; i++) {
        const listColor = document.createElement("div");
        const listColorCheck = document.createElement("span");
        listColorCheck.className = "list--color_check";
        listColor.appendChild(listColorCheck);
        listColor.style.backgroundColor = colorsArray[i];
        listColor.dataset.bgColor = colorsArray[i];
        listColor.className = "list--color";
        projectColorList.appendChild(listColor);
    }

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
function editProject() {
    const colorsArray = ["#13c7e7", "#6484c6", "#1014cb", "#d24157", "#a50d10", "#4fc972", "#cc552c",
        "#d4459a", "#b7b434", "#69a537", "#a556c6", "#35845a", "#986e34", "#582c7d", "#5e2dbb"];
    const editProject = document.createElement("div");
    editProject.id = "editproject_hidden";
    const projectInterface = document.createElement("div");
    projectInterface.id = "project--interface";
    editProject.appendChild(projectInterface);
    const newProjectTitle = document.createElement("div");
    newProjectTitle.id = "editproject--title";
    newProjectTitle.textContent = "Edit Project";
    projectInterface.appendChild(newProjectTitle);

    const newProjectForm = document.createElement("div");
    newProjectForm.id = "editproject--form";
    projectInterface.appendChild(newProjectForm);

    const newProjectFormName = document.createElement("div");
    newProjectFormName.id = "editproject--form_name";
    newProjectForm.appendChild(newProjectFormName);
    const newProjectFormColor = document.createElement("div");
    newProjectFormColor.id = "editproject--form_color";
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

    const projectColorList = document.createElement("div");
    projectColorList.className = "editproject--color_list";
    newProjectFormColor.appendChild(projectColorList);

    for (let i = 0; i < colorsArray.length; i++) {
        const listColor = document.createElement("div");
        const listColorCheck = document.createElement("span");
        listColorCheck.className = "list--color_check";
        listColor.appendChild(listColorCheck);
        listColor.style.backgroundColor = colorsArray[i];
        listColor.dataset.bgColor = colorsArray[i];
        listColor.className = "list--color";
        projectColorList.appendChild(listColor);
    }

    const newProjectFormSubmit = document.createElement("div");
    newProjectFormSubmit.id = "editproject--form_submit";
    newProjectForm.appendChild(newProjectFormSubmit);

    const newProjectFormSubmitAdd = document.createElement("div");
    newProjectFormSubmitAdd.id = "editproject--form_submit_save";
    newProjectFormSubmitAdd.textContent = "Save";
    newProjectFormSubmit.appendChild(newProjectFormSubmitAdd);
    const newProjectFormSubmitCancel = document.createElement("div");
    newProjectFormSubmitCancel.id = "editproject--form_submit_cancel";
    newProjectFormSubmitCancel.textContent = "Cancel";
    newProjectFormSubmit.appendChild(newProjectFormSubmitCancel);
    return editProject;
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

    const editMenuEdit = document.createElement("div");
    const editMenuEditText = document.createElement("div");
    const editMenuEditIcon = document.createElement("div");
    editMenuEditIcon.className = "project--menu_edit_icon";
    editMenuEdit.appendChild(editMenuEditIcon);
    editMenuEditText.className = "project--menu_edit_text";
    editMenuEditText.textContent = "Edit project";
    editMenuEdit.appendChild(editMenuEditText);
    editMenuEdit.className = "project--menu_edit";
    editMenu.appendChild(editMenuEdit);

    const editMenuDelete = document.createElement("div");
    const editMenuDeleteText = document.createElement("div");
    const editMenuDeleteIcon = document.createElement("div");
    editMenuDeleteIcon.className = "project--menu_delete_icon";
    editMenuDelete.appendChild(editMenuDeleteIcon);
    editMenuDeleteText.className = "project--menu_delete_text";
    editMenuDeleteText.textContent = "Delete project";
    editMenuDelete.appendChild(editMenuDeleteText);
    editMenuDelete.className = "project--menu_delete";
    editMenu.appendChild(editMenuDelete);

    return editMenuOuter;
}
function addTask() {
    const taskNew = document.createElement("div");
    taskNew.id = "task--new_hidden";

    const taskNewInputs = document.createElement("div");
    taskNewInputs.id = "task--new_inputs";
    taskNew.appendChild(taskNewInputs);

    const taskNameInput = document.createElement("textarea");
    taskNameInput.id = "task_name";
    taskNameInput.placeholder = "Task Name...";
    taskNameInput.rows = 1;
    taskNewInputs.appendChild(taskNameInput);

    const taskDescInput = document.createElement("textarea");
    taskDescInput.id = "task_desc";
    taskDescInput.placeholder = "Task Description...";
    taskDescInput.rows = 3;
    taskNewInputs.appendChild(taskDescInput);


    const taskSelectAndDate = document.createElement("div");
    taskSelectAndDate.id = "task--select--date";
    taskNew.appendChild(taskSelectAndDate);

    const taskSelectInput = document.createElement("div");
    taskSelectInput.id = "task_project";
    taskSelectAndDate.appendChild(taskSelectInput);

    const taskDateInput = document.createElement("div");
    taskDateInput.id = "task--date";
    taskSelectAndDate.appendChild(taskDateInput);

    let obj = JSON.parse(localStorage.getItem("preferences"));
    if (obj["sidebar"]["tab"] == "Tomorrow") {
        taskDateInput.appendChild(createTomorrow());
    } else {
        taskDateInput.appendChild(createToday());
    }
    const taskPrio = document.createElement("div");
    taskPrio.id = "task_prio";
    taskSelectAndDate.appendChild(taskPrio);
    taskPrio.appendChild(createPriority(3));

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
function createPriority(prioValue){
    const prio = document.createElement("div");
    prio.className = "select--prio";
    prio.dataset.prio=prioValue;
    
    const prioIcon = document.createElement("span");
    prioIcon.className = "select--prio_icon";
    prio.appendChild(prioIcon);

    switch (prioValue) {
        case 0:
            prio.style.color="red";
            prioIcon.style.background="red";
            break;
        case 1:
            prio.style.color="orange";
            prioIcon.style.background="orange";
            break;
        case 2:
            prio.style.color="yellow";
            prioIcon.style.background="yellow";
            break;
        default:
            console.log("wrong prio value.");
            break;
    }

    const prioText = document.createElement("span");
    prioText.className = "select--prio_text";
    prioText.textContent = `Priority ${prioValue}`;
    prio.appendChild(prioText);
    return prio;
}
function createToday() {
    const today = document.createElement("div");
    today.className = "datemenu--today";
    today.dataset.date = format(getTodayDate(), 'yyyy-MM-dd');

    const todayIcon = document.createElement("span");
    todayIcon.className = "datemenu--today_icon";
    today.appendChild(todayIcon);

    const todayText = document.createElement("span");
    todayText.className = "datemenu--today_text";
    todayText.textContent = "Today";
    today.appendChild(todayText);
    return today;
}
function createTomorrow() {
    const tomorrow = document.createElement("div");
    tomorrow.className = "datemenu--tomorrow";
    tomorrow.dataset.date = format(addDays(getTodayDate(), 1), 'yyyy-MM-dd');

    const tomorrowIcon = document.createElement("span");
    tomorrowIcon.className = "datemenu--tomorrow_icon";
    tomorrow.appendChild(tomorrowIcon);

    const tomorrowText = document.createElement("span");
    tomorrowText.className = "datemenu--tomorrow_text";
    tomorrowText.textContent = "Tomorrow";
    tomorrow.appendChild(tomorrowText);
    return tomorrow;
}
function createDay(e) {
    const day = document.createElement("div");
    day.className = "picked--date";
    day.dataset.date = `${format(parse(e.target.dataset.date, 'dd/MM/yyyy', new Date()), "yyyy-MM-dd")}`;

    const dayIcon = document.createElement("span");
    dayIcon.className = "picked--date_icon";
    day.appendChild(dayIcon);

    const dayText = document.createElement("span");
    dayText.className = "picked--date_text";
    dayText.textContent = `${format(parse(e.target.dataset.date, 'dd/MM/yyyy', new Date()), "dd LLL")}`;
    day.appendChild(dayText);
    return day;
}
function taskPrioSelect(){
    const editPrioMenu = document.createElement("div");
    editPrioMenu.className = "task--outerprio_hidden";

    const editMenu = document.createElement("div");
    editMenu.className = "task--prio";
    editPrioMenu.appendChild(editMenu);

    editMenu.appendChild(createPriority(0));
    editMenu.appendChild(createPriority(1));
    editMenu.appendChild(createPriority(2));
    editMenu.appendChild(createPriority(3));
    return editPrioMenu;
}
function taskDateSelect() {
    const editDateMenu = document.createElement("div");
    editDateMenu.className = "task--datemenuouter_hidden";

    const editMenu = document.createElement("div");
    editMenu.className = "task--datemenu";
    editDateMenu.appendChild(editMenu);

    editMenu.appendChild(createToday());
    editMenu.appendChild(createTomorrow());

    //calendar
    //calendar select month
    const monthsSelect = document.createElement("div");
    monthsSelect.className = "months--select";
    editMenu.appendChild(monthsSelect);

    const monthsSelectLeft = document.createElement("div");
    monthsSelectLeft.className = "months--select_left";
    monthsSelect.appendChild(monthsSelectLeft);

    const monthsSelectCurrent = document.createElement("div");
    monthsSelectCurrent.className = "months--select_current";
    monthsSelectCurrent.dataset.date = format(new Date(), 'yyyy-MM-dd');
    monthsSelectCurrent.textContent = format(new Date(), "LLL yyyy");
    monthsSelect.appendChild(monthsSelectCurrent);

    const monthsSelectRight = document.createElement("div");
    monthsSelectRight.className = "months--select_right";
    monthsSelect.appendChild(monthsSelectRight);
    //calendar days header
    const monthDaysHeader = document.createElement("div");
    monthDaysHeader.className = "months--days_header";
    editMenu.appendChild(monthDaysHeader);
    let nameOfDaysArray = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    for (let day of nameOfDaysArray) {
        const dayOfweek = document.createElement("div");
        dayOfweek.textContent = day;
        monthDaysHeader.appendChild(dayOfweek);
    }
    //calendar days
    //every array has all dates of a single week
    const dateOfDays = document.createElement("div");
    dateOfDays.className = "months--days";
    editMenu.appendChild(dateOfDays);
    let daysArray = [[], [], [], [], [], []];
    let daysOfMonth = eachDayOfInterval({
        start: new Date(),
        end: lastDayOfMonth(new Date())
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
    return editDateMenu;
}
function getTodayDate() {
    return new Date();
}
function floatingMessage() {
    const message = document.createElement("div");
    message.className = "message--container_hidden";

    const messageText = document.createElement("div");
    messageText.className = "message--text";
    message.appendChild(messageText);

    const messageDest = document.createElement("div");
    messageDest.className = "message--dest";
    message.appendChild(messageDest);

    const messageClose = document.createElement("div");
    messageClose.className = "message--close";
    message.appendChild(messageClose);

    const messageCloseIcon = document.createElement("span");
    messageCloseIcon.className = "message--close_icon";
    messageClose.appendChild(messageCloseIcon);
    return message;
}
function createStorage() {
    let check = localStorage.getItem("todoList");
    if (check === null) {
        let todoList = { project: [{ id: "id1", name: "default", color: "#d3d3d3", count: 0 }], task: [], completedTasks: [] };
        let preferences = { sidebar: { listState: true, tab: "Today" }, lastProject: "id1" };
        localStorage.setItem("todoList", JSON.stringify(todoList));
        localStorage.setItem("preferences", JSON.stringify(preferences));
    }
}
function buildSite() {
    const content = document.createElement("div");
    content.id = "content";
    createStorage();
    let objP = JSON.parse(localStorage.getItem("preferences"));
    content.append(header(), sidebar(), main(), footer(), addProject(), editProject(), projectEditMenu(), taskProjectSelect(), taskDateSelect(), floatingMessage(), taskPrioSelect());
    document.body.appendChild(content);
    p.populateProjectList();
    t.populateCurrentTab();
    p.populateProjectSelect();
}
export { createPriority,createDay, createToday, createTomorrow, mainGroup, buildSite, sidebarProject, projectEditBtn };