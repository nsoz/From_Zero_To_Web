const note_msg = document.getElementById("new_note");
const note_title = document.getElementById("new_note_title");
const cardText = document.querySelector(".card-text");
const cardTitle = document.querySelector(".card-title");

document.getElementById("Add").addEventListener("click", function() {
    document.getElementById("popupOverlay").style.display = "block";
});

document.getElementById("closePopup").addEventListener("click", function() {
    document.getElementById("popupOverlay").style.display = "none";
});

document.getElementById("note_add").addEventListener("click", function(){
    const note_add_msg = note_msg.value;
    const note_add_title = note_title.value;
    const new_msg_content = document.createTextNode(note_add_msg);
    const new_title_content = document.createTextNode(note_title.value);
    const new_card_div = document.createElement("div");
    new_card_div.classList.add("card");
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    const element_title =  document.createElement("h5");
    element_title.appendChild(new_title_content);
    const element_text =  document.createElement("p");
    element_text.appendChild(new_msg_content);
    cardBody.appendChild(element_title);
    cardBody.appendChild(element_text);
    new_card_div.appendChild(cardBody);
    const curr_div = document.getElementById("cards-container");
    document.body.insertBefore(new_card_div, curr_div);
});