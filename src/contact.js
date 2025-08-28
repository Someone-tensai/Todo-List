function contact_clicked()
{
    let content = document.querySelector("#content");
    content.innerHTML = "";
    
    let head = document.createElement("h1");
    head.textContent = "Contact Us";
    content.appendChild(head);

    let contact = document.createElement("div");
    contact.classList.add("contact");

    let number = document.createElement("div");
    number.textContent = "Phone Number:";
    contact.appendChild(number);

    let phone = document.createElement("div");
    phone.textContent = "123456789";
    contact.appendChild(phone);


    let email = document.createElement("div");
    email.textContent = "Email:";
    contact.appendChild(email);

    let email_address = document.createElement("div");
    email_address.textContent = "abc_def@gmail.com";
    contact.appendChild(email_address);

    let address_header = document.createElement("div");
    address_header.textContent = "Address:";
    contact.appendChild(address_header);

    let address = document.createElement("div");
    address.textContent = "Somewhere-4,Someone";
    contact.appendChild(address);

    let last = document.createElement("div");
    last.classList.add("last");

    let fb = document.createElement("div");
    fb.classList.add("last_items");
    fb.textContent = "fb";
    last.appendChild(fb);

      let linked_in = document.createElement("div");
    linked_in.classList.add("last_items");
    linked_in.textContent = "linked_in";
    last.appendChild(linked_in);

      let github = document.createElement("div");
    github.classList.add("last_items");
    github.textContent = "github";
    last.appendChild(github);
    contact.appendChild(last);
    content.appendChild(contact);
}

export default contact_clicked;