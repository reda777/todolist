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
function sidebarProject(tContent,tColor) {
    const project = document.createElement("div");
    project.className = "project";
    const projectName = document.createElement("div");
    projectName.className = "project--name";
    projectName.textContent = tContent;
    projectName.style.color= tColor;
    project.appendChild(projectName);
    const projectCount = document.createElement("div");
    projectCount.className = "project--count";
    projectCount.textContent = "0";
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
    
    const taskNameInput = document.createElement("input");
    Object.assign(taskNameInput, {
        type: "text",
        name: "task_name",
        id: "task_name"
    });
    taskNew.appendChild(taskNameInput);

    const taskSelectInput = document.createElement("select");
    Object.assign(taskSelectInput, {
        id: "task_project"
    });
    taskNew.appendChild(taskSelectInput);
    addTask_fillSelect(taskSelectInput);
    
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
function addTask_fillSelect(selectElement){
    let todoList_projects=JSON.parse(localStorage.getItem("todoList")).project;
    for(let i=0;i<todoList_projects.length;i++){
        if(todoList_projects[i]!==undefined){
            const pOption=document.createElement("option");
            pOption.value=i;
            pOption.textContent=todoList_projects[i].name;
            selectElement.appendChild(pOption);
        }
    }
}
function createStorage(){
    let check=localStorage.getItem("todoList");
    if(check===null){
        let todoList={project:[],
                        task:[]};
                        console.log(todoList);
        localStorage.setItem("todoList",JSON.stringify(todoList));
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
        _task__WEBPACK_IMPORTED_MODULE_1__.addTask(document.querySelector("#task--new input").value);
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

const project=(name,color)=>{
    return {
        name: name,
        color: color,
        taskCount: function () {
            console.log("taskCount");
        }
    };
}
function showAddProject() {
    document.querySelector("#newproject_hidden").id = "newproject";
}
function addProject(nameValue,colorValue) {
    
    let obj=JSON.parse(localStorage.getItem("todoList"));
    obj.project.push({name:nameValue,color:colorValue});
    localStorage.setItem("todoList",JSON.stringify(obj));
    document.querySelector("#sidebar--list").prepend((0,_DOMscripts_js__WEBPACK_IMPORTED_MODULE_0__.sidebarProject)(nameValue,colorValue));
    document.querySelector("#newproject").id = "newproject_hidden";

}
function populateProjectList(){
    let obj=JSON.parse(localStorage.getItem("todoList"));
    for(let i=0;i<obj.project.length;i++){
        let nameValue=obj.project[i].name;
        let colorValue=obj.project[i].color;
        document.querySelector("#sidebar--list").prepend((0,_DOMscripts_js__WEBPACK_IMPORTED_MODULE_0__.sidebarProject)(nameValue,colorValue));
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
/* harmony export */   "populateTaskList": () => (/* binding */ populateTaskList),
/* harmony export */   "showAddTask": () => (/* binding */ showAddTask)
/* harmony export */ });
/* harmony import */ var _DOMscripts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMscripts.js */ "./src/DOMscripts.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");


const task=(name,project)=>{
    return {
        name: name,
        project: project,
    };
}
function showAddTask() {
    document.querySelector("#task--new_hidden").id = "task--new";
    document.querySelector(".task--add").classList.replace("task--add","task--add_hidden");
}
function addTask(nameValue) {
    let obj=JSON.parse(localStorage.getItem("todoList"));
    obj.task.push({name:nameValue});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBK0I7QUFDSDtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDJCQUEyQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlEQUFxQjtBQUN6QixJQUFJLG1EQUFrQjtBQUN0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNVFxQztBQUNOO0FBQy9CO0FBQ0E7QUFDQSxRQUFRLG9EQUFzQjtBQUM5QixLQUFLO0FBQ0w7QUFDQSxRQUFRLGdEQUFrQjtBQUMxQjtBQUNBLEtBQUs7QUFDTDtBQUNBLFFBQVEsc0RBQXdCO0FBQ2hDLEtBQUs7QUFDTDtBQUNBLFFBQVEsdURBQXlCO0FBQ2pDLEtBQUs7QUFDTDtBQUNBLFFBQVEsOENBQWdCO0FBQ3hCLEtBQUs7QUFDTDtBQUNBLFFBQVEsMENBQVk7QUFDcEIsS0FBSztBQUNMO0FBQ0EsUUFBUSxnREFBa0I7QUFDMUIsS0FBSztBQUNMO0FBQ0EsaUVBQWUsWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQnNCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixnQ0FBZ0M7QUFDdEQ7QUFDQSxxREFBcUQsOERBQWM7QUFDbkU7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHFCQUFxQjtBQUNyQztBQUNBO0FBQ0EseURBQXlELDhEQUFjO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDeUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUMxRDtBQUNSO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDO0FBQ0Esa0RBQWtELDREQUFZO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0JBQWtCO0FBQ2xDO0FBQ0Esc0RBQXNELDREQUFZO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNpRTs7Ozs7Ozs7VUMvQmpFO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05xQjtBQUNvQjtBQUNFO0FBQzNDLHNEQUFTO0FBQ1QsMERBQVksRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcz9lMzIwIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0RPTXNjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZXZlbnRzU2NyaXB0cy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgKiBhcyBwIGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCAqIGFzIHQgZnJvbSBcIi4vdGFza1wiO1xuZnVuY3Rpb24gaGVhZGVyKCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2LmlkID0gXCJoZWFkZXJcIjtcbiAgICBkaXYudGV4dENvbnRlbnQgPSBcIlRvZG8gTGlzdFwiO1xuICAgIHJldHVybiBkaXY7XG59XG5mdW5jdGlvbiBzaWRlYmFyKCkge1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNpZGViYXIuaWQgPSBcInNpZGViYXJcIjtcblxuICAgIGNvbnN0IHNpZGViYXJHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2lkZWJhckdyb3VwLmlkID0gXCJzaWRlYmFyLS1ncm91cFwiO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoc2lkZWJhckdyb3VwKTtcbiAgICBzaWRlYmFyR3JvdXAuYXBwZW5kQ2hpbGQoc2lkZWJhckhlYWRlcihcIk15IExpc3RcIikpO1xuICAgIHNpZGViYXJHcm91cC5hcHBlbmRDaGlsZChzaWRlYmFySGVhZGVyKFwiVG9kYXlcIikpO1xuICAgIHNpZGViYXJHcm91cC5hcHBlbmRDaGlsZChzaWRlYmFySGVhZGVyKFwiTmV4dCA3IERheXNcIikpO1xuXG4gICAgY29uc3Qgc2lkZWJhckhlYWRQcm9qZWN0ID0gc2lkZWJhckhlYWRlcihcIlByb2plY3RzXCIpO1xuICAgIGNvbnN0IHNpZGViYXJIZWFkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzaWRlYmFySGVhZEJ0bi5jbGFzc05hbWUgPSBcInNpZGViYXItLWhlYWRlcl9idG5cIjtcblxuICAgIGNvbnN0IHNpZGViYXJIZWFkQnRuSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHNpZGViYXJIZWFkQnRuSWNvbi5jbGFzc05hbWUgPSBcInNpZGViYXItLWhlYWRlcl9idG5faWNvbl9kb3duXCI7XG4gICAgc2lkZWJhckhlYWRCdG4uYXBwZW5kQ2hpbGQoc2lkZWJhckhlYWRCdG5JY29uKTtcbiAgICBzaWRlYmFySGVhZFByb2plY3QuYXBwZW5kQ2hpbGQoc2lkZWJhckhlYWRCdG4pO1xuICAgIHNpZGViYXJHcm91cC5hcHBlbmRDaGlsZChzaWRlYmFySGVhZFByb2plY3QpO1xuXG4gICAgY29uc3Qgc2lkZWJhckxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNpZGViYXJMaXN0LmlkID0gXCJzaWRlYmFyLS1saXN0XCI7XG4gICAgc2lkZWJhckdyb3VwLmFwcGVuZENoaWxkKHNpZGViYXJMaXN0KTtcblxuICAgIGNvbnN0IHByb2plY3RBZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RBZGQuY2xhc3NOYW1lID0gXCJwcm9qZWN0LS1hZGRcIjtcbiAgICBzaWRlYmFyTGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0QWRkKTtcblxuICAgIGNvbnN0IHByb2plY3RBZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RBZGRCdG4uY2xhc3NOYW1lID0gXCJwcm9qZWN0LS1hZGRfYnRuXCI7XG4gICAgcHJvamVjdEFkZC5hcHBlbmRDaGlsZChwcm9qZWN0QWRkQnRuKTtcblxuICAgIGNvbnN0IHByb2plY3RBZGRCdG5JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgcHJvamVjdEFkZEJ0bkljb24uY2xhc3NOYW1lID0gXCJwcm9qZWN0LS1hZGRfYnRuX2ljb25cIjtcbiAgICBwcm9qZWN0QWRkQnRuLmFwcGVuZENoaWxkKHByb2plY3RBZGRCdG5JY29uKTtcblxuICAgIGNvbnN0IHByb2plY3RBZGROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0QWRkTmFtZS5jbGFzc05hbWUgPSBcInByb2plY3QtLWFkZF9uYW1lXCI7XG4gICAgcHJvamVjdEFkZE5hbWUudGV4dENvbnRlbnQgPSBcIkFkZCBQcm9qZWN0XCI7XG4gICAgcHJvamVjdEFkZC5hcHBlbmRDaGlsZChwcm9qZWN0QWRkTmFtZSk7XG4gICAgcmV0dXJuIHNpZGViYXI7XG59XG5mdW5jdGlvbiBzaWRlYmFySGVhZGVyKHRDb250ZW50KSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuY2xhc3NOYW1lID0gXCJzaWRlYmFyLS1oZWFkZXJcIjtcbiAgICBjb25zdCBkaXZDaGlsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2Q2hpbGQuY2xhc3NOYW1lID0gXCJzaWRlYmFyLS1oZWFkZXJfdGl0bGVcIjtcbiAgICBkaXZDaGlsZC50ZXh0Q29udGVudCA9IHRDb250ZW50O1xuICAgIGRpdi5hcHBlbmRDaGlsZChkaXZDaGlsZCk7XG4gICAgcmV0dXJuIGRpdjtcbn1cbmZ1bmN0aW9uIHNpZGViYXJQcm9qZWN0KHRDb250ZW50LHRDb2xvcikge1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3QuY2xhc3NOYW1lID0gXCJwcm9qZWN0XCI7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3ROYW1lLmNsYXNzTmFtZSA9IFwicHJvamVjdC0tbmFtZVwiO1xuICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gdENvbnRlbnQ7XG4gICAgcHJvamVjdE5hbWUuc3R5bGUuY29sb3I9IHRDb2xvcjtcbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbiAgICBjb25zdCBwcm9qZWN0Q291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RDb3VudC5jbGFzc05hbWUgPSBcInByb2plY3QtLWNvdW50XCI7XG4gICAgcHJvamVjdENvdW50LnRleHRDb250ZW50ID0gXCIwXCI7XG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0Q291bnQpO1xuICAgIHJldHVybiBwcm9qZWN0O1xufVxuZnVuY3Rpb24gbWFpbigpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluLmlkID0gXCJtYWluXCI7XG5cbiAgICBjb25zdCBtYWluR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5Hcm91cC5pZCA9IFwibWFpbi0tZ3JvdXBcIjtcbiAgICBtYWluLmFwcGVuZENoaWxkKG1haW5Hcm91cCk7XG5cbiAgICBjb25zdCBtYWluSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluSGVhZGVyLmNsYXNzTmFtZSA9IFwibWFpbi0taGVhZGVyXCI7XG4gICAgY29uc3QgbWFpbkhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluSGVhZGVyVGl0bGUuY2xhc3NOYW1lID0gXCJtYWluLS1oZWFkZXJfdGl0bGVcIjtcbiAgICBtYWluSGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSBcIlRvZGF5XCI7XG4gICAgbWFpbkhlYWRlci5hcHBlbmRDaGlsZChtYWluSGVhZGVyVGl0bGUpO1xuICAgIG1haW5Hcm91cC5hcHBlbmRDaGlsZChtYWluSGVhZGVyKTtcblxuICAgIGNvbnN0IG1haW5MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluTGlzdC5pZCA9IFwibWFpbi0tbGlzdFwiO1xuICAgIG1haW5Hcm91cC5hcHBlbmRDaGlsZChtYWluTGlzdCk7XG5cbiAgICBjb25zdCB0YXNrQWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrQWRkLmNsYXNzTmFtZSA9IFwidGFzay0tYWRkXCI7XG4gICAgbWFpbkxpc3QuYXBwZW5kQ2hpbGQodGFza0FkZCk7XG5cbiAgICBjb25zdCB0YXNrQWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrQWRkQnRuLmNsYXNzTmFtZSA9IFwidGFzay0tYWRkX2J0blwiO1xuICAgIHRhc2tBZGQuYXBwZW5kQ2hpbGQodGFza0FkZEJ0bik7XG5cbiAgICBjb25zdCB0YXNrQWRkQnRuSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHRhc2tBZGRCdG5JY29uLmNsYXNzTmFtZSA9IFwidGFzay0tYWRkX2J0bl9pY29uXCI7XG4gICAgdGFza0FkZEJ0bi5hcHBlbmRDaGlsZCh0YXNrQWRkQnRuSWNvbik7XG5cbiAgICBjb25zdCB0YXNrQWRkTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0FkZE5hbWUuY2xhc3NOYW1lID0gXCJ0YXNrLS1hZGRfbmFtZVwiO1xuICAgIHRhc2tBZGROYW1lLnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiO1xuICAgIHRhc2tBZGQuYXBwZW5kQ2hpbGQodGFza0FkZE5hbWUpO1xuXG4gICAgbWFpbkxpc3QuYXBwZW5kKGFkZFRhc2soKSk7XG4gICAgcmV0dXJuIG1haW47XG59XG5mdW5jdGlvbiBtYWluTGlzdFRhc2sodENvbnRlbnQpIHtcbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrLmNsYXNzTmFtZSA9IFwidGFza1wiO1xuXG4gICAgY29uc3QgdGFza0lucHV0T3V0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tJbnB1dE91dGVyLmNsYXNzTmFtZSA9IFwidGFzay0taW5wdXRvdXRlclwiO1xuICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza0lucHV0T3V0ZXIpO1xuXG4gICAgY29uc3QgdGFza0NoZWNrYm94SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgT2JqZWN0LmFzc2lnbih0YXNrQ2hlY2tib3hJbnB1dCwge1xuICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgIG5hbWU6IFwidGFza19zdGF0ZVwiLFxuICAgICAgICBpZDogXCJ0YXNrX3N0YXRlXCJcbiAgICB9KTtcbiAgICB0YXNrSW5wdXRPdXRlci5hcHBlbmRDaGlsZCh0YXNrQ2hlY2tib3hJbnB1dCk7XG5cbiAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza05hbWUuY2xhc3NOYW1lID0gXCJ0YXNrLS1uYW1lXCI7XG4gICAgdGFza05hbWUudGV4dENvbnRlbnQgPSB0Q29udGVudDtcbiAgICB0YXNrLmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcbiAgICByZXR1cm4gdGFzaztcbn1cbmZ1bmN0aW9uIGZvb3RlcigpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5pZCA9IFwiZm9vdGVyXCI7XG4gICAgZGl2LnRleHRDb250ZW50ID0gXCJDb3B5cmlnaHQgwqkgMjAyMiBSZWRhXCI7XG4gICAgcmV0dXJuIGRpdjtcbn1cbmZ1bmN0aW9uIGFkZFByb2plY3QoKSB7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3UHJvamVjdC5pZCA9IFwibmV3cHJvamVjdF9oaWRkZW5cIjtcbiAgICBjb25zdCBuZXdQcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1Byb2plY3RUaXRsZS5pZCA9IFwibmV3cHJvamVjdC0tdGl0bGVcIjtcbiAgICBuZXdQcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBcIkFkZCBQcm9qZWN0XCI7XG4gICAgbmV3UHJvamVjdC5hcHBlbmRDaGlsZChuZXdQcm9qZWN0VGl0bGUpO1xuXG4gICAgY29uc3QgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1Byb2plY3RGb3JtLmlkID0gXCJuZXdwcm9qZWN0LS1mb3JtXCI7XG4gICAgbmV3UHJvamVjdC5hcHBlbmRDaGlsZChuZXdQcm9qZWN0Rm9ybSk7XG5cbiAgICBjb25zdCBuZXdQcm9qZWN0Rm9ybU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1Byb2plY3RGb3JtTmFtZS5pZCA9IFwibmV3cHJvamVjdC0tZm9ybV9uYW1lXCI7XG4gICAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQobmV3UHJvamVjdEZvcm1OYW1lKTtcbiAgICBjb25zdCBuZXdQcm9qZWN0Rm9ybUNvbG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdQcm9qZWN0Rm9ybUNvbG9yLmlkID0gXCJuZXdwcm9qZWN0LS1mb3JtX2NvbG9yXCI7XG4gICAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQobmV3UHJvamVjdEZvcm1Db2xvcik7XG5cbiAgICBjb25zdCBwcm9qZWN0TmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIE9iamVjdC5hc3NpZ24ocHJvamVjdE5hbWVMYWJlbCwge1xuICAgICAgICBmb3I6IFwicHJvamVjdF9uYW1lXCIsXG4gICAgICAgIHRleHRDb250ZW50OiBcIk5hbWVcIlxuICAgIH0pO1xuICAgIG5ld1Byb2plY3RGb3JtTmFtZS5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZUxhYmVsKTtcblxuICAgIGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgT2JqZWN0LmFzc2lnbihwcm9qZWN0TmFtZUlucHV0LCB7XG4gICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICBuYW1lOiBcInByb2plY3RfbmFtZVwiLFxuICAgICAgICBpZDogXCJwcm9qZWN0X25hbWVcIlxuICAgIH0pO1xuICAgIG5ld1Byb2plY3RGb3JtTmFtZS5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZUlucHV0KTtcblxuICAgIGNvbnN0IHByb2plY3RDb2xvckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIE9iamVjdC5hc3NpZ24ocHJvamVjdENvbG9yTGFiZWwsIHtcbiAgICAgICAgZm9yOiBcInByb2plY3RfY29sb3JcIixcbiAgICAgICAgdGV4dENvbnRlbnQ6IFwiQ29sb3JcIlxuICAgIH0pO1xuICAgIG5ld1Byb2plY3RGb3JtQ29sb3IuYXBwZW5kQ2hpbGQocHJvamVjdENvbG9yTGFiZWwpO1xuXG4gICAgY29uc3QgcHJvamVjdENvbG9ySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgT2JqZWN0LmFzc2lnbihwcm9qZWN0Q29sb3JJbnB1dCwge1xuICAgICAgICB0eXBlOiBcImNvbG9yXCIsXG4gICAgICAgIG5hbWU6IFwicHJvamVjdF9jb2xvclwiLFxuICAgICAgICBpZDogXCJwcm9qZWN0X2NvbG9yXCJcbiAgICB9KTtcbiAgICBuZXdQcm9qZWN0Rm9ybUNvbG9yLmFwcGVuZENoaWxkKHByb2plY3RDb2xvcklucHV0KTtcblxuICAgIGNvbnN0IG5ld1Byb2plY3RGb3JtU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdQcm9qZWN0Rm9ybVN1Ym1pdC5pZCA9IFwibmV3cHJvamVjdC0tZm9ybV9zdWJtaXRcIjtcbiAgICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChuZXdQcm9qZWN0Rm9ybVN1Ym1pdCk7XG5cbiAgICBjb25zdCBuZXdQcm9qZWN0Rm9ybVN1Ym1pdEFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3UHJvamVjdEZvcm1TdWJtaXRBZGQuaWQgPSBcIm5ld3Byb2plY3QtLWZvcm1fc3VibWl0X2FkZFwiO1xuICAgIG5ld1Byb2plY3RGb3JtU3VibWl0QWRkLnRleHRDb250ZW50ID0gXCJBZGRcIjtcbiAgICBuZXdQcm9qZWN0Rm9ybVN1Ym1pdC5hcHBlbmRDaGlsZChuZXdQcm9qZWN0Rm9ybVN1Ym1pdEFkZCk7XG4gICAgY29uc3QgbmV3UHJvamVjdEZvcm1TdWJtaXRDYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1Byb2plY3RGb3JtU3VibWl0Q2FuY2VsLmlkID0gXCJuZXdwcm9qZWN0LS1mb3JtX3N1Ym1pdF9jYW5jZWxcIjtcbiAgICBuZXdQcm9qZWN0Rm9ybVN1Ym1pdENhbmNlbC50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gICAgbmV3UHJvamVjdEZvcm1TdWJtaXQuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEZvcm1TdWJtaXRDYW5jZWwpO1xuICAgIHJldHVybiBuZXdQcm9qZWN0O1xufVxuZnVuY3Rpb24gYWRkVGFzaygpe1xuICAgIGNvbnN0IHRhc2tOZXc9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrTmV3LmlkPVwidGFzay0tbmV3X2hpZGRlblwiO1xuICAgIFxuICAgIGNvbnN0IHRhc2tOYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgT2JqZWN0LmFzc2lnbih0YXNrTmFtZUlucHV0LCB7XG4gICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICBuYW1lOiBcInRhc2tfbmFtZVwiLFxuICAgICAgICBpZDogXCJ0YXNrX25hbWVcIlxuICAgIH0pO1xuICAgIHRhc2tOZXcuYXBwZW5kQ2hpbGQodGFza05hbWVJbnB1dCk7XG5cbiAgICBjb25zdCB0YXNrU2VsZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIE9iamVjdC5hc3NpZ24odGFza1NlbGVjdElucHV0LCB7XG4gICAgICAgIGlkOiBcInRhc2tfcHJvamVjdFwiXG4gICAgfSk7XG4gICAgdGFza05ldy5hcHBlbmRDaGlsZCh0YXNrU2VsZWN0SW5wdXQpO1xuICAgIGFkZFRhc2tfZmlsbFNlbGVjdCh0YXNrU2VsZWN0SW5wdXQpO1xuICAgIFxuICAgIGNvbnN0IHRhc2tOZXdTdWJtaXQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrTmV3U3VibWl0LmlkPVwidGFzay0tbmV3X3N1Ym1pdFwiO1xuICAgIHRhc2tOZXcuYXBwZW5kQ2hpbGQodGFza05ld1N1Ym1pdCk7XG5cbiAgICBjb25zdCB0YXNrTmV3U3VibWl0QWRkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza05ld1N1Ym1pdEFkZC5pZD1cInRhc2stLW5ld19zdWJtaXRfYWRkXCI7XG4gICAgdGFza05ld1N1Ym1pdEFkZC50ZXh0Q29udGVudD1cIkFkZCBUYXNrXCI7XG4gICAgdGFza05ld1N1Ym1pdC5hcHBlbmRDaGlsZCh0YXNrTmV3U3VibWl0QWRkKTtcblxuICAgIGNvbnN0IHRhc2tOZXdTdWJtaXRDYW5jZWw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrTmV3U3VibWl0Q2FuY2VsLmlkPVwidGFzay0tbmV3X3N1Ym1pdF9jYW5jZWxcIjtcbiAgICB0YXNrTmV3U3VibWl0Q2FuY2VsLnRleHRDb250ZW50PVwiQ2FuY2VsXCI7XG4gICAgdGFza05ld1N1Ym1pdC5hcHBlbmRDaGlsZCh0YXNrTmV3U3VibWl0Q2FuY2VsKTtcblxuICAgIHJldHVybiB0YXNrTmV3O1xufVxuZnVuY3Rpb24gYWRkVGFza19maWxsU2VsZWN0KHNlbGVjdEVsZW1lbnQpe1xuICAgIGxldCB0b2RvTGlzdF9wcm9qZWN0cz1KU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb0xpc3RcIikpLnByb2plY3Q7XG4gICAgZm9yKGxldCBpPTA7aTx0b2RvTGlzdF9wcm9qZWN0cy5sZW5ndGg7aSsrKXtcbiAgICAgICAgaWYodG9kb0xpc3RfcHJvamVjdHNbaV0hPT11bmRlZmluZWQpe1xuICAgICAgICAgICAgY29uc3QgcE9wdGlvbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgcE9wdGlvbi52YWx1ZT1pO1xuICAgICAgICAgICAgcE9wdGlvbi50ZXh0Q29udGVudD10b2RvTGlzdF9wcm9qZWN0c1tpXS5uYW1lO1xuICAgICAgICAgICAgc2VsZWN0RWxlbWVudC5hcHBlbmRDaGlsZChwT3B0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZVN0b3JhZ2UoKXtcbiAgICBsZXQgY2hlY2s9bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2RvTGlzdFwiKTtcbiAgICBpZihjaGVjaz09PW51bGwpe1xuICAgICAgICBsZXQgdG9kb0xpc3Q9e3Byb2plY3Q6W10sXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrOltdfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvZG9MaXN0KTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvTGlzdFwiLEpTT04uc3RyaW5naWZ5KHRvZG9MaXN0KSk7XG4gICAgfVxufVxuZnVuY3Rpb24gYnVpbGRTaXRlKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRlbnQuaWQgPSBcImNvbnRlbnRcIjtcbiAgICBjb250ZW50LmFwcGVuZChoZWFkZXIoKSwgc2lkZWJhcigpLCBtYWluKCksIGZvb3RlcigpLCBhZGRQcm9qZWN0KCkpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgY3JlYXRlU3RvcmFnZSgpO1xuICAgIHAucG9wdWxhdGVQcm9qZWN0TGlzdCgpO1xuICAgIHQucG9wdWxhdGVUYXNrTGlzdCgpO1xufVxuXG5leHBvcnQgeyBidWlsZFNpdGUsIG1haW5MaXN0VGFzaywgc2lkZWJhclByb2plY3QgfTsiLCJpbXBvcnQgKiBhcyBwcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCAqIGFzIHRhc2sgZnJvbSBcIi4vdGFza1wiO1xuZnVuY3Rpb24gY3JlYXRlRXZlbnRzKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC0tYWRkXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHByb2plY3Quc2hvd0FkZFByb2plY3QoKTtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ld3Byb2plY3QtLWZvcm1fc3VibWl0X2FkZFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBwcm9qZWN0LmFkZFByb2plY3QoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXdwcm9qZWN0LS1mb3JtX25hbWUgaW5wdXRcIikudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXdwcm9qZWN0LS1mb3JtX2NvbG9yIGlucHV0XCIpLnZhbHVlKTtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ld3Byb2plY3QtLWZvcm1fc3VibWl0X2NhbmNlbFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBwcm9qZWN0LmNhbmNlbEFkZFByb2plY3QoKTtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXItLWhlYWRlcl9idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcHJvamVjdC50b2dnbGVQcm9qZWN0TGlzdCgpO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay0tYWRkXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRhc2suc2hvd0FkZFRhc2soKTtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stLW5ld19zdWJtaXRfYWRkXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRhc2suYWRkVGFzayhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stLW5ldyBpbnB1dFwiKS52YWx1ZSk7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLS1uZXdfc3VibWl0X2NhbmNlbFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0YXNrLmNhbmNlbEFkZFRhc2soKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUV2ZW50czsiLCJpbXBvcnQgeyBzaWRlYmFyUHJvamVjdCB9IGZyb20gXCIuL0RPTXNjcmlwdHMuanNcIjtcbmNvbnN0IHByb2plY3Q9KG5hbWUsY29sb3IpPT57XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgY29sb3I6IGNvbG9yLFxuICAgICAgICB0YXNrQ291bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGFza0NvdW50XCIpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHNob3dBZGRQcm9qZWN0KCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3cHJvamVjdF9oaWRkZW5cIikuaWQgPSBcIm5ld3Byb2plY3RcIjtcbn1cbmZ1bmN0aW9uIGFkZFByb2plY3QobmFtZVZhbHVlLGNvbG9yVmFsdWUpIHtcbiAgICBcbiAgICBsZXQgb2JqPUpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2RvTGlzdFwiKSk7XG4gICAgb2JqLnByb2plY3QucHVzaCh7bmFtZTpuYW1lVmFsdWUsY29sb3I6Y29sb3JWYWx1ZX0pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb0xpc3RcIixKU09OLnN0cmluZ2lmeShvYmopKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpZGViYXItLWxpc3RcIikucHJlcGVuZChzaWRlYmFyUHJvamVjdChuYW1lVmFsdWUsY29sb3JWYWx1ZSkpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3cHJvamVjdFwiKS5pZCA9IFwibmV3cHJvamVjdF9oaWRkZW5cIjtcblxufVxuZnVuY3Rpb24gcG9wdWxhdGVQcm9qZWN0TGlzdCgpe1xuICAgIGxldCBvYmo9SlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9MaXN0XCIpKTtcbiAgICBmb3IobGV0IGk9MDtpPG9iai5wcm9qZWN0Lmxlbmd0aDtpKyspe1xuICAgICAgICBsZXQgbmFtZVZhbHVlPW9iai5wcm9qZWN0W2ldLm5hbWU7XG4gICAgICAgIGxldCBjb2xvclZhbHVlPW9iai5wcm9qZWN0W2ldLmNvbG9yO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpZGViYXItLWxpc3RcIikucHJlcGVuZChzaWRlYmFyUHJvamVjdChuYW1lVmFsdWUsY29sb3JWYWx1ZSkpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNhbmNlbEFkZFByb2plY3QoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXdwcm9qZWN0XCIpLmlkID0gXCJuZXdwcm9qZWN0X2hpZGRlblwiO1xufVxuZnVuY3Rpb24gdG9nZ2xlUHJvamVjdExpc3QoKSB7XG4gICAgY29uc3Qgc2VsZWN0T25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaWRlYmFyLS1saXN0XCIpO1xuICAgIGNvbnN0IHNlbGVjdFR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2lkZWJhci0tbGlzdF9oaWRkZW5cIik7XG4gICAgaWYgKHNlbGVjdE9uZSkge1xuICAgICAgICBzZWxlY3RPbmUuaWQgPSBcInNpZGViYXItLWxpc3RfaGlkZGVuXCI7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhci0taGVhZGVyX2J0bl9pY29uX2Rvd25cIikuY2xhc3NMaXN0LnJlcGxhY2UoXCJzaWRlYmFyLS1oZWFkZXJfYnRuX2ljb25fZG93blwiLCBcInNpZGViYXItLWhlYWRlcl9idG5faWNvbl91cFwiKTtcbiAgICB9IGVsc2UgaWYgKHNlbGVjdFR3bykge1xuICAgICAgICBzZWxlY3RUd28uaWQgPSBcInNpZGViYXItLWxpc3RcIjtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyLS1oZWFkZXJfYnRuX2ljb25fdXBcIikuY2xhc3NMaXN0LnJlcGxhY2UoXCJzaWRlYmFyLS1oZWFkZXJfYnRuX2ljb25fdXBcIiwgXCJzaWRlYmFyLS1oZWFkZXJfYnRuX2ljb25fZG93blwiKTtcbiAgICB9XG59XG5leHBvcnQgeyBwcm9qZWN0LCBzaG93QWRkUHJvamVjdCwgYWRkUHJvamVjdCwgY2FuY2VsQWRkUHJvamVjdCwgdG9nZ2xlUHJvamVjdExpc3QsIHBvcHVsYXRlUHJvamVjdExpc3QgfTtcbiIsImltcG9ydCB7IG1haW5MaXN0VGFzayB9IGZyb20gXCIuL0RPTXNjcmlwdHMuanNcIjtcbmltcG9ydCB7IHByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5jb25zdCB0YXNrPShuYW1lLHByb2plY3QpPT57XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgcHJvamVjdDogcHJvamVjdCxcbiAgICB9O1xufVxuZnVuY3Rpb24gc2hvd0FkZFRhc2soKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLS1uZXdfaGlkZGVuXCIpLmlkID0gXCJ0YXNrLS1uZXdcIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stLWFkZFwiKS5jbGFzc0xpc3QucmVwbGFjZShcInRhc2stLWFkZFwiLFwidGFzay0tYWRkX2hpZGRlblwiKTtcbn1cbmZ1bmN0aW9uIGFkZFRhc2sobmFtZVZhbHVlKSB7XG4gICAgbGV0IG9iaj1KU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb0xpc3RcIikpO1xuICAgIG9iai50YXNrLnB1c2goe25hbWU6bmFtZVZhbHVlfSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvTGlzdFwiLEpTT04uc3RyaW5naWZ5KG9iaikpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi0tbGlzdFwiKS5wcmVwZW5kKG1haW5MaXN0VGFzayhuYW1lVmFsdWUpKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stLW5ld1wiKS5pZCA9IFwidGFzay0tbmV3X2hpZGRlblwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay0tYWRkX2hpZGRlblwiKS5jbGFzc0xpc3QucmVwbGFjZShcInRhc2stLWFkZF9oaWRkZW5cIixcInRhc2stLWFkZFwiKTtcbn1cbmZ1bmN0aW9uIHBvcHVsYXRlVGFza0xpc3QoKXtcbiAgICBsZXQgb2JqPUpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2RvTGlzdFwiKSk7XG4gICAgZm9yKGxldCBpPTA7aTxvYmoudGFzay5sZW5ndGg7aSsrKXtcbiAgICAgICAgbGV0IG5hbWVWYWx1ZT1vYmoudGFza1tpXS5uYW1lO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tLWxpc3RcIikucHJlcGVuZChtYWluTGlzdFRhc2sobmFtZVZhbHVlKSk7XG4gICAgfVxufVxuZnVuY3Rpb24gY2FuY2VsQWRkVGFzaygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stLW5ld1wiKS5pZCA9IFwidGFzay0tbmV3X2hpZGRlblwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay0tYWRkX2hpZGRlblwiKS5jbGFzc0xpc3QucmVwbGFjZShcInRhc2stLWFkZF9oaWRkZW5cIixcInRhc2stLWFkZFwiKTtcbn1cbmV4cG9ydCB7IHNob3dBZGRUYXNrLCBhZGRUYXNrLCBjYW5jZWxBZGRUYXNrLCBwb3B1bGF0ZVRhc2tMaXN0IH07XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBidWlsZFNpdGUgfSBmcm9tIFwiLi9ET01zY3JpcHRzXCI7XG5pbXBvcnQgY3JlYXRlRXZlbnRzIGZyb20gXCIuL2V2ZW50c1NjcmlwdHNcIjtcbmJ1aWxkU2l0ZSgpO1xuY3JlYXRlRXZlbnRzKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9