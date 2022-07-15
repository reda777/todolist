import * as p from "./project";
import * as t from "./task";
function createMainEvents() {
    let timeoutID;
    let showAddTevent = function () {
        //+ add task
        t.showAddTask();
    }
    let showTPSelectEvent = function () {
        t.showTaskProjectSelect(this);
    }
    let showTDateSelectEvent = function () {
        t.showTaskDateSelect(this);
    }
    let showTPrioSelectEvent = function () {
        t.showPrioSelect(this);
    }
    let cancelAddTevent = function () {
        t.cancelAddTask();
    }
    let cancelEditTevent = function () {
        t.cancelEditTask();
    }
    let addTevent = function () {
        timeoutID = t.addTaskButton();
    }
    let saveTevent = function () {
        timeoutID = t.saveTaskButton(this);
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
    let closeShowTEvent = function () {
        t.closeShowTaskSum();
    }
    document.querySelector(".task--add").addEventListener("click", showAddTevent);

    document.querySelectorAll("#task_project").forEach(element => {
        element.addEventListener("click", showTPSelectEvent);
    });
    document.querySelectorAll("#task--date").forEach(element => {
        element.addEventListener("click", showTDateSelectEvent);
    });
    document.querySelectorAll("#task_prio").forEach(element => {
        element.addEventListener("click", showTPrioSelectEvent);
    });

    document.querySelector("#task--new_submit_cancel").addEventListener("click", cancelAddTevent);
    document.querySelector(".task_edit_hidden #task--new_submit_cancel").addEventListener("click", cancelEditTevent);
    document.querySelector("#task--new_submit_add").addEventListener("click", addTevent);
    document.querySelector(".task_edit_hidden #task--new_submit_add").addEventListener("click", saveTevent);

    //textarea
    document.querySelector("#task_name").addEventListener("input", resizeTextArea);
    //close floating message
    document.querySelector(".message--close").addEventListener("click", closeMessage);
    document.querySelector(".message--container_hidden").addEventListener("mouseenter", keepMessage);
    document.querySelector(".message--container_hidden").addEventListener("mouseleave", closeMessage);
    //close task summary
    document.querySelector("#task--title_close").addEventListener("click", closeShowTEvent)
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
    let hideODateSelectEvent = function (e) {
        t.hideOverdueDateSelect(e);
    }
    let hideTPrioSelectEvent = function (e) {
        t.hideTaskPrioSelect(e);
    }
    let selectedDateEvent = function () {
        t.taskDateSelectedOption(this);
    }
    let selectedODateEvent = function (e) {
        t.overdueDateSelectedOption(this, e);
    }
    let selectedPrioEvent = function (e) {
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
        t.showUpcomingTasks();
    }
    let selectedCalDate = function (e) {
        t.taskCalDateSelected(e);
    }
    let showCompletedListEvent = function () {
        t.showCompletedList(this);
    }
    let closeCompletedTaskEvent = function (e) {
        t.closeCompletedTask(e);
    }
    let changeThemeEvent = function () {
        t.changeTheme();
    }
    //change theme
    document.querySelector(".themeDiv").addEventListener("click", changeThemeEvent);
    //header completed list
    document.querySelector(".headerCompleted").addEventListener("click", showCompletedListEvent);
    document.querySelector(".completedOuter_hidden").addEventListener("click", closeCompletedTaskEvent);
    //add a project events
    document.querySelector(".project--add").addEventListener("click", showAddPevent);

    document.querySelector(".project--color_list").addEventListener("click", selectColor);

    document.querySelector(".editproject--color_list").addEventListener("click", selectColor);

    document.querySelector("#newproject--form_submit_add").addEventListener("click", addPevent);

    document.querySelector("#newproject--form_submit_cancel").addEventListener("click", cancelAddPevent);


    document.querySelector("#editproject--form_submit_cancel").addEventListener("click", cancelEditPevent);
    // edit project
    document.querySelector("#editproject--form_submit_save").addEventListener("click", savePevent);
    //calendar
    document.querySelector(".months--days").addEventListener("click", selectedCalDate);
    document.querySelector(".overdue--selectdate .months--days").addEventListener("click", selectedODateEvent);
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

    document.querySelector(".overdue--selectdate_hidden").addEventListener("click", hideODateSelectEvent);

    document.querySelector(".task--outerprio_hidden").addEventListener("click", hideTPrioSelectEvent);

    document.querySelector(".task--datemenu .datemenu--today").addEventListener("click", selectedDateEvent);

    document.querySelector(".task--datemenu .datemenu--tomorrow").addEventListener("click", selectedDateEvent);

    document.querySelector(".overdue--selectdate .datemenu--today").addEventListener("click", selectedODateEvent);

    document.querySelector(".overdue--selectdate .datemenu--tomorrow").addEventListener("click", selectedODateEvent);

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