import project_list from ".";
import { Task } from "./task";
import on_home_clicked from "./home";


export default function add_task(e)
{
    let body = document.querySelector("body");
    let id = e.target.value;
    let id_escaped = CSS.escape(e.target.value);
    console.log(id);
    let project_id = document.querySelector(`#${id_escaped}`);
    let info_before = document.querySelector(".info");
    if(info_before) 
    {
        info_before.remove();
    }
    let info = document.createElement("div");
    info.classList.add("info");

    info.innerHTML =  '<form class="form">Title <input type="text" name="title" id="title" placeholder="required">'+
                        'Description <input type="text" name="description" id="description" placeholder="optional">'+
                        'Priority <input type="text" name="priority" id="priority" placeholder="optional">'+
                        'Due_date <input type="text" name="due_date" id="due_date" placeholder="optional">'+
                        'Notes <input type="text" name="notes" id="notes" placeholder="optional"></input>'+
                        '<button type="submit" class="add_submit">Submit</button></form>'
    console.log(project_id);
    project_id.append(info);
    let form = document.querySelector(".form");
    form.title.focus();


    let add_submit = document.querySelector(".add_submit");
    add_submit.addEventListener("click", function(e){
 
        e.preventDefault();
        let form = document.querySelector(".form");
        console.log(form.title.value);
        if(!form.title.value)
        {
            form.title.placeholder = "Provide a Title";
            return;
        }
        let added_task = new Task(form.title.value);
        console.log(project_list);
        project_list.filter((project)=> project.id == id)[0].add_task(added_task);
        info.hidden = true;
        on_home_clicked();
        
        console.log("Task Submitted");
    });
    

}

