import { Project } from "./project";
import { Task } from "./task";
import on_home_clicked from "./home";

import "./index.css";

document.addEventListener("DOMContentLoaded", on_home_clicked);

let project_list = [];
let project = new Project();
let task = new Task("Todo List", "Make a Todo List", "2082/10/10", "1", "None");
let task1 = new Task("Test Task", "Testing", "2082/02/10", "0", "Something");

project.add_task(task);
project.add_task(task1);
project_list.push(project);

let project2 = new Project("Project 2");
let task3 = new Task("Another one", "HAHAHAH", "HEHEH", "2", "OHOHO");
project2.add_task(task3);
project_list.push(project2);

if(!localStorage.getItem("projects"))
{
    localStorage.setItem("projects", JSON.stringify(project_list));
}
else
{
    let projects = JSON.parse(localStorage.getItem("projects"));
    project_list = [];
    for(let project_item of projects)
    {
        console.log(project_item);
        let new_project = new Project(project_item.name, project_item.id);
        for(let task_item of project_item.task_list)
        {
            let new_task = new Task(task_item.title, task_item.description, task_item.due_date, task_item.priority,task_item.notes, task_item.id);
            new_project.add_task(new_task);
        }
        project_list.push(new_project);
    }
    console.log(project_list);
}
export default project_list;
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

export function update_local_storage()
{
    if(storageAvailable("localStorage"))
    {
      localStorage.setItem("projects", JSON.stringify(project_list));
    }
}
// const project1 = new Project(task);
// project1.add_task(task1);

// // project1.display_tasks_info();
// task1.edit_description("FUCKING HELL");
// project1.delete_task(task1);
// // project1.display_tasks_info();
// // task1.display();
// project1.display_tasks_info();
// project1.delete_project();
// project1.display_tasks_info();
