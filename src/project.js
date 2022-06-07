import { sidebarProject } from "./DOMscripts.js";
import * as t from "./task";
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
    populateProjectList();
    document.querySelector("#newproject").id = "newproject_hidden";
    t.populateProjectSelect();
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
function cancelAddProject() {
    document.querySelector("#newproject").id = "newproject_hidden";
}
function showProjectEditMenu(element) {
    const iconClicked = element.querySelector(".project--edit_hidden");
    let elementPos = iconClicked.getBoundingClientRect();
    let bodyPos = document.body.getBoundingClientRect();
    document.querySelector(".project--menuouter_hidden").classList.add("project--menuouter");
    document.querySelector(".project--menu_delete").dataset.id = `${element.id}`;
    document.querySelector(".project--menu").style.left = `${elementPos.left + 2 - bodyPos.left}px`;
    document.querySelector(".project--menu").style.top = `${elementPos.bottom + 2 - bodyPos.top}px`;
}
function hideProjectEditMenu() {
    const deleteElement=document.querySelector(".project--menu_delete");
    const projectElement=document.getElementById(`${deleteElement.dataset.id}`);
    document.querySelector(".project--menuouter_hidden").classList.remove("project--menuouter");
    deleteElement.removeAttribute("data-id");
    hideProjectEditIcon(projectElement);
}

function showProjectEditIcon(element) {
    element.querySelector(".project--edit_hidden").classList.add("project--edit");
}
function hideProjectEditIcon(element) {
    //see if menu is open if its not hide icon
    if(document.querySelector(".project--menuouter") === null && element !== null){
        element.querySelector(".project--edit_hidden").classList.remove("project--edit");
    }
}
function deleteProject() {
    let id = document.querySelector(".project--menu_delete").dataset.id;
    let obj = JSON.parse(localStorage.getItem("todoList"));
    let newProject = obj.project.filter((element, index) => {
        return element.id != id;
    });
    obj.project = newProject;
    localStorage.setItem("todoList", JSON.stringify(obj));
    t.deleteTasks(id);
    populateProjectList();
    t.populateProjectSelect();
}
function toggleProjectList() {
    const selectOne = document.querySelector("#sidebar--list");
    const selectTwo = document.querySelector("#sidebar--list_hidden");
    let obj = JSON.parse(localStorage.getItem("preferences"));
    if (selectOne) {
        obj["sidebar"]["listState"]=false;
        selectOne.id = "sidebar--list_hidden";
        document.querySelector(".sidebar--header_btn_icon_down").classList.replace("sidebar--header_btn_icon_down", "sidebar--header_btn_icon_up");
    } else if (selectTwo) {
        obj["sidebar"]["listState"]=true;
        selectTwo.id = "sidebar--list";
        document.querySelector(".sidebar--header_btn_icon_up").classList.replace("sidebar--header_btn_icon_up", "sidebar--header_btn_icon_down");
    }
    localStorage.setItem("preferences", JSON.stringify(obj));
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
    p.addEventListener("mouseenter", showIconEvent);

    p.addEventListener("mouseleave", hideIconEvent);

    p.querySelector(".project--edit_hidden").addEventListener("click", showMenuEvent);
}
export { deleteProject, hideProjectEditIcon, showProjectEditIcon, hideProjectEditMenu, showProjectEditMenu, project, showAddProject, addProject, cancelAddProject, toggleProjectList, populateProjectList };
