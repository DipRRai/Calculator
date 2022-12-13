displayPrev = document.querySelector('.displayPrev');
display = document.querySelector('.display');
nums = document.querySelectorAll('.num');
operations = document.querySelectorAll('.operation');
clear = document.querySelector('.clear');
equal = document.querySelector('.equal');
console.log(nums)

function input(e){
    x += this.textContent;
    display.textContent = x;
};

function operate(e){
    if ((currentOperation != "") & (x !="")){
        equalHandler(e);
        currentOperation = this.textContent;
    } else if (x !=""){
        currentOperation = this.textContent;
        y = display.textContent;
        displayPrev.textContent = y;
        x = "";
        display.textContent = "0";
    }
    console.log("x: "+x);
    console.log("y: "+y); 
    console.log("OP: "+currentOperation);
    
}

function clearHandler(e){
    reset();
    currentOperation = "";
    displayPrev.textContent = "";
    display.textContent = "0";
}

function reset(){
    x = "";
    y = "";
}

function equalHandler(e){
    if (x == ""){
        x = "0";
    }
    if (currentOperation == "+"){
        y = parseFloat(y)+parseFloat(x);
    } else if (currentOperation == "-"){
        y = parseFloat(y)-parseFloat(x);
    } else if (currentOperation == "*"){
        y = parseFloat(y)*parseFloat(x);
    } else if (currentOperation == "÷"){
        if (x==0){
            alert("Bruh stop trying to break the calculator")
        } else {
            y = parseFloat(y)/parseFloat(x);
        }
        
    }
    x = "";
    //currentOperation = "";
    displayPrev.textContent = y;
    display.textContent = "0";
    console.log("x: "+x);
    console.log("y: "+y); 
    console.log("OP: "+currentOperation);
}

nums.forEach(element => {
    element.addEventListener("click", input);
});

operations.forEach(element => {
    element.addEventListener("click", operate);
});

equal.addEventListener('click', equalHandler);
clear.addEventListener('click', clearHandler);

let x = "";
let y = "";
let currentOperation = "";