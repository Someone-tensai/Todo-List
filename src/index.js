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

import on_home_clicked from "./home";
import add_task from "./add_task";
import "./index.css";


document.addEventListener("DOMContentLoaded", on_home_clicked);

let add_button = document.querySelector(".add_button");
add_button.addEventListener("click", add_task);






// let task = new Task("Todo List", "Make a Todo List", "2082/10/10" , "1" , "None");
// let task1 = new Task("Test Task", "Testing", "2082/02/10" , "0" , "Something");
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
