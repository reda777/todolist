import { sidebarProject } from "./DOMscripts.js";
const project=(name,color)=>{
    return {
        name: name,
        color: color,
        taskCount: function () {
            console.log("taskCount");
        }
    };
}
function showAddProject() {
    document.querySelector("#newproject_hidden").id = "newproject";
}
function addProject(nameValue,colorValue) {
    
    let obj=JSON.parse(localStorage.getItem("todoList"));
    obj.project.push({name:nameValue,color:colorValue});
    localStorage.setItem("todoList",JSON.stringify(obj));
    document.querySelector("#sidebar--list").prepend(sidebarProject(nameValue,colorValue));
    document.querySelector("#newproject").id = "newproject_hidden";

}
function populateProjectList(){
    let obj=JSON.parse(localStorage.getItem("todoList"));
    for(let i=0;i<obj.project.length;i++){
        let nameValue=obj.project[i].name;
        let colorValue=obj.project[i].color;
        document.querySelector("#sidebar--list").prepend(sidebarProject(nameValue,colorValue));
    }
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
export { project, showAddProject, addProject, cancelAddProject, toggleProjectList, populateProjectList };
