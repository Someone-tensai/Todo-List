/*
Todo List Application

DOM Manipulation

    * Basic Page Structure
        - Today's Tasks(Heading)
        (Sorted by Priority)
        - Task1
        - Task2 
        - 

*/
import { Project } from "./project";
import { Task } from "./task";
import on_home_clicked from "./home";

import "./index.css";


document.addEventListener("DOMContentLoaded", on_home_clicked);



let project_list = [];
let project = new Project();
let task = new Task("Todo List", "Make a Todo List", "2082/10/10" , "1" , "None");
let task1 = new Task("Test Task", "Testing", "2082/02/10" , "0" , "Something");

project.add_task(task);
project.add_task(task1);
project_list.push(project);


let project2 = new Project("Project 2");
let task3 = new Task("Another one", "HAHAHAH", "HEHEH", "2", "OHOHO");
project2.add_task(task3);
project_list.push(project2);
export default project_list;





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
