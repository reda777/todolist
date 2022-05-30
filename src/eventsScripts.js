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
    document.querySelector(".task--add").addEventListener("click", () => {
        task.showAddTask();
    });
    document.querySelector("#task--new_submit_add").addEventListener("click", () => {
        task.addTask(document.querySelector("#task_name").value,document.querySelector("#task_project").value);
    });
    document.querySelector("#task--new_submit_cancel").addEventListener("click", () => {
        task.cancelAddTask();
    });
}
export {createEvents,createdProjectEvents};