export class Task {

    constructor(title, description, due_date, priority,notes)
    {
        this.id = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.due_date = due_date;
        this.priority = priority;
        this.notes = notes;
    }

    edit_title()
    {

    }

    edit_description()
    {

    }

    edit_due_date()
    {

    }
    edit_priority()
    {

    }
    edit_notes()
    {

    }

    display()
    {
        console.log(`id: ${this.id}`);
        console.log(`title: ${this.title}`);
        console.log(`description: ${this.description}`);
        console.log(`due_date: ${this.due_date}`);
        console.log(`priority: ${this.priority}`);
        console.log(`notes: ${this.notes}`);
    }
}

