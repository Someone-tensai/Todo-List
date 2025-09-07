import home_page from "./home";
import project_list from ".";

export default function delete_task(e)
{
    let project_id = e.target.dataset.project_id;
    let task_id = e.target.dataset.task_id;
    
    let project = project_list.filter((project)=>project_id == project.id)[0];
    console.log(project);
    project.task_list.forEach(function(task)
    {
        if(task.id == task_id)
        {
            project.delete_task(task);
        }
    });
    console.log(project_id);
    console.log(task_id);
    home_page();
}