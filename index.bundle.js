/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/DOMscripts.js":
/*!***************************!*\
  !*** ./src/DOMscripts.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildSite": () => (/* binding */ buildSite),
/* harmony export */   "mainListTask": () => (/* binding */ mainListTask),
/* harmony export */   "projectEditBtn": () => (/* binding */ projectEditBtn),
/* harmony export */   "sidebarProject": () => (/* binding */ sidebarProject)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");


function header() {
    const div = document.createElement("div");
    div.id = "header";
    div.textContent = "Todo List";
    return div;
}
function sidebar() {
    let preferences=Object.values(JSON.parse(localStorage.getItem("preferences"))["sidebar"]);
    const sidebar = document.createElement("div");
    sidebar.id = "sidebar";

    const sidebarGroup = document.createElement("div");
    sidebarGroup.id = "sidebar--group";
    sidebar.appendChild(sidebarGroup);
    sidebarGroup.appendChild(sidebarHeader("My List"));
    sidebarGroup.appendChild(sidebarHeader("Today"));
    sidebarGroup.appendChild(sidebarHeader("Next 7 Days"));

    const sidebarHeadProject = sidebarHeader("Projects");
    const sidebarHeadBtn = document.createElement("div");
    sidebarHeadBtn.className = "sidebar--header_btn";

    const sidebarHeadBtnIcon = document.createElement("span");
    if(preferences[0]){
        sidebarHeadBtnIcon.className = "sidebar--header_btn_icon_down";
    }
    else{
        sidebarHeadBtnIcon.className = "sidebar--header_btn_icon_up";
    }
    sidebarHeadBtn.appendChild(sidebarHeadBtnIcon);
    sidebarHeadProject.appendChild(sidebarHeadBtn);
    sidebarGroup.appendChild(sidebarHeadProject);

    const sidebarList = document.createElement("div");
    if(preferences[0]){
        sidebarList.id = "sidebar--list";
    }
    else{
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
    divChild.className = "sidebar--header_title";
    divChild.textContent = tContent;
    div.appendChild(divChild);
    return div;
}
function sidebarProject(tId,tContent,tColor,tCount) {
    const project = document.createElement("div");
    project.id = tId;
    project.className = "project";
    const projectName = document.createElement("div");
    projectName.className = "project--name";
    projectName.textContent = tContent;
    projectName.style.color= tColor;
    project.appendChild(projectName);
    const projectCount = document.createElement("div");
    projectCount.className = "project--count";
    projectCount.textContent = tCount;
    project.appendChild(projectCount);
    project.appendChild(projectEditBtn());
    return project;
}
function main() {
    const main = document.createElement("div");
    main.id = "main";

    const mainGroup = document.createElement("div");
    mainGroup.id = "main--group";
    main.appendChild(mainGroup);

    const mainHeader = document.createElement("div");
    mainHeader.className = "main--header";
    const mainHeaderTitle = document.createElement("div");
    mainHeaderTitle.className = "main--header_title";
    mainHeaderTitle.textContent = "Today";
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
    return main;
}
function mainListTask(tContent,tProject,tColor) {
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
    taskName_project.style.color= tColor;
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
function projectEditBtn(){
    const projectEdit=document.createElement("div");
    projectEdit.className="project--edit_hidden";
    
    const projectEditIcon=document.createElement("span");
    projectEditIcon.className="project--edit_icon";
    projectEdit.appendChild(projectEditIcon);
    return projectEdit;
}
function projectEditMenu(){
    const editMenuOuter=document.createElement("div");
    editMenuOuter.className="project--menuouter_hidden";
    
    const editMenu=document.createElement("div");
    editMenu.className="project--menu";
    editMenuOuter.appendChild(editMenu);
    const editMenuDelete=document.createElement("div");
    editMenuDelete.className="project--menu_delete";
    editMenuDelete.textContent="Delete project";
    editMenu.appendChild(editMenuDelete);

    return editMenuOuter;
}
function addTask(){
    const taskNew=document.createElement("div");
    taskNew.id="task--new_hidden";
    
    const taskNewInputs=document.createElement("div");
    taskNewInputs.id="task--new_inputs";
    taskNew.appendChild(taskNewInputs);

    const taskNameInput = document.createElement("input");
    Object.assign(taskNameInput, {
        type: "text",
        name: "task_name",
        id: "task_name"
    });
    taskNewInputs.appendChild(taskNameInput);

    const taskSelectInput = document.createElement("div");
    taskSelectInput.id="task_project";
    taskNewInputs.appendChild(taskSelectInput);
    
    const taskNewSubmit=document.createElement("div");
    taskNewSubmit.id="task--new_submit";
    taskNew.appendChild(taskNewSubmit);

    const taskNewSubmitAdd=document.createElement("div");
    taskNewSubmitAdd.id="task--new_submit_add";
    taskNewSubmitAdd.textContent="Add Task";
    taskNewSubmit.appendChild(taskNewSubmitAdd);

    const taskNewSubmitCancel=document.createElement("div");
    taskNewSubmitCancel.id="task--new_submit_cancel";
    taskNewSubmitCancel.textContent="Cancel";
    taskNewSubmit.appendChild(taskNewSubmitCancel);

    return taskNew;
}
function taskProjectSelect(){
    const editMenuOuter=document.createElement("div");
    editMenuOuter.className="task--menuouter_hidden";
    
    const editMenu=document.createElement("div");
    editMenu.className="task--menu";
    editMenuOuter.appendChild(editMenu);

    return editMenuOuter;
}
function createStorage() {
    let check = localStorage.getItem("todoList");
    if (check === null) {
        let todoList = { project: [], task: [] };
        let preferences = {sidebar: {listStat:true}};
        localStorage.setItem("todoList", JSON.stringify(todoList));
        localStorage.setItem("preferences", JSON.stringify(preferences));
    }
}
function buildSite() {
    const content = document.createElement("div");
    content.id = "content";
    createStorage();
    content.append(header(), sidebar(), main(), footer(), addProject(),projectEditMenu(),taskProjectSelect());
    document.body.appendChild(content);
    _project__WEBPACK_IMPORTED_MODULE_0__.populateProjectList();
    _task__WEBPACK_IMPORTED_MODULE_1__.populateTaskList();
    _task__WEBPACK_IMPORTED_MODULE_1__.populateProjectSelect();
}



/***/ }),

/***/ "./src/eventsScripts.js":
/*!******************************!*\
  !*** ./src/eventsScripts.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createEvents": () => (/* binding */ createEvents),
/* harmony export */   "createdProjectEvents": () => (/* binding */ createdProjectEvents),
/* harmony export */   "createdTaskListEvents": () => (/* binding */ createdTaskListEvents)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _DOMscripts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMscripts */ "./src/DOMscripts.js");



