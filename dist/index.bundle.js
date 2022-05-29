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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _DOMscripts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMscripts */ "./src/DOMscripts.js");



function createEvents() {
    let clicked;
    //add project events
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
    document.querySelectorAll(".project").forEach(element => {
        element.addEventListener("mouseenter",() => {
            _project__WEBPACK_IMPORTED_MODULE_0__.showProjectEditIcon(element);
        });
        element.addEventListener("mouseleave",() => {
            if(!clicked)
                _project__WEBPACK_IMPORTED_MODULE_0__.hideProjectEditIcon(element);
        });
    });
    //project menu
    document.querySelectorAll(".project--edit_icon").forEach(element =>{
        element.addEventListener("click",() => {
            clicked=true;
            _project__WEBPACK_IMPORTED_MODULE_0__.showProjectEditMenu(element);
        });
        document.querySelector(".project--menu_delete").addEventListener("click",()=>{
            _project__WEBPACK_IMPORTED_MODULE_0__.deleteProject(element);
        });
    });
    document.querySelector(".project--menuouter_hidden").addEventListener("click",()=>{
        clicked=false;
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createEvents);

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
        document.querySelector(".project--add").before((0,_DOMscripts_js__WEBPACK_IMPORTED_MODULE_0__.sidebarProject)(idValue,nameValue,colorValue,countValue));
    }
}
function cancelAddProject() {
    document.querySelector("#newproject").id = "newproject_hidden";
}
function showProjectEditMenu(element){
    let elementPos=element.getBoundingClientRect();
    let bodyPos=document.body.getBoundingClientRect();
    document.querySelector(".project--menuouter_hidden").classList.add("project--menuouter");
    document.querySelector(".project--menu").style.left=`${elementPos.left+2-bodyPos.left}px`;
    document.querySelector(".project--menu").style.top=`${elementPos.bottom+2-bodyPos.top}px`;
}
function hideProjectEditMenu(){
    document.querySelector(".project--menuouter_hidden").classList.remove("project--menuouter");
}

function showProjectEditIcon(element){
    element.querySelector(".project--edit_hidden").classList.add("project--edit");
}
function hideProjectEditIcon(element){
    element.querySelector(".project--edit_hidden").classList.remove("project--edit");
}

