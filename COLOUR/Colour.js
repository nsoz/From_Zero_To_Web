const GREENbTn = document.getElementById("GREEN");
const REDbTn = document.getElementById("RED");
const BLUEbTn = document.getElementById("BLUE");

function change_clour(flag){
    if(flag == 1){
        document.body.style.backgroundColor = "green";
        document.querySelector("h1").style.color = "black";
    }
    else if(flag == 2){
        document.body.style.backgroundColor = "red";
        document.querySelector("h1").style.color = "white";
    }
    else if(flag == 3){
        document.body.style.backgroundColor = "blue";
        document.querySelector("h1").style.color = "grey";
    }
};

GREENbTn.addEventListener("click", function(){
    let flag = 1;
    change_clour(flag);
});

REDbTn.addEventListener("click", function(){
    let flag = 2;
    change_clour(flag);
});

BLUEbTn.addEventListener("click", function(){
    let flag = 3;
    change_clour(flag);
});