function createdProjectEvents(project){
    project.addEventListener("mouseenter",() => {
        _project__WEBPACK_IMPORTED_MODULE_0__.showProjectEditIcon(project);
    });
    project.addEventListener("mouseleave",() => {
        _project__WEBPACK_IMPORTED_MODULE_0__.hideProjectEditIcon(project);
    });
    const icon=project.querySelector(".project--edit_icon");
    icon.addEventListener("click",() => {
        _project__WEBPACK_IMPORTED_MODULE_0__.showProjectEditMenu(icon);
    });
}
function createdTaskListEvents(project){
    project.addEventListener("click",()=>{
        const taskProject=document.querySelector("#task_project");
        if(taskProject.firstChild){
            taskProject.removeChild(taskProject.firstChild);
        }
        const child=document.createElement("div");
        child.className=project.className;
        taskProject.appendChild(child);
        child.textContent=`${project.textContent}`;
    });
}
function createEvents() {
    //add a project events
    document.querySelector(".project--add").addEventListener("click", () => {
        _project__WEBPACK_IMPORTED_MODULE_0__.showAddProject();
    });
    document.querySelector("#newproject--form_submit_add").addEventListener("click", () => {
        _project__WEBPACK_IMPORTED_MODULE_0__.addProject(document.querySelector("#newproject--form_name input").value,
                            document.querySelector("#newproject--form_color input").value);
    });
    document.querySelector("#newproject--form_submit_cancel").addEventListener("click", () => {
        _project__WEBPACK_IMPORTED_MODULE_0__.cancelAddProject();
    });

    //project ui
    document.querySelector(".sidebar--header_btn").addEventListener("click", () => {
        _project__WEBPACK_IMPORTED_MODULE_0__.toggleProjectList();
    });
    //delete project 
    document.querySelector(".project--menu_delete").addEventListener("click",()=>{
        _project__WEBPACK_IMPORTED_MODULE_0__.deleteProject();
    });
    //project menu
    document.querySelector(".project--menuouter_hidden").addEventListener("click",()=>{
        document.querySelectorAll(".project").forEach(element => {
             _project__WEBPACK_IMPORTED_MODULE_0__.hideProjectEditIcon(element);
        });
        _project__WEBPACK_IMPORTED_MODULE_0__.hideProjectEditMenu();
    });
    //add task events
    document.querySelector(".task--add").addEventListener("click", _task__WEBPACK_IMPORTED_MODULE_1__.showAddTask );
    document.querySelector("#task--new_submit_cancel").addEventListener("click", _task__WEBPACK_IMPORTED_MODULE_1__.cancelAddTask);
    document.querySelector("#task--new_submit_add").addEventListener("click", () => {
        _task__WEBPACK_IMPORTED_MODULE_1__.addTask(document.querySelector("#task_name").value,document.querySelector("#task_project div").className);
    });
    document.querySelector("#task_project").addEventListener("click",_task__WEBPACK_IMPORTED_MODULE_1__.showTaskProjectSelect);
    document.querySelector(".task--menuouter_hidden").addEventListener("click",()=>{
        document.querySelector(".task--menuouter_hidden").classList.remove("task--menuouter");
    });
}


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "cancelAddProject": () => (/* binding */ cancelAddProject),
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject),
/* harmony export */   "hideProjectEditIcon": () => (/* binding */ hideProjectEditIcon),
/* harmony export */   "hideProjectEditMenu": () => (/* binding */ hideProjectEditMenu),
/* harmony export */   "populateProjectList": () => (/* binding */ populateProjectList),
/* harmony export */   "project": () => (/* binding */ project),
/* harmony export */   "showAddProject": () => (/* binding */ showAddProject),
/* harmony export */   "showProjectEditIcon": () => (/* binding */ showProjectEditIcon),
/* harmony export */   "showProjectEditMenu": () => (/* binding */ showProjectEditMenu),
/* harmony export */   "toggleProjectList": () => (/* binding */ toggleProjectList)
/* harmony export */ });
/* harmony import */ var _DOMscripts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMscripts.js */ "./src/DOMscripts.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _eventsScripts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventsScripts.js */ "./src/eventsScripts.js");



const project=(name,color)=>{
    let id=Date.now().toString(36) + Math.random().toString(36).slice(2);
    let count=0;
    return {
        id,
        name,
        color,
        count,
    }
}
function showAddProject() {
    document.querySelector("#newproject_hidden").id = "newproject";
}
function addProject(nameValue,colorValue) {
    let currentProject=project(nameValue,colorValue);
    let obj=JSON.parse(localStorage.getItem("todoList"));
    obj.project.push(currentProject);
    localStorage.setItem("todoList",JSON.stringify(obj));
    populateProjectList();
    document.querySelector("#newproject").id = "newproject_hidden";
    _task__WEBPACK_IMPORTED_MODULE_1__.populateProjectSelect();
}
function populateProjectList(){
    let projectList=document.querySelectorAll("#sidebar--list .project");
    //delete old list
    projectList.forEach(element => {
        element.parentNode.removeChild(element);
    });
    //add new list
    let obj=JSON.parse(localStorage.getItem("todoList"));
    for(let i=0;i<obj.project.length;i++){
        let idValue=obj.project[i].id;
        let nameValue=obj.project[i].name;
        let colorValue=obj.project[i].color;
        let countValue=obj.project[i].count;
        const project=(0,_DOMscripts_js__WEBPACK_IMPORTED_MODULE_0__.sidebarProject)(idValue,nameValue,colorValue,countValue);
        document.querySelector(".project--add").before(project);
        (0,_eventsScripts_js__WEBPACK_IMPORTED_MODULE_2__.createdProjectEvents)(project);
    }
}
function cancelAddProject() {
    document.querySelector("#newproject").id = "newproject_hidden";
}
function showProjectEditMenu(element){
    let elementPos=element.getBoundingClientRect();
    let bodyPos=document.body.getBoundingClientRect();
    document.querySelector(".project--menuouter_hidden").classList.add("project--menuouter");
    document.querySelector(".project--menu_delete").dataset.id=`${element.parentNode.parentNode.id}`;
    document.querySelector(".project--menu").style.left=`${elementPos.left+2-bodyPos.left}px`;
    document.querySelector(".project--menu").style.top=`${elementPos.bottom+2-bodyPos.top}px`;
}
function hideProjectEditMenu(){
    document.querySelector(".project--menuouter_hidden").classList.remove("project--menuouter");
    document.querySelector(".project--menu_delete").removeAttribute("data-id");
}

function showProjectEditIcon(element){
    element.querySelector(".project--edit_hidden").classList.add("project--edit");
}
function hideProjectEditIcon(element){
    element.querySelector(".project--edit_hidden").classList.remove("project--edit");
}
function deleteProject(){
    let id=document.querySelector(".project--menu_delete").dataset.id;
    let obj=JSON.parse(localStorage.getItem("todoList"));
    let newProject=obj.project.filter((element, index)=>{
        return element.id!=id;
    });
    obj.project=newProject;
    localStorage.setItem("todoList",JSON.stringify(obj));
    _task__WEBPACK_IMPORTED_MODULE_1__.deleteTasks(id);
    populateProjectList();
    _task__WEBPACK_IMPORTED_MODULE_1__.populateProjectSelect();
}
function toggleProjectList() {
    const selectOne = document.querySelector("#sidebar--list");
    const selectTwo = document.querySelector("#sidebar--list_hidden");
    let obj=JSON.parse(localStorage.getItem("preferences"));
    if (selectOne) {
        obj.sidebar={listState:false};
        selectOne.id = "sidebar--list_hidden";
        document.querySelector(".sidebar--header_btn_icon_down").classList.replace("sidebar--header_btn_icon_down", "sidebar--header_btn_icon_up");
    } else if (selectTwo) {
        obj.sidebar={listState:true};
        selectTwo.id = "sidebar--list";
        document.querySelector(".sidebar--header_btn_icon_up").classList.replace("sidebar--header_btn_icon_up", "sidebar--header_btn_icon_down");
    }
    localStorage.setItem("preferences",JSON.stringify(obj));
}



/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "cancelAddTask": () => (/* binding */ cancelAddTask),
/* harmony export */   "deleteTasks": () => (/* binding */ deleteTasks),
/* harmony export */   "populateProjectSelect": () => (/* binding */ populateProjectSelect),
/* harmony export */   "populateTaskList": () => (/* binding */ populateTaskList),
/* harmony export */   "showAddTask": () => (/* binding */ showAddTask),
/* harmony export */   "showTaskProjectSelect": () => (/* binding */ showTaskProjectSelect)
/* harmony export */ });
/* harmony import */ var _DOMscripts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMscripts.js */ "./src/DOMscripts.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _eventsScripts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventsScripts.js */ "./src/eventsScripts.js");



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
                ?.before((0,_DOMscripts_js__WEBPACK_IMPORTED_MODULE_0__.mainListTask)(nameValue, projectNameValue, projectColorValue))) || 
                (document.querySelector(".task--add_hidden")
                ?.before((0,_DOMscripts_js__WEBPACK_IMPORTED_MODULE_0__.mainListTask)(nameValue, projectNameValue, projectColorValue)));
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
        (0,_eventsScripts_js__WEBPACK_IMPORTED_MODULE_2__.createdTaskListEvents)(pOption);
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




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _DOMscripts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMscripts */ "./src/DOMscripts.js");
/* harmony import */ var _eventsScripts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventsScripts */ "./src/eventsScripts.js");



