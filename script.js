const notescontainer = document.getElementById('notes-container');
const btn = document.getElementById('btn');
let notes = document.querySelectorAll('.notes');


function storeNotes(){
    localStorage.setItem("notes",notescontainer.innerHTML);
}

function getNotes(){
    notescontainer.innerHTML = localStorage.getItem("notes");
}
getNotes();
btn.addEventListener('click',function(){
    let p = document.createElement('p');
    let img = document.createElement('img');
    p.className = "notes";
    img.src = "./delete.png"
    p.setAttribute("placeholder","notes")
    p.setAttribute("contenteditable","true");
    notescontainer.appendChild(p).appendChild(img);
})

notescontainer.addEventListener('click',function(e){
    if(e.target.tagName==='IMG'){
        e.target.parentElement.remove();//Here we can also us the e.target.parentNode property to acess parent node
        storeNotes();
    }
    else if(e.target.tagName === 'P'){
        notes = document.querySelectorAll('.notes');
        notes.forEach(function (nt){
            nt.addEventListener('keyup',function(){
                storeNotes();
            })
        })
    }
})
