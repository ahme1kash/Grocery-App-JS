let btnElem = document.getElementsByClassName("add-new")[0];
let olElem = document.getElementsByClassName("list-items")[0];

let count =0 ;
btnElem.addEventListener('click',(e)=>{
    let trimmedList = olElem.textContent.trim();
    let grocery_items = trimmedList.split("🗑");

    e.preventDefault();
    count+=1

    // Add new grocery item in the unordered list
    let listElem = document.createElement("li");
    let inputElem = document.querySelector("#grocery-list");
    let item = inputElem.value;
    listElem.textContent=item;
    listElem.style.paddingLeft="1em";
    listElem.classList.add("item",`item${count}`)
    inputElem.value = "";


// Create Remove item grocery item from the unordered list.

    let removeElem = document.createElement("span");
    removeElem.innerHTML = "&#128465;" ;
    removeElem.classList.add('remove-item')
    removeElem.style.position = "absolute";
    removeElem.style.right = "10%";
    removeElem.style.cursor = "pointer"
    removeElem.style.marginTop = "-0.4em";
    removeElem.style.fontSize = "1.4em";



    removeElem.style.tool = "default"
    if(listElem.textContent.length >0 && listElem.textContent.length <30) {
        // console.log(listElem.textContent.length )
        if(grocery_items.includes(listElem.textContent.trim())){
            alert("Grocery item already in the list ")

        }
        else {
            listElem.append(removeElem);
            olElem.append(listElem);
            console.log(grocery_items)
        }
    }

    else{
        alert("Try to add Grocery in few words.")
    }


 // Remove Grocery item on click


    removeElem.addEventListener('click',(e)=>{
        console.log(e)
        listElem.remove(e)
        alert("Grocery item Removed Successfully")
    })



})