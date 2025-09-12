import project_list from ".";
import home_page from "./home";

let body = document.querySelector("body");
export default function show_details(e)
{
    e.stopPropagation();
   
    let task_id = e.target.id;
    let project_id = e.target.dataset.project_id;
    let task_id_escaped = CSS.escape(task_id);
    let task_id_div = document.querySelector(`#${task_id_escaped}`);
    console.log(task_id);
    let project = project_list.filter((project)=>project_id == project.id)[0];
    let task_clicked;
    project.task_list.forEach(function(task)
    {
        if(task.id == task_id)
        {
            task_clicked = task;
        }
    });
    console.log(project_list);
    task_id_div.innerHTML = " ";
    task_id_div.textContent = `${task_clicked.title}\n${task_clicked.description}\n${task_clicked.due_date}\n${task_clicked.priority}\n${task_clicked.notes}`;
    task_id_div.removeEventListener("click", show_details);
    
    body.addEventListener("click", body_clicked);
    
}

function body_clicked()
{
    console.log("Body Event Listener");
    body.removeEventListener("click", body_clicked);
    home_page();
}