/*
Todo List Application

    ** Structure 
    - Project 1
        - Todo Tasks
    - Project 2
        - Todo Tasks
    
    ** Project Structure
    - Class with 

        * Properties
            - Array of Tasks
        * Methods 
            - delete_project()
            - add_task()
            - delete_task()

    ** Task Structure
    - Class with 

        * Properties
            - Id
            - Title
            - Description
            - Due Date
            - Priority
            - notes
        
        * Methods
            - get_id()
            - edit_due_date()
            - edit_title()
            - edit_priority()
            - edit_notes()
            - edit_description()

*/
import { Project } from "../project";
import { Task } from "../task";
const task = new Task("Todo List", "Make a Todo List", "2082/10/10" , "1" , "None");
const task1 = new Task("Test Task", "Testing", "2082/02/10" , "0" , "Something");
const project1 = new Project(task); 
project1.add_task(task1);
project1.display_tasks_info();

