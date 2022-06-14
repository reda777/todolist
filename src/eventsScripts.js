import * as p from "./project";
import * as t from "./task";
function createMainEvents(){
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
    let cancelAddTevent = function () {
        t.cancelAddTask();
    }
    let addTevent = function () {
        t.addTask(document.querySelector("#task_name").value, document.querySelector("#task_project div").className,
        document.querySelector("#task--date div").dataset.date);
    }
    let selectedCalDate=function(e){
        t.taskCalDateSelected(e);
    }
    let resizeTextArea=function(){
        t.taskResizeTextArea(this);
    }
    document.querySelector(".task--add").addEventListener("click", showAddTevent);

    document.querySelector("#task_project").addEventListener("click", showTPSelectEvent);

    document.querySelector("#task--date").addEventListener("click", showTDateSelectEvent);

    document.querySelector("#task--new_submit_cancel").addEventListener("click", cancelAddTevent);

    document.querySelector("#task--new_submit_add").addEventListener("click", addTevent);
    //calendar
    document.querySelector(".months--days").addEventListener("click",selectedCalDate);
    //textarea
    document.querySelector("#task_name").addEventListener("input",resizeTextArea);
}
function createEvents() {
    createMainEvents();
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
    let hideTPSelectEvent = function () {
        t.hideTaskProjectSelect();
    }
    
    let hideTDateSelectEvent = function(e){
        t.hideTaskDateSelect(e);
    }
    let selectedDateEvent= function(){
        t.taskDateSelectedOption(this);
    }
    let showTInDate= function(){
        t.showTasksInDate(this);
    }
    let preMonth=function(){
        t.preMonth();
    }
    let nextMonth=function(){
        t.nextMonth();
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
    document.querySelector(".task--menuouter_hidden").addEventListener("click", hideTPSelectEvent);

    document.querySelector(".task--datemenuouter_hidden").addEventListener("click", hideTDateSelectEvent);

    document.querySelector(".task--datemenu .datemenu--today").addEventListener("click",selectedDateEvent);
    
    document.querySelector(".task--datemenu .datemenu--tomorrow").addEventListener("click",selectedDateEvent);

    document.querySelector(".months--select_left").addEventListener("click",preMonth);

    document.querySelector(".months--select_right").addEventListener("click",nextMonth);
    //click today in sidebar
    document.querySelector(".sidebar--header_today").addEventListener("click",showTInDate);

    document.querySelector(".sidebar--header_tomorrow").addEventListener("click",showTInDate);

    document.querySelector(".sidebar--header_upcoming").addEventListener("click",showTInDate);
    
}
export { createEvents, createMainEvents };