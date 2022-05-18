import {addProject ,cancelAddProject} from "./project";
function createEvents(){
    document.querySelector(".project--add").addEventListener("click",()=>{
        addProject();
    });
    document.querySelector("#newproject--form_submit_cancel").addEventListener("click",()=>{
        cancelAddProject();
    });
}
export default createEvents;