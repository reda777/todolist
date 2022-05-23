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
    _task__WEBPACK_IMPORTED_MODULE_1__.populateProjectSelect();
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
/* harmony export */   "populateProjectSelect": () => (/* binding */ populateProjectSelect),
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
function addTask(nameValue,projectValue) {
    let obj=JSON.parse(localStorage.getItem("todoList"));
    obj.task.push(task(nameValue,obj.project[projectValue]));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBK0I7QUFDSDtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5REFBcUI7QUFDekIsSUFBSSxtREFBa0I7QUFDdEIsSUFBSSx3REFBdUI7QUFDM0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JRcUM7QUFDTjtBQUMvQjtBQUNBO0FBQ0EsUUFBUSxvREFBc0I7QUFDOUIsS0FBSztBQUNMO0FBQ0EsUUFBUSxnREFBa0I7QUFDMUI7QUFDQSxLQUFLO0FBQ0w7QUFDQSxRQUFRLHNEQUF3QjtBQUNoQyxLQUFLO0FBQ0w7QUFDQSxRQUFRLHVEQUF5QjtBQUNqQyxLQUFLO0FBQ0w7QUFDQSxRQUFRLDhDQUFnQjtBQUN4QixLQUFLO0FBQ0w7QUFDQSxRQUFRLDBDQUFZO0FBQ3BCLEtBQUs7QUFDTDtBQUNBLFFBQVEsZ0RBQWtCO0FBQzFCLEtBQUs7QUFDTDtBQUNBLGlFQUFlLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCc0I7QUFDckI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixnQ0FBZ0M7QUFDdEQ7QUFDQSxxREFBcUQsOERBQWM7QUFDbkU7QUFDQSxJQUFJLHdEQUF1QjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IscUJBQXFCO0FBQ3JDO0FBQ0E7QUFDQSx5REFBeUQsOERBQWM7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUN5Rzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUMxRDtBQUNSO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsNERBQVk7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixrQkFBa0I7QUFDbEM7QUFDQSxzREFBc0QsNERBQVk7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3VGOzs7Ozs7OztVQ2pEdkY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTnFCO0FBQ29CO0FBQ0U7QUFDM0Msc0RBQVM7QUFDVCwwREFBWSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzP2UzMjAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvRE9Nc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9ldmVudHNTY3JpcHRzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCAqIGFzIHAgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0ICogYXMgdCBmcm9tIFwiLi90YXNrXCI7XG5mdW5jdGlvbiBoZWFkZXIoKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuaWQgPSBcImhlYWRlclwiO1xuICAgIGRpdi50ZXh0Q29udGVudCA9IFwiVG9kbyBMaXN0XCI7XG4gICAgcmV0dXJuIGRpdjtcbn1cbmZ1bmN0aW9uIHNpZGViYXIoKSB7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2lkZWJhci5pZCA9IFwic2lkZWJhclwiO1xuXG4gICAgY29uc3Qgc2lkZWJhckdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzaWRlYmFyR3JvdXAuaWQgPSBcInNpZGViYXItLWdyb3VwXCI7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlYmFyR3JvdXApO1xuICAgIHNpZGViYXJHcm91cC5hcHBlbmRDaGlsZChzaWRlYmFySGVhZGVyKFwiTXkgTGlzdFwiKSk7XG4gICAgc2lkZWJhckdyb3VwLmFwcGVuZENoaWxkKHNpZGViYXJIZWFkZXIoXCJUb2RheVwiKSk7XG4gICAgc2lkZWJhckdyb3VwLmFwcGVuZENoaWxkKHNpZGViYXJIZWFkZXIoXCJOZXh0IDcgRGF5c1wiKSk7XG5cbiAgICBjb25zdCBzaWRlYmFySGVhZFByb2plY3QgPSBzaWRlYmFySGVhZGVyKFwiUHJvamVjdHNcIik7XG4gICAgY29uc3Qgc2lkZWJhckhlYWRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNpZGViYXJIZWFkQnRuLmNsYXNzTmFtZSA9IFwic2lkZWJhci0taGVhZGVyX2J0blwiO1xuXG4gICAgY29uc3Qgc2lkZWJhckhlYWRCdG5JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgc2lkZWJhckhlYWRCdG5JY29uLmNsYXNzTmFtZSA9IFwic2lkZWJhci0taGVhZGVyX2J0bl9pY29uX2Rvd25cIjtcbiAgICBzaWRlYmFySGVhZEJ0bi5hcHBlbmRDaGlsZChzaWRlYmFySGVhZEJ0bkljb24pO1xuICAgIHNpZGViYXJIZWFkUHJvamVjdC5hcHBlbmRDaGlsZChzaWRlYmFySGVhZEJ0bik7XG4gICAgc2lkZWJhckdyb3VwLmFwcGVuZENoaWxkKHNpZGViYXJIZWFkUHJvamVjdCk7XG5cbiAgICBjb25zdCBzaWRlYmFyTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2lkZWJhckxpc3QuaWQgPSBcInNpZGViYXItLWxpc3RcIjtcbiAgICBzaWRlYmFyR3JvdXAuYXBwZW5kQ2hpbGQoc2lkZWJhckxpc3QpO1xuXG4gICAgY29uc3QgcHJvamVjdEFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdEFkZC5jbGFzc05hbWUgPSBcInByb2plY3QtLWFkZFwiO1xuICAgIHNpZGViYXJMaXN0LmFwcGVuZENoaWxkKHByb2plY3RBZGQpO1xuXG4gICAgY29uc3QgcHJvamVjdEFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdEFkZEJ0bi5jbGFzc05hbWUgPSBcInByb2plY3QtLWFkZF9idG5cIjtcbiAgICBwcm9qZWN0QWRkLmFwcGVuZENoaWxkKHByb2plY3RBZGRCdG4pO1xuXG4gICAgY29uc3QgcHJvamVjdEFkZEJ0bkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBwcm9qZWN0QWRkQnRuSWNvbi5jbGFzc05hbWUgPSBcInByb2plY3QtLWFkZF9idG5faWNvblwiO1xuICAgIHByb2plY3RBZGRCdG4uYXBwZW5kQ2hpbGQocHJvamVjdEFkZEJ0bkljb24pO1xuXG4gICAgY29uc3QgcHJvamVjdEFkZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RBZGROYW1lLmNsYXNzTmFtZSA9IFwicHJvamVjdC0tYWRkX25hbWVcIjtcbiAgICBwcm9qZWN0QWRkTmFtZS50ZXh0Q29udGVudCA9IFwiQWRkIFByb2plY3RcIjtcbiAgICBwcm9qZWN0QWRkLmFwcGVuZENoaWxkKHByb2plY3RBZGROYW1lKTtcbiAgICByZXR1cm4gc2lkZWJhcjtcbn1cbmZ1bmN0aW9uIHNpZGViYXJIZWFkZXIodENvbnRlbnQpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5jbGFzc05hbWUgPSBcInNpZGViYXItLWhlYWRlclwiO1xuICAgIGNvbnN0IGRpdkNoaWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZDaGlsZC5jbGFzc05hbWUgPSBcInNpZGViYXItLWhlYWRlcl90aXRsZVwiO1xuICAgIGRpdkNoaWxkLnRleHRDb250ZW50ID0gdENvbnRlbnQ7XG4gICAgZGl2LmFwcGVuZENoaWxkKGRpdkNoaWxkKTtcbiAgICByZXR1cm4gZGl2O1xufVxuZnVuY3Rpb24gc2lkZWJhclByb2plY3QodENvbnRlbnQsdENvbG9yKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdC5jbGFzc05hbWUgPSBcInByb2plY3RcIjtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdE5hbWUuY2xhc3NOYW1lID0gXCJwcm9qZWN0LS1uYW1lXCI7XG4gICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSB0Q29udGVudDtcbiAgICBwcm9qZWN0TmFtZS5zdHlsZS5jb2xvcj0gdENvbG9yO1xuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuICAgIGNvbnN0IHByb2plY3RDb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdENvdW50LmNsYXNzTmFtZSA9IFwicHJvamVjdC0tY291bnRcIjtcbiAgICBwcm9qZWN0Q291bnQudGV4dENvbnRlbnQgPSBcIjBcIjtcbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RDb3VudCk7XG4gICAgcmV0dXJuIHByb2plY3Q7XG59XG5mdW5jdGlvbiBtYWluKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW4uaWQgPSBcIm1haW5cIjtcblxuICAgIGNvbnN0IG1haW5Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbkdyb3VwLmlkID0gXCJtYWluLS1ncm91cFwiO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQobWFpbkdyb3VwKTtcblxuICAgIGNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5IZWFkZXIuY2xhc3NOYW1lID0gXCJtYWluLS1oZWFkZXJcIjtcbiAgICBjb25zdCBtYWluSGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5IZWFkZXJUaXRsZS5jbGFzc05hbWUgPSBcIm1haW4tLWhlYWRlcl90aXRsZVwiO1xuICAgIG1haW5IZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcbiAgICBtYWluSGVhZGVyLmFwcGVuZENoaWxkKG1haW5IZWFkZXJUaXRsZSk7XG4gICAgbWFpbkdyb3VwLmFwcGVuZENoaWxkKG1haW5IZWFkZXIpO1xuXG4gICAgY29uc3QgbWFpbkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5MaXN0LmlkID0gXCJtYWluLS1saXN0XCI7XG4gICAgbWFpbkdyb3VwLmFwcGVuZENoaWxkKG1haW5MaXN0KTtcblxuICAgIGNvbnN0IHRhc2tBZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tBZGQuY2xhc3NOYW1lID0gXCJ0YXNrLS1hZGRcIjtcbiAgICBtYWluTGlzdC5hcHBlbmRDaGlsZCh0YXNrQWRkKTtcblxuICAgIGNvbnN0IHRhc2tBZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tBZGRCdG4uY2xhc3NOYW1lID0gXCJ0YXNrLS1hZGRfYnRuXCI7XG4gICAgdGFza0FkZC5hcHBlbmRDaGlsZCh0YXNrQWRkQnRuKTtcblxuICAgIGNvbnN0IHRhc2tBZGRCdG5JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgdGFza0FkZEJ0bkljb24uY2xhc3NOYW1lID0gXCJ0YXNrLS1hZGRfYnRuX2ljb25cIjtcbiAgICB0YXNrQWRkQnRuLmFwcGVuZENoaWxkKHRhc2tBZGRCdG5JY29uKTtcblxuICAgIGNvbnN0IHRhc2tBZGROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrQWRkTmFtZS5jbGFzc05hbWUgPSBcInRhc2stLWFkZF9uYW1lXCI7XG4gICAgdGFza0FkZE5hbWUudGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrXCI7XG4gICAgdGFza0FkZC5hcHBlbmRDaGlsZCh0YXNrQWRkTmFtZSk7XG5cbiAgICBtYWluTGlzdC5hcHBlbmQoYWRkVGFzaygpKTtcbiAgICByZXR1cm4gbWFpbjtcbn1cbmZ1bmN0aW9uIG1haW5MaXN0VGFzayh0Q29udGVudCkge1xuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2suY2xhc3NOYW1lID0gXCJ0YXNrXCI7XG5cbiAgICBjb25zdCB0YXNrSW5wdXRPdXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0lucHV0T3V0ZXIuY2xhc3NOYW1lID0gXCJ0YXNrLS1pbnB1dG91dGVyXCI7XG4gICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrSW5wdXRPdXRlcik7XG5cbiAgICBjb25zdCB0YXNrQ2hlY2tib3hJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBPYmplY3QuYXNzaWduKHRhc2tDaGVja2JveElucHV0LCB7XG4gICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgICAgbmFtZTogXCJ0YXNrX3N0YXRlXCIsXG4gICAgICAgIGlkOiBcInRhc2tfc3RhdGVcIlxuICAgIH0pO1xuICAgIHRhc2tJbnB1dE91dGVyLmFwcGVuZENoaWxkKHRhc2tDaGVja2JveElucHV0KTtcblxuICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrTmFtZS5jbGFzc05hbWUgPSBcInRhc2stLW5hbWVcIjtcbiAgICB0YXNrTmFtZS50ZXh0Q29udGVudCA9IHRDb250ZW50O1xuICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza05hbWUpO1xuICAgIHJldHVybiB0YXNrO1xufVxuZnVuY3Rpb24gZm9vdGVyKCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2LmlkID0gXCJmb290ZXJcIjtcbiAgICBkaXYudGV4dENvbnRlbnQgPSBcIkNvcHlyaWdodCDCqSAyMDIyIFJlZGFcIjtcbiAgICByZXR1cm4gZGl2O1xufVxuZnVuY3Rpb24gYWRkUHJvamVjdCgpIHtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdQcm9qZWN0LmlkID0gXCJuZXdwcm9qZWN0X2hpZGRlblwiO1xuICAgIGNvbnN0IG5ld1Byb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3UHJvamVjdFRpdGxlLmlkID0gXCJuZXdwcm9qZWN0LS10aXRsZVwiO1xuICAgIG5ld1Byb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IFwiQWRkIFByb2plY3RcIjtcbiAgICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKG5ld1Byb2plY3RUaXRsZSk7XG5cbiAgICBjb25zdCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3UHJvamVjdEZvcm0uaWQgPSBcIm5ld3Byb2plY3QtLWZvcm1cIjtcbiAgICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKG5ld1Byb2plY3RGb3JtKTtcblxuICAgIGNvbnN0IG5ld1Byb2plY3RGb3JtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3UHJvamVjdEZvcm1OYW1lLmlkID0gXCJuZXdwcm9qZWN0LS1mb3JtX25hbWVcIjtcbiAgICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChuZXdQcm9qZWN0Rm9ybU5hbWUpO1xuICAgIGNvbnN0IG5ld1Byb2plY3RGb3JtQ29sb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1Byb2plY3RGb3JtQ29sb3IuaWQgPSBcIm5ld3Byb2plY3QtLWZvcm1fY29sb3JcIjtcbiAgICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChuZXdQcm9qZWN0Rm9ybUNvbG9yKTtcblxuICAgIGNvbnN0IHByb2plY3ROYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgT2JqZWN0LmFzc2lnbihwcm9qZWN0TmFtZUxhYmVsLCB7XG4gICAgICAgIGZvcjogXCJwcm9qZWN0X25hbWVcIixcbiAgICAgICAgdGV4dENvbnRlbnQ6IFwiTmFtZVwiXG4gICAgfSk7XG4gICAgbmV3UHJvamVjdEZvcm1OYW1lLmFwcGVuZENoaWxkKHByb2plY3ROYW1lTGFiZWwpO1xuXG4gICAgY29uc3QgcHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBPYmplY3QuYXNzaWduKHByb2plY3ROYW1lSW5wdXQsIHtcbiAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgIG5hbWU6IFwicHJvamVjdF9uYW1lXCIsXG4gICAgICAgIGlkOiBcInByb2plY3RfbmFtZVwiXG4gICAgfSk7XG4gICAgbmV3UHJvamVjdEZvcm1OYW1lLmFwcGVuZENoaWxkKHByb2plY3ROYW1lSW5wdXQpO1xuXG4gICAgY29uc3QgcHJvamVjdENvbG9yTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgT2JqZWN0LmFzc2lnbihwcm9qZWN0Q29sb3JMYWJlbCwge1xuICAgICAgICBmb3I6IFwicHJvamVjdF9jb2xvclwiLFxuICAgICAgICB0ZXh0Q29udGVudDogXCJDb2xvclwiXG4gICAgfSk7XG4gICAgbmV3UHJvamVjdEZvcm1Db2xvci5hcHBlbmRDaGlsZChwcm9qZWN0Q29sb3JMYWJlbCk7XG5cbiAgICBjb25zdCBwcm9qZWN0Q29sb3JJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBPYmplY3QuYXNzaWduKHByb2plY3RDb2xvcklucHV0LCB7XG4gICAgICAgIHR5cGU6IFwiY29sb3JcIixcbiAgICAgICAgbmFtZTogXCJwcm9qZWN0X2NvbG9yXCIsXG4gICAgICAgIGlkOiBcInByb2plY3RfY29sb3JcIlxuICAgIH0pO1xuICAgIG5ld1Byb2plY3RGb3JtQ29sb3IuYXBwZW5kQ2hpbGQocHJvamVjdENvbG9ySW5wdXQpO1xuXG4gICAgY29uc3QgbmV3UHJvamVjdEZvcm1TdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1Byb2plY3RGb3JtU3VibWl0LmlkID0gXCJuZXdwcm9qZWN0LS1mb3JtX3N1Ym1pdFwiO1xuICAgIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKG5ld1Byb2plY3RGb3JtU3VibWl0KTtcblxuICAgIGNvbnN0IG5ld1Byb2plY3RGb3JtU3VibWl0QWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdQcm9qZWN0Rm9ybVN1Ym1pdEFkZC5pZCA9IFwibmV3cHJvamVjdC0tZm9ybV9zdWJtaXRfYWRkXCI7XG4gICAgbmV3UHJvamVjdEZvcm1TdWJtaXRBZGQudGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuICAgIG5ld1Byb2plY3RGb3JtU3VibWl0LmFwcGVuZENoaWxkKG5ld1Byb2plY3RGb3JtU3VibWl0QWRkKTtcbiAgICBjb25zdCBuZXdQcm9qZWN0Rm9ybVN1Ym1pdENhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3UHJvamVjdEZvcm1TdWJtaXRDYW5jZWwuaWQgPSBcIm5ld3Byb2plY3QtLWZvcm1fc3VibWl0X2NhbmNlbFwiO1xuICAgIG5ld1Byb2plY3RGb3JtU3VibWl0Q2FuY2VsLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgICBuZXdQcm9qZWN0Rm9ybVN1Ym1pdC5hcHBlbmRDaGlsZChuZXdQcm9qZWN0Rm9ybVN1Ym1pdENhbmNlbCk7XG4gICAgcmV0dXJuIG5ld1Byb2plY3Q7XG59XG5mdW5jdGlvbiBhZGRUYXNrKCl7XG4gICAgY29uc3QgdGFza05ldz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tOZXcuaWQ9XCJ0YXNrLS1uZXdfaGlkZGVuXCI7XG4gICAgXG4gICAgY29uc3QgdGFza05ld0lucHV0cz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tOZXdJbnB1dHMuaWQ9XCJ0YXNrLS1uZXdfaW5wdXRzXCI7XG4gICAgdGFza05ldy5hcHBlbmRDaGlsZCh0YXNrTmV3SW5wdXRzKTtcblxuICAgIGNvbnN0IHRhc2tOYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgT2JqZWN0LmFzc2lnbih0YXNrTmFtZUlucHV0LCB7XG4gICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICBuYW1lOiBcInRhc2tfbmFtZVwiLFxuICAgICAgICBpZDogXCJ0YXNrX25hbWVcIlxuICAgIH0pO1xuICAgIHRhc2tOZXdJbnB1dHMuYXBwZW5kQ2hpbGQodGFza05hbWVJbnB1dCk7XG5cbiAgICBjb25zdCB0YXNrU2VsZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIE9iamVjdC5hc3NpZ24odGFza1NlbGVjdElucHV0LCB7XG4gICAgICAgIGlkOiBcInRhc2tfcHJvamVjdFwiXG4gICAgfSk7XG4gICAgdGFza05ld0lucHV0cy5hcHBlbmRDaGlsZCh0YXNrU2VsZWN0SW5wdXQpO1xuICAgIFxuICAgIGNvbnN0IHRhc2tOZXdTdWJtaXQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrTmV3U3VibWl0LmlkPVwidGFzay0tbmV3X3N1Ym1pdFwiO1xuICAgIHRhc2tOZXcuYXBwZW5kQ2hpbGQodGFza05ld1N1Ym1pdCk7XG5cbiAgICBjb25zdCB0YXNrTmV3U3VibWl0QWRkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza05ld1N1Ym1pdEFkZC5pZD1cInRhc2stLW5ld19zdWJtaXRfYWRkXCI7XG4gICAgdGFza05ld1N1Ym1pdEFkZC50ZXh0Q29udGVudD1cIkFkZCBUYXNrXCI7XG4gICAgdGFza05ld1N1Ym1pdC5hcHBlbmRDaGlsZCh0YXNrTmV3U3VibWl0QWRkKTtcblxuICAgIGNvbnN0IHRhc2tOZXdTdWJtaXRDYW5jZWw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrTmV3U3VibWl0Q2FuY2VsLmlkPVwidGFzay0tbmV3X3N1Ym1pdF9jYW5jZWxcIjtcbiAgICB0YXNrTmV3U3VibWl0Q2FuY2VsLnRleHRDb250ZW50PVwiQ2FuY2VsXCI7XG4gICAgdGFza05ld1N1Ym1pdC5hcHBlbmRDaGlsZCh0YXNrTmV3U3VibWl0Q2FuY2VsKTtcblxuICAgIHJldHVybiB0YXNrTmV3O1xufVxuZnVuY3Rpb24gY3JlYXRlU3RvcmFnZSgpe1xuICAgIGxldCBjaGVjaz1sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9MaXN0XCIpO1xuICAgIGlmKGNoZWNrPT09bnVsbCl7XG4gICAgICAgIGxldCB0b2RvTGlzdD17cHJvamVjdDpbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2s6W119O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codG9kb0xpc3QpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9MaXN0XCIsSlNPTi5zdHJpbmdpZnkodG9kb0xpc3QpKTtcbiAgICB9XG59XG5mdW5jdGlvbiBidWlsZFNpdGUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudC5pZCA9IFwiY29udGVudFwiO1xuICAgIGNvbnRlbnQuYXBwZW5kKGhlYWRlcigpLCBzaWRlYmFyKCksIG1haW4oKSwgZm9vdGVyKCksIGFkZFByb2plY3QoKSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICBjcmVhdGVTdG9yYWdlKCk7XG4gICAgcC5wb3B1bGF0ZVByb2plY3RMaXN0KCk7XG4gICAgdC5wb3B1bGF0ZVRhc2tMaXN0KCk7XG4gICAgdC5wb3B1bGF0ZVByb2plY3RTZWxlY3QoKTtcbn1cblxuZXhwb3J0IHsgYnVpbGRTaXRlLCBtYWluTGlzdFRhc2ssIHNpZGViYXJQcm9qZWN0IH07IiwiaW1wb3J0ICogYXMgcHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgKiBhcyB0YXNrIGZyb20gXCIuL3Rhc2tcIjtcbmZ1bmN0aW9uIGNyZWF0ZUV2ZW50cygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtLWFkZFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBwcm9qZWN0LnNob3dBZGRQcm9qZWN0KCk7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXdwcm9qZWN0LS1mb3JtX3N1Ym1pdF9hZGRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcHJvamVjdC5hZGRQcm9qZWN0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3cHJvamVjdC0tZm9ybV9uYW1lIGlucHV0XCIpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3cHJvamVjdC0tZm9ybV9jb2xvciBpbnB1dFwiKS52YWx1ZSk7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXdwcm9qZWN0LS1mb3JtX3N1Ym1pdF9jYW5jZWxcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcHJvamVjdC5jYW5jZWxBZGRQcm9qZWN0KCk7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyLS1oZWFkZXJfYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHByb2plY3QudG9nZ2xlUHJvamVjdExpc3QoKTtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stLWFkZFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0YXNrLnNob3dBZGRUYXNrKCk7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLS1uZXdfc3VibWl0X2FkZFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0YXNrLmFkZFRhc2soZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrX25hbWVcIikudmFsdWUsZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrX3Byb2plY3RcIikudmFsdWUpO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay0tbmV3X3N1Ym1pdF9jYW5jZWxcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGFzay5jYW5jZWxBZGRUYXNrKCk7XG4gICAgfSk7XG59XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFdmVudHM7IiwiaW1wb3J0IHsgc2lkZWJhclByb2plY3QgfSBmcm9tIFwiLi9ET01zY3JpcHRzLmpzXCI7XG5pbXBvcnQgKiBhcyB0IGZyb20gXCIuL3Rhc2tcIjtcbmNvbnN0IHByb2plY3Q9KG5hbWUsY29sb3IpPT57XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgY29sb3I6IGNvbG9yLFxuICAgICAgICB0YXNrQ291bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGFza0NvdW50XCIpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHNob3dBZGRQcm9qZWN0KCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3cHJvamVjdF9oaWRkZW5cIikuaWQgPSBcIm5ld3Byb2plY3RcIjtcbn1cbmZ1bmN0aW9uIGFkZFByb2plY3QobmFtZVZhbHVlLGNvbG9yVmFsdWUpIHtcbiAgICBsZXQgb2JqPUpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2RvTGlzdFwiKSk7XG4gICAgb2JqLnByb2plY3QucHVzaCh7bmFtZTpuYW1lVmFsdWUsY29sb3I6Y29sb3JWYWx1ZX0pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb0xpc3RcIixKU09OLnN0cmluZ2lmeShvYmopKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpZGViYXItLWxpc3RcIikucHJlcGVuZChzaWRlYmFyUHJvamVjdChuYW1lVmFsdWUsY29sb3JWYWx1ZSkpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3cHJvamVjdFwiKS5pZCA9IFwibmV3cHJvamVjdF9oaWRkZW5cIjtcbiAgICB0LnBvcHVsYXRlUHJvamVjdFNlbGVjdCgpO1xufVxuZnVuY3Rpb24gcG9wdWxhdGVQcm9qZWN0TGlzdCgpe1xuICAgIGxldCBvYmo9SlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9MaXN0XCIpKTtcbiAgICBmb3IobGV0IGk9MDtpPG9iai5wcm9qZWN0Lmxlbmd0aDtpKyspe1xuICAgICAgICBsZXQgbmFtZVZhbHVlPW9iai5wcm9qZWN0W2ldLm5hbWU7XG4gICAgICAgIGxldCBjb2xvclZhbHVlPW9iai5wcm9qZWN0W2ldLmNvbG9yO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpZGViYXItLWxpc3RcIikucHJlcGVuZChzaWRlYmFyUHJvamVjdChuYW1lVmFsdWUsY29sb3JWYWx1ZSkpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNhbmNlbEFkZFByb2plY3QoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXdwcm9qZWN0XCIpLmlkID0gXCJuZXdwcm9qZWN0X2hpZGRlblwiO1xufVxuZnVuY3Rpb24gdG9nZ2xlUHJvamVjdExpc3QoKSB7XG4gICAgY29uc3Qgc2VsZWN0T25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaWRlYmFyLS1saXN0XCIpO1xuICAgIGNvbnN0IHNlbGVjdFR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2lkZWJhci0tbGlzdF9oaWRkZW5cIik7XG4gICAgaWYgKHNlbGVjdE9uZSkge1xuICAgICAgICBzZWxlY3RPbmUuaWQgPSBcInNpZGViYXItLWxpc3RfaGlkZGVuXCI7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhci0taGVhZGVyX2J0bl9pY29uX2Rvd25cIikuY2xhc3NMaXN0LnJlcGxhY2UoXCJzaWRlYmFyLS1oZWFkZXJfYnRuX2ljb25fZG93blwiLCBcInNpZGViYXItLWhlYWRlcl9idG5faWNvbl91cFwiKTtcbiAgICB9IGVsc2UgaWYgKHNlbGVjdFR3bykge1xuICAgICAgICBzZWxlY3RUd28uaWQgPSBcInNpZGViYXItLWxpc3RcIjtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyLS1oZWFkZXJfYnRuX2ljb25fdXBcIikuY2xhc3NMaXN0LnJlcGxhY2UoXCJzaWRlYmFyLS1oZWFkZXJfYnRuX2ljb25fdXBcIiwgXCJzaWRlYmFyLS1oZWFkZXJfYnRuX2ljb25fZG93blwiKTtcbiAgICB9XG59XG5leHBvcnQgeyBwcm9qZWN0LCBzaG93QWRkUHJvamVjdCwgYWRkUHJvamVjdCwgY2FuY2VsQWRkUHJvamVjdCwgdG9nZ2xlUHJvamVjdExpc3QsIHBvcHVsYXRlUHJvamVjdExpc3QgfTtcbiIsImltcG9ydCB7IG1haW5MaXN0VGFzayB9IGZyb20gXCIuL0RPTXNjcmlwdHMuanNcIjtcbmltcG9ydCB7IHByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5jb25zdCB0YXNrPShuYW1lLHByb2plY3QpPT57XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgcHJvamVjdDogcHJvamVjdCxcbiAgICB9O1xufVxuZnVuY3Rpb24gc2hvd0FkZFRhc2soKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLS1uZXdfaGlkZGVuXCIpLmlkID0gXCJ0YXNrLS1uZXdcIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stLWFkZFwiKS5jbGFzc0xpc3QucmVwbGFjZShcInRhc2stLWFkZFwiLFwidGFzay0tYWRkX2hpZGRlblwiKTtcbn1cbmZ1bmN0aW9uIGFkZFRhc2sobmFtZVZhbHVlLHByb2plY3RWYWx1ZSkge1xuICAgIGxldCBvYmo9SlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9MaXN0XCIpKTtcbiAgICBvYmoudGFzay5wdXNoKHRhc2sobmFtZVZhbHVlLG9iai5wcm9qZWN0W3Byb2plY3RWYWx1ZV0pKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9MaXN0XCIsSlNPTi5zdHJpbmdpZnkob2JqKSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLS1saXN0XCIpLnByZXBlbmQobWFpbkxpc3RUYXNrKG5hbWVWYWx1ZSkpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay0tbmV3XCIpLmlkID0gXCJ0YXNrLS1uZXdfaGlkZGVuXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLS1hZGRfaGlkZGVuXCIpLmNsYXNzTGlzdC5yZXBsYWNlKFwidGFzay0tYWRkX2hpZGRlblwiLFwidGFzay0tYWRkXCIpO1xufVxuZnVuY3Rpb24gcG9wdWxhdGVUYXNrTGlzdCgpe1xuICAgIGxldCBvYmo9SlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9MaXN0XCIpKTtcbiAgICBmb3IobGV0IGk9MDtpPG9iai50YXNrLmxlbmd0aDtpKyspe1xuICAgICAgICBsZXQgbmFtZVZhbHVlPW9iai50YXNrW2ldLm5hbWU7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi0tbGlzdFwiKS5wcmVwZW5kKG1haW5MaXN0VGFzayhuYW1lVmFsdWUpKTtcbiAgICB9XG59XG5mdW5jdGlvbiBwb3B1bGF0ZVByb2plY3RTZWxlY3QoKXtcbiAgICBsZXQgcHJvamVjdHNBcnJheT1KU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb0xpc3RcIikpLnByb2plY3Q7XG4gICAgbGV0IHNlbGVjdEVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrX3Byb2plY3RcIik7XG4gICAgLy9pZiBwcm9qZWN0IGFycmF5IGlzIG5vdCBlbXB0eSByZXBvcHVsYXRlIHNlbGVjdCBlbGVtZW50XG4gICAgaWYoIEFycmF5LmlzQXJyYXkocHJvamVjdHNBcnJheSkgJiYgcHJvamVjdHNBcnJheS5sZW5ndGggPiAwKXtcbiAgICAgICAgLy9yZW1vdmUgb2xkIG9wdGlvbnNcbiAgICAgICAgd2hpbGUgKHNlbGVjdEVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgc2VsZWN0RWxlbWVudC5yZW1vdmVDaGlsZChzZWxlY3RFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIC8vYWRkIG5ldyBvcHRpb25zXG4gICAgICAgIGZvcihsZXQgaT0wO2k8cHJvamVjdHNBcnJheS5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIGNvbnN0IHBPcHRpb249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgIHBPcHRpb24udmFsdWU9aTtcbiAgICAgICAgICAgIHBPcHRpb24udGV4dENvbnRlbnQ9cHJvamVjdHNBcnJheVtpXS5uYW1lO1xuICAgICAgICAgICAgc2VsZWN0RWxlbWVudC5hcHBlbmRDaGlsZChwT3B0aW9uKTtcbiAgICAgICAgfVxuICAgIH0gICAgXG59XG5mdW5jdGlvbiBjYW5jZWxBZGRUYXNrKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay0tbmV3XCIpLmlkID0gXCJ0YXNrLS1uZXdfaGlkZGVuXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLS1hZGRfaGlkZGVuXCIpLmNsYXNzTGlzdC5yZXBsYWNlKFwidGFzay0tYWRkX2hpZGRlblwiLFwidGFzay0tYWRkXCIpO1xufVxuZXhwb3J0IHsgc2hvd0FkZFRhc2ssIGFkZFRhc2ssIGNhbmNlbEFkZFRhc2ssIHBvcHVsYXRlVGFza0xpc3QsIHBvcHVsYXRlUHJvamVjdFNlbGVjdH07XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBidWlsZFNpdGUgfSBmcm9tIFwiLi9ET01zY3JpcHRzXCI7XG5pbXBvcnQgY3JlYXRlRXZlbnRzIGZyb20gXCIuL2V2ZW50c1NjcmlwdHNcIjtcbmJ1aWxkU2l0ZSgpO1xuY3JlYXRlRXZlbnRzKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9