import project_list from ".";
import { Task } from "./task";
import home_page from "./home";

export default function add_task(e) {
  let id = e.target.value;
  let id_escaped = CSS.escape(e.target.value);
  let project_id = document.querySelector(`#${id_escaped}`);
  let info_before = document.querySelector(".info");
  if (info_before) {
    info_before.remove();
  }
  let info = document.createElement("div");
  let current_date = new Date();
  current_date =  current_date.toISOString().split('T')[0];
  console.log(current_date);
  info.classList.add("info");
  
  info.innerHTML =
    '<form class="form">Title <input type="text" name="title" id="title" placeholder="required">' +
    'Description <input type="text" name="description" id="description" placeholder="optional">' +
    'Priority <input type="text" name="priority" id="priority" placeholder="optional">' +
    `Due_date <input type="date" name="due_date" id="due_date" placeholder="optional"  min="${current_date}">` +
    'Notes <input type="text" name="notes" id="notes" placeholder="optional"></input>' +
    '<button type="submit" class="add_submit">Submit</button></form>';
  project_id.append(info);
  let form = document.querySelector(".form");
  form.title.focus();

  let add_submit = document.querySelector(".add_submit");
  add_submit.addEventListener("click", function (e) {
    e.preventDefault();
    let form = document.querySelector(".form");
    if (!form.title.value) {
      form.title.placeholder = "Provide a Title";
      return;
    }
    let added_task = new Task(
      form.title.value,
      form.description.value,
      form.priority.value,
      form.due_date.value,
      form.notes.value,
    );
    project_list.filter((project) => project.id == id)[0].add_task(added_task);
    info.hidden = true;
    home_page();

    console.log("Task Submitted");
  });
}
