let notes = JSON.parse(localStorage.getItem("notes")) || [];
let deleteMode = false;
notes.forEach(note => createCard(note));
const note_msg = document.getElementById("new_note");
const note_title = document.getElementById("new_note_title");
const cardText = document.querySelector(".card-text");
const cardTitle = document.querySelector(".card-title");

document.getElementById("Clr").addEventListener("click", function(){
    deleteMode = true;
    document.body.classList.add("delete-mode");
});

document.getElementById("cards-container").addEventListener("click", (e) => {
    if (!deleteMode) return;
    const card = e.target.closest(".card");
    if (!card) return;
    const id = Number(card.dataset.id);
    notes = notes.filter(note => note.id !== id);
    localStorage.setItem("notes", JSON.stringify(notes));
    card.remove();
    deleteMode = false;
    document.body.classList.remove("delete-mode");
});

document.getElementById("Add").addEventListener("click", function() {
    document.getElementById("popupOverlay").style.display = "block";
});

document.getElementById("closePopup").addEventListener("click", function() {
    document.getElementById("popupOverlay").style.display = "none";
});

function createCard(note) {
    const new_card_div = document.createElement("div");
    new_card_div.classList.add("card");
    new_card_div.dataset.id = note.id;
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    const element_title = document.createElement("h5");
    element_title.textContent = note.title;
    const element_text = document.createElement("p");
    element_text.textContent = note.text;
    cardBody.appendChild(element_title);
    cardBody.appendChild(element_text);
    new_card_div.appendChild(cardBody);
    document.getElementById("cards-container").appendChild(new_card_div);
}


document.getElementById("note_add").addEventListener("click", function () {
    const title = note_title.value.trim();
    const text = note_msg.value.trim();
    if (!title || !text) return;
    const note = {
        id: Date.now(),
        title: title,
        text: text
    };
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));
    createCard(note);
    note_title.value = "";
    note_msg.value = "";
});
