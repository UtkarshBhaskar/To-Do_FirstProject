const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("ListContents");

function addTask(){                                 /*the task adding function upon the usage of the Add button*/
    if(inputBox.value==''){
        alert("You must write something!")
    }
    else{
        let li = document.createElement("li");      /*creates an HTML element li to store the contents of the value of the inputBox. li is an HTML LI element*/
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);              /*appends value of li to the unordered list*/
        let span = document.createElement("span");  /*span is an html element that holds the cross icon, which will be used to delete the to-do entries. span is an HTMLSPANElement*/
        span.innerHTML = "\u00d7";                  /*this code is that for the cross icon*/
        li.appendChild(span);   
    }
    inputBox.value="";                              /*removing the text from input box after an add click is executed*/
    saveData();                                     /*saving data*/
}

listContainer.addEventListener("click", function (e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked"); /*toggle function to check and uncheck if click is over list element*/
            saveData(); /*saving data*/
        }
        else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove(); /*removes the entry if the click is over span element*/
            saveData(); /*saving data*/
        }
    }, false)

function saveData(){                                /* saves the data in local storage, in a variable stored_data so that once the webpage is refreshed it doesnt get lost*/
    localStorage.setItem("stored_data", listContainer.innerHTML);
}
function showData(){                
    listContainer.innerHTML = localStorage.getItem("stored_data");
}
showData();                                         /*calling the showData function to display the data stored in stored_data.*/       