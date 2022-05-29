import * as project from "./project";
import * as task from "./task";
import * as dom from "./DOMscripts";
function createEvents() {
    let clicked;
    //add project events
    document.querySelector(".project--add").addEventListener("click", () => {
        project.showAddProject();
    });
    document.querySelector("#newproject--form_submit_add").addEventListener("click", () => {
        project.addProject(document.querySelector("#newproject--form_name input").value,
                            document.querySelector("#newproject--form_color input").value);
    });
    document.querySelector("#newproject--form_submit_cancel").addEventListener("click", () => {
        project.cancelAddProject();
    });

    //project ui
    document.querySelector(".sidebar--header_btn").addEventListener("click", () => {
        project.toggleProjectList();
    });
    document.querySelectorAll(".project").forEach(element => {
        element.addEventListener("mouseenter",() => {
            project.showProjectEditIcon(element);
        });
        element.addEventListener("mouseleave",() => {
            if(!clicked)
                project.hideProjectEditIcon(element);
        });
    });
    //project menu
    document.querySelectorAll(".project--edit_icon").forEach(element =>{
        element.addEventListener("click",() => {
            clicked=true;
            project.showProjectEditMenu(element);
        });
        document.querySelector(".project--menu_delete").addEventListener("click",()=>{
            project.deleteProject(element);
        });
    });
    document.querySelector(".project--menuouter_hidden").addEventListener("click",()=>{
        clicked=false;
        document.querySelectorAll(".project").forEach(element => {
             project.hideProjectEditIcon(element);
        });
        project.hideProjectEditMenu();
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
export default createEvents;