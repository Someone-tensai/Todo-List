import project_list from ".";
import add_task from "./add_task";

export default function on_home_clicked() {

  let task_container = document.querySelector(".task_container");
  task_container.classList.add("task_container");
  
  
  let sidebar = document.querySelector(".sidebar");

  for (const project of project_list)
    {
        let sidebar_div = document.createElement("div");
        sidebar_div.textContent = project.name;
        let project_div = document.querySelector(".project_list");

        let project_title = document.createElement("div");
        project_title.classList.add("project");
        project_title.textContent = project.name;

        
        project_div.append(project_title);
    
        task_container.appendChild(project_div);
        for (const task of project.task_list) 
        {
            let task1 = document.createElement("div");
            task1.textContent = task.title;
            task1.classList.add("task");
            project_div.append(task1);
        }
        
        let add_div = document.createElement("div");

        let add_task_button = document.createElement("button");
        add_task_button.textContent = "Add Task";
        add_task_button.classList.add("add_button");
        add_task_button.addEventListener("click", add_task);

        add_div.appendChild(add_task_button);
        project_div.appendChild(add_div);

        sidebar.append(sidebar_div);
  }

  
  
}
