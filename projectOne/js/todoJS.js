
   var textBox = document.getElementById("textBox"); // input variable
   var addButton = document.getElementById("addButton"); //button variable
   var todoList = document.getElementById("todoList"); // ul block variable

   function addTask(){
       var item = document.createElement("li"); 
       var checkbox = document.createElement('input');
       checkbox.type = 'checkbox';

       checkbox.innerHTML = inputText; // lisätään checkbox elementti tekstiin, joka on kirjoitettu kentässä
       
       var inputText = document.getElementById("textBox").value; // annetaan arvo
       item.innerHTML = inputText;
       if (inputText === '') {
        alert("You must write something!"); // error viesti jos kenttä on tyhja
        return;
      } 
           
       document.getElementById("todoList").appendChild(checkbox);
       document.getElementById("todoList").appendChild(item);

       document.getElementById("textBox").value = ""; // poistetaan kirjoitettu tehtävä kentästä
   }

function clearTasks (){  // funktio joka poistaa tehtävät todo-listalta
    var list = document.getElementById("todoList");
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
      }
}
