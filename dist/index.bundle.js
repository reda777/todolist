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
    content.append(header(),sidebar(),main(),footer());
    document.body.appendChild(content);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildDOM);

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


(0,_DOMscripts__WEBPACK_IMPORTED_MODULE_1__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFFBQVE7Ozs7OztVQzlJdkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFDZTtBQUNwQyx1REFBUSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzP2UzMjAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvRE9Nc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImZ1bmN0aW9uIGhlYWRlcigpe1xuICAgIGNvbnN0IGRpdj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5pZD1cImhlYWRlclwiO1xuICAgIGRpdi50ZXh0Q29udGVudD1cIlRvZG8gTGlzdFwiO1xuICAgIHJldHVybiBkaXY7XG59XG5mdW5jdGlvbiBzaWRlYmFyKCl7XG4gICAgY29uc3Qgc2lkZWJhcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNpZGViYXIuaWQ9XCJzaWRlYmFyXCI7XG5cbiAgICBjb25zdCBzaWRlYmFyR3JvdXA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzaWRlYmFyR3JvdXAuaWQ9XCJzaWRlYmFyLS1ncm91cFwiO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoc2lkZWJhckdyb3VwKTtcbiAgICBzaWRlYmFyR3JvdXAuYXBwZW5kQ2hpbGQoc2lkZWJhckhlYWRlcihcIk15IExpc3RcIikpO1xuICAgIHNpZGViYXJHcm91cC5hcHBlbmRDaGlsZChzaWRlYmFySGVhZGVyKFwiVG9kYXlcIikpO1xuICAgIHNpZGViYXJHcm91cC5hcHBlbmRDaGlsZChzaWRlYmFySGVhZGVyKFwiTmV4dCA3IERheXNcIikpO1xuXG4gICAgY29uc3Qgc2lkZWJhckhlYWRQcm9qZWN0PXNpZGViYXJIZWFkZXIoXCJQcm9qZWN0c1wiKTtcbiAgICBjb25zdCBzaWRlYmFySGVhZEJ0bj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNpZGViYXJIZWFkQnRuLmNsYXNzTmFtZT1cInNpZGViYXItLWhlYWRlcl9idG5cIjtcblxuICAgIGNvbnN0IHNpZGViYXJIZWFkQnRuSWNvbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBzaWRlYmFySGVhZEJ0bkljb24uY2xhc3NOYW1lPVwic2lkZWJhci0taGVhZGVyX2J0bl9pY29uX3VwXCI7XG4gICAgc2lkZWJhckhlYWRCdG4uYXBwZW5kQ2hpbGQoc2lkZWJhckhlYWRCdG5JY29uKTtcbiAgICBzaWRlYmFySGVhZFByb2plY3QuYXBwZW5kQ2hpbGQoc2lkZWJhckhlYWRCdG4pO1xuICAgIHNpZGViYXJHcm91cC5hcHBlbmRDaGlsZChzaWRlYmFySGVhZFByb2plY3QpO1xuXG4gICAgY29uc3Qgc2lkZWJhckxpc3Q9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzaWRlYmFyTGlzdC5pZD1cInNpZGViYXItLWxpc3RcIjtcbiAgICBzaWRlYmFyR3JvdXAuYXBwZW5kQ2hpbGQoc2lkZWJhckxpc3QpO1xuXG4gICAgY29uc3QgcHJvamVjdEFkZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RBZGQuY2xhc3NOYW1lPVwicHJvamVjdC0tYWRkXCI7XG4gICAgc2lkZWJhckxpc3QuYXBwZW5kQ2hpbGQocHJvamVjdEFkZCk7XG5cbiAgICBjb25zdCBwcm9qZWN0QWRkQnRuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdEFkZEJ0bi5jbGFzc05hbWU9XCJwcm9qZWN0LS1hZGRfYnRuXCI7XG4gICAgcHJvamVjdEFkZC5hcHBlbmRDaGlsZChwcm9qZWN0QWRkQnRuKTtcblxuICAgIGNvbnN0IHByb2plY3RBZGRCdG5JY29uPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHByb2plY3RBZGRCdG5JY29uLmNsYXNzTmFtZT1cInByb2plY3QtLWFkZF9idG5faWNvblwiO1xuICAgIHByb2plY3RBZGRCdG4uYXBwZW5kQ2hpbGQocHJvamVjdEFkZEJ0bkljb24pO1xuICAgIFxuICAgIGNvbnN0IHByb2plY3RBZGROYW1lPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdEFkZE5hbWUuY2xhc3NOYW1lPVwicHJvamVjdC0tYWRkX25hbWVcIjtcbiAgICBwcm9qZWN0QWRkTmFtZS50ZXh0Q29udGVudD1cIkFkZCBQcm9qZWN0XCI7XG4gICAgcHJvamVjdEFkZC5hcHBlbmRDaGlsZChwcm9qZWN0QWRkTmFtZSk7XG4gICAgc2lkZWJhckxpc3QucHJlcGVuZChzaWRlYmFyUHJvamVjdChcIk5hbWUxXCIpKTtcbiAgICByZXR1cm4gc2lkZWJhcjtcbn1cbmZ1bmN0aW9uIHNpZGViYXJIZWFkZXIodENvbnRlbnQpe1xuICAgIGNvbnN0IGRpdj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5jbGFzc05hbWU9XCJzaWRlYmFyLS1oZWFkZXJcIjtcbiAgICBjb25zdCBkaXZDaGlsZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdkNoaWxkLmNsYXNzTmFtZT1cInNpZGViYXItLWhlYWRlcl90aXRsZVwiO1xuICAgIGRpdkNoaWxkLnRleHRDb250ZW50PXRDb250ZW50O1xuICAgIGRpdi5hcHBlbmRDaGlsZChkaXZDaGlsZCk7XG4gICAgcmV0dXJuIGRpdjtcbn1cbmZ1bmN0aW9uIHNpZGViYXJQcm9qZWN0KHRDb250ZW50KXtcbiAgICBjb25zdCBwcm9qZWN0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdC5jbGFzc05hbWU9XCJwcm9qZWN0XCI7XG4gICAgY29uc3QgcHJvamVjdE5hbWU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0TmFtZS5jbGFzc05hbWU9XCJwcm9qZWN0LS1uYW1lXCI7XG4gICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQ9dENvbnRlbnQ7XG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG4gICAgY29uc3QgcHJvamVjdENvdW50PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdENvdW50LmNsYXNzTmFtZT1cInByb2plY3QtLWNvdW50XCI7XG4gICAgcHJvamVjdENvdW50LnRleHRDb250ZW50PVwiMlwiO1xuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdENvdW50KTtcbiAgICByZXR1cm4gcHJvamVjdDtcbn1cbmZ1bmN0aW9uIG1haW4oKXtcbiAgICBjb25zdCBtYWluPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbi5pZD1cIm1haW5cIjtcblxuICAgIGNvbnN0IG1haW5Hcm91cD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5Hcm91cC5pZD1cIm1haW4tLWdyb3VwXCI7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChtYWluR3JvdXApO1xuXG4gICAgY29uc3QgbWFpbkhlYWRlcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5IZWFkZXIuY2xhc3NOYW1lPVwibWFpbi0taGVhZGVyXCI7XG4gICAgY29uc3QgbWFpbkhlYWRlclRpdGxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbkhlYWRlclRpdGxlLmNsYXNzTmFtZT1cIm1haW4tLWhlYWRlcl90aXRsZVwiO1xuICAgIG1haW5IZWFkZXJUaXRsZS50ZXh0Q29udGVudD1cIlRvZGF5XCI7XG4gICAgbWFpbkhlYWRlci5hcHBlbmRDaGlsZChtYWluSGVhZGVyVGl0bGUpO1xuICAgIG1haW5Hcm91cC5hcHBlbmRDaGlsZChtYWluSGVhZGVyKTtcblxuICAgIGNvbnN0IG1haW5MaXN0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbkxpc3QuaWQ9XCJtYWluLS1saXN0XCI7XG4gICAgbWFpbkdyb3VwLmFwcGVuZENoaWxkKG1haW5MaXN0KTtcblxuICAgIGNvbnN0IHRhc2tBZGQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrQWRkLmNsYXNzTmFtZT1cInRhc2stLWFkZFwiO1xuICAgIG1haW5MaXN0LmFwcGVuZENoaWxkKHRhc2tBZGQpO1xuXG4gICAgY29uc3QgdGFza0FkZEJ0bj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tBZGRCdG4uY2xhc3NOYW1lPVwidGFzay0tYWRkX2J0blwiO1xuICAgIHRhc2tBZGQuYXBwZW5kQ2hpbGQodGFza0FkZEJ0bik7XG5cbiAgICBjb25zdCB0YXNrQWRkQnRuSWNvbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICB0YXNrQWRkQnRuSWNvbi5jbGFzc05hbWU9XCJ0YXNrLS1hZGRfYnRuX2ljb25cIjtcbiAgICB0YXNrQWRkQnRuLmFwcGVuZENoaWxkKHRhc2tBZGRCdG5JY29uKTtcbiAgICBcbiAgICBjb25zdCB0YXNrQWRkTmFtZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tBZGROYW1lLmNsYXNzTmFtZT1cInRhc2stLWFkZF9uYW1lXCI7XG4gICAgdGFza0FkZE5hbWUudGV4dENvbnRlbnQ9XCJBZGQgVGFza1wiO1xuICAgIHRhc2tBZGQuYXBwZW5kQ2hpbGQodGFza0FkZE5hbWUpO1xuXG4gICAgbWFpbkxpc3QucHJlcGVuZChtYWluTGlzdFRhc2soXCJOYW1lMVwiKSk7XG4gICAgcmV0dXJuIG1haW47XG59XG5mdW5jdGlvbiBtYWluTGlzdFRhc2sodENvbnRlbnQpe1xuICAgIGNvbnN0IHRhc2s9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrLmNsYXNzTmFtZT1cInRhc2tcIjtcblxuICAgIGNvbnN0IHRhc2tCdG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrQnRuLmNsYXNzTmFtZT1cInRhc2stLWJ0blwiO1xuICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza0J0bik7XG5cbiAgICBjb25zdCB0YXNrQnRuSWNvbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICB0YXNrQnRuSWNvbi5jbGFzc05hbWU9XCJ0YXNrLS1idG5faWNvblwiO1xuICAgIHRhc2tCdG4uYXBwZW5kQ2hpbGQodGFza0J0bkljb24pO1xuXG4gICAgY29uc3QgdGFza05hbWU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrTmFtZS5jbGFzc05hbWU9XCJ0YXNrLS1uYW1lXCI7XG4gICAgdGFza05hbWUudGV4dENvbnRlbnQ9dENvbnRlbnQ7XG4gICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XG4gICAgcmV0dXJuIHRhc2s7XG59XG5mdW5jdGlvbiBmb290ZXIoKXtcbiAgICBjb25zdCBkaXY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuaWQ9XCJmb290ZXJcIjtcbiAgICBkaXYudGV4dENvbnRlbnQ9XCJDb3B5cmlnaHQgwqkgMjAyMiBSZWRhXCI7XG4gICAgcmV0dXJuIGRpdjtcbn1cbmZ1bmN0aW9uIGJ1aWxkRE9NKCl7XG4gICAgY29uc3QgY29udGVudD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRlbnQuaWQ9XCJjb250ZW50XCI7XG4gICAgY29udGVudC5hcHBlbmQoaGVhZGVyKCksc2lkZWJhcigpLG1haW4oKSxmb290ZXIoKSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcbn1cbmV4cG9ydCBkZWZhdWx0IGJ1aWxkRE9NOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgYnVpbGRET00gZnJvbSBcIi4vRE9Nc2NyaXB0c1wiO1xuYnVpbGRET00oKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=