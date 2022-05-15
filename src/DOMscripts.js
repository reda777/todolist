function header(){
    const div=document.createElement("div");
    div.id="header";
    div.textContent="Todo List";
    return div;
}
function sidebar(){
    const sidebar=document.createElement("div");
    sidebar.id="sidebar";

    const sidebarGroup=document.createElement("div");
    sidebarGroup.id="sidebar--group";
    sidebar.appendChild(sidebarGroup);
    sidebarGroup.appendChild(sidebarHeader("My List"));
    sidebarGroup.appendChild(sidebarHeader("Today"));
    sidebarGroup.appendChild(sidebarHeader("Next 7 Days"));

    const sidebarHeadProject=sidebarHeader("Projects");
    const sidebarHeadBtn=document.createElement("div");
    sidebarHeadBtn.className="sidebar--header_btn";

    const sidebarHeadBtnIcon=document.createElement("span");
    sidebarHeadBtnIcon.className="sidebar--header_btn_icon_up";
    sidebarHeadBtn.appendChild(sidebarHeadBtnIcon);
    sidebarHeadProject.appendChild(sidebarHeadBtn);
    sidebarGroup.appendChild(sidebarHeadProject);

    const sidebarList=document.createElement("div");
    sidebarList.id="sidebar--list";
    sidebarGroup.appendChild(sidebarList);

    const projectAdd=document.createElement("div");
    projectAdd.className="project--add";
    sidebarList.appendChild(projectAdd);

    const projectAddBtn=document.createElement("div");
    projectAddBtn.className="project--add_btn";
    projectAdd.appendChild(projectAddBtn);

    const projectAddBtnIcon=document.createElement("span");
    projectAddBtnIcon.className="project--add_btn_icon";
    projectAddBtn.appendChild(projectAddBtnIcon);
    
    const projectAddName=document.createElement("div");
    projectAddName.className="project--add_name";
    projectAddName.textContent="Add Project";
    projectAdd.appendChild(projectAddName);
    sidebarList.prepend(sidebarProject("Name1"));
    return sidebar;
}
function sidebarHeader(tContent){
    const div=document.createElement("div");
    div.className="sidebar--header";
    const divChild=document.createElement("div");
    divChild.className="sidebar--header_title";
    divChild.textContent=tContent;
    div.appendChild(divChild);
    return div;
}
function sidebarProject(tContent){
    const project=document.createElement("div");
    project.className="project";
    const projectName=document.createElement("div");
    projectName.className="project--name";
    projectName.textContent=tContent;
    project.appendChild(projectName);
    const projectCount=document.createElement("div");
    projectCount.className="project--count";
    projectCount.textContent="2";
    project.appendChild(projectCount);
    return project;
}
function main(){
    const main=document.createElement("div");
    main.id="main";

    const mainGroup=document.createElement("div");
    mainGroup.id="main--group";
    main.appendChild(mainGroup);

    const mainHeader=document.createElement("div");
    mainHeader.className="main--header";
    const mainHeaderTitle=document.createElement("div");
    mainHeaderTitle.className="main--header_title";
    mainHeaderTitle.textContent="Today";
    mainHeader.appendChild(mainHeaderTitle);
    mainGroup.appendChild(mainHeader);

    const mainList=document.createElement("div");
    mainList.id="main--list";
    mainGroup.appendChild(mainList);

    const taskAdd=document.createElement("div");
    taskAdd.className="task--add";
    mainList.appendChild(taskAdd);

    const taskAddBtn=document.createElement("div");
    taskAddBtn.className="task--add_btn";
    taskAdd.appendChild(taskAddBtn);

    const taskAddBtnIcon=document.createElement("span");
    taskAddBtnIcon.className="task--add_btn_icon";
    taskAddBtn.appendChild(taskAddBtnIcon);
    
    const taskAddName=document.createElement("div");
    taskAddName.className="task--add_name";
    taskAddName.textContent="Add Task";
    taskAdd.appendChild(taskAddName);

    mainList.prepend(mainListTask("Name1"));
    return main;
}
function mainListTask(tContent){
    const task=document.createElement("div");
    task.className="task";

    const taskBtn=document.createElement("div");
    taskBtn.className="task--btn";
    task.appendChild(taskBtn);

    const taskBtnIcon=document.createElement("span");
    taskBtnIcon.className="task--btn_icon";
    taskBtn.appendChild(taskBtnIcon);

    const taskName=document.createElement("div");
    taskName.className="task--name";
    taskName.textContent=tContent;
    task.appendChild(taskName);
    return task;
}
function footer(){
    const div=document.createElement("div");
    div.id="footer";
    div.textContent="Copyright © 2022 Reda";
    return div;
}
function buildDOM(){
    const content=document.createElement("div");
    content.id="content";
    content.append(header(),sidebar(),main(),footer());
    document.body.appendChild(content);
}
export default buildDOM;