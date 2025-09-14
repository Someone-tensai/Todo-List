import home_page from "./home";
import project_list from ".";
import { Project } from "./project";
export default function add_project() {
  let sidebar = document.querySelector(".sidebar");
  let project_add_form = document.createElement("div");
  project_add_form.classList.add("info");
  project_add_form.innerHTML =
    '<form class="form project">Name <input type="text" name="name" id="name" placeholder="required">' +
    '<button type="submit" class="add_project_submit">Submit</button></form>';
  sidebar.append(project_add_form);

  let add_project_button = document.querySelector(".add_project_submit");
  add_project_button.addEventListener("click", function (e) {
    e.preventDefault();

    let form = document.querySelector(".form.project");
    let name = form.name.value;
    if (!name) {
      alert("FUCKING NAME");
    }

    let new_project = new Project(name);
    project_list.push(new_project);

    
    home_page();
  });
}
