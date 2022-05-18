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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function header(){
    const div=document.createElement("div");
    div.id="header";
    div.textContent="Todo List";
    return div;
}
function sidebar(){
    const sidebar=document.createElement("div");
    sidebar.id="sidebar";

    const sidebarGroup=document.createElement("div");
    sidebarGroup.id="sidebar--group";
    sidebar.appendChild(sidebarGroup);
    sidebarGroup.appendChild(sidebarHeader("My List"));
    sidebarGroup.appendChild(sidebarHeader("Today"));
    sidebarGroup.appendChild(sidebarHeader("Next 7 Days"));

    const sidebarHeadProject=sidebarHeader("Projects");
    const sidebarHeadBtn=document.createElement("div");
    sidebarHeadBtn.className="sidebar--header_btn";

    const sidebarHeadBtnIcon=document.createElement("span");
    sidebarHeadBtnIcon.className="sidebar--header_btn_icon_up";
    sidebarHeadBtn.appendChild(sidebarHeadBtnIcon);
    sidebarHeadProject.appendChild(sidebarHeadBtn);
    sidebarGroup.appendChild(sidebarHeadProject);

    const sidebarList=document.createElement("div");
    sidebarList.id="sidebar--list";
    sidebarGroup.appendChild(sidebarList);

    const projectAdd=document.createElement("div");
    projectAdd.className="project--add";
    sidebarList.appendChild(projectAdd);

    const projectAddBtn=document.createElement("div");
    projectAddBtn.className="project--add_btn";
    projectAdd.appendChild(projectAddBtn);

    const projectAddBtnIcon=document.createElement("span");
    projectAddBtnIcon.className="project--add_btn_icon";
    projectAddBtn.appendChild(projectAddBtnIcon);
    
    const projectAddName=document.createElement("div");
    projectAddName.className="project--add_name";
    projectAddName.textContent="Add Project";
    projectAdd.appendChild(projectAddName);
    sidebarList.prepend(sidebarProject("Name1"));
    return sidebar;
}
function sidebarHeader(tContent){
    const div=document.createElement("div");
    div.className="sidebar--header";
    const divChild=document.createElement("div");
    divChild.className="sidebar--header_title";
    divChild.textContent=tContent;
    div.appendChild(divChild);
    return div;
}
function sidebarProject(tContent){
    const project=document.createElement("div");
    project.className="project";
    const projectName=document.createElement("div");
    projectName.className="project--name";
    projectName.textContent=tContent;
    project.appendChild(projectName);
    const projectCount=document.createElement("div");
    projectCount.className="project--count";
    projectCount.textContent="2";
    project.appendChild(projectCount);
    return project;
}
function main(){
    const main=document.createElement("div");
    main.id="main";

    const mainGroup=document.createElement("div");
    mainGroup.id="main--group";
    main.appendChild(mainGroup);

    const mainHeader=document.createElement("div");
    mainHeader.className="main--header";
    const mainHeaderTitle=document.createElement("div");
    mainHeaderTitle.className="main--header_title";
    mainHeaderTitle.textContent="Today";
    mainHeader.appendChild(mainHeaderTitle);
    mainGroup.appendChild(mainHeader);

    const mainList=document.createElement("div");
    mainList.id="main--list";
    mainGroup.appendChild(mainList);

    const taskAdd=document.createElement("div");
    taskAdd.className="task--add";
    mainList.appendChild(taskAdd);

    const taskAddBtn=document.createElement("div");
    taskAddBtn.className="task--add_btn";
    taskAdd.appendChild(taskAddBtn);

    const taskAddBtnIcon=document.createElement("span");
    taskAddBtnIcon.className="task--add_btn_icon";
    taskAddBtn.appendChild(taskAddBtnIcon);
    
    const taskAddName=document.createElement("div");
    taskAddName.className="task--add_name";
    taskAddName.textContent="Add Task";
    taskAdd.appendChild(taskAddName);

    mainList.prepend(mainListTask("Name1"));
    return main;
}
function mainListTask(tContent){
    const task=document.createElement("div");
    task.className="task";

    const taskBtn=document.createElement("div");
    taskBtn.className="task--btn";
    task.appendChild(taskBtn);

    const taskBtnIcon=document.createElement("span");
    taskBtnIcon.className="task--btn_icon";
    taskBtn.appendChild(taskBtnIcon);

    const taskName=document.createElement("div");
    taskName.className="task--name";
    taskName.textContent=tContent;
    task.appendChild(taskName);
    return task;
}
function footer(){
    const div=document.createElement("div");
    div.id="footer";
    div.textContent="Copyright © 2022 Reda";
    return div;
}
function buildDOM(){
    const content=document.createElement("div");
    content.id="content";
    content.append(header(),sidebar(),main(),footer(),addProject());
    document.body.appendChild(content);
}
function addProject(){
    const newProject=document.createElement("div");
    newProject.id="newproject_hidden";
    const newProjectTitle=document.createElement("div");
    newProjectTitle.id="newproject--title";
    newProjectTitle.textContent="Add Project";
    newProject.appendChild(newProjectTitle);
    
    const newProjectForm=document.createElement("div");
    newProjectForm.id="newproject--form";
    newProject.appendChild(newProjectForm);

    const newProjectFormName=document.createElement("div");
    newProjectFormName.id="newproject--form_name";
    newProjectForm.appendChild(newProjectFormName);
    const newProjectFormColor=document.createElement("div");
    newProjectFormColor.id="newproject--form_color";
    newProjectForm.appendChild(newProjectFormColor);
    
    const projectNameLabel=document.createElement("label");
    Object.assign(projectNameLabel,{
        for: "project_name",
        textContent: "Name"
    });
    newProjectFormName.appendChild(projectNameLabel);

    const projectNameInput=document.createElement("input");
    Object.assign(projectNameInput,{
        type: "text",
        name: "project_name",
        id: "project_name"
    });
    newProjectFormName.appendChild(projectNameInput);

    const projectColorLabel=document.createElement("label");
    Object.assign(projectColorLabel,{
        for: "project_color",
        textContent: "Color"
    });
    newProjectFormColor.appendChild(projectColorLabel);

    const projectColorInput=document.createElement("input");
    Object.assign(projectColorInput,{
        type: "color",
        name: "project_color",
        id: "project_color"
    });
    newProjectFormColor.appendChild(projectColorInput);

    const newProjectFormSubmit=document.createElement("div");
    newProjectFormSubmit.id="newproject--form_submit";
    newProjectForm.appendChild(newProjectFormSubmit);

    const newProjectFormSubmitAdd=document.createElement("div");
    newProjectFormSubmitAdd.id="newproject--form_submit_add";
    newProjectFormSubmitAdd.textContent="Add";
    newProjectFormSubmit.appendChild(newProjectFormSubmitAdd);
    const newProjectFormSubmitCancel=document.createElement("div");
    newProjectFormSubmitCancel.id="newproject--form_submit_cancel";
    newProjectFormSubmitCancel.textContent="Cancel";
    newProjectFormSubmit.appendChild(newProjectFormSubmitCancel);
    return newProject;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildDOM);

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

