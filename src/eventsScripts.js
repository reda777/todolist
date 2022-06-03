import * as p from "./project";
import * as t from "./task";
import * as dom from "./DOMscripts";

function createEvents() {
    let showAddPevent = function () {
        p.showAddProject();
    }
    let addPevent = function () {
        p.addProject(document.querySelector("#newproject--form_name input").value,
            document.querySelector("#newproject--form_color input").value);
    }
    let cancelAddPevent = function () {
        p.cancelAddProject();
    }
    let toggleShowPList = function () {
        p.toggleProjectList();
    }
    let deletePevent = function () {
        p.deleteProject();
    }
    let hideMenuEvent = function () {
        document.querySelectorAll(".project").forEach(element => {
            p.hideProjectEditIcon(element);
        });
        p.hideProjectEditMenu();
    }
    let showAddTevent = function () {
        t.showAddTask();
    }
    let cancelAddTevent = function () {
        t.cancelAddTask();
    }
    let addTevent = function () {
        t.addTask(document.querySelector("#task_name").value, document.querySelector("#task_project div").className);
    }
    let showTPSelectEvent = function () {
        t.showTaskProjectSelect();
    }
    let hideTPSelectEvent = function () {
        t.hideTaskProjectSelect();
    }
    //add a project events
    document.querySelector(".project--add").addEventListener("click", showAddPevent);

    document.querySelector("#newproject--form_submit_add").addEventListener("click", addPevent);

    document.querySelector("#newproject--form_submit_cancel").addEventListener("click", cancelAddPevent);

    //project ui
    document.querySelector(".sidebar--header_btn").addEventListener("click", toggleShowPList);
    //delete project 
    document.querySelector(".project--menu_delete").addEventListener("click", deletePevent);
    //project menu
    document.querySelector(".project--menuouter_hidden").addEventListener("click", hideMenuEvent);
    //add task events
    document.querySelector(".task--add").addEventListener("click", showAddTevent);

    document.querySelector("#task--new_submit_cancel").addEventListener("click", cancelAddTevent);

    document.querySelector("#task--new_submit_add").addEventListener("click", addTevent);

    document.querySelector("#task_project").addEventListener("click", showTPSelectEvent);

    document.querySelector(".task--menuouter_hidden").addEventListener("click", hideTPSelectEvent);
}
export { createEvents };