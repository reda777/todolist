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
function mainListTask(tContent) {
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
    content.append(header(), sidebar(), main(), footer(), addProject());
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


function createEvents() {
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
    document.querySelector(".sidebar--header_btn").addEventListener("click", () => {
        _project__WEBPACK_IMPORTED_MODULE_0__.toggleProjectList();
    });
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
/* harmony export */   "populateProjectList": () => (/* binding */ populateProjectList),
/* harmony export */   "project": () => (/* binding */ project),
/* harmony export */   "showAddProject": () => (/* binding */ showAddProject),
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
    obj.project.push(project(nameValue,colorValue));
    localStorage.setItem("todoList",JSON.stringify(obj));
    document.querySelector("#sidebar--list").prepend((0,_DOMscripts_js__WEBPACK_IMPORTED_MODULE_0__.sidebarProject)(currentProject.id,nameValue,colorValue,currentProject.count));
    document.querySelector("#newproject").id = "newproject_hidden";
    _task__WEBPACK_IMPORTED_MODULE_1__.populateProjectSelect();
}
function populateProjectList(){
    let obj=JSON.parse(localStorage.getItem("todoList"));
    for(let i=0;i<obj.project.length;i++){
        let idValue=obj.project[i].id;
        let nameValue=obj.project[i].name;
        let colorValue=obj.project[i].color;
        let countValue=obj.project[i].count;
        document.querySelector("#sidebar--list").prepend((0,_DOMscripts_js__WEBPACK_IMPORTED_MODULE_0__.sidebarProject)(idValue,nameValue,colorValue,countValue));
    }
}
function cancelAddProject() {
    document.querySelector("#newproject").id = "newproject_hidden";
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


const task=(name,projectId)=>{
    return {
        name,
        projectId,
    };
}
function showAddTask() {
    document.querySelector("#task--new_hidden").id = "task--new";
    document.querySelector(".task--add").classList.replace("task--add","task--add_hidden");
}
function addTask(nameValue,projectValue) {
    let obj=JSON.parse(localStorage.getItem("todoList"));
    obj.task.push(task(nameValue,obj.project[projectValue].id));
    obj.project[projectValue].count++;
    document.querySelector("#"+obj.project[projectValue].id+" .project--count").textContent=obj.project[projectValue].count;
    localStorage.setItem("todoList",JSON.stringify(obj));
    document.querySelector("#main--list").prepend((0,_DOMscripts_js__WEBPACK_IMPORTED_MODULE_0__.mainListTask)(nameValue));
    document.querySelector("#task--new").id = "task--new_hidden";
    document.querySelector(".task--add_hidden").classList.replace("task--add_hidden","task--add");
}
function populateTaskList(){
    let obj=JSON.parse(localStorage.getItem("todoList"));
    for(let i=0;i<obj.task.length;i++){
        let nameValue=obj.task[i].name;
        document.querySelector("#main--list").prepend((0,_DOMscripts_js__WEBPACK_IMPORTED_MODULE_0__.mainListTask)(nameValue));
    }
}
function populateProjectSelect(){
    let projectsArray=JSON.parse(localStorage.getItem("todoList")).project;
    let selectElement=document.querySelector("#task_project");
    //if project array is not empty repopulate select element
    if( Array.isArray(projectsArray) && projectsArray.length > 0){
        //remove old options
        while (selectElement.firstChild) {
            selectElement.removeChild(selectElement.firstChild);
        }
        //add new options
        for(let i=0;i<projectsArray.length;i++){
            const pOption=document.createElement("option");
            pOption.value=i;
            pOption.textContent=projectsArray[i].name;
            selectElement.appendChild(pOption);
        }
    }    
}
function cancelAddTask() {
    document.querySelector("#task--new").id = "task--new_hidden";
    document.querySelector(".task--add_hidden").classList.replace("task--add_hidden","task--add");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBK0I7QUFDSDtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkseURBQXFCO0FBQ3pCLElBQUksbURBQWtCO0FBQ3RCLElBQUksd0RBQXVCO0FBQzNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwUXFDO0FBQ047QUFDL0I7QUFDQTtBQUNBLFFBQVEsb0RBQXNCO0FBQzlCLEtBQUs7QUFDTDtBQUNBLFFBQVEsZ0RBQWtCO0FBQzFCO0FBQ0EsS0FBSztBQUNMO0FBQ0EsUUFBUSxzREFBd0I7QUFDaEMsS0FBSztBQUNMO0FBQ0EsUUFBUSx1REFBeUI7QUFDakMsS0FBSztBQUNMO0FBQ0EsUUFBUSw4Q0FBZ0I7QUFDeEIsS0FBSztBQUNMO0FBQ0EsUUFBUSwwQ0FBWTtBQUNwQixLQUFLO0FBQ0w7QUFDQSxRQUFRLGdEQUFrQjtBQUMxQixLQUFLO0FBQ0w7QUFDQSxpRUFBZSxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQnNCO0FBQ3JCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCw4REFBYztBQUNuRTtBQUNBLElBQUksd0RBQXVCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixxQkFBcUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsOERBQWM7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUN5Rzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEQxRDtBQUNoQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCw0REFBWTtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGtCQUFrQjtBQUNsQztBQUNBLHNEQUFzRCw0REFBWTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDdUY7Ozs7Ozs7O1VDbkR2RjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFDb0I7QUFDRTtBQUMzQyxzREFBUztBQUNULDBEQUFZLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvRE9Nc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9ldmVudHNTY3JpcHRzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCAqIGFzIHAgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0ICogYXMgdCBmcm9tIFwiLi90YXNrXCI7XG5mdW5jdGlvbiBoZWFkZXIoKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuaWQgPSBcImhlYWRlclwiO1xuICAgIGRpdi50ZXh0Q29udGVudCA9IFwiVG9kbyBMaXN0XCI7XG4gICAgcmV0dXJuIGRpdjtcbn1cbmZ1bmN0aW9uIHNpZGViYXIoKSB7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2lkZWJhci5pZCA9IFwic2lkZWJhclwiO1xuXG4gICAgY29uc3Qgc2lkZWJhckdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzaWRlYmFyR3JvdXAuaWQgPSBcInNpZGViYXItLWdyb3VwXCI7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlYmFyR3JvdXApO1xuICAgIHNpZGViYXJHcm91cC5hcHBlbmRDaGlsZChzaWRlYmFySGVhZGVyKFwiTXkgTGlzdFwiKSk7XG4gICAgc2lkZWJhckdyb3VwLmFwcGVuZENoaWxkKHNpZGViYXJIZWFkZXIoXCJUb2RheVwiKSk7XG4gICAgc2lkZWJhckdyb3VwLmFwcGVuZENoaWxkKHNpZGViYXJIZWFkZXIoXCJOZXh0IDcgRGF5c1wiKSk7XG5cbiAgICBjb25zdCBzaWRlYmFySGVhZFByb2plY3QgPSBzaWRlYmFySGVhZGVyKFwiUHJvamVjdHNcIik7XG4gICAgY29uc3Qgc2lkZWJhckhlYWRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNpZGViYXJIZWFkQnRuLmNsYXNzTmFtZSA9IFwic2lkZWJhci0taGVhZGVyX2J0blwiO1xuXG4gICAgY29uc3Qgc2lkZWJhckhlYWRCdG5JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgc2lkZWJhckhlYWRCdG5JY29uLmNsYXNzTmFtZSA9IFwic2lkZWJhci0taGVhZGVyX2J0bl9pY29uX2Rvd25cIjtcbiAgICBzaWRlYmFySGVhZEJ0bi5hcHBlbmRDaGlsZChzaWRlYmFySGVhZEJ0bkljb24pO1xuICAgIHNpZGViYXJIZWFkUHJvamVjdC5hcHBlbmRDaGlsZChzaWRlYmFySGVhZEJ0bik7XG4gICAgc2lkZWJhckdyb3VwLmFwcGVuZENoaWxkKHNpZGViYXJIZWFkUHJvamVjdCk7XG5cbiAgICBjb25zdCBzaWRlYmFyTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2lkZWJhckxpc3QuaWQgPSBcInNpZGViYXItLWxpc3RcIjtcbiAgICBzaWRlYmFyR3JvdXAuYXBwZW5kQ2hpbGQoc2lkZWJhckxpc3QpO1xuXG4gICAgY29uc3QgcHJvamVjdEFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdEFkZC5jbGFzc05hbWUgPSBcInByb2plY3QtLWFkZFwiO1xuICAgIHNpZGViYXJMaXN0LmFwcGVuZENoaWxkKHByb2plY3RBZGQpO1xuXG4gICAgY29uc3QgcHJvamVjdEFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdEFkZEJ0bi5jbGFzc05hbWUgPSBcInByb2plY3QtLWFkZF9idG5cIjtcbiAgICBwcm9qZWN0QWRkLmFwcGVuZENoaWxkKHByb2plY3RBZGRCdG4pO1xuXG4gICAgY29uc3QgcHJvamVjdEFkZEJ0bkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBwcm9qZWN0QWRkQnRuSWNvbi5jbGFzc05hbWUgPSBcInByb2plY3QtLWFkZF9idG5faWNvblwiO1xuICAgIHByb2plY3RBZGRCdG4uYXBwZW5kQ2hpbGQocHJvamVjdEFkZEJ0bkljb24pO1xuXG4gICAgY29uc3QgcHJvamVjdEFkZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RBZGROYW1lLmNsYXNzTmFtZSA9IFwicHJvamVjdC0tYWRkX25hbWVcIjtcbiAgICBwcm9qZWN0QWRkTmFtZS50ZXh0Q29udGVudCA9IFwiQWRkIFByb2plY3RcIjtcbiAgICBwcm9qZWN0QWRkLmFwcGVuZENoaWxkKHByb2plY3RBZGROYW1lKTtcbiAgICByZXR1cm4gc2lkZWJhcjtcbn1cbmZ1bmN0aW9uIHNpZGViYXJIZWFkZXIodENvbnRlbnQpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5jbGFzc05hbWUgPSBcInNpZGViYXItLWhlYWRlclwiO1xuICAgIGNvbnN0IGRpdkNoaWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZDaGlsZC5jbGFzc05hbWUgPSBcInNpZGViYXItLWhlYWRlcl90aXRsZVwiO1xuICAgIGRpdkNoaWxkLnRleHRDb250ZW50ID0gdENvbnRlbnQ7XG4gICAgZGl2LmFwcGVuZENoaWxkKGRpdkNoaWxkKTtcbiAgICByZXR1cm4gZGl2O1xufVxuZnVuY3Rpb24gc2lkZWJhclByb2plY3QodElkLHRDb250ZW50LHRDb2xvcix0Q291bnQpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0LmlkID0gdElkO1xuICAgIHByb2plY3QuY2xhc3NOYW1lID0gXCJwcm9qZWN0XCI7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3ROYW1lLmNsYXNzTmFtZSA9IFwicHJvamVjdC0tbmFtZVwiO1xuICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gdENvbnRlbnQ7XG4gICAgcHJvamVjdE5hbWUuc3R5bGUuY29sb3I9IHRDb2xvcjtcbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbiAgICBjb25zdCBwcm9qZWN0Q291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RDb3VudC5jbGFzc05hbWUgPSBcInByb2plY3QtLWNvdW50XCI7XG4gICAgcHJvamVjdENvdW50LnRleHRDb250ZW50ID0gdENvdW50O1xuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdENvdW50KTtcbiAgICByZXR1cm4gcHJvamVjdDtcbn1cbmZ1bmN0aW9uIG1haW4oKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbi5pZCA9IFwibWFpblwiO1xuXG4gICAgY29uc3QgbWFpbkdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluR3JvdXAuaWQgPSBcIm1haW4tLWdyb3VwXCI7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChtYWluR3JvdXApO1xuXG4gICAgY29uc3QgbWFpbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbkhlYWRlci5jbGFzc05hbWUgPSBcIm1haW4tLWhlYWRlclwiO1xuICAgIGNvbnN0IG1haW5IZWFkZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbkhlYWRlclRpdGxlLmNsYXNzTmFtZSA9IFwibWFpbi0taGVhZGVyX3RpdGxlXCI7XG4gICAgbWFpbkhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xuICAgIG1haW5IZWFkZXIuYXBwZW5kQ2hpbGQobWFpbkhlYWRlclRpdGxlKTtcbiAgICBtYWluR3JvdXAuYXBwZW5kQ2hpbGQobWFpbkhlYWRlcik7XG5cbiAgICBjb25zdCBtYWluTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbkxpc3QuaWQgPSBcIm1haW4tLWxpc3RcIjtcbiAgICBtYWluR3JvdXAuYXBwZW5kQ2hpbGQobWFpbkxpc3QpO1xuXG4gICAgY29uc3QgdGFza0FkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0FkZC5jbGFzc05hbWUgPSBcInRhc2stLWFkZFwiO1xuICAgIG1haW5MaXN0LmFwcGVuZENoaWxkKHRhc2tBZGQpO1xuXG4gICAgY29uc3QgdGFza0FkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0FkZEJ0bi5jbGFzc05hbWUgPSBcInRhc2stLWFkZF9idG5cIjtcbiAgICB0YXNrQWRkLmFwcGVuZENoaWxkKHRhc2tBZGRCdG4pO1xuXG4gICAgY29uc3QgdGFza0FkZEJ0bkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICB0YXNrQWRkQnRuSWNvbi5jbGFzc05hbWUgPSBcInRhc2stLWFkZF9idG5faWNvblwiO1xuICAgIHRhc2tBZGRCdG4uYXBwZW5kQ2hpbGQodGFza0FkZEJ0bkljb24pO1xuXG4gICAgY29uc3QgdGFza0FkZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tBZGROYW1lLmNsYXNzTmFtZSA9IFwidGFzay0tYWRkX25hbWVcIjtcbiAgICB0YXNrQWRkTmFtZS50ZXh0Q29udGVudCA9IFwiQWRkIFRhc2tcIjtcbiAgICB0YXNrQWRkLmFwcGVuZENoaWxkKHRhc2tBZGROYW1lKTtcblxuICAgIG1haW5MaXN0LmFwcGVuZChhZGRUYXNrKCkpO1xuICAgIHJldHVybiBtYWluO1xufVxuZnVuY3Rpb24gbWFpbkxpc3RUYXNrKHRDb250ZW50KSB7XG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFzay5jbGFzc05hbWUgPSBcInRhc2tcIjtcblxuICAgIGNvbnN0IHRhc2tJbnB1dE91dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrSW5wdXRPdXRlci5jbGFzc05hbWUgPSBcInRhc2stLWlucHV0b3V0ZXJcIjtcbiAgICB0YXNrLmFwcGVuZENoaWxkKHRhc2tJbnB1dE91dGVyKTtcblxuICAgIGNvbnN0IHRhc2tDaGVja2JveElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIE9iamVjdC5hc3NpZ24odGFza0NoZWNrYm94SW5wdXQsIHtcbiAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxuICAgICAgICBuYW1lOiBcInRhc2tfc3RhdGVcIixcbiAgICAgICAgaWQ6IFwidGFza19zdGF0ZVwiXG4gICAgfSk7XG4gICAgdGFza0lucHV0T3V0ZXIuYXBwZW5kQ2hpbGQodGFza0NoZWNrYm94SW5wdXQpO1xuXG4gICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tOYW1lLmNsYXNzTmFtZSA9IFwidGFzay0tbmFtZVwiO1xuICAgIHRhc2tOYW1lLnRleHRDb250ZW50ID0gdENvbnRlbnQ7XG4gICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XG4gICAgcmV0dXJuIHRhc2s7XG59XG5mdW5jdGlvbiBmb290ZXIoKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuaWQgPSBcImZvb3RlclwiO1xuICAgIGRpdi50ZXh0Q29udGVudCA9IFwiQ29weXJpZ2h0IMKpIDIwMjIgUmVkYVwiO1xuICAgIHJldHVybiBkaXY7XG59XG5mdW5jdGlvbiBhZGRQcm9qZWN0KCkge1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1Byb2plY3QuaWQgPSBcIm5ld3Byb2plY3RfaGlkZGVuXCI7XG4gICAgY29uc3QgbmV3UHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdQcm9qZWN0VGl0bGUuaWQgPSBcIm5ld3Byb2plY3QtLXRpdGxlXCI7XG4gICAgbmV3UHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gXCJBZGQgUHJvamVjdFwiO1xuICAgIG5ld1Byb2plY3QuYXBwZW5kQ2hpbGQobmV3UHJvamVjdFRpdGxlKTtcblxuICAgIGNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdQcm9qZWN0Rm9ybS5pZCA9IFwibmV3cHJvamVjdC0tZm9ybVwiO1xuICAgIG5ld1Byb2plY3QuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEZvcm0pO1xuXG4gICAgY29uc3QgbmV3UHJvamVjdEZvcm1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdQcm9qZWN0Rm9ybU5hbWUuaWQgPSBcIm5ld3Byb2plY3QtLWZvcm1fbmFtZVwiO1xuICAgIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKG5ld1Byb2plY3RGb3JtTmFtZSk7XG4gICAgY29uc3QgbmV3UHJvamVjdEZvcm1Db2xvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3UHJvamVjdEZvcm1Db2xvci5pZCA9IFwibmV3cHJvamVjdC0tZm9ybV9jb2xvclwiO1xuICAgIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKG5ld1Byb2plY3RGb3JtQ29sb3IpO1xuXG4gICAgY29uc3QgcHJvamVjdE5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBPYmplY3QuYXNzaWduKHByb2plY3ROYW1lTGFiZWwsIHtcbiAgICAgICAgZm9yOiBcInByb2plY3RfbmFtZVwiLFxuICAgICAgICB0ZXh0Q29udGVudDogXCJOYW1lXCJcbiAgICB9KTtcbiAgICBuZXdQcm9qZWN0Rm9ybU5hbWUuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVMYWJlbCk7XG5cbiAgICBjb25zdCBwcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIE9iamVjdC5hc3NpZ24ocHJvamVjdE5hbWVJbnB1dCwge1xuICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgbmFtZTogXCJwcm9qZWN0X25hbWVcIixcbiAgICAgICAgaWQ6IFwicHJvamVjdF9uYW1lXCJcbiAgICB9KTtcbiAgICBuZXdQcm9qZWN0Rm9ybU5hbWUuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVJbnB1dCk7XG5cbiAgICBjb25zdCBwcm9qZWN0Q29sb3JMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBPYmplY3QuYXNzaWduKHByb2plY3RDb2xvckxhYmVsLCB7XG4gICAgICAgIGZvcjogXCJwcm9qZWN0X2NvbG9yXCIsXG4gICAgICAgIHRleHRDb250ZW50OiBcIkNvbG9yXCJcbiAgICB9KTtcbiAgICBuZXdQcm9qZWN0Rm9ybUNvbG9yLmFwcGVuZENoaWxkKHByb2plY3RDb2xvckxhYmVsKTtcblxuICAgIGNvbnN0IHByb2plY3RDb2xvcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIE9iamVjdC5hc3NpZ24ocHJvamVjdENvbG9ySW5wdXQsIHtcbiAgICAgICAgdHlwZTogXCJjb2xvclwiLFxuICAgICAgICBuYW1lOiBcInByb2plY3RfY29sb3JcIixcbiAgICAgICAgaWQ6IFwicHJvamVjdF9jb2xvclwiXG4gICAgfSk7XG4gICAgbmV3UHJvamVjdEZvcm1Db2xvci5hcHBlbmRDaGlsZChwcm9qZWN0Q29sb3JJbnB1dCk7XG5cbiAgICBjb25zdCBuZXdQcm9qZWN0Rm9ybVN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3UHJvamVjdEZvcm1TdWJtaXQuaWQgPSBcIm5ld3Byb2plY3QtLWZvcm1fc3VibWl0XCI7XG4gICAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQobmV3UHJvamVjdEZvcm1TdWJtaXQpO1xuXG4gICAgY29uc3QgbmV3UHJvamVjdEZvcm1TdWJtaXRBZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1Byb2plY3RGb3JtU3VibWl0QWRkLmlkID0gXCJuZXdwcm9qZWN0LS1mb3JtX3N1Ym1pdF9hZGRcIjtcbiAgICBuZXdQcm9qZWN0Rm9ybVN1Ym1pdEFkZC50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG4gICAgbmV3UHJvamVjdEZvcm1TdWJtaXQuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEZvcm1TdWJtaXRBZGQpO1xuICAgIGNvbnN0IG5ld1Byb2plY3RGb3JtU3VibWl0Q2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdQcm9qZWN0Rm9ybVN1Ym1pdENhbmNlbC5pZCA9IFwibmV3cHJvamVjdC0tZm9ybV9zdWJtaXRfY2FuY2VsXCI7XG4gICAgbmV3UHJvamVjdEZvcm1TdWJtaXRDYW5jZWwudGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAgIG5ld1Byb2plY3RGb3JtU3VibWl0LmFwcGVuZENoaWxkKG5ld1Byb2plY3RGb3JtU3VibWl0Q2FuY2VsKTtcbiAgICByZXR1cm4gbmV3UHJvamVjdDtcbn1cbmZ1bmN0aW9uIGFkZFRhc2soKXtcbiAgICBjb25zdCB0YXNrTmV3PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza05ldy5pZD1cInRhc2stLW5ld19oaWRkZW5cIjtcbiAgICBcbiAgICBjb25zdCB0YXNrTmV3SW5wdXRzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza05ld0lucHV0cy5pZD1cInRhc2stLW5ld19pbnB1dHNcIjtcbiAgICB0YXNrTmV3LmFwcGVuZENoaWxkKHRhc2tOZXdJbnB1dHMpO1xuXG4gICAgY29uc3QgdGFza05hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBPYmplY3QuYXNzaWduKHRhc2tOYW1lSW5wdXQsIHtcbiAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgIG5hbWU6IFwidGFza19uYW1lXCIsXG4gICAgICAgIGlkOiBcInRhc2tfbmFtZVwiXG4gICAgfSk7XG4gICAgdGFza05ld0lucHV0cy5hcHBlbmRDaGlsZCh0YXNrTmFtZUlucHV0KTtcblxuICAgIGNvbnN0IHRhc2tTZWxlY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgT2JqZWN0LmFzc2lnbih0YXNrU2VsZWN0SW5wdXQsIHtcbiAgICAgICAgaWQ6IFwidGFza19wcm9qZWN0XCJcbiAgICB9KTtcbiAgICB0YXNrTmV3SW5wdXRzLmFwcGVuZENoaWxkKHRhc2tTZWxlY3RJbnB1dCk7XG4gICAgXG4gICAgY29uc3QgdGFza05ld1N1Ym1pdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tOZXdTdWJtaXQuaWQ9XCJ0YXNrLS1uZXdfc3VibWl0XCI7XG4gICAgdGFza05ldy5hcHBlbmRDaGlsZCh0YXNrTmV3U3VibWl0KTtcblxuICAgIGNvbnN0IHRhc2tOZXdTdWJtaXRBZGQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrTmV3U3VibWl0QWRkLmlkPVwidGFzay0tbmV3X3N1Ym1pdF9hZGRcIjtcbiAgICB0YXNrTmV3U3VibWl0QWRkLnRleHRDb250ZW50PVwiQWRkIFRhc2tcIjtcbiAgICB0YXNrTmV3U3VibWl0LmFwcGVuZENoaWxkKHRhc2tOZXdTdWJtaXRBZGQpO1xuXG4gICAgY29uc3QgdGFza05ld1N1Ym1pdENhbmNlbD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tOZXdTdWJtaXRDYW5jZWwuaWQ9XCJ0YXNrLS1uZXdfc3VibWl0X2NhbmNlbFwiO1xuICAgIHRhc2tOZXdTdWJtaXRDYW5jZWwudGV4dENvbnRlbnQ9XCJDYW5jZWxcIjtcbiAgICB0YXNrTmV3U3VibWl0LmFwcGVuZENoaWxkKHRhc2tOZXdTdWJtaXRDYW5jZWwpO1xuXG4gICAgcmV0dXJuIHRhc2tOZXc7XG59XG5mdW5jdGlvbiBjcmVhdGVTdG9yYWdlKCkge1xuICAgIGxldCBjaGVjayA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb0xpc3RcIik7XG4gICAgaWYgKGNoZWNrID09PSBudWxsKSB7XG4gICAgICAgIGxldCB0b2RvTGlzdCA9IHsgcHJvamVjdDogW10sIHRhc2s6IFtdIH07XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb0xpc3RcIiwgSlNPTi5zdHJpbmdpZnkodG9kb0xpc3QpKTtcbiAgICB9XG59XG5mdW5jdGlvbiBidWlsZFNpdGUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudC5pZCA9IFwiY29udGVudFwiO1xuICAgIGNvbnRlbnQuYXBwZW5kKGhlYWRlcigpLCBzaWRlYmFyKCksIG1haW4oKSwgZm9vdGVyKCksIGFkZFByb2plY3QoKSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICBjcmVhdGVTdG9yYWdlKCk7XG4gICAgcC5wb3B1bGF0ZVByb2plY3RMaXN0KCk7XG4gICAgdC5wb3B1bGF0ZVRhc2tMaXN0KCk7XG4gICAgdC5wb3B1bGF0ZVByb2plY3RTZWxlY3QoKTtcbn1cblxuZXhwb3J0IHsgYnVpbGRTaXRlLCBtYWluTGlzdFRhc2ssIHNpZGViYXJQcm9qZWN0IH07IiwiaW1wb3J0ICogYXMgcHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgKiBhcyB0YXNrIGZyb20gXCIuL3Rhc2tcIjtcbmZ1bmN0aW9uIGNyZWF0ZUV2ZW50cygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtLWFkZFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBwcm9qZWN0LnNob3dBZGRQcm9qZWN0KCk7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXdwcm9qZWN0LS1mb3JtX3N1Ym1pdF9hZGRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcHJvamVjdC5hZGRQcm9qZWN0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3cHJvamVjdC0tZm9ybV9uYW1lIGlucHV0XCIpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3cHJvamVjdC0tZm9ybV9jb2xvciBpbnB1dFwiKS52YWx1ZSk7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXdwcm9qZWN0LS1mb3JtX3N1Ym1pdF9jYW5jZWxcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcHJvamVjdC5jYW5jZWxBZGRQcm9qZWN0KCk7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyLS1oZWFkZXJfYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHByb2plY3QudG9nZ2xlUHJvamVjdExpc3QoKTtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stLWFkZFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0YXNrLnNob3dBZGRUYXNrKCk7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLS1uZXdfc3VibWl0X2FkZFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0YXNrLmFkZFRhc2soZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrX25hbWVcIikudmFsdWUsZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrX3Byb2plY3RcIikudmFsdWUpO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay0tbmV3X3N1Ym1pdF9jYW5jZWxcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGFzay5jYW5jZWxBZGRUYXNrKCk7XG4gICAgfSk7XG59XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFdmVudHM7IiwiaW1wb3J0IHsgc2lkZWJhclByb2plY3QgfSBmcm9tIFwiLi9ET01zY3JpcHRzLmpzXCI7XG5pbXBvcnQgKiBhcyB0IGZyb20gXCIuL3Rhc2tcIjtcbmNvbnN0IHByb2plY3Q9KG5hbWUsY29sb3IpPT57XG4gICAgbGV0IGlkPURhdGUubm93KCkudG9TdHJpbmcoMzYpICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMik7XG4gICAgbGV0IGNvdW50PTA7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaWQsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIGNvbG9yLFxuICAgICAgICBjb3VudCxcbiAgICB9XG59O1xuZnVuY3Rpb24gc2hvd0FkZFByb2plY3QoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXdwcm9qZWN0X2hpZGRlblwiKS5pZCA9IFwibmV3cHJvamVjdFwiO1xufVxuZnVuY3Rpb24gYWRkUHJvamVjdChuYW1lVmFsdWUsY29sb3JWYWx1ZSkge1xuICAgIGxldCBjdXJyZW50UHJvamVjdD1wcm9qZWN0KG5hbWVWYWx1ZSxjb2xvclZhbHVlKTtcbiAgICBsZXQgb2JqPUpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2RvTGlzdFwiKSk7XG4gICAgb2JqLnByb2plY3QucHVzaChwcm9qZWN0KG5hbWVWYWx1ZSxjb2xvclZhbHVlKSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvTGlzdFwiLEpTT04uc3RyaW5naWZ5KG9iaikpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2lkZWJhci0tbGlzdFwiKS5wcmVwZW5kKHNpZGViYXJQcm9qZWN0KGN1cnJlbnRQcm9qZWN0LmlkLG5hbWVWYWx1ZSxjb2xvclZhbHVlLGN1cnJlbnRQcm9qZWN0LmNvdW50KSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXdwcm9qZWN0XCIpLmlkID0gXCJuZXdwcm9qZWN0X2hpZGRlblwiO1xuICAgIHQucG9wdWxhdGVQcm9qZWN0U2VsZWN0KCk7XG59XG5mdW5jdGlvbiBwb3B1bGF0ZVByb2plY3RMaXN0KCl7XG4gICAgbGV0IG9iaj1KU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb0xpc3RcIikpO1xuICAgIGZvcihsZXQgaT0wO2k8b2JqLnByb2plY3QubGVuZ3RoO2krKyl7XG4gICAgICAgIGxldCBpZFZhbHVlPW9iai5wcm9qZWN0W2ldLmlkO1xuICAgICAgICBsZXQgbmFtZVZhbHVlPW9iai5wcm9qZWN0W2ldLm5hbWU7XG4gICAgICAgIGxldCBjb2xvclZhbHVlPW9iai5wcm9qZWN0W2ldLmNvbG9yO1xuICAgICAgICBsZXQgY291bnRWYWx1ZT1vYmoucHJvamVjdFtpXS5jb3VudDtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaWRlYmFyLS1saXN0XCIpLnByZXBlbmQoc2lkZWJhclByb2plY3QoaWRWYWx1ZSxuYW1lVmFsdWUsY29sb3JWYWx1ZSxjb3VudFZhbHVlKSk7XG4gICAgfVxufVxuZnVuY3Rpb24gY2FuY2VsQWRkUHJvamVjdCgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ld3Byb2plY3RcIikuaWQgPSBcIm5ld3Byb2plY3RfaGlkZGVuXCI7XG59XG5mdW5jdGlvbiB0b2dnbGVQcm9qZWN0TGlzdCgpIHtcbiAgICBjb25zdCBzZWxlY3RPbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpZGViYXItLWxpc3RcIik7XG4gICAgY29uc3Qgc2VsZWN0VHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaWRlYmFyLS1saXN0X2hpZGRlblwiKTtcbiAgICBpZiAoc2VsZWN0T25lKSB7XG4gICAgICAgIHNlbGVjdE9uZS5pZCA9IFwic2lkZWJhci0tbGlzdF9oaWRkZW5cIjtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyLS1oZWFkZXJfYnRuX2ljb25fZG93blwiKS5jbGFzc0xpc3QucmVwbGFjZShcInNpZGViYXItLWhlYWRlcl9idG5faWNvbl9kb3duXCIsIFwic2lkZWJhci0taGVhZGVyX2J0bl9pY29uX3VwXCIpO1xuICAgIH0gZWxzZSBpZiAoc2VsZWN0VHdvKSB7XG4gICAgICAgIHNlbGVjdFR3by5pZCA9IFwic2lkZWJhci0tbGlzdFwiO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXItLWhlYWRlcl9idG5faWNvbl91cFwiKS5jbGFzc0xpc3QucmVwbGFjZShcInNpZGViYXItLWhlYWRlcl9idG5faWNvbl91cFwiLCBcInNpZGViYXItLWhlYWRlcl9idG5faWNvbl9kb3duXCIpO1xuICAgIH1cbn1cbmV4cG9ydCB7IHByb2plY3QsIHNob3dBZGRQcm9qZWN0LCBhZGRQcm9qZWN0LCBjYW5jZWxBZGRQcm9qZWN0LCB0b2dnbGVQcm9qZWN0TGlzdCwgcG9wdWxhdGVQcm9qZWN0TGlzdCB9O1xuIiwiaW1wb3J0IHsgbWFpbkxpc3RUYXNrIH0gZnJvbSBcIi4vRE9Nc2NyaXB0cy5qc1wiO1xuaW1wb3J0ICogYXMgcCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5jb25zdCB0YXNrPShuYW1lLHByb2plY3RJZCk9PntcbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lLFxuICAgICAgICBwcm9qZWN0SWQsXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHNob3dBZGRUYXNrKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay0tbmV3X2hpZGRlblwiKS5pZCA9IFwidGFzay0tbmV3XCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLS1hZGRcIikuY2xhc3NMaXN0LnJlcGxhY2UoXCJ0YXNrLS1hZGRcIixcInRhc2stLWFkZF9oaWRkZW5cIik7XG59XG5mdW5jdGlvbiBhZGRUYXNrKG5hbWVWYWx1ZSxwcm9qZWN0VmFsdWUpIHtcbiAgICBsZXQgb2JqPUpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2RvTGlzdFwiKSk7XG4gICAgb2JqLnRhc2sucHVzaCh0YXNrKG5hbWVWYWx1ZSxvYmoucHJvamVjdFtwcm9qZWN0VmFsdWVdLmlkKSk7XG4gICAgb2JqLnByb2plY3RbcHJvamVjdFZhbHVlXS5jb3VudCsrO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIrb2JqLnByb2plY3RbcHJvamVjdFZhbHVlXS5pZCtcIiAucHJvamVjdC0tY291bnRcIikudGV4dENvbnRlbnQ9b2JqLnByb2plY3RbcHJvamVjdFZhbHVlXS5jb3VudDtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9MaXN0XCIsSlNPTi5zdHJpbmdpZnkob2JqKSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLS1saXN0XCIpLnByZXBlbmQobWFpbkxpc3RUYXNrKG5hbWVWYWx1ZSkpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay0tbmV3XCIpLmlkID0gXCJ0YXNrLS1uZXdfaGlkZGVuXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLS1hZGRfaGlkZGVuXCIpLmNsYXNzTGlzdC5yZXBsYWNlKFwidGFzay0tYWRkX2hpZGRlblwiLFwidGFzay0tYWRkXCIpO1xufVxuZnVuY3Rpb24gcG9wdWxhdGVUYXNrTGlzdCgpe1xuICAgIGxldCBvYmo9SlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9MaXN0XCIpKTtcbiAgICBmb3IobGV0IGk9MDtpPG9iai50YXNrLmxlbmd0aDtpKyspe1xuICAgICAgICBsZXQgbmFtZVZhbHVlPW9iai50YXNrW2ldLm5hbWU7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi0tbGlzdFwiKS5wcmVwZW5kKG1haW5MaXN0VGFzayhuYW1lVmFsdWUpKTtcbiAgICB9XG59XG5mdW5jdGlvbiBwb3B1bGF0ZVByb2plY3RTZWxlY3QoKXtcbiAgICBsZXQgcHJvamVjdHNBcnJheT1KU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb0xpc3RcIikpLnByb2plY3Q7XG4gICAgbGV0IHNlbGVjdEVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrX3Byb2plY3RcIik7XG4gICAgLy9pZiBwcm9qZWN0IGFycmF5IGlzIG5vdCBlbXB0eSByZXBvcHVsYXRlIHNlbGVjdCBlbGVtZW50XG4gICAgaWYoIEFycmF5LmlzQXJyYXkocHJvamVjdHNBcnJheSkgJiYgcHJvamVjdHNBcnJheS5sZW5ndGggPiAwKXtcbiAgICAgICAgLy9yZW1vdmUgb2xkIG9wdGlvbnNcbiAgICAgICAgd2hpbGUgKHNlbGVjdEVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgc2VsZWN0RWxlbWVudC5yZW1vdmVDaGlsZChzZWxlY3RFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIC8vYWRkIG5ldyBvcHRpb25zXG4gICAgICAgIGZvcihsZXQgaT0wO2k8cHJvamVjdHNBcnJheS5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIGNvbnN0IHBPcHRpb249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgIHBPcHRpb24udmFsdWU9aTtcbiAgICAgICAgICAgIHBPcHRpb24udGV4dENvbnRlbnQ9cHJvamVjdHNBcnJheVtpXS5uYW1lO1xuICAgICAgICAgICAgc2VsZWN0RWxlbWVudC5hcHBlbmRDaGlsZChwT3B0aW9uKTtcbiAgICAgICAgfVxuICAgIH0gICAgXG59XG5mdW5jdGlvbiBjYW5jZWxBZGRUYXNrKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay0tbmV3XCIpLmlkID0gXCJ0YXNrLS1uZXdfaGlkZGVuXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLS1hZGRfaGlkZGVuXCIpLmNsYXNzTGlzdC5yZXBsYWNlKFwidGFzay0tYWRkX2hpZGRlblwiLFwidGFzay0tYWRkXCIpO1xufVxuZXhwb3J0IHsgc2hvd0FkZFRhc2ssIGFkZFRhc2ssIGNhbmNlbEFkZFRhc2ssIHBvcHVsYXRlVGFza0xpc3QsIHBvcHVsYXRlUHJvamVjdFNlbGVjdH07XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBidWlsZFNpdGUgfSBmcm9tIFwiLi9ET01zY3JpcHRzXCI7XG5pbXBvcnQgY3JlYXRlRXZlbnRzIGZyb20gXCIuL2V2ZW50c1NjcmlwdHNcIjtcbmJ1aWxkU2l0ZSgpO1xuY3JlYXRlRXZlbnRzKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9