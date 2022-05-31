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

    const taskSelectInput = document.createElement("select");
    Object.assign(taskSelectInput, {
        id: "task_project"
    });
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
    content.append(header(), sidebar(), main(), footer(), addProject(),projectEditMenu());
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
/* harmony export */   "createdProjectEvents": () => (/* binding */ createdProjectEvents)
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
    document.querySelector(".task--add").addEventListener("click", () => {
        _task__WEBPACK_IMPORTED_MODULE_1__.showAddTask();
    });
    document.querySelector("#task--new_submit_add").addEventListener("click", () => {
        _task__WEBPACK_IMPORTED_MODULE_1__.addTask(document.querySelector("#task_name").value,document.querySelector("#task_project").value);
    });
    document.querySelector("#task--new_submit_cancel").addEventListener("click", () => {
        _task__WEBPACK_IMPORTED_MODULE_1__.cancelAddTask();
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
/* harmony export */   "showAddTask": () => (/* binding */ showAddTask)
/* harmony export */ });
/* harmony import */ var _DOMscripts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMscripts.js */ "./src/DOMscripts.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");


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
    let selectElement = document.querySelector("#task_project");
    //if project array is not empty repopulate select element
    if (Array.isArray(projectsArray) && projectsArray.length > 0) {
        //remove old options
        while (selectElement.firstChild) {
            selectElement.removeChild(selectElement.firstChild);
        }
        //add new options
        for (let i = 0; i < projectsArray.length; i++) {
            const pOption = document.createElement("option");
            pOption.value = i;
            pOption.textContent = projectsArray[i].name;
            selectElement.appendChild(pOption);
        }
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQStCO0FBQ0g7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLDJCQUEyQixVQUFVO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5REFBcUI7QUFDekIsSUFBSSxtREFBa0I7QUFDdEIsSUFBSSx3REFBdUI7QUFDM0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL1MrQjtBQUNIO0FBQ1E7QUFDcEM7QUFDQTtBQUNBLFFBQVEseURBQXFCO0FBQzdCLEtBQUs7QUFDTDtBQUNBLFFBQVEseURBQXFCO0FBQzdCLEtBQUs7QUFDTDtBQUNBO0FBQ0EsUUFBUSx5REFBcUI7QUFDN0IsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvREFBZ0I7QUFDeEIsS0FBSztBQUNMO0FBQ0EsUUFBUSxnREFBWTtBQUNwQjtBQUNBLEtBQUs7QUFDTDtBQUNBLFFBQVEsc0RBQWtCO0FBQzFCLEtBQUs7O0FBRUw7QUFDQTtBQUNBLFFBQVEsdURBQW1CO0FBQzNCLEtBQUs7QUFDTDtBQUNBO0FBQ0EsUUFBUSxtREFBZTtBQUN2QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsYUFBYSx5REFBcUI7QUFDbEMsU0FBUztBQUNULFFBQVEseURBQXFCO0FBQzdCLEtBQUs7QUFDTDtBQUNBO0FBQ0EsUUFBUSw4Q0FBYTtBQUNyQixLQUFLO0FBQ0w7QUFDQSxRQUFRLDBDQUFTO0FBQ2pCLEtBQUs7QUFDTDtBQUNBLFFBQVEsZ0RBQWU7QUFDdkIsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRpRDtBQUNyQjtBQUM4QjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx3REFBdUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxnQkFBZ0IscUJBQXFCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDhEQUFjO0FBQ3BDO0FBQ0EsUUFBUSx1RUFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFLGlDQUFpQztBQUNuRywyREFBMkQsK0JBQStCO0FBQzFGLDBEQUEwRCxnQ0FBZ0M7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJLDhDQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxNQUFNO0FBQ04scUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDdU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRnhKO0FBQ2hCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esb0JBQW9CLHFCQUFxQjtBQUN6QztBQUNBLHdCQUF3Qix3QkFBd0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNERBQVk7QUFDckM7QUFDQSx5QkFBeUIsNERBQVk7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwwQkFBMEI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3FHOzs7Ozs7OztVQzFFckc7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTnFCO0FBQ29CO0FBQ007QUFDL0Msc0RBQVM7QUFDVCw0REFBWSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0RPTXNjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZXZlbnRzU2NyaXB0cy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgKiBhcyBwIGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCAqIGFzIHQgZnJvbSBcIi4vdGFza1wiO1xuZnVuY3Rpb24gaGVhZGVyKCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2LmlkID0gXCJoZWFkZXJcIjtcbiAgICBkaXYudGV4dENvbnRlbnQgPSBcIlRvZG8gTGlzdFwiO1xuICAgIHJldHVybiBkaXY7XG59XG5mdW5jdGlvbiBzaWRlYmFyKCkge1xuICAgIGxldCBwcmVmZXJlbmNlcz1PYmplY3QudmFsdWVzKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcmVmZXJlbmNlc1wiKSlbXCJzaWRlYmFyXCJdKTtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzaWRlYmFyLmlkID0gXCJzaWRlYmFyXCI7XG5cbiAgICBjb25zdCBzaWRlYmFyR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNpZGViYXJHcm91cC5pZCA9IFwic2lkZWJhci0tZ3JvdXBcIjtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHNpZGViYXJHcm91cCk7XG4gICAgc2lkZWJhckdyb3VwLmFwcGVuZENoaWxkKHNpZGViYXJIZWFkZXIoXCJNeSBMaXN0XCIpKTtcbiAgICBzaWRlYmFyR3JvdXAuYXBwZW5kQ2hpbGQoc2lkZWJhckhlYWRlcihcIlRvZGF5XCIpKTtcbiAgICBzaWRlYmFyR3JvdXAuYXBwZW5kQ2hpbGQoc2lkZWJhckhlYWRlcihcIk5leHQgNyBEYXlzXCIpKTtcblxuICAgIGNvbnN0IHNpZGViYXJIZWFkUHJvamVjdCA9IHNpZGViYXJIZWFkZXIoXCJQcm9qZWN0c1wiKTtcbiAgICBjb25zdCBzaWRlYmFySGVhZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2lkZWJhckhlYWRCdG4uY2xhc3NOYW1lID0gXCJzaWRlYmFyLS1oZWFkZXJfYnRuXCI7XG5cbiAgICBjb25zdCBzaWRlYmFySGVhZEJ0bkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBpZihwcmVmZXJlbmNlc1swXSl7XG4gICAgICAgIHNpZGViYXJIZWFkQnRuSWNvbi5jbGFzc05hbWUgPSBcInNpZGViYXItLWhlYWRlcl9idG5faWNvbl9kb3duXCI7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIHNpZGViYXJIZWFkQnRuSWNvbi5jbGFzc05hbWUgPSBcInNpZGViYXItLWhlYWRlcl9idG5faWNvbl91cFwiO1xuICAgIH1cbiAgICBzaWRlYmFySGVhZEJ0bi5hcHBlbmRDaGlsZChzaWRlYmFySGVhZEJ0bkljb24pO1xuICAgIHNpZGViYXJIZWFkUHJvamVjdC5hcHBlbmRDaGlsZChzaWRlYmFySGVhZEJ0bik7XG4gICAgc2lkZWJhckdyb3VwLmFwcGVuZENoaWxkKHNpZGViYXJIZWFkUHJvamVjdCk7XG5cbiAgICBjb25zdCBzaWRlYmFyTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaWYocHJlZmVyZW5jZXNbMF0pe1xuICAgICAgICBzaWRlYmFyTGlzdC5pZCA9IFwic2lkZWJhci0tbGlzdFwiO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBzaWRlYmFyTGlzdC5pZCA9IFwic2lkZWJhci0tbGlzdF9oaWRkZW5cIjtcbiAgICB9XG4gICAgc2lkZWJhckdyb3VwLmFwcGVuZENoaWxkKHNpZGViYXJMaXN0KTtcblxuICAgIGNvbnN0IHByb2plY3RBZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RBZGQuY2xhc3NOYW1lID0gXCJwcm9qZWN0LS1hZGRcIjtcbiAgICBzaWRlYmFyTGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0QWRkKTtcblxuICAgIGNvbnN0IHByb2plY3RBZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RBZGRCdG4uY2xhc3NOYW1lID0gXCJwcm9qZWN0LS1hZGRfYnRuXCI7XG4gICAgcHJvamVjdEFkZC5hcHBlbmRDaGlsZChwcm9qZWN0QWRkQnRuKTtcblxuICAgIGNvbnN0IHByb2plY3RBZGRCdG5JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgcHJvamVjdEFkZEJ0bkljb24uY2xhc3NOYW1lID0gXCJwcm9qZWN0LS1hZGRfYnRuX2ljb25cIjtcbiAgICBwcm9qZWN0QWRkQnRuLmFwcGVuZENoaWxkKHByb2plY3RBZGRCdG5JY29uKTtcblxuICAgIGNvbnN0IHByb2plY3RBZGROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0QWRkTmFtZS5jbGFzc05hbWUgPSBcInByb2plY3QtLWFkZF9uYW1lXCI7XG4gICAgcHJvamVjdEFkZE5hbWUudGV4dENvbnRlbnQgPSBcIkFkZCBQcm9qZWN0XCI7XG4gICAgcHJvamVjdEFkZC5hcHBlbmRDaGlsZChwcm9qZWN0QWRkTmFtZSk7XG4gICAgcmV0dXJuIHNpZGViYXI7XG59XG5mdW5jdGlvbiBzaWRlYmFySGVhZGVyKHRDb250ZW50KSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuY2xhc3NOYW1lID0gXCJzaWRlYmFyLS1oZWFkZXJcIjtcbiAgICBjb25zdCBkaXZDaGlsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2Q2hpbGQuY2xhc3NOYW1lID0gXCJzaWRlYmFyLS1oZWFkZXJfdGl0bGVcIjtcbiAgICBkaXZDaGlsZC50ZXh0Q29udGVudCA9IHRDb250ZW50O1xuICAgIGRpdi5hcHBlbmRDaGlsZChkaXZDaGlsZCk7XG4gICAgcmV0dXJuIGRpdjtcbn1cbmZ1bmN0aW9uIHNpZGViYXJQcm9qZWN0KHRJZCx0Q29udGVudCx0Q29sb3IsdENvdW50KSB7XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdC5pZCA9IHRJZDtcbiAgICBwcm9qZWN0LmNsYXNzTmFtZSA9IFwicHJvamVjdFwiO1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0TmFtZS5jbGFzc05hbWUgPSBcInByb2plY3QtLW5hbWVcIjtcbiAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHRDb250ZW50O1xuICAgIHByb2plY3ROYW1lLnN0eWxlLmNvbG9yPSB0Q29sb3I7XG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG4gICAgY29uc3QgcHJvamVjdENvdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0Q291bnQuY2xhc3NOYW1lID0gXCJwcm9qZWN0LS1jb3VudFwiO1xuICAgIHByb2plY3RDb3VudC50ZXh0Q29udGVudCA9IHRDb3VudDtcbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RDb3VudCk7XG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0RWRpdEJ0bigpKTtcbiAgICByZXR1cm4gcHJvamVjdDtcbn1cbmZ1bmN0aW9uIG1haW4oKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbi5pZCA9IFwibWFpblwiO1xuXG4gICAgY29uc3QgbWFpbkdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluR3JvdXAuaWQgPSBcIm1haW4tLWdyb3VwXCI7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChtYWluR3JvdXApO1xuXG4gICAgY29uc3QgbWFpbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbkhlYWRlci5jbGFzc05hbWUgPSBcIm1haW4tLWhlYWRlclwiO1xuICAgIGNvbnN0IG1haW5IZWFkZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbkhlYWRlclRpdGxlLmNsYXNzTmFtZSA9IFwibWFpbi0taGVhZGVyX3RpdGxlXCI7XG4gICAgbWFpbkhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xuICAgIG1haW5IZWFkZXIuYXBwZW5kQ2hpbGQobWFpbkhlYWRlclRpdGxlKTtcbiAgICBtYWluR3JvdXAuYXBwZW5kQ2hpbGQobWFpbkhlYWRlcik7XG5cbiAgICBjb25zdCBtYWluTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbkxpc3QuaWQgPSBcIm1haW4tLWxpc3RcIjtcbiAgICBtYWluR3JvdXAuYXBwZW5kQ2hpbGQobWFpbkxpc3QpO1xuXG4gICAgY29uc3QgdGFza0FkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0FkZC5jbGFzc05hbWUgPSBcInRhc2stLWFkZFwiO1xuICAgIG1haW5MaXN0LmFwcGVuZENoaWxkKHRhc2tBZGQpO1xuXG4gICAgY29uc3QgdGFza0FkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0FkZEJ0bi5jbGFzc05hbWUgPSBcInRhc2stLWFkZF9idG5cIjtcbiAgICB0YXNrQWRkLmFwcGVuZENoaWxkKHRhc2tBZGRCdG4pO1xuXG4gICAgY29uc3QgdGFza0FkZEJ0bkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICB0YXNrQWRkQnRuSWNvbi5jbGFzc05hbWUgPSBcInRhc2stLWFkZF9idG5faWNvblwiO1xuICAgIHRhc2tBZGRCdG4uYXBwZW5kQ2hpbGQodGFza0FkZEJ0bkljb24pO1xuXG4gICAgY29uc3QgdGFza0FkZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tBZGROYW1lLmNsYXNzTmFtZSA9IFwidGFzay0tYWRkX25hbWVcIjtcbiAgICB0YXNrQWRkTmFtZS50ZXh0Q29udGVudCA9IFwiQWRkIFRhc2tcIjtcbiAgICB0YXNrQWRkLmFwcGVuZENoaWxkKHRhc2tBZGROYW1lKTtcblxuICAgIG1haW5MaXN0LmFwcGVuZChhZGRUYXNrKCkpO1xuICAgIHJldHVybiBtYWluO1xufVxuZnVuY3Rpb24gbWFpbkxpc3RUYXNrKHRDb250ZW50LHRQcm9qZWN0LHRDb2xvcikge1xuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2suY2xhc3NOYW1lID0gXCJ0YXNrXCI7XG5cbiAgICBjb25zdCB0YXNrSW5wdXRPdXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0lucHV0T3V0ZXIuY2xhc3NOYW1lID0gXCJ0YXNrLS1pbnB1dG91dGVyXCI7XG4gICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrSW5wdXRPdXRlcik7XG5cbiAgICBjb25zdCB0YXNrQ2hlY2tib3hJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBPYmplY3QuYXNzaWduKHRhc2tDaGVja2JveElucHV0LCB7XG4gICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgICAgbmFtZTogXCJ0YXNrX3N0YXRlXCIsXG4gICAgICAgIGlkOiBcInRhc2tfc3RhdGVcIlxuICAgIH0pO1xuICAgIHRhc2tJbnB1dE91dGVyLmFwcGVuZENoaWxkKHRhc2tDaGVja2JveElucHV0KTtcblxuICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrTmFtZS5jbGFzc05hbWUgPSBcInRhc2stLW5hbWVcIjtcbiAgICB0YXNrTmFtZS50ZXh0Q29udGVudCA9IHRDb250ZW50O1xuICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza05hbWUpO1xuXG4gICAgY29uc3QgdGFza05hbWVfcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza05hbWVfcHJvamVjdC5jbGFzc05hbWUgPSBcInRhc2stLW5hbWVfcHJvamVjdFwiO1xuICAgIHRhc2tOYW1lX3Byb2plY3QudGV4dENvbnRlbnQgPSB0UHJvamVjdDtcbiAgICB0YXNrTmFtZV9wcm9qZWN0LnN0eWxlLmNvbG9yPSB0Q29sb3I7XG4gICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrTmFtZV9wcm9qZWN0KTtcbiAgICByZXR1cm4gdGFzaztcbn1cbmZ1bmN0aW9uIGZvb3RlcigpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5pZCA9IFwiZm9vdGVyXCI7XG4gICAgZGl2LnRleHRDb250ZW50ID0gXCJDb3B5cmlnaHQgwqkgMjAyMiBSZWRhXCI7XG4gICAgcmV0dXJuIGRpdjtcbn1cbmZ1bmN0aW9uIGFkZFByb2plY3QoKSB7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3UHJvamVjdC5pZCA9IFwibmV3cHJvamVjdF9oaWRkZW5cIjtcbiAgICBjb25zdCBuZXdQcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1Byb2plY3RUaXRsZS5pZCA9IFwibmV3cHJvamVjdC0tdGl0bGVcIjtcbiAgICBuZXdQcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBcIkFkZCBQcm9qZWN0XCI7XG4gICAgbmV3UHJvamVjdC5hcHBlbmRDaGlsZChuZXdQcm9qZWN0VGl0bGUpO1xuXG4gICAgY29uc3QgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1Byb2plY3RGb3JtLmlkID0gXCJuZXdwcm9qZWN0LS1mb3JtXCI7XG4gICAgbmV3UHJvamVjdC5hcHBlbmRDaGlsZChuZXdQcm9qZWN0Rm9ybSk7XG5cbiAgICBjb25zdCBuZXdQcm9qZWN0Rm9ybU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1Byb2plY3RGb3JtTmFtZS5pZCA9IFwibmV3cHJvamVjdC0tZm9ybV9uYW1lXCI7XG4gICAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQobmV3UHJvamVjdEZvcm1OYW1lKTtcbiAgICBjb25zdCBuZXdQcm9qZWN0Rm9ybUNvbG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdQcm9qZWN0Rm9ybUNvbG9yLmlkID0gXCJuZXdwcm9qZWN0LS1mb3JtX2NvbG9yXCI7XG4gICAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQobmV3UHJvamVjdEZvcm1Db2xvcik7XG5cbiAgICBjb25zdCBwcm9qZWN0TmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIE9iamVjdC5hc3NpZ24ocHJvamVjdE5hbWVMYWJlbCwge1xuICAgICAgICBmb3I6IFwicHJvamVjdF9uYW1lXCIsXG4gICAgICAgIHRleHRDb250ZW50OiBcIk5hbWVcIlxuICAgIH0pO1xuICAgIG5ld1Byb2plY3RGb3JtTmFtZS5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZUxhYmVsKTtcblxuICAgIGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgT2JqZWN0LmFzc2lnbihwcm9qZWN0TmFtZUlucHV0LCB7XG4gICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICBuYW1lOiBcInByb2plY3RfbmFtZVwiLFxuICAgICAgICBpZDogXCJwcm9qZWN0X25hbWVcIlxuICAgIH0pO1xuICAgIG5ld1Byb2plY3RGb3JtTmFtZS5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZUlucHV0KTtcblxuICAgIGNvbnN0IHByb2plY3RDb2xvckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIE9iamVjdC5hc3NpZ24ocHJvamVjdENvbG9yTGFiZWwsIHtcbiAgICAgICAgZm9yOiBcInByb2plY3RfY29sb3JcIixcbiAgICAgICAgdGV4dENvbnRlbnQ6IFwiQ29sb3JcIlxuICAgIH0pO1xuICAgIG5ld1Byb2plY3RGb3JtQ29sb3IuYXBwZW5kQ2hpbGQocHJvamVjdENvbG9yTGFiZWwpO1xuXG4gICAgY29uc3QgcHJvamVjdENvbG9ySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgT2JqZWN0LmFzc2lnbihwcm9qZWN0Q29sb3JJbnB1dCwge1xuICAgICAgICB0eXBlOiBcImNvbG9yXCIsXG4gICAgICAgIG5hbWU6IFwicHJvamVjdF9jb2xvclwiLFxuICAgICAgICBpZDogXCJwcm9qZWN0X2NvbG9yXCJcbiAgICB9KTtcbiAgICBuZXdQcm9qZWN0Rm9ybUNvbG9yLmFwcGVuZENoaWxkKHByb2plY3RDb2xvcklucHV0KTtcblxuICAgIGNvbnN0IG5ld1Byb2plY3RGb3JtU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdQcm9qZWN0Rm9ybVN1Ym1pdC5pZCA9IFwibmV3cHJvamVjdC0tZm9ybV9zdWJtaXRcIjtcbiAgICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChuZXdQcm9qZWN0Rm9ybVN1Ym1pdCk7XG5cbiAgICBjb25zdCBuZXdQcm9qZWN0Rm9ybVN1Ym1pdEFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3UHJvamVjdEZvcm1TdWJtaXRBZGQuaWQgPSBcIm5ld3Byb2plY3QtLWZvcm1fc3VibWl0X2FkZFwiO1xuICAgIG5ld1Byb2plY3RGb3JtU3VibWl0QWRkLnRleHRDb250ZW50ID0gXCJBZGRcIjtcbiAgICBuZXdQcm9qZWN0Rm9ybVN1Ym1pdC5hcHBlbmRDaGlsZChuZXdQcm9qZWN0Rm9ybVN1Ym1pdEFkZCk7XG4gICAgY29uc3QgbmV3UHJvamVjdEZvcm1TdWJtaXRDYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1Byb2plY3RGb3JtU3VibWl0Q2FuY2VsLmlkID0gXCJuZXdwcm9qZWN0LS1mb3JtX3N1Ym1pdF9jYW5jZWxcIjtcbiAgICBuZXdQcm9qZWN0Rm9ybVN1Ym1pdENhbmNlbC50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gICAgbmV3UHJvamVjdEZvcm1TdWJtaXQuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEZvcm1TdWJtaXRDYW5jZWwpO1xuICAgIHJldHVybiBuZXdQcm9qZWN0O1xufVxuZnVuY3Rpb24gcHJvamVjdEVkaXRCdG4oKXtcbiAgICBjb25zdCBwcm9qZWN0RWRpdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RFZGl0LmNsYXNzTmFtZT1cInByb2plY3QtLWVkaXRfaGlkZGVuXCI7XG4gICAgXG4gICAgY29uc3QgcHJvamVjdEVkaXRJY29uPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHByb2plY3RFZGl0SWNvbi5jbGFzc05hbWU9XCJwcm9qZWN0LS1lZGl0X2ljb25cIjtcbiAgICBwcm9qZWN0RWRpdC5hcHBlbmRDaGlsZChwcm9qZWN0RWRpdEljb24pO1xuICAgIHJldHVybiBwcm9qZWN0RWRpdDtcbn1cbmZ1bmN0aW9uIHByb2plY3RFZGl0TWVudSgpe1xuICAgIGNvbnN0IGVkaXRNZW51T3V0ZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBlZGl0TWVudU91dGVyLmNsYXNzTmFtZT1cInByb2plY3QtLW1lbnVvdXRlcl9oaWRkZW5cIjtcbiAgICBcbiAgICBjb25zdCBlZGl0TWVudT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGVkaXRNZW51LmNsYXNzTmFtZT1cInByb2plY3QtLW1lbnVcIjtcbiAgICBlZGl0TWVudU91dGVyLmFwcGVuZENoaWxkKGVkaXRNZW51KTtcbiAgICBjb25zdCBlZGl0TWVudURlbGV0ZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGVkaXRNZW51RGVsZXRlLmNsYXNzTmFtZT1cInByb2plY3QtLW1lbnVfZGVsZXRlXCI7XG4gICAgZWRpdE1lbnVEZWxldGUudGV4dENvbnRlbnQ9XCJEZWxldGUgcHJvamVjdFwiO1xuICAgIGVkaXRNZW51LmFwcGVuZENoaWxkKGVkaXRNZW51RGVsZXRlKTtcblxuICAgIHJldHVybiBlZGl0TWVudU91dGVyO1xufVxuZnVuY3Rpb24gYWRkVGFzaygpe1xuICAgIGNvbnN0IHRhc2tOZXc9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrTmV3LmlkPVwidGFzay0tbmV3X2hpZGRlblwiO1xuICAgIFxuICAgIGNvbnN0IHRhc2tOZXdJbnB1dHM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrTmV3SW5wdXRzLmlkPVwidGFzay0tbmV3X2lucHV0c1wiO1xuICAgIHRhc2tOZXcuYXBwZW5kQ2hpbGQodGFza05ld0lucHV0cyk7XG5cbiAgICBjb25zdCB0YXNrTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIE9iamVjdC5hc3NpZ24odGFza05hbWVJbnB1dCwge1xuICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgbmFtZTogXCJ0YXNrX25hbWVcIixcbiAgICAgICAgaWQ6IFwidGFza19uYW1lXCJcbiAgICB9KTtcbiAgICB0YXNrTmV3SW5wdXRzLmFwcGVuZENoaWxkKHRhc2tOYW1lSW5wdXQpO1xuXG4gICAgY29uc3QgdGFza1NlbGVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBPYmplY3QuYXNzaWduKHRhc2tTZWxlY3RJbnB1dCwge1xuICAgICAgICBpZDogXCJ0YXNrX3Byb2plY3RcIlxuICAgIH0pO1xuICAgIHRhc2tOZXdJbnB1dHMuYXBwZW5kQ2hpbGQodGFza1NlbGVjdElucHV0KTtcbiAgICBcbiAgICBjb25zdCB0YXNrTmV3U3VibWl0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza05ld1N1Ym1pdC5pZD1cInRhc2stLW5ld19zdWJtaXRcIjtcbiAgICB0YXNrTmV3LmFwcGVuZENoaWxkKHRhc2tOZXdTdWJtaXQpO1xuXG4gICAgY29uc3QgdGFza05ld1N1Ym1pdEFkZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tOZXdTdWJtaXRBZGQuaWQ9XCJ0YXNrLS1uZXdfc3VibWl0X2FkZFwiO1xuICAgIHRhc2tOZXdTdWJtaXRBZGQudGV4dENvbnRlbnQ9XCJBZGQgVGFza1wiO1xuICAgIHRhc2tOZXdTdWJtaXQuYXBwZW5kQ2hpbGQodGFza05ld1N1Ym1pdEFkZCk7XG5cbiAgICBjb25zdCB0YXNrTmV3U3VibWl0Q2FuY2VsPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza05ld1N1Ym1pdENhbmNlbC5pZD1cInRhc2stLW5ld19zdWJtaXRfY2FuY2VsXCI7XG4gICAgdGFza05ld1N1Ym1pdENhbmNlbC50ZXh0Q29udGVudD1cIkNhbmNlbFwiO1xuICAgIHRhc2tOZXdTdWJtaXQuYXBwZW5kQ2hpbGQodGFza05ld1N1Ym1pdENhbmNlbCk7XG5cbiAgICByZXR1cm4gdGFza05ldztcbn1cbmZ1bmN0aW9uIGNyZWF0ZVN0b3JhZ2UoKSB7XG4gICAgbGV0IGNoZWNrID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2RvTGlzdFwiKTtcbiAgICBpZiAoY2hlY2sgPT09IG51bGwpIHtcbiAgICAgICAgbGV0IHRvZG9MaXN0ID0geyBwcm9qZWN0OiBbXSwgdGFzazogW10gfTtcbiAgICAgICAgbGV0IHByZWZlcmVuY2VzID0ge3NpZGViYXI6IHtsaXN0U3RhdDp0cnVlfX07XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb0xpc3RcIiwgSlNPTi5zdHJpbmdpZnkodG9kb0xpc3QpKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcmVmZXJlbmNlc1wiLCBKU09OLnN0cmluZ2lmeShwcmVmZXJlbmNlcykpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGJ1aWxkU2l0ZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250ZW50LmlkID0gXCJjb250ZW50XCI7XG4gICAgY3JlYXRlU3RvcmFnZSgpO1xuICAgIGNvbnRlbnQuYXBwZW5kKGhlYWRlcigpLCBzaWRlYmFyKCksIG1haW4oKSwgZm9vdGVyKCksIGFkZFByb2plY3QoKSxwcm9qZWN0RWRpdE1lbnUoKSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICBwLnBvcHVsYXRlUHJvamVjdExpc3QoKTtcbiAgICB0LnBvcHVsYXRlVGFza0xpc3QoKTtcbiAgICB0LnBvcHVsYXRlUHJvamVjdFNlbGVjdCgpO1xufVxuXG5leHBvcnQgeyBidWlsZFNpdGUsIG1haW5MaXN0VGFzaywgc2lkZWJhclByb2plY3QsIHByb2plY3RFZGl0QnRuIH07IiwiaW1wb3J0ICogYXMgcCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgKiBhcyB0IGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCAqIGFzIGRvbSBmcm9tIFwiLi9ET01zY3JpcHRzXCI7XG5mdW5jdGlvbiBjcmVhdGVkUHJvamVjdEV2ZW50cyhwcm9qZWN0KXtcbiAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsKCkgPT4ge1xuICAgICAgICBwLnNob3dQcm9qZWN0RWRpdEljb24ocHJvamVjdCk7XG4gICAgfSk7XG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCgpID0+IHtcbiAgICAgICAgcC5oaWRlUHJvamVjdEVkaXRJY29uKHByb2plY3QpO1xuICAgIH0pO1xuICAgIGNvbnN0IGljb249cHJvamVjdC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtLWVkaXRfaWNvblwiKTtcbiAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpID0+IHtcbiAgICAgICAgcC5zaG93UHJvamVjdEVkaXRNZW51KGljb24pO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gY3JlYXRlRXZlbnRzKCkge1xuICAgIC8vYWRkIGEgcHJvamVjdCBldmVudHNcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtLWFkZFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBwLnNob3dBZGRQcm9qZWN0KCk7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXdwcm9qZWN0LS1mb3JtX3N1Ym1pdF9hZGRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcC5hZGRQcm9qZWN0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3cHJvamVjdC0tZm9ybV9uYW1lIGlucHV0XCIpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3cHJvamVjdC0tZm9ybV9jb2xvciBpbnB1dFwiKS52YWx1ZSk7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXdwcm9qZWN0LS1mb3JtX3N1Ym1pdF9jYW5jZWxcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcC5jYW5jZWxBZGRQcm9qZWN0KCk7XG4gICAgfSk7XG5cbiAgICAvL3Byb2plY3QgdWlcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXItLWhlYWRlcl9idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcC50b2dnbGVQcm9qZWN0TGlzdCgpO1xuICAgIH0pO1xuICAgIC8vZGVsZXRlIHByb2plY3QgXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LS1tZW51X2RlbGV0ZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xuICAgICAgICBwLmRlbGV0ZVByb2plY3QoKTtcbiAgICB9KTtcbiAgICAvL3Byb2plY3QgbWVudVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC0tbWVudW91dGVyX2hpZGRlblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RcIikuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICBwLmhpZGVQcm9qZWN0RWRpdEljb24oZWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICBwLmhpZGVQcm9qZWN0RWRpdE1lbnUoKTtcbiAgICB9KTtcbiAgICAvL2FkZCB0YXNrIGV2ZW50c1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay0tYWRkXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHQuc2hvd0FkZFRhc2soKTtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stLW5ld19zdWJtaXRfYWRkXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHQuYWRkVGFzayhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tfbmFtZVwiKS52YWx1ZSxkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tfcHJvamVjdFwiKS52YWx1ZSk7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLS1uZXdfc3VibWl0X2NhbmNlbFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0LmNhbmNlbEFkZFRhc2soKTtcbiAgICB9KTtcbn1cbmV4cG9ydCB7Y3JlYXRlRXZlbnRzLGNyZWF0ZWRQcm9qZWN0RXZlbnRzfTsiLCJpbXBvcnQgeyBzaWRlYmFyUHJvamVjdCB9IGZyb20gXCIuL0RPTXNjcmlwdHMuanNcIjtcbmltcG9ydCAqIGFzIHQgZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0IHsgY3JlYXRlZFByb2plY3RFdmVudHMgfSBmcm9tIFwiLi9ldmVudHNTY3JpcHRzLmpzXCI7XG5jb25zdCBwcm9qZWN0PShuYW1lLGNvbG9yKT0+e1xuICAgIGxldCBpZD1EYXRlLm5vdygpLnRvU3RyaW5nKDM2KSArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpO1xuICAgIGxldCBjb3VudD0wO1xuICAgIHJldHVybiB7XG4gICAgICAgIGlkLFxuICAgICAgICBuYW1lLFxuICAgICAgICBjb2xvcixcbiAgICAgICAgY291bnQsXG4gICAgfVxufVxuZnVuY3Rpb24gc2hvd0FkZFByb2plY3QoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXdwcm9qZWN0X2hpZGRlblwiKS5pZCA9IFwibmV3cHJvamVjdFwiO1xufVxuZnVuY3Rpb24gYWRkUHJvamVjdChuYW1lVmFsdWUsY29sb3JWYWx1ZSkge1xuICAgIGxldCBjdXJyZW50UHJvamVjdD1wcm9qZWN0KG5hbWVWYWx1ZSxjb2xvclZhbHVlKTtcbiAgICBsZXQgb2JqPUpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2RvTGlzdFwiKSk7XG4gICAgb2JqLnByb2plY3QucHVzaChjdXJyZW50UHJvamVjdCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvTGlzdFwiLEpTT04uc3RyaW5naWZ5KG9iaikpO1xuICAgIHBvcHVsYXRlUHJvamVjdExpc3QoKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ld3Byb2plY3RcIikuaWQgPSBcIm5ld3Byb2plY3RfaGlkZGVuXCI7XG4gICAgdC5wb3B1bGF0ZVByb2plY3RTZWxlY3QoKTtcbn1cbmZ1bmN0aW9uIHBvcHVsYXRlUHJvamVjdExpc3QoKXtcbiAgICBsZXQgcHJvamVjdExpc3Q9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNzaWRlYmFyLS1saXN0IC5wcm9qZWN0XCIpO1xuICAgIC8vZGVsZXRlIG9sZCBsaXN0XG4gICAgcHJvamVjdExpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgIH0pO1xuICAgIC8vYWRkIG5ldyBsaXN0XG4gICAgbGV0IG9iaj1KU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb0xpc3RcIikpO1xuICAgIGZvcihsZXQgaT0wO2k8b2JqLnByb2plY3QubGVuZ3RoO2krKyl7XG4gICAgICAgIGxldCBpZFZhbHVlPW9iai5wcm9qZWN0W2ldLmlkO1xuICAgICAgICBsZXQgbmFtZVZhbHVlPW9iai5wcm9qZWN0W2ldLm5hbWU7XG4gICAgICAgIGxldCBjb2xvclZhbHVlPW9iai5wcm9qZWN0W2ldLmNvbG9yO1xuICAgICAgICBsZXQgY291bnRWYWx1ZT1vYmoucHJvamVjdFtpXS5jb3VudDtcbiAgICAgICAgY29uc3QgcHJvamVjdD1zaWRlYmFyUHJvamVjdChpZFZhbHVlLG5hbWVWYWx1ZSxjb2xvclZhbHVlLGNvdW50VmFsdWUpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtLWFkZFwiKS5iZWZvcmUocHJvamVjdCk7XG4gICAgICAgIGNyZWF0ZWRQcm9qZWN0RXZlbnRzKHByb2plY3QpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNhbmNlbEFkZFByb2plY3QoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXdwcm9qZWN0XCIpLmlkID0gXCJuZXdwcm9qZWN0X2hpZGRlblwiO1xufVxuZnVuY3Rpb24gc2hvd1Byb2plY3RFZGl0TWVudShlbGVtZW50KXtcbiAgICBsZXQgZWxlbWVudFBvcz1lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGxldCBib2R5UG9zPWRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LS1tZW51b3V0ZXJfaGlkZGVuXCIpLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LS1tZW51b3V0ZXJcIik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LS1tZW51X2RlbGV0ZVwiKS5kYXRhc2V0LmlkPWAke2VsZW1lbnQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkfWA7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LS1tZW51XCIpLnN0eWxlLmxlZnQ9YCR7ZWxlbWVudFBvcy5sZWZ0KzItYm9keVBvcy5sZWZ0fXB4YDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtLW1lbnVcIikuc3R5bGUudG9wPWAke2VsZW1lbnRQb3MuYm90dG9tKzItYm9keVBvcy50b3B9cHhgO1xufVxuZnVuY3Rpb24gaGlkZVByb2plY3RFZGl0TWVudSgpe1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC0tbWVudW91dGVyX2hpZGRlblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwicHJvamVjdC0tbWVudW91dGVyXCIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC0tbWVudV9kZWxldGVcIikucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1pZFwiKTtcbn1cblxuZnVuY3Rpb24gc2hvd1Byb2plY3RFZGl0SWNvbihlbGVtZW50KXtcbiAgICBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC0tZWRpdF9oaWRkZW5cIikuY2xhc3NMaXN0LmFkZChcInByb2plY3QtLWVkaXRcIik7XG59XG5mdW5jdGlvbiBoaWRlUHJvamVjdEVkaXRJY29uKGVsZW1lbnQpe1xuICAgIGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LS1lZGl0X2hpZGRlblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwicHJvamVjdC0tZWRpdFwiKTtcbn1cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoKXtcbiAgICBsZXQgaWQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LS1tZW51X2RlbGV0ZVwiKS5kYXRhc2V0LmlkO1xuICAgIGxldCBvYmo9SlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9MaXN0XCIpKTtcbiAgICBsZXQgbmV3UHJvamVjdD1vYmoucHJvamVjdC5maWx0ZXIoKGVsZW1lbnQsIGluZGV4KT0+e1xuICAgICAgICByZXR1cm4gZWxlbWVudC5pZCE9aWQ7XG4gICAgfSk7XG4gICAgb2JqLnByb2plY3Q9bmV3UHJvamVjdDtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9MaXN0XCIsSlNPTi5zdHJpbmdpZnkob2JqKSk7XG4gICAgdC5kZWxldGVUYXNrcyhpZCk7XG4gICAgcG9wdWxhdGVQcm9qZWN0TGlzdCgpO1xufVxuZnVuY3Rpb24gdG9nZ2xlUHJvamVjdExpc3QoKSB7XG4gICAgY29uc3Qgc2VsZWN0T25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaWRlYmFyLS1saXN0XCIpO1xuICAgIGNvbnN0IHNlbGVjdFR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2lkZWJhci0tbGlzdF9oaWRkZW5cIik7XG4gICAgbGV0IG9iaj1KU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJlZmVyZW5jZXNcIikpO1xuICAgIGlmIChzZWxlY3RPbmUpIHtcbiAgICAgICAgb2JqLnNpZGViYXI9e2xpc3RTdGF0ZTpmYWxzZX07XG4gICAgICAgIHNlbGVjdE9uZS5pZCA9IFwic2lkZWJhci0tbGlzdF9oaWRkZW5cIjtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyLS1oZWFkZXJfYnRuX2ljb25fZG93blwiKS5jbGFzc0xpc3QucmVwbGFjZShcInNpZGViYXItLWhlYWRlcl9idG5faWNvbl9kb3duXCIsIFwic2lkZWJhci0taGVhZGVyX2J0bl9pY29uX3VwXCIpO1xuICAgIH0gZWxzZSBpZiAoc2VsZWN0VHdvKSB7XG4gICAgICAgIG9iai5zaWRlYmFyPXtsaXN0U3RhdGU6dHJ1ZX07XG4gICAgICAgIHNlbGVjdFR3by5pZCA9IFwic2lkZWJhci0tbGlzdFwiO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXItLWhlYWRlcl9idG5faWNvbl91cFwiKS5jbGFzc0xpc3QucmVwbGFjZShcInNpZGViYXItLWhlYWRlcl9idG5faWNvbl91cFwiLCBcInNpZGViYXItLWhlYWRlcl9idG5faWNvbl9kb3duXCIpO1xuICAgIH1cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByZWZlcmVuY2VzXCIsSlNPTi5zdHJpbmdpZnkob2JqKSk7XG59XG5leHBvcnQge2RlbGV0ZVByb2plY3QsaGlkZVByb2plY3RFZGl0SWNvbixzaG93UHJvamVjdEVkaXRJY29uLGhpZGVQcm9qZWN0RWRpdE1lbnUsc2hvd1Byb2plY3RFZGl0TWVudSwgcHJvamVjdCwgc2hvd0FkZFByb2plY3QsIGFkZFByb2plY3QsIGNhbmNlbEFkZFByb2plY3QsIHRvZ2dsZVByb2plY3RMaXN0LCBwb3B1bGF0ZVByb2plY3RMaXN0IH07XG4iLCJpbXBvcnQgeyBtYWluTGlzdFRhc2sgfSBmcm9tIFwiLi9ET01zY3JpcHRzLmpzXCI7XG5pbXBvcnQgKiBhcyBwIGZyb20gXCIuL3Byb2plY3RcIjtcbmNvbnN0IHRhc2sgPSAobmFtZSwgcHJvamVjdElkKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgcHJvamVjdElkLFxuICAgIH07XG59XG5mdW5jdGlvbiBzaG93QWRkVGFzaygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stLW5ld19oaWRkZW5cIikuaWQgPSBcInRhc2stLW5ld1wiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay0tYWRkXCIpLmNsYXNzTGlzdC5yZXBsYWNlKFwidGFzay0tYWRkXCIsIFwidGFzay0tYWRkX2hpZGRlblwiKTtcbn1cbmZ1bmN0aW9uIGFkZFRhc2sobmFtZVZhbHVlLCBwcm9qZWN0VmFsdWUpIHtcbiAgICBsZXQgb2JqID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9MaXN0XCIpKTtcbiAgICBvYmoudGFzay5wdXNoKHRhc2sobmFtZVZhbHVlLCBvYmoucHJvamVjdFtwcm9qZWN0VmFsdWVdLmlkKSk7XG4gICAgb2JqLnByb2plY3RbcHJvamVjdFZhbHVlXS5jb3VudCsrO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIgKyBvYmoucHJvamVjdFtwcm9qZWN0VmFsdWVdLmlkICsgXCIgLnByb2plY3QtLWNvdW50XCIpLnRleHRDb250ZW50ID0gb2JqLnByb2plY3RbcHJvamVjdFZhbHVlXS5jb3VudDtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9MaXN0XCIsIEpTT04uc3RyaW5naWZ5KG9iaikpO1xuICAgIHBvcHVsYXRlVGFza0xpc3QoKTtcbn1cbmZ1bmN0aW9uIHBvcHVsYXRlVGFza0xpc3QoKSB7XG4gICAgbGV0IHRhc2tMaXN0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjbWFpbi0tbGlzdCAudGFza1wiKTtcbiAgICBsZXQgb2JqID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9MaXN0XCIpKTtcbiAgICBsZXQgcHJvamVjdE5hbWVWYWx1ZSwgcHJvamVjdENvbG9yVmFsdWUsIG5hbWVWYWx1ZTtcbiAgICAvL2RlbGV0ZSBvbGQgbGlzdFxuICAgIHRhc2tMaXN0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICB9KTtcbiAgICAvL3BvcHVsYXRlIHRhc2sgbGlzdFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqLnRhc2subGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbmFtZVZhbHVlID0gb2JqLnRhc2tbaV0ubmFtZTtcbiAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBvYmoucHJvamVjdC5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgaWYgKG9iai50YXNrW2ldLnByb2plY3RJZCA9PSBvYmoucHJvamVjdFtrXS5pZCkge1xuICAgICAgICAgICAgICAgIHByb2plY3ROYW1lVmFsdWUgPSBvYmoucHJvamVjdFtrXS5uYW1lO1xuICAgICAgICAgICAgICAgIHByb2plY3RDb2xvclZhbHVlID0gb2JqLnByb2plY3Rba10uY29sb3I7XG4gICAgICAgICAgICAgICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay0tYWRkXCIpXG4gICAgICAgICAgICAgICAgPy5iZWZvcmUobWFpbkxpc3RUYXNrKG5hbWVWYWx1ZSwgcHJvamVjdE5hbWVWYWx1ZSwgcHJvamVjdENvbG9yVmFsdWUpKSkgfHwgXG4gICAgICAgICAgICAgICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay0tYWRkX2hpZGRlblwiKVxuICAgICAgICAgICAgICAgID8uYmVmb3JlKG1haW5MaXN0VGFzayhuYW1lVmFsdWUsIHByb2plY3ROYW1lVmFsdWUsIHByb2plY3RDb2xvclZhbHVlKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gcG9wdWxhdGVQcm9qZWN0U2VsZWN0KCkge1xuICAgIGxldCBwcm9qZWN0c0FycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9MaXN0XCIpKS5wcm9qZWN0O1xuICAgIGxldCBzZWxlY3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrX3Byb2plY3RcIik7XG4gICAgLy9pZiBwcm9qZWN0IGFycmF5IGlzIG5vdCBlbXB0eSByZXBvcHVsYXRlIHNlbGVjdCBlbGVtZW50XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJvamVjdHNBcnJheSkgJiYgcHJvamVjdHNBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vcmVtb3ZlIG9sZCBvcHRpb25zXG4gICAgICAgIHdoaWxlIChzZWxlY3RFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHNlbGVjdEVsZW1lbnQucmVtb3ZlQ2hpbGQoc2VsZWN0RWxlbWVudC5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICAvL2FkZCBuZXcgb3B0aW9uc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHBPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgcE9wdGlvbi52YWx1ZSA9IGk7XG4gICAgICAgICAgICBwT3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdHNBcnJheVtpXS5uYW1lO1xuICAgICAgICAgICAgc2VsZWN0RWxlbWVudC5hcHBlbmRDaGlsZChwT3B0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGRlbGV0ZVRhc2tzKHRhc2tJZCl7XG4gICAgbGV0IG9iaj1KU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb0xpc3RcIikpO1xuICAgIGxldCBuZXdUYXNrPW9iai50YXNrLmZpbHRlcigoZWxlbWVudCwgaW5kZXgpPT57XG4gICAgICAgIHJldHVybiBlbGVtZW50LnByb2plY3RJZCE9dGFza0lkO1xuICAgIH0pO1xuICAgIG9iai50YXNrPW5ld1Rhc2s7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvTGlzdFwiLEpTT04uc3RyaW5naWZ5KG9iaikpO1xuICAgIHBvcHVsYXRlVGFza0xpc3QoKTtcbn1cbmZ1bmN0aW9uIGNhbmNlbEFkZFRhc2soKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLS1uZXdcIikuaWQgPSBcInRhc2stLW5ld19oaWRkZW5cIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stLWFkZF9oaWRkZW5cIikuY2xhc3NMaXN0LnJlcGxhY2UoXCJ0YXNrLS1hZGRfaGlkZGVuXCIsIFwidGFzay0tYWRkXCIpO1xufVxuZXhwb3J0IHsgZGVsZXRlVGFza3MsIHNob3dBZGRUYXNrLCBhZGRUYXNrLCBjYW5jZWxBZGRUYXNrLCBwb3B1bGF0ZVRhc2tMaXN0LCBwb3B1bGF0ZVByb2plY3RTZWxlY3QgfTtcblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGJ1aWxkU2l0ZSB9IGZyb20gXCIuL0RPTXNjcmlwdHNcIjtcbmltcG9ydCB7IGNyZWF0ZUV2ZW50cyB9IGZyb20gXCIuL2V2ZW50c1NjcmlwdHNcIjtcbmJ1aWxkU2l0ZSgpO1xuY3JlYXRlRXZlbnRzKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9