(0,_DOMscripts__WEBPACK_IMPORTED_MODULE_1__.buildSite)();
(0,_eventsScripts__WEBPACK_IMPORTED_MODULE_2__.createEvents)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQStCO0FBQ0g7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7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Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05xQjtBQUNvQjtBQUNNO0FBQy9DLHNEQUFTO0FBQ1QsNERBQVksRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9ET01zY3JpcHRzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2V2ZW50c1NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0ICogYXMgcCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgKiBhcyB0IGZyb20gXCIuL3Rhc2tcIjtcbmZ1bmN0aW9uIGhlYWRlcigpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5pZCA9IFwiaGVhZGVyXCI7XG4gICAgZGl2LnRleHRDb250ZW50ID0gXCJUb2RvIExpc3RcIjtcbiAgICByZXR1cm4gZGl2O1xufVxuZnVuY3Rpb24gc2lkZWJhcigpIHtcbiAgICBsZXQgcHJlZmVyZW5jZXM9T2JqZWN0LnZhbHVlcyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJlZmVyZW5jZXNcIikpW1wic2lkZWJhclwiXSk7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2lkZWJhci5pZCA9IFwic2lkZWJhclwiO1xuXG4gICAgY29uc3Qgc2lkZWJhckdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzaWRlYmFyR3JvdXAuaWQgPSBcInNpZGViYXItLWdyb3VwXCI7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlYmFyR3JvdXApO1xuICAgIHNpZGViYXJHcm91cC5hcHBlbmRDaGlsZChzaWRlYmFySGVhZGVyKFwiTXkgTGlzdFwiKSk7XG4gICAgc2lkZWJhckdyb3VwLmFwcGVuZENoaWxkKHNpZGViYXJIZWFkZXIoXCJUb2RheVwiKSk7XG4gICAgc2lkZWJhckdyb3VwLmFwcGVuZENoaWxkKHNpZGViYXJIZWFkZXIoXCJOZXh0IDcgRGF5c1wiKSk7XG5cbiAgICBjb25zdCBzaWRlYmFySGVhZFByb2plY3QgPSBzaWRlYmFySGVhZGVyKFwiUHJvamVjdHNcIik7XG4gICAgY29uc3Qgc2lkZWJhckhlYWRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNpZGViYXJIZWFkQnRuLmNsYXNzTmFtZSA9IFwic2lkZWJhci0taGVhZGVyX2J0blwiO1xuXG4gICAgY29uc3Qgc2lkZWJhckhlYWRCdG5JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgaWYocHJlZmVyZW5jZXNbMF0pe1xuICAgICAgICBzaWRlYmFySGVhZEJ0bkljb24uY2xhc3NOYW1lID0gXCJzaWRlYmFyLS1oZWFkZXJfYnRuX2ljb25fZG93blwiO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBzaWRlYmFySGVhZEJ0bkljb24uY2xhc3NOYW1lID0gXCJzaWRlYmFyLS1oZWFkZXJfYnRuX2ljb25fdXBcIjtcbiAgICB9XG4gICAgc2lkZWJhckhlYWRCdG4uYXBwZW5kQ2hpbGQoc2lkZWJhckhlYWRCdG5JY29uKTtcbiAgICBzaWRlYmFySGVhZFByb2plY3QuYXBwZW5kQ2hpbGQoc2lkZWJhckhlYWRCdG4pO1xuICAgIHNpZGViYXJHcm91cC5hcHBlbmRDaGlsZChzaWRlYmFySGVhZFByb2plY3QpO1xuXG4gICAgY29uc3Qgc2lkZWJhckxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGlmKHByZWZlcmVuY2VzWzBdKXtcbiAgICAgICAgc2lkZWJhckxpc3QuaWQgPSBcInNpZGViYXItLWxpc3RcIjtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgc2lkZWJhckxpc3QuaWQgPSBcInNpZGViYXItLWxpc3RfaGlkZGVuXCI7XG4gICAgfVxuICAgIHNpZGViYXJHcm91cC5hcHBlbmRDaGlsZChzaWRlYmFyTGlzdCk7XG5cbiAgICBjb25zdCBwcm9qZWN0QWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0QWRkLmNsYXNzTmFtZSA9IFwicHJvamVjdC0tYWRkXCI7XG4gICAgc2lkZWJhckxpc3QuYXBwZW5kQ2hpbGQocHJvamVjdEFkZCk7XG5cbiAgICBjb25zdCBwcm9qZWN0QWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0QWRkQnRuLmNsYXNzTmFtZSA9IFwicHJvamVjdC0tYWRkX2J0blwiO1xuICAgIHByb2plY3RBZGQuYXBwZW5kQ2hpbGQocHJvamVjdEFkZEJ0bik7XG5cbiAgICBjb25zdCBwcm9qZWN0QWRkQnRuSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHByb2plY3RBZGRCdG5JY29uLmNsYXNzTmFtZSA9IFwicHJvamVjdC0tYWRkX2J0bl9pY29uXCI7XG4gICAgcHJvamVjdEFkZEJ0bi5hcHBlbmRDaGlsZChwcm9qZWN0QWRkQnRuSWNvbik7XG5cbiAgICBjb25zdCBwcm9qZWN0QWRkTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdEFkZE5hbWUuY2xhc3NOYW1lID0gXCJwcm9qZWN0LS1hZGRfbmFtZVwiO1xuICAgIHByb2plY3RBZGROYW1lLnRleHRDb250ZW50ID0gXCJBZGQgUHJvamVjdFwiO1xuICAgIHByb2plY3RBZGQuYXBwZW5kQ2hpbGQocHJvamVjdEFkZE5hbWUpO1xuICAgIHJldHVybiBzaWRlYmFyO1xufVxuZnVuY3Rpb24gc2lkZWJhckhlYWRlcih0Q29udGVudCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2LmNsYXNzTmFtZSA9IFwic2lkZWJhci0taGVhZGVyXCI7XG4gICAgY29uc3QgZGl2Q2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdkNoaWxkLmNsYXNzTmFtZSA9IFwic2lkZWJhci0taGVhZGVyX3RpdGxlXCI7XG4gICAgZGl2Q2hpbGQudGV4dENvbnRlbnQgPSB0Q29udGVudDtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZGl2Q2hpbGQpO1xuICAgIHJldHVybiBkaXY7XG59XG5mdW5jdGlvbiBzaWRlYmFyUHJvamVjdCh0SWQsdENvbnRlbnQsdENvbG9yLHRDb3VudCkge1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3QuaWQgPSB0SWQ7XG4gICAgcHJvamVjdC5jbGFzc05hbWUgPSBcInByb2plY3RcIjtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdE5hbWUuY2xhc3NOYW1lID0gXCJwcm9qZWN0LS1uYW1lXCI7XG4gICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSB0Q29udGVudDtcbiAgICBwcm9qZWN0TmFtZS5zdHlsZS5jb2xvcj0gdENvbG9yO1xuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuICAgIGNvbnN0IHByb2plY3RDb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdENvdW50LmNsYXNzTmFtZSA9IFwicHJvamVjdC0tY291bnRcIjtcbiAgICBwcm9qZWN0Q291bnQudGV4dENvbnRlbnQgPSB0Q291bnQ7XG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0Q291bnQpO1xuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdEVkaXRCdG4oKSk7XG4gICAgcmV0dXJuIHByb2plY3Q7XG59XG5mdW5jdGlvbiBtYWluKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW4uaWQgPSBcIm1haW5cIjtcblxuICAgIGNvbnN0IG1haW5Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbkdyb3VwLmlkID0gXCJtYWluLS1ncm91cFwiO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQobWFpbkdyb3VwKTtcblxuICAgIGNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5IZWFkZXIuY2xhc3NOYW1lID0gXCJtYWluLS1oZWFkZXJcIjtcbiAgICBjb25zdCBtYWluSGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5IZWFkZXJUaXRsZS5jbGFzc05hbWUgPSBcIm1haW4tLWhlYWRlcl90aXRsZVwiO1xuICAgIG1haW5IZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcbiAgICBtYWluSGVhZGVyLmFwcGVuZENoaWxkKG1haW5IZWFkZXJUaXRsZSk7XG4gICAgbWFpbkdyb3VwLmFwcGVuZENoaWxkKG1haW5IZWFkZXIpO1xuXG4gICAgY29uc3QgbWFpbkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5MaXN0LmlkID0gXCJtYWluLS1saXN0XCI7XG4gICAgbWFpbkdyb3VwLmFwcGVuZENoaWxkKG1haW5MaXN0KTtcblxuICAgIGNvbnN0IHRhc2tBZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tBZGQuY2xhc3NOYW1lID0gXCJ0YXNrLS1hZGRcIjtcbiAgICBtYWluTGlzdC5hcHBlbmRDaGlsZCh0YXNrQWRkKTtcblxuICAgIGNvbnN0IHRhc2tBZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tBZGRCdG4uY2xhc3NOYW1lID0gXCJ0YXNrLS1hZGRfYnRuXCI7XG4gICAgdGFza0FkZC5hcHBlbmRDaGlsZCh0YXNrQWRkQnRuKTtcblxuICAgIGNvbnN0IHRhc2tBZGRCdG5JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgdGFza0FkZEJ0bkljb24uY2xhc3NOYW1lID0gXCJ0YXNrLS1hZGRfYnRuX2ljb25cIjtcbiAgICB0YXNrQWRkQnRuLmFwcGVuZENoaWxkKHRhc2tBZGRCdG5JY29uKTtcblxuICAgIGNvbnN0IHRhc2tBZGROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrQWRkTmFtZS5jbGFzc05hbWUgPSBcInRhc2stLWFkZF9uYW1lXCI7XG4gICAgdGFza0FkZE5hbWUudGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrXCI7XG4gICAgdGFza0FkZC5hcHBlbmRDaGlsZCh0YXNrQWRkTmFtZSk7XG5cbiAgICBtYWluTGlzdC5hcHBlbmQoYWRkVGFzaygpKTtcbiAgICByZXR1cm4gbWFpbjtcbn1cbmZ1bmN0aW9uIG1haW5MaXN0VGFzayh0Q29udGVudCx0UHJvamVjdCx0Q29sb3IpIHtcbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrLmNsYXNzTmFtZSA9IFwidGFza1wiO1xuXG4gICAgY29uc3QgdGFza0lucHV0T3V0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tJbnB1dE91dGVyLmNsYXNzTmFtZSA9IFwidGFzay0taW5wdXRvdXRlclwiO1xuICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza0lucHV0T3V0ZXIpO1xuXG4gICAgY29uc3QgdGFza0NoZWNrYm94SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgT2JqZWN0LmFzc2lnbih0YXNrQ2hlY2tib3hJbnB1dCwge1xuICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgIG5hbWU6IFwidGFza19zdGF0ZVwiLFxuICAgICAgICBpZDogXCJ0YXNrX3N0YXRlXCJcbiAgICB9KTtcbiAgICB0YXNrSW5wdXRPdXRlci5hcHBlbmRDaGlsZCh0YXNrQ2hlY2tib3hJbnB1dCk7XG5cbiAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza05hbWUuY2xhc3NOYW1lID0gXCJ0YXNrLS1uYW1lXCI7XG4gICAgdGFza05hbWUudGV4dENvbnRlbnQgPSB0Q29udGVudDtcbiAgICB0YXNrLmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcblxuICAgIGNvbnN0IHRhc2tOYW1lX3Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tOYW1lX3Byb2plY3QuY2xhc3NOYW1lID0gXCJ0YXNrLS1uYW1lX3Byb2plY3RcIjtcbiAgICB0YXNrTmFtZV9wcm9qZWN0LnRleHRDb250ZW50ID0gdFByb2plY3Q7XG4gICAgdGFza05hbWVfcHJvamVjdC5zdHlsZS5jb2xvcj0gdENvbG9yO1xuICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza05hbWVfcHJvamVjdCk7XG4gICAgcmV0dXJuIHRhc2s7XG59XG5mdW5jdGlvbiBmb290ZXIoKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuaWQgPSBcImZvb3RlclwiO1xuICAgIGRpdi50ZXh0Q29udGVudCA9IFwiQ29weXJpZ2h0IMKpIDIwMjIgUmVkYVwiO1xuICAgIHJldHVybiBkaXY7XG59XG5mdW5jdGlvbiBhZGRQcm9qZWN0KCkge1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1Byb2plY3QuaWQgPSBcIm5ld3Byb2plY3RfaGlkZGVuXCI7XG4gICAgY29uc3QgbmV3UHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdQcm9qZWN0VGl0bGUuaWQgPSBcIm5ld3Byb2plY3QtLXRpdGxlXCI7XG4gICAgbmV3UHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gXCJBZGQgUHJvamVjdFwiO1xuICAgIG5ld1Byb2plY3QuYXBwZW5kQ2hpbGQobmV3UHJvamVjdFRpdGxlKTtcblxuICAgIGNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdQcm9qZWN0Rm9ybS5pZCA9IFwibmV3cHJvamVjdC0tZm9ybVwiO1xuICAgIG5ld1Byb2plY3QuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEZvcm0pO1xuXG4gICAgY29uc3QgbmV3UHJvamVjdEZvcm1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdQcm9qZWN0Rm9ybU5hbWUuaWQgPSBcIm5ld3Byb2plY3QtLWZvcm1fbmFtZVwiO1xuICAgIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKG5ld1Byb2plY3RGb3JtTmFtZSk7XG4gICAgY29uc3QgbmV3UHJvamVjdEZvcm1Db2xvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3UHJvamVjdEZvcm1Db2xvci5pZCA9IFwibmV3cHJvamVjdC0tZm9ybV9jb2xvclwiO1xuICAgIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKG5ld1Byb2plY3RGb3JtQ29sb3IpO1xuXG4gICAgY29uc3QgcHJvamVjdE5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBPYmplY3QuYXNzaWduKHByb2plY3ROYW1lTGFiZWwsIHtcbiAgICAgICAgZm9yOiBcInByb2plY3RfbmFtZVwiLFxuICAgICAgICB0ZXh0Q29udGVudDogXCJOYW1lXCJcbiAgICB9KTtcbiAgICBuZXdQcm9qZWN0Rm9ybU5hbWUuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVMYWJlbCk7XG5cbiAgICBjb25zdCBwcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIE9iamVjdC5hc3NpZ24ocHJvamVjdE5hbWVJbnB1dCwge1xuICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgbmFtZTogXCJwcm9qZWN0X25hbWVcIixcbiAgICAgICAgaWQ6IFwicHJvamVjdF9uYW1lXCJcbiAgICB9KTtcbiAgICBuZXdQcm9qZWN0Rm9ybU5hbWUuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVJbnB1dCk7XG5cbiAgICBjb25zdCBwcm9qZWN0Q29sb3JMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBPYmplY3QuYXNzaWduKHByb2plY3RDb2xvckxhYmVsLCB7XG4gICAgICAgIGZvcjogXCJwcm9qZWN0X2NvbG9yXCIsXG4gICAgICAgIHRleHRDb250ZW50OiBcIkNvbG9yXCJcbiAgICB9KTtcbiAgICBuZXdQcm9qZWN0Rm9ybUNvbG9yLmFwcGVuZENoaWxkKHByb2plY3RDb2xvckxhYmVsKTtcblxuICAgIGNvbnN0IHByb2plY3RDb2xvcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIE9iamVjdC5hc3NpZ24ocHJvamVjdENvbG9ySW5wdXQsIHtcbiAgICAgICAgdHlwZTogXCJjb2xvclwiLFxuICAgICAgICBuYW1lOiBcInByb2plY3RfY29sb3JcIixcbiAgICAgICAgaWQ6IFwicHJvamVjdF9jb2xvclwiXG4gICAgfSk7XG4gICAgbmV3UHJvamVjdEZvcm1Db2xvci5hcHBlbmRDaGlsZChwcm9qZWN0Q29sb3JJbnB1dCk7XG5cbiAgICBjb25zdCBuZXdQcm9qZWN0Rm9ybVN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3UHJvamVjdEZvcm1TdWJtaXQuaWQgPSBcIm5ld3Byb2plY3QtLWZvcm1fc3VibWl0XCI7XG4gICAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQobmV3UHJvamVjdEZvcm1TdWJtaXQpO1xuXG4gICAgY29uc3QgbmV3UHJvamVjdEZvcm1TdWJtaXRBZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1Byb2plY3RGb3JtU3VibWl0QWRkLmlkID0gXCJuZXdwcm9qZWN0LS1mb3JtX3N1Ym1pdF9hZGRcIjtcbiAgICBuZXdQcm9qZWN0Rm9ybVN1Ym1pdEFkZC50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG4gICAgbmV3UHJvamVjdEZvcm1TdWJtaXQuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEZvcm1TdWJtaXRBZGQpO1xuICAgIGNvbnN0IG5ld1Byb2plY3RGb3JtU3VibWl0Q2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdQcm9qZWN0Rm9ybVN1Ym1pdENhbmNlbC5pZCA9IFwibmV3cHJvamVjdC0tZm9ybV9zdWJtaXRfY2FuY2VsXCI7XG4gICAgbmV3UHJvamVjdEZvcm1TdWJtaXRDYW5jZWwudGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAgIG5ld1Byb2plY3RGb3JtU3VibWl0LmFwcGVuZENoaWxkKG5ld1Byb2plY3RGb3JtU3VibWl0Q2FuY2VsKTtcbiAgICByZXR1cm4gbmV3UHJvamVjdDtcbn1cbmZ1bmN0aW9uIHByb2plY3RFZGl0QnRuKCl7XG4gICAgY29uc3QgcHJvamVjdEVkaXQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0RWRpdC5jbGFzc05hbWU9XCJwcm9qZWN0LS1lZGl0X2hpZGRlblwiO1xuICAgIFxuICAgIGNvbnN0IHByb2plY3RFZGl0SWNvbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBwcm9qZWN0RWRpdEljb24uY2xhc3NOYW1lPVwicHJvamVjdC0tZWRpdF9pY29uXCI7XG4gICAgcHJvamVjdEVkaXQuYXBwZW5kQ2hpbGQocHJvamVjdEVkaXRJY29uKTtcbiAgICByZXR1cm4gcHJvamVjdEVkaXQ7XG59XG5mdW5jdGlvbiBwcm9qZWN0RWRpdE1lbnUoKXtcbiAgICBjb25zdCBlZGl0TWVudU91dGVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZWRpdE1lbnVPdXRlci5jbGFzc05hbWU9XCJwcm9qZWN0LS1tZW51b3V0ZXJfaGlkZGVuXCI7XG4gICAgXG4gICAgY29uc3QgZWRpdE1lbnU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBlZGl0TWVudS5jbGFzc05hbWU9XCJwcm9qZWN0LS1tZW51XCI7XG4gICAgZWRpdE1lbnVPdXRlci5hcHBlbmRDaGlsZChlZGl0TWVudSk7XG4gICAgY29uc3QgZWRpdE1lbnVEZWxldGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBlZGl0TWVudURlbGV0ZS5jbGFzc05hbWU9XCJwcm9qZWN0LS1tZW51X2RlbGV0ZVwiO1xuICAgIGVkaXRNZW51RGVsZXRlLnRleHRDb250ZW50PVwiRGVsZXRlIHByb2plY3RcIjtcbiAgICBlZGl0TWVudS5hcHBlbmRDaGlsZChlZGl0TWVudURlbGV0ZSk7XG5cbiAgICByZXR1cm4gZWRpdE1lbnVPdXRlcjtcbn1cbmZ1bmN0aW9uIGFkZFRhc2soKXtcbiAgICBjb25zdCB0YXNrTmV3PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza05ldy5pZD1cInRhc2stLW5ld19oaWRkZW5cIjtcbiAgICBcbiAgICBjb25zdCB0YXNrTmV3SW5wdXRzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza05ld0lucHV0cy5pZD1cInRhc2stLW5ld19pbnB1dHNcIjtcbiAgICB0YXNrTmV3LmFwcGVuZENoaWxkKHRhc2tOZXdJbnB1dHMpO1xuXG4gICAgY29uc3QgdGFza05hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBPYmplY3QuYXNzaWduKHRhc2tOYW1lSW5wdXQsIHtcbiAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgIG5hbWU6IFwidGFza19uYW1lXCIsXG4gICAgICAgIGlkOiBcInRhc2tfbmFtZVwiXG4gICAgfSk7XG4gICAgdGFza05ld0lucHV0cy5hcHBlbmRDaGlsZCh0YXNrTmFtZUlucHV0KTtcblxuICAgIGNvbnN0IHRhc2tTZWxlY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza1NlbGVjdElucHV0LmlkPVwidGFza19wcm9qZWN0XCI7XG4gICAgdGFza05ld0lucHV0cy5hcHBlbmRDaGlsZCh0YXNrU2VsZWN0SW5wdXQpO1xuICAgIFxuICAgIGNvbnN0IHRhc2tOZXdTdWJtaXQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrTmV3U3VibWl0LmlkPVwidGFzay0tbmV3X3N1Ym1pdFwiO1xuICAgIHRhc2tOZXcuYXBwZW5kQ2hpbGQodGFza05ld1N1Ym1pdCk7XG5cbiAgICBjb25zdCB0YXNrTmV3U3VibWl0QWRkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza05ld1N1Ym1pdEFkZC5pZD1cInRhc2stLW5ld19zdWJtaXRfYWRkXCI7XG4gICAgdGFza05ld1N1Ym1pdEFkZC50ZXh0Q29udGVudD1cIkFkZCBUYXNrXCI7XG4gICAgdGFza05ld1N1Ym1pdC5hcHBlbmRDaGlsZCh0YXNrTmV3U3VibWl0QWRkKTtcblxuICAgIGNvbnN0IHRhc2tOZXdTdWJtaXRDYW5jZWw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrTmV3U3VibWl0Q2FuY2VsLmlkPVwidGFzay0tbmV3X3N1Ym1pdF9jYW5jZWxcIjtcbiAgICB0YXNrTmV3U3VibWl0Q2FuY2VsLnRleHRDb250ZW50PVwiQ2FuY2VsXCI7XG4gICAgdGFza05ld1N1Ym1pdC5hcHBlbmRDaGlsZCh0YXNrTmV3U3VibWl0Q2FuY2VsKTtcblxuICAgIHJldHVybiB0YXNrTmV3O1xufVxuZnVuY3Rpb24gdGFza1Byb2plY3RTZWxlY3QoKXtcbiAgICBjb25zdCBlZGl0TWVudU91dGVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZWRpdE1lbnVPdXRlci5jbGFzc05hbWU9XCJ0YXNrLS1tZW51b3V0ZXJfaGlkZGVuXCI7XG4gICAgXG4gICAgY29uc3QgZWRpdE1lbnU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBlZGl0TWVudS5jbGFzc05hbWU9XCJ0YXNrLS1tZW51XCI7XG4gICAgZWRpdE1lbnVPdXRlci5hcHBlbmRDaGlsZChlZGl0TWVudSk7XG5cbiAgICByZXR1cm4gZWRpdE1lbnVPdXRlcjtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVN0b3JhZ2UoKSB7XG4gICAgbGV0IGNoZWNrID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2RvTGlzdFwiKTtcbiAgICBpZiAoY2hlY2sgPT09IG51bGwpIHtcbiAgICAgICAgbGV0IHRvZG9MaXN0ID0geyBwcm9qZWN0OiBbXSwgdGFzazogW10gfTtcbiAgICAgICAgbGV0IHByZWZlcmVuY2VzID0ge3NpZGViYXI6IHtsaXN0U3RhdDp0cnVlfX07XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb0xpc3RcIiwgSlNPTi5zdHJpbmdpZnkodG9kb0xpc3QpKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcmVmZXJlbmNlc1wiLCBKU09OLnN0cmluZ2lmeShwcmVmZXJlbmNlcykpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGJ1aWxkU2l0ZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250ZW50LmlkID0gXCJjb250ZW50XCI7XG4gICAgY3JlYXRlU3RvcmFnZSgpO1xuICAgIGNvbnRlbnQuYXBwZW5kKGhlYWRlcigpLCBzaWRlYmFyKCksIG1haW4oKSwgZm9vdGVyKCksIGFkZFByb2plY3QoKSxwcm9qZWN0RWRpdE1lbnUoKSx0YXNrUHJvamVjdFNlbGVjdCgpKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIHAucG9wdWxhdGVQcm9qZWN0TGlzdCgpO1xuICAgIHQucG9wdWxhdGVUYXNrTGlzdCgpO1xuICAgIHQucG9wdWxhdGVQcm9qZWN0U2VsZWN0KCk7XG59XG5cbmV4cG9ydCB7IGJ1aWxkU2l0ZSwgbWFpbkxpc3RUYXNrLCBzaWRlYmFyUHJvamVjdCwgcHJvamVjdEVkaXRCdG4gfTsiLCJpbXBvcnQgKiBhcyBwIGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCAqIGFzIHQgZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0ICogYXMgZG9tIGZyb20gXCIuL0RPTXNjcmlwdHNcIjtcbmZ1bmN0aW9uIGNyZWF0ZWRQcm9qZWN0RXZlbnRzKHByb2plY3Qpe1xuICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwoKSA9PiB7XG4gICAgICAgIHAuc2hvd1Byb2plY3RFZGl0SWNvbihwcm9qZWN0KTtcbiAgICB9KTtcbiAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsKCkgPT4ge1xuICAgICAgICBwLmhpZGVQcm9qZWN0RWRpdEljb24ocHJvamVjdCk7XG4gICAgfSk7XG4gICAgY29uc3QgaWNvbj1wcm9qZWN0LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC0tZWRpdF9pY29uXCIpO1xuICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCkgPT4ge1xuICAgICAgICBwLnNob3dQcm9qZWN0RWRpdE1lbnUoaWNvbik7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBjcmVhdGVkVGFza0xpc3RFdmVudHMocHJvamVjdCl7XG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xuICAgICAgICBjb25zdCB0YXNrUHJvamVjdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tfcHJvamVjdFwiKTtcbiAgICAgICAgaWYodGFza1Byb2plY3QuZmlyc3RDaGlsZCl7XG4gICAgICAgICAgICB0YXNrUHJvamVjdC5yZW1vdmVDaGlsZCh0YXNrUHJvamVjdC5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjaGlsZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjaGlsZC5jbGFzc05hbWU9cHJvamVjdC5jbGFzc05hbWU7XG4gICAgICAgIHRhc2tQcm9qZWN0LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgICAgY2hpbGQudGV4dENvbnRlbnQ9YCR7cHJvamVjdC50ZXh0Q29udGVudH1gO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gY3JlYXRlRXZlbnRzKCkge1xuICAgIC8vYWRkIGEgcHJvamVjdCBldmVudHNcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtLWFkZFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBwLnNob3dBZGRQcm9qZWN0KCk7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXdwcm9qZWN0LS1mb3JtX3N1Ym1pdF9hZGRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcC5hZGRQcm9qZWN0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3cHJvamVjdC0tZm9ybV9uYW1lIGlucHV0XCIpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3cHJvamVjdC0tZm9ybV9jb2xvciBpbnB1dFwiKS52YWx1ZSk7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXdwcm9qZWN0LS1mb3JtX3N1Ym1pdF9jYW5jZWxcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcC5jYW5jZWxBZGRQcm9qZWN0KCk7XG4gICAgfSk7XG5cbiAgICAvL3Byb2plY3QgdWlcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXItLWhlYWRlcl9idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcC50b2dnbGVQcm9qZWN0TGlzdCgpO1xuICAgIH0pO1xuICAgIC8vZGVsZXRlIHByb2plY3QgXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LS1tZW51X2RlbGV0ZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xuICAgICAgICBwLmRlbGV0ZVByb2plY3QoKTtcbiAgICB9KTtcbiAgICAvL3Byb2plY3QgbWVudVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC0tbWVudW91dGVyX2hpZGRlblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RcIikuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICBwLmhpZGVQcm9qZWN0RWRpdEljb24oZWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICBwLmhpZGVQcm9qZWN0RWRpdE1lbnUoKTtcbiAgICB9KTtcbiAgICAvL2FkZCB0YXNrIGV2ZW50c1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay0tYWRkXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0LnNob3dBZGRUYXNrICk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLS1uZXdfc3VibWl0X2NhbmNlbFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdC5jYW5jZWxBZGRUYXNrKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stLW5ld19zdWJtaXRfYWRkXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHQuYWRkVGFzayhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tfbmFtZVwiKS52YWx1ZSxkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tfcHJvamVjdCBkaXZcIikuY2xhc3NOYW1lKTtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tfcHJvamVjdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIix0LnNob3dUYXNrUHJvamVjdFNlbGVjdCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLS1tZW51b3V0ZXJfaGlkZGVuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay0tbWVudW91dGVyX2hpZGRlblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwidGFzay0tbWVudW91dGVyXCIpO1xuICAgIH0pO1xufVxuZXhwb3J0IHtjcmVhdGVkVGFza0xpc3RFdmVudHMsY3JlYXRlRXZlbnRzLGNyZWF0ZWRQcm9qZWN0RXZlbnRzfTsiLCJpbXBvcnQgeyBzaWRlYmFyUHJvamVjdCB9IGZyb20gXCIuL0RPTXNjcmlwdHMuanNcIjtcbmltcG9ydCAqIGFzIHQgZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0IHsgY3JlYXRlZFByb2plY3RFdmVudHMgfSBmcm9tIFwiLi9ldmVudHNTY3JpcHRzLmpzXCI7XG5jb25zdCBwcm9qZWN0PShuYW1lLGNvbG9yKT0+e1xuICAgIGxldCBpZD1EYXRlLm5vdygpLnRvU3RyaW5nKDM2KSArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpO1xuICAgIGxldCBjb3VudD0wO1xuICAgIHJldHVybiB7XG4gICAgICAgIGlkLFxuICAgICAgICBuYW1lLFxuICAgICAgICBjb2xvcixcbiAgICAgICAgY291bnQsXG4gICAgfVxufVxuZnVuY3Rpb24gc2hvd0FkZFByb2plY3QoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXdwcm9qZWN0X2hpZGRlblwiKS5pZCA9IFwibmV3cHJvamVjdFwiO1xufVxuZnVuY3Rpb24gYWRkUHJvamVjdChuYW1lVmFsdWUsY29sb3JWYWx1ZSkge1xuICAgIGxldCBjdXJyZW50UHJvamVjdD1wcm9qZWN0KG5hbWVWYWx1ZSxjb2xvclZhbHVlKTtcbiAgICBsZXQgb2JqPUpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2RvTGlzdFwiKSk7XG4gICAgb2JqLnByb2plY3QucHVzaChjdXJyZW50UHJvamVjdCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvTGlzdFwiLEpTT04uc3RyaW5naWZ5KG9iaikpO1xuICAgIHBvcHVsYXRlUHJvamVjdExpc3QoKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ld3Byb2plY3RcIikuaWQgPSBcIm5ld3Byb2plY3RfaGlkZGVuXCI7XG4gICAgdC5wb3B1bGF0ZVByb2plY3RTZWxlY3QoKTtcbn1cbmZ1bmN0aW9uIHBvcHVsYXRlUHJvamVjdExpc3QoKXtcbiAgICBsZXQgcHJvamVjdExpc3Q9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNzaWRlYmFyLS1saXN0IC5wcm9qZWN0XCIpO1xuICAgIC8vZGVsZXRlIG9sZCBsaXN0XG4gICAgcHJvamVjdExpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgIH0pO1xuICAgIC8vYWRkIG5ldyBsaXN0XG4gICAgbGV0IG9iaj1KU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb0xpc3RcIikpO1xuICAgIGZvcihsZXQgaT0wO2k8b2JqLnByb2plY3QubGVuZ3RoO2krKyl7XG4gICAgICAgIGxldCBpZFZhbHVlPW9iai5wcm9qZWN0W2ldLmlkO1xuICAgICAgICBsZXQgbmFtZVZhbHVlPW9iai5wcm9qZWN0W2ldLm5hbWU7XG4gICAgICAgIGxldCBjb2xvclZhbHVlPW9iai5wcm9qZWN0W2ldLmNvbG9yO1xuICAgICAgICBsZXQgY291bnRWYWx1ZT1vYmoucHJvamVjdFtpXS5jb3VudDtcbiAgICAgICAgY29uc3QgcHJvamVjdD1zaWRlYmFyUHJvamVjdChpZFZhbHVlLG5hbWVWYWx1ZSxjb2xvclZhbHVlLGNvdW50VmFsdWUpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtLWFkZFwiKS5iZWZvcmUocHJvamVjdCk7XG4gICAgICAgIGNyZWF0ZWRQcm9qZWN0RXZlbnRzKHByb2plY3QpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNhbmNlbEFkZFByb2plY3QoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXdwcm9qZWN0XCIpLmlkID0gXCJuZXdwcm9qZWN0X2hpZGRlblwiO1xufVxuZnVuY3Rpb24gc2hvd1Byb2plY3RFZGl0TWVudShlbGVtZW50KXtcbiAgICBsZXQgZWxlbWVudFBvcz1lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGxldCBib2R5UG9zPWRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LS1tZW51b3V0ZXJfaGlkZGVuXCIpLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LS1tZW51b3V0ZXJcIik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LS1tZW51X2RlbGV0ZVwiKS5kYXRhc2V0LmlkPWAke2VsZW1lbnQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkfWA7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LS1tZW51XCIpLnN0eWxlLmxlZnQ9YCR7ZWxlbWVudFBvcy5sZWZ0KzItYm9keVBvcy5sZWZ0fXB4YDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtLW1lbnVcIikuc3R5bGUudG9wPWAke2VsZW1lbnRQb3MuYm90dG9tKzItYm9keVBvcy50b3B9cHhgO1xufVxuZnVuY3Rpb24gaGlkZVByb2plY3RFZGl0TWVudSgpe1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC0tbWVudW91dGVyX2hpZGRlblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwicHJvamVjdC0tbWVudW91dGVyXCIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC0tbWVudV9kZWxldGVcIikucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1pZFwiKTtcbn1cblxuZnVuY3Rpb24gc2hvd1Byb2plY3RFZGl0SWNvbihlbGVtZW50KXtcbiAgICBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC0tZWRpdF9oaWRkZW5cIikuY2xhc3NMaXN0LmFkZChcInByb2plY3QtLWVkaXRcIik7XG59XG5mdW5jdGlvbiBoaWRlUHJvamVjdEVkaXRJY29uKGVsZW1lbnQpe1xuICAgIGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LS1lZGl0X2hpZGRlblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwicHJvamVjdC0tZWRpdFwiKTtcbn1cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoKXtcbiAgICBsZXQgaWQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LS1tZW51X2RlbGV0ZVwiKS5kYXRhc2V0LmlkO1xuICAgIGxldCBvYmo9SlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9MaXN0XCIpKTtcbiAgICBsZXQgbmV3UHJvamVjdD1vYmoucHJvamVjdC5maWx0ZXIoKGVsZW1lbnQsIGluZGV4KT0+e1xuICAgICAgICByZXR1cm4gZWxlbWVudC5pZCE9aWQ7XG4gICAgfSk7XG4gICAgb2JqLnByb2plY3Q9bmV3UHJvamVjdDtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9MaXN0XCIsSlNPTi5zdHJpbmdpZnkob2JqKSk7XG4gICAgdC5kZWxldGVUYXNrcyhpZCk7XG4gICAgcG9wdWxhdGVQcm9qZWN0TGlzdCgpO1xuICAgIHQucG9wdWxhdGVQcm9qZWN0U2VsZWN0KCk7XG59XG5mdW5jdGlvbiB0b2dnbGVQcm9qZWN0TGlzdCgpIHtcbiAgICBjb25zdCBzZWxlY3RPbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpZGViYXItLWxpc3RcIik7XG4gICAgY29uc3Qgc2VsZWN0VHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaWRlYmFyLS1saXN0X2hpZGRlblwiKTtcbiAgICBsZXQgb2JqPUpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcmVmZXJlbmNlc1wiKSk7XG4gICAgaWYgKHNlbGVjdE9uZSkge1xuICAgICAgICBvYmouc2lkZWJhcj17bGlzdFN0YXRlOmZhbHNlfTtcbiAgICAgICAgc2VsZWN0T25lLmlkID0gXCJzaWRlYmFyLS1saXN0X2hpZGRlblwiO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXItLWhlYWRlcl9idG5faWNvbl9kb3duXCIpLmNsYXNzTGlzdC5yZXBsYWNlKFwic2lkZWJhci0taGVhZGVyX2J0bl9pY29uX2Rvd25cIiwgXCJzaWRlYmFyLS1oZWFkZXJfYnRuX2ljb25fdXBcIik7XG4gICAgfSBlbHNlIGlmIChzZWxlY3RUd28pIHtcbiAgICAgICAgb2JqLnNpZGViYXI9e2xpc3RTdGF0ZTp0cnVlfTtcbiAgICAgICAgc2VsZWN0VHdvLmlkID0gXCJzaWRlYmFyLS1saXN0XCI7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhci0taGVhZGVyX2J0bl9pY29uX3VwXCIpLmNsYXNzTGlzdC5yZXBsYWNlKFwic2lkZWJhci0taGVhZGVyX2J0bl9pY29uX3VwXCIsIFwic2lkZWJhci0taGVhZGVyX2J0bl9pY29uX2Rvd25cIik7XG4gICAgfVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJlZmVyZW5jZXNcIixKU09OLnN0cmluZ2lmeShvYmopKTtcbn1cbmV4cG9ydCB7ZGVsZXRlUHJvamVjdCxoaWRlUHJvamVjdEVkaXRJY29uLHNob3dQcm9qZWN0RWRpdEljb24saGlkZVByb2plY3RFZGl0TWVudSxzaG93UHJvamVjdEVkaXRNZW51LCBwcm9qZWN0LCBzaG93QWRkUHJvamVjdCwgYWRkUHJvamVjdCwgY2FuY2VsQWRkUHJvamVjdCwgdG9nZ2xlUHJvamVjdExpc3QsIHBvcHVsYXRlUHJvamVjdExpc3QgfTtcbiIsImltcG9ydCB7IG1haW5MaXN0VGFzayB9IGZyb20gXCIuL0RPTXNjcmlwdHMuanNcIjtcbmltcG9ydCAqIGFzIHAgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgY3JlYXRlZFRhc2tMaXN0RXZlbnRzIH0gZnJvbSBcIi4vZXZlbnRzU2NyaXB0cy5qc1wiO1xuY29uc3QgdGFzayA9IChuYW1lLCBwcm9qZWN0SWQpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lLFxuICAgICAgICBwcm9qZWN0SWQsXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHNob3dBZGRUYXNrKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay0tbmV3X2hpZGRlblwiKS5pZCA9IFwidGFzay0tbmV3XCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLS1hZGRcIikuY2xhc3NMaXN0LnJlcGxhY2UoXCJ0YXNrLS1hZGRcIiwgXCJ0YXNrLS1hZGRfaGlkZGVuXCIpO1xufVxuZnVuY3Rpb24gYWRkVGFzayhuYW1lVmFsdWUsIHByb2plY3RWYWx1ZSkge1xuICAgIGxldCBvYmogPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb0xpc3RcIikpO1xuICAgIG9iai50YXNrLnB1c2godGFzayhuYW1lVmFsdWUsIG9iai5wcm9qZWN0W3Byb2plY3RWYWx1ZV0uaWQpKTtcbiAgICBvYmoucHJvamVjdFtwcm9qZWN0VmFsdWVdLmNvdW50Kys7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIiArIG9iai5wcm9qZWN0W3Byb2plY3RWYWx1ZV0uaWQgKyBcIiAucHJvamVjdC0tY291bnRcIikudGV4dENvbnRlbnQgPSBvYmoucHJvamVjdFtwcm9qZWN0VmFsdWVdLmNvdW50O1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb0xpc3RcIiwgSlNPTi5zdHJpbmdpZnkob2JqKSk7XG4gICAgcG9wdWxhdGVUYXNrTGlzdCgpO1xufVxuZnVuY3Rpb24gcG9wdWxhdGVUYXNrTGlzdCgpIHtcbiAgICBsZXQgdGFza0xpc3Q9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNtYWluLS1saXN0IC50YXNrXCIpO1xuICAgIGxldCBvYmogPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb0xpc3RcIikpO1xuICAgIGxldCBwcm9qZWN0TmFtZVZhbHVlLCBwcm9qZWN0Q29sb3JWYWx1ZSwgbmFtZVZhbHVlO1xuICAgIC8vZGVsZXRlIG9sZCBsaXN0XG4gICAgdGFza0xpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgIH0pO1xuICAgIC8vcG9wdWxhdGUgdGFzayBsaXN0XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmoudGFzay5sZW5ndGg7IGkrKykge1xuICAgICAgICBuYW1lVmFsdWUgPSBvYmoudGFza1tpXS5uYW1lO1xuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IG9iai5wcm9qZWN0Lmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICBpZiAob2JqLnRhc2tbaV0ucHJvamVjdElkID09IG9iai5wcm9qZWN0W2tdLmlkKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdE5hbWVWYWx1ZSA9IG9iai5wcm9qZWN0W2tdLm5hbWU7XG4gICAgICAgICAgICAgICAgcHJvamVjdENvbG9yVmFsdWUgPSBvYmoucHJvamVjdFtrXS5jb2xvcjtcbiAgICAgICAgICAgICAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLS1hZGRcIilcbiAgICAgICAgICAgICAgICA/LmJlZm9yZShtYWluTGlzdFRhc2sobmFtZVZhbHVlLCBwcm9qZWN0TmFtZVZhbHVlLCBwcm9qZWN0Q29sb3JWYWx1ZSkpKSB8fCBcbiAgICAgICAgICAgICAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLS1hZGRfaGlkZGVuXCIpXG4gICAgICAgICAgICAgICAgPy5iZWZvcmUobWFpbkxpc3RUYXNrKG5hbWVWYWx1ZSwgcHJvamVjdE5hbWVWYWx1ZSwgcHJvamVjdENvbG9yVmFsdWUpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBwb3B1bGF0ZVByb2plY3RTZWxlY3QoKSB7XG4gICAgbGV0IHByb2plY3RzQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb0xpc3RcIikpLnByb2plY3Q7XG4gICAgbGV0IHNlbGVjdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stLW1lbnVcIik7XG4gICAgLy9yZW1vdmUgb2xkIG9wdGlvbnNcbiAgICB3aGlsZSAoc2VsZWN0RWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIHNlbGVjdEVsZW1lbnQucmVtb3ZlQ2hpbGQoc2VsZWN0RWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgLy9pZiBwcm9qZWN0IGFycmF5IGlzIG5vdCBlbXB0eSByZXBvcHVsYXRlIHNlbGVjdCBlbGVtZW50XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHBPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwT3B0aW9uLmNsYXNzTmFtZSA9IGk7XG4gICAgICAgIHBPcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0c0FycmF5W2ldLm5hbWU7XG4gICAgICAgIHNlbGVjdEVsZW1lbnQuYXBwZW5kQ2hpbGQocE9wdGlvbik7XG4gICAgICAgIGNyZWF0ZWRUYXNrTGlzdEV2ZW50cyhwT3B0aW9uKTtcbiAgICB9XG59XG5mdW5jdGlvbiBzaG93VGFza1Byb2plY3RTZWxlY3QoKXtcbiAgICBsZXQgZWxlbWVudFBvcz10aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGxldCBib2R5UG9zPWRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLS1tZW51b3V0ZXJfaGlkZGVuXCIpLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLS1tZW51b3V0ZXJcIik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLS1tZW51XCIpLnN0eWxlLmxlZnQ9YCR7ZWxlbWVudFBvcy5sZWZ0KzItYm9keVBvcy5sZWZ0fXB4YDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stLW1lbnVcIikuc3R5bGUudG9wPWAke2VsZW1lbnRQb3MuYm90dG9tKzItYm9keVBvcy50b3B9cHhgO1xufVxuZnVuY3Rpb24gZGVsZXRlVGFza3ModGFza0lkKXtcbiAgICBsZXQgb2JqPUpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2RvTGlzdFwiKSk7XG4gICAgbGV0IG5ld1Rhc2s9b2JqLnRhc2suZmlsdGVyKChlbGVtZW50LCBpbmRleCk9PntcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQucHJvamVjdElkIT10YXNrSWQ7XG4gICAgfSk7XG4gICAgb2JqLnRhc2s9bmV3VGFzaztcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9MaXN0XCIsSlNPTi5zdHJpbmdpZnkob2JqKSk7XG4gICAgcG9wdWxhdGVUYXNrTGlzdCgpO1xufVxuZnVuY3Rpb24gY2FuY2VsQWRkVGFzaygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stLW5ld1wiKS5pZCA9IFwidGFzay0tbmV3X2hpZGRlblwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay0tYWRkX2hpZGRlblwiKS5jbGFzc0xpc3QucmVwbGFjZShcInRhc2stLWFkZF9oaWRkZW5cIiwgXCJ0YXNrLS1hZGRcIik7XG59XG5leHBvcnQgeyBzaG93VGFza1Byb2plY3RTZWxlY3QsIGRlbGV0ZVRhc2tzLCBzaG93QWRkVGFzaywgYWRkVGFzaywgY2FuY2VsQWRkVGFzaywgcG9wdWxhdGVUYXNrTGlzdCwgcG9wdWxhdGVQcm9qZWN0U2VsZWN0IH07XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBidWlsZFNpdGUgfSBmcm9tIFwiLi9ET01zY3JpcHRzXCI7XG5pbXBvcnQgeyBjcmVhdGVFdmVudHMgfSBmcm9tIFwiLi9ldmVudHNTY3JpcHRzXCI7XG5idWlsZFNpdGUoKTtcbmNyZWF0ZUV2ZW50cygpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==