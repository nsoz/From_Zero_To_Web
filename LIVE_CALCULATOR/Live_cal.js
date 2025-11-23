const result_id = document.getElementById("result");
const sum_id = document.getElementById("sum");
const extraction_id = document.getElementById("extraction");
const multiplication_id = document.getElementById("multiplication");
const dive_id = document.getElementById("dive");
const one_id = document.getElementById("1");
const two_id = document.getElementById("2");
const three_id = document.getElementById("3");
const four_id = document.getElementById("4");
const five_id = document.getElementById("5");
const six_id = document.getElementById("6");
const seven_id = document.getElementById("7");
const eight_id = document.getElementById("8");
const nine_id = document.getElementById("9");
const equal_id = document.getElementById("=");
const square_root_id = document.getElementById("√");
const zero_id = document.getElementById("0");
const comm_id = document.getElementById(".");
const del_id = document.getElementById("<-");
const clear_id = document.getElementById("Clear");
//equalde işlemlerde flag_com = 0 olacak unutma!!!
let flag_com = 0;
let process = "";
let tmp = 0;

function create_num(flag, result_id){
    current = result_id.textContent;
    if(current == "0" && flag != "." && flag != "C" && flag != "<")
        current = flag;
    else if(flag == "C")
        current = "0";
    else if(flag == "<"){
        if(current.charAt(current.length - 1) == ',')
            flag_com = 0;
        current = current.substr(0, (current.length - 1));
    }
    else if(flag == "." && flag_com == 0){
        current += flag;
        flag_com = 1;
    }
    else if(flag != ".")
        current += flag;
    result_id.textContent=current;
}

// function processer(flag)

one_id.addEventListener("click", function(){
    let flag = "1";
    create_num(flag, result_id);
});

two_id.addEventListener("click", function(){
    let flag = "2";
    create_num(flag, result_id);
});

three_id.addEventListener("click", function(){
    let flag = "3";
    create_num(flag, result_id);
});

four_id.addEventListener("click", function(){
    let flag = "4";
    create_num(flag, result_id);
});

five_id.addEventListener("click", function(){
    let flag = "5";
    create_num(flag, result_id);
});

six_id.addEventListener("click", function(){
    let flag = "6";
    create_num(flag, result_id);
});

seven_id.addEventListener("click", function(){
    let flag = "7";
    create_num(flag, result_id);
});

eight_id.addEventListener("click", function(){
    let flag = "8";
    create_num(flag, result_id);
});

nine_id.addEventListener("click", function(){
    let flag = "9";
    create_num(flag, result_id);
});

zero_id.addEventListener("click", function(){
    let flag = "0";
    create_num(flag, result_id);
});

comm_id.addEventListener("click", function(){
    let flag = "."
    create_num(flag, result_id);
});

clear_id.addEventListener("click", function(){
    let flag = "C"
    create_num(flag, result_id);
});

del_id.addEventListener("click", function(){
    let flag = "<";
    create_num(flag ,result_id);
});

sum_id.addEventListener("click", function(){
    if(process == "")
        tmp = +result_id.textContent;
    process = "+";
    flag_com = 0;
    result_id.textContent = 0;
});

dive_id.addEventListener("click", function(){
    if(process == "")
        tmp = +result_id.textContent;
    process = "/";
    flag_com = 0;
    result_id.textContent = 0;
});

extraction_id.addEventListener("click", function(){
    if(process == "")
        tmp = +result_id.textContent;
    process = "-";
    flag_com = 0;
    result_id.textContent = 0;
});

multiplication_id.addEventListener("click", function(){
    if(process == "")
        tmp = +result_id.textContent;
    process = "*";
    flag_com = 0;
    result_id.textContent = 0;
});

equal_id.addEventListener("click", function(){
    if(process == "")
        result_id.textContent = result_id.textContent;
    else if(process == "+"){
        let num = +result_id.textContent;
        tmp += num;
    }
    else if(process == "-"){
        let num = +result_id.textContent;
        tmp -= num;
    }
    else if(process == "*"){
        let num = +result_id.textContent;
        tmp *= num;
    }
    else if(process == "/"){
        let num = +result_id.textContent;
        if(num == 0){
            result_id.textContent = "div with 0 ??";
            return;
        }
        tmp /= num;
    }
    result_id.textContent = tmp + "";
    flag_com = 0;
    process = "";
    tmp = 0;
});


square_root_id.addEventListener("click", function(){
    let ret = result_id.textContent;
    result_id.textContent = Math.sqrt(ret) + "";
});