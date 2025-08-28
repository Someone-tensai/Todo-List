
function menu_clicked()
{
    let content = document.querySelector("#content");
    content.innerHTML = "";

    let head = document.createElement("h1");
    head.textContent = "Menu";
    content.appendChild(head);

    let menu = document.createElement("div");
    menu.classList.add("menu");

    let item = document.createElement("div");
    let price = document.createElement("div");

    item.textContent = "Items";
    price.textContent = "Prices";
    item.style.fontSize = "32px";
    price.style.fontSize = "32px";
    menu.appendChild(item);
    menu.appendChild(price);

    let item1 = document.createElement("div");
    let price1 = document.createElement("div"); 
    item1.textContent = "Item1";
    price1.textContent = "Price1";
    menu.appendChild(item1);
    menu.appendChild(price1);


    let item2 = document.createElement("div");
    let price2 = document.createElement("div"); 
    item2.textContent = "Item2";
    price2.textContent = "Price2";
    menu.appendChild(item2);
    menu.appendChild(price2);

    let item3 = document.createElement("div");
    let price3 = document.createElement("div"); 
    item3.textContent = "Item3";
    price3.textContent = "Price3";
    menu.appendChild(item3);
    menu.appendChild(price3);

    let item4 = document.createElement("div");
    let price4 = document.createElement("div"); 
    item4.textContent = "Item4";
    price4.textContent = "Price4";
    menu.appendChild(item4);
    menu.appendChild(price4);

    content.appendChild(menu);
}

export default menu_clicked;