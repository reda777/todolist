import * as project from "./project";
import * as task from "./task";
import * as dom from "./DOMscripts";
function createEvents() {
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
        element.addEventListener("mouseenter",()=>{
            element.querySelector(".project--edit_hidden").classList.replace("project--edit_hidden","project--edit");
        });
        element.addEventListener("mouseleave",()=>{
            element.querySelector(".project--edit").classList.replace("project--edit","project--edit_hidden");
        });
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