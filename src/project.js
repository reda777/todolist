import { sidebarProject } from "./DOMscripts.js";
import * as t from "./task";
import { createdProjectEvents } from "./eventsScripts.js";
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
    t.populateProjectSelect();
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
        const project=sidebarProject(idValue,nameValue,colorValue,countValue);
        document.querySelector(".project--add").before(project);
        createdProjectEvents(project);
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
    t.deleteTasks(id);
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
export {deleteProject,hideProjectEditIcon,showProjectEditIcon,hideProjectEditMenu,showProjectEditMenu, project, showAddProject, addProject, cancelAddProject, toggleProjectList, populateProjectList };
