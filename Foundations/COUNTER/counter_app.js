const countInput = document.getElementById("counter");
const IncreaseBtn = document.getElementById("increase");
const ReduceBtn = document.getElementById("reduce");
const ResetBtn = document.getElementById("reset");
//we link the variable to id for getting data inside of them

IncreaseBtn.addEventListener("click", function(){
    const counted_dig = countInput.textContent; //<p> We use textContent to get the data in the paragraph.
    console.log(counted_dig);
    let res = +counted_dig;
    console.log(res);
    res = res + 1;
    countInput.textContent = res;
});

ReduceBtn.addEventListener("click", function(){
    const counted_dig = countInput.textContent;
    let res = +counted_dig;
    res = res - 1;
    countInput.textContent = res;
});

ResetBtn.addEventListener("click", function(){
    countInput.textContent = 0;
});