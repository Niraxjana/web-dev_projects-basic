//id = showpop
// display overlay and popup-box

var overlay = document.querySelector(".overlay")
var popupbox = document.querySelector(".popup-box")
var addbutton = document.getElementById("showpop")


addbutton.addEventListener("click",function(){
    popupbox.style.display="block";
    overlay.style.display="block";
});

//cancel button
var cancelnote = document.getElementById("cancel-note")
cancelnote.addEventListener("click", function(event){
    event.preventDefault()
     popupbox.style.display="none";
    overlay.style.display="none";
})

//select container, note-title,notes,add-note

var container = document.querySelector(".container")
var addnote = document.getElementById("add-note")
var notetitle = document.getElementById("note-title")
var notes = document.getElementById("notes")

addnote.addEventListener("click", function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","note-container")
   
  div.innerHTML = `
    <h2>${notetitle.value}</h2>
    <h5>${notes.value}</h5>
     <button onclick ="deletenote(event)">Delete</button>
        
  `;
//use only variable
    container.append(div)
    popupbox.style.display="none";
    overlay.style.display="none";
})

function deletenote(event){
    event.target.parentElement.remove()
}