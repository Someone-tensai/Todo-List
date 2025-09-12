import project_list from ".";
import add_task from "./add_task";
import edit_task from "./edit_task";
import delete_task from "./delete_task";
import add_project from "./add_project";
import show_details from "./show_details";
export default function home_page() {

  let body = document.querySelector("body");
  
  let task_container = document.querySelector(".task_container");
  task_container.innerHTML = "";
  task_container.classList.add("task_container");
  
  
  let sidebar = document.querySelector(".sidebar");
  sidebar.innerHTML = "";
  let sidebar_title = document.createElement("div");
  sidebar_title.classList.add("title");
  sidebar_title.textContent = "Your Projects";
  sidebar.appendChild(sidebar_title);


  for (const project of project_list)
    {
        let sidebar_div = document.createElement("div");
        sidebar_div.textContent = project.name;
        sidebar_div.classList.add("sidebar_div");

        let project_div = document.createElement("div");
        project_div.classList.add("project_list");

        let project_title = document.createElement("div");
        project_title.classList.add("project");
        project_title.textContent = project.name;

        project_div.id = project.id;
        project_div.append(project_title);
    
        
        for (const task of project.task_list) 
        {
            let task1 = document.createElement("div");
            task1.id = task.id;
            task1.dataset.project_id = project.id;
            let edit_task_button = document.createElement("button");
            edit_task_button.textContent ="Edit";
            edit_task_button.dataset.task_id = task.id;
            edit_task_button.dataset.project_id = project.id;
            edit_task_button.addEventListener("click", edit_task);
          
          
            let delete_task_button = document.createElement("button");
            delete_task_button.textContent = "Delete";
            delete_task_button.dataset.task_id = task.id;
            delete_task_button.dataset.project_id = project.id;
            delete_task_button.addEventListener("click", delete_task);

            let task_title = document.createElement("div");
            
            task_title.textContent = task.title;
            task1.append(task_title);
            task1.append(edit_task_button);
            task1.append(delete_task_button);
            task1.classList.add("task");
            task1.addEventListener("click", show_details);
            project_div.append(task1);
        }
        task_container.appendChild(project_div);
        let add_div = document.createElement("div");

        let add_task_button = document.createElement("button");
        add_task_button.textContent = "Add Task";
        add_task_button.value = project.id;
        add_task_button.classList.add("add_button");
        add_task_button.addEventListener("click", add_task);

        add_div.appendChild(add_task_button);
        project_div.appendChild(add_div);

        sidebar.append(sidebar_div);
        
  }
      let add_project_button = document.createElement("button");
        add_project_button.textContent ="New Project";
        sidebar.append(add_project_button);

        add_project_button.addEventListener("click",add_project);
  
}
