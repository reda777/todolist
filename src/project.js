import { mainGroup, sidebarProject } from "./DOMscripts.js";
import * as t from "./task";
import { format, addDays, addMonths, parse, compareAsc, eachDayOfInterval, lastDayOfMonth, getWeekOfMonth, getDay } from 'date-fns';
import { createMainEvents } from './eventsScripts';
const project = (name, color) => {
    let id = Date.now().toString(36) + Math.random().toString(36).slice(2);
    let count = 0;
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
function addProject(nameValue, colorValue) {
    let currentProject = project(nameValue, colorValue);
    let obj = JSON.parse(localStorage.getItem("todoList"));
    obj.project.push(currentProject);
    localStorage.setItem("todoList", JSON.stringify(obj));
    document.querySelector("#newproject").id = "newproject_hidden";
    populateProjectList();
    populateProjectSelect();
}
function populateProjectList() {
    let projectList = document.querySelectorAll("#sidebar--list .project");
    //delete old list
    projectList.forEach(element => {
        element.parentNode.removeChild(element);
    });
    //add new list
    let obj = JSON.parse(localStorage.getItem("todoList"));
    for (let i = 0; i < obj.project.length; i++) {
        let idValue = obj.project[i].id;
        let nameValue = obj.project[i].name;
        let colorValue = obj.project[i].color;
        let countValue = obj.project[i].count;
        const sideBarProject = sidebarProject(idValue, nameValue, colorValue, countValue);
        document.querySelector(".project--add").before(sideBarProject);
        createdProjectEvents(sideBarProject);
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
        pOption.dataset.id = projectsArray[i].id;
        const optionText = document.createElement("span");
        optionText.className = "optionText";
        const optionTextInside = document.createElement("span");
        optionTextInside.textContent = projectsArray[i].name;


        const optionColor = document.createElement("span");
        optionColor.className = "optionColor";
        optionColor.style.backgroundColor = projectsArray[i].color;
        selectElement.appendChild(pOption);
        pOption.appendChild(optionColor);
        optionText.appendChild(optionTextInside);
        pOption.appendChild(optionText);
        createEventInProjectList(pOption);
    }
}
function createEventInProjectList(pOption) {
    let optionEvent = function () {
        t.taskProjectSelectedOption(pOption);
    }
    pOption.addEventListener("click", optionEvent);
}
function cancelAddProject() {
    document.querySelector("#newproject").id = "newproject_hidden";
}
function showProjectEditMenu(element) {
    const iconClicked = element.querySelector(".project--edit_hidden");
    let elementPos = iconClicked.getBoundingClientRect();
    let bodyPos = document.body.getBoundingClientRect();
    document.querySelector(".project--menuouter_hidden").classList.add("project--menuouter");
    document.querySelector("#editproject--form_submit_save").dataset.id = `${element.id}`;
    document.querySelector(".project--menu_delete").dataset.id = `${element.id}`;
    document.querySelector(".project--menu").style.left = `${elementPos.left + 2 - bodyPos.left}px`;
    document.querySelector(".project--menu").style.top = `${elementPos.bottom + 2 - bodyPos.top}px`;
}
function hideProjectEditMenu() {
    const deleteElement = document.querySelector(".project--menu_delete");
    const projectElement = document.getElementById(`${deleteElement.dataset.id}`);
    document.querySelector(".project--menuouter_hidden").classList.remove("project--menuouter");
    deleteElement.removeAttribute("data-id");
    hideProjectEditIcon(projectElement);
}

function showProjectEditIcon(element) {
    element.querySelector(".project--edit_hidden").classList.add("project--edit");
}
function hideProjectEditIcon(element) {
    //see if menu is open if its not hide icon
    if (document.querySelector(".project--menuouter") === null && element !== null) {
        element.querySelector(".project--edit_hidden").classList.remove("project--edit");
    }
}
function deleteProject() {
    let id = document.querySelector(".project--menu_delete").dataset.id;
    let obj = JSON.parse(localStorage.getItem("todoList"));
    let objP = JSON.parse(localStorage.getItem("preferences"));
    if (objP["lastProject"] == id) {
        objP["lastProject"] = "id1";
    }
    let newProject = obj.project.filter((element, index) => {
        return element.id != id;
    });
    obj.project = newProject;
    localStorage.setItem("todoList", JSON.stringify(obj));
    localStorage.setItem("preferences", JSON.stringify(objP));
    t.deleteTasksOfProject(id);
    populateProjectList();
    populateProjectSelect();
}
function toggleProjectList() {
    const selectOne = document.querySelector("#sidebar--list");
    const selectTwo = document.querySelector("#sidebar--list_hidden");
    let obj = JSON.parse(localStorage.getItem("preferences"));
    if (selectOne) {
        obj["sidebar"]["listState"] = false;
        selectOne.id = "sidebar--list_hidden";
        document.querySelector(".sidebar--header_btn_icon_down").classList.replace("sidebar--header_btn_icon_down", "sidebar--header_btn_icon_up");
    } else if (selectTwo) {
        obj["sidebar"]["listState"] = true;
        selectTwo.id = "sidebar--list";
        document.querySelector(".sidebar--header_btn_icon_up").classList.replace("sidebar--header_btn_icon_up", "sidebar--header_btn_icon_down");
    }
    localStorage.setItem("preferences", JSON.stringify(obj));
}
function selectColor(e) {
    const selectedColor = document.querySelector(".list--color_selected");
    if (e.target.className == "list--color") {
        if (selectedColor) {
            selectedColor.classList.remove("list--color_selected");
            selectedColor.firstChild.classList.remove("list--color_check_selected");
        }
        e.target.classList.add("list--color_selected")
        e.target.firstChild.classList.add("list--color_check_selected");
    }
}
function addProjectButton() {
    const nameValue = document.querySelector("#newproject--form_name input").value;
    const colorValue = document.querySelector(".list--color_selected").dataset.bgColor;
    addProject(nameValue, colorValue);
}
function editProject() {
    document.querySelector("#editproject_hidden").id = "editproject";
}
function saveEditProject() {
    const nameValue = document.querySelector("#editproject--form_name input").value;
    const colorValue = document.querySelector("#editproject--form_color .list--color_selected").dataset.bgColor;
    let id = document.querySelector("#editproject--form_submit_save").dataset.id;
    let obj = JSON.parse(localStorage.getItem("todoList"));
    for (let i = 1; i < obj.project.length; i++) {
        if (id == obj.project[i].id) {
            obj.project[i].name = nameValue;
            obj.project[i].color = colorValue;
        }
    }
    localStorage.setItem("todoList", JSON.stringify(obj));
    populateProjectList();
    document.querySelector("#editproject--form_submit_save").removeAttribute("data-id");
    document.querySelector("#editproject").id = "editproject_hidden";
    populateProjectSelect();
    t.populateCurrentTab();
}
function cancelEditProject() {
    document.querySelector("#editproject").id = "editproject_hidden";
    document.querySelector("#editproject--form_submit_save").removeAttribute("data-id");
}
function createdProjectEvents(p) {
    let showIconEvent = function () {
        showProjectEditIcon(p);
    }
    let showMenuEvent = function () {
        showProjectEditMenu(p);
    }
    let hideIconEvent = function () {
        hideProjectEditIcon(p);
    }
    let showPDates = function (e) {
        t.showProjectDates(p, e);
    }
    if (p.id != "id1") {//remove menu for default project
        p.addEventListener("mouseenter", showIconEvent);

        p.addEventListener("mouseleave", hideIconEvent);
    }

    p.querySelector(".project--edit_hidden").addEventListener("click", showMenuEvent);

    p.addEventListener("click", showPDates);
}
export { populateProjectSelect, cancelEditProject, saveEditProject, editProject, addProjectButton, selectColor, deleteProject, hideProjectEditIcon, showProjectEditIcon, hideProjectEditMenu, showProjectEditMenu, project, showAddProject, addProject, cancelAddProject, toggleProjectList, populateProjectList };
