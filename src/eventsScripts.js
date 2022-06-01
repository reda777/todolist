import * as p from "./project";
import * as t from "./task";
import * as dom from "./DOMscripts";
function createdProjectEvents(project){
    project.addEventListener("mouseenter",() => {
        p.showProjectEditIcon(project);
    });
    project.addEventListener("mouseleave",() => {
        p.hideProjectEditIcon(project);
    });
    const icon=project.querySelector(".project--edit_icon");
    icon.addEventListener("click",() => {
        p.showProjectEditMenu(icon);
    });
}
function createdTaskListEvents(project){
    project.addEventListener("click",()=>{
        const taskProject=document.querySelector("#task_project");
        if(taskProject.firstChild){
            taskProject.removeChild(taskProject.firstChild);
        }
        const child=document.createElement("div");
        child.className=project.className;
        taskProject.appendChild(child);
        child.textContent=`${project.textContent}`;
    });
}
function createEvents() {
    //add a project events
    document.querySelector(".project--add").addEventListener("click", () => {
        p.showAddProject();
    });
    document.querySelector("#newproject--form_submit_add").addEventListener("click", () => {
        p.addProject(document.querySelector("#newproject--form_name input").value,
                            document.querySelector("#newproject--form_color input").value);
    });
    document.querySelector("#newproject--form_submit_cancel").addEventListener("click", () => {
        p.cancelAddProject();
    });

    //project ui
    document.querySelector(".sidebar--header_btn").addEventListener("click", () => {
        p.toggleProjectList();
    });
    //delete project 
    document.querySelector(".project--menu_delete").addEventListener("click",()=>{
        p.deleteProject();
    });
    //project menu
    document.querySelector(".project--menuouter_hidden").addEventListener("click",()=>{
        document.querySelectorAll(".project").forEach(element => {
             p.hideProjectEditIcon(element);
        });
        p.hideProjectEditMenu();
    });
    //add task events
    document.querySelector(".task--add").addEventListener("click", t.showAddTask );
    document.querySelector("#task--new_submit_cancel").addEventListener("click", t.cancelAddTask);
    document.querySelector("#task--new_submit_add").addEventListener("click", () => {
        t.addTask(document.querySelector("#task_name").value,document.querySelector("#task_project div").className);
    });
    document.querySelector("#task_project").addEventListener("click",t.showTaskProjectSelect);
    document.querySelector(".task--menuouter_hidden").addEventListener("click",()=>{
        document.querySelector(".task--menuouter_hidden").classList.remove("task--menuouter");
    });
}
export {createdTaskListEvents,createEvents,createdProjectEvents};