function deleteProject(element){
    let id=element.parentNode.parentNode.id;
    let obj=JSON.parse(localStorage.getItem("todoList"));
    console.log(obj.project);
    let newProject=obj.project.filter((element, index)=>{
        return element.id!=id;
    });
    console.log(newProject);
    obj.project=newProject;
    localStorage.setItem("todoList",JSON.stringify(obj));
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
(0,_eventsScripts__WEBPACK_IMPORTED_MODULE_2__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQStCO0FBQ0g7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5REFBcUI7QUFDekIsSUFBSSxtREFBa0I7QUFDdEIsSUFBSSx3REFBdUI7QUFDM0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsU3FDO0FBQ047QUFDSztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0RBQXNCO0FBQzlCLEtBQUs7QUFDTDtBQUNBLFFBQVEsZ0RBQWtCO0FBQzFCO0FBQ0EsS0FBSztBQUNMO0FBQ0EsUUFBUSxzREFBd0I7QUFDaEMsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsUUFBUSx1REFBeUI7QUFDakMsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZLHlEQUEyQjtBQUN2QyxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGdCQUFnQix5REFBMkI7QUFDM0MsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVkseURBQTJCO0FBQ3ZDLFNBQVM7QUFDVDtBQUNBLFlBQVksbURBQXFCO0FBQ2pDLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsYUFBYSx5REFBMkI7QUFDeEMsU0FBUztBQUNULFFBQVEseURBQTJCO0FBQ25DLEtBQUs7QUFDTDtBQUNBO0FBQ0EsUUFBUSw4Q0FBZ0I7QUFDeEIsS0FBSztBQUNMO0FBQ0EsUUFBUSwwQ0FBWTtBQUNwQixLQUFLO0FBQ0w7QUFDQSxRQUFRLGdEQUFrQjtBQUMxQixLQUFLO0FBQ0w7QUFDQSxpRUFBZSxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFEc0I7QUFDckI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksd0RBQXVCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsZ0JBQWdCLHFCQUFxQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCw4REFBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsK0JBQStCO0FBQzFGLDBEQUEwRCxnQ0FBZ0M7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUN1TTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkZ4SjtBQUNoQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLG9CQUFvQixxQkFBcUI7QUFDekM7QUFDQSx3QkFBd0Isd0JBQXdCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDREQUFZO0FBQ3JDO0FBQ0EseUJBQXlCLDREQUFZO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMEJBQTBCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDd0Y7Ozs7Ozs7O1VDakV4RjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFDb0I7QUFDRTtBQUMzQyxzREFBUztBQUNULDBEQUFZLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvRE9Nc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9ldmVudHNTY3JpcHRzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCAqIGFzIHAgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0ICogYXMgdCBmcm9tIFwiLi90YXNrXCI7XG5mdW5jdGlvbiBoZWFkZXIoKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuaWQgPSBcImhlYWRlclwiO1xuICAgIGRpdi50ZXh0Q29udGVudCA9IFwiVG9kbyBMaXN0XCI7XG4gICAgcmV0dXJuIGRpdjtcbn1cbmZ1bmN0aW9uIHNpZGViYXIoKSB7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2lkZWJhci5pZCA9IFwic2lkZWJhclwiO1xuXG4gICAgY29uc3Qgc2lkZWJhckdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzaWRlYmFyR3JvdXAuaWQgPSBcInNpZGViYXItLWdyb3VwXCI7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlYmFyR3JvdXApO1xuICAgIHNpZGViYXJHcm91cC5hcHBlbmRDaGlsZChzaWRlYmFySGVhZGVyKFwiTXkgTGlzdFwiKSk7XG4gICAgc2lkZWJhckdyb3VwLmFwcGVuZENoaWxkKHNpZGViYXJIZWFkZXIoXCJUb2RheVwiKSk7XG4gICAgc2lkZWJhckdyb3VwLmFwcGVuZENoaWxkKHNpZGViYXJIZWFkZXIoXCJOZXh0IDcgRGF5c1wiKSk7XG5cbiAgICBjb25zdCBzaWRlYmFySGVhZFByb2plY3QgPSBzaWRlYmFySGVhZGVyKFwiUHJvamVjdHNcIik7XG4gICAgY29uc3Qgc2lkZWJhckhlYWRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNpZGViYXJIZWFkQnRuLmNsYXNzTmFtZSA9IFwic2lkZWJhci0taGVhZGVyX2J0blwiO1xuXG4gICAgY29uc3Qgc2lkZWJhckhlYWRCdG5JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgc2lkZWJhckhlYWRCdG5JY29uLmNsYXNzTmFtZSA9IFwic2lkZWJhci0taGVhZGVyX2J0bl9pY29uX2Rvd25cIjtcbiAgICBzaWRlYmFySGVhZEJ0bi5hcHBlbmRDaGlsZChzaWRlYmFySGVhZEJ0bkljb24pO1xuICAgIHNpZGViYXJIZWFkUHJvamVjdC5hcHBlbmRDaGlsZChzaWRlYmFySGVhZEJ0bik7XG4gICAgc2lkZWJhckdyb3VwLmFwcGVuZENoaWxkKHNpZGViYXJIZWFkUHJvamVjdCk7XG5cbiAgICBjb25zdCBzaWRlYmFyTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2lkZWJhckxpc3QuaWQgPSBcInNpZGViYXItLWxpc3RcIjtcbiAgICBzaWRlYmFyR3JvdXAuYXBwZW5kQ2hpbGQoc2lkZWJhckxpc3QpO1xuXG4gICAgY29uc3QgcHJvamVjdEFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdEFkZC5jbGFzc05hbWUgPSBcInByb2plY3QtLWFkZFwiO1xuICAgIHNpZGViYXJMaXN0LmFwcGVuZENoaWxkKHByb2plY3RBZGQpO1xuXG4gICAgY29uc3QgcHJvamVjdEFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdEFkZEJ0bi5jbGFzc05hbWUgPSBcInByb2plY3QtLWFkZF9idG5cIjtcbiAgICBwcm9qZWN0QWRkLmFwcGVuZENoaWxkKHByb2plY3RBZGRCdG4pO1xuXG4gICAgY29uc3QgcHJvamVjdEFkZEJ0bkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBwcm9qZWN0QWRkQnRuSWNvbi5jbGFzc05hbWUgPSBcInByb2plY3QtLWFkZF9idG5faWNvblwiO1xuICAgIHByb2plY3RBZGRCdG4uYXBwZW5kQ2hpbGQocHJvamVjdEFkZEJ0bkljb24pO1xuXG4gICAgY29uc3QgcHJvamVjdEFkZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RBZGROYW1lLmNsYXNzTmFtZSA9IFwicHJvamVjdC0tYWRkX25hbWVcIjtcbiAgICBwcm9qZWN0QWRkTmFtZS50ZXh0Q29udGVudCA9IFwiQWRkIFByb2plY3RcIjtcbiAgICBwcm9qZWN0QWRkLmFwcGVuZENoaWxkKHByb2plY3RBZGROYW1lKTtcbiAgICByZXR1cm4gc2lkZWJhcjtcbn1cbmZ1bmN0aW9uIHNpZGViYXJIZWFkZXIodENvbnRlbnQpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5jbGFzc05hbWUgPSBcInNpZGViYXItLWhlYWRlclwiO1xuICAgIGNvbnN0IGRpdkNoaWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZDaGlsZC5jbGFzc05hbWUgPSBcInNpZGViYXItLWhlYWRlcl90aXRsZVwiO1xuICAgIGRpdkNoaWxkLnRleHRDb250ZW50ID0gdENvbnRlbnQ7XG4gICAgZGl2LmFwcGVuZENoaWxkKGRpdkNoaWxkKTtcbiAgICByZXR1cm4gZGl2O1xufVxuZnVuY3Rpb24gc2lkZWJhclByb2plY3QodElkLHRDb250ZW50LHRDb2xvcix0Q291bnQpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0LmlkID0gdElkO1xuICAgIHByb2plY3QuY2xhc3NOYW1lID0gXCJwcm9qZWN0XCI7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3ROYW1lLmNsYXNzTmFtZSA9IFwicHJvamVjdC0tbmFtZVwiO1xuICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gdENvbnRlbnQ7XG4gICAgcHJvamVjdE5hbWUuc3R5bGUuY29sb3I9IHRDb2xvcjtcbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbiAgICBjb25zdCBwcm9qZWN0Q291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RDb3VudC5jbGFzc05hbWUgPSBcInByb2plY3QtLWNvdW50XCI7XG4gICAgcHJvamVjdENvdW50LnRleHRDb250ZW50ID0gdENvdW50O1xuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdENvdW50KTtcbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RFZGl0QnRuKCkpO1xuICAgIHJldHVybiBwcm9qZWN0O1xufVxuZnVuY3Rpb24gbWFpbigpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluLmlkID0gXCJtYWluXCI7XG5cbiAgICBjb25zdCBtYWluR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5Hcm91cC5pZCA9IFwibWFpbi0tZ3JvdXBcIjtcbiAgICBtYWluLmFwcGVuZENoaWxkKG1haW5Hcm91cCk7XG5cbiAgICBjb25zdCBtYWluSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluSGVhZGVyLmNsYXNzTmFtZSA9IFwibWFpbi0taGVhZGVyXCI7XG4gICAgY29uc3QgbWFpbkhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluSGVhZGVyVGl0bGUuY2xhc3NOYW1lID0gXCJtYWluLS1oZWFkZXJfdGl0bGVcIjtcbiAgICBtYWluSGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSBcIlRvZGF5XCI7XG4gICAgbWFpbkhlYWRlci5hcHBlbmRDaGlsZChtYWluSGVhZGVyVGl0bGUpO1xuICAgIG1haW5Hcm91cC5hcHBlbmRDaGlsZChtYWluSGVhZGVyKTtcblxuICAgIGNvbnN0IG1haW5MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluTGlzdC5pZCA9IFwibWFpbi0tbGlzdFwiO1xuICAgIG1haW5Hcm91cC5hcHBlbmRDaGlsZChtYWluTGlzdCk7XG5cbiAgICBjb25zdCB0YXNrQWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrQWRkLmNsYXNzTmFtZSA9IFwidGFzay0tYWRkXCI7XG4gICAgbWFpbkxpc3QuYXBwZW5kQ2hpbGQodGFza0FkZCk7XG5cbiAgICBjb25zdCB0YXNrQWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrQWRkQnRuLmNsYXNzTmFtZSA9IFwidGFzay0tYWRkX2J0blwiO1xuICAgIHRhc2tBZGQuYXBwZW5kQ2hpbGQodGFza0FkZEJ0bik7XG5cbiAgICBjb25zdCB0YXNrQWRkQnRuSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHRhc2tBZGRCdG5JY29uLmNsYXNzTmFtZSA9IFwidGFzay0tYWRkX2J0bl9pY29uXCI7XG4gICAgdGFza0FkZEJ0bi5hcHBlbmRDaGlsZCh0YXNrQWRkQnRuSWNvbik7XG5cbiAgICBjb25zdCB0YXNrQWRkTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0FkZE5hbWUuY2xhc3NOYW1lID0gXCJ0YXNrLS1hZGRfbmFtZVwiO1xuICAgIHRhc2tBZGROYW1lLnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiO1xuICAgIHRhc2tBZGQuYXBwZW5kQ2hpbGQodGFza0FkZE5hbWUpO1xuXG4gICAgbWFpbkxpc3QuYXBwZW5kKGFkZFRhc2soKSk7XG4gICAgcmV0dXJuIG1haW47XG59XG5mdW5jdGlvbiBtYWluTGlzdFRhc2sodENvbnRlbnQsdFByb2plY3QsdENvbG9yKSB7XG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFzay5jbGFzc05hbWUgPSBcInRhc2tcIjtcblxuICAgIGNvbnN0IHRhc2tJbnB1dE91dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrSW5wdXRPdXRlci5jbGFzc05hbWUgPSBcInRhc2stLWlucHV0b3V0ZXJcIjtcbiAgICB0YXNrLmFwcGVuZENoaWxkKHRhc2tJbnB1dE91dGVyKTtcblxuICAgIGNvbnN0IHRhc2tDaGVja2JveElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIE9iamVjdC5hc3NpZ24odGFza0NoZWNrYm94SW5wdXQsIHtcbiAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxuICAgICAgICBuYW1lOiBcInRhc2tfc3RhdGVcIixcbiAgICAgICAgaWQ6IFwidGFza19zdGF0ZVwiXG4gICAgfSk7XG4gICAgdGFza0lucHV0T3V0ZXIuYXBwZW5kQ2hpbGQodGFza0NoZWNrYm94SW5wdXQpO1xuXG4gICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tOYW1lLmNsYXNzTmFtZSA9IFwidGFzay0tbmFtZVwiO1xuICAgIHRhc2tOYW1lLnRleHRDb250ZW50ID0gdENvbnRlbnQ7XG4gICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XG5cbiAgICBjb25zdCB0YXNrTmFtZV9wcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrTmFtZV9wcm9qZWN0LmNsYXNzTmFtZSA9IFwidGFzay0tbmFtZV9wcm9qZWN0XCI7XG4gICAgdGFza05hbWVfcHJvamVjdC50ZXh0Q29udGVudCA9IHRQcm9qZWN0O1xuICAgIHRhc2tOYW1lX3Byb2plY3Quc3R5bGUuY29sb3I9IHRDb2xvcjtcbiAgICB0YXNrLmFwcGVuZENoaWxkKHRhc2tOYW1lX3Byb2plY3QpO1xuICAgIHJldHVybiB0YXNrO1xufVxuZnVuY3Rpb24gZm9vdGVyKCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2LmlkID0gXCJmb290ZXJcIjtcbiAgICBkaXYudGV4dENvbnRlbnQgPSBcIkNvcHlyaWdodCDCqSAyMDIyIFJlZGFcIjtcbiAgICByZXR1cm4gZGl2O1xufVxuZnVuY3Rpb24gYWRkUHJvamVjdCgpIHtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdQcm9qZWN0LmlkID0gXCJuZXdwcm9qZWN0X2hpZGRlblwiO1xuICAgIGNvbnN0IG5ld1Byb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3UHJvamVjdFRpdGxlLmlkID0gXCJuZXdwcm9qZWN0LS10aXRsZVwiO1xuICAgIG5ld1Byb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IFwiQWRkIFByb2plY3RcIjtcbiAgICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKG5ld1Byb2plY3RUaXRsZSk7XG5cbiAgICBjb25zdCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3UHJvamVjdEZvcm0uaWQgPSBcIm5ld3Byb2plY3QtLWZvcm1cIjtcbiAgICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKG5ld1Byb2plY3RGb3JtKTtcblxuICAgIGNvbnN0IG5ld1Byb2plY3RGb3JtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3UHJvamVjdEZvcm1OYW1lLmlkID0gXCJuZXdwcm9qZWN0LS1mb3JtX25hbWVcIjtcbiAgICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChuZXdQcm9qZWN0Rm9ybU5hbWUpO1xuICAgIGNvbnN0IG5ld1Byb2plY3RGb3JtQ29sb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1Byb2plY3RGb3JtQ29sb3IuaWQgPSBcIm5ld3Byb2plY3QtLWZvcm1fY29sb3JcIjtcbiAgICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChuZXdQcm9qZWN0Rm9ybUNvbG9yKTtcblxuICAgIGNvbnN0IHByb2plY3ROYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgT2JqZWN0LmFzc2lnbihwcm9qZWN0TmFtZUxhYmVsLCB7XG4gICAgICAgIGZvcjogXCJwcm9qZWN0X25hbWVcIixcbiAgICAgICAgdGV4dENvbnRlbnQ6IFwiTmFtZVwiXG4gICAgfSk7XG4gICAgbmV3UHJvamVjdEZvcm1OYW1lLmFwcGVuZENoaWxkKHByb2plY3ROYW1lTGFiZWwpO1xuXG4gICAgY29uc3QgcHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBPYmplY3QuYXNzaWduKHByb2plY3ROYW1lSW5wdXQsIHtcbiAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgIG5hbWU6IFwicHJvamVjdF9uYW1lXCIsXG4gICAgICAgIGlkOiBcInByb2plY3RfbmFtZVwiXG4gICAgfSk7XG4gICAgbmV3UHJvamVjdEZvcm1OYW1lLmFwcGVuZENoaWxkKHByb2plY3ROYW1lSW5wdXQpO1xuXG4gICAgY29uc3QgcHJvamVjdENvbG9yTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgT2JqZWN0LmFzc2lnbihwcm9qZWN0Q29sb3JMYWJlbCwge1xuICAgICAgICBmb3I6IFwicHJvamVjdF9jb2xvclwiLFxuICAgICAgICB0ZXh0Q29udGVudDogXCJDb2xvclwiXG4gICAgfSk7XG4gICAgbmV3UHJvamVjdEZvcm1Db2xvci5hcHBlbmRDaGlsZChwcm9qZWN0Q29sb3JMYWJlbCk7XG5cbiAgICBjb25zdCBwcm9qZWN0Q29sb3JJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBPYmplY3QuYXNzaWduKHByb2plY3RDb2xvcklucHV0LCB7XG4gICAgICAgIHR5cGU6IFwiY29sb3JcIixcbiAgICAgICAgbmFtZTogXCJwcm9qZWN0X2NvbG9yXCIsXG4gICAgICAgIGlkOiBcInByb2plY3RfY29sb3JcIlxuICAgIH0pO1xuICAgIG5ld1Byb2plY3RGb3JtQ29sb3IuYXBwZW5kQ2hpbGQocHJvamVjdENvbG9ySW5wdXQpO1xuXG4gICAgY29uc3QgbmV3UHJvamVjdEZvcm1TdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1Byb2plY3RGb3JtU3VibWl0LmlkID0gXCJuZXdwcm9qZWN0LS1mb3JtX3N1Ym1pdFwiO1xuICAgIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKG5ld1Byb2plY3RGb3JtU3VibWl0KTtcblxuICAgIGNvbnN0IG5ld1Byb2plY3RGb3JtU3VibWl0QWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdQcm9qZWN0Rm9ybVN1Ym1pdEFkZC5pZCA9IFwibmV3cHJvamVjdC0tZm9ybV9zdWJtaXRfYWRkXCI7XG4gICAgbmV3UHJvamVjdEZvcm1TdWJtaXRBZGQudGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuICAgIG5ld1Byb2plY3RGb3JtU3VibWl0LmFwcGVuZENoaWxkKG5ld1Byb2plY3RGb3JtU3VibWl0QWRkKTtcbiAgICBjb25zdCBuZXdQcm9qZWN0Rm9ybVN1Ym1pdENhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3UHJvamVjdEZvcm1TdWJtaXRDYW5jZWwuaWQgPSBcIm5ld3Byb2plY3QtLWZvcm1fc3VibWl0X2NhbmNlbFwiO1xuICAgIG5ld1Byb2plY3RGb3JtU3VibWl0Q2FuY2VsLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgICBuZXdQcm9qZWN0Rm9ybVN1Ym1pdC5hcHBlbmRDaGlsZChuZXdQcm9qZWN0Rm9ybVN1Ym1pdENhbmNlbCk7XG4gICAgcmV0dXJuIG5ld1Byb2plY3Q7XG59XG5mdW5jdGlvbiBwcm9qZWN0RWRpdEJ0bigpe1xuICAgIGNvbnN0IHByb2plY3RFZGl0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdEVkaXQuY2xhc3NOYW1lPVwicHJvamVjdC0tZWRpdF9oaWRkZW5cIjtcbiAgICBcbiAgICBjb25zdCBwcm9qZWN0RWRpdEljb249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgcHJvamVjdEVkaXRJY29uLmNsYXNzTmFtZT1cInByb2plY3QtLWVkaXRfaWNvblwiO1xuICAgIHByb2plY3RFZGl0LmFwcGVuZENoaWxkKHByb2plY3RFZGl0SWNvbik7XG4gICAgcmV0dXJuIHByb2plY3RFZGl0O1xufVxuZnVuY3Rpb24gcHJvamVjdEVkaXRNZW51KCl7XG4gICAgY29uc3QgZWRpdE1lbnVPdXRlcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGVkaXRNZW51T3V0ZXIuY2xhc3NOYW1lPVwicHJvamVjdC0tbWVudW91dGVyX2hpZGRlblwiO1xuICAgIFxuICAgIGNvbnN0IGVkaXRNZW51PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZWRpdE1lbnUuY2xhc3NOYW1lPVwicHJvamVjdC0tbWVudVwiO1xuICAgIGVkaXRNZW51T3V0ZXIuYXBwZW5kQ2hpbGQoZWRpdE1lbnUpO1xuICAgIGNvbnN0IGVkaXRNZW51RGVsZXRlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZWRpdE1lbnVEZWxldGUuY2xhc3NOYW1lPVwicHJvamVjdC0tbWVudV9kZWxldGVcIjtcbiAgICBlZGl0TWVudURlbGV0ZS50ZXh0Q29udGVudD1cIkRlbGV0ZSBwcm9qZWN0XCI7XG4gICAgZWRpdE1lbnUuYXBwZW5kQ2hpbGQoZWRpdE1lbnVEZWxldGUpO1xuXG4gICAgcmV0dXJuIGVkaXRNZW51T3V0ZXI7XG59XG5mdW5jdGlvbiBhZGRUYXNrKCl7XG4gICAgY29uc3QgdGFza05ldz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tOZXcuaWQ9XCJ0YXNrLS1uZXdfaGlkZGVuXCI7XG4gICAgXG4gICAgY29uc3QgdGFza05ld0lucHV0cz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tOZXdJbnB1dHMuaWQ9XCJ0YXNrLS1uZXdfaW5wdXRzXCI7XG4gICAgdGFza05ldy5hcHBlbmRDaGlsZCh0YXNrTmV3SW5wdXRzKTtcblxuICAgIGNvbnN0IHRhc2tOYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgT2JqZWN0LmFzc2lnbih0YXNrTmFtZUlucHV0LCB7XG4gICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICBuYW1lOiBcInRhc2tfbmFtZVwiLFxuICAgICAgICBpZDogXCJ0YXNrX25hbWVcIlxuICAgIH0pO1xuICAgIHRhc2tOZXdJbnB1dHMuYXBwZW5kQ2hpbGQodGFza05hbWVJbnB1dCk7XG5cbiAgICBjb25zdCB0YXNrU2VsZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIE9iamVjdC5hc3NpZ24odGFza1NlbGVjdElucHV0LCB7XG4gICAgICAgIGlkOiBcInRhc2tfcHJvamVjdFwiXG4gICAgfSk7XG4gICAgdGFza05ld0lucHV0cy5hcHBlbmRDaGlsZCh0YXNrU2VsZWN0SW5wdXQpO1xuICAgIFxuICAgIGNvbnN0IHRhc2tOZXdTdWJtaXQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrTmV3U3VibWl0LmlkPVwidGFzay0tbmV3X3N1Ym1pdFwiO1xuICAgIHRhc2tOZXcuYXBwZW5kQ2hpbGQodGFza05ld1N1Ym1pdCk7XG5cbiAgICBjb25zdCB0YXNrTmV3U3VibWl0QWRkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza05ld1N1Ym1pdEFkZC5pZD1cInRhc2stLW5ld19zdWJtaXRfYWRkXCI7XG4gICAgdGFza05ld1N1Ym1pdEFkZC50ZXh0Q29udGVudD1cIkFkZCBUYXNrXCI7XG4gICAgdGFza05ld1N1Ym1pdC5hcHBlbmRDaGlsZCh0YXNrTmV3U3VibWl0QWRkKTtcblxuICAgIGNvbnN0IHRhc2tOZXdTdWJtaXRDYW5jZWw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrTmV3U3VibWl0Q2FuY2VsLmlkPVwidGFzay0tbmV3X3N1Ym1pdF9jYW5jZWxcIjtcbiAgICB0YXNrTmV3U3VibWl0Q2FuY2VsLnRleHRDb250ZW50PVwiQ2FuY2VsXCI7XG4gICAgdGFza05ld1N1Ym1pdC5hcHBlbmRDaGlsZCh0YXNrTmV3U3VibWl0Q2FuY2VsKTtcblxuICAgIHJldHVybiB0YXNrTmV3O1xufVxuZnVuY3Rpb24gY3JlYXRlU3RvcmFnZSgpIHtcbiAgICBsZXQgY2hlY2sgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9MaXN0XCIpO1xuICAgIGlmIChjaGVjayA9PT0gbnVsbCkge1xuICAgICAgICBsZXQgdG9kb0xpc3QgPSB7IHByb2plY3Q6IFtdLCB0YXNrOiBbXSB9O1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9MaXN0XCIsIEpTT04uc3RyaW5naWZ5KHRvZG9MaXN0KSk7XG4gICAgfVxufVxuZnVuY3Rpb24gYnVpbGRTaXRlKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRlbnQuaWQgPSBcImNvbnRlbnRcIjtcbiAgICBjb250ZW50LmFwcGVuZChoZWFkZXIoKSwgc2lkZWJhcigpLCBtYWluKCksIGZvb3RlcigpLCBhZGRQcm9qZWN0KCkscHJvamVjdEVkaXRNZW51KCkpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgY3JlYXRlU3RvcmFnZSgpO1xuICAgIHAucG9wdWxhdGVQcm9qZWN0TGlzdCgpO1xuICAgIHQucG9wdWxhdGVUYXNrTGlzdCgpO1xuICAgIHQucG9wdWxhdGVQcm9qZWN0U2VsZWN0KCk7XG59XG5cbmV4cG9ydCB7IGJ1aWxkU2l0ZSwgbWFpbkxpc3RUYXNrLCBzaWRlYmFyUHJvamVjdCwgcHJvamVjdEVkaXRCdG4gfTsiLCJpbXBvcnQgKiBhcyBwcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCAqIGFzIHRhc2sgZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0ICogYXMgZG9tIGZyb20gXCIuL0RPTXNjcmlwdHNcIjtcbmZ1bmN0aW9uIGNyZWF0ZUV2ZW50cygpIHtcbiAgICBsZXQgY2xpY2tlZDtcbiAgICAvL2FkZCBwcm9qZWN0IGV2ZW50c1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC0tYWRkXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHByb2plY3Quc2hvd0FkZFByb2plY3QoKTtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ld3Byb2plY3QtLWZvcm1fc3VibWl0X2FkZFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBwcm9qZWN0LmFkZFByb2plY3QoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXdwcm9qZWN0LS1mb3JtX25hbWUgaW5wdXRcIikudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXdwcm9qZWN0LS1mb3JtX2NvbG9yIGlucHV0XCIpLnZhbHVlKTtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ld3Byb2plY3QtLWZvcm1fc3VibWl0X2NhbmNlbFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBwcm9qZWN0LmNhbmNlbEFkZFByb2plY3QoKTtcbiAgICB9KTtcblxuICAgIC8vcHJvamVjdCB1aVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhci0taGVhZGVyX2J0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBwcm9qZWN0LnRvZ2dsZVByb2plY3RMaXN0KCk7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0XCIpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwoKSA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0LnNob3dQcm9qZWN0RWRpdEljb24oZWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsKCkgPT4ge1xuICAgICAgICAgICAgaWYoIWNsaWNrZWQpXG4gICAgICAgICAgICAgICAgcHJvamVjdC5oaWRlUHJvamVjdEVkaXRJY29uKGVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICAvL3Byb2plY3QgbWVudVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC0tZWRpdF9pY29uXCIpLmZvckVhY2goZWxlbWVudCA9PntcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKSA9PiB7XG4gICAgICAgICAgICBjbGlja2VkPXRydWU7XG4gICAgICAgICAgICBwcm9qZWN0LnNob3dQcm9qZWN0RWRpdE1lbnUoZWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtLW1lbnVfZGVsZXRlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XG4gICAgICAgICAgICBwcm9qZWN0LmRlbGV0ZVByb2plY3QoZWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC0tbWVudW91dGVyX2hpZGRlblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xuICAgICAgICBjbGlja2VkPWZhbHNlO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RcIikuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICBwcm9qZWN0LmhpZGVQcm9qZWN0RWRpdEljb24oZWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICBwcm9qZWN0LmhpZGVQcm9qZWN0RWRpdE1lbnUoKTtcbiAgICB9KTtcbiAgICAvL2FkZCB0YXNrIGV2ZW50c1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay0tYWRkXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRhc2suc2hvd0FkZFRhc2soKTtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stLW5ld19zdWJtaXRfYWRkXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRhc2suYWRkVGFzayhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tfbmFtZVwiKS52YWx1ZSxkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tfcHJvamVjdFwiKS52YWx1ZSk7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLS1uZXdfc3VibWl0X2NhbmNlbFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0YXNrLmNhbmNlbEFkZFRhc2soKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUV2ZW50czsiLCJpbXBvcnQgeyBzaWRlYmFyUHJvamVjdCB9IGZyb20gXCIuL0RPTXNjcmlwdHMuanNcIjtcbmltcG9ydCAqIGFzIHQgZnJvbSBcIi4vdGFza1wiO1xuY29uc3QgcHJvamVjdD0obmFtZSxjb2xvcik9PntcbiAgICBsZXQgaWQ9RGF0ZS5ub3coKS50b1N0cmluZygzNikgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyKTtcbiAgICBsZXQgY291bnQ9MDtcbiAgICByZXR1cm4ge1xuICAgICAgICBpZCxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgY29sb3IsXG4gICAgICAgIGNvdW50LFxuICAgIH1cbn07XG5mdW5jdGlvbiBzaG93QWRkUHJvamVjdCgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ld3Byb2plY3RfaGlkZGVuXCIpLmlkID0gXCJuZXdwcm9qZWN0XCI7XG59XG5mdW5jdGlvbiBhZGRQcm9qZWN0KG5hbWVWYWx1ZSxjb2xvclZhbHVlKSB7XG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0PXByb2plY3QobmFtZVZhbHVlLGNvbG9yVmFsdWUpO1xuICAgIGxldCBvYmo9SlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9MaXN0XCIpKTtcbiAgICBvYmoucHJvamVjdC5wdXNoKGN1cnJlbnRQcm9qZWN0KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9MaXN0XCIsSlNPTi5zdHJpbmdpZnkob2JqKSk7XG4gICAgcG9wdWxhdGVQcm9qZWN0TGlzdCgpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3cHJvamVjdFwiKS5pZCA9IFwibmV3cHJvamVjdF9oaWRkZW5cIjtcbiAgICB0LnBvcHVsYXRlUHJvamVjdFNlbGVjdCgpO1xufVxuZnVuY3Rpb24gcG9wdWxhdGVQcm9qZWN0TGlzdCgpe1xuICAgIGxldCBwcm9qZWN0TGlzdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3NpZGViYXItLWxpc3QgLnByb2plY3RcIik7XG4gICAgLy9kZWxldGUgb2xkIGxpc3RcbiAgICBwcm9qZWN0TGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgfSk7XG4gICAgLy9hZGQgbmV3IGxpc3RcbiAgICBsZXQgb2JqPUpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2RvTGlzdFwiKSk7XG4gICAgZm9yKGxldCBpPTA7aTxvYmoucHJvamVjdC5sZW5ndGg7aSsrKXtcbiAgICAgICAgbGV0IGlkVmFsdWU9b2JqLnByb2plY3RbaV0uaWQ7XG4gICAgICAgIGxldCBuYW1lVmFsdWU9b2JqLnByb2plY3RbaV0ubmFtZTtcbiAgICAgICAgbGV0IGNvbG9yVmFsdWU9b2JqLnByb2plY3RbaV0uY29sb3I7XG4gICAgICAgIGxldCBjb3VudFZhbHVlPW9iai5wcm9qZWN0W2ldLmNvdW50O1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtLWFkZFwiKS5iZWZvcmUoc2lkZWJhclByb2plY3QoaWRWYWx1ZSxuYW1lVmFsdWUsY29sb3JWYWx1ZSxjb3VudFZhbHVlKSk7XG4gICAgfVxufVxuZnVuY3Rpb24gY2FuY2VsQWRkUHJvamVjdCgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ld3Byb2plY3RcIikuaWQgPSBcIm5ld3Byb2plY3RfaGlkZGVuXCI7XG59XG5mdW5jdGlvbiBzaG93UHJvamVjdEVkaXRNZW51KGVsZW1lbnQpe1xuICAgIGxldCBlbGVtZW50UG9zPWVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgbGV0IGJvZHlQb3M9ZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtLW1lbnVvdXRlcl9oaWRkZW5cIikuY2xhc3NMaXN0LmFkZChcInByb2plY3QtLW1lbnVvdXRlclwiKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtLW1lbnVcIikuc3R5bGUubGVmdD1gJHtlbGVtZW50UG9zLmxlZnQrMi1ib2R5UG9zLmxlZnR9cHhgO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC0tbWVudVwiKS5zdHlsZS50b3A9YCR7ZWxlbWVudFBvcy5ib3R0b20rMi1ib2R5UG9zLnRvcH1weGA7XG59XG5mdW5jdGlvbiBoaWRlUHJvamVjdEVkaXRNZW51KCl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LS1tZW51b3V0ZXJfaGlkZGVuXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJwcm9qZWN0LS1tZW51b3V0ZXJcIik7XG59XG5cbmZ1bmN0aW9uIHNob3dQcm9qZWN0RWRpdEljb24oZWxlbWVudCl7XG4gICAgZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtLWVkaXRfaGlkZGVuXCIpLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LS1lZGl0XCIpO1xufVxuZnVuY3Rpb24gaGlkZVByb2plY3RFZGl0SWNvbihlbGVtZW50KXtcbiAgICBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC0tZWRpdF9oaWRkZW5cIikuY2xhc3NMaXN0LnJlbW92ZShcInByb2plY3QtLWVkaXRcIik7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoZWxlbWVudCl7XG4gICAgbGV0IGlkPWVsZW1lbnQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkO1xuICAgIGxldCBvYmo9SlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9MaXN0XCIpKTtcbiAgICBjb25zb2xlLmxvZyhvYmoucHJvamVjdCk7XG4gICAgbGV0IG5ld1Byb2plY3Q9b2JqLnByb2plY3QuZmlsdGVyKChlbGVtZW50LCBpbmRleCk9PntcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuaWQhPWlkO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKG5ld1Byb2plY3QpO1xuICAgIG9iai5wcm9qZWN0PW5ld1Byb2plY3Q7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvTGlzdFwiLEpTT04uc3RyaW5naWZ5KG9iaikpO1xufVxuZnVuY3Rpb24gdG9nZ2xlUHJvamVjdExpc3QoKSB7XG4gICAgY29uc3Qgc2VsZWN0T25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaWRlYmFyLS1saXN0XCIpO1xuICAgIGNvbnN0IHNlbGVjdFR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2lkZWJhci0tbGlzdF9oaWRkZW5cIik7XG4gICAgaWYgKHNlbGVjdE9uZSkge1xuICAgICAgICBzZWxlY3RPbmUuaWQgPSBcInNpZGViYXItLWxpc3RfaGlkZGVuXCI7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhci0taGVhZGVyX2J0bl9pY29uX2Rvd25cIikuY2xhc3NMaXN0LnJlcGxhY2UoXCJzaWRlYmFyLS1oZWFkZXJfYnRuX2ljb25fZG93blwiLCBcInNpZGViYXItLWhlYWRlcl9idG5faWNvbl91cFwiKTtcbiAgICB9IGVsc2UgaWYgKHNlbGVjdFR3bykge1xuICAgICAgICBzZWxlY3RUd28uaWQgPSBcInNpZGViYXItLWxpc3RcIjtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyLS1oZWFkZXJfYnRuX2ljb25fdXBcIikuY2xhc3NMaXN0LnJlcGxhY2UoXCJzaWRlYmFyLS1oZWFkZXJfYnRuX2ljb25fdXBcIiwgXCJzaWRlYmFyLS1oZWFkZXJfYnRuX2ljb25fZG93blwiKTtcbiAgICB9XG59XG5leHBvcnQge2RlbGV0ZVByb2plY3QsaGlkZVByb2plY3RFZGl0SWNvbixzaG93UHJvamVjdEVkaXRJY29uLGhpZGVQcm9qZWN0RWRpdE1lbnUsc2hvd1Byb2plY3RFZGl0TWVudSwgcHJvamVjdCwgc2hvd0FkZFByb2plY3QsIGFkZFByb2plY3QsIGNhbmNlbEFkZFByb2plY3QsIHRvZ2dsZVByb2plY3RMaXN0LCBwb3B1bGF0ZVByb2plY3RMaXN0IH07XG4iLCJpbXBvcnQgeyBtYWluTGlzdFRhc2sgfSBmcm9tIFwiLi9ET01zY3JpcHRzLmpzXCI7XG5pbXBvcnQgKiBhcyBwIGZyb20gXCIuL3Byb2plY3RcIjtcbmNvbnN0IHRhc2sgPSAobmFtZSwgcHJvamVjdElkKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgcHJvamVjdElkLFxuICAgIH07XG59XG5mdW5jdGlvbiBzaG93QWRkVGFzaygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stLW5ld19oaWRkZW5cIikuaWQgPSBcInRhc2stLW5ld1wiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay0tYWRkXCIpLmNsYXNzTGlzdC5yZXBsYWNlKFwidGFzay0tYWRkXCIsIFwidGFzay0tYWRkX2hpZGRlblwiKTtcbn1cbmZ1bmN0aW9uIGFkZFRhc2sobmFtZVZhbHVlLCBwcm9qZWN0VmFsdWUpIHtcbiAgICBsZXQgb2JqID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9MaXN0XCIpKTtcbiAgICBvYmoudGFzay5wdXNoKHRhc2sobmFtZVZhbHVlLCBvYmoucHJvamVjdFtwcm9qZWN0VmFsdWVdLmlkKSk7XG4gICAgb2JqLnByb2plY3RbcHJvamVjdFZhbHVlXS5jb3VudCsrO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIgKyBvYmoucHJvamVjdFtwcm9qZWN0VmFsdWVdLmlkICsgXCIgLnByb2plY3QtLWNvdW50XCIpLnRleHRDb250ZW50ID0gb2JqLnByb2plY3RbcHJvamVjdFZhbHVlXS5jb3VudDtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9MaXN0XCIsIEpTT04uc3RyaW5naWZ5KG9iaikpO1xuICAgIHBvcHVsYXRlVGFza0xpc3QoKTtcbn1cbmZ1bmN0aW9uIHBvcHVsYXRlVGFza0xpc3QoKSB7XG4gICAgbGV0IHRhc2tMaXN0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjbWFpbi0tbGlzdCAudGFza1wiKTtcbiAgICBsZXQgb2JqID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9MaXN0XCIpKTtcbiAgICBsZXQgcHJvamVjdE5hbWVWYWx1ZSwgcHJvamVjdENvbG9yVmFsdWUsIG5hbWVWYWx1ZTtcbiAgICAvL2RlbGV0ZSBvbGQgbGlzdFxuICAgIHRhc2tMaXN0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICB9KTtcbiAgICAvL3BvcHVsYXRlIHRhc2sgbGlzdFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqLnRhc2subGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbmFtZVZhbHVlID0gb2JqLnRhc2tbaV0ubmFtZTtcbiAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBvYmoucHJvamVjdC5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgaWYgKG9iai50YXNrW2ldLnByb2plY3RJZCA9PSBvYmoucHJvamVjdFtrXS5pZCkge1xuICAgICAgICAgICAgICAgIHByb2plY3ROYW1lVmFsdWUgPSBvYmoucHJvamVjdFtrXS5uYW1lO1xuICAgICAgICAgICAgICAgIHByb2plY3RDb2xvclZhbHVlID0gb2JqLnByb2plY3Rba10uY29sb3I7XG4gICAgICAgICAgICAgICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay0tYWRkXCIpXG4gICAgICAgICAgICAgICAgPy5iZWZvcmUobWFpbkxpc3RUYXNrKG5hbWVWYWx1ZSwgcHJvamVjdE5hbWVWYWx1ZSwgcHJvamVjdENvbG9yVmFsdWUpKSkgfHwgXG4gICAgICAgICAgICAgICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay0tYWRkX2hpZGRlblwiKVxuICAgICAgICAgICAgICAgID8uYmVmb3JlKG1haW5MaXN0VGFzayhuYW1lVmFsdWUsIHByb2plY3ROYW1lVmFsdWUsIHByb2plY3RDb2xvclZhbHVlKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gcG9wdWxhdGVQcm9qZWN0U2VsZWN0KCkge1xuICAgIGxldCBwcm9qZWN0c0FycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9MaXN0XCIpKS5wcm9qZWN0O1xuICAgIGxldCBzZWxlY3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrX3Byb2plY3RcIik7XG4gICAgLy9pZiBwcm9qZWN0IGFycmF5IGlzIG5vdCBlbXB0eSByZXBvcHVsYXRlIHNlbGVjdCBlbGVtZW50XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJvamVjdHNBcnJheSkgJiYgcHJvamVjdHNBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vcmVtb3ZlIG9sZCBvcHRpb25zXG4gICAgICAgIHdoaWxlIChzZWxlY3RFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHNlbGVjdEVsZW1lbnQucmVtb3ZlQ2hpbGQoc2VsZWN0RWxlbWVudC5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICAvL2FkZCBuZXcgb3B0aW9uc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHBPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgcE9wdGlvbi52YWx1ZSA9IGk7XG4gICAgICAgICAgICBwT3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdHNBcnJheVtpXS5uYW1lO1xuICAgICAgICAgICAgc2VsZWN0RWxlbWVudC5hcHBlbmRDaGlsZChwT3B0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGNhbmNlbEFkZFRhc2soKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLS1uZXdcIikuaWQgPSBcInRhc2stLW5ld19oaWRkZW5cIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stLWFkZF9oaWRkZW5cIikuY2xhc3NMaXN0LnJlcGxhY2UoXCJ0YXNrLS1hZGRfaGlkZGVuXCIsIFwidGFzay0tYWRkXCIpO1xufVxuZXhwb3J0IHsgc2hvd0FkZFRhc2ssIGFkZFRhc2ssIGNhbmNlbEFkZFRhc2ssIHBvcHVsYXRlVGFza0xpc3QsIHBvcHVsYXRlUHJvamVjdFNlbGVjdCB9O1xuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgYnVpbGRTaXRlIH0gZnJvbSBcIi4vRE9Nc2NyaXB0c1wiO1xuaW1wb3J0IGNyZWF0ZUV2ZW50cyBmcm9tIFwiLi9ldmVudHNTY3JpcHRzXCI7XG5idWlsZFNpdGUoKTtcbmNyZWF0ZUV2ZW50cygpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==