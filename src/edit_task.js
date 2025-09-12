import home_page from "./home";
import project_list from ".";
import show_details from "./show_details";

export default function edit_task_DOM(e)
{
    let info_before = document.querySelector(".info");
    if(info_before) 
    {
        info_before.remove();
        home_page();
    }

    e.stopPropagation();
    let project_id = e.target.dataset.project_id;
    let task_id = e.target.dataset.task_id;
    let task_id_escaped = CSS.escape(task_id);

    let task_id_div = document.querySelector(`#${task_id_escaped}`);
    task_id_div.removeEventListener("click", show_details);
    let project = project_list.filter((project)=>project_id == project.id)[0];
    let task_edited;
    project.task_list.forEach(function(task)
    {
        if(task.id == task_id)
        {
            task_edited = task;
        }
    });


    let info = document.createElement("div");
    
    info.classList.add("info");

    info.innerHTML =  `<form class="edit_form">Title <input type="text" name="title" id="title" placeholder="required" value="${task_edited.title || " "}">`+
                        `Description <input type="text" name="description" id="description" placeholder="optional" value="${task_edited.description || " "}">`+
                        `Priority <input type="text" name="priority" id="priority" placeholder="optional" value="${task_edited.priority || " "}">`+
                        `Due_date <input type="text" name="due_date" id="due_date" placeholder="optional" value="${task_edited.due_date || " "}">`+
                        `Notes <input type="text" name="notes" id="notes" placeholder="optional" value="${task_edited.notes || " "}"></input> `+
                        `<button type="submit" class="edit_submit">Edit</button></form>`
    task_id_div.innerHTML= " ";
    task_id_div.appendChild(info);
    let form = document.querySelector(".edit_form");
    form.title.focus();

    let edit_submit = document.querySelector(".edit_submit");
    edit_submit.addEventListener("click", function(e){
        e.stopPropagation();
        e.preventDefault();
        let form = document.querySelector(".edit_form");
        task_edited.edit_task(form.title.value, form.description.value,form.due_date.value, form.priority.value, form.notes.value);
        home_page();
    });

}