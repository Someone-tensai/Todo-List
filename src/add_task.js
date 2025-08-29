import { Project } from "./project";
import { Task } from "./task";
export default function add_task()
{

    let body = document.querySelector("body");
    let form = document.querySelector("form");
    form.hidden = false;

    let dialog = document.createElement("dialog");
    dialog.appendChild(form);

    body.appendChild(dialog);
    dialog.showModal();
    console.log("Add Button Clicked");
}

let add_submit = document.querySelector(".add_submit");
add_submit.addEventListener("click", function(){});

