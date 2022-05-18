function addProject(){
    document.querySelector("#newproject_hidden").id="newproject";
}
function cancelAddProject(){
    document.querySelector("#newproject").id="newproject_hidden";
}
export {addProject ,cancelAddProject};
