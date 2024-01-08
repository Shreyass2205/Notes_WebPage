const btnAdd = document.querySelector(".btn_add");

btnAdd.addEventListener("click", ()=> addNote());

function addNote(text = "") {
	const note = document.createElement("div");
    note.classList.add("note-wrapper");
    note.innerHTML = `<div class="operations">
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
	    </div>
  
        <div class="main ${text ? "" : "hidden"}"></div>
	    <textarea class="${text ? "hidden" : ""}"></textarea>`;

    const editBtn = note.querySelector(".edit");
    const mainEl = note.querySelector(".main");
    const textAreaEl = note.querySelector("textarea");
    const deleteBtn = note.querySelector(".delete");

    deleteBtn.addEventListener("click", () => {
        note.remove();
    });
  
	editBtn.addEventListener("click", () => {
  	    mainEl.classList.toggle("hidden");
  	    textAreaEl.classList.toggle("hidden");
    });
  
    textAreaEl.addEventListener("input", (e) => {
  	    const { value } = e.target;
        mainEl.innerHTML = value;
        updates();
    });
 
    document.body.appendChild(note);
}

function updates() {
	const noteText = document.querySelectorAll("textarea");
    const notes = [];
  
    noteText.forEach((note) => notes.push(note.value));
    localStorage.setItem("notes", JSON.stringify(notes));
}