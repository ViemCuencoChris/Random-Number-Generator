const num = document.getElementById("numb");
const rangeNum = document.getElementById("rng");
const error_msg = document.getElementById("error");

function showMessage(message){
    error_msg.textContent =  message;

    setTimeout(() => {
            error_msg.textContent =  "";
        }, 1000);
};

document.getElementById("roll_btn").addEventListener("click", () => {
    const valueRange = rangeNum.value.trim();
    const parts = valueRange.split("-")

    if (!valueRange) {
        showMessage("Please enter a range");
        return;
    }

    if (parts.length != 2){
        showMessage("Please use format like: 0-10");
        return;
    }

    const firstNum = Number(parts[0].trim());
    const secondNum = Number(parts[1].trim());
    
    if (isNaN(firstNum) || isNaN(secondNum)){
        showMessage("Enter a Valid Number");
        return;
    }
    
    if (firstNum > secondNum) {
        showMessage("First number must be greater than the second number");
        return;
    }

    let r = Math.floor(Math.random() * (secondNum - firstNum + 1)) + firstNum;
    
    num.textContent = r;
});