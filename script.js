let inputvalue = document.getElementById("input");
let list = document.getElementById("list");

function submit() {
    let value = inputvalue.value.trim();  
    if (value === "") {
        alert("Please enter a valid value");  
    } else {
 
        let listItem = document.createElement("li");
        listItem.style.textAlign ="center"; 
        listItem.style.color = "white";
        listItem.style.fontSize="1.5rem"
        listItem.textContent = value;

       
        let editButton = document.createElement("button");
        editButton.style.width = "8rem";
        editButton.style.height="2.4rem"
        editButton.style.backgroundColor="white"
        editButton.style.border="2px solid black"
        editButton.style.margin="1rem"
        editButton.textContent = "Edit";
        editButton.onclick = function() {
            editItem(listItem, inputvalue);
        };

       
        let deleteButton = document.createElement("button");
        deleteButton.style.width = "8rem";
        deleteButton.style.height="2.4rem"
        deleteButton.style.backgroundColor="white"
        deleteButton.style.border="2px solid black"
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
            list.removeChild(listItem);
        };

        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);

       
        list.appendChild(listItem);

         
        inputvalue.value = "";
    }
}

function editItem(listItem, input) {

    input.value = listItem.firstChild.textContent;

   
    input.focus(); 
}
