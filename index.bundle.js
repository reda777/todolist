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

    mainList.prepend(mainListTask("Name1"));
    return main;
}
function mainListTask(tContent) {
    const task = document.createElement("div");
    task.className = "task";

    const taskBtn = document.createElement("div");
    taskBtn.className = "task--btn";
    task.appendChild(taskBtn);

    const taskBtnIcon = document.createElement("span");
    taskBtnIcon.className = "task--btn_icon";
    taskBtn.appendChild(taskBtnIcon);

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
function createStorage(){
    if(localStorage.getItem("todoList")===null){
        let todoList={};
        todoList.project=[];
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
/* harmony export */   "showAddProject": () => (/* binding */ showAddProject),
/* harmony export */   "toggleProjectList": () => (/* binding */ toggleProjectList)
/* harmony export */ });
/* harmony import */ var _DOMscripts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMscripts.js */ "./src/DOMscripts.js");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlEQUFxQjtBQUN6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0TnFDO0FBQ3JDO0FBQ0E7QUFDQSxRQUFRLG9EQUFzQjtBQUM5QixLQUFLO0FBQ0w7QUFDQSxRQUFRLGdEQUFrQjtBQUMxQjtBQUNBLEtBQUs7QUFDTDtBQUNBLFFBQVEsc0RBQXdCO0FBQ2hDLEtBQUs7QUFDTDtBQUNBLFFBQVEsdURBQXlCO0FBQ2pDLEtBQUs7QUFDTDtBQUNBLGlFQUFlLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQm9DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixnQ0FBZ0M7QUFDdEQ7QUFDQSxxREFBcUQsOERBQWM7QUFDbkU7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHFCQUFxQjtBQUNyQztBQUNBO0FBQ0EseURBQXlELDhEQUFjO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDZ0c7Ozs7Ozs7VUNuQ2hHO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05xQjtBQUNvQjtBQUNFO0FBQzNDLHNEQUFTO0FBQ1QsMERBQVksRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9ET01zY3JpcHRzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2V2ZW50c1NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCAqIGFzIHAgZnJvbSBcIi4vcHJvamVjdFwiO1xuZnVuY3Rpb24gaGVhZGVyKCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2LmlkID0gXCJoZWFkZXJcIjtcbiAgICBkaXYudGV4dENvbnRlbnQgPSBcIlRvZG8gTGlzdFwiO1xuICAgIHJldHVybiBkaXY7XG59XG5mdW5jdGlvbiBzaWRlYmFyKCkge1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNpZGViYXIuaWQgPSBcInNpZGViYXJcIjtcblxuICAgIGNvbnN0IHNpZGViYXJHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2lkZWJhckdyb3VwLmlkID0gXCJzaWRlYmFyLS1ncm91cFwiO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoc2lkZWJhckdyb3VwKTtcbiAgICBzaWRlYmFyR3JvdXAuYXBwZW5kQ2hpbGQoc2lkZWJhckhlYWRlcihcIk15IExpc3RcIikpO1xuICAgIHNpZGViYXJHcm91cC5hcHBlbmRDaGlsZChzaWRlYmFySGVhZGVyKFwiVG9kYXlcIikpO1xuICAgIHNpZGViYXJHcm91cC5hcHBlbmRDaGlsZChzaWRlYmFySGVhZGVyKFwiTmV4dCA3IERheXNcIikpO1xuXG4gICAgY29uc3Qgc2lkZWJhckhlYWRQcm9qZWN0ID0gc2lkZWJhckhlYWRlcihcIlByb2plY3RzXCIpO1xuICAgIGNvbnN0IHNpZGViYXJIZWFkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzaWRlYmFySGVhZEJ0bi5jbGFzc05hbWUgPSBcInNpZGViYXItLWhlYWRlcl9idG5cIjtcblxuICAgIGNvbnN0IHNpZGViYXJIZWFkQnRuSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHNpZGViYXJIZWFkQnRuSWNvbi5jbGFzc05hbWUgPSBcInNpZGViYXItLWhlYWRlcl9idG5faWNvbl9kb3duXCI7XG4gICAgc2lkZWJhckhlYWRCdG4uYXBwZW5kQ2hpbGQoc2lkZWJhckhlYWRCdG5JY29uKTtcbiAgICBzaWRlYmFySGVhZFByb2plY3QuYXBwZW5kQ2hpbGQoc2lkZWJhckhlYWRCdG4pO1xuICAgIHNpZGViYXJHcm91cC5hcHBlbmRDaGlsZChzaWRlYmFySGVhZFByb2plY3QpO1xuXG4gICAgY29uc3Qgc2lkZWJhckxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNpZGViYXJMaXN0LmlkID0gXCJzaWRlYmFyLS1saXN0XCI7XG4gICAgc2lkZWJhckdyb3VwLmFwcGVuZENoaWxkKHNpZGViYXJMaXN0KTtcblxuICAgIGNvbnN0IHByb2plY3RBZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RBZGQuY2xhc3NOYW1lID0gXCJwcm9qZWN0LS1hZGRcIjtcbiAgICBzaWRlYmFyTGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0QWRkKTtcblxuICAgIGNvbnN0IHByb2plY3RBZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RBZGRCdG4uY2xhc3NOYW1lID0gXCJwcm9qZWN0LS1hZGRfYnRuXCI7XG4gICAgcHJvamVjdEFkZC5hcHBlbmRDaGlsZChwcm9qZWN0QWRkQnRuKTtcblxuICAgIGNvbnN0IHByb2plY3RBZGRCdG5JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgcHJvamVjdEFkZEJ0bkljb24uY2xhc3NOYW1lID0gXCJwcm9qZWN0LS1hZGRfYnRuX2ljb25cIjtcbiAgICBwcm9qZWN0QWRkQnRuLmFwcGVuZENoaWxkKHByb2plY3RBZGRCdG5JY29uKTtcblxuICAgIGNvbnN0IHByb2plY3RBZGROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0QWRkTmFtZS5jbGFzc05hbWUgPSBcInByb2plY3QtLWFkZF9uYW1lXCI7XG4gICAgcHJvamVjdEFkZE5hbWUudGV4dENvbnRlbnQgPSBcIkFkZCBQcm9qZWN0XCI7XG4gICAgcHJvamVjdEFkZC5hcHBlbmRDaGlsZChwcm9qZWN0QWRkTmFtZSk7XG4gICAgcmV0dXJuIHNpZGViYXI7XG59XG5mdW5jdGlvbiBzaWRlYmFySGVhZGVyKHRDb250ZW50KSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuY2xhc3NOYW1lID0gXCJzaWRlYmFyLS1oZWFkZXJcIjtcbiAgICBjb25zdCBkaXZDaGlsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2Q2hpbGQuY2xhc3NOYW1lID0gXCJzaWRlYmFyLS1oZWFkZXJfdGl0bGVcIjtcbiAgICBkaXZDaGlsZC50ZXh0Q29udGVudCA9IHRDb250ZW50O1xuICAgIGRpdi5hcHBlbmRDaGlsZChkaXZDaGlsZCk7XG4gICAgcmV0dXJuIGRpdjtcbn1cbmZ1bmN0aW9uIHNpZGViYXJQcm9qZWN0KHRDb250ZW50LHRDb2xvcikge1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3QuY2xhc3NOYW1lID0gXCJwcm9qZWN0XCI7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3ROYW1lLmNsYXNzTmFtZSA9IFwicHJvamVjdC0tbmFtZVwiO1xuICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gdENvbnRlbnQ7XG4gICAgcHJvamVjdE5hbWUuc3R5bGUuY29sb3I9IHRDb2xvcjtcbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbiAgICBjb25zdCBwcm9qZWN0Q291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RDb3VudC5jbGFzc05hbWUgPSBcInByb2plY3QtLWNvdW50XCI7XG4gICAgcHJvamVjdENvdW50LnRleHRDb250ZW50ID0gXCIwXCI7XG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0Q291bnQpO1xuICAgIHJldHVybiBwcm9qZWN0O1xufVxuZnVuY3Rpb24gbWFpbigpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluLmlkID0gXCJtYWluXCI7XG5cbiAgICBjb25zdCBtYWluR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5Hcm91cC5pZCA9IFwibWFpbi0tZ3JvdXBcIjtcbiAgICBtYWluLmFwcGVuZENoaWxkKG1haW5Hcm91cCk7XG5cbiAgICBjb25zdCBtYWluSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluSGVhZGVyLmNsYXNzTmFtZSA9IFwibWFpbi0taGVhZGVyXCI7XG4gICAgY29uc3QgbWFpbkhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluSGVhZGVyVGl0bGUuY2xhc3NOYW1lID0gXCJtYWluLS1oZWFkZXJfdGl0bGVcIjtcbiAgICBtYWluSGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSBcIlRvZGF5XCI7XG4gICAgbWFpbkhlYWRlci5hcHBlbmRDaGlsZChtYWluSGVhZGVyVGl0bGUpO1xuICAgIG1haW5Hcm91cC5hcHBlbmRDaGlsZChtYWluSGVhZGVyKTtcblxuICAgIGNvbnN0IG1haW5MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluTGlzdC5pZCA9IFwibWFpbi0tbGlzdFwiO1xuICAgIG1haW5Hcm91cC5hcHBlbmRDaGlsZChtYWluTGlzdCk7XG5cbiAgICBjb25zdCB0YXNrQWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrQWRkLmNsYXNzTmFtZSA9IFwidGFzay0tYWRkXCI7XG4gICAgbWFpbkxpc3QuYXBwZW5kQ2hpbGQodGFza0FkZCk7XG5cbiAgICBjb25zdCB0YXNrQWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrQWRkQnRuLmNsYXNzTmFtZSA9IFwidGFzay0tYWRkX2J0blwiO1xuICAgIHRhc2tBZGQuYXBwZW5kQ2hpbGQodGFza0FkZEJ0bik7XG5cbiAgICBjb25zdCB0YXNrQWRkQnRuSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHRhc2tBZGRCdG5JY29uLmNsYXNzTmFtZSA9IFwidGFzay0tYWRkX2J0bl9pY29uXCI7XG4gICAgdGFza0FkZEJ0bi5hcHBlbmRDaGlsZCh0YXNrQWRkQnRuSWNvbik7XG5cbiAgICBjb25zdCB0YXNrQWRkTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0FkZE5hbWUuY2xhc3NOYW1lID0gXCJ0YXNrLS1hZGRfbmFtZVwiO1xuICAgIHRhc2tBZGROYW1lLnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiO1xuICAgIHRhc2tBZGQuYXBwZW5kQ2hpbGQodGFza0FkZE5hbWUpO1xuXG4gICAgbWFpbkxpc3QucHJlcGVuZChtYWluTGlzdFRhc2soXCJOYW1lMVwiKSk7XG4gICAgcmV0dXJuIG1haW47XG59XG5mdW5jdGlvbiBtYWluTGlzdFRhc2sodENvbnRlbnQpIHtcbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrLmNsYXNzTmFtZSA9IFwidGFza1wiO1xuXG4gICAgY29uc3QgdGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0J0bi5jbGFzc05hbWUgPSBcInRhc2stLWJ0blwiO1xuICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza0J0bik7XG5cbiAgICBjb25zdCB0YXNrQnRuSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHRhc2tCdG5JY29uLmNsYXNzTmFtZSA9IFwidGFzay0tYnRuX2ljb25cIjtcbiAgICB0YXNrQnRuLmFwcGVuZENoaWxkKHRhc2tCdG5JY29uKTtcblxuICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrTmFtZS5jbGFzc05hbWUgPSBcInRhc2stLW5hbWVcIjtcbiAgICB0YXNrTmFtZS50ZXh0Q29udGVudCA9IHRDb250ZW50O1xuICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza05hbWUpO1xuICAgIHJldHVybiB0YXNrO1xufVxuZnVuY3Rpb24gZm9vdGVyKCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2LmlkID0gXCJmb290ZXJcIjtcbiAgICBkaXYudGV4dENvbnRlbnQgPSBcIkNvcHlyaWdodCDCqSAyMDIyIFJlZGFcIjtcbiAgICByZXR1cm4gZGl2O1xufVxuZnVuY3Rpb24gYWRkUHJvamVjdCgpIHtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdQcm9qZWN0LmlkID0gXCJuZXdwcm9qZWN0X2hpZGRlblwiO1xuICAgIGNvbnN0IG5ld1Byb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3UHJvamVjdFRpdGxlLmlkID0gXCJuZXdwcm9qZWN0LS10aXRsZVwiO1xuICAgIG5ld1Byb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IFwiQWRkIFByb2plY3RcIjtcbiAgICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKG5ld1Byb2plY3RUaXRsZSk7XG5cbiAgICBjb25zdCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3UHJvamVjdEZvcm0uaWQgPSBcIm5ld3Byb2plY3QtLWZvcm1cIjtcbiAgICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKG5ld1Byb2plY3RGb3JtKTtcblxuICAgIGNvbnN0IG5ld1Byb2plY3RGb3JtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3UHJvamVjdEZvcm1OYW1lLmlkID0gXCJuZXdwcm9qZWN0LS1mb3JtX25hbWVcIjtcbiAgICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChuZXdQcm9qZWN0Rm9ybU5hbWUpO1xuICAgIGNvbnN0IG5ld1Byb2plY3RGb3JtQ29sb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1Byb2plY3RGb3JtQ29sb3IuaWQgPSBcIm5ld3Byb2plY3QtLWZvcm1fY29sb3JcIjtcbiAgICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChuZXdQcm9qZWN0Rm9ybUNvbG9yKTtcblxuICAgIGNvbnN0IHByb2plY3ROYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgT2JqZWN0LmFzc2lnbihwcm9qZWN0TmFtZUxhYmVsLCB7XG4gICAgICAgIGZvcjogXCJwcm9qZWN0X25hbWVcIixcbiAgICAgICAgdGV4dENvbnRlbnQ6IFwiTmFtZVwiXG4gICAgfSk7XG4gICAgbmV3UHJvamVjdEZvcm1OYW1lLmFwcGVuZENoaWxkKHByb2plY3ROYW1lTGFiZWwpO1xuXG4gICAgY29uc3QgcHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBPYmplY3QuYXNzaWduKHByb2plY3ROYW1lSW5wdXQsIHtcbiAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgIG5hbWU6IFwicHJvamVjdF9uYW1lXCIsXG4gICAgICAgIGlkOiBcInByb2plY3RfbmFtZVwiXG4gICAgfSk7XG4gICAgbmV3UHJvamVjdEZvcm1OYW1lLmFwcGVuZENoaWxkKHByb2plY3ROYW1lSW5wdXQpO1xuXG4gICAgY29uc3QgcHJvamVjdENvbG9yTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgT2JqZWN0LmFzc2lnbihwcm9qZWN0Q29sb3JMYWJlbCwge1xuICAgICAgICBmb3I6IFwicHJvamVjdF9jb2xvclwiLFxuICAgICAgICB0ZXh0Q29udGVudDogXCJDb2xvclwiXG4gICAgfSk7XG4gICAgbmV3UHJvamVjdEZvcm1Db2xvci5hcHBlbmRDaGlsZChwcm9qZWN0Q29sb3JMYWJlbCk7XG5cbiAgICBjb25zdCBwcm9qZWN0Q29sb3JJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBPYmplY3QuYXNzaWduKHByb2plY3RDb2xvcklucHV0LCB7XG4gICAgICAgIHR5cGU6IFwiY29sb3JcIixcbiAgICAgICAgbmFtZTogXCJwcm9qZWN0X2NvbG9yXCIsXG4gICAgICAgIGlkOiBcInByb2plY3RfY29sb3JcIlxuICAgIH0pO1xuICAgIG5ld1Byb2plY3RGb3JtQ29sb3IuYXBwZW5kQ2hpbGQocHJvamVjdENvbG9ySW5wdXQpO1xuXG4gICAgY29uc3QgbmV3UHJvamVjdEZvcm1TdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1Byb2plY3RGb3JtU3VibWl0LmlkID0gXCJuZXdwcm9qZWN0LS1mb3JtX3N1Ym1pdFwiO1xuICAgIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKG5ld1Byb2plY3RGb3JtU3VibWl0KTtcblxuICAgIGNvbnN0IG5ld1Byb2plY3RGb3JtU3VibWl0QWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdQcm9qZWN0Rm9ybVN1Ym1pdEFkZC5pZCA9IFwibmV3cHJvamVjdC0tZm9ybV9zdWJtaXRfYWRkXCI7XG4gICAgbmV3UHJvamVjdEZvcm1TdWJtaXRBZGQudGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuICAgIG5ld1Byb2plY3RGb3JtU3VibWl0LmFwcGVuZENoaWxkKG5ld1Byb2plY3RGb3JtU3VibWl0QWRkKTtcbiAgICBjb25zdCBuZXdQcm9qZWN0Rm9ybVN1Ym1pdENhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3UHJvamVjdEZvcm1TdWJtaXRDYW5jZWwuaWQgPSBcIm5ld3Byb2plY3QtLWZvcm1fc3VibWl0X2NhbmNlbFwiO1xuICAgIG5ld1Byb2plY3RGb3JtU3VibWl0Q2FuY2VsLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgICBuZXdQcm9qZWN0Rm9ybVN1Ym1pdC5hcHBlbmRDaGlsZChuZXdQcm9qZWN0Rm9ybVN1Ym1pdENhbmNlbCk7XG4gICAgcmV0dXJuIG5ld1Byb2plY3Q7XG59XG5mdW5jdGlvbiBjcmVhdGVTdG9yYWdlKCl7XG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2RvTGlzdFwiKT09PW51bGwpe1xuICAgICAgICBsZXQgdG9kb0xpc3Q9e307XG4gICAgICAgIHRvZG9MaXN0LnByb2plY3Q9W107XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb0xpc3RcIixKU09OLnN0cmluZ2lmeSh0b2RvTGlzdCkpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGJ1aWxkU2l0ZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250ZW50LmlkID0gXCJjb250ZW50XCI7XG4gICAgY29udGVudC5hcHBlbmQoaGVhZGVyKCksIHNpZGViYXIoKSwgbWFpbigpLCBmb290ZXIoKSwgYWRkUHJvamVjdCgpKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIGNyZWF0ZVN0b3JhZ2UoKTtcbiAgICBwLnBvcHVsYXRlUHJvamVjdExpc3QoKTtcbn1cblxuZXhwb3J0IHsgYnVpbGRTaXRlLCBtYWluTGlzdFRhc2ssIHNpZGViYXJQcm9qZWN0IH07IiwiaW1wb3J0ICogYXMgcHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5mdW5jdGlvbiBjcmVhdGVFdmVudHMoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LS1hZGRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcHJvamVjdC5zaG93QWRkUHJvamVjdCgpO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3cHJvamVjdC0tZm9ybV9zdWJtaXRfYWRkXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHByb2plY3QuYWRkUHJvamVjdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ld3Byb2plY3QtLWZvcm1fbmFtZSBpbnB1dFwiKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ld3Byb2plY3QtLWZvcm1fY29sb3IgaW5wdXRcIikudmFsdWUpO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3cHJvamVjdC0tZm9ybV9zdWJtaXRfY2FuY2VsXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHByb2plY3QuY2FuY2VsQWRkUHJvamVjdCgpO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhci0taGVhZGVyX2J0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBwcm9qZWN0LnRvZ2dsZVByb2plY3RMaXN0KCk7XG4gICAgfSk7XG59XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFdmVudHM7IiwiaW1wb3J0IHsgbWFpbkxpc3RUYXNrLCBzaWRlYmFyUHJvamVjdCB9IGZyb20gXCIuL0RPTXNjcmlwdHMuanNcIjtcbmZ1bmN0aW9uIHNob3dBZGRQcm9qZWN0KCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3cHJvamVjdF9oaWRkZW5cIikuaWQgPSBcIm5ld3Byb2plY3RcIjtcbn1cbmZ1bmN0aW9uIGFkZFByb2plY3QobmFtZVZhbHVlLGNvbG9yVmFsdWUpIHtcbiAgICBcbiAgICBsZXQgb2JqPUpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2RvTGlzdFwiKSk7XG4gICAgb2JqLnByb2plY3QucHVzaCh7bmFtZTpuYW1lVmFsdWUsY29sb3I6Y29sb3JWYWx1ZX0pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb0xpc3RcIixKU09OLnN0cmluZ2lmeShvYmopKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpZGViYXItLWxpc3RcIikucHJlcGVuZChzaWRlYmFyUHJvamVjdChuYW1lVmFsdWUsY29sb3JWYWx1ZSkpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3cHJvamVjdFwiKS5pZCA9IFwibmV3cHJvamVjdF9oaWRkZW5cIjtcblxufVxuZnVuY3Rpb24gcG9wdWxhdGVQcm9qZWN0TGlzdCgpe1xuICAgIGxldCBvYmo9SlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9MaXN0XCIpKTtcbiAgICBmb3IobGV0IGk9MDtpPG9iai5wcm9qZWN0Lmxlbmd0aDtpKyspe1xuICAgICAgICBsZXQgbmFtZVZhbHVlPW9iai5wcm9qZWN0W2ldLm5hbWU7XG4gICAgICAgIGxldCBjb2xvclZhbHVlPW9iai5wcm9qZWN0W2ldLmNvbG9yO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpZGViYXItLWxpc3RcIikucHJlcGVuZChzaWRlYmFyUHJvamVjdChuYW1lVmFsdWUsY29sb3JWYWx1ZSkpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNhbmNlbEFkZFByb2plY3QoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXdwcm9qZWN0XCIpLmlkID0gXCJuZXdwcm9qZWN0X2hpZGRlblwiO1xufVxuZnVuY3Rpb24gdG9nZ2xlUHJvamVjdExpc3QoKSB7XG4gICAgY29uc3Qgc2VsZWN0T25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaWRlYmFyLS1saXN0XCIpO1xuICAgIGNvbnN0IHNlbGVjdFR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2lkZWJhci0tbGlzdF9oaWRkZW5cIik7XG4gICAgaWYgKHNlbGVjdE9uZSkge1xuICAgICAgICBzZWxlY3RPbmUuaWQgPSBcInNpZGViYXItLWxpc3RfaGlkZGVuXCI7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhci0taGVhZGVyX2J0bl9pY29uX2Rvd25cIikuY2xhc3NMaXN0LnJlcGxhY2UoXCJzaWRlYmFyLS1oZWFkZXJfYnRuX2ljb25fZG93blwiLCBcInNpZGViYXItLWhlYWRlcl9idG5faWNvbl91cFwiKTtcbiAgICB9IGVsc2UgaWYgKHNlbGVjdFR3bykge1xuICAgICAgICBzZWxlY3RUd28uaWQgPSBcInNpZGViYXItLWxpc3RcIjtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyLS1oZWFkZXJfYnRuX2ljb25fdXBcIikuY2xhc3NMaXN0LnJlcGxhY2UoXCJzaWRlYmFyLS1oZWFkZXJfYnRuX2ljb25fdXBcIiwgXCJzaWRlYmFyLS1oZWFkZXJfYnRuX2ljb25fZG93blwiKTtcbiAgICB9XG59XG5leHBvcnQgeyBzaG93QWRkUHJvamVjdCwgYWRkUHJvamVjdCwgY2FuY2VsQWRkUHJvamVjdCwgdG9nZ2xlUHJvamVjdExpc3QsIHBvcHVsYXRlUHJvamVjdExpc3QgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBidWlsZFNpdGUgfSBmcm9tIFwiLi9ET01zY3JpcHRzXCI7XG5pbXBvcnQgY3JlYXRlRXZlbnRzIGZyb20gXCIuL2V2ZW50c1NjcmlwdHNcIjtcbmJ1aWxkU2l0ZSgpO1xuY3JlYXRlRXZlbnRzKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9