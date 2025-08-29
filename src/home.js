export default function on_home_clicked()
{
    let body = document.querySelector("body");

    let task_container = document.querySelector(".task_container");
    task_container.classList.add("task_container");

    let project = document.querySelector(".project");
    project.classList.add("project");
    project.textContent = "Default Project";

    let task1 = document.createElement("div");
    task1.textContent = "- Default Task";
    
    task_container.prepend(task1);
    task_container.prepend(project);

} 