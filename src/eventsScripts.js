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
        p.hideProjectEditMenu();
    }
    let showAddTevent = function () {
        t.showAddTask();
    }
    let cancelAddTevent = function () {
        t.cancelAddTask();
    }
    let addTevent = function () {
        t.addTask(document.querySelector("#task_name").value, document.querySelector("#task_project div").className,
        document.querySelector("#task--date div").dataset.date);
    }
    let showTPSelectEvent = function () {
        t.showTaskProjectSelect();
    }
    let hideTPSelectEvent = function () {
        t.hideTaskProjectSelect();
    }
    let showTDateSelectEvent = function () {
        t.showTaskDateSelect();
    }
    let hideTDateSelectEvent = function(){
        t.hideTaskDateSelect();
    }
    let selectedDateEvent= function(){
        t.taskDateSelectedOption(this);
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

    document.querySelector("#task--date").addEventListener("click", showTDateSelectEvent);

    document.querySelector(".task--menuouter_hidden").addEventListener("click", hideTPSelectEvent);

    document.querySelector(".task--datemenuouter_hidden").addEventListener("click", hideTDateSelectEvent);

    document.querySelector(".datemenu--today").addEventListener("click",selectedDateEvent);
    
    document.querySelector(".datemenu--tomorrow").addEventListener("click",selectedDateEvent);
}
export { createEvents };