const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const calculatebtn = document.getElementById("CALCULATE"); //get all veriable's id from htmll all of them on string form
const choosen_process = document.getElementById("choosen")
const resultArea = document.getElementById("result");

calculatebtn.addEventListener("click", function() {
    const number1 = num1Input.value;
    const number2 = num2Input.value;            //get client's veriables form from the relevant id
    const choosen = choosen_process.value;

    let dig1 = +number1; //casting to digit with unary+ operator
    let dig2 = +number2;

    if (choosen == "+")
        resultArea.textContent = dig1 + dig2;
    else if (choosen == "-")
        resultArea.textContent = dig1 - dig2;           //using resultArea id's teztContent func for change the resul 
    else if (choosen == "*")
        resultArea.textContent = dig1 * dig2;
    else if (choosen == "/") {
        if (dig2 === 0) resultArea.textContent = "err: div with 0!";
        else resultArea.textContent = dig1 / dig2;
    }
});
