var input = document.getElementById("inputNote")

var addBtn = document.getElementById("button-addon2")

var BOX = document.getElementById("content")

var mainC;

addBtn.addEventListener("click", addNote)

function addNote()
{    
    // var p = document.getElementById("content")
    // p.innerHTML = input.value;
    mainC = document.getElementById("mainContent")
    const noteDiv = document.createElement('div');
    noteDiv.innerHTML = '<div class="card d-flex justify-content-center align-items-center shadow  "  style="width: 30rem;"><div class="card-body" style="width: 30rem;"><p class="card-text" id="content"></p><a href="#" class="btn btn-danger" id="del" onclick="deleteNote(event)">Delete Note</a></div></div>'
    const pElement = noteDiv.querySelector('.card-text');
    pElement.innerHTML = input.value
    input.value = ""
    mainC.appendChild(noteDiv)
    
}


function deleteNote(event)
{   
    input.value = ""
    const noteDiv = event.target.closest(".card");
      if (noteDiv) {
        noteDiv.remove();
      }
    
}


