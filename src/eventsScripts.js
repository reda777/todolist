import * as p from "./project";
import * as t from "./task";
function createMainEvents() {
    let timeoutID;
    let showAddTevent = function () {
        //+ add task
        t.showAddTask();
    }
    let showTPSelectEvent = function () {
        t.showTaskProjectSelect();
    }
    let showTDateSelectEvent = function () {
        t.showTaskDateSelect();
    }
    let showTPrioSelectEvent=function(){
        t.showPrioSelect();
    }
    let cancelAddTevent = function () {
        t.cancelAddTask();
    }
    let addTevent = function () {
        timeoutID = t.addTaskButton();
    }
    let selectedCalDate = function (e) {
        t.taskCalDateSelected(e);
    }
    let resizeTextArea = function () {
        t.taskResizeTextArea(this);
    }
    let closeMessage = function () {
        document.querySelector(".message--container_hidden").classList.remove("message--container");
    }
    let keepMessage = function () {
        t.closeMessageTab(false, timeoutID);
    }
    document.querySelector(".task--add").addEventListener("click", showAddTevent);

    document.querySelector("#task_project").addEventListener("click", showTPSelectEvent);

    document.querySelector("#task--date").addEventListener("click", showTDateSelectEvent);

    document.querySelector("#task_prio").addEventListener("click", showTPrioSelectEvent);

    document.querySelector("#task--new_submit_cancel").addEventListener("click", cancelAddTevent);

    document.querySelector("#task--new_submit_add").addEventListener("click", addTevent);
    //calendar
    document.querySelector(".months--days").addEventListener("click", selectedCalDate);
    //textarea
    document.querySelector("#task_name").addEventListener("input", resizeTextArea);
    //close floating message
    document.querySelector(".message--close").addEventListener("click", closeMessage);
    document.querySelector(".message--container_hidden").addEventListener("mouseenter", keepMessage);
    document.querySelector(".message--container_hidden").addEventListener("mouseleave", closeMessage);
}
function createEvents() {
    createMainEvents();
    let showAddPevent = function () {
        p.showAddProject();
    }
    let addPevent = function () {
        p.addProjectButton();
    }
    let cancelAddPevent = function () {
        p.cancelAddProject();
    }
    let toggleShowPList = function () {
        p.toggleProjectList();
    }
    let editPevent = function () {
        p.editProject();
    }
    let savePevent = function () {
        p.saveEditProject();
    }
    let deletePevent = function () {
        p.deleteProject();
    }
    let hideMenuEvent = function () {
        p.hideProjectEditMenu();
    }
    let hideTPSelectEvent = function () {
        t.hideTaskProjectSelect();
    }

    let hideTDateSelectEvent = function (e) {
        t.hideTaskDateSelect(e);
    }
    let hideTPrioSelectEvent= function(e){
        t.hideTaskPrioSelect(e);
    }
    let selectedDateEvent = function () {
        t.taskDateSelectedOption(this);
    }
    let selectedPrioEvent=function(e){
        t.selectedPrio(e);
    }
    let showTInDate = function () {
        t.showTasksInDate(this);
    }
    let preMonth = function () {
        t.preMonth();
    }
    let nextMonth = function () {
        t.nextMonth();
    }
    let currentMonth = function () {
        t.currentMonth();
    }
    let selectColor = function (e) {
        p.selectColor(e);
    }
    let cancelEditPevent = function () {
        p.cancelEditProject();
    }
    let showTUpcomig = function () {
        t.showUpcomingTasks(this);
    }

    //add a project events
    document.querySelector(".project--add").addEventListener("click", showAddPevent);

    document.querySelector(".project--color_list").addEventListener("click", selectColor);

    document.querySelector(".editproject--color_list").addEventListener("click", selectColor);

    document.querySelector("#newproject--form_submit_add").addEventListener("click", addPevent);

    document.querySelector("#newproject--form_submit_cancel").addEventListener("click", cancelAddPevent);


    document.querySelector("#editproject--form_submit_cancel").addEventListener("click", cancelEditPevent);
    // edit project
    document.querySelector("#editproject--form_submit_save").addEventListener("click", savePevent);

    document.querySelector("#editproject--form_submit_cancel").addEventListener("click", cancelAddPevent);

    //project ui
    document.querySelector("div.sidebar--header.projects").addEventListener("click", toggleShowPList);
    //edit delete project
    document.querySelector(".project--menu_edit").addEventListener("click", editPevent);
    document.querySelector(".project--menu_delete").addEventListener("click", deletePevent);
    //project menu
    document.querySelector(".project--menuouter_hidden").addEventListener("click", hideMenuEvent);
    //add task events
    document.querySelector(".task--menuouter_hidden").addEventListener("click", hideTPSelectEvent);

    document.querySelector(".task--datemenuouter_hidden").addEventListener("click", hideTDateSelectEvent);

    document.querySelector(".task--outerprio_hidden").addEventListener("click", hideTPrioSelectEvent);

    document.querySelector(".task--datemenu .datemenu--today").addEventListener("click", selectedDateEvent);

    document.querySelector(".task--datemenu .datemenu--tomorrow").addEventListener("click", selectedDateEvent);

    document.querySelector(".task--prio").addEventListener("click", selectedPrioEvent);

    document.querySelector(".months--select_left").addEventListener("click", preMonth);

    document.querySelector(".months--select_right").addEventListener("click", nextMonth);
    document.querySelector(".months--select_current").addEventListener("click", currentMonth);
    //click today in sidebar
    document.querySelector(".sidebar--header_today").addEventListener("click", showTInDate);

    document.querySelector(".sidebar--header_tomorrow").addEventListener("click", showTInDate);

    document.querySelector(".sidebar--header_upcoming").addEventListener("click", showTUpcomig);


}
export { createEvents, createMainEvents };