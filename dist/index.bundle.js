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
    sidebarHeadBtnIcon.className = "sidebar--header_btn_icon_down";
    sidebarHeadBtn.appendChild(sidebarHeadBtnIcon);
    sidebarHeadProject.appendChild(sidebarHeadBtn);
    sidebarGroup.appendChild(sidebarHeadProject);

    const sidebarList = document.createElement("div");
    sidebarList.id = "sidebar--list";
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
        localStorage.setItem("todoList", JSON.stringify(todoList));
    }
}
function buildSite() {
    const content = document.createElement("div");
    content.id = "content";
    content.append(header(), sidebar(), main(), footer(), addProject(),projectEditMenu());
    document.body.appendChild(content);
    createStorage();
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
        task.showAddTask();
    });
    document.querySelector("#task--new_submit_add").addEventListener("click", () => {
        task.addTask(document.querySelector("#task_name").value,document.querySelector("#task_project").value);
    });
    document.querySelector("#task--new_submit_cancel").addEventListener("click", () => {
        task.cancelAddTask();
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
};
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
    populateProjectList();
}
function toggleProjectList() {
    const selectOne = document.querySelector("#sidebar--list");
    const selectTwo = document.querySelector("#sidebar--list_hidden");
    if (selectOne) {
        selectOne.id = "sidebar--list_hidden";
        document.querySelector(".sidebar--header_btn_icon_down").classList.replace("sidebar--header_btn_icon_down", "sidebar--header_btn_icon_up");
    } else if (selectTwo) {
        selectTwo.id = "sidebar--list";
        document.querySelector(".sidebar--header_btn_icon_up").classList.replace("sidebar--header_btn_icon_up", "sidebar--header_btn_icon_down");
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQStCO0FBQ0g7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5REFBcUI7QUFDekIsSUFBSSxtREFBa0I7QUFDdEIsSUFBSSx3REFBdUI7QUFDM0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbFMrQjtBQUNIO0FBQ1E7QUFDcEM7QUFDQTtBQUNBLFFBQVEseURBQXFCO0FBQzdCLEtBQUs7QUFDTDtBQUNBLFFBQVEseURBQXFCO0FBQzdCLEtBQUs7QUFDTDtBQUNBO0FBQ0EsUUFBUSx5REFBcUI7QUFDN0IsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvREFBZ0I7QUFDeEIsS0FBSztBQUNMO0FBQ0EsUUFBUSxnREFBWTtBQUNwQjtBQUNBLEtBQUs7QUFDTDtBQUNBLFFBQVEsc0RBQWtCO0FBQzFCLEtBQUs7O0FBRUw7QUFDQTtBQUNBLFFBQVEsdURBQW1CO0FBQzNCLEtBQUs7QUFDTDtBQUNBO0FBQ0EsUUFBUSxtREFBZTtBQUN2QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsYUFBYSx5REFBcUI7QUFDbEMsU0FBUztBQUNULFFBQVEseURBQXFCO0FBQzdCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRpRDtBQUNyQjtBQUM4QjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx3REFBdUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxnQkFBZ0IscUJBQXFCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDhEQUFjO0FBQ3BDO0FBQ0EsUUFBUSx1RUFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFLGlDQUFpQztBQUNuRywyREFBMkQsK0JBQStCO0FBQzFGLDBEQUEwRCxnQ0FBZ0M7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ3VNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RnhKO0FBQ2hCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esb0JBQW9CLHFCQUFxQjtBQUN6QztBQUNBLHdCQUF3Qix3QkFBd0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNERBQVk7QUFDckM7QUFDQSx5QkFBeUIsNERBQVk7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwwQkFBMEI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN3Rjs7Ozs7Ozs7VUNqRXhGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05xQjtBQUNvQjtBQUNNO0FBQy9DLHNEQUFTO0FBQ1QsNERBQVksRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9ET01zY3JpcHRzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2V2ZW50c1NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0ICogYXMgcCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgKiBhcyB0IGZyb20gXCIuL3Rhc2tcIjtcbmZ1bmN0aW9uIGhlYWRlcigpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5pZCA9IFwiaGVhZGVyXCI7XG4gICAgZGl2LnRleHRDb250ZW50ID0gXCJUb2RvIExpc3RcIjtcbiAgICByZXR1cm4gZGl2O1xufVxuZnVuY3Rpb24gc2lkZWJhcigpIHtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzaWRlYmFyLmlkID0gXCJzaWRlYmFyXCI7XG5cbiAgICBjb25zdCBzaWRlYmFyR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNpZGViYXJHcm91cC5pZCA9IFwic2lkZWJhci0tZ3JvdXBcIjtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHNpZGViYXJHcm91cCk7XG4gICAgc2lkZWJhckdyb3VwLmFwcGVuZENoaWxkKHNpZGViYXJIZWFkZXIoXCJNeSBMaXN0XCIpKTtcbiAgICBzaWRlYmFyR3JvdXAuYXBwZW5kQ2hpbGQoc2lkZWJhckhlYWRlcihcIlRvZGF5XCIpKTtcbiAgICBzaWRlYmFyR3JvdXAuYXBwZW5kQ2hpbGQoc2lkZWJhckhlYWRlcihcIk5leHQgNyBEYXlzXCIpKTtcblxuICAgIGNvbnN0IHNpZGViYXJIZWFkUHJvamVjdCA9IHNpZGViYXJIZWFkZXIoXCJQcm9qZWN0c1wiKTtcbiAgICBjb25zdCBzaWRlYmFySGVhZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2lkZWJhckhlYWRCdG4uY2xhc3NOYW1lID0gXCJzaWRlYmFyLS1oZWFkZXJfYnRuXCI7XG5cbiAgICBjb25zdCBzaWRlYmFySGVhZEJ0bkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBzaWRlYmFySGVhZEJ0bkljb24uY2xhc3NOYW1lID0gXCJzaWRlYmFyLS1oZWFkZXJfYnRuX2ljb25fZG93blwiO1xuICAgIHNpZGViYXJIZWFkQnRuLmFwcGVuZENoaWxkKHNpZGViYXJIZWFkQnRuSWNvbik7XG4gICAgc2lkZWJhckhlYWRQcm9qZWN0LmFwcGVuZENoaWxkKHNpZGViYXJIZWFkQnRuKTtcbiAgICBzaWRlYmFyR3JvdXAuYXBwZW5kQ2hpbGQoc2lkZWJhckhlYWRQcm9qZWN0KTtcblxuICAgIGNvbnN0IHNpZGViYXJMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzaWRlYmFyTGlzdC5pZCA9IFwic2lkZWJhci0tbGlzdFwiO1xuICAgIHNpZGViYXJHcm91cC5hcHBlbmRDaGlsZChzaWRlYmFyTGlzdCk7XG5cbiAgICBjb25zdCBwcm9qZWN0QWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0QWRkLmNsYXNzTmFtZSA9IFwicHJvamVjdC0tYWRkXCI7XG4gICAgc2lkZWJhckxpc3QuYXBwZW5kQ2hpbGQocHJvamVjdEFkZCk7XG5cbiAgICBjb25zdCBwcm9qZWN0QWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0QWRkQnRuLmNsYXNzTmFtZSA9IFwicHJvamVjdC0tYWRkX2J0blwiO1xuICAgIHByb2plY3RBZGQuYXBwZW5kQ2hpbGQocHJvamVjdEFkZEJ0bik7XG5cbiAgICBjb25zdCBwcm9qZWN0QWRkQnRuSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHByb2plY3RBZGRCdG5JY29uLmNsYXNzTmFtZSA9IFwicHJvamVjdC0tYWRkX2J0bl9pY29uXCI7XG4gICAgcHJvamVjdEFkZEJ0bi5hcHBlbmRDaGlsZChwcm9qZWN0QWRkQnRuSWNvbik7XG5cbiAgICBjb25zdCBwcm9qZWN0QWRkTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdEFkZE5hbWUuY2xhc3NOYW1lID0gXCJwcm9qZWN0LS1hZGRfbmFtZVwiO1xuICAgIHByb2plY3RBZGROYW1lLnRleHRDb250ZW50ID0gXCJBZGQgUHJvamVjdFwiO1xuICAgIHByb2plY3RBZGQuYXBwZW5kQ2hpbGQocHJvamVjdEFkZE5hbWUpO1xuICAgIHJldHVybiBzaWRlYmFyO1xufVxuZnVuY3Rpb24gc2lkZWJhckhlYWRlcih0Q29udGVudCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2LmNsYXNzTmFtZSA9IFwic2lkZWJhci0taGVhZGVyXCI7XG4gICAgY29uc3QgZGl2Q2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdkNoaWxkLmNsYXNzTmFtZSA9IFwic2lkZWJhci0taGVhZGVyX3RpdGxlXCI7XG4gICAgZGl2Q2hpbGQudGV4dENvbnRlbnQgPSB0Q29udGVudDtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZGl2Q2hpbGQpO1xuICAgIHJldHVybiBkaXY7XG59XG5mdW5jdGlvbiBzaWRlYmFyUHJvamVjdCh0SWQsdENvbnRlbnQsdENvbG9yLHRDb3VudCkge1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3QuaWQgPSB0SWQ7XG4gICAgcHJvamVjdC5jbGFzc05hbWUgPSBcInByb2plY3RcIjtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdE5hbWUuY2xhc3NOYW1lID0gXCJwcm9qZWN0LS1uYW1lXCI7XG4gICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSB0Q29udGVudDtcbiAgICBwcm9qZWN0TmFtZS5zdHlsZS5jb2xvcj0gdENvbG9yO1xuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuICAgIGNvbnN0IHByb2plY3RDb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdENvdW50LmNsYXNzTmFtZSA9IFwicHJvamVjdC0tY291bnRcIjtcbiAgICBwcm9qZWN0Q291bnQudGV4dENvbnRlbnQgPSB0Q291bnQ7XG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0Q291bnQpO1xuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdEVkaXRCdG4oKSk7XG4gICAgcmV0dXJuIHByb2plY3Q7XG59XG5mdW5jdGlvbiBtYWluKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW4uaWQgPSBcIm1haW5cIjtcblxuICAgIGNvbnN0IG1haW5Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbkdyb3VwLmlkID0gXCJtYWluLS1ncm91cFwiO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQobWFpbkdyb3VwKTtcblxuICAgIGNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5IZWFkZXIuY2xhc3NOYW1lID0gXCJtYWluLS1oZWFkZXJcIjtcbiAgICBjb25zdCBtYWluSGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5IZWFkZXJUaXRsZS5jbGFzc05hbWUgPSBcIm1haW4tLWhlYWRlcl90aXRsZVwiO1xuICAgIG1haW5IZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcbiAgICBtYWluSGVhZGVyLmFwcGVuZENoaWxkKG1haW5IZWFkZXJUaXRsZSk7XG4gICAgbWFpbkdyb3VwLmFwcGVuZENoaWxkKG1haW5IZWFkZXIpO1xuXG4gICAgY29uc3QgbWFpbkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5MaXN0LmlkID0gXCJtYWluLS1saXN0XCI7XG4gICAgbWFpbkdyb3VwLmFwcGVuZENoaWxkKG1haW5MaXN0KTtcblxuICAgIGNvbnN0IHRhc2tBZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tBZGQuY2xhc3NOYW1lID0gXCJ0YXNrLS1hZGRcIjtcbiAgICBtYWluTGlzdC5hcHBlbmRDaGlsZCh0YXNrQWRkKTtcblxuICAgIGNvbnN0IHRhc2tBZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tBZGRCdG4uY2xhc3NOYW1lID0gXCJ0YXNrLS1hZGRfYnRuXCI7XG4gICAgdGFza0FkZC5hcHBlbmRDaGlsZCh0YXNrQWRkQnRuKTtcblxuICAgIGNvbnN0IHRhc2tBZGRCdG5JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgdGFza0FkZEJ0bkljb24uY2xhc3NOYW1lID0gXCJ0YXNrLS1hZGRfYnRuX2ljb25cIjtcbiAgICB0YXNrQWRkQnRuLmFwcGVuZENoaWxkKHRhc2tBZGRCdG5JY29uKTtcblxuICAgIGNvbnN0IHRhc2tBZGROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrQWRkTmFtZS5jbGFzc05hbWUgPSBcInRhc2stLWFkZF9uYW1lXCI7XG4gICAgdGFza0FkZE5hbWUudGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrXCI7XG4gICAgdGFza0FkZC5hcHBlbmRDaGlsZCh0YXNrQWRkTmFtZSk7XG5cbiAgICBtYWluTGlzdC5hcHBlbmQoYWRkVGFzaygpKTtcbiAgICByZXR1cm4gbWFpbjtcbn1cbmZ1bmN0aW9uIG1haW5MaXN0VGFzayh0Q29udGVudCx0UHJvamVjdCx0Q29sb3IpIHtcbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrLmNsYXNzTmFtZSA9IFwidGFza1wiO1xuXG4gICAgY29uc3QgdGFza0lucHV0T3V0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tJbnB1dE91dGVyLmNsYXNzTmFtZSA9IFwidGFzay0taW5wdXRvdXRlclwiO1xuICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza0lucHV0T3V0ZXIpO1xuXG4gICAgY29uc3QgdGFza0NoZWNrYm94SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgT2JqZWN0LmFzc2lnbih0YXNrQ2hlY2tib3hJbnB1dCwge1xuICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgIG5hbWU6IFwidGFza19zdGF0ZVwiLFxuICAgICAgICBpZDogXCJ0YXNrX3N0YXRlXCJcbiAgICB9KTtcbiAgICB0YXNrSW5wdXRPdXRlci5hcHBlbmRDaGlsZCh0YXNrQ2hlY2tib3hJbnB1dCk7XG5cbiAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza05hbWUuY2xhc3NOYW1lID0gXCJ0YXNrLS1uYW1lXCI7XG4gICAgdGFza05hbWUudGV4dENvbnRlbnQgPSB0Q29udGVudDtcbiAgICB0YXNrLmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcblxuICAgIGNvbnN0IHRhc2tOYW1lX3Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tOYW1lX3Byb2plY3QuY2xhc3NOYW1lID0gXCJ0YXNrLS1uYW1lX3Byb2plY3RcIjtcbiAgICB0YXNrTmFtZV9wcm9qZWN0LnRleHRDb250ZW50ID0gdFByb2plY3Q7XG4gICAgdGFza05hbWVfcHJvamVjdC5zdHlsZS5jb2xvcj0gdENvbG9yO1xuICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza05hbWVfcHJvamVjdCk7XG4gICAgcmV0dXJuIHRhc2s7XG59XG5mdW5jdGlvbiBmb290ZXIoKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuaWQgPSBcImZvb3RlclwiO1xuICAgIGRpdi50ZXh0Q29udGVudCA9IFwiQ29weXJpZ2h0IMKpIDIwMjIgUmVkYVwiO1xuICAgIHJldHVybiBkaXY7XG59XG5mdW5jdGlvbiBhZGRQcm9qZWN0KCkge1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1Byb2plY3QuaWQgPSBcIm5ld3Byb2plY3RfaGlkZGVuXCI7XG4gICAgY29uc3QgbmV3UHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdQcm9qZWN0VGl0bGUuaWQgPSBcIm5ld3Byb2plY3QtLXRpdGxlXCI7XG4gICAgbmV3UHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gXCJBZGQgUHJvamVjdFwiO1xuICAgIG5ld1Byb2plY3QuYXBwZW5kQ2hpbGQobmV3UHJvamVjdFRpdGxlKTtcblxuICAgIGNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdQcm9qZWN0Rm9ybS5pZCA9IFwibmV3cHJvamVjdC0tZm9ybVwiO1xuICAgIG5ld1Byb2plY3QuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEZvcm0pO1xuXG4gICAgY29uc3QgbmV3UHJvamVjdEZvcm1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdQcm9qZWN0Rm9ybU5hbWUuaWQgPSBcIm5ld3Byb2plY3QtLWZvcm1fbmFtZVwiO1xuICAgIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKG5ld1Byb2plY3RGb3JtTmFtZSk7XG4gICAgY29uc3QgbmV3UHJvamVjdEZvcm1Db2xvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3UHJvamVjdEZvcm1Db2xvci5pZCA9IFwibmV3cHJvamVjdC0tZm9ybV9jb2xvclwiO1xuICAgIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKG5ld1Byb2plY3RGb3JtQ29sb3IpO1xuXG4gICAgY29uc3QgcHJvamVjdE5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBPYmplY3QuYXNzaWduKHByb2plY3ROYW1lTGFiZWwsIHtcbiAgICAgICAgZm9yOiBcInByb2plY3RfbmFtZVwiLFxuICAgICAgICB0ZXh0Q29udGVudDogXCJOYW1lXCJcbiAgICB9KTtcbiAgICBuZXdQcm9qZWN0Rm9ybU5hbWUuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVMYWJlbCk7XG5cbiAgICBjb25zdCBwcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIE9iamVjdC5hc3NpZ24ocHJvamVjdE5hbWVJbnB1dCwge1xuICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgbmFtZTogXCJwcm9qZWN0X25hbWVcIixcbiAgICAgICAgaWQ6IFwicHJvamVjdF9uYW1lXCJcbiAgICB9KTtcbiAgICBuZXdQcm9qZWN0Rm9ybU5hbWUuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVJbnB1dCk7XG5cbiAgICBjb25zdCBwcm9qZWN0Q29sb3JMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBPYmplY3QuYXNzaWduKHByb2plY3RDb2xvckxhYmVsLCB7XG4gICAgICAgIGZvcjogXCJwcm9qZWN0X2NvbG9yXCIsXG4gICAgICAgIHRleHRDb250ZW50OiBcIkNvbG9yXCJcbiAgICB9KTtcbiAgICBuZXdQcm9qZWN0Rm9ybUNvbG9yLmFwcGVuZENoaWxkKHByb2plY3RDb2xvckxhYmVsKTtcblxuICAgIGNvbnN0IHByb2plY3RDb2xvcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIE9iamVjdC5hc3NpZ24ocHJvamVjdENvbG9ySW5wdXQsIHtcbiAgICAgICAgdHlwZTogXCJjb2xvclwiLFxuICAgICAgICBuYW1lOiBcInByb2plY3RfY29sb3JcIixcbiAgICAgICAgaWQ6IFwicHJvamVjdF9jb2xvclwiXG4gICAgfSk7XG4gICAgbmV3UHJvamVjdEZvcm1Db2xvci5hcHBlbmRDaGlsZChwcm9qZWN0Q29sb3JJbnB1dCk7XG5cbiAgICBjb25zdCBuZXdQcm9qZWN0Rm9ybVN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3UHJvamVjdEZvcm1TdWJtaXQuaWQgPSBcIm5ld3Byb2plY3QtLWZvcm1fc3VibWl0XCI7XG4gICAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQobmV3UHJvamVjdEZvcm1TdWJtaXQpO1xuXG4gICAgY29uc3QgbmV3UHJvamVjdEZvcm1TdWJtaXRBZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1Byb2plY3RGb3JtU3VibWl0QWRkLmlkID0gXCJuZXdwcm9qZWN0LS1mb3JtX3N1Ym1pdF9hZGRcIjtcbiAgICBuZXdQcm9qZWN0Rm9ybVN1Ym1pdEFkZC50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG4gICAgbmV3UHJvamVjdEZvcm1TdWJtaXQuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEZvcm1TdWJtaXRBZGQpO1xuICAgIGNvbnN0IG5ld1Byb2plY3RGb3JtU3VibWl0Q2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdQcm9qZWN0Rm9ybVN1Ym1pdENhbmNlbC5pZCA9IFwibmV3cHJvamVjdC0tZm9ybV9zdWJtaXRfY2FuY2VsXCI7XG4gICAgbmV3UHJvamVjdEZvcm1TdWJtaXRDYW5jZWwudGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAgIG5ld1Byb2plY3RGb3JtU3VibWl0LmFwcGVuZENoaWxkKG5ld1Byb2plY3RGb3JtU3VibWl0Q2FuY2VsKTtcbiAgICByZXR1cm4gbmV3UHJvamVjdDtcbn1cbmZ1bmN0aW9uIHByb2plY3RFZGl0QnRuKCl7XG4gICAgY29uc3QgcHJvamVjdEVkaXQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0RWRpdC5jbGFzc05hbWU9XCJwcm9qZWN0LS1lZGl0X2hpZGRlblwiO1xuICAgIFxuICAgIGNvbnN0IHByb2plY3RFZGl0SWNvbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBwcm9qZWN0RWRpdEljb24uY2xhc3NOYW1lPVwicHJvamVjdC0tZWRpdF9pY29uXCI7XG4gICAgcHJvamVjdEVkaXQuYXBwZW5kQ2hpbGQocHJvamVjdEVkaXRJY29uKTtcbiAgICByZXR1cm4gcHJvamVjdEVkaXQ7XG59XG5mdW5jdGlvbiBwcm9qZWN0RWRpdE1lbnUoKXtcbiAgICBjb25zdCBlZGl0TWVudU91dGVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZWRpdE1lbnVPdXRlci5jbGFzc05hbWU9XCJwcm9qZWN0LS1tZW51b3V0ZXJfaGlkZGVuXCI7XG4gICAgXG4gICAgY29uc3QgZWRpdE1lbnU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBlZGl0TWVudS5jbGFzc05hbWU9XCJwcm9qZWN0LS1tZW51XCI7XG4gICAgZWRpdE1lbnVPdXRlci5hcHBlbmRDaGlsZChlZGl0TWVudSk7XG4gICAgY29uc3QgZWRpdE1lbnVEZWxldGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBlZGl0TWVudURlbGV0ZS5jbGFzc05hbWU9XCJwcm9qZWN0LS1tZW51X2RlbGV0ZVwiO1xuICAgIGVkaXRNZW51RGVsZXRlLnRleHRDb250ZW50PVwiRGVsZXRlIHByb2plY3RcIjtcbiAgICBlZGl0TWVudS5hcHBlbmRDaGlsZChlZGl0TWVudURlbGV0ZSk7XG5cbiAgICByZXR1cm4gZWRpdE1lbnVPdXRlcjtcbn1cbmZ1bmN0aW9uIGFkZFRhc2soKXtcbiAgICBjb25zdCB0YXNrTmV3PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza05ldy5pZD1cInRhc2stLW5ld19oaWRkZW5cIjtcbiAgICBcbiAgICBjb25zdCB0YXNrTmV3SW5wdXRzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza05ld0lucHV0cy5pZD1cInRhc2stLW5ld19pbnB1dHNcIjtcbiAgICB0YXNrTmV3LmFwcGVuZENoaWxkKHRhc2tOZXdJbnB1dHMpO1xuXG4gICAgY29uc3QgdGFza05hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBPYmplY3QuYXNzaWduKHRhc2tOYW1lSW5wdXQsIHtcbiAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgIG5hbWU6IFwidGFza19uYW1lXCIsXG4gICAgICAgIGlkOiBcInRhc2tfbmFtZVwiXG4gICAgfSk7XG4gICAgdGFza05ld0lucHV0cy5hcHBlbmRDaGlsZCh0YXNrTmFtZUlucHV0KTtcblxuICAgIGNvbnN0IHRhc2tTZWxlY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgT2JqZWN0LmFzc2lnbih0YXNrU2VsZWN0SW5wdXQsIHtcbiAgICAgICAgaWQ6IFwidGFza19wcm9qZWN0XCJcbiAgICB9KTtcbiAgICB0YXNrTmV3SW5wdXRzLmFwcGVuZENoaWxkKHRhc2tTZWxlY3RJbnB1dCk7XG4gICAgXG4gICAgY29uc3QgdGFza05ld1N1Ym1pdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tOZXdTdWJtaXQuaWQ9XCJ0YXNrLS1uZXdfc3VibWl0XCI7XG4gICAgdGFza05ldy5hcHBlbmRDaGlsZCh0YXNrTmV3U3VibWl0KTtcblxuICAgIGNvbnN0IHRhc2tOZXdTdWJtaXRBZGQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrTmV3U3VibWl0QWRkLmlkPVwidGFzay0tbmV3X3N1Ym1pdF9hZGRcIjtcbiAgICB0YXNrTmV3U3VibWl0QWRkLnRleHRDb250ZW50PVwiQWRkIFRhc2tcIjtcbiAgICB0YXNrTmV3U3VibWl0LmFwcGVuZENoaWxkKHRhc2tOZXdTdWJtaXRBZGQpO1xuXG4gICAgY29uc3QgdGFza05ld1N1Ym1pdENhbmNlbD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tOZXdTdWJtaXRDYW5jZWwuaWQ9XCJ0YXNrLS1uZXdfc3VibWl0X2NhbmNlbFwiO1xuICAgIHRhc2tOZXdTdWJtaXRDYW5jZWwudGV4dENvbnRlbnQ9XCJDYW5jZWxcIjtcbiAgICB0YXNrTmV3U3VibWl0LmFwcGVuZENoaWxkKHRhc2tOZXdTdWJtaXRDYW5jZWwpO1xuXG4gICAgcmV0dXJuIHRhc2tOZXc7XG59XG5mdW5jdGlvbiBjcmVhdGVTdG9yYWdlKCkge1xuICAgIGxldCBjaGVjayA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb0xpc3RcIik7XG4gICAgaWYgKGNoZWNrID09PSBudWxsKSB7XG4gICAgICAgIGxldCB0b2RvTGlzdCA9IHsgcHJvamVjdDogW10sIHRhc2s6IFtdIH07XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb0xpc3RcIiwgSlNPTi5zdHJpbmdpZnkodG9kb0xpc3QpKTtcbiAgICB9XG59XG5mdW5jdGlvbiBidWlsZFNpdGUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudC5pZCA9IFwiY29udGVudFwiO1xuICAgIGNvbnRlbnQuYXBwZW5kKGhlYWRlcigpLCBzaWRlYmFyKCksIG1haW4oKSwgZm9vdGVyKCksIGFkZFByb2plY3QoKSxwcm9qZWN0RWRpdE1lbnUoKSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICBjcmVhdGVTdG9yYWdlKCk7XG4gICAgcC5wb3B1bGF0ZVByb2plY3RMaXN0KCk7XG4gICAgdC5wb3B1bGF0ZVRhc2tMaXN0KCk7XG4gICAgdC5wb3B1bGF0ZVByb2plY3RTZWxlY3QoKTtcbn1cblxuZXhwb3J0IHsgYnVpbGRTaXRlLCBtYWluTGlzdFRhc2ssIHNpZGViYXJQcm9qZWN0LCBwcm9qZWN0RWRpdEJ0biB9OyIsImltcG9ydCAqIGFzIHAgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0ICogYXMgdCBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQgKiBhcyBkb20gZnJvbSBcIi4vRE9Nc2NyaXB0c1wiO1xuZnVuY3Rpb24gY3JlYXRlZFByb2plY3RFdmVudHMocHJvamVjdCl7XG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCgpID0+IHtcbiAgICAgICAgcC5zaG93UHJvamVjdEVkaXRJY29uKHByb2plY3QpO1xuICAgIH0pO1xuICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwoKSA9PiB7XG4gICAgICAgIHAuaGlkZVByb2plY3RFZGl0SWNvbihwcm9qZWN0KTtcbiAgICB9KTtcbiAgICBjb25zdCBpY29uPXByb2plY3QucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LS1lZGl0X2ljb25cIik7XG4gICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKSA9PiB7XG4gICAgICAgIHAuc2hvd1Byb2plY3RFZGl0TWVudShpY29uKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUV2ZW50cygpIHtcbiAgICAvL2FkZCBhIHByb2plY3QgZXZlbnRzXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LS1hZGRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcC5zaG93QWRkUHJvamVjdCgpO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3cHJvamVjdC0tZm9ybV9zdWJtaXRfYWRkXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHAuYWRkUHJvamVjdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ld3Byb2plY3QtLWZvcm1fbmFtZSBpbnB1dFwiKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ld3Byb2plY3QtLWZvcm1fY29sb3IgaW5wdXRcIikudmFsdWUpO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3cHJvamVjdC0tZm9ybV9zdWJtaXRfY2FuY2VsXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHAuY2FuY2VsQWRkUHJvamVjdCgpO1xuICAgIH0pO1xuXG4gICAgLy9wcm9qZWN0IHVpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyLS1oZWFkZXJfYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHAudG9nZ2xlUHJvamVjdExpc3QoKTtcbiAgICB9KTtcbiAgICAvL2RlbGV0ZSBwcm9qZWN0IFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC0tbWVudV9kZWxldGVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcbiAgICAgICAgcC5kZWxldGVQcm9qZWN0KCk7XG4gICAgfSk7XG4gICAgLy9wcm9qZWN0IG1lbnVcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtLW1lbnVvdXRlcl9oaWRkZW5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0XCIpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgcC5oaWRlUHJvamVjdEVkaXRJY29uKGVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgcC5oaWRlUHJvamVjdEVkaXRNZW51KCk7XG4gICAgfSk7XG4gICAgLy9hZGQgdGFzayBldmVudHNcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stLWFkZFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0YXNrLnNob3dBZGRUYXNrKCk7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLS1uZXdfc3VibWl0X2FkZFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0YXNrLmFkZFRhc2soZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrX25hbWVcIikudmFsdWUsZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrX3Byb2plY3RcIikudmFsdWUpO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay0tbmV3X3N1Ym1pdF9jYW5jZWxcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGFzay5jYW5jZWxBZGRUYXNrKCk7XG4gICAgfSk7XG59XG5leHBvcnQge2NyZWF0ZUV2ZW50cyxjcmVhdGVkUHJvamVjdEV2ZW50c307IiwiaW1wb3J0IHsgc2lkZWJhclByb2plY3QgfSBmcm9tIFwiLi9ET01zY3JpcHRzLmpzXCI7XG5pbXBvcnQgKiBhcyB0IGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCB7IGNyZWF0ZWRQcm9qZWN0RXZlbnRzIH0gZnJvbSBcIi4vZXZlbnRzU2NyaXB0cy5qc1wiO1xuY29uc3QgcHJvamVjdD0obmFtZSxjb2xvcik9PntcbiAgICBsZXQgaWQ9RGF0ZS5ub3coKS50b1N0cmluZygzNikgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyKTtcbiAgICBsZXQgY291bnQ9MDtcbiAgICByZXR1cm4ge1xuICAgICAgICBpZCxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgY29sb3IsXG4gICAgICAgIGNvdW50LFxuICAgIH1cbn07XG5mdW5jdGlvbiBzaG93QWRkUHJvamVjdCgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ld3Byb2plY3RfaGlkZGVuXCIpLmlkID0gXCJuZXdwcm9qZWN0XCI7XG59XG5mdW5jdGlvbiBhZGRQcm9qZWN0KG5hbWVWYWx1ZSxjb2xvclZhbHVlKSB7XG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0PXByb2plY3QobmFtZVZhbHVlLGNvbG9yVmFsdWUpO1xuICAgIGxldCBvYmo9SlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9MaXN0XCIpKTtcbiAgICBvYmoucHJvamVjdC5wdXNoKGN1cnJlbnRQcm9qZWN0KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9MaXN0XCIsSlNPTi5zdHJpbmdpZnkob2JqKSk7XG4gICAgcG9wdWxhdGVQcm9qZWN0TGlzdCgpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3cHJvamVjdFwiKS5pZCA9IFwibmV3cHJvamVjdF9oaWRkZW5cIjtcbiAgICB0LnBvcHVsYXRlUHJvamVjdFNlbGVjdCgpO1xufVxuZnVuY3Rpb24gcG9wdWxhdGVQcm9qZWN0TGlzdCgpe1xuICAgIGxldCBwcm9qZWN0TGlzdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3NpZGViYXItLWxpc3QgLnByb2plY3RcIik7XG4gICAgLy9kZWxldGUgb2xkIGxpc3RcbiAgICBwcm9qZWN0TGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgfSk7XG4gICAgLy9hZGQgbmV3IGxpc3RcbiAgICBsZXQgb2JqPUpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2RvTGlzdFwiKSk7XG4gICAgZm9yKGxldCBpPTA7aTxvYmoucHJvamVjdC5sZW5ndGg7aSsrKXtcbiAgICAgICAgbGV0IGlkVmFsdWU9b2JqLnByb2plY3RbaV0uaWQ7XG4gICAgICAgIGxldCBuYW1lVmFsdWU9b2JqLnByb2plY3RbaV0ubmFtZTtcbiAgICAgICAgbGV0IGNvbG9yVmFsdWU9b2JqLnByb2plY3RbaV0uY29sb3I7XG4gICAgICAgIGxldCBjb3VudFZhbHVlPW9iai5wcm9qZWN0W2ldLmNvdW50O1xuICAgICAgICBjb25zdCBwcm9qZWN0PXNpZGViYXJQcm9qZWN0KGlkVmFsdWUsbmFtZVZhbHVlLGNvbG9yVmFsdWUsY291bnRWYWx1ZSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC0tYWRkXCIpLmJlZm9yZShwcm9qZWN0KTtcbiAgICAgICAgY3JlYXRlZFByb2plY3RFdmVudHMocHJvamVjdCk7XG4gICAgfVxufVxuZnVuY3Rpb24gY2FuY2VsQWRkUHJvamVjdCgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ld3Byb2plY3RcIikuaWQgPSBcIm5ld3Byb2plY3RfaGlkZGVuXCI7XG59XG5mdW5jdGlvbiBzaG93UHJvamVjdEVkaXRNZW51KGVsZW1lbnQpe1xuICAgIGxldCBlbGVtZW50UG9zPWVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgbGV0IGJvZHlQb3M9ZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtLW1lbnVvdXRlcl9oaWRkZW5cIikuY2xhc3NMaXN0LmFkZChcInByb2plY3QtLW1lbnVvdXRlclwiKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtLW1lbnVfZGVsZXRlXCIpLmRhdGFzZXQuaWQ9YCR7ZWxlbWVudC5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWR9YDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtLW1lbnVcIikuc3R5bGUubGVmdD1gJHtlbGVtZW50UG9zLmxlZnQrMi1ib2R5UG9zLmxlZnR9cHhgO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC0tbWVudVwiKS5zdHlsZS50b3A9YCR7ZWxlbWVudFBvcy5ib3R0b20rMi1ib2R5UG9zLnRvcH1weGA7XG59XG5mdW5jdGlvbiBoaWRlUHJvamVjdEVkaXRNZW51KCl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LS1tZW51b3V0ZXJfaGlkZGVuXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJwcm9qZWN0LS1tZW51b3V0ZXJcIik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LS1tZW51X2RlbGV0ZVwiKS5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpO1xufVxuXG5mdW5jdGlvbiBzaG93UHJvamVjdEVkaXRJY29uKGVsZW1lbnQpe1xuICAgIGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LS1lZGl0X2hpZGRlblwiKS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC0tZWRpdFwiKTtcbn1cbmZ1bmN0aW9uIGhpZGVQcm9qZWN0RWRpdEljb24oZWxlbWVudCl7XG4gICAgZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtLWVkaXRfaGlkZGVuXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJwcm9qZWN0LS1lZGl0XCIpO1xufVxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdCgpe1xuICAgIGxldCBpZD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtLW1lbnVfZGVsZXRlXCIpLmRhdGFzZXQuaWQ7XG4gICAgbGV0IG9iaj1KU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb0xpc3RcIikpO1xuICAgIGxldCBuZXdQcm9qZWN0PW9iai5wcm9qZWN0LmZpbHRlcigoZWxlbWVudCwgaW5kZXgpPT57XG4gICAgICAgIHJldHVybiBlbGVtZW50LmlkIT1pZDtcbiAgICB9KTtcbiAgICBvYmoucHJvamVjdD1uZXdQcm9qZWN0O1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb0xpc3RcIixKU09OLnN0cmluZ2lmeShvYmopKTtcbiAgICBwb3B1bGF0ZVByb2plY3RMaXN0KCk7XG59XG5mdW5jdGlvbiB0b2dnbGVQcm9qZWN0TGlzdCgpIHtcbiAgICBjb25zdCBzZWxlY3RPbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpZGViYXItLWxpc3RcIik7XG4gICAgY29uc3Qgc2VsZWN0VHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaWRlYmFyLS1saXN0X2hpZGRlblwiKTtcbiAgICBpZiAoc2VsZWN0T25lKSB7XG4gICAgICAgIHNlbGVjdE9uZS5pZCA9IFwic2lkZWJhci0tbGlzdF9oaWRkZW5cIjtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyLS1oZWFkZXJfYnRuX2ljb25fZG93blwiKS5jbGFzc0xpc3QucmVwbGFjZShcInNpZGViYXItLWhlYWRlcl9idG5faWNvbl9kb3duXCIsIFwic2lkZWJhci0taGVhZGVyX2J0bl9pY29uX3VwXCIpO1xuICAgIH0gZWxzZSBpZiAoc2VsZWN0VHdvKSB7XG4gICAgICAgIHNlbGVjdFR3by5pZCA9IFwic2lkZWJhci0tbGlzdFwiO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXItLWhlYWRlcl9idG5faWNvbl91cFwiKS5jbGFzc0xpc3QucmVwbGFjZShcInNpZGViYXItLWhlYWRlcl9idG5faWNvbl91cFwiLCBcInNpZGViYXItLWhlYWRlcl9idG5faWNvbl9kb3duXCIpO1xuICAgIH1cbn1cbmV4cG9ydCB7ZGVsZXRlUHJvamVjdCxoaWRlUHJvamVjdEVkaXRJY29uLHNob3dQcm9qZWN0RWRpdEljb24saGlkZVByb2plY3RFZGl0TWVudSxzaG93UHJvamVjdEVkaXRNZW51LCBwcm9qZWN0LCBzaG93QWRkUHJvamVjdCwgYWRkUHJvamVjdCwgY2FuY2VsQWRkUHJvamVjdCwgdG9nZ2xlUHJvamVjdExpc3QsIHBvcHVsYXRlUHJvamVjdExpc3QgfTtcbiIsImltcG9ydCB7IG1haW5MaXN0VGFzayB9IGZyb20gXCIuL0RPTXNjcmlwdHMuanNcIjtcbmltcG9ydCAqIGFzIHAgZnJvbSBcIi4vcHJvamVjdFwiO1xuY29uc3QgdGFzayA9IChuYW1lLCBwcm9qZWN0SWQpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lLFxuICAgICAgICBwcm9qZWN0SWQsXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHNob3dBZGRUYXNrKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay0tbmV3X2hpZGRlblwiKS5pZCA9IFwidGFzay0tbmV3XCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLS1hZGRcIikuY2xhc3NMaXN0LnJlcGxhY2UoXCJ0YXNrLS1hZGRcIiwgXCJ0YXNrLS1hZGRfaGlkZGVuXCIpO1xufVxuZnVuY3Rpb24gYWRkVGFzayhuYW1lVmFsdWUsIHByb2plY3RWYWx1ZSkge1xuICAgIGxldCBvYmogPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb0xpc3RcIikpO1xuICAgIG9iai50YXNrLnB1c2godGFzayhuYW1lVmFsdWUsIG9iai5wcm9qZWN0W3Byb2plY3RWYWx1ZV0uaWQpKTtcbiAgICBvYmoucHJvamVjdFtwcm9qZWN0VmFsdWVdLmNvdW50Kys7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIiArIG9iai5wcm9qZWN0W3Byb2plY3RWYWx1ZV0uaWQgKyBcIiAucHJvamVjdC0tY291bnRcIikudGV4dENvbnRlbnQgPSBvYmoucHJvamVjdFtwcm9qZWN0VmFsdWVdLmNvdW50O1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb0xpc3RcIiwgSlNPTi5zdHJpbmdpZnkob2JqKSk7XG4gICAgcG9wdWxhdGVUYXNrTGlzdCgpO1xufVxuZnVuY3Rpb24gcG9wdWxhdGVUYXNrTGlzdCgpIHtcbiAgICBsZXQgdGFza0xpc3Q9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNtYWluLS1saXN0IC50YXNrXCIpO1xuICAgIGxldCBvYmogPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb0xpc3RcIikpO1xuICAgIGxldCBwcm9qZWN0TmFtZVZhbHVlLCBwcm9qZWN0Q29sb3JWYWx1ZSwgbmFtZVZhbHVlO1xuICAgIC8vZGVsZXRlIG9sZCBsaXN0XG4gICAgdGFza0xpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgIH0pO1xuICAgIC8vcG9wdWxhdGUgdGFzayBsaXN0XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmoudGFzay5sZW5ndGg7IGkrKykge1xuICAgICAgICBuYW1lVmFsdWUgPSBvYmoudGFza1tpXS5uYW1lO1xuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IG9iai5wcm9qZWN0Lmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICBpZiAob2JqLnRhc2tbaV0ucHJvamVjdElkID09IG9iai5wcm9qZWN0W2tdLmlkKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdE5hbWVWYWx1ZSA9IG9iai5wcm9qZWN0W2tdLm5hbWU7XG4gICAgICAgICAgICAgICAgcHJvamVjdENvbG9yVmFsdWUgPSBvYmoucHJvamVjdFtrXS5jb2xvcjtcbiAgICAgICAgICAgICAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLS1hZGRcIilcbiAgICAgICAgICAgICAgICA/LmJlZm9yZShtYWluTGlzdFRhc2sobmFtZVZhbHVlLCBwcm9qZWN0TmFtZVZhbHVlLCBwcm9qZWN0Q29sb3JWYWx1ZSkpKSB8fCBcbiAgICAgICAgICAgICAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLS1hZGRfaGlkZGVuXCIpXG4gICAgICAgICAgICAgICAgPy5iZWZvcmUobWFpbkxpc3RUYXNrKG5hbWVWYWx1ZSwgcHJvamVjdE5hbWVWYWx1ZSwgcHJvamVjdENvbG9yVmFsdWUpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBwb3B1bGF0ZVByb2plY3RTZWxlY3QoKSB7XG4gICAgbGV0IHByb2plY3RzQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb0xpc3RcIikpLnByb2plY3Q7XG4gICAgbGV0IHNlbGVjdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tfcHJvamVjdFwiKTtcbiAgICAvL2lmIHByb2plY3QgYXJyYXkgaXMgbm90IGVtcHR5IHJlcG9wdWxhdGUgc2VsZWN0IGVsZW1lbnRcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9qZWN0c0FycmF5KSAmJiBwcm9qZWN0c0FycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy9yZW1vdmUgb2xkIG9wdGlvbnNcbiAgICAgICAgd2hpbGUgKHNlbGVjdEVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgc2VsZWN0RWxlbWVudC5yZW1vdmVDaGlsZChzZWxlY3RFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIC8vYWRkIG5ldyBvcHRpb25zXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICBwT3B0aW9uLnZhbHVlID0gaTtcbiAgICAgICAgICAgIHBPcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0c0FycmF5W2ldLm5hbWU7XG4gICAgICAgICAgICBzZWxlY3RFbGVtZW50LmFwcGVuZENoaWxkKHBPcHRpb24pO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gY2FuY2VsQWRkVGFzaygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stLW5ld1wiKS5pZCA9IFwidGFzay0tbmV3X2hpZGRlblwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay0tYWRkX2hpZGRlblwiKS5jbGFzc0xpc3QucmVwbGFjZShcInRhc2stLWFkZF9oaWRkZW5cIiwgXCJ0YXNrLS1hZGRcIik7XG59XG5leHBvcnQgeyBzaG93QWRkVGFzaywgYWRkVGFzaywgY2FuY2VsQWRkVGFzaywgcG9wdWxhdGVUYXNrTGlzdCwgcG9wdWxhdGVQcm9qZWN0U2VsZWN0IH07XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBidWlsZFNpdGUgfSBmcm9tIFwiLi9ET01zY3JpcHRzXCI7XG5pbXBvcnQgeyBjcmVhdGVFdmVudHMgfSBmcm9tIFwiLi9ldmVudHNTY3JpcHRzXCI7XG5idWlsZFNpdGUoKTtcbmNyZWF0ZUV2ZW50cygpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==