function createEvents(){
    document.querySelector(".project--add").addEventListener("click",()=>{
        (0,_project__WEBPACK_IMPORTED_MODULE_0__.addProject)();
    });
    document.querySelector("#newproject--form_submit_cancel").addEventListener("click",()=>{
        (0,_project__WEBPACK_IMPORTED_MODULE_0__.cancelAddProject)();
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
/* harmony export */   "cancelAddProject": () => (/* binding */ cancelAddProject)
/* harmony export */ });
function addProject(){
    document.querySelector("#newproject_hidden").id="newproject";
}
function cancelAddProject(){
    document.querySelector("#newproject").id="newproject_hidden";
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



(0,_DOMscripts__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_eventsScripts__WEBPACK_IMPORTED_MODULE_2__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7O0FDN01nQztBQUN2RDtBQUNBO0FBQ0EsUUFBUSxvREFBVTtBQUNsQixLQUFLO0FBQ0w7QUFDQSxRQUFRLDBEQUFnQjtBQUN4QixLQUFLO0FBQ0w7QUFDQSxpRUFBZSxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7QUNUM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3NDOzs7Ozs7O1VDTnRDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05xQjtBQUNlO0FBQ087QUFDM0MsdURBQVE7QUFDUiwwREFBWSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzP2UzMjAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvRE9Nc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9ldmVudHNTY3JpcHRzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJmdW5jdGlvbiBoZWFkZXIoKXtcbiAgICBjb25zdCBkaXY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuaWQ9XCJoZWFkZXJcIjtcbiAgICBkaXYudGV4dENvbnRlbnQ9XCJUb2RvIExpc3RcIjtcbiAgICByZXR1cm4gZGl2O1xufVxuZnVuY3Rpb24gc2lkZWJhcigpe1xuICAgIGNvbnN0IHNpZGViYXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzaWRlYmFyLmlkPVwic2lkZWJhclwiO1xuXG4gICAgY29uc3Qgc2lkZWJhckdyb3VwPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2lkZWJhckdyb3VwLmlkPVwic2lkZWJhci0tZ3JvdXBcIjtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHNpZGViYXJHcm91cCk7XG4gICAgc2lkZWJhckdyb3VwLmFwcGVuZENoaWxkKHNpZGViYXJIZWFkZXIoXCJNeSBMaXN0XCIpKTtcbiAgICBzaWRlYmFyR3JvdXAuYXBwZW5kQ2hpbGQoc2lkZWJhckhlYWRlcihcIlRvZGF5XCIpKTtcbiAgICBzaWRlYmFyR3JvdXAuYXBwZW5kQ2hpbGQoc2lkZWJhckhlYWRlcihcIk5leHQgNyBEYXlzXCIpKTtcblxuICAgIGNvbnN0IHNpZGViYXJIZWFkUHJvamVjdD1zaWRlYmFySGVhZGVyKFwiUHJvamVjdHNcIik7XG4gICAgY29uc3Qgc2lkZWJhckhlYWRCdG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzaWRlYmFySGVhZEJ0bi5jbGFzc05hbWU9XCJzaWRlYmFyLS1oZWFkZXJfYnRuXCI7XG5cbiAgICBjb25zdCBzaWRlYmFySGVhZEJ0bkljb249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgc2lkZWJhckhlYWRCdG5JY29uLmNsYXNzTmFtZT1cInNpZGViYXItLWhlYWRlcl9idG5faWNvbl91cFwiO1xuICAgIHNpZGViYXJIZWFkQnRuLmFwcGVuZENoaWxkKHNpZGViYXJIZWFkQnRuSWNvbik7XG4gICAgc2lkZWJhckhlYWRQcm9qZWN0LmFwcGVuZENoaWxkKHNpZGViYXJIZWFkQnRuKTtcbiAgICBzaWRlYmFyR3JvdXAuYXBwZW5kQ2hpbGQoc2lkZWJhckhlYWRQcm9qZWN0KTtcblxuICAgIGNvbnN0IHNpZGViYXJMaXN0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2lkZWJhckxpc3QuaWQ9XCJzaWRlYmFyLS1saXN0XCI7XG4gICAgc2lkZWJhckdyb3VwLmFwcGVuZENoaWxkKHNpZGViYXJMaXN0KTtcblxuICAgIGNvbnN0IHByb2plY3RBZGQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0QWRkLmNsYXNzTmFtZT1cInByb2plY3QtLWFkZFwiO1xuICAgIHNpZGViYXJMaXN0LmFwcGVuZENoaWxkKHByb2plY3RBZGQpO1xuXG4gICAgY29uc3QgcHJvamVjdEFkZEJ0bj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RBZGRCdG4uY2xhc3NOYW1lPVwicHJvamVjdC0tYWRkX2J0blwiO1xuICAgIHByb2plY3RBZGQuYXBwZW5kQ2hpbGQocHJvamVjdEFkZEJ0bik7XG5cbiAgICBjb25zdCBwcm9qZWN0QWRkQnRuSWNvbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBwcm9qZWN0QWRkQnRuSWNvbi5jbGFzc05hbWU9XCJwcm9qZWN0LS1hZGRfYnRuX2ljb25cIjtcbiAgICBwcm9qZWN0QWRkQnRuLmFwcGVuZENoaWxkKHByb2plY3RBZGRCdG5JY29uKTtcbiAgICBcbiAgICBjb25zdCBwcm9qZWN0QWRkTmFtZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RBZGROYW1lLmNsYXNzTmFtZT1cInByb2plY3QtLWFkZF9uYW1lXCI7XG4gICAgcHJvamVjdEFkZE5hbWUudGV4dENvbnRlbnQ9XCJBZGQgUHJvamVjdFwiO1xuICAgIHByb2plY3RBZGQuYXBwZW5kQ2hpbGQocHJvamVjdEFkZE5hbWUpO1xuICAgIHNpZGViYXJMaXN0LnByZXBlbmQoc2lkZWJhclByb2plY3QoXCJOYW1lMVwiKSk7XG4gICAgcmV0dXJuIHNpZGViYXI7XG59XG5mdW5jdGlvbiBzaWRlYmFySGVhZGVyKHRDb250ZW50KXtcbiAgICBjb25zdCBkaXY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuY2xhc3NOYW1lPVwic2lkZWJhci0taGVhZGVyXCI7XG4gICAgY29uc3QgZGl2Q2hpbGQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZDaGlsZC5jbGFzc05hbWU9XCJzaWRlYmFyLS1oZWFkZXJfdGl0bGVcIjtcbiAgICBkaXZDaGlsZC50ZXh0Q29udGVudD10Q29udGVudDtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZGl2Q2hpbGQpO1xuICAgIHJldHVybiBkaXY7XG59XG5mdW5jdGlvbiBzaWRlYmFyUHJvamVjdCh0Q29udGVudCl7XG4gICAgY29uc3QgcHJvamVjdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3QuY2xhc3NOYW1lPVwicHJvamVjdFwiO1xuICAgIGNvbnN0IHByb2plY3ROYW1lPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdE5hbWUuY2xhc3NOYW1lPVwicHJvamVjdC0tbmFtZVwiO1xuICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50PXRDb250ZW50O1xuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuICAgIGNvbnN0IHByb2plY3RDb3VudD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RDb3VudC5jbGFzc05hbWU9XCJwcm9qZWN0LS1jb3VudFwiO1xuICAgIHByb2plY3RDb3VudC50ZXh0Q29udGVudD1cIjJcIjtcbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RDb3VudCk7XG4gICAgcmV0dXJuIHByb2plY3Q7XG59XG5mdW5jdGlvbiBtYWluKCl7XG4gICAgY29uc3QgbWFpbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW4uaWQ9XCJtYWluXCI7XG5cbiAgICBjb25zdCBtYWluR3JvdXA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluR3JvdXAuaWQ9XCJtYWluLS1ncm91cFwiO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQobWFpbkdyb3VwKTtcblxuICAgIGNvbnN0IG1haW5IZWFkZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluSGVhZGVyLmNsYXNzTmFtZT1cIm1haW4tLWhlYWRlclwiO1xuICAgIGNvbnN0IG1haW5IZWFkZXJUaXRsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5IZWFkZXJUaXRsZS5jbGFzc05hbWU9XCJtYWluLS1oZWFkZXJfdGl0bGVcIjtcbiAgICBtYWluSGVhZGVyVGl0bGUudGV4dENvbnRlbnQ9XCJUb2RheVwiO1xuICAgIG1haW5IZWFkZXIuYXBwZW5kQ2hpbGQobWFpbkhlYWRlclRpdGxlKTtcbiAgICBtYWluR3JvdXAuYXBwZW5kQ2hpbGQobWFpbkhlYWRlcik7XG5cbiAgICBjb25zdCBtYWluTGlzdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5MaXN0LmlkPVwibWFpbi0tbGlzdFwiO1xuICAgIG1haW5Hcm91cC5hcHBlbmRDaGlsZChtYWluTGlzdCk7XG5cbiAgICBjb25zdCB0YXNrQWRkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0FkZC5jbGFzc05hbWU9XCJ0YXNrLS1hZGRcIjtcbiAgICBtYWluTGlzdC5hcHBlbmRDaGlsZCh0YXNrQWRkKTtcblxuICAgIGNvbnN0IHRhc2tBZGRCdG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrQWRkQnRuLmNsYXNzTmFtZT1cInRhc2stLWFkZF9idG5cIjtcbiAgICB0YXNrQWRkLmFwcGVuZENoaWxkKHRhc2tBZGRCdG4pO1xuXG4gICAgY29uc3QgdGFza0FkZEJ0bkljb249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgdGFza0FkZEJ0bkljb24uY2xhc3NOYW1lPVwidGFzay0tYWRkX2J0bl9pY29uXCI7XG4gICAgdGFza0FkZEJ0bi5hcHBlbmRDaGlsZCh0YXNrQWRkQnRuSWNvbik7XG4gICAgXG4gICAgY29uc3QgdGFza0FkZE5hbWU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrQWRkTmFtZS5jbGFzc05hbWU9XCJ0YXNrLS1hZGRfbmFtZVwiO1xuICAgIHRhc2tBZGROYW1lLnRleHRDb250ZW50PVwiQWRkIFRhc2tcIjtcbiAgICB0YXNrQWRkLmFwcGVuZENoaWxkKHRhc2tBZGROYW1lKTtcblxuICAgIG1haW5MaXN0LnByZXBlbmQobWFpbkxpc3RUYXNrKFwiTmFtZTFcIikpO1xuICAgIHJldHVybiBtYWluO1xufVxuZnVuY3Rpb24gbWFpbkxpc3RUYXNrKHRDb250ZW50KXtcbiAgICBjb25zdCB0YXNrPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFzay5jbGFzc05hbWU9XCJ0YXNrXCI7XG5cbiAgICBjb25zdCB0YXNrQnRuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0J0bi5jbGFzc05hbWU9XCJ0YXNrLS1idG5cIjtcbiAgICB0YXNrLmFwcGVuZENoaWxkKHRhc2tCdG4pO1xuXG4gICAgY29uc3QgdGFza0J0bkljb249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgdGFza0J0bkljb24uY2xhc3NOYW1lPVwidGFzay0tYnRuX2ljb25cIjtcbiAgICB0YXNrQnRuLmFwcGVuZENoaWxkKHRhc2tCdG5JY29uKTtcblxuICAgIGNvbnN0IHRhc2tOYW1lPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza05hbWUuY2xhc3NOYW1lPVwidGFzay0tbmFtZVwiO1xuICAgIHRhc2tOYW1lLnRleHRDb250ZW50PXRDb250ZW50O1xuICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza05hbWUpO1xuICAgIHJldHVybiB0YXNrO1xufVxuZnVuY3Rpb24gZm9vdGVyKCl7XG4gICAgY29uc3QgZGl2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2LmlkPVwiZm9vdGVyXCI7XG4gICAgZGl2LnRleHRDb250ZW50PVwiQ29weXJpZ2h0IMKpIDIwMjIgUmVkYVwiO1xuICAgIHJldHVybiBkaXY7XG59XG5mdW5jdGlvbiBidWlsZERPTSgpe1xuICAgIGNvbnN0IGNvbnRlbnQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250ZW50LmlkPVwiY29udGVudFwiO1xuICAgIGNvbnRlbnQuYXBwZW5kKGhlYWRlcigpLHNpZGViYXIoKSxtYWluKCksZm9vdGVyKCksYWRkUHJvamVjdCgpKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xufVxuZnVuY3Rpb24gYWRkUHJvamVjdCgpe1xuICAgIGNvbnN0IG5ld1Byb2plY3Q9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdQcm9qZWN0LmlkPVwibmV3cHJvamVjdF9oaWRkZW5cIjtcbiAgICBjb25zdCBuZXdQcm9qZWN0VGl0bGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdQcm9qZWN0VGl0bGUuaWQ9XCJuZXdwcm9qZWN0LS10aXRsZVwiO1xuICAgIG5ld1Byb2plY3RUaXRsZS50ZXh0Q29udGVudD1cIkFkZCBQcm9qZWN0XCI7XG4gICAgbmV3UHJvamVjdC5hcHBlbmRDaGlsZChuZXdQcm9qZWN0VGl0bGUpO1xuICAgIFxuICAgIGNvbnN0IG5ld1Byb2plY3RGb3JtPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3UHJvamVjdEZvcm0uaWQ9XCJuZXdwcm9qZWN0LS1mb3JtXCI7XG4gICAgbmV3UHJvamVjdC5hcHBlbmRDaGlsZChuZXdQcm9qZWN0Rm9ybSk7XG5cbiAgICBjb25zdCBuZXdQcm9qZWN0Rm9ybU5hbWU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdQcm9qZWN0Rm9ybU5hbWUuaWQ9XCJuZXdwcm9qZWN0LS1mb3JtX25hbWVcIjtcbiAgICBuZXdQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChuZXdQcm9qZWN0Rm9ybU5hbWUpO1xuICAgIGNvbnN0IG5ld1Byb2plY3RGb3JtQ29sb3I9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdQcm9qZWN0Rm9ybUNvbG9yLmlkPVwibmV3cHJvamVjdC0tZm9ybV9jb2xvclwiO1xuICAgIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKG5ld1Byb2plY3RGb3JtQ29sb3IpO1xuICAgIFxuICAgIGNvbnN0IHByb2plY3ROYW1lTGFiZWw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIE9iamVjdC5hc3NpZ24ocHJvamVjdE5hbWVMYWJlbCx7XG4gICAgICAgIGZvcjogXCJwcm9qZWN0X25hbWVcIixcbiAgICAgICAgdGV4dENvbnRlbnQ6IFwiTmFtZVwiXG4gICAgfSk7XG4gICAgbmV3UHJvamVjdEZvcm1OYW1lLmFwcGVuZENoaWxkKHByb2plY3ROYW1lTGFiZWwpO1xuXG4gICAgY29uc3QgcHJvamVjdE5hbWVJbnB1dD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgT2JqZWN0LmFzc2lnbihwcm9qZWN0TmFtZUlucHV0LHtcbiAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgIG5hbWU6IFwicHJvamVjdF9uYW1lXCIsXG4gICAgICAgIGlkOiBcInByb2plY3RfbmFtZVwiXG4gICAgfSk7XG4gICAgbmV3UHJvamVjdEZvcm1OYW1lLmFwcGVuZENoaWxkKHByb2plY3ROYW1lSW5wdXQpO1xuXG4gICAgY29uc3QgcHJvamVjdENvbG9yTGFiZWw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIE9iamVjdC5hc3NpZ24ocHJvamVjdENvbG9yTGFiZWwse1xuICAgICAgICBmb3I6IFwicHJvamVjdF9jb2xvclwiLFxuICAgICAgICB0ZXh0Q29udGVudDogXCJDb2xvclwiXG4gICAgfSk7XG4gICAgbmV3UHJvamVjdEZvcm1Db2xvci5hcHBlbmRDaGlsZChwcm9qZWN0Q29sb3JMYWJlbCk7XG5cbiAgICBjb25zdCBwcm9qZWN0Q29sb3JJbnB1dD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgT2JqZWN0LmFzc2lnbihwcm9qZWN0Q29sb3JJbnB1dCx7XG4gICAgICAgIHR5cGU6IFwiY29sb3JcIixcbiAgICAgICAgbmFtZTogXCJwcm9qZWN0X2NvbG9yXCIsXG4gICAgICAgIGlkOiBcInByb2plY3RfY29sb3JcIlxuICAgIH0pO1xuICAgIG5ld1Byb2plY3RGb3JtQ29sb3IuYXBwZW5kQ2hpbGQocHJvamVjdENvbG9ySW5wdXQpO1xuXG4gICAgY29uc3QgbmV3UHJvamVjdEZvcm1TdWJtaXQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdQcm9qZWN0Rm9ybVN1Ym1pdC5pZD1cIm5ld3Byb2plY3QtLWZvcm1fc3VibWl0XCI7XG4gICAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQobmV3UHJvamVjdEZvcm1TdWJtaXQpO1xuXG4gICAgY29uc3QgbmV3UHJvamVjdEZvcm1TdWJtaXRBZGQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdQcm9qZWN0Rm9ybVN1Ym1pdEFkZC5pZD1cIm5ld3Byb2plY3QtLWZvcm1fc3VibWl0X2FkZFwiO1xuICAgIG5ld1Byb2plY3RGb3JtU3VibWl0QWRkLnRleHRDb250ZW50PVwiQWRkXCI7XG4gICAgbmV3UHJvamVjdEZvcm1TdWJtaXQuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEZvcm1TdWJtaXRBZGQpO1xuICAgIGNvbnN0IG5ld1Byb2plY3RGb3JtU3VibWl0Q2FuY2VsPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3UHJvamVjdEZvcm1TdWJtaXRDYW5jZWwuaWQ9XCJuZXdwcm9qZWN0LS1mb3JtX3N1Ym1pdF9jYW5jZWxcIjtcbiAgICBuZXdQcm9qZWN0Rm9ybVN1Ym1pdENhbmNlbC50ZXh0Q29udGVudD1cIkNhbmNlbFwiO1xuICAgIG5ld1Byb2plY3RGb3JtU3VibWl0LmFwcGVuZENoaWxkKG5ld1Byb2plY3RGb3JtU3VibWl0Q2FuY2VsKTtcbiAgICByZXR1cm4gbmV3UHJvamVjdDtcbn1cbmV4cG9ydCBkZWZhdWx0IGJ1aWxkRE9NOyIsImltcG9ydCB7YWRkUHJvamVjdCAsY2FuY2VsQWRkUHJvamVjdH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuZnVuY3Rpb24gY3JlYXRlRXZlbnRzKCl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LS1hZGRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcbiAgICAgICAgYWRkUHJvamVjdCgpO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3cHJvamVjdC0tZm9ybV9zdWJtaXRfY2FuY2VsXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XG4gICAgICAgIGNhbmNlbEFkZFByb2plY3QoKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUV2ZW50czsiLCJmdW5jdGlvbiBhZGRQcm9qZWN0KCl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXdwcm9qZWN0X2hpZGRlblwiKS5pZD1cIm5ld3Byb2plY3RcIjtcbn1cbmZ1bmN0aW9uIGNhbmNlbEFkZFByb2plY3QoKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ld3Byb2plY3RcIikuaWQ9XCJuZXdwcm9qZWN0X2hpZGRlblwiO1xufVxuZXhwb3J0IHthZGRQcm9qZWN0ICxjYW5jZWxBZGRQcm9qZWN0fTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgYnVpbGRET00gZnJvbSBcIi4vRE9Nc2NyaXB0c1wiO1xuaW1wb3J0IGNyZWF0ZUV2ZW50cyBmcm9tIFwiLi9ldmVudHNTY3JpcHRzXCI7XG5idWlsZERPTSgpO1xuY3JlYXRlRXZlbnRzKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9