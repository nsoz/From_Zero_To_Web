const photo_id = document.getElementById("photo");
const next_id = document.getElementById("next");
const prev_id = document.getElementById("prev");

let images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
let index = 0;

next_id.addEventListener("click", function(){
    index++;
    if(index > 4)
        index = 0;
    console.log(index);
    console.log(images[index]);
    photo_id.src=images[index];
});

prev_id.addEventListener("click", function(){
    index--;
    if(index < 0)
        index = 4;
    console.log(index);
    console.log(images[index]);
    photo_id.src=images[index];
});