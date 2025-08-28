import { Task } from "./task";

export class Project {
    task_list = [];
    constructor(task)
    {
        this.task_list.push(task);
    }

    add_task(task)
    {
        this.task_list.push(task);
    }

    display_tasks_info()
    {
        for(const task of this.task_list)
        {
            task.display();
            console.log("\n");
        }
    }

}