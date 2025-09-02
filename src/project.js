
export class Project {

    task_list = [];
    constructor(name="Default Project")
    {
        this.name = name;
    }

    delete_project()
    {
        this.task_list.splice(0, this.task_list.length);
    }
    add_task(task)
    {
        this.task_list.push(task);
    }

    delete_task(task)
    {
        this.task_list = this.task_list.filter((task_m) => task_m.id != task.id);
    }
    display_tasks_info()
    {
        this.task_list.forEach(function(task){task.display(); console.log("\n");});
    }
}