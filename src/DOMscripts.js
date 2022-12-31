import * as p from "./project";
import * as t from "./task";
import { format, addDays, eachDayOfInterval, lastDayOfMonth, parse, getWeekOfMonth, getDay } from 'date-fns';
function header() {
    const div = document.createElement("div");
    div.id = "header";

    const divTitle = document.createElement("div");
    divTitle.className = "headerTitle";
    divTitle.textContent = "Todolist";
    div.appendChild(divTitle);

    const themeDiv = document.createElement("div");
    themeDiv.className = "themeDiv";
    themeDiv.title = "Change Theme"
    div.appendChild(themeDiv);

    const themeSpan = document.createElement("span");
    themeSpan.className = "themeIcon";
    themeDiv.appendChild(themeSpan);

    themeSpan.appendChild(moonSvg());

    const gitLink = document.createElement("a");
    gitLink.href = "https://github.com/reda777/todolist";
    gitLink.target = "_blank";
    gitLink.rel = "noopener noreferrer";
    div.appendChild(gitLink);

    const divGit = document.createElement("div");
    divGit.className = "headerGit";
    gitLink.appendChild(divGit);

    const spanGit = document.createElement("span");
    spanGit.className = "gitIcon";
    divGit.appendChild(spanGit);

    spanGit.appendChild(gitIconSvg());

    const divCompleted = document.createElement("div");
    divCompleted.className = "headerCompleted";
    divCompleted.title = "Completed tasks";
    div.appendChild(divCompleted);

    const spanCompleted = document.createElement("span");
    spanCompleted.className = "completedIcon";
    divCompleted.appendChild(spanCompleted);

    spanCompleted.appendChild(listCompletedSvg());
    return div;
}
function listCompletedSvg() {
    const svgImage = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

    svgImage.setAttribute('class', 'icon');
    svgImage.setAttribute('viewBox', '0 0 24 24');
    svgImage.setAttribute('width', '16px');
    svgImage.setAttribute('height', '16px');

    path.setAttribute('d', 'm4 6a2.982 2.982 0 0 1 -2.122-.879l-1.544-1.374a1 1 0 0 1 1.332-1.494l1.585 1.414a1 1 0 0 0 1.456.04l3.604-3.431a1 1 0 0 1 1.378 1.448l-3.589 3.414a2.964 2.964 0 0 1 -2.1.862zm20-2a1 1 0 0 0 -1-1h-10a1 1 0 0 0 0 2h10a1 1 0 0 0 1-1zm-17.9 9.138 3.589-3.414a1 1 0 1 0 -1.378-1.448l-3.6 3.431a1.023 1.023 0 0 1 -1.414 0l-1.59-1.585a1 1 0 0 0 -1.414 1.414l1.585 1.585a3 3 0 0 0 4.226.017zm17.9-1.138a1 1 0 0 0 -1-1h-10a1 1 0 0 0 0 2h10a1 1 0 0 0 1-1zm-17.9 9.138 3.585-3.414a1 1 0 1 0 -1.378-1.448l-3.6 3.431a1 1 0 0 1 -1.456-.04l-1.585-1.414a1 1 0 0 0 -1.332 1.494l1.544 1.374a3 3 0 0 0 4.226.017zm17.9-1.138a1 1 0 0 0 -1-1h-10a1 1 0 0 0 0 2h10a1 1 0 0 0 1-1z');
    svgImage.appendChild(path);
    return svgImage;
}
function gitIconSvg() {
    const svgGit = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const gGit = document.createElementNS("http://www.w3.org/2000/svg", "g");
    const pathGit1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const pathGit2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const pathGit3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const pathGit4 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const pathGit5 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const pathGit6 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const pathGit7 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const pathGit8 = document.createElementNS("http://www.w3.org/2000/svg", "path");

    svgGit.setAttribute('class', 'icon');
    svgGit.setAttribute('viewBox', '0 0 24 24');
    svgGit.setAttribute('width', '16px');
    svgGit.setAttribute('height', '16px');

    pathGit1.setAttribute('style', 'fill-rule:evenodd;clip-rule:evenodd;');
    pathGit1.setAttribute('d', 'M12,0.296c-6.627,0-12,5.372-12,12c0,5.302,3.438,9.8,8.206,11.387   c0.6,0.111,0.82-0.26,0.82-0.577c0-0.286-0.011-1.231-0.016-2.234c-3.338,0.726-4.043-1.416-4.043-1.416   C4.421,18.069,3.635,17.7,3.635,17.7c-1.089-0.745,0.082-0.729,0.082-0.729c1.205,0.085,1.839,1.237,1.839,1.237   c1.07,1.834,2.807,1.304,3.492,0.997C9.156,18.429,9.467,17.9,9.81,17.6c-2.665-0.303-5.467-1.332-5.467-5.93   c0-1.31,0.469-2.381,1.237-3.221C5.455,8.146,5.044,6.926,5.696,5.273c0,0,1.008-0.322,3.301,1.23   C9.954,6.237,10.98,6.104,12,6.099c1.02,0.005,2.047,0.138,3.006,0.404c2.29-1.553,3.297-1.23,3.297-1.23   c0.653,1.653,0.242,2.873,0.118,3.176c0.769,0.84,1.235,1.911,1.235,3.221c0,4.609-2.807,5.624-5.479,5.921   c0.43,0.372,0.814,1.103,0.814,2.222c0,1.606-0.014,2.898-0.014,3.293c0,0.319,0.216,0.694,0.824,0.576   c4.766-1.589,8.2-6.085,8.2-11.385C24,5.669,18.627,0.296,12,0.296z');

    pathGit2.setAttribute('d', 'M4.545,17.526c-0.026,0.06-0.12,0.078-0.206,0.037c-0.087-0.039-0.136-0.121-0.108-0.18   c0.026-0.061,0.12-0.078,0.207-0.037C4.525,17.384,4.575,17.466,4.545,17.526L4.545,17.526z');
    pathGit3.setAttribute('d', 'M5.031,18.068c-0.057,0.053-0.169,0.028-0.245-0.055c-0.079-0.084-0.093-0.196-0.035-0.249   c0.059-0.053,0.167-0.028,0.246,0.056C5.076,17.903,5.091,18.014,5.031,18.068L5.031,18.068z');
    pathGit4.setAttribute('d', 'M5.504,18.759c-0.074,0.051-0.194,0.003-0.268-0.103c-0.074-0.107-0.074-0.235,0.002-0.286   c0.074-0.051,0.193-0.005,0.268,0.101C5.579,18.579,5.579,18.707,5.504,18.759L5.504,18.759z');
    pathGit5.setAttribute('d', 'M6.152,19.427c-0.066,0.073-0.206,0.053-0.308-0.046c-0.105-0.097-0.134-0.234-0.068-0.307   c0.067-0.073,0.208-0.052,0.311,0.046C6.191,19.217,6.222,19.355,6.152,19.427L6.152,19.427z');
    pathGit6.setAttribute('d', 'M7.047,19.814c-0.029,0.094-0.164,0.137-0.3,0.097C6.611,19.87,6.522,19.76,6.55,19.665   c0.028-0.095,0.164-0.139,0.301-0.096C6.986,19.609,7.075,19.719,7.047,19.814L7.047,19.814z');
    pathGit7.setAttribute('d', 'M8.029,19.886c0.003,0.099-0.112,0.181-0.255,0.183c-0.143,0.003-0.26-0.077-0.261-0.174c0-0.1,0.113-0.181,0.256-0.184   C7.912,19.708,8.029,19.788,8.029,19.886L8.029,19.886z');
    pathGit8.setAttribute('d', 'M8.943,19.731c0.017,0.096-0.082,0.196-0.224,0.222c-0.139,0.026-0.268-0.034-0.286-0.13   c-0.017-0.099,0.084-0.198,0.223-0.224C8.797,19.574,8.925,19.632,8.943,19.731L8.943,19.731z');

    gGit.appendChild(pathGit1);
    gGit.appendChild(pathGit2);
    gGit.appendChild(pathGit3);
    gGit.appendChild(pathGit4);
    gGit.appendChild(pathGit5);
    gGit.appendChild(pathGit6);
    gGit.appendChild(pathGit7);
    gGit.appendChild(pathGit8);

    svgGit.appendChild(gGit);
    return svgGit;
}
function moonSvg() {
    const svgImage = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

    svgImage.setAttribute('class', 'icon');
    svgImage.setAttribute('viewBox', '0 0 24 24');
    svgImage.setAttribute('width', '16px');
    svgImage.setAttribute('height', '16px');

    path.setAttribute('d', 'M14,24A12.013,12.013,0,0,1,2,12C1.847,3.043,12.031-2.983,19.792,1.508L22.122,2.8,19.809,4.122a8.55,8.55,0,0,0,.718,15.167l2.433,1.1-2.2,1.508A11.921,11.921,0,0,1,14,24ZM14,3a9,9,0,1,0,2.848,17.529c-5.366-4.022-5.793-12.77-.817-17.3A8.873,8.873,0,0,0,14,3Z');
    svgImage.appendChild(path);
    return svgImage;
}
function downSvg() {
    const svgImage = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

    svgImage.setAttribute('class', 'icon');
    svgImage.setAttribute('viewBox', '0 0 24 24');
    svgImage.setAttribute('width', '14px');
    svgImage.setAttribute('height', '14px');

    path.setAttribute('d', 'M12,17.17a5,5,0,0,1-3.54-1.46L.29,7.54A1,1,0,0,1,1.71,6.12l8.17,8.17a3,3,0,0,0,4.24,0l8.17-8.17a1,1,0,1,1,1.42,1.42l-8.17,8.17A5,5,0,0,1,12,17.17Z');
    svgImage.appendChild(path);
    return svgImage;
}
function upSvg() {
    const svgImage = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

    svgImage.setAttribute('class', 'icon');
    svgImage.setAttribute('viewBox', '0 0 24 24');
    svgImage.setAttribute('width', '14px');
    svgImage.setAttribute('height', '14px');

    path.setAttribute('d', 'M23.71,16.29,15.54,8.12a5,5,0,0,0-7.08,0L.29,16.29a1,1,0,0,0,1.42,1.42L9.88,9.54a3,3,0,0,1,4.24,0l8.17,8.17a1,1,0,0,0,1.42,0A1,1,0,0,0,23.71,16.29Z');
    svgImage.appendChild(path);
    return svgImage;
}
function sidebar() {
    let preferences = Object.values(JSON.parse(localStorage.getItem("preferences"))["sidebar"]);
    const sidebar = document.createElement("div");
    sidebar.id = "sidebar";

    const sidebarGroup = document.createElement("div");
    sidebarGroup.id = "sidebar--group";
    sidebar.appendChild(sidebarGroup);
    sidebarGroup.appendChild(sidebarHeader("Today"));
    sidebarGroup.appendChild(sidebarHeader("Tomorrow"));
    sidebarGroup.appendChild(sidebarHeader("Upcoming"));

    const sidebarHeadProject = sidebarHeader("Projects");
    const sidebarHeadBtn = document.createElement("div");
    sidebarHeadBtn.className = "sidebar--header_btn";

    const sidebarHeadBtnIcon = document.createElement("span");
    if (preferences[0]) {
        sidebarHeadBtnIcon.className = "sidebar--header_btn_icon_down";
        sidebarHeadBtnIcon.appendChild(downSvg());
    }
    else {
        sidebarHeadBtnIcon.className = "sidebar--header_btn_icon_up";
        sidebarHeadBtnIcon.appendChild(upSvg());
    }
    sidebarHeadBtn.appendChild(sidebarHeadBtnIcon);
    sidebarHeadProject.appendChild(sidebarHeadBtn);
    sidebarGroup.appendChild(sidebarHeadProject);

    const sidebarList = document.createElement("div");
    if (preferences[0]) {
        sidebarList.id = "sidebar--list";
    }
    else {
        sidebarList.id = "sidebar--list_hidden";
    }
    sidebarGroup.appendChild(sidebarList);

    const projectAdd = document.createElement("div");
    projectAdd.className = "project--add";
    sidebarList.appendChild(projectAdd);

    const projectAddBtn = document.createElement("div");
    projectAddBtn.className = "project--add_btn";
    projectAdd.appendChild(projectAddBtn);

    const projectAddBtnIcon = document.createElement("span");
    projectAddBtnIcon.className = "project--add_btn_icon";
    projectAddBtn.appendChild(projectAddBtnIcon);
    //svg plus
    projectAddBtnIcon.appendChild(plusButtonSvg());

    const projectAddName = document.createElement("div");
    projectAddName.className = "project--add_name";
    projectAddName.textContent = "Add Project";
    projectAdd.appendChild(projectAddName);
    return sidebar;
}
function plusButtonSvg() {
    const svgImage = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

    svgImage.setAttribute('class', 'icon');
    svgImage.setAttribute('viewBox', '0 0 24 24');
    svgImage.setAttribute('width', '15px');
    svgImage.setAttribute('height', '15px');

    path.setAttribute('d', 'M23,11H13V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H11V23a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1V13H23a1,1,0,0,0,1-1h0A1,1,0,0,0,23,11Z');
    svgImage.appendChild(path);
    return svgImage;
}
function pickSvg(tContent) {
    switch (tContent) {
        case "Today":
            return sunSvg();
        case "Tomorrow":
            return sunRisingSvg();
        case "Upcoming":
            return calendarSvg();
    }
}
function sunSvg() {
    const svgImage = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

    svgImage.setAttribute('class', 'icon');
    svgImage.setAttribute('viewBox', '0 0 24 24');
    svgImage.setAttribute('width', '16px');
    svgImage.setAttribute('height', '16px');

    path.setAttribute('d', 'M23,11H18.92a6.924,6.924,0,0,0-.429-1.607l3.527-2.044a1,1,0,1,0-1-1.731l-3.53,2.047a7.062,7.062,0,0,0-1.149-1.15l2.046-3.531a1,1,0,0,0-1.731-1L14.607,5.509A6.9,6.9,0,0,0,13,5.08V1a1,1,0,0,0-2,0V5.08a6.9,6.9,0,0,0-1.607.429L7.349,1.982a1,1,0,0,0-1.731,1L7.664,6.515a7.062,7.062,0,0,0-1.149,1.15L2.985,5.618a1,1,0,1,0-1,1.731L5.509,9.393A6.924,6.924,0,0,0,5.08,11H1a1,1,0,0,0,0,2H5.08a6.924,6.924,0,0,0,.429,1.607L1.982,16.651a1,1,0,1,0,1,1.731l3.53-2.047a7.062,7.062,0,0,0,1.149,1.15L5.618,21.016a1,1,0,0,0,1.731,1l2.044-3.527A6.947,6.947,0,0,0,11,18.92V23a1,1,0,0,0,2,0V18.92a6.947,6.947,0,0,0,1.607-.429l2.044,3.527a1,1,0,0,0,1.731-1l-2.046-3.531a7.062,7.062,0,0,0,1.149-1.15l3.53,2.047a1,1,0,1,0,1-1.731l-3.527-2.044A6.924,6.924,0,0,0,18.92,13H23A1,1,0,0,0,23,11ZM12,17c-6.608-.21-6.606-9.791,0-10C18.608,7.21,18.606,16.791,12,17Z');
    svgImage.appendChild(path);
    return svgImage;
}
function sunRisingSvg() {
    const svgGit = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const gGit = document.createElementNS("http://www.w3.org/2000/svg", "g");
    const pathGit1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const pathGit2 = document.createElementNS("http://www.w3.org/2000/svg", "path");

    svgGit.setAttribute('class', 'icon');
    svgGit.setAttribute('viewBox', '0 0 24 24');
    svgGit.setAttribute('width', '16px');
    svgGit.setAttribute('height', '16px');

    pathGit1.setAttribute('d', 'M18.92,22a6.952,6.952,0,0,0-.433-1.619l4.4-2.559-1.006-1.728-4.4,2.56a7.04,7.04,0,0,0-1.139-1.137l2.553-4.39-1.729-1.006L14.61,16.51A6.95,6.95,0,0,0,13,16.08V11H11v5.08a6.914,6.914,0,0,0-1.6.425l-2.55-4.384L5.126,13.127l2.548,4.381a7.028,7.028,0,0,0-1.147,1.14L2.14,16.094,1.134,17.822l4.382,2.551A6.972,6.972,0,0,0,5.08,22H0v2H24V22ZM7.1,22a5,5,0,0,1,9.8,0Z');

    pathGit2.setAttribute('d', 'M15.293,5.293l1.414-1.414L13.414.586a2,2,0,0,0-2.828,0L7.293,3.879,8.707,5.293,11,3V9h2V3Z');

    gGit.appendChild(pathGit1);
    gGit.appendChild(pathGit2);

    svgGit.appendChild(gGit);
    return svgGit;
}
function calendarSvg() {
    const svgImage = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

    svgImage.setAttribute('class', 'icon');
    svgImage.setAttribute('viewBox', '0 0 24 24');
    svgImage.setAttribute('width', '16px');
    svgImage.setAttribute('height', '16px');

    path.setAttribute('d', 'M17,10.039c-3.859,0-7,3.14-7,7,0,3.838,3.141,6.961,7,6.961s7-3.14,7-7c0-3.838-3.141-6.961-7-6.961Zm0,11.961c-2.757,0-5-2.226-5-4.961,0-2.757,2.243-5,5-5s5,2.226,5,4.961c0,2.757-2.243,5-5,5Zm1.707-4.707c.391,.391,.391,1.023,0,1.414-.195,.195-.451,.293-.707,.293s-.512-.098-.707-.293l-1-1c-.188-.188-.293-.442-.293-.707v-2c0-.552,.447-1,1-1s1,.448,1,1v1.586l.707,.707Zm5.293-10.293v2c0,.552-.447,1-1,1s-1-.448-1-1v-2c0-1.654-1.346-3-3-3H5c-1.654,0-3,1.346-3,3v1H11c.552,0,1,.448,1,1s-.448,1-1,1H2v9c0,1.654,1.346,3,3,3h4c.552,0,1,.448,1,1s-.448,1-1,1H5c-2.757,0-5-2.243-5-5V7C0,4.243,2.243,2,5,2h1V1c0-.552,.448-1,1-1s1,.448,1,1v1h8V1c0-.552,.447-1,1-1s1,.448,1,1v1h1c2.757,0,5,2.243,5,5Z');
    svgImage.appendChild(path);
    return svgImage;
}
function sidebarHeader(tContent) {
    const div = document.createElement("div");
    div.classList.add("sidebar--header");
    if (tContent == "Projects")
        div.classList.add(tContent.toLowerCase());
    const divChild = document.createElement("div");
    divChild.className = `sidebar--header_${tContent.toLowerCase()}`;
    div.appendChild(divChild);
    const spanChild = document.createElement("span");
    spanChild.className = `sidebar--header_${tContent.toLowerCase()}_icon`;
    divChild.appendChild(spanChild);
    if (tContent != "Projects")
        spanChild.appendChild(pickSvg(tContent));

    const spanChildT = document.createElement("span");
    spanChildT.className = `sidebar--header_${tContent.toLowerCase()}_text`;
    spanChildT.textContent = tContent;
    divChild.appendChild(spanChildT);
    return div;
}
function sidebarProject(tId, tContent, tColor, tCount) {
    const project = document.createElement("div");
    project.id = tId;
    project.className = "project";
    const projectName = document.createElement("div");
    projectName.className = "project--name";
    projectName.style.color = tColor;
    project.appendChild(projectName);
    const projectNameSpan = document.createElement("span");
    projectNameSpan.textContent = tContent;
    projectName.appendChild(projectNameSpan);
    const projectCount = document.createElement("div");
    projectCount.className = "project--count";
    projectCount.textContent = tCount;
    project.appendChild(projectCount);
    project.appendChild(projectEditBtn());
    return project;
}
function main() {
    let obj = JSON.parse(localStorage.getItem("preferences"));
    const main = document.createElement("div");
    main.id = "main";

    main.appendChild(mainGroup(obj["sidebar"]["tab"]));

    return main;
}
function mainGroup(option) {
    let obj = JSON.parse(localStorage.getItem("todoList"));
    let headerText;
    for (let i = 0; i < obj.project.length; i++) {
        if (option == obj.project[i].id) {
            headerText = obj.project[i].name;
        }
    }
    let tabArray = ["Today", "Tomorrow", "Upcoming"];
    //if option value is not an id just show the string
    if (headerText == null) {
        if (tabArray.includes(option))
            headerText = option;
        else
            headerText = "Today";
    }
    const mainGroup = document.createElement("div");
    mainGroup.id = "main--group";

    const mainHeader = document.createElement("div");
    mainHeader.className = "main--header";
    const mainHeaderTitle = document.createElement("div");
    mainHeaderTitle.className = "main--header_title";
    mainHeaderTitle.textContent = headerText;
    mainHeader.appendChild(mainHeaderTitle);
    mainGroup.appendChild(mainHeader);

    const mainList = document.createElement("div");
    mainList.id = "main--list";
    mainGroup.appendChild(mainList);

    const taskAdd = document.createElement("div");
    taskAdd.className = "task--add";
    mainList.appendChild(taskAdd);

    const taskAddBtn = document.createElement("div");
    taskAddBtn.className = "task--add_btn";
    taskAdd.appendChild(taskAddBtn);

    const taskAddBtnIcon = document.createElement("span");
    taskAddBtnIcon.className = "task--add_btn_icon";
    taskAddBtn.appendChild(taskAddBtnIcon);
    //svg plus
    taskAddBtnIcon.appendChild(plusButtonSvg());

    const taskAddName = document.createElement("div");
    taskAddName.className = "task--add_name";
    taskAddName.textContent = "Add Task";
    taskAdd.appendChild(taskAddName);

    mainList.append(addTask());
    mainList.append(editTask());
    return mainGroup;
}
function crossSvg() {
    const svgImage = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

    svgImage.setAttribute('class', 'icon');
    svgImage.setAttribute('viewBox', '0 0 512.021 512.021');
    svgImage.setAttribute('width', '15px');
    svgImage.setAttribute('height', '15px');

    path.setAttribute('d', 'M301.258,256.01L502.645,54.645c12.501-12.501,12.501-32.769,0-45.269c-12.501-12.501-32.769-12.501-45.269,0l0,0   L256.01,210.762L54.645,9.376c-12.501-12.501-32.769-12.501-45.269,0s-12.501,32.769,0,45.269L210.762,256.01L9.376,457.376   c-12.501,12.501-12.501,32.769,0,45.269s32.769,12.501,45.269,0L256.01,301.258l201.365,201.387   c12.501,12.501,32.769,12.501,45.269,0c12.501-12.501,12.501-32.769,0-45.269L301.258,256.01z');
    svgImage.appendChild(path);
    return svgImage;
}
function showTaskSummary() {
    const showTask = document.createElement("div");
    showTask.classList = "show--task_hidden";

    const taskInterface = document.createElement("div");
    taskInterface.id = "task--interface";
    showTask.appendChild(taskInterface);
    //header
    const taskTitle = document.createElement("div");
    taskTitle.id = "task--title";
    taskInterface.appendChild(taskTitle);
    //header title
    const taskTitleName = document.createElement("div");
    taskTitleName.id = "task--title_name";
    taskTitleName.textContent = "Task";
    taskTitle.appendChild(taskTitleName);
    //header button
    const taskTitleClose = document.createElement("div");
    taskTitleClose.id = "task--title_close";
    taskTitle.appendChild(taskTitleClose);

    const taskTitleCloseBtn = document.createElement("span");
    taskTitleCloseBtn.id = "task--title_closeBtn";
    taskTitleClose.appendChild(taskTitleCloseBtn);

    taskTitleCloseBtn.appendChild(crossSvg());
    //main
    const taskMain = document.createElement("div");
    taskMain.id = "task--main";
    taskInterface.appendChild(taskMain);
    //main task name
    const taskName = document.createElement("div");
    taskName.id = "task--main_name";
    taskMain.appendChild(taskName);
    //main task description
    const taskDesc = document.createElement("div");
    taskDesc.id = "task--main_desc";
    taskMain.appendChild(taskDesc);
    //left side
    const taskSide = document.createElement("div");
    taskSide.id = "task--side";
    taskInterface.appendChild(taskSide);
    //project
    const taskProject = document.createElement("div");
    taskProject.id = "task--side_project";
    taskSide.appendChild(taskProject);

    const taskProjectLabel = document.createElement("div");
    taskProjectLabel.id = "task--side_projectLabel";
    taskProjectLabel.textContent = "Project";
    taskProject.appendChild(taskProjectLabel);

    const taskProjectName = document.createElement("div");
    taskProjectName.id = "task--side_projectName";
    taskProject.appendChild(taskProjectName);
    //date
    const taskDate = document.createElement("div");
    taskDate.id = "task--side_date";
    taskSide.appendChild(taskDate);

    const taskDateLabel = document.createElement("div");
    taskDateLabel.id = "task--side_dateLabel";
    taskDateLabel.textContent = "Due Date";
    taskDate.appendChild(taskDateLabel);

    const taskDateName = document.createElement("div");
    taskDateName.id = "task--side_dateName";
    taskDate.appendChild(taskDateName);
    //priority
    const taskPrio = document.createElement("div");
    taskPrio.id = "task--side_prio";
    taskSide.appendChild(taskPrio);

    const taskPrioLabel = document.createElement("div");
    taskPrioLabel.id = "task--side_prioLabel";
    taskPrioLabel.textContent = "Priority";
    taskPrio.appendChild(taskPrioLabel);

    const taskPrioName = document.createElement("div");
    taskPrioName.id = "task--side_prioName";
    taskPrio.appendChild(taskPrioName);
    return showTask;
}
function addProject() {
    const colorsArray = ["#13c7e7", "#6484c6", "#4648bd", "#d24157", "#ff0000"
        , "#4fc972", "#cc552c", "#d4459a", "#b7b434", "#69a537"
        , "#a556c6", "#35845a", "#986e34", "#8E05C2", "#5e2dbb"];
    const newProject = document.createElement("div");
    newProject.id = "newproject_hidden";
    const projectInterface = document.createElement("div");
    projectInterface.id = "project--interface";
    newProject.appendChild(projectInterface);
    const newProjectTitle = document.createElement("div");
    newProjectTitle.id = "newproject--title";
    newProjectTitle.textContent = "Add Project";
    projectInterface.appendChild(newProjectTitle);

    const newProjectForm = document.createElement("div");
    newProjectForm.id = "newproject--form";
    projectInterface.appendChild(newProjectForm);

    const newProjectFormName = document.createElement("div");
    newProjectFormName.id = "newproject--form_name";
    newProjectForm.appendChild(newProjectFormName);
    const newProjectFormColor = document.createElement("div");
    newProjectFormColor.id = "newproject--form_color";
    newProjectForm.appendChild(newProjectFormColor);

    const projectNameLabel = document.createElement("label");
    Object.assign(projectNameLabel, {
        for: "project_name",
        textContent: "Name"
    });
    newProjectFormName.appendChild(projectNameLabel);

    const projectNameInput = document.createElement("input");
    Object.assign(projectNameInput, {
        type: "text",
        name: "project_name",
        id: "project_name"
    });
    newProjectFormName.appendChild(projectNameInput);

    const projectColorLabel = document.createElement("label");
    Object.assign(projectColorLabel, {
        for: "project_color",
        textContent: "Color"
    });
    newProjectFormColor.appendChild(projectColorLabel);

    const projectColorList = document.createElement("div");
    projectColorList.className = "project--color_list";
    newProjectFormColor.appendChild(projectColorList);

    for (let i = 0; i < colorsArray.length; i++) {
        const listColor = document.createElement("div");
        const listColorCheck = document.createElement("span");
        listColorCheck.className = "list--color_check";
        listColor.appendChild(listColorCheck);
        listColor.style.backgroundColor = colorsArray[i];
        listColor.dataset.bgColor = colorsArray[i];
        listColor.className = "list--color";
        projectColorList.appendChild(listColor);
    }

    const newProjectFormSubmit = document.createElement("div");
    newProjectFormSubmit.id = "newproject--form_submit";
    newProjectForm.appendChild(newProjectFormSubmit);

    const newProjectFormSubmitAdd = document.createElement("div");
    newProjectFormSubmitAdd.id = "newproject--form_submit_add";
    newProjectFormSubmitAdd.textContent = "Add";
    newProjectFormSubmit.appendChild(newProjectFormSubmitAdd);
    const newProjectFormSubmitCancel = document.createElement("div");
    newProjectFormSubmitCancel.id = "newproject--form_submit_cancel";
    newProjectFormSubmitCancel.textContent = "Cancel";
    newProjectFormSubmit.appendChild(newProjectFormSubmitCancel);
    return newProject;
}
function editProject() {
    const colorsArray = ["#13c7e7", "#6484c6", "#4648bd", "#d24157", "#a50d10", "#4fc972", "#cc552c",
        "#d4459a", "#b7b434", "#69a537", "#a556c6", "#35845a", "#986e34", "#582c7d", "#5e2dbb"];
    const editProject = document.createElement("div");
    editProject.id = "editproject_hidden";
    const projectInterface = document.createElement("div");
    projectInterface.id = "project--interface";
    editProject.appendChild(projectInterface);
    const newProjectTitle = document.createElement("div");
    newProjectTitle.id = "editproject--title";
    newProjectTitle.textContent = "Edit Project";
    projectInterface.appendChild(newProjectTitle);

    const newProjectForm = document.createElement("div");
    newProjectForm.id = "editproject--form";
    projectInterface.appendChild(newProjectForm);

    const newProjectFormName = document.createElement("div");
    newProjectFormName.id = "editproject--form_name";
    newProjectForm.appendChild(newProjectFormName);
    const newProjectFormColor = document.createElement("div");
    newProjectFormColor.id = "editproject--form_color";
    newProjectForm.appendChild(newProjectFormColor);

    const projectNameLabel = document.createElement("label");
    Object.assign(projectNameLabel, {
        for: "project_name",
        textContent: "Name"
    });
    newProjectFormName.appendChild(projectNameLabel);

    const projectNameInput = document.createElement("input");
    Object.assign(projectNameInput, {
        type: "text",
        name: "project_name",
        id: "project_name"
    });
    newProjectFormName.appendChild(projectNameInput);

    const projectColorLabel = document.createElement("label");
    Object.assign(projectColorLabel, {
        for: "project_color",
        textContent: "Color"
    });
    newProjectFormColor.appendChild(projectColorLabel);

    const projectColorList = document.createElement("div");
    projectColorList.className = "editproject--color_list";
    newProjectFormColor.appendChild(projectColorList);

    for (let i = 0; i < colorsArray.length; i++) {
        const listColor = document.createElement("div");
        const listColorCheck = document.createElement("span");
        listColorCheck.className = "list--color_check";
        listColor.appendChild(listColorCheck);
        listColor.style.backgroundColor = colorsArray[i];
        listColor.dataset.bgColor = colorsArray[i];
        listColor.className = "list--color";
        projectColorList.appendChild(listColor);
    }

    const newProjectFormSubmit = document.createElement("div");
    newProjectFormSubmit.id = "editproject--form_submit";
    newProjectForm.appendChild(newProjectFormSubmit);

    const newProjectFormSubmitAdd = document.createElement("div");
    newProjectFormSubmitAdd.id = "editproject--form_submit_save";
    newProjectFormSubmitAdd.textContent = "Save";
    newProjectFormSubmit.appendChild(newProjectFormSubmitAdd);
    const newProjectFormSubmitCancel = document.createElement("div");
    newProjectFormSubmitCancel.id = "editproject--form_submit_cancel";
    newProjectFormSubmitCancel.textContent = "Cancel";
    newProjectFormSubmit.appendChild(newProjectFormSubmitCancel);
    return editProject;
}
function menuDotsVerticalSvg() {
    const svgGit = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const gGit = document.createElementNS("http://www.w3.org/2000/svg", "g");

    const circleSvg1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    const circleSvg2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    const circleSvg3 = document.createElementNS("http://www.w3.org/2000/svg", "circle");

    svgGit.setAttribute('class', 'icon');
    svgGit.setAttribute('viewBox', '0 0 15 15');
    svgGit.setAttribute('width', '15px');
    svgGit.setAttribute('height', '15px');

    circleSvg1.setAttribute('cx', '7.5');
    circleSvg1.setAttribute('cy', '1.5624');
    circleSvg1.setAttribute('r', '1.5624');

    circleSvg2.setAttribute('cx', '7.5');
    circleSvg2.setAttribute('cy', '7.5');
    circleSvg2.setAttribute('r', '1.5624');

    circleSvg3.setAttribute('cx', '7.5');
    circleSvg3.setAttribute('cy', '13.4375');
    circleSvg3.setAttribute('r', '1.5624');

    gGit.appendChild(circleSvg1);
    gGit.appendChild(circleSvg2);
    gGit.appendChild(circleSvg3);

    svgGit.appendChild(gGit);
    return svgGit;
}
function projectEditBtn() {
    const projectEdit = document.createElement("div");
    projectEdit.className = "project--edit_hidden";

    const projectEditIcon = document.createElement("span");
    projectEditIcon.className = "project--edit_icon";
    projectEdit.appendChild(projectEditIcon);

    projectEditIcon.appendChild(menuDotsVerticalSvg())
    return projectEdit;
}
function pencilSvg() {
    const svgImage = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

    svgImage.setAttribute('class', 'icon');
    svgImage.setAttribute('viewBox', '0 0 24 24');
    svgImage.setAttribute('width', '15px');
    svgImage.setAttribute('height', '15px');

    path.setAttribute('d', 'M22.853,1.148a3.626,3.626,0,0,0-5.124,0L1.465,17.412A4.968,4.968,0,0,0,0,20.947V23a1,1,0,0,0,1,1H3.053a4.966,4.966,0,0,0,3.535-1.464L22.853,6.271A3.626,3.626,0,0,0,22.853,1.148ZM5.174,21.122A3.022,3.022,0,0,1,3.053,22H2V20.947a2.98,2.98,0,0,1,.879-2.121L15.222,6.483l2.3,2.3ZM21.438,4.857,18.932,7.364l-2.3-2.295,2.507-2.507a1.623,1.623,0,1,1,2.295,2.3Z');
    svgImage.appendChild(path);
    return svgImage;
}
function taskEditBtn() {
    const taskEdit = document.createElement("div");
    taskEdit.className = "task--edit_hidden";

    const taskEditIcon = document.createElement("span");
    taskEditIcon.className = "task--edit_icon";
    taskEdit.appendChild(taskEditIcon);

    taskEditIcon.appendChild(pencilSvg());
    return taskEdit;
}
function trashSvg() {
    const svgGit = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const gGit = document.createElementNS("http://www.w3.org/2000/svg", "g");
    const pathGit1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const pathRect1 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    const pathRect2 = document.createElementNS("http://www.w3.org/2000/svg", "rect");

    svgGit.setAttribute('class', 'icon');
    svgGit.setAttribute('viewBox', '0 0 24 24');
    svgGit.setAttribute('width', '15px');
    svgGit.setAttribute('height', '15px');

    pathGit1.setAttribute('d', 'M22,4H17V2a2,2,0,0,0-2-2H9A2,2,0,0,0,7,2V4H2V6H4V21a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V6h2ZM9,2h6V4H9Zm9,19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V6H18Z');

    pathRect1.setAttribute('x', '9');
    pathRect1.setAttribute('y', '10');
    pathRect1.setAttribute('width', '2');
    pathRect1.setAttribute('height', '8');

    pathRect2.setAttribute('x', '13');
    pathRect2.setAttribute('y', '10');
    pathRect2.setAttribute('width', '2');
    pathRect2.setAttribute('height', '8');

    gGit.appendChild(pathGit1);
    gGit.appendChild(pathRect1);
    gGit.appendChild(pathRect2);

    svgGit.appendChild(gGit);
    return svgGit;
}
function taskDeleteBtn() {
    const taskEdit = document.createElement("div");
    taskEdit.className = "task--del_hidden";

    const taskEditIcon = document.createElement("span");
    taskEditIcon.className = "task--del_icon";
    taskEdit.appendChild(taskEditIcon);

    taskEditIcon.appendChild(trashSvg());
    return taskEdit;
}
function projectEditMenu() {
    const editMenuOuter = document.createElement("div");
    editMenuOuter.className = "project--menuouter_hidden";

    const editMenu = document.createElement("div");
    editMenu.className = "project--menu";
    editMenuOuter.appendChild(editMenu);

    const editMenuEdit = document.createElement("div");
    const editMenuEditText = document.createElement("div");
    const editMenuEditIcon = document.createElement("div");
    editMenuEditIcon.className = "project--menu_edit_icon";
    editMenuEdit.appendChild(editMenuEditIcon);

    editMenuEditIcon.appendChild(pencilSvg());

    editMenuEditText.className = "project--menu_edit_text";
    editMenuEditText.textContent = "Edit project";
    editMenuEdit.appendChild(editMenuEditText);
    editMenuEdit.className = "project--menu_edit";
    editMenu.appendChild(editMenuEdit);

    const editMenuDelete = document.createElement("div");
    const editMenuDeleteText = document.createElement("div");
    const editMenuDeleteIcon = document.createElement("div");
    editMenuDeleteIcon.className = "project--menu_delete_icon";
    editMenuDelete.appendChild(editMenuDeleteIcon);

    editMenuDeleteIcon.appendChild(trashSvg());
    editMenuDeleteText.className = "project--menu_delete_text";
    editMenuDeleteText.textContent = "Delete project";
    editMenuDelete.appendChild(editMenuDeleteText);
    editMenuDelete.className = "project--menu_delete";
    editMenu.appendChild(editMenuDelete);

    return editMenuOuter;
}
function addTask() {
    const taskNew = document.createElement("div");
    taskNew.className = "task--new_hidden";

    const taskNewInputs = document.createElement("div");
    taskNewInputs.id = "task--new_inputs";
    taskNew.appendChild(taskNewInputs);

    const taskNameInput = document.createElement("textarea");
    taskNameInput.id = "task_name";
    taskNameInput.placeholder = "Task Name...";
    taskNameInput.rows = 1;
    taskNewInputs.appendChild(taskNameInput);

    const taskDescInput = document.createElement("textarea");
    taskDescInput.id = "task_desc";
    taskDescInput.placeholder = "Task Description...";
    taskDescInput.rows = 3;
    taskNewInputs.appendChild(taskDescInput);


    const taskSelectAndDate = document.createElement("div");
    taskSelectAndDate.id = "task--select--date";
    taskNew.appendChild(taskSelectAndDate);

    const taskSelectInput = document.createElement("div");
    taskSelectInput.id = "task_project";
    taskSelectAndDate.appendChild(taskSelectInput);

    const taskDateInput = document.createElement("div");
    taskDateInput.id = "task--date";
    taskSelectAndDate.appendChild(taskDateInput);

    let obj = JSON.parse(localStorage.getItem("preferences"));
    if (obj["sidebar"]["tab"] == "Tomorrow") {
        taskDateInput.appendChild(createTomorrow());
    } else {
        taskDateInput.appendChild(createToday());
    }
    const taskPrio = document.createElement("div");
    taskPrio.id = "task_prio";
    taskSelectAndDate.appendChild(taskPrio);
    taskPrio.appendChild(createPriority(3));

    const taskNewSubmit = document.createElement("div");
    taskNewSubmit.id = "task--new_submit";
    taskNew.appendChild(taskNewSubmit);

    const taskNewSubmitAdd = document.createElement("div");
    taskNewSubmitAdd.id = "task--new_submit_add";
    taskNewSubmitAdd.textContent = "Add Task";
    taskNewSubmit.appendChild(taskNewSubmitAdd);

    const taskNewSubmitCancel = document.createElement("div");
    taskNewSubmitCancel.id = "task--new_submit_cancel";
    taskNewSubmitCancel.textContent = "Cancel";
    taskNewSubmit.appendChild(taskNewSubmitCancel);

    return taskNew;
}
function taskProjectSelect() {
    const editMenuOuter = document.createElement("div");
    editMenuOuter.className = "task--menuouter_hidden";

    const editMenu = document.createElement("div");
    editMenu.className = "task--menu";
    editMenuOuter.appendChild(editMenu);

    return editMenuOuter;
}
function prioSvg() {
    const svgGit = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const gGit = document.createElementNS("http://www.w3.org/2000/svg", "g");
    const pathGit1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const pathRect1 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    const pathRect2 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    const pathRect3 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    const pathRect4 = document.createElementNS("http://www.w3.org/2000/svg", "rect");

    svgGit.setAttribute('class', 'icon');
    svgGit.setAttribute('viewBox', '0 0 24 24');
    svgGit.setAttribute('width', '14px');
    svgGit.setAttribute('height', '14px');

    pathGit1.setAttribute('d', 'M24,24H3a3,3,0,0,1-3-3V0H2V21a1,1,0,0,0,1,1H24Z');

    pathRect1.setAttribute('x', '14');
    pathRect1.setAttribute('y', '11');
    pathRect1.setAttribute('width', '2');
    pathRect1.setAttribute('height', '9');

    pathRect2.setAttribute('x', '6');
    pathRect2.setAttribute('y', '11');
    pathRect2.setAttribute('width', '2');
    pathRect2.setAttribute('height', '9');

    pathRect3.setAttribute('x', '18');
    pathRect3.setAttribute('y', '6');
    pathRect3.setAttribute('width', '2');
    pathRect3.setAttribute('height', '14');

    pathRect4.setAttribute('x', '10');
    pathRect4.setAttribute('y', '6');
    pathRect4.setAttribute('width', '2');
    pathRect4.setAttribute('height', '14');

    gGit.appendChild(pathGit1);
    gGit.appendChild(pathRect1);
    gGit.appendChild(pathRect2);
    gGit.appendChild(pathRect3);
    gGit.appendChild(pathRect4);

    svgGit.appendChild(gGit);
    return svgGit;
}
function createPriority(prioValue) {
    const prio = document.createElement("div");
    prio.className = "select--prio";
    prio.dataset.prio = prioValue;

    const prioIcon = document.createElement("span");
    prioIcon.className = "select--prio_icon";
    prio.appendChild(prioIcon);

    prioIcon.appendChild(prioSvg());

    switch (prioValue) {
        case 0:
            prio.style.color = "red";
            prioIcon.firstChild.style.fill = "red";
            break;
        case 1:
            prio.style.color = "orange";
            prioIcon.firstChild.style.fill = "orange";
            break;
        case 2:
            prio.style.color = "yellow";
            prioIcon.firstChild.style.fill = "yellow";
            break;
        default:
            break;
    }

    const prioText = document.createElement("span");
    prioText.className = "select--prio_text";
    prioText.textContent = `Priority ${prioValue}`;
    prio.appendChild(prioText);
    return prio;
}
function createToday() {
    const today = document.createElement("div");
    today.className = "datemenu--today";
    today.dataset.date = format(getTodayDate(), 'yyyy-MM-dd');

    const todayIcon = document.createElement("span");
    todayIcon.className = "datemenu--today_icon";
    today.appendChild(todayIcon);

    todayIcon.appendChild(sunSvg());

    const todayText = document.createElement("span");
    todayText.className = "datemenu--today_text";
    todayText.textContent = "Today";
    today.appendChild(todayText);
    return today;
}
function createTomorrow() {
    const tomorrow = document.createElement("div");
    tomorrow.className = "datemenu--tomorrow";
    tomorrow.dataset.date = format(addDays(getTodayDate(), 1), 'yyyy-MM-dd');

    const tomorrowIcon = document.createElement("span");
    tomorrowIcon.className = "datemenu--tomorrow_icon";
    tomorrow.appendChild(tomorrowIcon);

    tomorrowIcon.appendChild(sunRisingSvg());

    const tomorrowText = document.createElement("span");
    tomorrowText.className = "datemenu--tomorrow_text";
    tomorrowText.textContent = "Tomorrow";
    tomorrow.appendChild(tomorrowText);
    return tomorrow;
}
function createDay(tDate) {
    const day = document.createElement("div");
    day.className = "picked--date";
    day.dataset.date = `${format(parse(tDate, 'yyyy-MM-dd', new Date()), "yyyy-MM-dd")}`;

    const dayIcon = document.createElement("span");
    dayIcon.className = "picked--date_icon";
    day.appendChild(dayIcon);

    dayIcon.appendChild(calendarSvg())

    const dayText = document.createElement("span");
    dayText.className = "picked--date_text";
    dayText.textContent = `${format(parse(tDate, 'yyyy-MM-dd', new Date()), "dd LLL")}`;
    day.appendChild(dayText);
    return day;
}
function checkBoxSvg() {
    const svgImage = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

    svgImage.setAttribute('class', 'icon');
    svgImage.setAttribute('viewBox', '0 0 24 24');
    svgImage.setAttribute('width', '14px');
    svgImage.setAttribute('height', '14px');

    path.setAttribute('d', 'M21,0H3A3,3,0,0,0,0,3V24H24V3A3,3,0,0,0,21,0ZM10.748,17.333a2,2,0,0,1-2.829,0L3.293,12.707l1.414-1.414,4.626,4.626,9.96-9.959,1.414,1.414Z');
    svgImage.appendChild(path);
    return svgImage;
}
function taskPrioSelect() {
    const editPrioMenu = document.createElement("div");
    editPrioMenu.className = "task--outerprio_hidden";

    const editMenu = document.createElement("div");
    editMenu.className = "task--prio";
    editPrioMenu.appendChild(editMenu);

    editMenu.appendChild(createPriority(0));
    editMenu.appendChild(createPriority(1));
    editMenu.appendChild(createPriority(2));
    editMenu.appendChild(createPriority(3));
    return editPrioMenu;
}
function angelSmallRightSvg() {
    const svgImage = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

    svgImage.setAttribute('class', 'icon');
    svgImage.setAttribute('viewBox', '0 0 24 24');
    svgImage.setAttribute('width', '14px');
    svgImage.setAttribute('height', '14px');

    path.setAttribute('d', 'M15.4,9.88,10.81,5.29a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42L14,11.29a1,1,0,0,1,0,1.42L9.4,17.29a1,1,0,0,0,1.41,1.42l4.59-4.59A3,3,0,0,0,15.4,9.88Z');
    svgImage.appendChild(path);
    return svgImage;
}
function angelSmallLeftSvg() {
    const svgImage = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

    svgImage.setAttribute('class', 'icon');
    svgImage.setAttribute('viewBox', '0 0 24 24');
    svgImage.setAttribute('width', '14px');
    svgImage.setAttribute('height', '14px');

    path.setAttribute('d', 'M10.6,12.71a1,1,0,0,1,0-1.42l4.59-4.58a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L9.19,9.88a3,3,0,0,0,0,4.24l4.59,4.59a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42Z');
    svgImage.appendChild(path);
    return svgImage;
}
function overdueDateSelect() {
    const editDateMenu = document.createElement("div");
    editDateMenu.className = "overdue--selectdate_hidden";

    const editMenu = document.createElement("div");
    editMenu.className = "overdue--selectdate";
    editDateMenu.appendChild(editMenu);

    editMenu.appendChild(createToday());
    editMenu.appendChild(createTomorrow());

    //calendar
    //calendar select month
    const monthsSelect = document.createElement("div");
    monthsSelect.className = "months--select";
    editMenu.appendChild(monthsSelect);

    const monthsSelectLeft = document.createElement("div");
    monthsSelectLeft.className = "months--select_left";
    monthsSelect.appendChild(monthsSelectLeft);

    monthsSelectLeft.appendChild(angelSmallLeftSvg());

    const monthsSelectCurrent = document.createElement("div");
    monthsSelectCurrent.className = "months--select_current";
    monthsSelectCurrent.dataset.date = format(new Date(), 'yyyy-MM-dd');
    monthsSelectCurrent.textContent = format(new Date(), "LLL yyyy");
    monthsSelect.appendChild(monthsSelectCurrent);

    const monthsSelectRight = document.createElement("div");
    monthsSelectRight.className = "months--select_right";
    monthsSelect.appendChild(monthsSelectRight);

    monthsSelectRight.appendChild(angelSmallRightSvg());
    //calendar days header
    const monthDaysHeader = document.createElement("div");
    monthDaysHeader.className = "months--days_header";
    editMenu.appendChild(monthDaysHeader);
    let nameOfDaysArray = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    for (let day of nameOfDaysArray) {
        const dayOfweek = document.createElement("div");
        dayOfweek.textContent = day;
        monthDaysHeader.appendChild(dayOfweek);
    }
    //calendar days
    //every array has all dates of a single week
    const dateOfDays = document.createElement("div");
    dateOfDays.className = "months--days";
    editMenu.appendChild(dateOfDays);
    let daysArray = [[], [], [], [], [], []];
    let newDate=new Date();
    let daysOfMonth = eachDayOfInterval({
        start: newDate.setHours(0,0,0,0),
        end: lastDayOfMonth(new Date())
    });
    for (let day of daysOfMonth) {
        daysArray[getWeekOfMonth(day) - 1][getDay(day)] = day;
    }
    for (let i = 0; i < daysArray.length; i++) {
        const eachWeek = document.createElement("div");
        eachWeek.className = `months--days_week`;
        for (let k = 0; daysArray[i].length != 0 && k < daysArray[i].length; k++) {
            const eachDay = document.createElement("div");
            if (daysArray[i][k] === undefined) {
                eachDay.textContent = "";
            } else {
                eachDay.className = "day";
                eachDay.dataset.date = format(daysArray[i][k], 'yyyy-MM-dd');
                eachDay.textContent = format(daysArray[i][k], "d");
            }
            eachWeek.appendChild(eachDay);
        }
        dateOfDays.appendChild(eachWeek);
    }
    return editDateMenu;
}
function completedTaskList() {
    const completedTaskOuter = document.createElement("div");
    completedTaskOuter.className = "completedOuter_hidden";

    const completedList = document.createElement("div");
    completedList.className = "completed--list";
    completedTaskOuter.appendChild(completedList);

    return completedTaskOuter;
}
function taskDateSelect() {
    const editDateMenu = document.createElement("div");
    editDateMenu.className = "task--datemenuouter_hidden";

    const editMenu = document.createElement("div");
    editMenu.className = "task--datemenu";
    editDateMenu.appendChild(editMenu);

    editMenu.appendChild(createToday());
    editMenu.appendChild(createTomorrow());

    //calendar
    //calendar select month
    const monthsSelect = document.createElement("div");
    monthsSelect.className = "months--select";
    editMenu.appendChild(monthsSelect);

    const monthsSelectLeft = document.createElement("div");
    monthsSelectLeft.className = "months--select_left";
    monthsSelect.appendChild(monthsSelectLeft);

    monthsSelectLeft.appendChild(angelSmallLeftSvg());

    const monthsSelectCurrent = document.createElement("div");
    monthsSelectCurrent.className = "months--select_current";
    monthsSelectCurrent.dataset.date = format(new Date(), 'yyyy-MM-dd');
    monthsSelectCurrent.textContent = format(new Date(), "LLL yyyy");
    monthsSelect.appendChild(monthsSelectCurrent);

    const monthsSelectRight = document.createElement("div");
    monthsSelectRight.className = "months--select_right";
    monthsSelect.appendChild(monthsSelectRight);

    monthsSelectRight.appendChild(angelSmallRightSvg());
    //calendar days header
    const monthDaysHeader = document.createElement("div");
    monthDaysHeader.className = "months--days_header";
    editMenu.appendChild(monthDaysHeader);
    let nameOfDaysArray = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    for (let day of nameOfDaysArray) {
        const dayOfweek = document.createElement("div");
        dayOfweek.textContent = day;
        monthDaysHeader.appendChild(dayOfweek);
    }
    //calendar days
    //every array has all dates of a single week
    const dateOfDays = document.createElement("div");
    dateOfDays.className = "months--days";
    editMenu.appendChild(dateOfDays);
    let daysArray = [[], [], [], [], [], []];
    let newDate=new Date();
    let daysOfMonth = eachDayOfInterval({
        start: newDate.setHours(0,0,0,0),
        end: lastDayOfMonth(new Date())
    });
    for (let day of daysOfMonth) {
        daysArray[getWeekOfMonth(day) - 1][getDay(day)] = day;
    }
    for (let i = 0; i < daysArray.length; i++) {
        const eachWeek = document.createElement("div");
        eachWeek.className = `months--days_week`;
        for (let k = 0; daysArray[i].length != 0 && k < daysArray[i].length; k++) {
            const eachDay = document.createElement("div");
            if (daysArray[i][k] === undefined) {
                eachDay.textContent = "";
            } else {
                eachDay.className = "day";
                eachDay.dataset.date = format(daysArray[i][k], 'yyyy-MM-dd');
                eachDay.textContent = format(daysArray[i][k], "d");
            }
            eachWeek.appendChild(eachDay);
        }
        dateOfDays.appendChild(eachWeek);
    }
    return editDateMenu;
}
function getTodayDate() {
    return new Date();
}
function floatingMessage() {
    const message = document.createElement("div");
    message.className = "message--container_hidden";

    const messageText = document.createElement("div");
    messageText.className = "message--text";
    message.appendChild(messageText);

    const messageDest = document.createElement("div");
    messageDest.className = "message--dest";
    message.appendChild(messageDest);

    const messageClose = document.createElement("div");
    messageClose.className = "message--close";
    message.appendChild(messageClose);

    const messageCloseIcon = document.createElement("span");
    messageCloseIcon.className = "message--close_icon";
    messageClose.appendChild(messageCloseIcon);

    messageCloseIcon.appendChild(crossSvg());
    return message;
}
function editTask() {
    const taskNew = document.createElement("div");
    taskNew.className = "task_edit_hidden";
    //name and description
    const taskNewInputs = document.createElement("div");
    taskNewInputs.id = "task--new_inputs";
    taskNew.appendChild(taskNewInputs);
    //task name
    const taskNameInput = document.createElement("textarea");
    taskNameInput.id = "task_name";
    taskNameInput.placeholder = "Task Name...";
    taskNameInput.rows = 1;
    taskNewInputs.appendChild(taskNameInput);
    //task description
    const taskDescInput = document.createElement("textarea");
    taskDescInput.id = "task_desc";
    taskDescInput.placeholder = "Task Description...";
    taskDescInput.rows = 3;
    taskNewInputs.appendChild(taskDescInput);

    //select project, date and priority
    const taskSelectAndDate = document.createElement("div");
    taskSelectAndDate.id = "task--select--date";
    taskNew.appendChild(taskSelectAndDate);
    //select project
    const taskSelectInput = document.createElement("div");
    taskSelectInput.id = "task_project";
    taskSelectAndDate.appendChild(taskSelectInput);
    //select date
    const taskDateInput = document.createElement("div");
    taskDateInput.id = "task--date";
    taskSelectAndDate.appendChild(taskDateInput);

    let obj = JSON.parse(localStorage.getItem("preferences"));
    if (obj["sidebar"]["tab"] == "Tomorrow") {
        taskDateInput.appendChild(createTomorrow());
    } else {
        taskDateInput.appendChild(createToday());
    }
    //select prio
    const taskPrio = document.createElement("div");
    taskPrio.id = "task_prio";
    taskSelectAndDate.appendChild(taskPrio);
    taskPrio.appendChild(createPriority(3));
    //add or cancel adding task
    const taskNewSubmit = document.createElement("div");
    taskNewSubmit.id = "task--new_submit";
    taskNew.appendChild(taskNewSubmit);

    const taskNewSubmitAdd = document.createElement("div");
    taskNewSubmitAdd.id = "task--new_submit_add";
    taskNewSubmitAdd.textContent = "Save";
    taskNewSubmit.appendChild(taskNewSubmitAdd);

    const taskNewSubmitCancel = document.createElement("div");
    taskNewSubmitCancel.id = "task--new_submit_cancel";
    taskNewSubmitCancel.textContent = "Cancel";
    taskNewSubmit.appendChild(taskNewSubmitCancel);

    return taskNew;
}
function createStorage() {
    let check = localStorage.getItem("todoList");
    if (check === null) {
        let todoList = { project: [{ id: "id1", name: "default", color: "var(--default-font-color)", count: 0 }], task: [], completedTasks: [] };
        let preferences = { sidebar: { listState: true, tab: "Today" }, lastProject: "id1", theme: "lightTheme" };
        localStorage.setItem("todoList", JSON.stringify(todoList));
        localStorage.setItem("preferences", JSON.stringify(preferences));
    }
}
function selectCurrentTab() {
    let objP = JSON.parse(localStorage.getItem("preferences"));
    let currentTab = objP["sidebar"]["tab"];
    let tab;
    switch (currentTab) {
        case "Today":
            tab = document.querySelector(".sidebar--header_today");
            if (document.querySelector(".sidebar--header_clicked")) {
                document.querySelector(".sidebar--header_clicked").classList.remove("sidebar--header_clicked");
            }
            tab.classList.add("sidebar--header_clicked");
            break;
        case "Tomorrow":
            tab = document.querySelector(".sidebar--header_tomorrow");
            if (document.querySelector(".sidebar--header_clicked")) {
                document.querySelector(".sidebar--header_clicked").classList.remove("sidebar--header_clicked");
            }
            tab.classList.add("sidebar--header_clicked");
            break;
        case "Upcoming":
            tab = document.querySelector(".sidebar--header_upcoming");
            if (document.querySelector(".sidebar--header_clicked")) {
                document.querySelector(".sidebar--header_clicked").classList.remove("sidebar--header_clicked");
            }
            tab.classList.add("sidebar--header_clicked");
            break;
        default:
            tab = document.querySelector(`#${currentTab}`);
            if (document.querySelector(".sidebar--header_clicked")) {
                document.querySelector(".sidebar--header_clicked").classList.remove("sidebar--header_clicked");
            }
            if (tab == null) {
                tab = document.querySelector(".sidebar--header_today");
                objP["sidebar"]["tab"] = "Today";
                localStorage.setItem("preferences", JSON.stringify(objP));
            }
            tab.classList.add("sidebar--header_clicked");

            break;
    }
}
function getTheme() {
    let objP = JSON.parse(localStorage.getItem("preferences"));
    return objP["theme"];
}
function buildSite() {
    const content = document.createElement("div");
    content.id = "content";
    createStorage();
    content.className = getTheme();
    content.append(header(), sidebar(), main(), addProject(), showTaskSummary(), editProject(), projectEditMenu(), taskProjectSelect(), taskDateSelect(), floatingMessage(), taskPrioSelect(), overdueDateSelect(), completedTaskList());
    document.body.appendChild(content);
    p.populateProjectList();
    t.populateCurrentTab();
    p.populateProjectSelect();
    selectCurrentTab();
}
export { checkBoxSvg, upSvg, downSvg, createPriority, createDay, createToday, createTomorrow, mainGroup, buildSite, sidebarProject, projectEditBtn, taskEditBtn, taskDeleteBtn };