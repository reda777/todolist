import * as project from "./project";
function createEvents() {
    document.querySelector(".project--add").addEventListener("click", () => {
        project.showAddProject();
    });
    document.querySelector("#newproject--form_submit_add").addEventListener("click", () => {
        project.addProject(document.querySelector("#newproject--form_name input").value);
    });
    document.querySelector("#newproject--form_submit_cancel").addEventListener("click", () => {
        project.cancelAddProject();
    });
    document.querySelector(".sidebar--header_btn").addEventListener("click", () => {
        project.toggleProjectList();
    });
}
export default createEvents;