const add_button = document.getElementById("Add");
selected_list = [];

add_button.addEventListener("click", function () {
    document.getElementById("popup").style.display = "flex";
});


document.getElementById("closePopup").addEventListener("click", function(){
    document.getElementById("popup").style.display = "none";
});

document.getElementById("choosen").addEventListener("click", (e) => {
    if(e.type == "click"){
        current = e.target.closest(".item");
        if(current != null && current.dataset.value == "milk"){
            selected_list.push("milk");
        }
        if(current != null && current.dataset.value == "coffe"){
            selected_list.push("coffe");
        }
        if(current != null && current.dataset.value == "bread"){
            selected_list.push("bread");
        }
        if(current != null && current.dataset.value == "tomato"){
            selected_list.push("tomato");
        }
        if(current != null && current.dataset.value == "potato"){
            selected_list.push("potato");
        }
        if(current != null && current.dataset.value == "cream"){
            selected_list.push("cream");
        }
        if(current != null && current.dataset.value == "banana"){
            selected_list.push("banana");
        }
        if(current != null && current.dataset.value == "orange"){
            selected_list.push("orange");
        }
        if(current != null && current.dataset.value == "prawn"){
            selected_list.push("prawn");
        }
        if(current != null && current.dataset.value == "squid"){
            selected_list.push("squid");
        }
    }
});

document.getElementById("pre_list").addEventListener("click", function(){
    let arr_index = selected_list.length;
    const images = {
        milk: "milk.jpg",
        coffe: "coffe.jpg",
        bread: "bread.jpg",
        tomato: "tomato.jpg",
        potato: "potato.jpg",
        cream: "cream.jpg",
        banana: "banana.jpg",
        orange: "orange.jpg",
        squid: "squid.jpg",
        prawn: "prawn.jpg"
    };
    selected_list.forEach(item => {
        const existingCard = document.querySelector(`[data-id="${item}"]`);

        if (existingCard) {
            const countElem = existingCard.querySelector(".count");
            let count = parseInt(countElem.textContent);
            count++;
            countElem.textContent = count;
        } else {
            const card = document.createElement("div");
            card.classList.add("card");
            card.dataset.id = item;

            const body = document.createElement("div");
            body.classList.add("card-body");

            const title = document.createElement("h5");
            title.textContent = item;

            const repeat_ = document.createElement("span");
            repeat_.classList.add("count");
            repeat_.textContent = 1;

            const img = document.createElement("img");
            img.src = images[item];

            body.appendChild(title);
            body.appendChild(img);
            body.appendChild(repeat_);
            card.appendChild(body);

            document.getElementById("lst").appendChild(card);
        }
    });
    selected_list = [];
    document.getElementById("popup").style.display = "none";
});