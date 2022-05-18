import { mainListTask, sidebarProject } from "./DOMscripts.js";
function showAddProject() {
    document.querySelector("#newproject_hidden").id = "newproject";
}
function addProject(nameValue) {
    document.querySelector("#sidebar--list").prepend(sidebarProject(nameValue));
    document.querySelector("#newproject").id = "newproject_hidden";
}
function cancelAddProject() {
    document.querySelector("#newproject").id = "newproject_hidden";
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
export { showAddProject, addProject, cancelAddProject, toggleProjectList };
