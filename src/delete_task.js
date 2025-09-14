import home_page from "./home";
import project_list, { update_storage } from ".";
import { update_local_storage } from ".";
export default function delete_task(e) {
  e.stopPropagation();
  let choice = prompt(
    "Do you really want to delete this task?(It's Permanent)(y or n)",
  ).toLowerCase();

  if (choice == "y") {
    let project_id = e.target.dataset.project_id;
    let task_id = e.target.dataset.task_id;

    let project = project_list.filter((project) => project_id == project.id)[0];
    console.log(project);
    project.task_list.forEach(function (task) {
      if (task.id == task_id) {
        project.delete_task(task);
      }
    });
    update_local_storage();
    console.log(project_id);
    console.log(task_id);
    home_page();
  }
}
