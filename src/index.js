import on_initial_load from "./inital_load";
import menu_clicked from "./menu";
import contact_clicked from "./contact";
import "./index.css";
console.log("HEHEHEHEHEEH");
document.addEventListener("DOMContentLoaded", on_initial_load);

let home = document.querySelector(".Home");
home.addEventListener("click", on_initial_load);

let menu = document.querySelector(".Menu");
menu.addEventListener("click", menu_clicked);

let contact = document.querySelector(".Contact");
contact.addEventListener("click", contact_clicked);